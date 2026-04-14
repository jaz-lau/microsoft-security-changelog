import { useState, useEffect, useMemo } from 'react'
import PageLayout from '../components/PageLayout.jsx'
import WhatsNewView from '../components/WhatsNewView.jsx'
import { PLATFORM_UPDATES } from '../data/platform-sentinel.js'
import {
  SolutionUpdateView,
  SolutionHistoryTab,
  NewSolutionsTab,
  SolutionHistoryModal,
  SOLUTIONS,
  NEW_SOLUTIONS,
} from './ContentHub.jsx'

function platformStatsItems(data) {
  let total = 0, critical = 0, important = 0, minor = 0
  data.forEach(m => m.products.forEach(p => (p.updates || []).forEach(u => {
    total++
    if (u.severity === 'critical') critical++
    else if (u.severity === 'important') important++
    else if (u.severity === 'minor') minor++
  })))
  return [
    { label: 'Total',           value: total,     color: 'rgba(255,255,255,0.95)' },
    { label: 'Action Required', value: critical,  color: '#FCA5A5' },
    { label: 'Important',       value: important, color: '#FDE68A' },
    { label: 'Minor',           value: minor,     color: '#86EFAC' },
  ]
}

function solutionStatsItems(stats) {
  return [
    { label: 'Total',           value: stats.total,     color: 'rgba(255,255,255,0.95)' },
    { label: 'Action Required', value: stats.critical,  color: '#FCA5A5' },
    { label: 'Important',       value: stats.important, color: '#FDE68A' },
    { label: 'Minor',           value: stats.minor,     color: '#86EFAC' },
  ]
}

const PRODUCT_ORDER = ['Microsoft Sentinel']

const TABS = [
  { id: 'updates',   label: 'Product Updates' },
  { id: 'solutions', label: 'Solution Updates' },
  { id: 'new',       label: 'New Solutions' },
  { id: 'changelog', label: 'Solution Changelog' },
]

export default function WhatsNewSentinel() {
  const [activeTab, setActiveTab] = useState('updates')
  const [historyId, setHistoryId] = useState(null)
  const [solutionStats, setSolutionStats] = useState(null)
  const historySolution = historyId ? SOLUTIONS.find(s => s.name === historyId) : null

  // When the command palette navigates here with a pending platform update, make sure
  // the Product Updates tab is active so WhatsNewView mounts and can pick it up.
  useEffect(() => {
    const handler = () => setActiveTab('updates')
    window.addEventListener('pendingUpdate', handler)
    return () => window.removeEventListener('pendingUpdate', handler)
  }, [])

  // Compute the stats items shown in the page header per active tab
  const statsItems = useMemo(() => {
    if (activeTab === 'updates') {
      return platformStatsItems(PLATFORM_UPDATES)
    }
    if (activeTab === 'solutions') {
      // Falls back to zeros until SolutionUpdateView reports its first stats
      return solutionStatsItems(solutionStats || { total: 0, critical: 0, important: 0, minor: 0 })
    }
    if (activeTab === 'new') {
      return [{ label: 'New Solutions', value: NEW_SOLUTIONS.length, color: 'rgba(255,255,255,0.95)' }]
    }
    if (activeTab === 'changelog') {
      return [{ label: 'Solutions Tracked', value: SOLUTIONS.length, color: 'rgba(255,255,255,0.95)' }]
    }
    return null
  }, [activeTab, solutionStats])

  return (
    <PageLayout
      icon="🔭"
      title="Microsoft Sentinel"
      description="SIEM and SOAR platform updates, solution changes, and new content."
      docsUrl="https://learn.microsoft.com/en-us/azure/sentinel/whats-new"
      githubUrl="https://github.com/Azure/Azure-Sentinel/tree/master/Solutions"
      statsItems={statsItems}
      tabs={TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'updates' && (
        <WhatsNewView data={PLATFORM_UPDATES} productOrder={PRODUCT_ORDER} hideProductFilter hideProductHeader />
      )}
      {activeTab === 'solutions' && (
        <SolutionUpdateView onOpenHistory={setHistoryId} defaultDateRange="90d" onStatsChange={setSolutionStats} />
      )}
      {activeTab === 'new' && (
        <NewSolutionsTab onOpenHistory={setHistoryId} />
      )}
      {activeTab === 'changelog' && (
        <SolutionHistoryTab />
      )}

      {historySolution && (
        <SolutionHistoryModal solution={historySolution} onClose={() => setHistoryId(null)} />
      )}
    </PageLayout>
  )
}
