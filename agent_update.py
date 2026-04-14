#!/usr/bin/env python3
"""
agent_update.py

Purpose:
    Uses a locally running Gemma 4 language model (via Ollama) to update the
    eight platform-*.js data files with new content from Microsoft Defender stack
    and Sentinel "What's new" MS Learn pages.

What it does:
    1. Triggered automatically by check_learn_changes.py when MS Learn pages change.
       Can also be run manually at any time.
    2. Reads docs/updating-data.md as its system prompt — this file contains the
       full entry schema, severity/status guidance, tone instructions for
       whyItMatters, per-file workflow, and all edge case rules.
    3. Sends a task to Gemma 4 and runs an agentic tool-calling loop. The model
       autonomously decides which files to read, which URLs to fetch, what is new
       versus already present, and writes updated JS entries.
    4. After all 8 files are processed, runs npm run build to verify no syntax
       errors were introduced, then pushes to GitHub — triggering an automatic
       Cloudflare Pages redeploy.
    5. Logs which platform files were written to logs/updates.log.

Why a local LLM (not a cloud API):
    The whyItMatters field requires genuine security analysis — not a paraphrase
    of MS Learn copy. Gemma 4 running locally is free, has no usage limits,
    keeps all data on your machine, and produces sufficient quality for this task.

Tools available to the agent (and nothing else):
    read_file(path)          — reads any repo file by relative path
    fetch_url(url)           — fetches a public URL as plain text
    write_file(path,content) — writes content to a repo file
    run_command(command)     — runs a shell command (build + git push)

Model selection (edit MODEL below):
    gemma4:27b — best quality, requires 32 GB RAM
    gemma4:e4b — good quality, requires 16 GB RAM

Usage:
    python3 scripts/agent_update.py

Requirements:
    pip install ollama requests
    ollama pull gemma4:27b   (or gemma4:e4b)

Placement: scripts/agent_update.py
"""

import os
import subprocess
import requests
from datetime import datetime, date
from pathlib import Path
from ollama import chat, ChatResponse

# ── Config ─────────────────────────────────────────────────────────────────────

REPO_ROOT   = Path(__file__).parent.parent
UPDATING_MD = REPO_ROOT / "docs" / "updating-data.md"
LOGS_DIR    = REPO_ROOT / "logs"
UPDATE_LOG  = LOGS_DIR / "updates.log"
MODEL       = "gemma4:27b"   # change to gemma4:e4b if you have 16 GB RAM

# Volta binary path — reads VOLTA_HOME env var, falls back to ~/.volta
_volta_home = os.environ.get("VOLTA_HOME", str(Path.home() / ".volta"))
VOLTA_BIN   = str(Path(_volta_home) / "bin")

# Safety limit — 8 files × ~8 tool calls each + buffer.
# platform-xdr.js fetches two URLs so gets extra headroom.
MAX_TURNS = 100

# ── Logging ────────────────────────────────────────────────────────────────────

def log_update(msg: str) -> None:
    """Append a timestamped line to logs/updates.log."""
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line, flush=True)
    try:
        LOGS_DIR.mkdir(exist_ok=True)
        with UPDATE_LOG.open("a", encoding="utf-8") as f:
            f.write(line + "\n")
    except Exception:
        pass


# Module-level set populated by write_file, read by run_agent for summary logging
files_written: set[str] = set()

# ── Tool definitions ────────────────────────────────────────────────────────────

def read_file(path: str) -> str:
    """Read a file from the repository.

    Args:
        path: Relative path from repo root, e.g. src/data/platform-xdr.js

    Returns:
        The full text content of the file, or an error message.
    """
    full = REPO_ROOT / path
    if not full.exists():
        return f"ERROR: {path} does not exist"
    try:
        return full.read_text(encoding="utf-8")
    except Exception as e:
        return f"ERROR reading {path}: {e}"


