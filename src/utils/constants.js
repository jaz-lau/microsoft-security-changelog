export const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

// OS detection for keyboard shortcut hints — handler still accepts both metaKey and ctrlKey
export const IS_MAC = typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent)
export const MOD_KEY = IS_MAC ? '⌘' : 'Ctrl'
export const MOD_KEY_K = IS_MAC ? '⌘K' : 'Ctrl+K'

export const PRODUCT_SLUG = {
  'Microsoft Defender XDR': 'xdr',
  'Microsoft Sentinel': 'sentinel',
  'Microsoft Defender for Endpoint': 'mde',
  'Microsoft Defender for Identity': 'mdi',
  'Microsoft Defender for Office 365': 'mdo',
  'Microsoft Defender for Cloud Apps': 'mda',
  'Microsoft Defender for Cloud': 'mdfc',
  'Microsoft Purview': 'purview',
  'Unified Security Operations': 'uso',
}

export function makeUpdateId(productName, month, index) {
  const slug = PRODUCT_SLUG[productName] || 'unknown'
  const monthSlug = month.replace(' ', '-')
  return `update-${slug}-${monthSlug}-${index}`
}
