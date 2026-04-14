import { useState, useEffect } from 'react'

const GLASS = {
  border: '1px solid var(--glass-border)',
  background: 'var(--glass-bg)',
  backdropFilter: 'blur(50px) saturate(180%)',
  WebkitBackdropFilter: 'blur(50px) saturate(180%)',
  boxShadow: 'var(--shadow-sm)',
}

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: 28,
      left: 0, right: 0,
      display: 'flex',
      justifyContent: 'center',
      pointerEvents: 'none',
      zIndex: 200,
    }}>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to top"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(80px)',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          display: 'flex', alignItems: 'center', gap: 0,
          padding: '9px 14px',
          borderRadius: 999,
          ...GLASS,
          cursor: 'pointer', outline: 'none',
          fontSize: 12, fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
          color: 'var(--glass-text)',
          overflow: 'hidden',
          transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s ease, gap 0.25s, color 0.15s, box-shadow 0.4s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = 'var(--glass-text-hover)'
          e.currentTarget.style.gap = '6px'
          e.currentTarget.style.boxShadow = 'var(--shadow-md)'
          e.currentTarget.querySelector('.label').style.width = '72px'
          e.currentTarget.querySelector('.label').style.opacity = '1'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = 'var(--glass-text)'
          e.currentTarget.style.gap = '0px'
          e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
          e.currentTarget.querySelector('.label').style.width = '0px'
          e.currentTarget.querySelector('.label').style.opacity = '0'
        }}
      >
        <span style={{ fontSize: 14, lineHeight: 1, flexShrink: 0 }}>↑</span>
        <span className="label" style={{
          width: 0, overflow: 'hidden', whiteSpace: 'nowrap', opacity: 0,
          transition: 'width 0.25s, opacity 0.2s',
        }}>Back to top</span>
      </button>
    </div>
  )
}
