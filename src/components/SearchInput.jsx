export default function SearchInput({ value, onChange, placeholder = 'Search…' }) {
  return (
    <div style={{ position: 'relative' }}>
      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', fontSize: 13, color: 'var(--text-placeholder)', pointerEvents: 'none' }}>🔍</span>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%', padding: '9px 36px 9px 34px', border: '1px solid var(--border)',
          borderRadius: 8, fontSize: 13, color: 'var(--text-strong)', background: 'var(--bg-panel)',
          fontFamily: "'DM Sans', sans-serif", outline: 'none',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--focus-ring)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />
      {value && (
        <button onClick={() => onChange('')} style={{
          position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-placeholder)', fontSize: 16, lineHeight: 1, padding: '2px 4px',
        }}>×</button>
      )}
    </div>
  )
}
