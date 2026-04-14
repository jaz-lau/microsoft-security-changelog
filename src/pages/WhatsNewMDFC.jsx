import PageLayout from '../components/PageLayout.jsx'
import WhatsNewView from '../components/WhatsNewView.jsx'
import { PLATFORM_UPDATES } from '../data/platform-mdfc.js'

const PRODUCT_ORDER = ['Microsoft Defender for Cloud']

export default function WhatsNewMDFC() {
  return (
    <PageLayout
      icon="🔒"
      title="Microsoft Defender for Cloud"
      description="Cloud security posture management and workload protection updates."
      docsUrl="https://learn.microsoft.com/en-us/azure/defender-for-cloud/release-notes"
      statsData={PLATFORM_UPDATES}
    >
      <WhatsNewView data={PLATFORM_UPDATES} productOrder={PRODUCT_ORDER} hideProductFilter hideProductHeader />
    </PageLayout>
  )
}
