#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# post_agent.sh
#
# Purpose:
#   Runs on the Mac after agent_update.py completes. Builds the site and
#   pushes the updated platform-*.js files to GitHub, which triggers an
#   automatic Cloudflare Pages redeploy.
#
# Called by:
#   trigger_server.py after the agent finishes
#
# What it does:
#   1. Exports Volta-managed Node to PATH
#   2. Runs npm run build to verify no syntax errors
#   3. Stages all updated platform files
#   4. Commits with today's date
#   5. Pulls with rebase to avoid conflicts with GitHub Actions commits
#   6. Pushes to GitHub
#
# Placement: scripts/post_agent.sh (runs on Mac)
# ─────────────────────────────────────────────────────────────────────────────

set -e   # exit immediately if any command fails

# Navigate to repo root (works regardless of where script is called from)
cd "$(dirname "$0")/.."

# Add Volta-managed Node to PATH
VOLTA_HOME="${VOLTA_HOME:-$HOME/.volta}"
export PATH="$VOLTA_HOME/bin:$PATH"

echo "Running npm build..."
npm run build

echo "Staging platform files..."
git add src/data/platform-*.js

# Only commit if there are staged changes
if git diff --staged --quiet; then
    echo "No platform files changed — nothing to commit."
    exit 0
fi

TODAY=$(date "+%d %b %Y")
git commit -m "chore: platform updates $TODAY"

echo "Pulling latest changes..."
git pull --rebase

echo "Pushing to GitHub..."
git push

echo "Done — Cloudflare Pages will redeploy automatically."
