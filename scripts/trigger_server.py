#!/usr/bin/env python3
"""
trigger_server.py

Purpose:
    Runs on your device as a lightweight HTTP server. Listens for trigger
    requests from the Synology NAS watcher container. When a valid trigger
    is received, runs agent_update.py to update the platform-*.js files,
    then runs npm build and git push.

Security:
    - Validates a shared secret header (X-Agent-Secret) on every request
    - Only accepts POST requests to /trigger
    - Runs agent as a background thread so the HTTP response returns immediately
    - Binds to 0.0.0.0 so it's reachable from the NAS on your local network

What it does:
    1. Receives POST /trigger from check_learn_changes.py on the NAS
    2. Validates the X-Agent-Secret header
    3. Runs agent_update.py (Gemma 4 via Ollama)
    4. After agent completes, runs npm run build + git push
    5. Logs all activity to logs/updates.log

Usage:
    python3 scripts/trigger_server.py

To run in the background:
    nohup python3 scripts/trigger_server.py >> logs/trigger_server.log 2>&1 &

To restart automatically on reboot (add to crontab):
    @reboot cd /path/to/repo && nohup python3 scripts/trigger_server.py >> logs/trigger_server.log 2>&1 &

Requirements:
    pip install flask ollama requests

Configuration:
    Set AGENT_SECRET environment variable — must match the value in
    .env file. Defaults to 'changeme' if not set (change this!).

Placement: scripts/trigger_server.py (runs on device)
"""

import os
import subprocess
import threading
from datetime import datetime
from pathlib import Path

from flask import Flask, request, jsonify

# ── Config ─────────────────────────────────────────────────────────────────────

REPO_ROOT    = Path(__file__).parent.parent
LOGS_DIR     = REPO_ROOT / "logs"
UPDATE_LOG   = LOGS_DIR / "updates.log"
AGENT_SCRIPT = REPO_ROOT / "scripts" / "agent_update.py"
POST_AGENT   = REPO_ROOT / "scripts" / "post_agent.sh"

PORT          = 5001
AGENT_SECRET  = os.environ.get("AGENT_SECRET", "changeme")

# Volta binary path — reads VOLTA_HOME env var, falls back to ~/.volta
_volta_home = os.environ.get("VOLTA_HOME", str(Path.home() / ".volta"))
VOLTA_BIN   = str(Path(_volta_home) / "bin")

# Prevent multiple agent runs overlapping
_agent_running = False
_agent_lock    = threading.Lock()

# ── Logging ────────────────────────────────────────────────────────────────────

app = Flask(__name__)

def log(msg: str) -> None:
    """Print a timestamped message and append to logs/updates.log."""
    ts = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line, flush=True)
    try:
        LOGS_DIR.mkdir(exist_ok=True)
        with UPDATE_LOG.open("a", encoding="utf-8") as f:
            f.write(line + "\n")
    except Exception:
        pass


# ── Agent runner ───────────────────────────────────────────────────────────────

def run_agent_and_push() -> None:
    """Run agent_update.py then post_agent.sh in a background thread."""
    global _agent_running

    env = os.environ.copy()
    env["PATH"] = VOLTA_BIN + ":" + env.get("PATH", "")

    try:
        log("Agent started.")

        # Step 1 — run the agent (updates platform-*.js files)
        result = subprocess.run(
            ["python3", str(AGENT_SCRIPT)],
            cwd=str(REPO_ROOT),
            env=env,
        )

        if result.returncode != 0:
            log(f"WARNING: agent exited with code {result.returncode}")
            return

        # Step 2 — build and push (npm run build + git push)
        log("Agent finished. Running build and push...")
        push_result = subprocess.run(
            ["bash", str(POST_AGENT)],
            cwd=str(REPO_ROOT),
            env=env,
        )

        if push_result.returncode == 0:
            log("Build and push completed successfully.")
        else:
            log(f"WARNING: post_agent.sh exited with code {push_result.returncode}")

    except Exception as e:
        log(f"ERROR in agent run: {e}")
    finally:
        with _agent_lock:
            _agent_running = False


# ── HTTP endpoints ─────────────────────────────────────────────────────────────

@app.route("/trigger", methods=["POST"])
def trigger():
    """Receive trigger from NAS watcher and run the agent."""
    global _agent_running

    # Validate shared secret
    secret = request.headers.get("X-Agent-Secret", "")
    if secret != AGENT_SECRET:
        log("WARNING: trigger received with invalid secret — ignored")
        return jsonify({"error": "forbidden"}), 403

    # Prevent overlapping runs
    with _agent_lock:
        if _agent_running:
            log("Trigger received but agent is already running — ignored")
            return jsonify({"status": "already running"}), 429
        _agent_running = True

    # Log what triggered us
    body = request.get_json(silent=True) or {}
    changed = body.get("changed", [])
    if changed:
        for label in changed:
            log(f"TRIGGER: {label}")
    else:
        log("TRIGGER: received from NAS watcher")

    # Run agent in background thread so HTTP response returns immediately
    thread = threading.Thread(target=run_agent_and_push, daemon=True)
    thread.start()

    return jsonify({"status": "agent started"}), 200


@app.route("/health", methods=["GET"])
def health():
    """Simple health check endpoint — useful for monitoring."""
    return jsonify({
        "status": "ok",
        "agent_running": _agent_running,
    }), 200


# ── Main ───────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    log(f"Trigger server started on port {PORT}")
    log(f"Waiting for triggers from NAS watcher...")

    if AGENT_SECRET == "changeme":
        log("WARNING: AGENT_SECRET is set to default 'changeme' — set a real secret!")

    app.run(host="0.0.0.0", port=PORT, debug=False)
