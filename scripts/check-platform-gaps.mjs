// ─────────────────────────────────────────────────────────────────────────────
// check-platform-gaps.mjs
//
// Purpose:
//   Reports which MS Learn "what's new" items are published upstream but are
//   not yet present in src/data/platform-*.js.
//
// Why this exists:
//   solutions.js is a pure mirror of upstream markdown, so it can be rebuilt
//   unattended. The platform-*.js files can't be — `whyItMatters` is original
//   analysis and severity/status are editorial calls. This script does the one
//   part that IS mechanical: turning "the files are out of date" into a
//   concrete, per-product worklist.
//
// It never writes to src/data. Report only.
//
// Usage:
//   export PATH="/Users/jason/.volta/bin:$PATH"
//   node scripts/check-platform-gaps.mjs              # all products
//   node scripts/check-platform-gaps.mjs mdi xdr      # named products only
//   node scripts/check-platform-gaps.mjs --months 6   # limit lookback (default 8)
//   node scripts/check-platform-gaps.mjs --json       # machine-readable output
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA_DIR = join(ROOT, "src", "data");

// Mirrors the table in docs/updating-data.md section 2. Keep in sync.
const SOURCES = [
  {
    key: "mde",
    product: "Defender for Endpoint",
    urls: [
      "https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint",
      "https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint-releases",
    ],
  },
  {
    key: "mdi",
    product: "Defender for Identity",
    urls: ["https://learn.microsoft.com/en-us/defender-for-identity/whats-new"],
  },
  {
    key: "mdo",
    product: "Defender for Office 365",
    urls: ["https://learn.microsoft.com/en-us/defender-office-365/defender-for-office-365-whats-new"],
  },
  {
    key: "mda",
    product: "Defender for Cloud Apps",
    urls: ["https://learn.microsoft.com/en-us/defender-cloud-apps/release-notes"],
  },
  {
    key: "mdfc",
    product: "Defender for Cloud",
    urls: ["https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes"],
  },
  {
    key: "purview",
    product: "Purview",
    urls: ["https://learn.microsoft.com/en-us/purview/whats-new"],
  },
  {
    key: "sentinel",
    product: "Sentinel",
    urls: ["https://learn.microsoft.com/en-us/azure/sentinel/whats-new"],
  },
  {
    key: "xdr",
    product: "Defender XDR",
    urls: [
      "https://learn.microsoft.com/en-us/defender-xdr/whats-new",
      "https://learn.microsoft.com/en-us/unified-secops-platform/whats-new",
    ],
  },
];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
const SHORT = MONTHS.map((m) => m.slice(0, 3));

// ── HTML helpers ─────────────────────────────────────────────────────────────

const ENTITIES = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  "#8217": "’", "#8216": "‘", "#8220": "“", "#8221": "”",
  "#8211": "–", "#8212": "—", "#39": "'", "#x27": "'", "#x2F": "/",
};

