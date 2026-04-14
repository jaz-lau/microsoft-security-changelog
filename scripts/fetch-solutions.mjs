#!/usr/bin/env node
/**
 * Fetches all Solution ReleaseNotes.md files from Azure/Azure-Sentinel GitHub repo
 * and generates src/data/solutions.js
 *
 * Usage: node scripts/fetch-solutions.mjs [names-file]
 *
 * Provide a text file with one solution name per line, or it will try to generate
 * the list from a shallow git clone.
 */

import { writeFileSync, readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUTPUT = resolve(__dirname, '../src/data/solutions.js')
const REPO = 'Azure/Azure-Sentinel'
const BRANCH = 'master'
const CONCURRENCY = 25

// ─── Parse ReleaseNotes.md markdown table ────────────────────────────────────

const CONTENT_TYPE_PATTERNS = [
  { pattern: /\banalytic(?:al)?\s*rules?\b/i, type: 'Analytic Rule' },
  { pattern: /\bhunting\s*quer(?:y|ies)\b/i, type: 'Hunting Query' },
  { pattern: /\bdata\s*connectors?\b/i, type: 'Data Connector' },
  { pattern: /\bplaybooks?\b/i, type: 'Playbook' },
  { pattern: /\bworkbooks?\b/i, type: 'Workbook' },
  { pattern: /\bparsers?\b/i, type: 'Parser' },
]

function extractContentTypes(text) {
  const types = new Set()
  for (const { pattern, type } of CONTENT_TYPE_PATTERNS) {
    if (pattern.test(text)) types.add(type)
  }
  return [...types]
}

function cleanText(text) {
  return text
    .replace(/\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function normaliseDateDDMMYYYY(str) {
  const m = str.match(/^(\d{2})-(\d{2})-(\d{4})$/)
  if (!m) return str
  const [, a, b, year] = m
  // If first part > 12 it's already DD-MM-YYYY
  if (parseInt(a) > 12) return str
  // If second part > 12 it's MM-DD-YYYY → swap to DD-MM-YYYY
  if (parseInt(b) > 12) return `${b}-${a}-${year}`
  // Both <= 12: assume DD-MM-YYYY (most common in this dataset)
  return str
}

function parseReleaseNotes(markdown, solutionName) {
  const lines = markdown.split('\n').filter(l => l.trim().startsWith('|'))

  const dataLines = lines.filter(l =>
    !l.includes('---') &&
    !/\|\s*\*?\*?version\*?\*?\s*\|/i.test(l) &&
    !/\|\s*\*?\*?date/i.test(l)
  )

  const entries = []
  for (const line of dataLines) {
    const cells = line.split('|').map(c => c.trim()).filter(c => c)
    if (cells.length < 3) continue

    let version = cells[0].replace(/\*\*/g, '').trim()
    let date = cells[1].replace(/\*\*/g, '').trim()
    const changeHtml = cells.slice(2).join('|').trim()

    if (!version || !date || !changeHtml) continue

    // Some upstream ReleaseNotes.md files (e.g. SAP) have version and date columns
    // swapped. Detect this when the "version" cell looks like a date (slashes or
    // dashes with day-then-month structure) and the "date" cell looks like a
    // semver-style version. Swap before further processing.
    const looksLikeDate = (s) => /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}$/.test(s)
    const looksLikeVersion = (s) => /^\d+\.\d+(\.\d+)?$/.test(s)
    if (looksLikeDate(version) && looksLikeVersion(date)) {
      const tmp = version
      version = date
      date = tmp
    }

    // Normalise dates with slashes or 2-digit years to DD-MM-YYYY
    const slashMatch = date.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/)
    if (slashMatch) {
      const [, a, b, y] = slashMatch
      const fullYear = y.length === 2 ? `20${y}` : y
      date = `${a.padStart(2, '0')}-${b.padStart(2, '0')}-${fullYear}`
    }

    if (!/^\d/.test(version)) continue

    const changes = changeHtml.split(/<br\s*\/?>/i).map(c => c.trim()).filter(c => c)

    for (const change of changes) {
      const text = cleanText(change)
      if (!text) continue
      const contentTypes = extractContentTypes(change)
      entries.push({ version, date: normaliseDateDDMMYYYY(date), text, contentTypes })
    }
  }

  return { name: solutionName, entries }
}

// Known display name overrides
// Keep entries sorted alphabetically by key. New entries must follow the same order.
const NAME_OVERRIDES = {
  'AWSAthena': 'AWS Athena',
  'AWS_AccessLogs': 'AWS Access Logs',
  'AbnormalSecurity': 'Abnormal Security',
  'AbuseIPDB': 'AbuseIPDB',
  'ApacheHTTPServer': 'Apache HTTP Server',
  'AristaAwakeSecurity': 'Arista Awake Security',
  'AtlassianConfluenceAudit': 'Atlassian Confluence Audit',
  'AtlassianJiraAudit': 'Atlassian Jira Audit',
  'AzureDevOpsAuditing': 'Azure DevOps Auditing',
  'AzureSecurityBenchmark': 'Azure Security Benchmark',
  'BeyondTrustPMCloud': 'BeyondTrust PM Cloud',
  'BitSight': 'Bitsight',
  'BlinkOps': 'BlinkOps',
  'CiscoDuoSecurity': 'Cisco Duo Security',
  'CiscoMeraki': 'Cisco Meraki',
  'CiscoUmbrella': 'Cisco Umbrella',
  'CofenseIntelligence': 'Cofense Intelligence',
  'CofenseTriage': 'Cofense Triage',
  'CognyteLuminar': 'Cognyte Luminar',
  'CohesitySecurity': 'Cohesity Security',
  'ContinuousDiagnostics&Mitigation': 'Continuous Diagnostics & Mitigation',
  'CustomLogsAma': 'Custom Logs AMA',
  'CyberArkAudit': 'CyberArk Audit',
  'CyberArkEPM': 'CyberArk EPM',
  'Cybersecuritymaturitymodelcertification(CMMC)2.0': 'Cybersecurity Maturity Model Certification (CMMC) 2.0',
  'Cybersixgill-Actionable-Alerts': 'Cybersixgill Actionable Alerts',
  'Cyren-Sentinel One-Threat Intelligence': 'Cyren SentinelOne Threat Intelligence',
  'CyrenThreatIntelligence': 'Cyren Threat Intelligence',
  'Datalake2Sentinel': 'Datalake to Sentinel',
  'DomainTools': 'DomainTools',
  'DruvaDataSecurityCloud': 'Druva Data Security Cloud',
  'ExtraHop': 'ExtraHop',
  'FalconFriday': 'FalconFriday',
  'ForescoutHostPropertyMonitor': 'Forescout Host Property Monitor',
  'GitLab': 'GitLab',
  'GoogleCloudPlatformCDN': 'Google Cloud Platform CDN',
  'GoogleCloudPlatformDNS': 'Google Cloud Platform DNS',
  'GoogleCloudPlatformIAM': 'Google Cloud Platform IAM',
  'GoogleCloudPlatformIDS': 'Google Cloud Platform IDS',
  'GoogleCloudPlatformNAT': 'Google Cloud Platform NAT',
  'GoogleCloudPlatformResourceManager': 'Google Cloud Platform Resource Manager',
  'GoogleCloudPlatformSQL': 'Google Cloud Platform SQL',
  'GoogleWorkspaceReports': 'Google Workspace Reports',
  'GreyNoiseThreatIntelligence': 'GreyNoise Threat Intelligence',
  'HolmSecurity': 'Holm Security',
  'IPinfo': 'IPinfo',
  'IllumioSaaS': 'Illumio SaaS',
  'ImpervaCloudWAF': 'Imperva Cloud WAF',
  'IoTOTThreatMonitoringwithDefenderforIoT': 'IoT/OT Threat Monitoring with Defender for IoT',
  'JBoss': 'JBoss',
  'JoeSandbox': 'Joe Sandbox',
  'LastPass': 'LastPass',
  'MISP2Sentinel': 'MISP to Sentinel',
  'MailRisk': 'MailRisk',
  'MarkLogicAudit': 'MarkLogic Audit',
  'MaturityModelForEventLogManagementM2131': 'Maturity Model for Event Log Management (M-2131)',
  'MicrosoftDefenderForEndpoint': 'Microsoft Defender for Endpoint',
  'MicrosoftPurviewInsiderRiskManagement': 'Microsoft Purview Insider Risk Management',
  'MimecastAudit': 'Mimecast Audit',
  'MimecastTIRegional': 'Mimecast TI Regional',
  'MongoDBAtlas': 'MongoDB Atlas',
  'MongoDBAudit': 'MongoDB Audit',
  'NISTSP80053': 'NIST SP 800-53',
  'NetskopeWebTx': 'Netskope Web Tx',
  'Netskopev2': 'Netskope v2',
  'NordPass': 'NordPass',
  'NozomiNetworks': 'Nozomi Networks',
  'OneLoginIAM': 'OneLogin IAM',
  'OneTrust': 'OneTrust',
  'OracleDatabaseAudit': 'Oracle Database Audit',
  'OracleWebLogicServer': 'Oracle WebLogic Server',
  'PaloAlto-PAN-OS': 'Palo Alto PAN-OS',
  'PaloAltoCDL': 'Palo Alto CDL',
  'PaloAltoPrismaCloud': 'Palo Alto Prisma Cloud',
  'Pathlock_T Dn R': 'Pathlock TDnR',
  'PingFederate': 'PingFederate',
  'PingOne': 'PingOne',
  'ProofPointTap': 'Proofpoint TAP',
  'RSAIDPlus_AdminLogs_Connector': 'RSA ID Plus Admin Logs Connector',
  'Rapid7Insight VM': 'Rapid7 InsightVM',
  'ReversingLabs': 'ReversingLabs',
  'RidgeSecurity': 'Ridge Security',
  'RubrikSecurityCloud': 'Rubrik Security Cloud',
  'SOC-Process-Framework': 'SOC Process Framework',
  'SailPointIdentityNow': 'SailPoint IdentityNow',
  'SalemCyber': 'Salem Cyber',
  'SecurityThreatEssentialSolution': 'Security Threat Essential Solution',
  'SemperisLightning': 'Semperis Lightning',
  'SenservaPro': 'Senserva Pro',
  'SentinelOne': 'SentinelOne',
  'SentinelSOARessentials': 'Sentinel SOAR Essentials',
  'SeraphicSecurity': 'Seraphic Security',
  'SevcoSecurity': 'Sevco Security',
  'SlackAudit': 'Slack Audit',
  'SlashNext': 'SlashNext',
  'SonraiSecurity': 'Sonrai Security',
  'SquidProxy': 'Squid Proxy',
  'SymantecProxySG': 'Symantec ProxySG',
  'SynqlyIntegrationConnector': 'Synqly Integration Connector',
  'TacitRed-Defender-ThreatIntelligence': 'Tacit Red Defender Threat Intelligence',
  'TacitRed-IOC-CrowdStrike': 'Tacit Red IOC CrowdStrike',
  'TacitRed-SentinelOne': 'Tacit Red SentinelOne',
  'TacitRedThreatIntelligence': 'Tacit Red Threat Intelligence',
  'TestSolution': 'Test Solution',
  'TheHive': 'TheHive',
  'ThreatAnalysis&Response': 'Threat Analysis & Response',
  'ThreatConnect': 'ThreatConnect',
  'TransmitSecurity': 'Transmit Security',
  'VMRay': 'VMRay',
  'VMWareESXi': 'VMware ESXi',
  'VaronisSaaS': 'Varonis SaaS',
  'VirusTotal': 'VirusTotal',
  'WithSecureElementsViaConnector': 'WithSecure Elements via Connector',
  'WithSecureElementsViaFunction': 'WithSecure Elements via Function',
  'ZeroNetworks': 'Zero Networks',
  'ZeroTrust(TIC3.0)': 'Zero Trust (TIC 3.0)',
  'ZoomReports': 'Zoom Reports',
}

function formatSolutionName(dirName) {
  if (NAME_OVERRIDES[dirName]) return NAME_OVERRIDES[dirName]
  // If it already has spaces, keep it
  if (dirName.includes(' ')) return dirName
  // Auto-split camelCase: insert space before uppercase letters that follow lowercase
  return dirName
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
}

async function fetchSolution(name) {
  const encoded = encodeURIComponent(name)
  const rawUrl = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/Solutions/${encoded}/ReleaseNotes.md`
  try {
    const res = await fetch(rawUrl)
    if (!res.ok) return null
    const markdown = await res.text()
    const displayName = formatSolutionName(name)
    const parsed = parseReleaseNotes(markdown, displayName)
    if (parsed.entries.length === 0) return null
    // Store original dir name as alias if different from display name
    if (name !== displayName) parsed.alias = name
    return parsed
  } catch {
    return null
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  // Read solution names from file
  const namesFile = process.argv[2] || '/tmp/solution-names.txt'
  if (!existsSync(namesFile)) {
    console.error(`Names file not found: ${namesFile}`)
    console.error('Generate it with: cd /tmp/sentinel-solutions-list && git ls-tree -r --name-only HEAD Solutions/ | grep -E "^Solutions/[^/]+/ReleaseNotes\\.md$" | sed "s|Solutions/||;s|/ReleaseNotes\\.md||" > /tmp/solution-names.txt')
    process.exit(1)
  }

  const names = readFileSync(namesFile, 'utf-8').trim().split('\n').filter(n => n)
  console.log(`${names.length} solutions to fetch\n`)

  console.log('Fetching release notes from raw.githubusercontent.com...')
  const solutions = []

  for (let i = 0; i < names.length; i += CONCURRENCY) {
    const batch = names.slice(i, i + CONCURRENCY)
    const results = await Promise.all(batch.map(fetchSolution))
    for (const r of results) {
      if (r) solutions.push(r)
    }
    const progress = Math.min(i + CONCURRENCY, names.length)
    process.stderr.write(`  ${progress}/${names.length} fetched (${solutions.length} parsed)\n`)
  }

  console.log(`\nDone: ${solutions.length} solutions with parseable release notes`)

  // Flag solutions that were auto-split (no override) so the user can review
  const autoSplit = solutions
    .filter(sol => sol.alias && !NAME_OVERRIDES[sol.alias])
    .map(sol => ({ dir: sol.alias, result: sol.name }))
  if (autoSplit.length > 0) {
    console.log(`\n⚠  ${autoSplit.length} solution(s) auto-split with no NAME_OVERRIDE — review these:`)
    for (const { dir, result } of autoSplit) {
      console.log(`  ${dir.padEnd(40)} → ${result}`)
    }
    console.log('  Add overrides in NAME_OVERRIDES if any look wrong.\n')
  }

  // Sort by name
  solutions.sort((a, b) => a.name.localeCompare(b.name))

  // Generate JS
  const lines = ['export const RAW_SOLUTIONS = [']
  for (const sol of solutions) {
    lines.push('  {')
    lines.push(`    name: ${JSON.stringify(sol.name)},`)
    if (sol.alias) lines.push(`    alias: ${JSON.stringify(sol.alias)},`)
    lines.push('    entries: [')
    for (const e of sol.entries) {
      const ct = JSON.stringify(e.contentTypes)
      lines.push(`      { version: ${JSON.stringify(e.version)}, date: ${JSON.stringify(e.date)}, text: ${JSON.stringify(e.text)}, contentTypes: ${ct} },`)
    }
    lines.push('    ],')
    lines.push('  },')
  }
  lines.push(']')
  lines.push('')

  writeFileSync(OUTPUT, lines.join('\n'), 'utf-8')

  // Record the actual fetch timestamp so the site can display "Data last fetched"
  // accurately (independent of any later manual edits to solutions.js).
  const META = resolve(__dirname, '../src/data/_lastFetched.json')
  writeFileSync(META, JSON.stringify({ fetchedAt: new Date().toISOString() }, null, 2) + '\n', 'utf-8')

  const totalEntries = solutions.reduce((s, sol) => s + sol.entries.length, 0)
  console.log(`Written ${OUTPUT}`)
  console.log(`Written ${META}`)
  console.log(`${solutions.length} solutions, ${totalEntries} total entries`)
}

main().catch(console.error)
