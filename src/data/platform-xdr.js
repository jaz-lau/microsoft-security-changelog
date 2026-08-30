export const PLATFORM_UPDATES = [
  {
    month: "Jul 2026",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "AI agent posture risk assessment in Microsoft Defender (Preview)",
            detail: "Microsoft Defender assesses posture risk for AI agents, covering both enterprise agents and local agents discovered on endpoint devices. Risk levels derive from active risk indicators including configuration, access, runtime activity, endpoint and user context, and active alerts.",
            whyItMatters: "Agent sprawl outpaces the ability to review each one by hand, and an over-permissioned agent is a standing privilege escalation path that no existing posture tool scores. Ranking agents by risk gives teams a defensible order to work through rather than treating every agent as equivalent.",
          },
          {
            severity: "important", status: "preview",
            summary: "Threat detection for Microsoft Agent 365 agents (Preview)",
            detail: "Microsoft Defender analyses runtime signals from agent interactions, tool usage and execution patterns to raise alerts in Microsoft Defender XDR. Detection uses observability data from Microsoft Copilot Studio, Microsoft Foundry, Microsoft 365 Copilot Agent Builder, and agents integrated through the Microsoft Agent 365 SDK. Alerts can be investigated through incidents and advanced hunting.",
            whyItMatters: "Agent activity has been effectively unmonitored — a compromised or manipulated agent acts with its own identity and permissions, leaving little trace in device or sign-in telemetry. Surfacing it as ordinary XDR alerts means agent compromise joins the existing incident queue instead of needing a separate review process.",
          },
          {
            severity: "important", status: "ga",
            summary: "Real-time protection for Microsoft Agent 365 tooling servers is now generally available",
            detail: "Microsoft Defender evaluates tool invocations and responses against security policies, and can allow or block interactions with Work IQ MCP and customer MCP tools onboarded to Agent 365.",
            whyItMatters: "Moves agent security from after-the-fact alerting to inline enforcement at the point a tool is called, which is the only place a prompt injection can be stopped before it acts. Blocking policy needs testing against legitimate agent workflows first, since a false positive here breaks the agent rather than merely alerting.",
          },
          {
            severity: "important", status: "ga",
            summary: "Domain investigation page is now generally available",
            detail: "The Domain investigation page supports investigation of an Active Directory domain, showing domain properties, deployment health, identity summary, service account breakdown, sensitive entities, active recommendations, group policies and trust relationships.",
            whyItMatters: "Consolidates the domain-level context an analyst previously gathered from AD tooling and separate consoles during an identity incident. Trust relationships and service account breakdown are the details that most often determine blast radius, and having them alongside active recommendations links the investigation to the hardening work that would prevent a repeat.",
          },
        ],
      },
    ],
  },
  {
    month: "Jun 2026",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "critical", status: "change",
            summary: "AgentsInfo table replaces AIAgentsInfo in advanced hunting — update queries (Preview)",
            detail: "The AgentsInfo table in advanced hunting is available in preview. AIAgentsInfo is transitioning to this new table, which provides a unified schema supporting agent inventory and governance for all agent types, including Copilot Studio, Microsoft Foundry, Microsoft 365 Copilot, third-party and endpoint-discovered agents. Microsoft Agent 365 customers should use AgentsInfo today; AIAgentsInfo remained accessible until 1 July 2026.",
            whyItMatters: "Any saved query, detection rule, workbook or automation still referencing AIAgentsInfo breaks silently once the old table is withdrawn — a custom detection that returns no rows looks identical to one finding nothing wrong. Teams that have not migrated should audit their agent-related content now.",
            actionNote: "Update queries and custom detections from AIAgentsInfo to AgentsInfo — the stated access deadline for AIAgentsInfo was 1 July 2026.",
          },
          {
            severity: "important", status: "change",
            summary: "Phishing and Security Alert Triage Agents move to least-privilege email permission",
            detail: "The Phishing Triage Agent and Security Alert Triage Agent now use the narrower 'Email & collaboration content: Emails associated with alerts (read)' permission instead of the broader 'Email & Collaboration content: All Emails (read)' permission, restricting agent access to email content associated with alerts.",
            whyItMatters: "An autonomous agent holding read access to the entire mail estate is a large standing exposure for a task that only ever needs the messages behind an alert. Narrowing it reduces what a compromised or manipulated agent can reach, and is worth mirroring in any custom agents built against the same permission.",
          },
          {
            severity: "important", status: "preview",
            summary: "Threat Intelligence Insights tab added to IP, domain, URL and file entity pages (Preview)",
            detail: "Entity pages for IP addresses, domains, URLs and files now include a Threat Intelligence Insights tab surfacing Microsoft Threat Intelligence enrichment — reputation scores, attributed threat reports, infrastructure relationships and sandbox analysis — directly in the investigation workflow.",
            whyItMatters: "Removes the context switch to a separate threat intelligence portal during triage, which is where analysts most often stop short and accept an inconclusive verdict. Infrastructure relationships in particular turn a single indicator into a view of the wider campaign.",
          },
          {
            severity: "important", status: "preview",
            summary: "Local AI agent discovery on Windows endpoints (Preview)",
            detail: "Microsoft Defender automatically discovers supported local AI agents running on onboarded Windows devices, including coding agents and IDE extensions, desktop AI assistants, local AI runtimes and agent platforms. Discovered agents appear as assets in the AI agent inventory, exposure map and advanced hunting.",
            whyItMatters: "Locally installed AI tooling is the clearest current example of shadow IT — developers adopt coding agents and desktop assistants without a procurement path, and these agents read source code and credentials. Inventory is the prerequisite for any policy decision about them.",
          },
          {
            severity: "important", status: "preview",
            summary: "Local AI agent runtime protection on Windows endpoints (Preview)",
            detail: "Runtime protection for supported local AI agents on Windows endpoints inspects the agent loop — user prompts, tool calls and tool responses — and can block risky activity before it executes, to stop prompt injection and unsafe agent actions at the device level. Blocked and audited events appear as alerts in Microsoft Defender.",
            whyItMatters: "A local coding agent that reads a poisoned repository file can be induced to exfiltrate secrets or run commands, and endpoint EDR sees only the resulting process activity, not the instruction that caused it. Inspecting the agent loop puts a control at the layer where the decision is actually made.",
          },
          {
            severity: "important", status: "ga",
            summary: "Four advanced hunting schema tables now generally available",
            detail: [
              "DisruptionAndResponseEvents contains information about automatic attack disruption events in Microsoft Defender XDR.",
              "CloudAuditEvents contains cloud audit events for the cloud platforms protected by Microsoft Defender for Cloud.",
              "CloudDnsEvents contains DNS activity events from cloud infrastructure environments.",
              "CloudProcessEvents contains process events in multicloud hosted environments.",
            ],
            whyItMatters: [
              "Attack disruption acts autonomously, so having its actions queryable is what makes the feature auditable — teams can confirm what was disrupted, when, and whether it was correct.",
              "Cloud audit events in the same schema as endpoint and identity telemetry allow a single query to follow an actor from a workstation into the cloud control plane.",
              "Cloud DNS is a durable signal for command-and-control and exfiltration in environments where egress is otherwise hard to observe.",
              "Process events from multicloud workloads close the gap where server-side activity was visible in Defender for Cloud but not joinable in advanced hunting. GA status means these tables are now safe to build custom detections on.",
            ],
          },
          {
            severity: "minor", status: "preview",
            summary: "Human identities card added to the Identity Security dashboard (Preview)",
            detail: "The Identity Security dashboard includes a new Human identities card showing human identities by source — Entra ID, SaaS and on-premises.",
            whyItMatters: "Gives a single answer to where identities actually live, which is usually harder to establish than it sounds in organisations with unmerged directories after acquisitions or migrations.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Observed-only filtering for SaaS identities on the Coverage and maturity page (Preview)",
            detail: "The 'Review and improve coverage' side panel for SaaS Identities now includes an Observed column and a 'Show Only Observed Applications' toggle. By default the panel shows only SaaS applications detected in the environment; turning the toggle off reveals other supported applications available to onboard.",
            whyItMatters: "Defaulting to detected applications keeps the coverage list grounded in what the organisation actually runs, rather than presenting the full catalogue as outstanding work. The toggle still exposes the wider list when planning expansion.",
          },
        ],
      },
    ],
  },
  {
    month: "May 2026",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Automatic attack disruption can now isolate compromised devices from the network (Preview)",
            detail: "Where high-confidence incident analysis indicates a device is being used as an active foothold, automatic attack disruption can isolate it from the network. Isolation blocks attacker communication and lateral movement while keeping the device connected to security services. The action is time-limited, scoped to devices involved in the incident, and can be released by security operators at any time.",
            whyItMatters: "Device isolation is among the most disruptive response actions available, and handing it to automation trades operational risk against containment speed during the window when lateral movement happens. The time limit and operator release are the safeguards — teams should confirm which devices are in scope before relying on it, since an isolated server is an outage.",
          },
          {
            severity: "important", status: "preview",
            summary: "Defender Chat — open prompt chat assistant built into Microsoft Defender (Preview)",
            detail: "Defender Chat is an open prompt chat assistant built into Microsoft Defender that helps analysts investigate threats, explore incidents and answer security questions in plain language, without navigating multiple screens or writing complex queries.",
            whyItMatters: "Lowers the KQL barrier that keeps junior analysts dependent on senior staff for investigation queries. Answers still need verification against the underlying data before they drive a containment decision.",
          },
          {
            severity: "important", status: "ga",
            summary: "Defender Experts for Servers now available as a standalone offering",
            detail: "Microsoft Defender Experts for Servers and Microsoft Defender Experts Hunting - Servers are now offered as standalone services for customers wanting managed extended detection and response and threat hunting for on-premises and multicloud servers protected by Microsoft Defender for Cloud. Both were previously add-ons to Microsoft Defender Experts MDR and Microsoft Defender Experts Hunting respectively.",
            whyItMatters: "Organisations whose server estate is the gap in their coverage can now buy managed detection for it without committing to the full MDR service across endpoints. Relevant to teams with in-house endpoint capability but no out-of-hours cover for server workloads.",
          },
          {
            severity: "important", status: "unspecified",
            summary: "Hunting graph adds identity-focused predefined scenarios",
            detail: "The hunting graph in advanced hunting includes new identity-focused predefined scenarios covering attack paths, privilege escalation routes and credential access risks across on-premises and cloud environments — including Kerberoast and AS-REP roast paths, domain compromise routes, OAuth application risks, and guest user access to cloud resources.",
            whyItMatters: "These are the paths attackers actually take through a hybrid directory, and each previously required an analyst who knew both the technique and the query to write. Prebuilt scenarios make proactive identity hunting available to teams without a dedicated identity specialist.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Take action wizard extends to top-level domains and attachment hashes",
            detail: "In advanced hunting, the Take action wizard now allows or blocks top-level domains and email attachment file hashes based on query results.",
            whyItMatters: "Closes the loop between hunting and enforcement, so a hunt that finds a malicious pattern can act on it without exporting indicators into a separate blocking workflow. Blocking an entire top-level domain is broad — worth confirming legitimate traffic before applying it.",
          },
        ],
      },
    ],
  },
  {
    month: "Apr 2026",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "Defender Experts now appears as a distinct entry in the Defender portal navigation",
            detail: "Microsoft Defender Experts for XDR customers can now see Defender Experts as a distinct entry in the Microsoft Defender portal navigation menu. This adds to the existing home page status card as in-portal experiences that provide consistent and predictable access to the service.",
            whyItMatters: "Promoting Defender Experts to a top-level nav entry makes it easier for SOC teams using the managed XDR service to find expert-driven investigations, recommendations, and notifications without hunting through portal menus.",
          },
          {
            severity: "important", status: "ga",
            summary: "Built-in alert tuning rules are now generally available",
            detail: "Built-in alert tuning rules suppress alerts from common benign activity in Defender for Endpoint and Defender for Office 365, without affecting Automated Investigation and Response investigations or email notifications.",
            whyItMatters: "Known-benign alerts are the bulk of queue volume in most tenants, and teams previously wrote their own suppression rules with the risk of over-suppressing. That AIR investigations still run means the underlying activity is not ignored — only the analyst-facing alert is suppressed.",
          },
          {
            severity: "minor", status: "preview",
            summary: "AIAgentsInfo table adds columns covering all agent types (Preview)",
            detail: "The AIAgentsInfo table in advanced hunting includes additional columns providing deeper visibility into AI agents operating in the Microsoft 365 environment, expanding coverage beyond Copilot Studio to all agent types including Microsoft Foundry, third-party marketplace and custom line-of-business agents.",
            whyItMatters: "Coverage limited to Copilot Studio meant the agent inventory was partial in exactly the environments with the most custom agents. Note this table was superseded by AgentsInfo in June 2026, so new queries should target the replacement.",
          },
        ],
      },
    ],
  },
  {
    month: "Mar 2026",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Identity security enhancements — dashboard, coverage maturity, non-human identities, risk score",
            detail: ["New Identity Security dashboard provides summary cards for identity providers, on-premises identities, SaaS identities, PAM and IGA integrations, and non-human identities.", "Coverage and maturity page shows identity security coverage with maturity levels (Connected, Protected, Fortified, Resilient) and prioritised setup tasks.", "Identity inventory now shows human and non-human identities (Entra ID apps, AD service accounts, Google Workspace apps, Salesforce apps) in separate tabs.", "New identity risk score (0–100) indicating likelihood of compromise based on criticality and privileged roles, available in Entra ID for conditional access policies.", "Domain investigation page and identity security recommendations from Active Directory, Entra ID, SaaS applications, and non-Microsoft identity providers."],
            whyItMatters: "Gives security teams a single pane of glass for all identity types — human and non-human — across multi-cloud and on-premises environments. The risk score and maturity model let teams prioritise hardening efforts and enforce conditional access policies based on quantified identity risk rather than guesswork.",
          },
          {
            severity: "important", status: "ga",
            summary: "Proactive user containment (contain user) as part of predictive shielding now GA",
            detail: "The proactive user containment action infuses activity data with exposure data to identify exposed credentials at risk of being compromised and reused for malicious activity.",
            whyItMatters: "Allows security teams to contain users before attackers can leverage stolen credentials, closing the window between credential exposure and exploitation.",
          },
          {
            severity: "minor", status: "preview",
            summary: "New Advanced Hunting schema tables — CloudDnsEvents, CloudPolicyEnforcementEvents",
            detail: ["CloudDnsEvents contains information about DNS activity events from cloud infrastructure environments.", "CloudPolicyEnforcementEvents contains policy enforcement evaluation decisions and metadata of security gating events for various cloud platforms protected by Microsoft Defender for Cloud."],
            whyItMatters: "Extends hunting coverage to cloud DNS and policy enforcement data, enabling analysts to detect DNS-based exfiltration, C2 communications, and policy bypass attempts across multi-cloud environments.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Secure Score category calculations updated — Cloud apps recommendations reclassified under Identity",
            detail: "Some security recommendations previously categorized as Cloud apps are now grouped under Identity to improve accuracy. Total Secure Score unchanged, but individual category scores may shift.",
            whyItMatters: "Teams tracking category-level Secure Score progress should expect score shifts in Cloud apps and Identity categories — no action is required, but dashboards and reports referencing these categories may need updating.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Incident graph filtering — simplify complex incident graphs by filtering or hiding entities",
            detail: "Customers can now use filters on very large incidents with many alerts and entities, or hide specific entities, to simplify complex incident graphs.",
            whyItMatters: "Large-scale incidents with dozens of entities can overwhelm analysts — filtering and hiding capabilities let responders focus on the most relevant parts of the attack graph without losing the broader context.",
          },
        ],
      },
    ],
  },
  {
    month: "Feb 2026",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "Four advanced hunting tables now GA: IdentityAccountInfo, EntraIdSignInEvents, EntraIdSpnSignInEvents, GraphApiAuditEvents",
            detail: ["IdentityAccountInfo contains account information from various sources including Entra ID, linked to the owning identity.", "EntraIdSignInEvents contains Entra ID interactive and non-interactive sign-ins. EntraIdSpnSignInEvents contains service principal and managed identity sign-ins.", "GraphApiAuditEvents contains Entra ID API requests made to Microsoft Graph for resources in the tenant."],
            whyItMatters: "These four tables unlock comprehensive identity and authentication hunting directly in the Defender portal, letting analysts correlate sign-in activity, service principal behaviour, and Graph API calls without switching to separate tools.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Defender Experts for Hunting — notification contacts for critical incidents and service updates",
            detail: "Defender Experts for Hunting customers can now set up notification contacts for individuals or groups that Microsoft needs to notify for critical incidents or service updates.",
            whyItMatters: "Ensures the right people are alerted immediately when Microsoft experts identify critical threats, reducing the risk of missed notifications and accelerating coordinated response.",
          },
        ],
      },
      {
        product: "Unified Security Operations",
        icon: "🔗",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Cross-tenant distribution of analytics rules, automation rules and workbooks now GA",
            detail: "Analytics rules, automation rules, and workbooks can now be distributed across multiple tenants in the Microsoft Defender multitenant portal.",
            whyItMatters: "Enables MSSPs and large organisations to distribute security content at scale across all managed tenants from a central location, eliminating repetitive per-tenant configuration and ensuring consistent detection coverage.",
          },
        ],
      },
    ],
  },
  {
    month: "Jan 2026",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Custom detection rules now support Near Real-Time (NRT) frequency on Sentinel data",
            detail: "Custom detection rules in Microsoft Defender now support Near Real-Time (NRT) configuration on Microsoft Sentinel data.",
            whyItMatters: "Enables near-instant alerting on Sentinel-ingested tables without waiting for scheduled query intervals, significantly reducing detection latency for rules based on Sentinel data sources.",
          },
          {
            severity: "minor", status: "preview",
            summary: "BehaviorInfo and BehaviorEntities tables enhanced with UEBA behavior data and alert relationships",
            detail: "The BehaviorInfo and BehaviorEntities tables in advanced hunting now include additional columns covering UEBA behavior data types and alerts.",
            whyItMatters: "Enables richer correlation between behavioral signals and specific entities in hunting queries, helping analysts spot anomalous user and device behaviour tied to real alerts.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Advanced Hunting partial results indicator for queries exceeding 64 MB",
            detail: "If the query result exceeds the 64 MB size limit, the portal now returns the maximum number of records within this limit and displays a message indicating partial results.",
            whyItMatters: "Prevents analysts from unknowingly working with incomplete data — the explicit partial-results indicator signals when query results have been truncated, prompting refinement of filters or time ranges.",
          },
        ],
      },
      {
        product: "Unified Security Operations",
        icon: "🔗",
        updates: [
          {
            severity: "important", status: "unspecified",
            summary: "Unified threat intelligence moved to Intel management; SOC optimizations now cover both SIEM and XDR data",
            detail: ["Threat intelligence has moved in the Defender portal to Intel management, streamlining creation and curation of threat intel with: relationship builder for STIX objects; duplicate feature for copying metadata; advanced search without Log Analytics queries.", "SOC optimizations now support both SIEM and XDR data with detection coverage across all Defender services. The MITRE ATT&CK page adds a threat-scenario toggle and shows active vs available detections per technique."],
            whyItMatters: "Consolidates threat intel workflows and detection coverage visibility into a single experience, reducing context-switching and helping SOC teams identify gaps in their MITRE ATT&CK coverage across both SIEM and XDR data sources.",
          },
          {
            severity: "important", status: "preview",
            summary: "Unified device timeline — single view of device activity from Sentinel and Defender XDR",
            detail: "The unified device timeline integrates device activity from Microsoft Sentinel and Defender XDR into a single cohesive timeline, available via the Timeline tab on the Device entity page in the Defender portal.",
            whyItMatters: "Analysts can access all relevant device activities in one place without switching between platforms, accelerating investigation workflows and reducing the risk of missing critical events scattered across data sources.",
          },
          {
            severity: "important", status: "preview",
            summary: "Case management — manage SecOps cases natively in the Defender portal",
            detail: "Case management provides end-to-end management of security work without leaving the Defender portal. Supports custom case workflow status values; assigning tasks to collaborators with due dates; linking multiple incidents to a single case; RBAC-based access control.",
            whyItMatters: "Eliminates the need for external ticketing systems for SecOps case tracking, keeping investigations, evidence, and task assignments within the same portal analysts already use for detection and response. Available in both the main Defender portal and the Defender multitenant portal.",
          },
        ],
      },
    ],
  },
  {
    month: "Dec 2025",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Dynamic Threat Detection Agent in Microsoft Security Copilot — always-on adaptive threat uncovering",
            detail: "The Dynamic Threat Detection Agent is an always-on, adaptive backend service that uncovers hidden threats across Defender and Microsoft Sentinel environments, continuously learning and adapting to your environment.",
            whyItMatters: "Automates proactive threat discovery without manual hunting, surfacing hidden threats that scheduled rules and reactive investigations may miss.",
          },
          {
            severity: "important", status: "ga",
            summary: "Threat Intelligence Briefing Agent in Microsoft Defender now GA",
            detail: "Generates threat intelligence briefings based on the latest threat actor activity and both internal and external vulnerability information in minutes.",
            whyItMatters: "Helps security teams create customised, relevant threat intel reports without manual data collection, freeing analyst time for investigation and response.",
          },
          {
            severity: "important", status: "preview",
            summary: "Threat Hunting Agent — natural language conversational threat hunting in Advanced Hunting",
            detail: "Microsoft Security Copilot in Microsoft Defender lets you hunt for threats using natural language with the Threat Hunting Agent.",
            whyItMatters: "Delivers a complete conversational threat hunting experience by generating queries, interpreting results, surfacing insights, and guiding full hunting sessions — lowering the skill barrier for advanced hunting and accelerating investigation cycles.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Hunting graph in Advanced Hunting now GA with two new predefined threat scenarios",
            detail: "The hunting graph in advanced hunting is now generally available. Two new predefined threat scenarios render hunts as interactive graphs.",
            whyItMatters: "Visual graph-based hunting makes it easier to identify relationships between entities and trace attack paths, complementing traditional tabular query results.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Advanced Hunting custom functions with tabular parameters now GA",
            detail: "Advanced hunting now supports custom functions that use tabular parameters, allowing entire tables to be passed as inputs.",
            whyItMatters: "Enables more modular, reusable, and expressive hunting query logic, reducing duplication and making complex multi-table queries easier to maintain across the SOC.",
          },
          {
            severity: "minor", status: "preview",
            summary: "New advanced hunting tables: CampaignInfo and FileMaliciousContentInfo",
            detail: "CampaignInfo contains email campaign data from Defender for Office 365. FileMaliciousContentInfo contains information about files processed in SharePoint Online, OneDrive, and Microsoft Teams.",
            whyItMatters: "Brings email campaign and file-level malware data into advanced hunting, enabling analysts to correlate phishing campaigns with malicious file detections across collaboration workloads.",
          },
        ],
      },
    ],
  },
  {
    month: "Nov 2025",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Microsoft Threat Intelligence alerts for Sentinel customers — nation-state actors, ransomware campaigns",
            detail: ["Microsoft Sentinel customers using the Defender portal now also receive Microsoft Threat Intelligence alerts highlighting activity from nation-state actors, major ransomware campaigns, and fraudulent operations.", "Requires Security Administrator or higher role. Service Source, Detection Source, and Product Name values are listed as Microsoft Threat Intelligence."],
            whyItMatters: "Surfaces high-fidelity, Microsoft-curated threat intelligence alerts directly in the SOC workflow, ensuring teams are immediately aware of — and can act on — the most dangerous nation-state and ransomware activity targeting their environment.",
          },
          {
            severity: "important", status: "preview",
            summary: "Predictive shielding — dynamically infer risk and harden environment before threats materialise",
            detail: "Defender XDR now includes predictive shielding, which uses predictive analytics and real-time insights to dynamically infer risk and anticipate attacker progression.",
            whyItMatters: "Shifts security posture from reactive to proactive by hardening the environment before threats materialise, reducing the attack surface based on predicted adversary behaviour rather than waiting for alerts.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Restrict pod access response action for container threat investigations",
            detail: "A new Restrict pod access response action is available when investigating container threats in the Defender portal.",
            whyItMatters: "Blocks sensitive interfaces that allow lateral movement and privilege escalation in containerised environments, giving responders a targeted containment action for Kubernetes workloads without disrupting the entire cluster.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Threat analytics — new Indicators tab and additional threat details",
            detail: ["Threat analytics now has an Indicators tab listing all indicators of compromise (IOCs) associated with a threat, updated in real time by Microsoft researchers.", "The threat analytics overview section now includes alias, origin, and related intelligence details for each threat."],
            whyItMatters: "Gives analysts immediate access to live IOCs and enriched threat context directly within threat analytics, speeding up threat matching and enabling faster protective actions without leaving the portal.",
          },
          {
            severity: "minor", status: "preview",
            summary: "IdentityAccountInfo table now available in preview in advanced hunting",
            detail: "Contains account information from various sources including Microsoft Entra ID, with information linked to the identity that owns the account.",
            whyItMatters: "Provides a consolidated view of identity account attributes in hunting queries, enabling analysts to enrich investigations with account metadata — such as roles, group memberships, and directory properties — without leaving the hunting experience.",
          },
        ],
      },
      {
        product: "Unified Security Operations",
        icon: "🔗",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "UEBA anomaly tagging, incident graph drilldown and hunting banner in the Defender portal",
            detail: ["Users with behavioural anomalies are automatically tagged 'UEBA Anomalies' in the portal.", "Top 3 anomalies from the past 30 days are surfaced in user side panels and Overview tabs. 'Go Hunt > All user anomalies' is available from incident graphs. Advanced Hunting includes a contextual banner to join the UEBA Anomalies table. All features require UEBA to be enabled."],
            whyItMatters: "Helps analysts quickly prioritise investigations by surfacing behavioural anomalies directly in the incident workflow, reducing the time to identify compromised or risky user accounts.",
          },
          {
            severity: "important", status: "unspecified",
            summary: "MDE endpoint security policies can now be distributed across multiple tenants via the multitenant portal",
            detail: ["Microsoft Defender for Endpoint security policies can now be distributed as content across multiple tenants using the Defender multitenant portal.", "Distributed policies appear in Configuration management > Endpoint security policies in a hierarchical view showing parent policies and their distributed copies across tenants."],
            whyItMatters: "Centralises endpoint security policy management for multi-tenant environments, ensuring consistent endpoint protection baselines across all managed tenants and reducing configuration drift.",
          },
        ],
      },
    ],
  },
  {
    month: "Oct 2025",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "minor", status: "unspecified",
            summary: "Defender Experts for XDR reports — new Trends tab with monthly incident volume",
            detail: "Provides monthly volume of investigated and resolved incidents for the last six months, visualized by severity, MITRE tactic, and threat type.",
            whyItMatters: "Gives security leaders trend visibility into how Defender Experts are handling incidents over time, enabling data-driven decisions about staffing, threat priorities, and service effectiveness.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Defender Experts for Hunting reports — Emerging threats section and investigation summaries",
            detail: "Reports now include an Emerging threats section and investigation summaries for nearly every hunt, regardless of whether a confirmed threat was identified.",
            whyItMatters: "Increases transparency into hunting activities by documenting investigation findings even when no threat is confirmed, helping teams understand their threat landscape and the value of proactive hunting.",
          },
        ],
      },
    ],
  },
  {
    month: "Sep 2025",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Tasks in Defender portal — break down incidents into actionable steps across operations teams",
            detail: "Use tasks in the Microsoft Defender portal to break down incident investigations into actionable steps and assign them across your operations teams. Tasks are displayed alongside Security Copilot insights, guided responses, and reports. When Microsoft Sentinel is onboarded to the Defender portal, tasks created in Sentinel via the Azure portal are automatically synchronised.",
            whyItMatters: "Streamlines incident response coordination by embedding task management directly in the investigation workflow, reducing handoff delays and ensuring accountability across team members.",
          },
          {
            severity: "important", status: "preview",
            summary: "Blast radius analysis — interactive graph of threat propagation paths",
            detail: "Investigate incidents using Blast radius analysis, an advanced graph visualisation built on the Microsoft Sentinel data lake and graph infrastructure.",
            whyItMatters: "Generates an interactive graph showing possible propagation paths from the selected node to predefined critical targets, enabling analysts to quickly understand and contain the potential impact of an incident before lateral movement occurs.",
          },
        ],
      },
    ],
  },
  {
    month: "Aug 2025",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Defender Experts for XDR and Hunting expanded to cover servers and cloud workloads",
            detail: "Microsoft Defender Experts for XDR and Defender Experts for Hunting customers can now expand service coverage to include server and cloud workloads protected by Microsoft Defender for Cloud through the Microsoft Defender Experts for Servers and Microsoft Defender Experts for Hunting - Servers add-ons.",
            whyItMatters: "Extends Microsoft's managed threat hunting and XDR expertise to server and cloud workloads, closing a coverage gap for organisations that previously only had expert support for endpoint and identity threats.",
          },
          {
            severity: "minor", status: "ga",
            summary: "All user-defined rules — custom detections and analytics rules — unified in Detection rules page",
            detail: "Both custom detection rules and analytics rules are now viewable in the Detection rules page. Supports filtering for every column, Workspace ID for multiworkspace organisations, details pane for analytics rules, and Turn on/off, Delete, and Edit actions on analytics rules.",
            whyItMatters: "Unifies rule management into a single view, making it easier for SOC teams to audit, maintain, and troubleshoot detection logic across both Defender and Sentinel without switching between separate pages.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Advanced Hunting — dynamic alert titles/descriptions, 100K query results, new schema tables",
            detail: ["Custom detection rules can now have dynamic alert titles and descriptions, more impacted entities, and custom details in the alert side panel.", "Query results increased to 100,000. New tables: CloudStorageAggregatedEvents (storage activity), IdentityEvents (identity events from other cloud identity providers)."],
            whyItMatters: "Dynamic alert metadata gives analysts richer context at triage time without opening every alert. The 100K result limit and new tables expand the scope and scale of threat hunting across cloud storage and multi-cloud identity providers.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Investigate Defender for Cloud behaviors in Advanced Hunting",
            detail: "Advanced hunting now supports investigating Microsoft Defender for Cloud behaviors.",
            whyItMatters: "Extends advanced hunting to cloud workload behaviors detected by Defender for Cloud, enabling analysts to correlate cloud-specific threats with endpoint and identity signals in a single hunting experience.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Third-party network signal enrichment for Defender Experts for XDR",
            detail: "Allows security analysts to incorporate third-party network signals for a more comprehensive view of attack paths.",
            whyItMatters: "Brings third-party network data into the Defender Experts investigation workflow, reducing blind spots where attackers traverse non-Microsoft network infrastructure and providing a more complete picture of attack progression.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Sensitivity label filter in Incidents and Alerts queues",
            detail: "Filter incidents and alerts based on the sensitivity label assigned to affected resources.",
            whyItMatters: "Enables SOC teams to prioritise incidents involving highly classified or sensitive data, ensuring that alerts affecting regulated or confidential resources are triaged first.",
          },
        ],
      },
    ],
  },
  {
    month: "Jul 2025",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "minor", status: "preview",
            summary: "GraphApiAuditEvents table now available in preview in advanced hunting",
            detail: "Contains information about Microsoft Entra ID API requests made to Microsoft Graph API.",
            whyItMatters: "Enables analysts to hunt for suspicious or anomalous Graph API activity — such as bulk data access, permission changes, or application-level abuse — directly within the Defender portal.",
          },
          {
            severity: "minor", status: "preview",
            summary: "New DisruptionAndResponseEvents table for automatic attack disruption",
            detail: "Contains information about automatic attack disruption events in Defender XDR, including block and policy application events.",
            whyItMatters: "Gives SOC teams visibility into the automated containment actions Defender XDR has taken, enabling post-disruption review, tuning of disruption policies, and correlation with manual response actions.",
          },
        ],
      },
    ],
  },
  {
    month: "Jun 2025",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "adx() operator in Advanced Hunting — query Azure Data Explorer tables directly from Defender portal",
            detail: "Advanced Hunting now supports the adx() operator to query tables stored in Azure Data Explorer directly from the Microsoft Defender portal.",
            whyItMatters: "Eliminates the need to switch to Log Analytics in Microsoft Sentinel when querying long-term or custom data stored in Azure Data Explorer, keeping analysts in a single hunting interface.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Microsoft Copilot suggested prompts in incident summaries",
            detail: "Microsoft Copilot now provides suggested prompts as part of incident summaries in the Microsoft Defender portal.",
            whyItMatters: "Guides analysts toward deeper investigation of specific assets involved in an incident, reducing the learning curve for Copilot and surfacing insights that might otherwise be overlooked.",
          },
        ],
      },
    ],
  },
  {
    month: "May 2025",
    products: [
      {
        product: "Microsoft Defender XDR",
        icon: "🛡️",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Unified security summary — SOC impact reporting across all Defender workloads",
            detail: "The unified security summary streamlines the process for SOC teams to generate security reports. Available in the Microsoft Defender portal, it visualises security achievements and the impact of Microsoft Defender in one view.",
            whyItMatters: "Saves time usually spent collecting data from various sources, making it easy to demonstrate SOC value and Defender ROI to leadership with a single consolidated report.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Advanced Hunting — Microsoft Teams event tables (MessageEvents, MessagePostDeliveryEvents, MessageUrlInfo)",
            detail: "Three new advanced hunting schema tables are available in preview for investigating Microsoft Teams events: MessageEvents (messages at delivery), MessagePostDeliveryEvents (post-delivery security events), and MessageUrlInfo (URLs in Teams messages).",
            whyItMatters: "Extends threat hunting into Microsoft Teams, enabling analysts to detect phishing, malicious URLs, and social engineering attacks delivered via Teams — an increasingly targeted collaboration channel.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Unified IdentityInfo table with UEBA fields in advanced hunting",
            detail: "Available for users who have onboarded Microsoft Sentinel and enabled UEBA. Includes the largest possible set of fields common to both Defender and Azure portals.",
            whyItMatters: "Consolidates identity information and UEBA-enriched fields into a single table, eliminating the need to join multiple data sources when investigating user behavior anomalies across Defender and Sentinel.",
          },
        ],
      },
    ],
  },
]
