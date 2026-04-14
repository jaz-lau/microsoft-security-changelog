import { useState, useEffect } from 'react'
import StatusPill from './StatusPill.jsx'

const SEV_DOT = {
  critical:  '#EF4444',
  important: '#F59E0B',
  minor:     '#10B981',
}

export default function UpdateEntry({ u, id, initialOpen = false }) {
  const [open, setOpen] = useState(initialOpen)

  // When the parent flips initialOpen → true (e.g. user navigated here from
  // the command palette while this entry was already mounted), expand it.
  useEffect(() => {
    if (initialOpen) setOpen(true)
  }, [initialOpen])
  return (
    <div id={id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', display: 'flex', alignItems: 'flex-start', gap: 10,
          padding: '10px 18px', background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left', fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <span style={{
          width: 7, height: 7, borderRadius: '50%',
          background: SEV_DOT[u.severity] || 'var(--text-placeholder)',
          flexShrink: 0, marginTop: 5,
        }} />
        <span style={{ fontSize: 13, color: 'var(--text-strong)', lineHeight: 1.55, flex: 1 }}>
          {u.summary}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, marginTop: 1 }}>
          <StatusPill status={u.status} />
          <span style={{
            fontSize: 14, color: 'var(--text-placeholder)',
            display: 'inline-block',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.15s',
          }}>›</span>
        </div>
      </button>
      {open && (
        <div style={{
          margin: '0 18px 12px 35px', padding: '10px 14px',
          background: 'var(--bg-elevated)', borderRadius: 7, borderLeft: '3px solid var(--border)',
          fontSize: 12.5, color: 'var(--text-default)', lineHeight: 1.65,
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--text-placeholder)', marginBottom: 4, fontFamily: "'DM Mono', monospace" }}>
            WHAT CHANGED
          </div>
          {Array.isArray(u.detail)
            ? u.detail.map((p, i) => (
                <p key={i} style={{ margin: i > 0 ? '8px 0 0' : 0, lineHeight: 1.65 }}>{p}</p>
              ))
            : <p style={{ margin: 0 }}>{u.detail}</p>}

          {u.whyItMatters && (
            <>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--text-placeholder)', marginTop: 14, marginBottom: 4, fontFamily: "'DM Mono', monospace" }}>
                WHY IT MATTERS
              </div>
              {Array.isArray(u.whyItMatters)
                ? u.whyItMatters.map((p, i) => (
                    <p key={i} style={{ margin: i > 0 ? '8px 0 0' : 0, lineHeight: 1.65 }}>{p}</p>
                  ))
                : <p style={{ margin: 0 }}>{u.whyItMatters}</p>}
            </>
          )}

          {u.actionNote && (
            <>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--action-strong)', marginTop: 14, marginBottom: 4, fontFamily: "'DM Mono', monospace" }}>
                WHAT IT MEANS TO YOU
              </div>
              {Array.isArray(u.actionNote)
                ? u.actionNote.map((p, i) => (
                    <p key={i} style={{ margin: i > 0 ? '8px 0 0' : 0, lineHeight: 1.65, color: 'var(--action-text)' }}>{p}</p>
                  ))
                : <p style={{ margin: 0, color: 'var(--action-text)' }}>{u.actionNote}</p>}
            </>
          )}
        </div>
      )}
    </div>
  )
}