def write_file(path: str, content: str) -> str:
    """Write content to a file in the repository.

    For platform-*.js files, enforces append-only at the code level:
    every summary: value present in the existing file must still be present
    in the new content. If any existing summary is missing or changed the
    write is rejected and the file is left untouched.

    This is a hard guard, not just a prompt instruction — it prevents the
    agent from silently rewriting whyItMatters or other fields on entries
    that were already curated.

    Args:
        path: Relative path from repo root, e.g. src/data/platform-xdr.js
        content: The full file content to write

    Returns:
        Confirmation message or error describing what was rejected.
    """
    import re as _re

    full = REPO_ROOT / path
    full.parent.mkdir(parents=True, exist_ok=True)

    # Enforce append-only for platform data files
    is_platform = "platform-" in path and path.endswith(".js") and "platform-all" not in path
    if is_platform and full.exists():
        existing = full.read_text(encoding="utf-8")

        # Extract all summary values from the existing file
        existing_summaries = set(_re.findall(r'summary:\s*["\'](.+?)["\']', existing))

        if existing_summaries:
            new_summaries = set(_re.findall(r'summary:\s*["\'](.+?)["\']', content))
            missing = existing_summaries - new_summaries

            if missing:
                sample = sorted(missing)[:3]
                return (
                    f"ERROR: write rejected — append-only violation. "
                    f"{len(missing)} existing entr{'y' if len(missing) == 1 else 'ies'} "
                    f"would be removed or have their summary changed. "
                    f"Missing summaries (first {len(sample)}): {sample}. "
                    f"Only add new entries — never remove or modify existing ones."
                )

    try:
        full.write_text(content, encoding="utf-8")
        if is_platform:
            files_written.add(path)
        return f"OK: wrote {len(content)} chars to {path}"
    except Exception as e:
        return f"ERROR writing {path}: {e}"


def fetch_url(url: str) -> str:
    """Fetch the full content of a public URL as plain text.

    Always use this for MS Learn What's new pages. Never use search tools
    which truncate results and miss items.

    For platform-xdr.js specifically, call this twice and combine both pages:
      - https://learn.microsoft.com/defender-xdr/whats-new
      - https://learn.microsoft.com/unified-secops-platform/whats-new

    Args:
        url: The full URL to fetch

    Returns:
        The page content as plain text, capped at 80000 chars, or an error message.
    """
    try:
        r = requests.get(
            url,
            timeout=30,
            headers={"User-Agent": "Mozilla/5.0 (compatible; update-agent/1.0)"}
        )
        r.raise_for_status()
        content = r.text[:80000]
        if len(r.text) > 80000:
            content += "\n\n[TRUNCATED — page exceeded 80000 chars]"
        return content
    except Exception as e:
        return f"ERROR fetching {url}: {e}"


def run_command(command: str) -> str:
    """Run a shell command in the repository root directory.

    Use this to verify changes (npm run build) and publish them (git push).
    Volta-managed Node is automatically prepended to PATH.

    Args:
        command: The shell command to run

    Returns:
        Combined stdout and stderr output, capped at 3000 chars.
    """
    env = os.environ.copy()
    env["PATH"] = VOLTA_BIN + ":" + env.get("PATH", "")
    try:
        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True,
            cwd=str(REPO_ROOT),
            env=env,
            timeout=120,
        )
        output = (result.stdout + result.stderr).strip()
        if not output:
            return "(command completed with no output)"
        return output[:3000]
    except subprocess.TimeoutExpired:
        return "ERROR: command timed out after 120 seconds"
    except Exception as e:
        return f"ERROR running command: {e}"


# ── Tool registry ───────────────────────────────────────────────────────────────

TOOLS = [read_file, write_file, fetch_url, run_command]

AVAILABLE = {
    "read_file":    read_file,
    "write_file":   write_file,
    "fetch_url":    fetch_url,
    "run_command":  run_command,
}

# ── Agent ───────────────────────────────────────────────────────────────────────

