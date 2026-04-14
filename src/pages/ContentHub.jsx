import { useState, useMemo, useEffect } from 'react'
import SearchInput from '../components/SearchInput.jsx'
import {
  SOLUTIONS,
  NEW_SOLUTIONS,
  GROUPS,
  parseDate,
  groupEntry,
  isNewSolution,
  buildGroupedNotes,
} from '../data/solutions-data.js'

export { SOLUTIONS, NEW_SOLUTIONS }

// ─── Constants ────────────────────────────────────────────────────────────────

const SEV = {
  critical:  { label: "Critical",  bg: "#FEE2E2", color: "#991B1B", dot: "#EF4444" },
  important: { label: "Important", bg: "#FEF3C7", color: "#92400E", dot: "#F59E0B" },
  minor:     { label: "Minor",     bg: "#ECFDF5", color: "#065F46", dot: "#10B981" },
}

const TYPE_COLORS = {
  "Data Connector": { bg: "#EFF6FF", color: "#1D4ED8" },
  "Analytic Rule":  { bg: "#F5F3FF", color: "#6D28D9" },
  "Playbook":       { bg: "#FFF7ED", color: "#C2410C" },
  "Workbook":       { bg: "#F0FDF4", color: "#166534" },
  "Hunting Query":  { bg: "#FFF1F2", color: "#9F1239" },
  "Parser":         { bg: "#F0F9FF", color: "#0C4A6E" },
}


// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(d) {
  if (!d) return "—"
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
}

function timeAgo(d) {
  if (!d) return ""
  const days = Math.floor((Date.now() - d) / 86400000)
  if (days === 0) return "(Today)"
  if (days === 1) return "(Yesterday)"
  if (days < 30) return `(${days} day${days !== 1 ? 's' : ''} ago)`
  if (days < 365) { const m = Math.floor(days / 30); return `(${m} month${m !== 1 ? 's' : ''} ago)` }
  const y = Math.floor(days / 365); return `(${y} year${y !== 1 ? 's' : ''} ago)`
}

const GROUPED_NOTES = buildGroupedNotes(SOLUTIONS)

// ─── Small components ─────────────────────────────────────────────────────────

function TypePill({ type }) {
  const c = TYPE_COLORS[type] || { bg: "var(--bg-elevated)", color: "var(--text-default)" }
  return (
    <span style={{
      background: c.bg, color: c.color, padding: "2px 7px",
      borderRadius: 4, fontSize: 11, fontWeight: 500, whiteSpace: "nowrap",
    }}>{type}</span>
  )
}

// ─── GroupSection ─────────────────────────────────────────────────────────────

