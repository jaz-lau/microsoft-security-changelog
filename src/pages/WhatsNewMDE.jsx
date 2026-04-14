import { useState, useEffect } from 'react'
import PageLayout from '../components/PageLayout.jsx'
import WhatsNewView from '../components/WhatsNewView.jsx'
import { PLATFORM_UPDATES } from '../data/platform-mde.js'

const PRODUCT_ORDER = ['Microsoft Defender for Endpoint']

const TABS = [
  { id: 'features', label: 'Product Updates' },
  { id: 'releases', label: 'Platform Releases' },
]

const PLATFORM_ORDER = ['Windows', 'macOS', 'Linux', 'Android', 'iOS']
const ALL_PLATFORMS = PLATFORM_ORDER.filter(p =>
  PLATFORM_UPDATES.some(m =>
    m.products.some(prod => (prod.releases || []).some(r => r.platform === p))
  )
)

function forReleasesTab(data, os) {
  return data
    .map(m => ({
      ...m,
      products: m.products
        .filter(p => p.releases && p.releases.length > 0)
        .map(p => ({
          ...p,
          releases: os === 'all' ? p.releases : p.releases.filter(r => r.platform === os),
          updates: [],
        }))
        .filter(p => p.releases.length > 0),
    }))
    .filter(m => m.products.length > 0)
}

function forFeaturesTab(data) {
  return data
    .map(m => ({
      ...m,
      products: m.products
        .filter(p => p.updates && p.updates.length > 0)
        .map(p => ({ ...p, releases: [] })),
    }))
    .filter(m => m.products.length > 0)
}

export default function WhatsNewMDE() {
  const [activeTab, setActiveTab] = useState('features')
  const [selectedOS, setSelectedOS] = useState('all')

  // Updates only render in the 'features' tab (the 'releases' tab strips updates from data).
  // When the command palette navigates here with a pending update, force the right tab.
  useEffect(() => {
    const handler = () => { setActiveTab('features'); setSelectedOS('all') }
    window.addEventListener('pendingUpdate', handler)
    return () => window.removeEventListener('pendingUpdate', handler)
  }, [])

  const filtered = activeTab === 'releases'
    ? forReleasesTab(PLATFORM_UPDATES, selectedOS)
    : forFeaturesTab(PLATFORM_UPDATES)

  return (
    <PageLayout
      icon="💻"
      title="Microsoft Defender for Endpoint"
      description="Endpoint detection and response, vulnerability management, and antivirus engine updates across Windows, macOS, and Linux."
      docsUrl="https://learn.microsoft.com/en-us/defender-endpoint/whats-new-in-microsoft-defender-endpoint"
      statsData={forFeaturesTab(PLATFORM_UPDATES)}
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={id => { setActiveTab(id); setSelectedOS('all') }}
    >
      <WhatsNewView
        data={filtered}
        productOrder={PRODUCT_ORDER}
        hideProductFilter
        hideProductHeader
        releasesAlwaysOpen
        releasesOnly={activeTab === 'releases'}
        extraFilter={activeTab === 'releases' ? (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 10.5, color: '#94A3B8', fontWeight: 600, letterSpacing: '0.07em', minWidth: 46 }}>
              PLATFORM
            </span>
            {['all', ...ALL_PLATFORMS].map(os => (
              <button
                key={os}
                className={'chip' + (selectedOS === os ? ' active' : '')}
                onClick={() => setSelectedOS(os)}
              >
                {os === 'all' ? 'All' : os}
              </button>
            ))}
          </div>
        ) : null}
      />
    </PageLayout>
  )
}
