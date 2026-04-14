import { useState } from 'react'

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false)

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', cursor: 'help' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: 6,
          padding: '6px 10px',
          background: 'var(--text-strong)',
          color: 'var(--bg-panel)',
          fontSize: 11,
          lineHeight: 1.4,
          borderRadius: 6,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 50,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 400,
        }}>
          {text}
        </span>
      )}
    </span>
  )
}
