import { RAW_SOLUTIONS } from './solutions.js'

const CONTENT_TYPE_ALIASES = {
  "analytic rules":   "Analytic Rule",
  "analytic rule":    "Analytic Rule",
  "analytical rules": "Analytic Rule",
  "analytical rule":  "Analytic Rule",
  "hunting queries":  "Hunting Query",
  "hunting query":    "Hunting Query",
  "data connectors":  "Data Connector",
  "data connector":   "Data Connector",
  "playbooks":        "Playbook",
  "playbook":         "Playbook",
  "workbooks":        "Workbook",
  "workbook":         "Workbook",
  "parsers":          "Parser",
  "parser":           "Parser",
}

export const GROUPS = [
  { id: "broken",         icon: "⚠️", title: "Broken detections & ingestion failures",    desc: "Rule bugs, connector failures, playbook permission issues, PII exposure" },
  { id: "schema-breaking",icon: "🔌", title: "Connector & schema breaking changes",        desc: "Table renames, removed connectors, GA promotions, new data types" },
  { id: "new-detections", icon: "🛡", title: "New detections & hunting content",           desc: "Brand new analytic rules and hunting queries added to the solution" },
  { id: "rule-improvements",icon:"📐",title: "Detection rule improvements",                desc: "Entity mapping, false positive reduction, query logic and coverage updates" },
  { id: "workbooks",      icon: "📊", title: "New & updated workbooks",                    desc: "New workbooks added and existing visualisations updated" },
  { id: "housekeeping",   icon: "⚙️", title: "Documentation & housekeeping",              desc: "Link fixes, text corrections, rebranding and metadata updates" },
]

function normaliseContentTypes(raw) {
  const seen = new Set()
  return raw
    .map(t => CONTENT_TYPE_ALIASES[t.toLowerCase()] || t)
    .filter(t => { if (seen.has(t)) return false; seen.add(t); return true })
}

export function parseDate(str) {
  const m = str?.match(/^(\d{2})-(\d{2})-(\d{4})$/)
  if (!m) return null
  const a = parseInt(m[1], 10)
  const b = parseInt(m[2], 10)
  const year = parseInt(m[3], 10)

  const ddmm = a >= 1 && a <= 31 && b >= 1 && b <= 12 ? new Date(year, b - 1, a) : null
  const mmdd = a >= 1 && a <= 12 && b >= 1 && b <= 31 ? new Date(year, a - 1, b) : null

  if (ddmm && !mmdd) return ddmm
  if (mmdd && !ddmm) return mmdd
  if (!ddmm && !mmdd) return null

  const now = Date.now()
  if (ddmm.getTime() > now && mmdd.getTime() <= now) return mmdd
  return ddmm
}

function classifyEntry(text, contentTypes) {
  const lower = text.toLowerCase()
  if (/breaking|table renamed|renamed.*→|removal of|removed.*connector|retired|retire(?!d label)/.test(lower)) return "critical"
  if (/ingestion fail|duplicate log|deprecated.*api|deprecated.*connector|deprecat.*data|rate limit.*fail|silent.*fail|fix.*connector|connector.*fix/.test(lower)) return "critical"
  if (/fix.*saving|saving.*fix|rule.*fail|fail.*rule|workbook.*fail|fail.*workbook|loading.*fail|fail.*load/.test(lower)) return "critical"
  if (contentTypes.includes("Playbook") && /fix|permission|auth|credential/.test(lower)) return "critical"
  if (/missing.*ttp|missing.*detection|missing.*column|close.*gap|detection gap|fix.*detection|false negative/.test(lower)) return "critical"
  if (/pii|personal.*data|hardcoded.*value|sample.*value/.test(lower)) return "critical"
  if (/general availability|moved.*preview.*ga|promoted.*ga|preview to ga|preview.*general/.test(lower)) return "critical"
  if (contentTypes.includes("Data Connector") && /\bnew\b|added|cloudwatch|cases|data type/.test(lower)) return "critical"
  if (/\bnew\b.*\b(analytic|rule|hunting|query|detection)\b|\b(analytic|rule|hunting|query|detection)\b.*\bnew\b|added.*rule|added.*query/.test(lower)) return "important"
  if (/entity mapping|field mapping|false positive|query logic|reduce.*noise|exclude.*private|added.*mapping/.test(lower)) return "important"
  if (/bug fix|fix.*bug|\bfixed\b|\bfix\b/.test(lower) && (contentTypes.includes("Analytic Rule") || contentTypes.includes("Hunting Query"))) return "important"
  if (contentTypes.includes("Workbook") && /\bnew\b|added/.test(lower)) return "important"
  if (contentTypes.includes("Data Connector") && /connectivity|criteria|updated.*connector|connector.*updated/.test(lower)) return "important"
  return "minor"
}

