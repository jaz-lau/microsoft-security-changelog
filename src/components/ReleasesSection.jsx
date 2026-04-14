import { useState } from 'react'

function isLatestForGroup(releases, index, isMDI) {
  if (isMDI) {
    // All sensor releases are one group — only first is latest
    return index === 0 && releases.length > 1
  }
  const key = releases[index].platform
  // First of this platform?
  for (let i = 0; i < index; i++) {
    if (releases[i].platform === key) return false
  }
  // Has more entries for this platform?
  for (let i = index + 1; i < releases.length; i++) {
    if (releases[i].platform === key) return true
  }
  return false
}

function MDIRelease({ r, showLatest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '3px 0' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, width: 200, flexShrink: 0 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-faint)', fontFamily: "'DM Mono', monospace" }}>
          v{r.version}
        </span>
        {showLatest && (
          <span style={{ fontSize: 10, color: 'var(--accent-cyan)', fontFamily: "'DM Mono', monospace" }}>(latest)</span>
        )}
      </div>
      {r.notes && (
        <span style={{ fontSize: 11, color: 'var(--text-placeholder)', fontFamily: "'DM Mono', monospace" }}>{r.notes}</span>
      )}
    </div>
  )
}

function MDERelease({ r, showLatest, isFirstOfPlatform }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '3px 0' }}>
      <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-faint)', minWidth: 110, fontFamily: "'DM Mono', monospace", visibility: isFirstOfPlatform ? 'visible' : 'hidden' }}>
        {r.platform}
      </span>
      {r.url
        ? <a href={r.url} target="_blank" rel="noreferrer" style={{
            fontSize: 11, color: 'var(--accent-link)', fontFamily: "'DM Mono', monospace", textDecoration: 'none',
          }}>{r.build} ↗</a>
        : <span style={{ fontSize: 11, color: 'var(--text-placeholder)', fontFamily: "'DM Mono', monospace" }}>{r.build}</span>
      }
      {showLatest && (
        <span style={{ fontSize: 10, color: 'var(--accent-cyan)', fontFamily: "'DM Mono', monospace", marginLeft: 4 }}>(latest)</span>
      )}
    </div>
  )
}

export default function ReleasesSection({ releases, alwaysOpen = false }) {
  const [open, setOpen] = useState(false)
  if (!releases || releases.length === 0) return null

  const isMDI = releases[0].version !== undefined
  const ReleaseRow = isMDI ? MDIRelease : MDERelease

  function isFirstOfPlatform(index) {
    if (isMDI) return true // MDI has no platform grouping to collapse
    const key = releases[index].platform
    for (let i = 0; i < index; i++) {
      if (releases[i].platform === key) return false
    }
    return true
  }

  const content = (
    <div style={{ padding: '6px 18px 10px' }}>
      {releases.map((r, i) => (
        <div key={i} style={{ borderBottom: i < releases.length - 1 ? '1px solid var(--bg-elevated)' : 'none' }}>
          <ReleaseRow r={r} showLatest={isLatestForGroup(releases, i, isMDI)} isFirstOfPlatform={isFirstOfPlatform(i)} />
        </div>
      ))}
    </div>
  )

  if (alwaysOpen) {
    return (
      <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ padding: '7px 18px', background: 'var(--bg-alt)' }}>
          <span style={{
            fontSize: 10, fontWeight: 600, letterSpacing: '0.06em',
            color: 'var(--text-placeholder)', fontFamily: "'DM Mono', monospace",
          }}>{isMDI ? 'SENSOR RELEASE' : 'PLATFORM RELEASES'}</span>
        </div>
        {content}
      </div>
    )
  }

  return (
    <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: 8,
          padding: '7px 18px', background: 'var(--bg-alt)', border: 'none', cursor: 'pointer',
          textAlign: 'left', fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <span style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.06em',
          color: 'var(--text-placeholder)', fontFamily: "'DM Mono', monospace",
        }}>{isMDI ? 'SENSOR RELEASE' : 'PLATFORM RELEASES'}</span>
        <span style={{
          fontSize: 12, color: 'var(--text-subtle)', marginLeft: 'auto',
          display: 'inline-block',
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.15s',
        }}>›</span>
      </button>
      {open && content}
    </div>
  )
}
