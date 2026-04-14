import PageLayout from '../components/PageLayout.jsx'
import WhatsNewView from '../components/WhatsNewView.jsx'
import { PLATFORM_UPDATES } from '../data/platform-mdo.js'

const PRODUCT_ORDER = ['Microsoft Defender for Office 365']

export default function WhatsNewMDO() {
  return (
    <PageLayout
      icon="📧"
      title="Microsoft Defender for Office 365"
      description="Email and collaboration threat protection updates."
      docsUrl="https://learn.microsoft.com/en-us/defender-office-365/defender-for-office-365-whats-new"
      statsData={PLATFORM_UPDATES}
    >
      <WhatsNewView data={PLATFORM_UPDATES} productOrder={PRODUCT_ORDER} hideProductFilter hideProductHeader />
    </PageLayout>
  )
}