export function groupEntry(text, contentTypes, severity) {
  const lower = text.toLowerCase()
  if (severity === "critical") {
    if (contentTypes.includes("Data Connector") || /connector|table renamed|renamed.*→|removal of|removed.*connector|retired|general availability|moved.*preview|promoted.*ga|data type|new.*data/.test(lower))
      return "schema-breaking"
    return "broken"
  }
  if (severity === "important") {
    if (/\bnew\b.*\b(analytic|rule|hunting|query|detection)\b|\b(analytic|rule|hunting|query|detection)\b.*\bnew\b|added.*rule|added.*query/.test(lower))
      return "new-detections"
    if (contentTypes.includes("Workbook") || /workbook/.test(lower))
      return "workbooks"
    return "rule-improvements"
  }
  return "housekeeping"
}

export function isNewSolution(sol) {
  const lower = sol.entries[0]?.text?.toLowerCase() || ""
  if (/initial solution release|first release|initial release/.test(lower)) return true
  return new Set(sol.entries.map(e => e.version)).size === 1
}

function processSolution(raw) {
  const entries = raw.entries
    .map(e => ({ ...e, contentTypes: normaliseContentTypes(e.contentTypes), dateObj: parseDate(e.date) }))
    .map(e => ({ ...e, severity: classifyEntry(e.text, e.contentTypes) }))
    .sort((a, b) => (b.dateObj || 0) - (a.dateObj || 0))
  const latestDate = entries[0]?.dateObj || null
  const latestVersion = entries[0]?.version || null
  const allTypes = [...new Set(entries.flatMap(e => e.contentTypes))]
  const sevs = entries.map(e => e.severity)
  const topSeverity = sevs.includes("critical") ? "critical" : sevs.includes("important") ? "important" : "minor"
  return { name: raw.name, alias: raw.alias || null, latestVersion, latestDate, topSeverity, contentTypes: allTypes, entries }
}

export function buildGroupedNotes(solutions) {
  const result = {}
  GROUPS.forEach(({ id }) => { result[id] = [] })
  solutions.forEach(sol => {
    if (!sol.entries.length) return
    const latestVersion = sol.entries[0].version
    const latestEntries = sol.entries.filter(e => e.version === latestVersion)
    const seenGroups = new Set()
    for (const entry of latestEntries) {
      const gid = groupEntry(entry.text, entry.contentTypes, entry.severity)
      if (!seenGroups.has(gid)) {
        seenGroups.add(gid)
        result[gid].push({
          solution: sol.name, solutionAlias: sol.alias, date: entry.date, dateObj: entry.dateObj,
          version: entry.version, text: entry.text, contentTypes: entry.contentTypes,
          severity: entry.severity, isFirstRelease: isNewSolution(sol),
        })
      }
    }
  })
  Object.values(result).forEach(arr => arr.sort((a, b) => (b.dateObj || 0) - (a.dateObj || 0)))
  return result
}

export const SOLUTIONS = RAW_SOLUTIONS.map(processSolution)

export const NEW_SOLUTIONS = SOLUTIONS
  .filter(isNewSolution)
  .sort((a, b) => (b.latestDate || 0) - (a.latestDate || 0))
