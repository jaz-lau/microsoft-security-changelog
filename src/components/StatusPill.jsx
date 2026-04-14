const STATUS_CONFIG = {
  ga:      { label: 'GA',      bg: '#DBEAFE', color: '#1E40AF', border: '#93C5FD' },
  preview: { label: 'Preview', bg: '#EDE9FE', color: '#5B21B6', border: '#C4B5FD' },
  change:  { label: 'Change',  bg: '#FFEDD5', color: '#9A3412', border: '#FDBA74' },
}

export default function StatusPill({ status }) {
  const s = STATUS_CONFIG[status]
  if (!s) return null
  return (
    <span style={{
      fontSize: 10, fontWeight: 600, padding: '1px 6px', borderRadius: 4,
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
      fontFamily: "'DM Mono', monospace", whiteSpace: 'nowrap', flexShrink: 0,
      letterSpacing: '0.04em',
    }}>{s.label}</span>
  )
}
