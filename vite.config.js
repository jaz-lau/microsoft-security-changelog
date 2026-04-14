import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Compute "data last updated" — the most recent of:
//   1) The actual solutions fetch timestamp from src/data/_lastFetched.json (written by
//      scripts/fetch-solutions.mjs whenever it runs)
//   2) The mtime of any platform-*.js file (these are manually maintained, so mtime is
//      the genuine update signal for them)
//
// Deliberately EXCLUDES the mtime of solutions.js itself — manual edits to that file
// (e.g. one-off bug fixes) shouldn't masquerade as a fresh fetch.
function getDataLastUpdated() {
  const dataDir = path.join(__dirname, 'src/data')
  let latest = 0

  // 1) Solutions fetch timestamp
  const metaPath = path.join(dataDir, '_lastFetched.json')
  if (fs.existsSync(metaPath)) {
    try {
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))
      const t = new Date(meta.fetchedAt).getTime()
      if (Number.isFinite(t) && t > latest) latest = t
    } catch {}
  }

  // 2) Platform file mtimes (manually maintained)
  for (const f of fs.readdirSync(dataDir)) {
    if (!f.startsWith('platform-') || !f.endsWith('.js')) continue
    const stat = fs.statSync(path.join(dataDir, f))
    if (stat.mtimeMs > latest) latest = stat.mtimeMs
  }

  return latest ? new Date(latest).toISOString() : new Date().toISOString()
}

export default defineConfig({
  plugins: [react()],
  define: {
    __DATA_LAST_MODIFIED__: JSON.stringify(getDataLastUpdated()),
  },
})
