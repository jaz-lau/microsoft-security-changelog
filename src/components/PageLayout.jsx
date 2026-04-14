import { useEffect } from 'react'
import StatsBar from './StatsBar.jsx'

const SITE_NAME = 'Microsoft Security Changelog'

export default function PageLayout({ icon, title, description, statsData, statsItems, tabs, activeTab, onTabChange, docsUrl, githubUrl, children }) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME
  }, [title])

  return (
    <main>
      <div style={{
        background: `linear-gradient(135deg, var(--header-from), var(--header-to))`,
        padding: '16px 24px 0',
        color: 'var(--header-text)',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1 style={{ color: 'var(--header-text)', fontSize: 28, marginBottom: 8 }}>
            {icon} {title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <p style={{ color: 'var(--header-text-muted)', fontSize: 15, margin: 0 }}>
              {description}
            </p>
            {docsUrl && (
              <a
                href={docsUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 11,
                  color: 'var(--header-text-faint)',
                  textDecoration: 'none',
                  fontFamily: "'DM Mono', monospace",
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--header-text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--header-text-faint)'}
              >MS Learn ↗</a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: 11,
                  color: 'var(--header-text-faint)',
                  textDecoration: 'none',
                  fontFamily: "'DM Mono', monospace",
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--header-text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--header-text-faint)'}
              >GitHub ↗</a>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 6 }}>
            {tabs ? (
              <div style={{ display: 'flex', gap: 4 }}>
                {tabs.map(t => (
                  <button
                    key={t.id}
                    onClick={() => onTabChange(t.id)}
                    style={{
                      background: activeTab === t.id ? 'var(--bg-panel)' : 'var(--header-pill-bg-active)',
                      color: activeTab === t.id ? 'var(--text-strong)' : 'var(--header-text)',
                      border: 'none',
                      borderRadius: '6px 6px 0 0',
                      padding: '8px 18px',
                      fontSize: 13,
                      fontWeight: activeTab === t.id ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'background 0.12s, color 0.12s',
                    }}
                    onMouseEnter={e => {
                      if (activeTab !== t.id) {
                        e.currentTarget.style.background = 'var(--header-pill-bg-hover)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (activeTab !== t.id) {
                        e.currentTarget.style.background = 'var(--header-pill-bg-active)'
                      }
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            ) : <div />}
            {statsItems ? <StatsBar items={statsItems} /> : (statsData && <StatsBar data={statsData} />)}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '20px 28px' }}>
        {children}
      </div>
    </main>
  )
}
