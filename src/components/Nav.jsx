import { useState, useEffect, useRef } from 'react'
import { MOD_KEY_K } from '../utils/constants.js'
import { useTheme } from '../utils/ThemeContext.jsx'

// Map each route to a function that triggers the lazy chunk download. Called on
// nav-link hover/focus so the chunk is usually already cached by the time the
// user clicks, eliminating the Suspense flash.
const ROUTE_PRELOADERS = {
  '/':         () => import('../pages/Home.jsx'),
  '/xdr':      () => import('../pages/WhatsNewXDR.jsx'),
  '/sentinel': () => import('../pages/WhatsNewSentinel.jsx'),
  '/purview':  () => import('../pages/WhatsNewPurview.jsx'),
  '/mde':      () => import('../pages/WhatsNewMDE.jsx'),
  '/mdi':      () => import('../pages/WhatsNewMDI.jsx'),
  '/mdo':      () => import('../pages/WhatsNewMDO.jsx'),
  '/mda':      () => import('../pages/WhatsNewMDA.jsx'),
  '/mdfc':     () => import('../pages/WhatsNewMDFC.jsx'),
}

function preloadRoute(hash) {
  ROUTE_PRELOADERS[hash]?.()
}

// __DATA_LAST_MODIFIED__ is replaced at build time by Vite (see vite.config.js)
const DATA_LAST_MODIFIED = new Date(__DATA_LAST_MODIFIED__)
const FORMATTED_LAST_MODIFIED = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short',
}).format(DATA_LAST_MODIFIED)

const TOP_LINKS = [
  { label: "What's New", hash: '/' },
  { label: 'Microsoft Sentinel', hash: '/sentinel' },
  { label: 'Microsoft Purview', hash: '/purview' },
]

const DEFENDER_LINKS = [
  { label: 'Defender XDR', hash: '/xdr' },
  { label: 'Defender for Endpoint', hash: '/mde' },
  { label: 'Defender for Identity', hash: '/mdi' },
  { label: 'Defender for Office 365', hash: '/mdo' },
  { label: 'Defender for Cloud Apps', hash: '/mda' },
  { label: 'Defender for Cloud', hash: '/mdfc' },
]

function NavLink({ link, currentRoute }) {
  const active = currentRoute === link.hash
  return (
    <a
      href={`#${link.hash}`}
      onClick={() => window.scrollTo(0, 0)}
      style={{
        color: active ? 'var(--header-text)' : 'var(--header-text-muted)',
        fontSize: 13,
        fontWeight: active ? 600 : 400,
        textDecoration: 'none',
        padding: '5px 9px',
        borderRadius: 5,
        background: active ? 'var(--header-pill-bg-active)' : 'transparent',
        whiteSpace: 'nowrap',
        transition: 'color 0.12s, background 0.12s',
      }}
      onMouseEnter={e => {
        preloadRoute(link.hash)
        if (!active) {
          e.currentTarget.style.color = 'var(--header-text)'
          e.currentTarget.style.background = 'var(--header-pill-bg-hover)'
        }
      }}
      onFocus={() => preloadRoute(link.hash)}
      onMouseLeave={e => {
        if (!active) {
          e.currentTarget.style.color = 'var(--header-text-muted)'
          e.currentTarget.style.background = 'transparent'
        }
      }}
    >
      {link.label}
    </a>
  )
}

