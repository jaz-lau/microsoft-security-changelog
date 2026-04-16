#!/usr/bin/env python3
"""
check_learn_changes.py

Purpose:
    Watches all Microsoft Defender stack and Sentinel "What's new" MS Learn pages
    for new content and triggers the platform update agent when changes are detected.

What it does:
    1. Runs continuously on an always-on machine as a background process.
    2. Every hour, fetches all 10 MS Learn source pages (11 URLs — Defender XDR
       and Defender for Endpoint each have two source pages).
    3. For each page, extracts the first H2 month heading and all H3 feature
       headings beneath it (the most recent month only), then MD5-hashes the list.
    4. Compares the hash against the last known value stored in data/learn-hashes.json.
    5. If any page hash changed (new month or new feature added this month),
       logs which product and tab changed to logs/updates.log, then immediately
       runs agent_update.py to process the new content.
    6. On first run with no existing hashes, establishes a baseline silently
       without triggering the agent — so it does not re-process existing content.

Why only the first H2 and its H3s are hashed (not the full page):
    MS Learn pages show the last 6 months of content. If we hashed all months,
    the hash would change when an old month rolls off the page — causing a false
    trigger. Hashing only the most recent month means:
      - New month appears at the top  → new H2 → hash changes → agent fires
      - New feature added this month  → new H3 → hash changes → agent fires
      - Old month rolls off the bottom → ignored → no false trigger

Usage:
    python3 scripts/check_learn_changes.py

To run in the background:
    nohup python3 scripts/check_learn_changes.py >> logs/watcher.log 2>&1 &

To restart automatically on machine reboot (add to crontab):
    @reboot cd /path/to/repo && nohup python3 scripts/check_learn_changes.py >> logs/watcher.log 2>&1 &

Requirements:
    pip install requests beautifulsoup4
"""

import hashlib
import json
import os
import re
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path

import requests
from bs4 import BeautifulSoup

# ── Config ─────────────────────────────────────────────────────────────────────

REPO_ROOT    = Path(__file__).parent.parent
HASHES_FILE  = REPO_ROOT / "data" / "learn-hashes.json"
LOGS_DIR     = REPO_ROOT / "logs"
UPDATE_LOG   = LOGS_DIR / "updates.log"
AGENT_SCRIPT = REPO_ROOT / "scripts" / "agent_update.py"

POLL_INTERVAL_SECONDS = 3600   # 1 hour

# Volta binary path — reads VOLTA_HOME env var, falls back to ~/.volta
_volta_home = os.environ.get("VOLTA_HOME", str(Path.home() / ".volta"))
VOLTA_BIN   = str(Path(_volta_home) / "bin")

# Products with a single source URL have tab=None.
# Products with multiple source URLs have a named tab for each —
# the tab name is included in the log when a change is detected.
PAGES = [
    {"product": "Defender for Endpoint",   "tab": "Features",        "url": "https://learn.microsoft.com/defender-endpoint/whats-new-in-microsoft-defender-endpoint"},
    {"product": "Defender for Endpoint",   "tab": "Releases",        "url": "https://learn.microsoft.com/defender-endpoint/microsoft-defender-endpoint-releases"},
    {"product": "Defender for Identity",   "tab": None,              "url": "https://learn.microsoft.com/defender-for-identity/whats-new"},
    {"product": "Defender for Office 365", "tab": None,              "url": "https://learn.microsoft.com/defender-office-365/defender-for-office-365-whats-new"},
    {"product": "Defender for Cloud Apps", "tab": None,              "url": "https://learn.microsoft.com/defender-cloud-apps/release-notes"},
    {"product": "Defender for Cloud",      "tab": None,              "url": "https://learn.microsoft.com/azure/defender-for-cloud/release-notes"},
    {"product": "Purview",                 "tab": None,              "url": "https://learn.microsoft.com/purview/whats-new"},
    {"product": "Microsoft Sentinel",      "tab": None,              "url": "https://learn.microsoft.com/azure/sentinel/whats-new"},
    {"product": "Defender XDR",            "tab": "Defender XDR",   "url": "https://learn.microsoft.com/defender-xdr/whats-new"},
    {"product": "Defender XDR",            "tab": "Unified SecOps",  "url": "https://learn.microsoft.com/unified-secops-platform/whats-new"},
]

# ── Logging ────────────────────────────────────────────────────────────────────

def log(msg: str) -> None:
    """Print a timestamped message to stdout and append it to logs/updates.log."""
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line, flush=True)
    try:
        LOGS_DIR.mkdir(exist_ok=True)
        with UPDATE_LOG.open("a", encoding="utf-8") as f:
            f.write(line + "\n")
    except Exception:
        pass


# ── Page parsing ───────────────────────────────────────────────────────────────

def fetch_page(url: str) -> str | None:
    try:
        r = requests.get(
            url,
            timeout=30,
            headers={"User-Agent": "Mozilla/5.0 (compatible; sentinel-changelog/1.0)"}
        )
        r.raise_for_status()
        return r.text
    except Exception as e:
        log(f"  WARNING: could not fetch {url}: {e}")
        return None


