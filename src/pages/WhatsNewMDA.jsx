import PageLayout from '../components/PageLayout.jsx'
import WhatsNewView from '../components/WhatsNewView.jsx'
import { PLATFORM_UPDATES } from '../data/platform-mda.js'

const PRODUCT_ORDER = ['Microsoft Defender for Cloud Apps']

export default function WhatsNewMDA() {
  return (
    <PageLayout
      icon="☁️"
      title="Microsoft Defender for Cloud Apps"
      description="Cloud app security and shadow IT updates."
      docsUrl="https://learn.microsoft.com/en-us/defender-cloud-apps/release-notes"
      statsData={PLATFORM_UPDATES}
    >
      <WhatsNewView data={PLATFORM_UPDATES} productOrder={PRODUCT_ORDER} hideProductFilter hideProductHeader />
    </PageLayout>
  )
}