function DefenderDropdown({ currentRoute }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)
  const buttonRef = useRef(null)
  const itemRefs = useRef([])
  const focusFirstOnOpen = useRef(false)
  const closeTimer = useRef(null)
  const isActive = DEFENDER_LINKS.some(l => l.hash === currentRoute)

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    if (!open) return
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [open])

  useEffect(() => {
    if (open && focusFirstOnOpen.current) {
      itemRefs.current[0]?.focus()
      focusFirstOnOpen.current = false
    }
  }, [open])

  useEffect(() => () => cancelClose(), [])

  const focusItem = (i) => {
    const n = DEFENDER_LINKS.length
    const idx = ((i % n) + n) % n
    itemRefs.current[idx]?.focus()
  }

  const onButtonKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      focusFirstOnOpen.current = true
      setOpen(true)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      focusFirstOnOpen.current = false
      setOpen(true)
      setTimeout(() => itemRefs.current[DEFENDER_LINKS.length - 1]?.focus(), 0)
    }
  }

  const onItemKeyDown = (e, i) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      focusItem(i + 1)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      focusItem(i - 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      focusItem(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      focusItem(DEFENDER_LINKS.length - 1)
    } else if (e.key === 'Tab') {
      setOpen(false)
    }
  }

  return (
    <div
      ref={wrapperRef}
      style={{ position: 'relative' }}
      onMouseEnter={() => {
        cancelClose()
        setOpen(true)
        // Preload every Defender chunk as a group — hovering the dropdown is a
        // strong signal the user is about to click one of them.
        DEFENDER_LINKS.forEach(l => preloadRoute(l.hash))
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        ref={buttonRef}
        onClick={() => setOpen(o => !o)}
        onKeyDown={onButtonKeyDown}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="defender-menu"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          color: isActive ? 'var(--header-text)' : 'var(--header-text-muted)',
          fontSize: 13,
          fontWeight: isActive ? 600 : 400,
          padding: '5px 9px',
          borderRadius: 5,
          background: isActive || open ? 'var(--header-pill-bg-active)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          transition: 'color 0.12s, background 0.12s',
        }}
      >
        Defender for …
        <span style={{
          fontSize: 9,
          marginTop: 1,
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.15s',
        }}>▾</span>
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          paddingTop: 6,
          minWidth: 220,
          fontFamily: "'DM Sans', sans-serif",
          zIndex: 150,
        }}>
        <div
          id="defender-menu"
          role="menu"
          aria-label="Defender products"
          style={{
            background: 'var(--bg-panel)',
            borderRadius: 8,
            boxShadow: 'var(--shadow-md)',
            padding: 6,
            border: '1px solid var(--border)',
          }}
        >
          {DEFENDER_LINKS.map((link, i) => {
            const linkActive = currentRoute === link.hash
            return (
              <a
                key={link.hash}
                ref={el => (itemRefs.current[i] = el)}
                href={`#${link.hash}`}
                role="menuitem"
                onClick={() => {
                  window.scrollTo(0, 0)
                  setOpen(false)
                }}
                onKeyDown={(e) => onItemKeyDown(e, i)}
                style={{
                  display: 'block',
                  padding: '8px 12px',
                  borderRadius: 6,
                  color: 'var(--text-strong)',
                  fontSize: 13,
                  fontWeight: linkActive ? 600 : 400,
                  background: linkActive ? 'var(--bg-hover)' : 'transparent',
                  textDecoration: 'none',
                  outline: 'none',
                }}
                onFocus={e => {
                  if (!linkActive) e.currentTarget.style.background = 'var(--bg-elevated)'
                }}
                onBlur={e => {
                  if (!linkActive) e.currentTarget.style.background = 'transparent'
                }}
                onMouseEnter={e => {
                  if (!linkActive) e.currentTarget.style.background = 'var(--bg-elevated)'
                }}
                onMouseLeave={e => {
                  if (!linkActive) e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </a>
            )
          })}
        </div>
        </div>
      )}
    </div>
  )
}

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggle}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 5,
        background: 'var(--header-pill-bg)',
        border: '1px solid var(--header-pill-border)',
        color: 'var(--header-text)',
        fontSize: 14,
        cursor: 'pointer',
        flexShrink: 0,
        fontFamily: 'inherit',
        padding: 0,
        transition: 'background 0.12s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--header-pill-bg-active)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--header-pill-bg)'}
    >
      {isDark ? '☀' : '☾'}
    </button>
  )
}

export default function Nav({ currentRoute }) {
  return (
    <header style={{
      background: `linear-gradient(135deg, var(--header-from), var(--header-to))`,
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      height: 56,
      gap: 8,
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <a href="#/" style={{ color: 'var(--header-text)', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, marginRight: 8, flexShrink: 0 }}>
        🛡 Microsoft Security Changelog
      </a>

      <div style={{ width: 1, height: 20, background: 'var(--header-divider)', flexShrink: 0 }} />

      <nav style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
        <NavLink link={TOP_LINKS[0]} currentRoute={currentRoute} />
        <DefenderDropdown currentRoute={currentRoute} />
        <NavLink link={TOP_LINKS[1]} currentRoute={currentRoute} />
        <NavLink link={TOP_LINKS[2]} currentRoute={currentRoute} />
      </nav>

      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          lineHeight: 1.15,
          flexShrink: 0,
          marginRight: 4,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <span style={{ fontSize: 9, color: 'var(--header-text-faint)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Data last updated
        </span>
        <span style={{ fontSize: 11, color: 'var(--header-text-muted)', whiteSpace: 'nowrap' }}>
          {FORMATTED_LAST_MODIFIED}
        </span>
      </span>

      <ThemeToggle />

      <button
        onClick={() => window.dispatchEvent(new CustomEvent('palette:open'))}
        title={`Search (${MOD_KEY_K})`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '5px 10px',
          borderRadius: 5,
          background: 'var(--header-pill-bg)',
          border: '1px solid var(--header-pill-border)',
          color: 'var(--header-text-muted)',
          fontSize: 12,
          cursor: 'pointer',
          flexShrink: 0,
          fontFamily: 'inherit',
        }}
      >
        <span>🔍</span>
        <span style={{ fontSize: 12 }}>Search</span>
        <kbd style={{
          fontSize: 10,
          background: 'var(--header-kbd-bg)',
          border: '1px solid var(--header-kbd-border)',
          borderRadius: 3,
          padding: '1px 5px',
          fontFamily: 'inherit',
        }}>{MOD_KEY_K}</kbd>
      </button>
    </header>
  )
}