def extract_content_headings(html: str) -> list[str]:
    """Extract the first H2 month heading and all H3s directly beneath it.

    Returns a list like:
        ["h2:April 2026", "h3:Feature A", "h3:Feature B", ...]

    Stops as soon as the second H2 is encountered so only the most recent
    month is included in the hash.
    """
    soup = BeautifulSoup(html, "html.parser")
    headings = []
    in_first_month = False

    for tag in soup.find_all(["h2", "h3"]):
        text = tag.get_text(strip=True)

        if tag.name == "h2":
            is_month = re.match(
                r"^(January|February|March|April|May|June|July|"
                r"August|September|October|November|December)\s+\d{4}$",
                text
            )
            if is_month and not in_first_month:
                in_first_month = True
                headings.append(f"h2:{text}")
            elif in_first_month:
                break   # second month H2 reached — stop

        elif tag.name == "h3" and in_first_month:
            headings.append(f"h3:{text}")

    return headings


def hash_headings(headings: list[str]) -> str:
    """Return a short MD5 hash of the headings list."""
    return hashlib.md5("|".join(headings).encode()).hexdigest()[:12]


# ── Hash persistence ───────────────────────────────────────────────────────────

def load_hashes() -> dict:
    HASHES_FILE.parent.mkdir(parents=True, exist_ok=True)
    if HASHES_FILE.exists():
        try:
            return json.loads(HASHES_FILE.read_text(encoding="utf-8"))
        except Exception:
            return {}
    return {}


def save_hashes(hashes: dict) -> None:
    HASHES_FILE.write_text(
        json.dumps(hashes, indent=2, sort_keys=True),
        encoding="utf-8"
    )


def page_key(page: dict) -> str:
    """Unique key for storing hashes — includes tab name for multi-source products."""
    return f"{page['product']} ({page['tab']})" if page["tab"] else page["product"]


# ── Agent trigger ──────────────────────────────────────────────────────────────

def run_agent() -> None:
    """Invoke agent_update.py to process the detected changes."""
    env = os.environ.copy()
    env["PATH"] = VOLTA_BIN + ":" + env.get("PATH", "")
    try:
        result = subprocess.run(
            [sys.executable, str(AGENT_SCRIPT)],
            cwd=str(REPO_ROOT),
            env=env,
        )
        if result.returncode != 0:
            log(f"  WARNING: agent exited with code {result.returncode}")
    except Exception as e:
        log(f"  ERROR: failed to run agent: {e}")


# ── Poll cycle ─────────────────────────────────────────────────────────────────

def check_once(stored: dict) -> tuple[list[str], dict]:
    """
    Fetch all pages once and compare hashes.

    Returns:
        changed_labels: human-readable descriptions of what changed
        new_hashes:     updated hash dict to save if changes were found
    """
    changed_labels = []
    new_hashes = dict(stored)

    for page in PAGES:
        key  = page_key(page)
        html = fetch_page(page["url"])
        if html is None:
            continue

        headings = extract_content_headings(html)
        if not headings:
            log(f"  WARNING: no headings found for {key} — page structure may have changed")
            continue

        current_hash = hash_headings(headings)
        if current_hash != stored.get(key):
            month = next(
                (h.replace("h2:", "") for h in headings if h.startswith("h2:")),
                "unknown month"
            )
            # For multi-source products include the tab name; otherwise just product + month
            label = (
                f"{page['product']} — {page['tab']} tab ({month})"
                if page["tab"]
                else f"{page['product']} ({month})"
            )
            changed_labels.append(label)
            new_hashes[key] = current_hash

    return changed_labels, new_hashes


# ── Main loop ──────────────────────────────────────────────────────────────────

def main() -> None:
    LOGS_DIR.mkdir(exist_ok=True)
    log(f"Watcher started — polling {len(PAGES)} pages every {POLL_INTERVAL_SECONDS // 60} minutes")

    # On first run with no stored hashes, establish a baseline without triggering
    # the agent. This prevents re-processing all existing content on startup.
    # After baselining, sleep immediately so the loop doesn't fetch all pages
    # again straight away (that would be a double-fetch with no benefit).
    stored = load_hashes()
    just_baselined = False
    if not stored:
        log("No existing hashes — establishing baseline (agent will NOT be triggered)...")
        _, baseline = check_once({})
        save_hashes(baseline)
        log(f"Baseline set for {len(baseline)} pages. Watching for changes from now.")
        just_baselined = True
    else:
        log(f"Loaded hashes for {len(stored)} pages.")

    while True:
        # Skip the first poll if we just ran a baseline fetch above
        if just_baselined:
            just_baselined = False
            log(f"Next check in {POLL_INTERVAL_SECONDS // 60} minutes.")
            time.sleep(POLL_INTERVAL_SECONDS)
            continue

        try:
            stored = load_hashes()
            changed, new_hashes = check_once(stored)

            if changed:
                for label in changed:
                    log(f"UPDATED: {label}")
                save_hashes(new_hashes)
                run_agent()
            else:
                log("No changes detected.")

        except KeyboardInterrupt:
            log("Watcher stopped.")
            break
        except Exception as e:
            log(f"ERROR in poll cycle: {e}")

        log(f"Next check in {POLL_INTERVAL_SECONDS // 60} minutes.")
        time.sleep(POLL_INTERVAL_SECONDS)


if __name__ == "__main__":
    main()