function decode(s) {
  return s.replace(/&(#x?[0-9a-fA-F]+|[a-z]+);/g, (m, e) => {
    if (ENTITIES[e] !== undefined) return ENTITIES[e];
    if (e[0] === "#") {
      const code = e[1] === "x" || e[1] === "X"
        ? parseInt(e.slice(2), 16)
        : parseInt(e.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    return m;
  });
}

// Heading text often wraps its label in <a>/<code>/<strong>, so strip tags
// rather than matching [^<]* — that silently truncated several MDI items.
function headingText(inner) {
  return decode(inner.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

function parseMonth(text) {
  const m = /^([A-Z][a-z]+)\.?\s+(\d{4})$/.exec(text.trim());
  if (!m) return null;
  // Some months are headed with the abbreviation ("Aug 2025" on the MDO page).
  const idx = MONTHS.indexOf(m[1]) !== -1 ? MONTHS.indexOf(m[1]) : SHORT.indexOf(m[1]);
  if (idx === -1) return null;
  return { label: `${SHORT[idx]} ${m[2]}`, year: Number(m[2]), monthIndex: idx };
}

// Learn wraps the article in <main>. Scoping to it keeps footer/nav lists out of
// the last month's block.
function articleBody(html) {
  const start = html.indexOf("<main");
  if (start === -1) return html;
  const open = html.indexOf(">", start);
  const end = html.indexOf("</main>", open);
  return html.slice(open + 1, end === -1 ? html.length : end);
}

// Top-level <li> only — nested "For more information" sublists would otherwise
// each count as an item.
function topLevelListItems(fragment) {
  const items = [];
  const re = /<li\b[^>]*>|<\/li>/g;
  let depth = 0;
  let openAt = 0;
  let m;
  while ((m = re.exec(fragment)) !== null) {
    if (m[0][1] !== "/") {
      if (depth === 0) openAt = m.index + m[0].length;
      depth++;
    } else if (depth > 0) {
      depth--;
      if (depth === 0) items.push(fragment.slice(openAt, m.index));
    }
  }
  return items;
}

// Purview bolds the release status rather than the feature name, so a bare
// <strong> grab yields a page of identical "In preview" rows.
const STATUS_LABEL = /^(new|newly added|updated?|changed?|change|in preview|preview|in development|general availability|generally available|ga|rolling out|deprecated?)\b/i;

// Table cells that are navigation prose rather than a feature name.
const NOISE = /^(see (enhancements|considerations|details)|release details are|for more information|learn more)\b/i;

function firstSentence(text, max = 140) {
  const stop = text.search(/[.:]\s/);
  const cut = stop > 20 ? text.slice(0, stop) : text;
  return cut.length > max ? `${cut.slice(0, max)}…` : cut;
}

// The item's headline. Learn bolds it ("(Preview) <strong>Feature name</strong>: …");
// where the bold is only a status word, keep it as a prefix and take the name
// from the text that follows. Otherwise fall back to the opening sentence.
function listItemTitle(li) {
  const strong = /<strong\b[^>]*>([\s\S]*?)<\/strong>/.exec(li);
  if (strong) {
    const label = headingText(strong[1]);
    if (label.length > 3 && !STATUS_LABEL.test(label)) return label;
    const rest = headingText(li.slice(strong.index + strong[0].length))
      .replace(/^[\s:–—-]+/, "");
    if (rest.length > 3) return label ? `${label}: ${firstSentence(rest)}` : firstSentence(rest);
  }
  return firstSentence(headingText(li));
}

// MDE lists a month's features as table rows (Type | Feature | Preview/GA |
// Description). The feature name is the linked cell.
function tableRowTitles(fragment) {
  const titles = [];
  for (const body of fragment.matchAll(/<tbody\b[^>]*>([\s\S]*?)<\/tbody>/g)) {
    for (const row of body[1].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)) {
      const cells = [...row[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/g)].map((c) => c[1]);
      if (!cells.length) continue;
      const linked = cells.find((c) => /<a\b/.test(c) && headingText(c).length > 8);
      const pick = linked ?? (cells.length > 1 ? cells[1] : cells[0]);
      const text = headingText(pick);
      if (text.length > 3 && !NOISE.test(text)) titles.push(firstSentence(text));
    }
  }
  return titles;
}

// Products differ in how they structure a month: MDI/MDFC use <h3> per item,
// XDR uses a flat bullet list, Purview uses <h3> categories each containing
// bullets, MDE uses a table. Emit leaves so they all compare at the same
// granularity.
function segmentItems(fragment, heading) {
  // A long <h3> is itself the item headline (MDI, MDFC) — its bullets are just
  // detail. A short one is a category (Purview: "Sensitivity labels"), so the
  // bullets underneath are the real items.
  const isCategory = !heading || heading.split(/\s+/).length <= 4;
  if (!isCategory) return [heading];

  const leaves = [
    ...topLevelListItems(fragment).map(listItemTitle),
    ...tableRowTitles(fragment),
  ].filter(Boolean);
  if (!leaves.length) return heading ? [heading] : [];
  return heading ? leaves.map((b) => `${heading} — ${b}`) : leaves;
}

// MDFC repeats each month as a summary table and then as detail sections, so
// the same item arrives twice. Compare on a truncated key because one copy is
// often the elided form of the other.
function dedupe(titles) {
  const seen = new Set();
  const out = [];
  for (const t of titles) {
    const key = normalise(t).slice(0, 70);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(t);
  }
  return out;
}

// Returns [{ label, year, monthIndex, items: [title] }] in page order.
function extractMonths(html) {
  const body = articleBody(html);
  const heads = [];
  const re = /<h([23])\b[^>]*>([\s\S]*?)<\/h\1>/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    heads.push({
      level: Number(m[1]),
      text: headingText(m[2]),
      start: m.index,
      end: m.index + m[0].length,
    });
  }

  const out = [];
  let current = null;

  for (let i = 0; i < heads.length; i++) {
    const h = heads[i];
    const until = i + 1 < heads.length ? heads[i + 1].start : body.length;
    const fragment = body.slice(h.end, until);

    if (h.level === 2) {
      const parsed = parseMonth(h.text);
      current = parsed ? { ...parsed, items: [] } : null;
      if (!parsed) continue;
      out.push(current);
      // Bullets sitting directly under the month heading (the XDR shape).
      current.items.push(...segmentItems(fragment, null));
    } else if (current && h.text) {
      current.items.push(...segmentItems(fragment, h.text));
    }
  }

  for (const month of out) month.items = dedupe(month.items);
  return out;
}

// ── platform-*.js parsing ────────────────────────────────────────────────────

// Reads the file as text rather than importing it. The files are data-only, but
// a text scan keeps this script immune to syntax errors in a half-edited file —
// exactly the state it gets run in.
function parsePlatformFile(key) {
  const path = join(DATA_DIR, `platform-${key}.js`);
  const src = readFileSync(path, "utf8");
  const months = [];
  const monthRe = /month:\s*"([^"]+)"/g;
  const marks = [];
  let m;
  while ((m = monthRe.exec(src)) !== null) marks.push({ label: m[1], at: m.index });

  for (let i = 0; i < marks.length; i++) {
    const start = marks[i].at;
    const end = i + 1 < marks.length ? marks[i + 1].at : src.length;
    const block = src.slice(start, end);
    // Include the releases fields too — MDE/MDI build rows live there, not in
    // updates, and would otherwise always report as unmatched.
    const text = [...block.matchAll(/(?:summary|detail|whyItMatters|actionNote|version|build|platform|notes):\s*(?:"([^"]*)"|\[([\s\S]*?)\])/g)]
      .map((x) => x[1] ?? x[2] ?? "")
      .join(" ");
    months.push({ label: marks[i].label, haystack: normalise(text) });
  }
  return { path, months };
}

// ── matching ─────────────────────────────────────────────────────────────────

const STOP = new Set(["the", "a", "an", "and", "or", "of", "for", "to", "in", "on",
  "is", "are", "now", "new", "with", "you", "your", "can", "it", "its", "as", "at",
  "by", "from", "this", "that", "be", "will", "has", "have", "microsoft", "defender",
  "preview", "ga", "generally", "available", "update", "updates", "support"]);

function normalise(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

function significantWords(title) {
  return [...new Set(normalise(title).split(" "))].filter((w) => w.length > 2 && !STOP.has(w));
}

// Fraction of the upstream title's distinctive words that appear anywhere in the
// month's existing entry text. Deliberately lenient: this flags candidates for a
// human to check, it does not decide anything.
function coverage(title, haystack) {
  const words = significantWords(title);
  if (words.length === 0) return 1;
  const hit = words.filter((w) => haystack.includes(w)).length;
  return hit / words.length;
}

const MATCH_THRESHOLD = 0.6;

// ── fetch ────────────────────────────────────────────────────────────────────

async function fetchPage(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; platform-gap-check)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

// ── main ─────────────────────────────────────────────────────────────────────

const argv = process.argv.slice(2);
const asJson = argv.includes("--json");
const monthsFlagIdx = argv.indexOf("--months");
const LOOKBACK = monthsFlagIdx !== -1 ? Number(argv[monthsFlagIdx + 1]) : 8;
const wanted = argv.filter((a, i) =>
  !a.startsWith("--") && !(monthsFlagIdx !== -1 && i === monthsFlagIdx + 1));

const targets = wanted.length ? SOURCES.filter((s) => wanted.includes(s.key)) : SOURCES;
if (!targets.length) {
  console.error(`No matching product. Known keys: ${SOURCES.map((s) => s.key).join(", ")}`);
  process.exit(1);
}

// Lookback window, computed from today.
const now = new Date();
const cutoff = new Date(now.getFullYear(), now.getMonth() - (LOOKBACK - 1), 1);
const inWindow = (m) => new Date(m.year, m.monthIndex, 1) >= cutoff;

const report = [];

for (const source of targets) {
  const local = parsePlatformFile(source.key);
  const localLabels = new Map(local.months.map((m) => [m.label, m]));

  // Merge months across a product's pages (MDE and XDR each have two).
  const merged = new Map();
  const errors = [];
  for (const url of source.urls) {
    let html;
    try {
      html = await fetchPage(url);
    } catch (err) {
      errors.push(`${url} — ${err.message}`);
      continue;
    }
    for (const month of extractMonths(html)) {
      if (!inWindow(month)) continue;
      const existing = merged.get(month.label);
      if (existing) {
        for (const item of month.items) {
          if (!existing.items.some((t) => normalise(t) === normalise(item))) {
            existing.items.push(item);
          }
        }
      } else {
        merged.set(month.label, { ...month, items: [...month.items] });
      }
    }
  }

  const upstream = [...merged.values()].sort(
    (a, b) => b.year - a.year || b.monthIndex - a.monthIndex);

  const missingMonths = [];
  const partialMonths = [];

  for (const month of upstream) {
    const localMonth = localLabels.get(month.label);
    if (!localMonth) {
      missingMonths.push({ month: month.label, items: month.items });
      continue;
    }
    const unmatched = month.items.filter(
      (t) => coverage(t, localMonth.haystack) < MATCH_THRESHOLD);
    if (unmatched.length) partialMonths.push({ month: month.label, items: unmatched });
  }

  report.push({
    key: source.key,
    product: source.product,
    file: `src/data/platform-${source.key}.js`,
    latestLocal: local.months[0]?.label ?? "(none)",
    latestUpstream: upstream[0]?.label ?? "(none)",
    missingMonths,
    partialMonths,
    errors,
  });
}

if (asJson) {
  console.log(JSON.stringify({ generated: now.toISOString(), lookback: LOOKBACK, report }, null, 2));
  process.exit(0);
}

let totalNew = 0;
let totalPartial = 0;

for (const r of report) {
  const newItems = r.missingMonths.reduce((n, m) => n + m.items.length, 0);
  const partialItems = r.partialMonths.reduce((n, m) => n + m.items.length, 0);
  totalNew += newItems;
  totalPartial += partialItems;

  console.log(`\n${"=".repeat(78)}`);
  console.log(`${r.product}  —  ${r.file}`);
  console.log(`local: ${r.latestLocal}   upstream: ${r.latestUpstream}`);
  console.log("=".repeat(78));

  for (const e of r.errors) console.log(`  ! fetch failed: ${e}`);

  if (!r.missingMonths.length && !r.partialMonths.length && !r.errors.length) {
    console.log("  up to date");
    continue;
  }

  for (const m of r.missingMonths) {
    console.log(`\n  MISSING MONTH — ${m.month}  (${m.items.length} item(s))`);
    for (const t of m.items) console.log(`    + ${t}`);
  }
  for (const m of r.partialMonths) {
    console.log(`\n  PARTIAL — ${m.month}  (${m.items.length} item(s) with no close match)`);
    for (const t of m.items) console.log(`    ? ${t}`);
  }
}

console.log(`\n${"─".repeat(78)}`);
console.log(`${totalNew} item(s) in missing months, ${totalPartial} unmatched in existing months.`);
console.log("PARTIAL items are heuristic — an item may be present under different wording.");
