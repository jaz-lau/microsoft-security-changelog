import { useState, useMemo, useEffect, useLayoutEffect, useRef } from 'react'
import UpdateEntry from './UpdateEntry.jsx'
import ReleasesSection from './ReleasesSection.jsx'
import Tooltip from './Tooltip.jsx'
import { MONTH_NAMES, makeUpdateId } from '../utils/constants.js'

const STATUS_PILL = {
  ga:      { color: '#1E40AF' },
  preview: { color: '#5B21B6' },
  change:  { color: '#9A3412' },
}

function currentMonthStr() {
  const now = new Date()
  return MONTH_NAMES[now.getMonth()] + ' ' + now.getFullYear()
}

function isCurrent(monthStr) {
  const [mon, yr] = monthStr.split(' ')
  const now = new Date()
  return parseInt(yr) === now.getFullYear() && MONTH_NAMES.indexOf(mon) === now.getMonth()
}

function sortProducts(products, productOrder) {
  return [...products].sort((a, b) => {
    const ai = productOrder.indexOf(a.product)
    const bi = productOrder.indexOf(b.product)
    if (ai === -1 && bi === -1) return 0
    if (ai === -1) return 1
    if (bi === -1) return -1
    return ai - bi
  })
}

function Timeline({ data, filteredMonths, scrollTo, paddingTop = 80 }) {
  const [reachedMonths, setReachedMonths] = useState(new Set())
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setAtBottom(window.scrollY + window.innerHeight >= document.body.scrollHeight - 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Reset when data/filter changes
    setReachedMonths(new Set())

    // Fire when the hairline (10px below element top) reaches the second dot centre.
    // Second dot centre = sticky_top(20) + paddingTop + dot1_h(10) + gap(20) + dot2_half(4) = paddingTop + 54
    // Element top at that moment = paddingTop + 54 - 10 = paddingTop + 44 (matches scrollTo targetY)
    const triggerY = paddingTop + 44
    const bottomMargin = Math.max(0, window.innerHeight - triggerY)
    const rootMargin = `0px 0px -${bottomMargin}px 0px`

    const observers = []
    data.forEach(m => {
      const el = document.getElementById('month-' + m.month.replace(' ', '-'))
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setReachedMonths(prev => new Set([...prev, m.month]))
          } else if (entry.boundingClientRect.top > 0) {
            // Element is below the trigger zone — user scrolled back up past it
            setReachedMonths(prev => {
              const next = new Set(prev)
              next.delete(m.month)
              return next
            })
          }
        },
        { threshold: 0, rootMargin }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [data, filteredMonths, paddingTop])

  // Current visible month = latest reached month in the data order
  const currentVisible = data.filter(m => reachedMonths.has(m.month)).at(-1)?.month ?? null

  return (
    <div style={{
      width: 32, flexShrink: 0, position: 'sticky', top: 20,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      paddingTop,
    }}>
      <div style={{
        position: 'absolute', top: paddingTop + 4, bottom: 12, width: 1,
        background: 'var(--border)', zIndex: 0,
      }} />
      {data.map((m, idx) => {
        const hasContent = filteredMonths.some(fm => fm.month === m.month)
        const reached = reachedMonths.has(m.month)
        const isFirst = idx === 0
        const isLast = idx === data.length - 1
        const active = hasContent && (reached || isFirst || atBottom)
        const isCurrent = m.month === currentVisible
        const alwaysShowLabel = isFirst || isLast || (!atBottom && isCurrent)
        return (
          <div
            key={m.month}
            style={{
              position: 'relative', zIndex: 1,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              marginBottom: idx < data.length - 1 ? 20 : 0,
            }}
            onMouseEnter={e => {
              const label = e.currentTarget.querySelector('.dot-label')
              if (label && !alwaysShowLabel) label.style.opacity = '1'
            }}
            onMouseLeave={e => {
              const label = e.currentTarget.querySelector('.dot-label')
              if (label && !alwaysShowLabel) label.style.opacity = '0'
            }}
          >
            <button
              className="timeline-dot"
              onClick={() => scrollTo(m.month)}
              disabled={!hasContent}
              style={{
                width: active ? 10 : 8,
                height: active ? 10 : 8,
                borderRadius: '50%',
                background: active ? 'var(--text-strong)' : 'var(--text-placeholder)',
                border: active ? '2px solid var(--bg-panel)' : 'none',
                boxShadow: active ? '0 0 0 1px var(--text-subtle)' : 'none',
                cursor: hasContent ? 'pointer' : 'default',
                padding: 0, flexShrink: 0,
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => {
                if (!active) return
                e.currentTarget.style.background = 'var(--text-strong)'
                e.currentTarget.style.boxShadow = '0 0 0 2px var(--text-placeholder)'
              }}
              onMouseLeave={e => {
                if (!active) return
                e.currentTarget.style.background = 'var(--text-strong)'
                e.currentTarget.style.boxShadow = '0 0 0 1px var(--text-subtle)'
              }}
            />
            <span
              className="dot-label"
              style={{
                position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)',
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                color: active ? 'var(--text-default)' : 'var(--text-muted)',
                fontWeight: active ? 600 : 400,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                userSelect: 'none',
                opacity: alwaysShowLabel ? 1 : 0,
                transition: 'opacity 0.15s, color 0.15s',
              }}
            >{m.month}</span>
          </div>
        )
      })}
    </div>
  )
}

