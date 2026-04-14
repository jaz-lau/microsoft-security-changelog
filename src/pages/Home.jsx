import PageLayout from '../components/PageLayout.jsx'
import WhatsNewView from '../components/WhatsNewView.jsx'
import { PLATFORM_UPDATES } from '../data/platform-all.js'
import { MONTH_NAMES } from '../utils/constants.js'

const PRODUCT_ORDER = [
  'Microsoft Defender XDR',
  'Unified Security Operations',
  'Microsoft Defender for Endpoint',
  'Microsoft Defender for Identity',
  'Microsoft Defender for Office 365',
  'Microsoft Defender for Cloud Apps',
  'Microsoft Defender for Cloud',
  'Microsoft Sentinel',
  'Microsoft Purview',
]

function getRecentMonths(data, months = 4) {
  const now = new Date()
  const cutoff = new Date(now.getFullYear(), now.getMonth() - (months - 1), 1)
  return data.filter(m => {
    const [mon, yr] = m.month.split(' ')
    const date = new Date(parseInt(yr), MONTH_NAMES.indexOf(mon), 1)
    return date >= cutoff
  })
}

export default function Home() {
  const recentData = getRecentMonths(PLATFORM_UPDATES, 4)

  return (
    <PageLayout
      title="What's New"
      description="Recent updates across Microsoft Defender, Sentinel, and Purview — last 4 months at a glance."
      statsData={recentData}
    >
      <WhatsNewView data={recentData} productOrder={PRODUCT_ORDER} releasesAlwaysOpen />
    </PageLayout>
  )
}
