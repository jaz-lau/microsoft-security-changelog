import { useState, useEffect, lazy, Suspense } from 'react'
import Nav from './components/Nav.jsx'
import BackToTop from './components/BackToTop.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import SolutionModalHost from './components/SolutionModalHost.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const WhatsNewMDE = lazy(() => import('./pages/WhatsNewMDE.jsx'))
const WhatsNewMDI = lazy(() => import('./pages/WhatsNewMDI.jsx'))
const WhatsNewMDO = lazy(() => import('./pages/WhatsNewMDO.jsx'))
const WhatsNewMDA = lazy(() => import('./pages/WhatsNewMDA.jsx'))
const WhatsNewMDFC = lazy(() => import('./pages/WhatsNewMDFC.jsx'))
const WhatsNewSentinel = lazy(() => import('./pages/WhatsNewSentinel.jsx'))
const WhatsNewXDR = lazy(() => import('./pages/WhatsNewXDR.jsx'))
const WhatsNewPurview = lazy(() => import('./pages/WhatsNewPurview.jsx'))

function getRoute() {
  const hash = window.location.hash.replace('#', '') || '/'
  return hash || '/'
}

// Minimal fallback that preserves page chrome height so the switch feels instant
// rather than flashing a blank area.
function RouteFallback() {
  return <div style={{ minHeight: '60vh' }} />
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // After initial mount, preload the large solutions dataset during browser idle
  // time so Cmd+K and the /sentinel Solutions tab feel instant when first used.
  useEffect(() => {
    const preload = () => import('./data/solutions-data.js')
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(preload, { timeout: 4000 })
      return () => cancelIdleCallback(id)
    }
    const id = setTimeout(preload, 2000)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <Nav currentRoute={route} />
      <Suspense fallback={<RouteFallback />}>
        {route === '/' && <Home />}
        {route === '/mde' && <WhatsNewMDE />}
        {route === '/mdi' && <WhatsNewMDI />}
        {route === '/mdo' && <WhatsNewMDO />}
        {route === '/mda' && <WhatsNewMDA />}
        {route === '/mdfc' && <WhatsNewMDFC />}
        {route === '/sentinel' && <WhatsNewSentinel />}
        {route === '/xdr' && <WhatsNewXDR />}
        {route === '/purview' && <WhatsNewPurview />}
      </Suspense>
      <BackToTop />
      <CommandPalette currentRoute={route} />
      <SolutionModalHost />
    </>
  )
}
