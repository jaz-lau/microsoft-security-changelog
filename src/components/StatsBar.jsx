import { useMemo } from 'react'

const DEFAULT_ITEMS = (stats) => [
  { label: 'Total', value: stats.total, color: 'var(--header-text)' },
  { label: 'Action Required', value: stats.critical, color: '#FCA5A5' },
  { label: 'Important', value: stats.important, color: '#FDE68A' },
  { label: 'Minor', value: stats.minor, color: '#86EFAC' },
]

export default function StatsBar({ data, items }) {
  const stats = useMemo(() => {
    if (!data) return null
    let total = 0, critical = 0, important = 0, minor = 0
    data.forEach(m => m.products.forEach(p => (p.updates || []).forEach(u => {
      total++
      if (u.severity === 'critical') critical++
      else if (u.severity === 'important') important++
      else if (u.severity === 'minor') minor++
    })))
    return { total, critical, important, minor }
  }, [data])

  const displayItems = items || (stats ? DEFAULT_ITEMS(stats) : [])
  if (displayItems.length === 0) return null

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {displayItems.map(({ label, value, color }) => (
        <div key={label} style={{
          textAlign: 'center',
          background: 'var(--header-pill-bg-hover)',
          borderRadius: 8,
          padding: '8px 14px',
        }}>
          <div style={{ fontSize: 18, fontWeight: 700, color, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>{value}</div>
          <div style={{ fontSize: 9, color: 'var(--header-text-faint)', marginTop: 3, letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{label}</div>
        </div>
      ))}
    </div>
  )
}
