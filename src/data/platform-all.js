import { PLATFORM_UPDATES as XDR_DATA } from './platform-xdr.js'
import { PLATFORM_UPDATES as MDE_DATA } from './platform-mde.js'
import { PLATFORM_UPDATES as MDI_DATA } from './platform-mdi.js'
import { PLATFORM_UPDATES as MDO_DATA } from './platform-mdo.js'
import { PLATFORM_UPDATES as MDA_DATA } from './platform-mda.js'
import { PLATFORM_UPDATES as MDFC_DATA } from './platform-mdfc.js'
import { PLATFORM_UPDATES as SENTINEL_DATA } from './platform-sentinel.js'
import { PLATFORM_UPDATES as PURVIEW_DATA } from './platform-purview.js'

import { MONTH_NAMES } from '../utils/constants.js'

function parseMonth(str) {
  const [mon, yr] = str.split(' ')
  return new Date(parseInt(yr), MONTH_NAMES.indexOf(mon), 1).getTime()
}

function mergeDatasets(...datasets) {
  const map = new Map()
  for (const ds of datasets) {
    for (const entry of ds) {
      if (!map.has(entry.month)) {
        map.set(entry.month, { month: entry.month, products: [] })
      }
      map.get(entry.month).products.push(...entry.products)
    }
  }
  return [...map.values()].sort((a, b) => parseMonth(b.month) - parseMonth(a.month))
}

export const PLATFORM_UPDATES = mergeDatasets(
  XDR_DATA,
  MDE_DATA,
  MDI_DATA,
  MDO_DATA,
  MDA_DATA,
  MDFC_DATA,
  SENTINEL_DATA,
  PURVIEW_DATA,
)
