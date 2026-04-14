import { useState, useEffect, useRef, useMemo } from 'react'
import { PLATFORM_UPDATES } from '../data/platform-all.js'
import { makeUpdateId } from '../utils/constants.js'

const PRODUCT_TO_ROUTE = {
  'Microsoft Defender XDR': '/xdr',
  'Microsoft Sentinel': '/sentinel',
  'Microsoft Defender for Endpoint': '/mde',
  'Microsoft Defender for Identity': '/mdi',
  'Microsoft Defender for Office 365': '/mdo',
  'Microsoft Defender for Cloud Apps': '/mda',
  'Microsoft Defender for Cloud': '/mdfc',
  'Microsoft Purview': '/purview',
  'Unified Security Operations': '/xdr',
}

const PRODUCT_PAGES = [
  { label: "What's New", hash: '/' },
  { label: 'Defender XDR', hash: '/xdr' },
  { label: 'Microsoft Sentinel', hash: '/sentinel' },
  { label: 'Defender for Endpoint', hash: '/mde' },
  { label: 'Defender for Identity', hash: '/mdi' },
  { label: 'Defender for Office 365', hash: '/mdo' },
  { label: 'Defender for Cloud Apps', hash: '/mda' },
  { label: 'Defender for Cloud', hash: '/mdfc' },
  { label: 'Microsoft Purview', hash: '/purview' },
]

const KIND_LABEL = { page: 'Page', update: 'Update', solution: 'Solution' }
const KIND_ORDER = { page: 0, update: 1, solution: 2 }

const KIND_FILTERS = [
  { value: 'all',      label: 'All' },
  { value: 'page',     label: 'Pages' },
  { value: 'update',   label: 'Updates' },
  { value: 'solution', label: 'Solutions' },
]

function buildCoreIndex() {
  const items = []

  for (const p of PRODUCT_PAGES) {
    items.push({
      kind: 'page',
      icon: '📄',
      title: p.label,
      subtitle: 'Product page',
      hash: p.hash,
      haystack: p.label.toLowerCase(),
    })
  }

  for (const month of PLATFORM_UPDATES) {
    for (const group of month.products) {
      const route = PRODUCT_TO_ROUTE[group.product] || '/'
      const icon = group.icon || '📌'
      ;(group.updates || []).forEach((update, i) => {
        const summary = update.summary || ''
        items.push({
          kind: 'update',
          icon,
          title: summary,
          subtitle: `${group.product} · ${month.month}`,
          status: update.status,
          severity: update.severity,
          hash: route,
          scrollId: makeUpdateId(group.product, month.month, i),
          haystack: summary.toLowerCase(),
        })
      })
    }
  }

  return items
}

function solutionItems(solutions) {
  return solutions.map(sol => {
    const entryCount = sol.entries.length
    const lastDate = sol.entries[0]?.date || ''
    return {
      kind: 'solution',
      icon: '📦',
      title: sol.name,
      subtitle: `${entryCount} changelog ${entryCount === 1 ? 'entry' : 'entries'}${lastDate ? ` · last updated ${lastDate}` : ''}`,
      solutionName: sol.name,
      haystack: `${sol.name} ${sol.alias || ''}`.toLowerCase(),
    }
  })
}

function searchIndex(index, query, kindFilter, currentPageOnly, currentRoute) {
  let pool = kindFilter === 'all' ? index : index.filter(i => i.kind === kindFilter)
  if (currentPageOnly) {
    // Scope to items whose hash matches the current route. Solutions don't have a hash, so they
    // only count if the user is currently on /sentinel (where solutions live).
    pool = pool.filter(i => {
      if (i.hash) return i.hash === currentRoute
      if (i.solutionName) return currentRoute === '/sentinel'
      return false
    })
  }
  if (!query.trim()) {
    // Empty query: no results when "All" is selected, browse list when a kind filter is set
    return kindFilter === 'all' && !currentPageOnly ? [] : pool.slice(0, 50)
  }
  const tokens = query.toLowerCase().trim().split(/\s+/)
  const matches = []
  for (const item of pool) {
    if (tokens.every(t => item.haystack.includes(t))) {
      matches.push(item)
    }
  }
  matches.sort((a, b) => KIND_ORDER[a.kind] - KIND_ORDER[b.kind])
  return matches.slice(0, 50)
}

