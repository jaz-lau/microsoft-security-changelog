# Updating the data

Microsoft Security Changelog has two independent data sources, each with its own update process.

## 1. solutions.js (automated)

`src/data/solutions.js` is generated from `Azure/Azure-Sentinel` Solution `ReleaseNotes.md` files. **Do not edit by hand.**

```bash
export PATH="/Users/jason/.volta/bin:$PATH"   # Volta-managed Node, required
node scripts/fetch-solutions.mjs /tmp/solution-names.txt
```

If `/tmp/solution-names.txt` is missing, regenerate it:

```bash
git clone --depth 1 https://github.com/Azure/Azure-Sentinel /tmp/sentinel-solutions-list
cd /tmp/sentinel-solutions-list && \
  git ls-tree -r --name-only HEAD Solutions/ | \
  grep -E "^Solutions/[^/]+/ReleaseNotes\.md$" | \
  sed "s|Solutions/||;s|/ReleaseNotes\.md||" > /tmp/solution-names.txt
```

The script fetches concurrently (25 at a time), parses the markdown tables, normalises dates to DD-MM-YYYY, and writes ~430 solutions / ~1700 entries. Takes ~30 seconds.

After the fetch, the script logs any solution names that were auto-split (no `NAME_OVERRIDES` entry). For each flagged name:

1. Look up the correct brand name (check the solution's MS Learn page or web search).
2. If the auto-split is wrong, add an override to `NAME_OVERRIDES` in `scripts/fetch-solutions.mjs` and re-run the script.
3. If the auto-split is correct, add it to `NAME_OVERRIDES` anyway (mapping to the same value) so it is not flagged again on future runs.
4. Keep `NAME_OVERRIDES` entries sorted alphabetically by key.

## 2. platform-*.js (manual, sourced from MS Learn)

Eight files, one per product. Each is a hand-curated changelog where every entry has a `summary`, `detail`, and `whyItMatters`. **Source of truth is the official MS Learn "What's new" page** for each product.

| File | Product | MS Learn URL |
|---|---|---|
| `platform-mde.js` | Defender for Endpoint | <https://learn.microsoft.com/defender-endpoint/whats-new-in-microsoft-defender-endpoint> (features) + <https://learn.microsoft.com/defender-endpoint/microsoft-defender-endpoint-releases> (builds) |
| `platform-mdi.js` | Defender for Identity | <https://learn.microsoft.com/defender-for-identity/whats-new> |
| `platform-mdo.js` | Defender for Office 365 | <https://learn.microsoft.com/defender-office-365/defender-for-office-365-whats-new> |
| `platform-mda.js` | Defender for Cloud Apps | <https://learn.microsoft.com/defender-cloud-apps/release-notes> |
| `platform-mdfc.js` | Defender for Cloud | <https://learn.microsoft.com/azure/defender-for-cloud/release-notes> |
| `platform-purview.js` | Purview | <https://learn.microsoft.com/purview/whats-new> |
| `platform-sentinel.js` | Sentinel | <https://learn.microsoft.com/azure/sentinel/whats-new> |
| `platform-xdr.js` | Defender XDR | <https://learn.microsoft.com/defender-xdr/whats-new> + <https://learn.microsoft.com/unified-secops-platform/whats-new> |

`platform-all.js` is a derived merge — never edit it directly.

### Workflow per file

1. **Read the existing file** to find the most recent month entry. Note which months are already covered and which items are in each month.
2. **Fetch the MS Learn page in full.** Search-style tools (including the Microsoft Learn MCP server's `microsoft_docs_search`) truncate long pages and may miss items — prefer a direct fetch (`microsoft_docs_fetch`, `curl`, browser save, or any HTML→markdown extractor).
3. **Diff** the published months/items against what's in the file. For the current month, items can be added incrementally throughout the month — re-check items already present rather than assuming the month is "done".
4. **Add new entries** in the existing shape (see below). New months go at the **top** of `PLATFORM_UPDATES` (most recent first).
5. **Empty stub policy:** if a month has no published content yet for a product, do **not** create an empty `{ products: [{ ..., updates: [], releases: [] }] }` stub — leave the month out entirely. Empty stubs render as visual noise on the timeline.

### Entry shape

```js
{
  month: "Apr 2026",                           // "MMM YYYY", three-letter month
  products: [
    {
      product: "Microsoft Defender for X",     // full product name
      icon: "🛡️",                              // keep consistent across months for same product
      releases: [ /* MDE/MDI only — build/version table */ ],
      updates: [
        {
          severity: "important",               // "critical" | "important" | "minor"
          status: "ga",                        // "ga" | "preview" | "change" | "unspecified"
          summary: "One-line headline",        // shown collapsed
          detail: "Factual description from the MS Learn page. May be a string or string[] for bullet lists.",
          whyItMatters: "The 'so what' — why a SOC team should care. Original analysis, not copied from MS Learn. May be a string or string[] paired 1:1 with detail array.",
          actionNote: "Optional — only when there's a deadline or required customer action.",
        },
      ],
    },
  ],
}
```

**Severity guidance** — `critical` = breaking change or required action with deadline; `important` = new GA feature or major preview; `minor` = doc/UI tweaks, regional rollouts, score recalibrations.

**Status guidance** — `ga` = generally available; `preview` = public preview; `change` = breaking/upcoming change requiring action; `unspecified` = feature update with no preview/GA distinction.

**`detail` and `whyItMatters` can be either a string or an array.** When using arrays, they should be paired 1:1 (same length) — the renderer assumes this. Use arrays for multi-part announcements (e.g. "X new alerts: 7 Entra, 3 AD" → list each).

**Tone for `whyItMatters`** — explain the security/operational impact in one or two sentences. Avoid marketing language and parroting MS Learn copy. Think "what would a SOC lead need to know to decide whether to read further?".

**MDE-specific:** `releases` array uses `{ platform, build, url }` (Windows/macOS/Linux). Builds come from the release notes page, not the what's-new page.

**MDI-specific:** `releases` array uses `{ version, notes }` for sensor versions.

## Verifying

Always run a build after edits:

```bash
export PATH="/Users/jason/.volta/bin:$PATH"
npm run build
```

The build is fast (~500ms) and will catch JS syntax errors. There are no tests.

## Node toolchain

Node is managed by Volta. **Always** prepend `/Users/jason/.volta/bin` to `PATH` before any `npm` or `node` command, or you'll hit the system Node and get version mismatches.