function GroupSection({ group, rows, accentBg, forceExpand, onOpenHistory }) {
  const [collapsed, setCollapsed] = useState(false)
  const isCollapsed = forceExpand ? false : collapsed

  return (
    <div>
      <div
        onClick={() => setCollapsed(c => !c)}
        style={{
          display: "flex", alignItems: "center", gap: 12, padding: "11px 16px 11px 20px",
          background: "var(--bg-elevated)", borderTop: "1px solid var(--border)",
          cursor: "pointer", userSelect: "none",
        }}
      >
        <span style={{
          width: 28, height: 28, borderRadius: 7, display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 14, background: accentBg, flexShrink: 0,
        }}>{group.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text-strong)" }}>{group.title}</div>
          <div style={{ fontSize: 11, color: "var(--text-placeholder)", fontFamily: "'DM Mono', monospace", marginTop: 1 }}>{group.desc}</div>
        </div>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: 11, padding: "2px 9px",
          borderRadius: 999, background: "var(--bg-elevated)", color: "var(--text-faint)", border: "1px solid var(--border)",
        }}>{rows.length} update{rows.length !== 1 ? "s" : ""}</span>
        <span style={{ color: "var(--text-placeholder)", fontSize: 14, transition: "transform 0.18s", transform: isCollapsed ? "rotate(-90deg)" : "rotate(0deg)" }}>›</span>
      </div>

      {!isCollapsed && (
        <div style={{ overflowX: "auto", borderTop: "1px solid var(--border-subtle)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "200px" }} />
              <col style={{ width: "auto" }} />
              <col style={{ width: "90px" }} />
              <col style={{ width: "200px" }} />
            </colgroup>
            <thead>
              <tr style={{ background: "rgba(248,250,252,0.8)", borderBottom: "1px solid var(--border-subtle)" }}>
                {["Solution", "Latest update", "Version", "Content types"].map(h => (
                  <th key={h} style={{
                    padding: "7px 16px", textAlign: "left", fontSize: 10.5, fontWeight: 600,
                    color: "var(--text-faint)", letterSpacing: "0.07em", textTransform: "uppercase", whiteSpace: "nowrap",
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border-subtle)", background: i % 2 === 0 ? "var(--bg-panel)" : "var(--bg-alt)" }}>
                  <td style={{ padding: "10px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <button
                        onClick={() => onOpenHistory && onOpenHistory(r.solution)}
                        style={{
                          background: "none", border: "none", padding: 0, cursor: "pointer",
                          fontWeight: 500, fontSize: 13, color: "var(--text-strong)", textAlign: "left",
                          fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4,
                          borderBottom: "1px dashed var(--text-subtle)",
                        }}
                        title="View full history"
                      >{r.solution}</button>
                      {r.isFirstRelease && (
                        <span title="First release" style={{ color: "var(--accent-cyan)", fontSize: 11, lineHeight: 1, flexShrink: 0 }}>✦</span>
                      )}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text-placeholder)", fontFamily: "'DM Mono', monospace", marginTop: 2, whiteSpace: "nowrap" }}>
                      {r.date}
                      {r.dateObj && <span style={{ marginLeft: 5, color: "var(--text-subtle)" }}>· {timeAgo(r.dateObj)}</span>}
                    </div>
                  </td>
                  <td style={{ padding: "10px 16px", color: "var(--text-default)", lineHeight: 1.5, overflow: "hidden" }}>{r.text}</td>
                  <td style={{ padding: "10px 16px", whiteSpace: "nowrap" }}>
                    <span style={{
                      fontFamily: "'DM Mono', monospace", fontSize: 11.5, background: "var(--border-subtle)",
                      padding: "2px 8px", borderRadius: 5, color: "var(--text-strong)",
                    }}>{r.version}</span>
                  </td>
                  <td style={{ padding: "10px 16px" }}>
                    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                      {r.contentTypes.length > 0
                        ? r.contentTypes.map(t => <TypePill key={t} type={t} />)
                        : <span style={{ color: "var(--text-subtle)", fontSize: 11 }}>—</span>}
                    </div>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr><td colSpan={4} style={{ padding: "28px 16px", textAlign: "center", color: "var(--text-placeholder)", fontSize: 13 }}>
                  No updates in this category.
                </td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

// ─── SeverityBand ─────────────────────────────────────────────────────────────

function SeverityBand({ severityKey, groups, forceExpand, onOpenHistory }) {
  const [collapsed, setCollapsed] = useState(false)
  const c = SEV[severityKey]
  const totalRows = groups.reduce((s, { rows }) => s + rows.length, 0)
  if (totalRows === 0) return null

  const isCollapsed = forceExpand ? false : collapsed

  return (
    <div style={{
      marginBottom: 24, border: "1px solid var(--border)",
      borderLeft: `4px solid ${c.dot}`, borderRadius: 10, overflow: "hidden",
    }}>
      <div
        onClick={() => setCollapsed(v => !v)}
        style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "12px 18px", background: c.bg,
          cursor: "pointer", userSelect: "none",
          borderBottom: isCollapsed ? "none" : "1px solid var(--border)",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: c.dot, flexShrink: 0 }} />
        <span style={{ fontWeight: 700, fontSize: 13, color: c.color, letterSpacing: "0.05em", textTransform: "uppercase", flex: 1 }}>
          {c.label}
        </span>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: 11, padding: "1px 9px",
          borderRadius: 999, background: "rgba(255,255,255,0.7)", color: c.color,
          border: `1px solid ${c.dot}55`,
        }}>{totalRows} update{totalRows !== 1 ? "s" : ""}</span>
        <span style={{ color: c.color, fontSize: 14, opacity: 0.7, transition: "transform 0.18s", transform: isCollapsed ? "rotate(-90deg)" : "rotate(0deg)" }}>›</span>
      </div>

      {!isCollapsed && groups.map(({ group, rows }) =>
        rows.length > 0 ? (
          <GroupSection key={group.id} group={group} rows={rows} accentBg={c.bg} forceExpand={forceExpand} onOpenHistory={onOpenHistory} />
        ) : null
      )}
    </div>
  )
}

// ─── SolutionUpdateView ───────────────────────────────────────────────────────

export function SolutionUpdateView({ onOpenHistory, defaultDateRange = "all", onStatsChange = null }) {
  const [dateRange, setDateRange] = useState(defaultDateRange)
  const [activeSeverity, setActiveSeverity] = useState("all")
  const [activeType, setActiveType] = useState("all")

  const DATE_RANGES = [
    { id: "30d", label: "Last 30 days",  ms: 30  * 86400000 },
    { id: "90d", label: "Last 90 days",  ms: 90  * 86400000 },
    { id: "6mo", label: "Last 6 months", ms: 182 * 86400000 },
  ]

  const allContentTypes = useMemo(() => {
    const types = new Set()
    Object.values(GROUPED_NOTES).forEach(rows => rows.forEach(r => r.contentTypes.forEach(t => types.add(t))))
    return [...types].sort()
  }, [])

  const now = Date.now()
  const selectedRange = DATE_RANGES.find(d => d.id === dateRange)

  const matchesFilters = r => {
    if (selectedRange.ms && r.dateObj && (now - r.dateObj) > selectedRange.ms) return false
    if (activeSeverity !== "all" && r.severity !== activeSeverity) return false
    if (activeType !== "all" && !r.contentTypes.includes(activeType)) return false
    return true
  }

  const isFiltered = dateRange !== defaultDateRange || activeSeverity !== "all" || activeType !== "all"

  const severityBands = ["critical", "important", "minor"].map(sev => ({
    severityKey: sev,
    groups: GROUPS
      .map(group => ({
        group,
        rows: GROUPED_NOTES[group.id].filter(r => r.severity === sev && matchesFilters(r)).sort((a, b) => (b.dateObj || 0) - (a.dateObj || 0)),
      }))
      .filter(({ rows }) => rows.length > 0)
      .sort((a, b) => (b.rows[0]?.dateObj || 0) - (a.rows[0]?.dateObj || 0)),
  }))

  const totalVisible = severityBands.reduce((s, { groups }) => s + groups.reduce((gs, { rows }) => gs + rows.length, 0), 0)
  const visibleCritical  = severityBands.find(b => b.severityKey === "critical")?.groups.reduce((s, { rows }) => s + rows.length, 0) ?? 0
  const visibleImportant = severityBands.find(b => b.severityKey === "important")?.groups.reduce((s, { rows }) => s + rows.length, 0) ?? 0
  const visibleMinor     = severityBands.find(b => b.severityKey === "minor")?.groups.reduce((s, { rows }) => s + rows.length, 0) ?? 0

  useEffect(() => {
    if (onStatsChange) onStatsChange({ total: totalVisible, critical: visibleCritical, important: visibleImportant, minor: visibleMinor })
  }, [totalVisible, visibleCritical, visibleImportant, visibleMinor, onStatsChange])

  return (
    <div>
      {/* Filters */}
      <div style={{
        background: "var(--bg-panel)", border: "1px solid var(--border)", borderRadius: 10,
        padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10, marginBottom: 12,
      }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 10.5, color: "var(--text-placeholder)", fontWeight: 600, letterSpacing: "0.07em", minWidth: 46 }}>DATE</span>
          {DATE_RANGES.map(({ id, label }) => (
            <button key={id} onClick={() => setDateRange(id)} className={`chip ${dateRange === id ? "active" : ""}`}>{label}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 10.5, color: "var(--text-placeholder)", fontWeight: 600, letterSpacing: "0.07em", minWidth: 46 }}>SEVERITY</span>
          {[
            ["all", "All"],
            ["critical", "Critical"],
            ["important", "Important"],
            ["minor", "Minor"],
          ].map(([val, label]) => (
            <button
              key={val}
              className={`chip ${activeSeverity === val ? "active" : ""}`}
              onClick={() => setActiveSeverity(val)}
              style={activeSeverity !== val && val !== "all" ? {
                color: SEV[val]?.color,
                borderColor: SEV[val]?.dot,
              } : {}}
            >{label}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 10.5, color: "var(--text-placeholder)", fontWeight: 600, letterSpacing: "0.07em", minWidth: 46 }}>TYPE</span>
          <button className={`chip ${activeType === "all" ? "active" : ""}`} onClick={() => setActiveType("all")}>All</button>
          {allContentTypes.map(t => (
            <button
              key={t}
              className={`chip ${activeType === t ? "active" : ""}`}
              onClick={() => setActiveType(activeType === t ? "all" : t)}
              style={activeType !== t ? { color: TYPE_COLORS[t]?.color, borderColor: TYPE_COLORS[t]?.color + "44" } : {}}
            >{t}</button>
          ))}
        </div>
      </div>

      {/* Filter summary */}
      {isFiltered && (
        <p style={{ fontSize: 12, color: "var(--text-placeholder)", marginBottom: 14 }}>
          {totalVisible === 0
            ? "No updates match your filters."
            : <><strong style={{ color: "var(--text-muted)" }}>{totalVisible}</strong> update{totalVisible !== 1 ? "s" : ""} matching current filters</>
          }
          {" · "}
          <button onClick={() => { setDateRange(defaultDateRange); setActiveSeverity("all"); setActiveType("all") }} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-link)", fontSize: 12, padding: 0, fontFamily: "'DM Sans', sans-serif" }}>
            Clear all filters
          </button>
        </p>
      )}

      {/* Severity bands */}
      {severityBands.map(({ severityKey, groups }) => (
        <SeverityBand key={severityKey} severityKey={severityKey} groups={groups} forceExpand={isFiltered} onOpenHistory={onOpenHistory} />
      ))}

      {isFiltered && totalVisible === 0 && (
        <div style={{ textAlign: "center", padding: "48px 16px", color: "var(--text-placeholder)", border: "1px dashed var(--border)", borderRadius: 10, fontSize: 14 }}>
          No results for the current filters —{" "}
          <button onClick={() => { setDateRange(defaultDateRange); setActiveSeverity("all"); setActiveType("all") }} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-link)", fontSize: 14, padding: 0, fontFamily: "'DM Sans', sans-serif" }}>
            clear all filters
          </button>
        </div>
      )}
    </div>
  )
}

// ─── SolutionHistoryModal ─────────────────────────────────────────────────────

export function SolutionHistoryModal({ solution, onClose }) {
  const [filterType, setFilterType] = useState("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    const handler = e => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  const allTypes = useMemo(() =>
    [...new Set(solution.entries.flatMap(e => e.contentTypes))].sort()
  , [solution])

  const filtered = useMemo(() => solution.entries.filter(e => {
    if (filterType !== "all" && !e.contentTypes.includes(filterType)) return false
    if (search.trim()) {
      const q = search.toLowerCase()
      if (!e.text.toLowerCase().includes(q) && !e.version.includes(q)) return false
    }
    return true
  }), [solution, filterType, search])

  const grouped = useMemo(() => {
    const map = new Map()
    filtered.forEach(e => {
      const p = e.version.split(".")
      const key = `${p[0]}.${p[1]}.x`
      if (!map.has(key)) map.set(key, [])
      map.get(key).push(e)
    })
    return [...map.entries()]
  }, [filtered])

  const chip = (active, label, onClick, color) => (
    <button key={label} onClick={onClick} style={{
      border: `1px solid ${active ? "var(--text-strong)" : "var(--border)"}`,
      borderRadius: 999, padding: "3px 10px", fontSize: 11.5, cursor: "pointer",
      fontFamily: "'DM Sans', sans-serif",
      background: active ? "var(--text-strong)" : "var(--bg-panel)",
      color: active ? "var(--bg-panel)" : (color || "var(--text-muted)"),
      fontWeight: active ? 600 : 400, whiteSpace: "nowrap", transition: "all 0.12s",
    }}>{label}</button>
  )

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "var(--bg-overlay)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000, padding: "24px 16px",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: "var(--bg-panel)", borderRadius: 14, width: "100%", maxWidth: 860,
        maxHeight: "88vh", display: "flex", flexDirection: "column",
        boxShadow: "var(--shadow-lg)",
        overflow: "hidden", fontFamily: "'DM Sans', sans-serif",
      }}>
        {/* Header */}
        <div style={{
          padding: "20px 24px 16px",
          background: "linear-gradient(135deg, var(--header-from) 0%, var(--header-to) 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                <span style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", color: "var(--accent-cyan)", textTransform: "uppercase" }}>
                  Update history
                </span>
                <span style={{ color: "var(--text-strong)" }}>·</span>
                <a
                  href={`https://github.com/Azure/Azure-Sentinel/tree/master/Solutions/${encodeURIComponent(solution.alias || solution.name)}`}
                  target="_blank" rel="noreferrer"
                  style={{ fontSize: 10, color: "var(--accent-cyan)", fontFamily: "'DM Mono', monospace", textDecoration: "none" }}
                >GitHub ↗</a>
              </div>
              <h2 style={{ fontSize: 19, fontWeight: 600, color: "var(--bg-elevated)", margin: 0, letterSpacing: "-0.01em" }}>{solution.name}</h2>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, background: "rgba(255,255,255,0.1)", padding: "2px 8px", borderRadius: 5, color: "var(--text-subtle)" }}>
                  v{solution.latestVersion}
                </span>
                <span style={{ fontSize: 12, color: "var(--text-placeholder)" }}>
                  Last updated {formatDate(solution.latestDate)}
                  {solution.latestDate && <span style={{ marginLeft: 5, color: "var(--text-faint)" }}>({timeAgo(solution.latestDate)})</span>}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "var(--text-faint)" }}>
                  {solution.entries.length} total entries
                </span>
              </div>
            </div>
            <button onClick={onClose} style={{
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8, width: 32, height: 32, cursor: "pointer", color: "var(--text-placeholder)",
              fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>×</button>
          </div>
        </div>

        {/* Filters */}
        <div style={{ padding: "10px 24px", borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-alt)", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "1 1 180px" }}>
            <SearchInput value={search} onChange={setSearch} placeholder="Search entries…" />
          </div>
          {allTypes.length > 0 && (
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              {chip(filterType === "all", "All types", () => setFilterType("all"))}
              {allTypes.map(t => chip(filterType === t, t, () => setFilterType(filterType === t ? "all" : t), TYPE_COLORS[t]?.color))}
            </div>
          )}
          <span style={{ fontSize: 11, color: "var(--text-placeholder)", fontFamily: "'DM Mono', monospace", marginLeft: "auto", whiteSpace: "nowrap" }}>
            {filtered.length} / {solution.entries.length}
          </span>
        </div>

        {/* Timeline body */}
        <div style={{ overflowY: "auto", flex: 1, padding: "0 24px 24px" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 0", color: "var(--text-placeholder)", fontSize: 14 }}>No entries match your filters.</div>
          ) : grouped.map(([versionGroup, groupEntries]) => (
            <div key={versionGroup} style={{ marginTop: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 700, color: "var(--text-faint)", background: "var(--border-subtle)", padding: "2px 9px", borderRadius: 5, letterSpacing: "0.04em" }}>
                  {versionGroup}
                </span>
                <div style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />
                <span style={{ fontSize: 11, color: "var(--text-subtle)", fontFamily: "'DM Mono', monospace" }}>
                  {groupEntries.length} change{groupEntries.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {groupEntries.map((e, i) => (
                  <div key={i} style={{
                    display: "grid", gridTemplateColumns: "76px 86px 160px 1fr",
                    gap: "0 14px", padding: "9px 12px", borderRadius: 7,
                    background: i % 2 === 0 ? "var(--bg-panel)" : "var(--bg-alt)",
                    border: "1px solid var(--border-subtle)", alignItems: "start", fontSize: 12,
                  }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", color: "var(--text-strong)", fontWeight: 600, paddingTop: 1 }}>{e.version}</span>
                    <span style={{ color: "var(--text-placeholder)", fontFamily: "'DM Mono', monospace", fontSize: 11, paddingTop: 2 }}>{formatDate(e.dateObj)}</span>
                    <div style={{ display: "flex", gap: 3, flexWrap: "wrap", paddingTop: 1 }}>
                      {e.contentTypes.length > 0 ? e.contentTypes.map(t => <TypePill key={t} type={t} />) : <span style={{ color: "var(--text-subtle)", fontSize: 11 }}>—</span>}
                    </div>
                    <span style={{ color: "var(--text-default)", lineHeight: 1.55 }}>{e.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: "10px 24px", borderTop: "1px solid var(--border-subtle)", background: "var(--bg-alt)", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, color: "var(--text-placeholder)" }}>
          <span style={{ fontFamily: "'DM Mono', monospace" }}>Azure/Azure-Sentinel · Solutions/{solution.alias || solution.name}/ReleaseNotes.md</span>
          <button onClick={onClose} style={{ background: "none", border: "1px solid var(--border)", borderRadius: 6, padding: "5px 14px", fontSize: 12, cursor: "pointer", color: "var(--text-muted)", fontFamily: "'DM Sans', sans-serif" }}>Close</button>
        </div>
      </div>
    </div>
  )
}

// ─── New Solutions tab ────────────────────────────────────────────────────────

export function NewSolutionsTab({ onOpenHistory }) {
  const [activeType, setActiveType] = useState("all")

  const ninety = 90 * 86400000

  const allTypes = useMemo(() => {
    const types = new Set()
    NEW_SOLUTIONS.forEach(s => s.contentTypes.forEach(t => types.add(t)))
    return [...types].sort()
  }, [])

  const filtered = NEW_SOLUTIONS.filter(s => {
    if (!(s.latestDate && (Date.now() - s.latestDate) < ninety)) return false
    if (activeType !== "all" && !s.contentTypes.includes(activeType)) return false
    return true
  })

  const isFiltered = activeType !== "all"

  return (
    <div>
      <div style={{
        background: "var(--bg-panel)", border: "1px solid var(--border)", borderRadius: 10,
        padding: "12px 16px", display: "flex", flexDirection: "column", gap: 10, marginBottom: 16,
      }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: 10.5, color: "var(--text-placeholder)", fontWeight: 600, letterSpacing: "0.07em", minWidth: 46 }}>TYPE</span>
          <button className={`chip ${activeType === "all" ? "active" : ""}`} onClick={() => setActiveType("all")}>All</button>
          {allTypes.map(t => (
            <button
              key={t}
              className={`chip ${activeType === t ? "active" : ""}`}
              onClick={() => setActiveType(activeType === t ? "all" : t)}
              style={activeType !== t ? { color: TYPE_COLORS[t]?.color, borderColor: TYPE_COLORS[t]?.color + "44" } : {}}
            >{t}</button>
          ))}
        </div>
      </div>

      {isFiltered && (
        <p style={{ fontSize: 12, color: "var(--text-placeholder)", marginBottom: 14 }}>
          <strong style={{ color: "var(--text-muted)" }}>{filtered.length}</strong> solution{filtered.length !== 1 ? "s" : ""} matching current filters
          {" · "}
          <button onClick={() => setActiveType("all")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--accent-link)", fontSize: 12, padding: 0, fontFamily: "'DM Sans', sans-serif" }}>
            Clear all filters
          </button>
        </p>
      )}

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "28px 16px", color: "var(--text-placeholder)", border: "1px dashed var(--border)", borderRadius: 10 }}>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>
            {isFiltered ? "No solutions match your filters" : "No new solutions in the last 90 days"}
          </div>
          {!isFiltered && (
            <div style={{ fontSize: 12 }}>Solutions with a single version or an "Initial Solution Release" entry will appear here when recently published.</div>
          )}
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 12 }}>
          {filtered.map(sol => (
            <div key={sol.name} style={{
              background: "var(--bg-panel)", border: "1px solid var(--border)", borderRadius: 10,
              padding: "16px 18px", display: "flex", flexDirection: "column", gap: 10,
            }}>
              <button
                onClick={() => onOpenHistory(sol.name)}
                style={{
                  background: "none", border: "none", padding: 0, cursor: "pointer",
                  fontWeight: 600, fontSize: 14, color: "var(--text-strong)", textAlign: "left",
                  fontFamily: "'DM Sans', sans-serif", lineHeight: 1.3,
                  borderBottom: "1px dashed var(--text-subtle)",
                }}
              >{sol.name}</button>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11.5, background: "var(--border-subtle)", padding: "2px 8px", borderRadius: 5, color: "var(--text-strong)" }}>
                  v{sol.latestVersion}
                </span>
                <span style={{ fontSize: 12, color: "var(--text-faint)" }}>
                  {formatDate(sol.latestDate)}
                  {sol.latestDate && <span style={{ marginLeft: 5, color: "var(--text-placeholder)" }}>{timeAgo(sol.latestDate)}</span>}
                </span>
              </div>
              {sol.contentTypes.length > 0 && (
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {sol.contentTypes.map(t => <TypePill key={t} type={t} />)}
                </div>
              )}
              <p style={{ fontSize: 12, color: "var(--text-faint)", lineHeight: 1.55, margin: 0 }}>
                {sol.entries[0]?.text || "—"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── SolutionHistoryTab ──────────────────────────────────────────────────────

export function SolutionHistoryTab() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(null)
  const [filterType, setFilterType] = useState("all")
  const [entrySearch, setEntrySearch] = useState("")

  const q = query.trim().toLowerCase()
  const results = q.length >= 3
    ? SOLUTIONS.filter(s => s.name.toLowerCase().includes(q) || (s.alias && s.alias.toLowerCase().includes(q))).sort((a, b) => (b.latestDate || 0) - (a.latestDate || 0))
    : null

  // Filtered entries for selected solution
  const allTypes = selected ? [...new Set(selected.entries.flatMap(e => e.contentTypes))].sort() : []
  const filteredEntries = selected ? selected.entries.filter(e => {
    if (filterType !== "all" && !e.contentTypes.includes(filterType)) return false
    if (entrySearch.trim()) {
      const q = entrySearch.toLowerCase()
      if (!e.text.toLowerCase().includes(q) && !e.version.includes(q)) return false
    }
    return true
  }) : []
  const grouped = (() => {
    const map = new Map()
    filteredEntries.forEach(e => {
      const p = e.version.split(".")
      const key = `${p[0]}.${p[1]}.x`
      if (!map.has(key)) map.set(key, [])
      map.get(key).push(e)
    })
    return [...map.entries()]
  })()

  const chip = (active, label, onClick, color) => (
    <button key={label} onClick={onClick} style={{
      border: `1px solid ${active ? "var(--text-strong)" : "var(--border)"}`,
      borderRadius: 999, padding: "3px 10px", fontSize: 11.5, cursor: "pointer",
      fontFamily: "'DM Sans', sans-serif",
      background: active ? "var(--text-strong)" : "var(--bg-panel)",
      color: active ? "var(--bg-panel)" : (color || "var(--text-muted)"),
      fontWeight: active ? 600 : 400, whiteSpace: "nowrap", transition: "all 0.12s",
    }}>{label}</button>
  )

  if (selected) {
    return (
      <div>
        {/* Back + header */}
        <button
          onClick={() => { setSelected(null); setFilterType("all"); setEntrySearch("") }}
          style={{
            background: "none", border: "none", cursor: "pointer", color: "var(--accent-link)",
            fontSize: 13, padding: 0, fontFamily: "'DM Sans', sans-serif", marginBottom: 16,
            display: "flex", alignItems: "center", gap: 4,
          }}
        >‹ Back to results</button>

        <div style={{
          background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: 10,
          padding: "16px 20px", marginBottom: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--text-strong)", margin: 0 }}>{selected.name}</h3>
            <a
              href={`https://github.com/Azure/Azure-Sentinel/tree/master/Solutions/${encodeURIComponent(selected.alias || selected.name)}`}
              target="_blank" rel="noreferrer"
              style={{ fontSize: 11, color: "var(--accent-link)", fontFamily: "'DM Mono', monospace", textDecoration: "none" }}
            >GitHub ↗</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, background: "var(--border)", padding: "2px 8px", borderRadius: 5, color: "var(--text-strong)" }}>
              v{selected.latestVersion}
            </span>
            <span style={{ fontSize: 12, color: "var(--text-faint)" }}>
              Last updated {formatDate(selected.latestDate)}
              {selected.latestDate && <span style={{ marginLeft: 5, color: "var(--text-placeholder)" }}>({timeAgo(selected.latestDate)})</span>}
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "var(--text-placeholder)" }}>
              {selected.entries.length} total entries
            </span>
          </div>
        </div>

        {/* Filters */}
        <div style={{
          display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 16,
          background: "var(--bg-panel)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 16px",
        }}>
          <div style={{ flex: "1 1 180px" }}>
            <SearchInput value={entrySearch} onChange={setEntrySearch} placeholder="Search entries…" />
          </div>
          {allTypes.length > 0 && (
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              {chip(filterType === "all", "All types", () => setFilterType("all"))}
              {allTypes.map(t => chip(filterType === t, t, () => setFilterType(filterType === t ? "all" : t), TYPE_COLORS[t]?.color))}
            </div>
          )}
          <span style={{ fontSize: 11, color: "var(--text-placeholder)", fontFamily: "'DM Mono', monospace", marginLeft: "auto", whiteSpace: "nowrap" }}>
            {filteredEntries.length} / {selected.entries.length}
          </span>
        </div>

        {/* Timeline */}
        {filteredEntries.length === 0 ? (
          <div style={{ textAlign: "center", padding: "48px 0", color: "var(--text-placeholder)", fontSize: 14 }}>No entries match your filters.</div>
        ) : grouped.map(([versionGroup, groupEntries]) => (
          <div key={versionGroup} style={{ marginTop: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 700, color: "var(--text-faint)", background: "var(--border-subtle)", padding: "2px 9px", borderRadius: 5, letterSpacing: "0.04em" }}>
                {versionGroup}
              </span>
              <div style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />
              <span style={{ fontSize: 11, color: "var(--text-subtle)", fontFamily: "'DM Mono', monospace" }}>
                {groupEntries.length} change{groupEntries.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {groupEntries.map((e, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "76px 86px 160px 1fr",
                  gap: "0 14px", padding: "9px 12px", borderRadius: 7,
                  background: i % 2 === 0 ? "var(--bg-panel)" : "var(--bg-alt)",
                  border: "1px solid var(--border-subtle)", alignItems: "start", fontSize: 12,
                }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", color: "var(--text-strong)", fontWeight: 600, paddingTop: 1 }}>{e.version}</span>
                  <span style={{ color: "var(--text-placeholder)", fontFamily: "'DM Mono', monospace", fontSize: 11, paddingTop: 2 }}>{formatDate(e.dateObj)}</span>
                  <div style={{ display: "flex", gap: 3, flexWrap: "wrap", paddingTop: 1 }}>
                    {e.contentTypes.length > 0 ? e.contentTypes.map(t => <TypePill key={t} type={t} />) : <span style={{ color: "var(--text-subtle)", fontSize: 11 }}>—</span>}
                  </div>
                  <span style={{ color: "var(--text-default)", lineHeight: 1.55 }}>{e.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      {/* Search */}
      <div style={{
        background: "var(--bg-panel)", border: "1px solid var(--border)", borderRadius: 10,
        padding: "16px 20px", marginBottom: 20,
      }}>
        <p style={{ fontSize: 13, color: "var(--text-faint)", margin: "0 0 12px" }}>
          Search for a Sentinel content hub solution to view its full update history.
        </p>
        <SearchInput
          value={query}
          onChange={v => { setQuery(v); setSelected(null) }}
          placeholder="Enter solution name (e.g. Microsoft Entra ID, SAP, CrowdStrike)…"
        />
        {query.length > 0 && query.length < 3 && (
          <p style={{ fontSize: 11, color: "var(--text-placeholder)", marginTop: 8, marginBottom: 0 }}>
            Type at least 3 characters to search…
          </p>
        )}
      </div>

      {/* Results */}
      {results && results.length === 0 && !selected && (
        <div style={{ textAlign: "center", padding: "40px 16px", color: "var(--text-placeholder)", border: "1px dashed var(--border)", borderRadius: 10 }}>
          No solutions found matching "{query}".
        </div>
      )}

      {results && results.length > 0 && !selected && (
        <div>
          <p style={{ fontSize: 12, color: "var(--text-placeholder)", marginBottom: 12 }}>
            <strong style={{ color: "var(--text-muted)" }}>{results.length}</strong> solution{results.length !== 1 ? "s" : ""} found
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {results.map(sol => (
              <button
                key={sol.name}
                onClick={() => setSelected(sol)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: "var(--bg-panel)", border: "1px solid var(--border)", borderRadius: 8,
                  padding: "12px 16px", cursor: "pointer", textAlign: "left",
                  fontFamily: "'DM Sans', sans-serif", width: "100%",
                  transition: "border-color 0.12s",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--focus-ring)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-strong)" }}>{sol.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-placeholder)", marginTop: 2, fontFamily: "'DM Mono', monospace" }}>
                    v{sol.latestVersion} · {formatDate(sol.latestDate)}
                    {sol.latestDate && <span style={{ marginLeft: 5 }}>{timeAgo(sol.latestDate)}</span>}
                    {" · "}{sol.entries.length} entries
                  </div>
                </div>
                <span style={{ color: "var(--text-subtle)", fontSize: 16 }}>›</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