function highlight(text, query) {
  if (!query.trim() || !text) return text
  const tokens = query.trim().split(/\s+/).filter(t => t.length > 1)
  if (tokens.length === 0) return text
  const escaped = tokens.map(t => t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'))
  const re = new RegExp(`(${escaped.join('|')})`, 'gi')
  const parts = text.split(re)
  return parts.map((part, i) => {
    const isMatch = tokens.some(t => part.toLowerCase() === t.toLowerCase())
    return isMatch
      ? <mark key={i} style={{ background: 'var(--highlight-bg)', color: 'inherit', padding: 0, borderRadius: 2 }}>{part}</mark>
      : <span key={i}>{part}</span>
  })
}

export default function CommandPalette({ currentRoute = '/' }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [kindFilter, setKindFilter] = useState('all')
  const [currentPageOnly, setCurrentPageOnly] = useState(false)
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)
  const itemRefs = useRef([])

  const coreIndex = useMemo(buildCoreIndex, [])
  const [solIndex, setSolIndex] = useState([])

  // Lazy-load the solutions dataset the first time the palette opens. The dataset
  // is large (~600 KB raw, mostly in solutions.js) so deferring it keeps it out
  // of the initial bundle.
  useEffect(() => {
    if (!open || solIndex.length > 0) return
    let cancelled = false
    import('../data/solutions-data.js').then(mod => {
      if (!cancelled) setSolIndex(solutionItems(mod.SOLUTIONS))
    })
    return () => { cancelled = true }
  }, [open, solIndex.length])

  const index = useMemo(() => [...coreIndex, ...solIndex], [coreIndex, solIndex])
  const results = useMemo(
    () => searchIndex(index, query, kindFilter, currentPageOnly, currentRoute),
    [index, query, kindFilter, currentPageOnly, currentRoute]
  )

  // Friendly name for the current page (used in the scope subtitle when "current page only" is on)
  const currentPageName = PRODUCT_PAGES.find(p => p.hash === currentRoute)?.label ?? 'this page'

  // Which kind filters make sense given the current scope
  const visibleKindFilters = useMemo(() => {
    if (!currentPageOnly) return KIND_FILTERS
    // When scoped to a single page: hide "Pages" (would always be just the current page),
    // and hide "Solutions" unless we're on the Sentinel page (the only page that has them).
    return KIND_FILTERS.filter(f => {
      if (f.value === 'page') return false
      if (f.value === 'solution') return currentRoute === '/sentinel'
      return true
    })
  }, [currentPageOnly, currentRoute])

  // If the active kind filter just got hidden by toggling current-page-only on, reset to "all"
  useEffect(() => {
    if (!visibleKindFilters.some(f => f.value === kindFilter)) {
      setKindFilter('all')
    }
  }, [visibleKindFilters, kindFilter])

  const closePalette = () => {
    setOpen(false)
    setQuery('')
    setKindFilter('all')
    setCurrentPageOnly(false)
    setSelected(0)
  }

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (open) closePalette()
        else setOpen(true)
      } else if (e.key === 'Escape' && open) {
        closePalette()
      }
    }
    const openHandler = () => setOpen(true)
    window.addEventListener('keydown', handler)
    window.addEventListener('palette:open', openHandler)
    return () => {
      window.removeEventListener('keydown', handler)
      window.removeEventListener('palette:open', openHandler)
    }
  }, [open])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [open])

  useEffect(() => {
    if (selected >= results.length) setSelected(Math.max(0, results.length - 1))
  }, [results.length, selected])

  useEffect(() => {
    itemRefs.current[selected]?.scrollIntoView({ block: 'nearest' })
  }, [selected])

  if (!open) return null

  const handleSelect = (item) => {
    if (item.scrollId) {
      window.__pendingUpdate = item.scrollId
      window.dispatchEvent(new CustomEvent('pendingUpdate'))
    } else if (item.solutionName) {
      window.dispatchEvent(new CustomEvent('showSolution', { detail: { solutionName: item.solutionName } }))
    } else if (item.hash) {
      window.scrollTo(0, 0)
    }
    closePalette()
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected(i => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      itemRefs.current[selected]?.click()
    }
  }

  return (
    <div
      onClick={closePalette}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-overlay)',
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'blur(2px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '12vh',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: 'min(640px, 92vw)',
          background: 'var(--bg-panel)',
          borderRadius: 12,
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          fontFamily: "'DM Sans', sans-serif",
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 16px',
          borderBottom: '1px solid var(--border)',
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 16, color: 'var(--text-placeholder)' }}>🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => { setQuery(e.target.value); setSelected(0) }}
            onKeyDown={onKeyDown}
            placeholder="Search…"
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: 15,
              color: 'var(--text-strong)',
              background: 'transparent',
              fontFamily: 'inherit',
            }}
          />
          <button
            onClick={closePalette}
            title="Close (Esc)"
            aria-label="Close"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 26,
              height: 26,
              borderRadius: 6,
              background: 'var(--border-subtle)',
              border: '1px solid var(--border)',
              color: 'var(--text-faint)',
              fontSize: 16,
              lineHeight: 1,
              cursor: 'pointer',
              fontFamily: 'inherit',
              padding: 0,
              flexShrink: 0,
              transition: 'all 0.12s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-strong)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--border-subtle)'
              e.currentTarget.style.color = 'var(--text-faint)'
            }}
          >×</button>
        </div>

        {/* Kind filter + scope toggle */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '10px 16px',
          borderBottom: '1px solid var(--border-subtle)',
          flexShrink: 0,
          background: 'var(--bg-input)',
        }}>
          {visibleKindFilters.map(f => {
            const active = kindFilter === f.value
            return (
              <button
                key={f.value}
                onClick={() => { setKindFilter(f.value); setSelected(0); inputRef.current?.focus() }}
                style={{
                  padding: '4px 11px',
                  borderRadius: 999,
                  fontSize: 11,
                  border: '1px solid',
                  borderColor: active ? 'var(--text-strong)' : 'var(--border)',
                  background: active ? 'var(--text-strong)' : 'var(--bg-panel)',
                  color: active ? 'var(--bg-panel)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontWeight: active ? 600 : 400,
                  transition: 'all 0.12s',
                  whiteSpace: 'nowrap',
                }}
              >
                {f.label}
              </button>
            )
          })}

          <div style={{ flex: 1 }} />

          <button
            onClick={() => { setCurrentPageOnly(v => !v); setSelected(0); inputRef.current?.focus() }}
            title="Restrict results to the page you're currently on"
            style={{
              padding: '4px 11px',
              borderRadius: 999,
              fontSize: 11,
              border: '1px solid',
              borderColor: currentPageOnly ? 'var(--accent-info)' : 'var(--border)',
              background: currentPageOnly ? 'var(--accent-info)' : 'var(--bg-panel)',
              color: currentPageOnly ? 'var(--bg-panel)' : 'var(--text-muted)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: currentPageOnly ? 600 : 400,
              transition: 'all 0.12s',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <span style={{ fontSize: 9 }}>{currentPageOnly ? '●' : '○'}</span>
            Current page only
          </button>
        </div>

        {currentPageOnly && (
          <div style={{
            padding: '6px 16px',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--bg-info)',
            fontSize: 11,
            color: 'var(--accent-info)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            flexShrink: 0,
            fontFamily: "'DM Mono', monospace",
          }}>
            <span style={{ fontSize: 9 }}>●</span>
            Scope: {currentPageName}
          </div>
        )}

        {(results.length > 0 || query) && (
        <div style={{ maxHeight: 'min(50vh, 480px)', overflowY: 'auto', padding: 6 }}>
          {results.length === 0 && query && (
            <div style={{ padding: '28px 16px', textAlign: 'center', fontSize: 13, color: 'var(--text-placeholder)' }}>
              No matches for "{query}"
            </div>
          )}
          {results.map((item, i) => (
            <a
              key={i}
              href={item.hash ? `#${item.hash}` : undefined}
              ref={el => (itemRefs.current[i] = el)}
              onMouseEnter={() => setSelected(i)}
              onClick={() => handleSelect(item)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                padding: '10px 12px',
                borderRadius: 8,
                cursor: 'pointer',
                background: selected === i ? 'var(--border-subtle)' : 'transparent',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <span style={{ fontSize: 18, lineHeight: 1.2, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 14,
                  color: 'var(--text-strong)',
                  lineHeight: 1.35,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}>
                  {highlight(item.title, query)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 2 }}>
                  {highlight(item.subtitle, query)}
                </div>
              </div>
              <span style={{
                fontSize: 9,
                color: 'var(--text-faint)',
                background: 'var(--border-subtle)',
                padding: '2px 6px',
                borderRadius: 4,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
                fontWeight: 600,
                flexShrink: 0,
                marginTop: 2,
              }}>
                {KIND_LABEL[item.kind]}
              </span>
            </a>
          ))}
        </div>
        )}

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 14px',
          borderTop: '1px solid var(--border)',
          fontSize: 11,
          color: 'var(--text-faint)',
          background: 'var(--bg-elevated)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span><kbd style={kbdInlineStyle}>↑</kbd><kbd style={kbdInlineStyle}>↓</kbd> navigate</span>
            <span><kbd style={kbdInlineStyle}>↵</kbd> select</span>
            <span><kbd style={kbdInlineStyle}>esc</kbd> close</span>
          </div>
          <span>{results.length} {results.length === 1 ? 'result' : 'results'}</span>
        </div>
      </div>
    </div>
  )
}

const kbdInlineStyle = {
  fontSize: 10,
  color: 'var(--text-faint)',
  background: 'var(--bg-panel)',
  border: '1px solid var(--border)',
  borderRadius: 3,
  padding: '1px 5px',
  marginRight: 3,
  fontFamily: "'DM Sans', sans-serif",
}
