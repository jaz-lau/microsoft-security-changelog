import { useState, useEffect } from 'react'
import PageLayout from '../components/PageLayout.jsx'
import WhatsNewView from '../components/WhatsNewView.jsx'
import { PLATFORM_UPDATES } from '../data/platform-xdr.js'

const TABS = [
  { id: 'xdr', label: 'Product Updates', product: 'Microsoft Defender XDR' },
  { id: 'uso', label: 'Unified SecOps Experience', product: 'Unified Security Operations' },
]

function filterByProduct(data, product) {
  return data
    .map(m => ({ ...m, products: m.products.filter(p => p.product === product) }))
    .filter(m => m.products.length > 0)
}

export default function WhatsNewXDR() {
  const [activeTab, setActiveTab] = useState('xdr')
  const tab = TABS.find(t => t.id === activeTab)
  const filtered = filterByProduct(PLATFORM_UPDATES, tab.product)

  // Each tab is filtered to a different product (XDR vs Unified SecOps). Inspect the
  // pending update ID to figure out which tab the target lives in and switch accordingly.
  // ID format is `update-{slug}-{month}-{index}` — see makeUpdateId in utils/constants.js.
  useEffect(() => {
    const handler = () => {
      const id = window.__pendingUpdate
      if (!id) return
      if (id.startsWith('update-xdr-')) setActiveTab('xdr')
      else if (id.startsWith('update-uso-')) setActiveTab('uso')
    }
    window.addEventListener('pendingUpdate', handler)
    return () => window.removeEventListener('pendingUpdate', handler)
  }, [])

  return (
    <PageLayout
      icon="🛡️"
      title="Microsoft Defender XDR"
      description="Cross-domain incident correlation, AI-powered investigation, and unified SecOps experience updates."
      docsUrl="https://learn.microsoft.com/en-us/defender-xdr/whats-new"
      statsData={filtered}
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <WhatsNewView data={filtered} productOrder={[tab.product]} hideProductFilter hideProductHeader />
    </PageLayout>
  )
}
