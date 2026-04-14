import PageLayout from '../components/PageLayout.jsx'
import WhatsNewView from '../components/WhatsNewView.jsx'
import { PLATFORM_UPDATES } from '../data/platform-purview.js'

const PRODUCT_ORDER = ['Microsoft Purview']

export default function WhatsNewPurview() {
  return (
    <PageLayout
      icon="📋"
      title="Microsoft Purview"
      description="Data governance, compliance, and information protection updates."
      docsUrl="https://learn.microsoft.com/en-us/purview/whats-new"
      statsData={PLATFORM_UPDATES}
    >
      <WhatsNewView data={PLATFORM_UPDATES} productOrder={PRODUCT_ORDER} hideProductFilter hideProductHeader />
    </PageLayout>
  )
}