def run_agent() -> None:
    LOGS_DIR.mkdir(exist_ok=True)

    # Reset the files_written tracker for this run
    global files_written
    files_written = set()

    system_prompt = UPDATING_MD.read_text(encoding="utf-8")
    today = date.today().strftime("%d %b %Y")

    messages = [
        {
            "role": "system",
            "content": system_prompt,
        },
        {
            "role": "user",
            "content": f"""Today is {today}.

Your task: update the platform-*.js files in src/data/ that have new content
on their MS Learn pages.

Work through each of the 8 files listed in your instructions one at a time:
1. Read the existing file to find the most recent month already covered
2. Fetch the MS Learn page(s) for that product using fetch_url
   - Always fetch the full page directly — never use search tools which truncate
   - For platform-xdr.js specifically: fetch BOTH pages and combine the content:
       * https://learn.microsoft.com/defender-xdr/whats-new
       * https://learn.microsoft.com/unified-secops-platform/whats-new
3. Compare what is on the page(s) against what is already in the file
4. If there are new months or new items within the current month, add them
5. Write the updated file using write_file
6. Move on to the next file

Strictly follow the rules in your instructions:
- Do not edit solutions.js or platform-all.js
- Do not create empty month stubs
- New months go at the TOP of PLATFORM_UPDATES (most recent first)
- Follow the exact entry shape: summary, detail, whyItMatters, severity, status
- whyItMatters must be original SOC-relevant analysis — not copied from MS Learn
- detail and whyItMatters may be strings or 1:1 paired arrays
- Use "MMM YYYY" format for month (e.g. "Apr 2026")
- Keep icons consistent for the same product across months

After all 8 files are processed:
1. Run: export PATH="/Users/jason/.volta/bin:$PATH" && npm run build
2. If the build passes, run these commands in sequence:
   git add src/data/platform-*.js && git commit -m "chore: platform updates {today}"
   git pull --rebase && git push
3. If the build fails, report the exact error — do not push broken code
""",
        }
    ]

    print(f"\n{'='*60}")
    print(f"  Platform update agent — {today}")
    print(f"  Model: {MODEL}")
    print(f"{'='*60}\n")

    turn = 0

    while turn < MAX_TURNS:
        turn += 1

        response: ChatResponse = chat(
            model=MODEL,
            messages=messages,
            tools=TOOLS,
            options={"temperature": 0.1},
        )

        messages.append(response.message)

        if response.message.content:
            preview = response.message.content[:400]
            print(f"\n[turn {turn}] Agent: {preview}{'...' if len(response.message.content) > 400 else ''}")

        # No tool calls — agent has decided it is done
        if not response.message.tool_calls:
            print(f"\n{'='*60}")
            print(f"Agent finished after {turn} turns.")
            print(f"Final message:\n{response.message.content}")
            print(f"{'='*60}\n")

            # Log which files were written to updates.log
            if files_written:
                for f in sorted(files_written):
                    log_update(f"  WRITTEN: {f}")
            else:
                log_update("  No platform files were written.")
            break

        # Execute each tool call and feed the result back into the conversation
        for tc in response.message.tool_calls:
            name = tc.function.name
            args = tc.function.arguments

            arg_preview = ", ".join(
                f"{k}={repr(str(v))[:60]}" for k, v in args.items()
            )
            print(f"  → {name}({arg_preview})")

            if name in AVAILABLE:
                result = AVAILABLE[name](**args)
            else:
                result = f"ERROR: unknown tool '{name}'"

            result_str = str(result)
            result_preview = result_str[:150].replace("\n", " ")
            print(f"    ← {result_preview}{'...' if len(result_str) > 150 else ''}")

            messages.append({
                "role": "tool",
                "tool_name": name,
                "content": result_str,
            })

    if turn >= MAX_TURNS:
        print(f"\nWARNING: reached max_turns safety limit ({MAX_TURNS}).")
        print("The agent may not have finished. Check the platform files manually.")


if __name__ == "__main__":
    run_agent()
