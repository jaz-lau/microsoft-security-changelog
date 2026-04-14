import { useState, useEffect } from 'react'
import PageLayout from '../components/PageLayout.jsx'
import WhatsNewView from '../components/WhatsNewView.jsx'
import { PLATFORM_UPDATES } from '../data/platform-mdi.js'

const PRODUCT_ORDER = ['Microsoft Defender for Identity']

const TABS = [
  { id: 'features', label: 'Product Updates' },
  { id: 'releases', label: 'Sensor Releases' },
]

function forReleasesTab(data) {
  return data
    .map(m => ({
      ...m,
      products: m.products
        .filter(p => p.releases && p.releases.length > 0)
        .map(p => ({ ...p, updates: [] })),
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

export default function WhatsNewMDI() {
  const [activeTab, setActiveTab] = useState('features')
  const filtered = activeTab === 'releases' ? forReleasesTab(PLATFORM_UPDATES) : forFeaturesTab(PLATFORM_UPDATES)

  // Updates only render in the 'features' tab. Switch to it when the palette navigates here.
  useEffect(() => {
    const handler = () => setActiveTab('features')
    window.addEventListener('pendingUpdate', handler)
    return () => window.removeEventListener('pendingUpdate', handler)
  }, [])

  return (
    <PageLayout
      icon="🕵️"
      title="Microsoft Defender for Identity"
      description="Identity threat detection and response for hybrid Active Directory and Entra ID environments."
      docsUrl="https://learn.microsoft.com/en-us/defender-for-identity/whats-new"
      statsData={forFeaturesTab(PLATFORM_UPDATES)}
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <WhatsNewView
        data={filtered}
        productOrder={PRODUCT_ORDER}
        hideProductFilter
        hideProductHeader
        releasesAlwaysOpen
        releasesOnly={activeTab === 'releases'}
        releaseUnit={activeTab === 'releases' ? 'sensor' : ''}
      />
    </PageLayout>
  )
}
