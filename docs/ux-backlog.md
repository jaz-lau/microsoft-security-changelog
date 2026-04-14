# UX Backlog

Open suggestions from the UX review session. Items are ranked roughly by impact-to-effort.
Each entry has an effort estimate, an impact assessment, and concrete steps so picking one up later is easy.

---

## High priority

### 0. SHA-based delta import for `fetch-solutions.mjs`

**Effort:** 1–2 hours · **Impact:** High (data stability, manual edits preserved) · **Risk:** Low

Today's import is a full re-fetch every run — `fetch-solutions.mjs` re-downloads all ~900 `ReleaseNotes.md` files and overwrites `solutions.js` from scratch. Two consequences:

- **Manual edits to `solutions.js` are lost** on the next re-import (the SAP fix would have been overwritten if the import script hadn't also been patched).
- **Descriptions can drift** when `cleanText()` changes — even one tweak re-processes every entry.

**Recommended approach: SHA-based delta**

1. New file `src/data/solutions.meta.json` storing the last-known GitHub blob SHA per solution.
2. Single API call to `https://api.github.com/repos/Azure/Azure-Sentinel/git/trees/master?recursive=1` to fetch all current SHAs in one request (replaces the 900-fetch list).
3. Dynamically `await import('../src/data/solutions.js')` to load existing entries.
4. For each `Solutions/*/ReleaseNotes.md`:
   - SHA matches stored → keep existing entries byte-identical (no fetch, no re-parse)
   - SHA differs / new file → fetch markdown, parse, replace
   - Solution missing from current tree → drop locally
5. Write updated `solutions.js` AND updated `solutions.meta.json`.

**Guarantees this delivers:**

| Scenario | Behavior |
|---|---|
| Unchanged upstream | Local entries stay byte-identical. |
| Upstream typo fix or new entry | Only that solution re-fetched. |
| You change `cleanText()` | Existing entries stay the same. To force re-process, delete `solutions.meta.json`. |
| Manual edit to a description | Preserved as long as upstream doesn't touch that file. |
| Solution added upstream | Auto-discovered, fetched, added. |
| Solution removed upstream | Removed locally. |

**Bonus:** ~900 raw fetches drop to ~5–20 typical re-fetches per run. Bandwidth and rate-limit risk both vanish. Single Trees API call replaces the manual `/tmp/solution-names.txt` step.

**Files to touch:** [scripts/fetch-solutions.mjs](../scripts/fetch-solutions.mjs), new [src/data/solutions.meta.json](../src/data/solutions.meta.json), [docs/updating-data.md](updating-data.md) (process update).

---

### 1. Mobile / responsive nav

**Effort:** 1–2 hours · **Impact:** Medium-high (depends on traffic) · **Risk:** Low

The nav is now: logo + 4 links + dropdown + 2-line timestamp + full search button with label + kbd. It works at 1280px+ but will overflow on tablets and definitely on phones. Worth doing **before** any external traffic ever hits the site, because once people use it on phones and bounce, you don't get them back.

**Two reasonable approaches:**

- **Quick:** below ~1100px, hide the timestamp text and the search button label, keep just `🔍 ⌘K`. Below ~768px, collapse the link list into a hamburger.
- **Better:** dedicated mobile nav with the search button as a pill at the top of the content area on small screens.

**Files to touch:** `src/components/Nav.jsx`, possibly add `src/utils/useMediaQuery.js` helper hook.

---

## Worth doing

### 2. Build-time data validation

**Effort:** 1 hour · **Impact:** Low until something breaks, then High · **Risk:** None

The `_origIndex`-based update IDs assume nobody reorders entries inside `updates: [...]` in the data files. If someone does, every old palette deep-link breaks silently. A small build-time validator (or even a runtime warning in dev) that hashes summaries and warns on collisions would catch this.

**Should also validate:**

- Every update has a non-empty `summary`
- `month` matches the `MONTH_NAMES` format (e.g. `Apr 2026`)
- `severity` is one of `critical | important | minor`
- `status` is one of `ga | preview | change` (or absent)
- Each `product` value has an entry in `PRODUCT_SLUG`

**Where to put it:** A Vite plugin in `vite.config.js` that validates all `src/data/platform-*.js` files at server-start and build time. Throws on validation errors so the build fails loudly.

### 3. Chip / pill style consolidation

**Effort:** 30–45 minutes · **Impact:** Low (polish) · **Risk:** None

The page-level filter chips (`src/styles/components.css` lines 1–25) and the palette filter pills (`src/components/CommandPalette.jsx`) have slightly different active states, border-radius, padding, and font weight. Pick one and make them consistent.

**Suggested:** standardize on the existing `.chip` class. Update CommandPalette to use `className="chip"` plus `chip active` for the active state. Delete the inline pill styles.

### 4. Empty-state polish for no-data months and palette browse mode

**Effort:** 30 minutes · **Impact:** Low · **Risk:** None

Two small things:

- The current month already shows "No updates released by Microsoft yet this month" — that's nice. Make sure it's also shown when filters narrow to zero updates *for the current month* (currently might just hide the month entirely).
- The palette's "Updates" filter with no query shows the first 50 results. Add a small "Showing 50 of 287" hint somewhere — currently the user has no idea how many there really are.

---

## Only if you have time

### 5. Window-event coupling cleanup

**Effort:** 1–2 hours · **Impact:** Low (internal only) · **Risk:** Low

Replace the remaining window-level custom events (`palette:open`, `pendingUpdate`, `showSolution`, `pendingSolution`) with a small Zustand store or React context. Mostly an internal refactor — no user-visible change.

**Defer until you have a 6th event to add.** Right now there are 4, which is the boundary where this starts being worth it but isn't urgent.

**Note:** the search consolidation work already deleted the `floatingSearch` / `topSearch` events, so the count is lower than it was.

---

## Not worth doing

### Defender dropdown label rewording

You picked `Defender for …` deliberately. Even though it reads slightly oddly, it's a conscious choice and the alternative (`Defender ▾` or `Defender Suite ▾`) doesn't actually solve a real problem. Leave it.

### Status pill restyle

Already cohesive, no friction. Skip.

### Per-route page transitions / animations

Tempting but adds latency-feel. The current hash-routing is snappy and crisp. Adding fade/slide transitions would slow it down without adding clarity. Skip.

---

## How to use this file

When you're ready to pick something up, the priority order above is roughly:

1. Mobile nav (the only "ship before traffic" item left)
2. Build-time data validation (cheap insurance against silent breakage)
3. Chip consolidation (visual polish, easy)
4. Empty-state polish (small but noticeable)
5. Event-coupling cleanup (only when the surface area grows)

Skip the "Not worth doing" section unless your priorities shift.