export default function WhatsNewView({ data, productOrder, hideProductFilter = false, hideProductHeader = false, releasesAlwaysOpen = false, releasesOnly = false, releaseUnit = '', extraFilter = null }) {
  const currentMonth = currentMonthStr()
  const [pendingUpdateId, setPendingUpdateId] = useState(() => window.__pendingUpdate || null)

  useEffect(() => {
    const handler = () => setPendingUpdateId(window.__pendingUpdate)
    window.addEventListener('pendingUpdate', handler)
    return () => window.removeEventListener('pendingUpdate', handler)
  }, [])

  const allProducts = useMemo(() => {
    const seen = new Set()
    const list = []
    data.forEach(m =>
      sortProducts(m.products, productOrder).forEach(p => {
        if (!seen.has(p.product)) { seen.add(p.product); list.push({ product: p.product, icon: p.icon }) }
      })
    )
    return list
  }, [data, productOrder])

  const [activeProduct, setActiveProduct] = useState('all')
  const [activeStatus, setActiveStatus] = useState('all')
  const [activeSeverity, setActiveSeverity] = useState('all')
  const hasStatusData = useMemo(() =>
    data.some(m => m.products.some(p => p.updates.some(u => u.status && u.status !== 'unspecified')))
  , [data])

  const filteredMonths = useMemo(() => {
    const baseData = data.some(m => m.month === currentMonth)
      ? data
      : [{ month: currentMonth, products: [] }, ...data]
    return baseData.map(m => ({
      ...m,
      products: sortProducts(m.products, productOrder)
        .filter(p => activeProduct === 'all' || p.product === activeProduct)
        .map(p => ({
          ...p,
          updates: p.updates
            .map((u, i) => ({ ...u, _origIndex: i }))
            .filter(u => (activeStatus === 'all' || u.status === activeStatus) && (activeSeverity === 'all' || u.severity === activeSeverity))
            .sort((a, b) => {
              const order = { critical: 0, important: 1, minor: 2 }
              return (order[a.severity] ?? 3) - (order[b.severity] ?? 3)
            }),
        }))
        .filter(p => p.updates.length > 0 || (p.releases && p.releases.length > 0)),
    })).filter(m => m.products.length > 0 || m.month === currentMonth)
  }, [data, productOrder, activeProduct, activeStatus, activeSeverity, currentMonth])

  // Group filtered months by year, preserving order
  const monthsByYear = useMemo(() => {
    const groups = []
    filteredMonths.forEach(month => {
      const year = month.month.split(' ')[1]
      const last = groups[groups.length - 1]
      if (last && last.year === year) {
        last.months.push(month)
      } else {
        groups.push({ year, months: [month] })
      }
    })
    return groups
  }, [filteredMonths])

  // Measure first month hairline position to align the first timeline dot with it
  const contentColRef = useRef(null)
  const [timelinePad, setTimelinePad] = useState(80)
  useLayoutEffect(() => {
    if (!contentColRef.current) return
    const firstMonth = contentColRef.current.querySelector('[id^="month-"]')
    if (!firstMonth) return
    const colTop = contentColRef.current.getBoundingClientRect().top
    const monthTop = firstMonth.getBoundingClientRect().top
    const hairlineCenter = (monthTop - colTop) + 10
    const pad = Math.max(5, hairlineCenter - 5)
    setTimelinePad(prev => prev === pad ? prev : pad)
  }, [monthsByYear])

  function scrollTo(month) {
    const el = document.getElementById('month-' + month.replace(' ', '-'))
    if (!el) return
    // targetY = second dot centre in sticky position, minus pill half-height so the hairline lands there.
    // Formula: sticky_top(20) + timelinePad + dot1_height(10) + gap(20) + dot2_half(4) - pill_half(10) = timelinePad + 44
    const targetY = timelinePad + 44
    const top = el.getBoundingClientRect().top + window.scrollY - targetY
    window.scrollTo({ top, behavior: 'smooth' })
    // Pop-highlight the month so the user gets visual confirmation of where they landed
    el.classList.remove('update-pop')
    void el.offsetWidth
    el.classList.add('update-pop')
    setTimeout(() => el.classList.remove('update-pop'), 1700)
  }

  // Scroll to a pending update target set by the command palette, then pop-highlight it
  useEffect(() => {
    if (!pendingUpdateId) return
    // Defer until after layout so the entry has been rendered (and opened via initialOpen)
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(pendingUpdateId)
      if (el) {
        const rect = el.getBoundingClientRect()
        // Center the entry vertically in the viewport
        const top = rect.top + window.scrollY - (window.innerHeight / 2) + (rect.height / 2)
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
        // Restart the animation by removing + forcing reflow + re-adding
        el.classList.remove('update-pop')
        void el.offsetWidth
        el.classList.add('update-pop')
        setTimeout(() => el.classList.remove('update-pop'), 1700)
      }
      window.__pendingUpdate = null
      setPendingUpdateId(null)
    })
    return () => cancelAnimationFrame(raf)
  }, [pendingUpdateId, filteredMonths])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Filter bar */}
      {(!hideProductFilter || hasStatusData || extraFilter) && <div style={{
        background: 'var(--bg-panel)', border: '1px solid var(--border)', borderRadius: 10,
        padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        {!hideProductFilter && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 10.5, color: 'var(--text-placeholder)', fontWeight: 600, letterSpacing: '0.07em', minWidth: 46 }}>
              PRODUCT
            </span>
            <button
              className={'chip' + (activeProduct === 'all' ? ' active' : '')}
              onClick={() => setActiveProduct('all')}
            >All</button>
            {allProducts.map(({ product, icon }) => (
              <button
                key={product}
                className={'chip' + (activeProduct === product ? ' active' : '')}
                onClick={() => setActiveProduct(activeProduct === product ? 'all' : product)}
              >{icon} {product}</button>
            ))}
          </div>
        )}

        {hasStatusData && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
            <Tooltip text="GA = production-ready · Preview = pre-release · Change = deprecation or breaking change">
              <span style={{ fontSize: 10.5, color: 'var(--text-placeholder)', fontWeight: 600, letterSpacing: '0.07em', minWidth: 46 }}>
                STATUS
              </span>
            </Tooltip>
            {[
              ['all', 'All'],
              ['ga', 'GA'],
              ['preview', 'Preview'],
              ['change', 'Change'],
            ].map(([val, label]) => (
              <button
                key={val}
                className={'chip' + (activeStatus === val ? ' active' : '')}
                onClick={() => setActiveStatus(val)}
                style={activeStatus !== val && val !== 'all' ? {
                  color: STATUS_PILL[val]?.color,
                } : {}}
              >{label}</button>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
          <Tooltip text="Action Required = deprecation or deadline · Important = major feature · Minor = incremental update">
            <span style={{ fontSize: 10.5, color: 'var(--text-placeholder)', fontWeight: 600, letterSpacing: '0.07em', minWidth: 46 }}>
              SEVERITY
            </span>
          </Tooltip>
          {[
            ['all', 'All', null],
            ['critical', 'Action Required', '#EF4444'],
            ['important', 'Important', '#F59E0B'],
            ['minor', 'Minor', '#10B981'],
          ].map(([val, label, dotColor]) => (
            <button
              key={val}
              className={'chip' + (activeSeverity === val ? ' active' : '')}
              onClick={() => setActiveSeverity(val)}
              style={activeSeverity !== val && dotColor ? { color: dotColor } : {}}
            >{label}</button>
          ))}
        </div>

        {extraFilter}
      </div>}

      {/* Filter summary */}
      {(activeProduct !== 'all' || activeStatus !== 'all' || activeSeverity !== 'all') && (() => {
        const totalUpdates = filteredMonths.reduce((s, m) => s + m.products.reduce((ps, p) => ps + p.updates.length, 0), 0)
        const clearAll = () => { setActiveProduct('all'); setActiveStatus('all'); setActiveSeverity('all') }
        return (
          <p style={{ fontSize: 12, color: 'var(--text-placeholder)', marginTop: -8 }}>
            <strong style={{ color: 'var(--text-muted)' }}>{totalUpdates}</strong> update{totalUpdates !== 1 ? 's' : ''} matching current filters
            {' · '}
            <button onClick={clearAll} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-link)', fontSize: 12, padding: 0, fontFamily: "'DM Sans', sans-serif" }}>
              Clear all filters
            </button>
          </p>
        )
      })()}

      {/* Legend — sits under filter, above content */}
      {!releasesOnly && (
        <p style={{ fontSize: 11, color: 'var(--text-placeholder)', fontFamily: "'DM Mono', monospace", marginTop: -8, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#EF4444', display: 'inline-block' }} /> action required
          <span style={{ margin: '0 2px' }}>·</span>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} /> important
          <span style={{ margin: '0 2px' }}>·</span>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} /> minor
        </p>
      )}

      {/* Main: heading + content + timeline sidebar */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-strong)' }}>Platform What's New</h2>
          <span style={{ fontSize: 12, color: 'var(--text-placeholder)' }}>
            Sourced from Microsoft Learn · click any item to expand
          </span>
        </div>

        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>

          {/* Left: year-grouped month content */}
          <div ref={contentColRef} style={{ flex: 1, minWidth: 0 }}>
            {filteredMonths.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 16px', color: 'var(--text-placeholder)', border: '1px dashed var(--border)', borderRadius: 10 }}>
                <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>No updates match the current filter</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                {monthsByYear.map(({ year, months: yearMonths }) => (
                  <div key={year}>
                    {/* Sticky year banner — must match page bg so it blends when scrolling */}
                    <div style={{
                      position: 'sticky', top: 56, zIndex: 10,
                      display: 'flex', alignItems: 'center', gap: 12,
                      marginBottom: 16, paddingBottom: 8,
                      background: 'var(--bg)',
                    }}>
                      <span style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 22, fontWeight: 700,
                        color: 'var(--text-strong)', letterSpacing: '-0.02em',
                      }}>{year}</span>
                      <div style={{ flex: 1, height: 1, background: 'var(--text-subtle)' }} />
                    </div>

                    {/* Months in this year */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      {yearMonths.map(monthGroup => {
                        const monthName = monthGroup.month.split(' ')[0]
                        return (
                          <div key={monthGroup.month} id={'month-' + monthGroup.month.replace(' ', '-')}>
                            {/* Month pill + hairline + feature count */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                              <span style={{
                                fontFamily: "'DM Mono', monospace", fontSize: 12, fontWeight: 700,
                                color: 'var(--text-strong)', background: 'var(--bg-pill)', padding: '3px 10px', borderRadius: 5,
                              }}>{monthName}</span>
                              <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                              <span style={{ fontSize: 11, color: 'var(--text-placeholder)', fontFamily: "'DM Mono', monospace" }}>
                                {(() => {
                                  if (releasesOnly) {
                                    const n = monthGroup.products.reduce((s, p) => s + (p.releases?.length ?? 0), 0)
                                    return `${n} release${n !== 1 ? 's' : ''}`
                                  }
                                  const n = monthGroup.products.reduce((s, p) => s + p.updates.length, 0)
                                  return `${n} feature${n !== 1 ? 's' : ''}`
                                })()}
                              </span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                              {monthGroup.products.length === 0 ? (
                                <div style={{
                                  padding: '16px 18px', background: 'var(--bg-panel)', border: '1px solid var(--border)',
                                  borderRadius: 10, textAlign: 'center',
                                }}>
                                  <span style={{ fontSize: 12, color: 'var(--text-placeholder)', fontStyle: 'italic' }}>
                                    {isCurrent(monthGroup.month)
                                      ? `No ${releaseUnit ? releaseUnit + ' ' : ''}updates released by Microsoft yet this month`
                                      : `No ${releaseUnit ? releaseUnit + ' ' : ''}updates this month`}
                                  </span>
                                </div>
                              ) : monthGroup.products.map(product => (
                                <div key={product.product} style={{
                                  background: 'var(--bg-panel)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden',
                                }}>
                                  {!hideProductHeader && (
                                    <div style={{
                                      display: 'flex', alignItems: 'center', gap: 8,
                                      padding: '9px 18px', background: 'var(--bg-elevated)', borderBottom: '1px solid var(--border-subtle)',
                                    }}>
                                      <span style={{ fontSize: 14 }}>{product.icon}</span>
                                      <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--text-strong)' }}>{product.product}</span>
                                      <span style={{ marginLeft: 'auto', fontSize: 10, fontFamily: "'DM Mono', monospace", color: 'var(--text-placeholder)' }}>
                                        {product.updates && product.updates.length > 0
                                          ? `${product.updates.length} update${product.updates.length !== 1 ? 's' : ''}`
                                          : product.releases && product.releases.length > 0
                                            ? `${product.releases.length} release${product.releases.length !== 1 ? 's' : ''}`
                                            : ''}
                                      </span>
                                    </div>
                                  )}

                                  {product.releases && product.releases.length > 0 && (
                                    <ReleasesSection releases={product.releases} alwaysOpen={releasesAlwaysOpen} />
                                  )}

                                  {!releasesOnly && product.releases && product.releases.length > 0 && product.updates && product.updates.length > 0 && (
                                    <div style={{
                                      padding: '6px 18px', borderBottom: '1px solid var(--border-subtle)',
                                      background: 'var(--bg-alt)',
                                    }}>
                                      <span style={{
                                        fontSize: 10, fontWeight: 600, letterSpacing: '0.06em',
                                        color: 'var(--text-placeholder)', fontFamily: "'DM Mono', monospace",
                                      }}>FEATURES</span>
                                    </div>
                                  )}

                                  {product.updates && product.updates.map((u, i) => {
                                    const updateId = makeUpdateId(product.product, monthGroup.month, u._origIndex ?? i)
                                    return (
                                      <UpdateEntry
                                        key={i}
                                        u={u}
                                        id={updateId}
                                        initialOpen={pendingUpdateId === updateId}
                                      />
                                    )
                                  })}
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: sticky dot timeline */}
          <Timeline data={data} filteredMonths={filteredMonths} scrollTo={scrollTo} paddingTop={timelinePad} />

        </div>
      </div>
    </div>
  )
}
