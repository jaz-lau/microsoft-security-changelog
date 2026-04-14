import { useState, useEffect, Suspense, lazy } from 'react'

const SolutionHistoryModal = lazy(() =>
  import('../pages/ContentHub.jsx').then(m => ({ default: m.SolutionHistoryModal }))
)

export default function SolutionModalHost() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const handler = async (e) => {
      const name = e.detail?.solutionName
      if (!name) return
      const mod = await import('../data/solutions-data.js')
      const sol = mod.SOLUTIONS.find(s => s.name === name)
      if (sol) setSelected(sol)
    }
    window.addEventListener('showSolution', handler)
    return () => window.removeEventListener('showSolution', handler)
  }, [])

  if (!selected) return null
  return (
    <Suspense fallback={null}>
      <SolutionHistoryModal solution={selected} onClose={() => setSelected(null)} />
    </Suspense>
  )
}
