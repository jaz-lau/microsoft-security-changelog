export const PLATFORM_UPDATES = [
  {
    month: "Aug 2026",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "UEBA behaviors and anomaly detection expand to Fortinet, Check Point, Zscaler and AWS GuardDuty (Preview)",
            detail: [
              "Fortinet FortiGate behaviors: the UEBA behaviors layer now supports FortiGate firewall events from the CommonSecurityLog table, with more than 40 new behaviors covering administrative activity such as rapid system reconfigurations, configuration backups, certificate changes and security service disruptions — mapped to MITRE ATT&CK techniques including T1685, T1070, T1078 and T1602.002.",
              "Check Point, Fortinet and Zscaler anomalies: ten new anomaly rules over firewall, VPN and web proxy events in CommonSecurityLog compare each user and device against its own history and organisation-wide activity, identifying anomalous and failed VPN sign-ins, unusual access to high-risk web categories, bursts of security detections on a potentially compromised device, and suspicious administrative changes. Events are enriched with source IP geolocation, ISP and threat intelligence context, and mapped to T1078, T1133, T1110, T1071, T1562 and T1567.",
              "AWS GuardDuty: anomaly detection now supports identity-linked GuardDuty findings from the AWSGuardDuty table, mapped to T1078, T1078.004, T1110, T1087.004 and T1567.002.",
            ],
            whyItMatters: [
              "Firewall administrative activity is a common blind spot — appliance config changes rarely reach the SIEM as behavioural signal, so an attacker weakening rules ahead of exfiltration looks like routine admin work. Behaviour baselining on FortiGate events makes that visible without writing bespoke detections.",
              "VPN and proxy logs are usually kept for forensics rather than detection because raw volume defeats static thresholds. Per-entity baselining turns them into a detection surface, and the geolocation and threat intelligence enrichment removes an enrichment step analysts would otherwise do by hand.",
              "GuardDuty findings arrive already triaged by AWS, but they are scoped to the AWS account. Linking them to identities lets a cloud finding join the same user timeline as on-premises and Entra ID activity, which is where cross-plane attack paths become apparent.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Contextual anomaly insights added directly to UEBA behavior records (Preview)",
            detail: "Microsoft Sentinel now attaches anomaly insights to UEBA behavior records, surfacing first-seen activity, unusually high behaviour volumes, uncommon values and threat intelligence matches without manual correlation of raw events.",
            whyItMatters: "A behaviour record on its own says what happened but not whether it is unusual, so analysts previously ran follow-up queries to establish a baseline before judging it. Carrying that context inline shortens triage and reduces the chance a first-seen action is dismissed as routine.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "SAP solution releases: agentless 1.1.12, BTP 3.1.1, LogServ 3.0.5",
            detail: [
              "SAP agentless solution version 1.1.12 adds audit log performance enhancements and the force-sal-filesystem parameter.",
              "SAP BTP solution version 3.1.1 adds an analytic rule for unaudited custom apps with login-only activity, and renames analytic rules with the SAP BTP prefix.",
              "SAP LogServ solution version 3.0.5 lets customers using RISE with SAP activate existing ASIM-based security content for standard SAP LogServ logs; HANA detections now use Syslog instead of the custom log, with updated connector coverage and fallback handling.",
            ],
            whyItMatters: [
              "Audit log performance is the usual constraint on SAP ingestion at scale, so this mainly affects teams whose collection was lagging behind production volume.",
              "Custom BTP apps with login-only activity and no auditing are a standing gap — they are reachable but produce no evidence trail. The rule prefix rename will break any saved queries or workbooks that filter analytic rules by name.",
              "RISE with SAP customers previously could not reuse ASIM-based content against LogServ logs, which meant maintaining a parallel detection set. The HANA switch from custom log to Syslog changes the source table, so existing HANA detections need re-checking after upgrade.",
            ],
          },
        ],
      },
    ],
  },
  {
    month: "Jul 2026",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Custom detection rules can be managed as code in Microsoft Sentinel Repositories (Preview)",
            detail: "Custom detection rules can now be managed as code in a GitHub or Azure DevOps repository using the Microsoft Security BICEP extension, then synced to Microsoft Sentinel through the Repositories feature or deployed directly with the BICEP CLI.",
            whyItMatters: "Brings custom detections under the same review, versioning and promotion path as analytics rules, so changes are traceable and a broken rule can be rolled back rather than hand-repaired in the portal. Teams already running detection-as-code no longer need a separate process for the custom detection set.",
          },
        ],
      },
    ],
  },
  {
    month: "Jun 2026",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Behavior results can be linked to incidents from advanced hunting (Preview)",
            detail: "Behavior-based query results from the BehaviorInfo table can be linked to new or existing incidents in advanced hunting. The wizard automatically populates alert metadata and entities from the selected behavior record.",
            whyItMatters: "UEBA behaviours previously lived apart from the incident record, so supporting evidence found during hunting had to be pasted into comments and lost its entity links. Linking them directly keeps the entity graph intact and makes the behaviour available to downstream automation.",
          },
          {
            severity: "important", status: "preview",
            summary: "Graph tools added to the Microsoft Sentinel MCP server (Preview)",
            detail: "The graph tool collection in the Microsoft Sentinel Model Context Protocol server provides graph-based exploration of relationships across identities, devices, threats and signals, to assess coverage, dependencies and configuration gaps.",
            whyItMatters: "Exposes the Sentinel graph to AI agents through MCP rather than only to analysts in the portal, so coverage and dependency questions can be asked in natural language. Worth reviewing what the MCP server is permitted to read before connecting agents, since graph access spans identity and device data.",
          },
        ],
      },
    ],
  },
  {
    month: "May 2026",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "AI playbook generation in Microsoft Sentinel is now generally available",
            detail: "The SOAR playbook generator creates Python-based automation workflows, coauthored through a conversational experience with Cline, an AI coding agent.",
            whyItMatters: "Playbook authoring has been the bottleneck in SOAR adoption for teams without automation engineers. Generated playbooks still need review before they run against production — an automation that isolates a device is only as safe as the logic behind it.",
          },
          {
            severity: "important", status: "unspecified",
            summary: "UEBA enhancements: consolidated settings, Okta V2 support, five new GCP anomaly detections",
            detail: [
              "UEBA Settings and Behaviors Settings are consolidated into a single view, reached from a new UEBA tab on the Microsoft Sentinel settings page.",
              "UEBA Okta anomalies now support the OktaV2_CL table alongside the existing Okta_CL table, extending the Anomalous Activity and Anomalous MFA Failures detections to the newer Okta connector format. No new anomaly types are introduced.",
              "Five new GCP Audit Logs anomaly detections identify unusual login behaviour, privileged actions, resource deployments, secret and KMS key access, and infrastructure usage patterns.",
            ],
            whyItMatters: [
              "Split settings pages were a common cause of UEBA being half-enabled — entity analytics on, behaviours off. One view makes the actual configuration state visible.",
              "Tenants that migrated to the newer Okta connector silently lost these two detections because the data landed in a different table. This closes that gap without changing detection logic.",
              "GCP audit activity has had thinner UEBA coverage than Azure or AWS. Secret and KMS key access in particular is a high-value signal, since it typically precedes access to whatever the key protects.",
            ],
          },
        ],
      },
    ],
  },
  {
    month: "Apr 2026",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Microsoft Sentinel data federation — analyze data in place across Fabric, Data Lake Storage, and Databricks",
            detail: "Powered by Microsoft Fabric, data federation lets you analyze security data where it already lives without copying or duplicating it. Federate data from Microsoft Fabric, Azure Data Lake Storage, and Azure Databricks into the Microsoft Sentinel data lake, then use familiar Sentinel experiences like KQL, notebooks, and custom graphs across both federated and native data.",
            whyItMatters: "Removes the cost and operational overhead of duplicating large volumes of telemetry into Sentinel just to query it — security teams can extend hunting and detection to data that previously lived in silos, without breaking the existing analytics surface.",
          },
          {
            severity: "important", status: "preview",
            summary: "Transform data with filter and split features",
            detail: "Native filtering and splitting in the Microsoft Defender portal helps you reduce noise before ingestion, control costs, and intelligently route data between analytics and data lake tiers so you can optimise what gets analysed versus retained.",
            whyItMatters: "Lets teams cut ingestion costs by dropping low-value events at the edge while still keeping a cheaper copy in the data lake for long-term hunting — closing the long-standing trade-off between cost and retention.",
          },
          {
            severity: "important", status: "preview",
            summary: "VS Code connector builder agent — AI-assisted custom connector development",
            detail: "An AI-powered, low-code agent in Visual Studio Code helps you build Microsoft Sentinel connectors in minutes, bringing in new data sources faster and unlocking security outcomes sooner.",
            whyItMatters: "Custom connector development has historically been a multi-day engineering exercise. Reducing that to minutes lets SOC teams onboard niche or in-house data sources without waiting on platform engineering capacity.",
          },
          {
            severity: "important", status: "preview",
            summary: "Build custom security graphs across data lake and third-party data",
            detail: "Build tailored security graphs across the Sentinel data lake and third-party data to uncover attack paths, blast radius, and hidden relationships. Custom graphs serve as a foundation for advanced investigations and AI agents. After creation, graphs are accessible in the Defender portal under Microsoft Sentinel where you can run Graph Query Language (GQL) queries, view the schema, visualise the graph, view results in tabular format, and interactively traverse the graph to the next hop with a single click.",
            whyItMatters: "Graph-based investigation surfaces lateral movement and blast radius that linear log queries can miss, and lays the groundwork for AI agents that need a relational view of the environment to reason about attacks.",
          },
          {
            severity: "important", status: "ga",
            summary: "Entity analyzer in Sentinel MCP data exploration tool now GA",
            detail: "The entity analyzer in the Microsoft Sentinel Model Context Protocol (MCP) data exploration tool collection lets you get out-of-the-box, explainable entity risk assessments for URLs and identities using threat intelligence, prevalence, and organizational context.",
            whyItMatters: "Brings explainable entity risk scoring directly into MCP-based analyst workflows so AI agents and analysts can both reason about whether a URL or identity is suspicious, without leaving the investigation surface.",
            actionNote: "Starting April 1, 2026, you are charged for the Security Compute Units (SCUs) required when using the entity analyzer. Review the Sentinel MCP server pricing page before enabling broadly.",
          },
          {
            severity: "important", status: "ga",
            summary: "AI-powered SIEM migration tool now GA — Splunk and QRadar",
            detail: "Accelerate migrations to Microsoft Sentinel from Splunk and QRadar using an AI-assisted SIEM migration experience designed to reduce manual effort and speed time-to-value.",
            whyItMatters: "SIEM migrations are typically the slowest, riskiest part of switching platforms. Automating detection translation and validation removes the largest barrier for teams considering a move from Splunk or QRadar to Sentinel.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Cost estimation tool for Microsoft Sentinel — three-year projections",
            detail: "A guided, meter-level cost estimator with three-year projections helps organisations model data growth, predict spend, and plan Microsoft Sentinel adoption with confidence.",
            whyItMatters: "Sentinel cost planning has been notoriously opaque. A built-in estimator with multi-year projections lets security and finance teams align on budgets before committing, reducing surprise overruns after adoption.",
          },
          {
            severity: "important", status: "preview",
            summary: "Row-level access using Microsoft Sentinel scoping (row-level RBAC)",
            detail: "Microsoft Sentinel now supports scoping (row-level RBAC) to control access to specific subsets of Sentinel data without requiring workspace separation. Administrators can define logical scopes, tag data at ingestion time, and assign users or groups to scopes using Unified RBAC.",
            whyItMatters: "Enables multiple teams to work securely within a shared Sentinel environment — removing the need for costly multi-workspace architectures just to enforce data isolation between teams or tenants.",
          },
          {
            severity: "critical", status: "change",
            summary: "Account Name now consistently the UPN prefix for analytics rule alerts — automation update was required by 1 July 2026",
            detail: "Microsoft Sentinel is changing how the account entity's Account Name value is populated for analytics rule alerts where the full UPN is mapped into Account Name, improving consistency for downstream automation rules and Logic Apps playbooks. The change may affect automation logic that filters on or compares the AccountName property (AccountName in Logic Apps), particularly where it expects the full UPN.",
            whyItMatters: "Automation comparing AccountName against a full UPN silently stops matching once the value becomes the prefix alone — so an automation rule that suppresses, assigns or escalates incidents quietly does nothing. The stated deadline has passed, making this worth verifying rather than planning for.",
            actionNote: "The 1 July 2026 deadline has passed — verify automation rules and Logic Apps playbooks comparing AccountName still match.",
          },
        ],
      },
    ],
  },
  {
    month: "Mar 2026",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Microsoft Sentinel Repositories now generally available",
            detail: "Microsoft Sentinel Repositories (content as code) are now generally available. Manage and deploy Microsoft Sentinel content — analytics rules, workbooks, playbooks, and more — through CI/CD pipelines backed by GitHub or Azure DevOps.",
            whyItMatters: "Treating detection and response content as code enables version control, peer review, and automated deployment — reducing configuration drift across workspaces and letting security teams adopt the same DevOps practices used by engineering.",
          },
          {
            severity: "critical", status: "change",
            summary: "Action required: update Sentinel Repositories API versions before June 15, 2026",
            detail: "Older API versions used by Microsoft Sentinel Repositories will no longer be supported starting June 15, 2026. Requests using retired API versions will fail.",
            whyItMatters: "If you are using APIs to create or manage repository connections, transition to API version 2025-09-01, 2025-06-01, or 2025-07-01-preview before June 1, 2026. Failing to migrate will break automated content deployments and CI/CD pipelines that depend on these APIs.",
            actionNote: "If you use APIs to manage Sentinel repository connections, audit your scripts and automation for retired API versions (all 2021–2024 versions). Migrate to 2025-09-01 or later before June 1, 2026 — requests using old versions will fail after June 15.",
          },
        ],
      },
    ],
  },
  {
    month: "Feb 2026",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "UEBA behaviors layer now generally available",
            detail: "The UEBA behaviors layer summarises clear, human-readable behavioral insights from high-volume, raw security logs, aggregating and sequencing related events into normalized behaviors.",
            whyItMatters: "Analysts can now understand who did what to whom without manually correlating raw logs — including a new behaviors workbook with Overview, Investigation, and Hunting tabs as part of the UEBA essentials solution. This dramatically reduces investigation time for identity-based threats.",
          },
          {
            severity: "important", status: "preview",
            summary: "Generate playbooks using AI in Microsoft Sentinel",
            detail: "You can now generate playbooks using AI in Microsoft Sentinel. The SOAR playbook generator creates Python-based automation workflows coauthored through a conversational experience with Cline, an AI coding agent.",
            whyItMatters: "Security teams can build response automation faster without deep coding expertise, lowering the barrier to operationalizing detection-to-response workflows and reducing mean time to respond.",
          },
        ],
      },
    ],
  },
  {
    month: "Jan 2026",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "UEBA behaviors — translate raw security logs to behavioral insights",
            detail: "UEBA behaviors summarise behavior patterns from supported data sources (AWS CloudTrail, CommonSecurityLog, GCPAuditLogs), replacing individual events with named behaviors such as 'Inbound remote management session from external address'.",
            whyItMatters: "Accelerates investigations by transforming noisy telemetry into actionable insights, empowers all SOC personas, and ensures explainability via MITRE ATT&CK mapping. Can be enabled independently from UEBA anomaly detection.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Enable UEBA directly from data connector configuration",
            detail: "You can now enable UEBA for supported data sources directly from the data connector configuration page.",
            whyItMatters: "Reduces management time and prevents coverage gaps when enabling new connectors — analysts no longer need to navigate to a separate settings page to ensure UEBA is active for newly connected sources.",
          },
          {
            severity: "minor", status: "ga",
            summary: "New detections for Microsoft Sentinel solution for SAP BTP",
            detail: "Expanded detection coverage for SAP BTP with new analytics rules targeting high-risk control plane, integration, and identity activities.",
            whyItMatters: "Strengthens visibility into SAP BTP environments where misconfigurations or compromised identities can expose critical business data, closing detection gaps for organizations running workloads on SAP's cloud platform.",
          },
          {
            severity: "minor", status: "preview",
            summary: "New UEBA widget on the Defender portal home page",
            detail: "The Defender portal home page now includes a UEBA widget where analysts can immediately see anomalous user behavior.",
            whyItMatters: "Gives analysts at-a-glance visibility into anomalous user activity without navigating away from the portal home page, enabling faster triage and reducing the time to spot identity-based threats.",
          },
        ],
      },
    ],
  },
  {
    month: "Nov 2025",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "New UEBA experiences in the Defender portal — anomaly tagging and investigation drilldowns",
            detail: "Users with behavioral anomalies are automatically tagged with UEBA Anomalies in the Defender portal. The top three anomalies from the past 30 days are surfaced in user side panels and Overview tabs.",
            whyItMatters: "Analysts can quickly prioritise investigations by seeing anomaly context inline, and drilldown to all user anomalies from incident graphs via 'Go Hunt > All user anomalies'. Advanced hunting queries now include a contextual banner to join the UEBA Anomalies table, reducing context-switching during investigations.",
          },
          {
            severity: "important", status: "ga",
            summary: "SAP agentless data connector now GA",
            detail: "The agentless data connector for the Microsoft Sentinel Solution for SAP is now generally available. All new deployments use the new agentless connector, billed at the same price.",
            whyItMatters: "Eliminates the need to deploy and maintain a containerised collector, reducing infrastructure overhead and operational complexity. Note: the containerised SAP data connector will be out of support by September 30, 2026 — migrate to the agentless connector to avoid a coverage gap.",
          },
          {
            severity: "critical", status: "change",
            summary: "Action required: update queries and automation by July 1, 2026 — standardised account entity naming",
            detail: "Microsoft Sentinel is standardising account entity naming in incidents and alerts. Any queries, workbooks, playbooks, or automation that reference the old entity naming conventions must be updated before July 1, 2026.",
            whyItMatters: "Inconsistent entity naming leads to missed correlations and broken automation. Standardisation ensures that account references resolve correctly across all analytics rules, playbooks, and hunting queries — preventing silent failures after the cutover date.",
            actionNote: "Search your analytics rules, automation rules, playbooks, workbooks, and hunting queries for account entity references. Update them to use: coalesce(Account.UPNprefix, Account.Name, Account.DisplayName). Test in a non-production workspace first. Deadline: July 1, 2026.",
          },
        ],
      },
    ],
  },
  {
    month: "Oct 2025",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Export STIX threat intelligence objects to external platforms",
            detail: "Microsoft Sentinel now supports exporting STIX threat intelligence objects to other destinations such as TAXII 2.1-based external platforms, enabling bi-directional intelligence sharing.",
            whyItMatters: "Organizations that ingested threat intelligence via the TAXII data connector can now export it back, eliminating the need for manual processes or custom playbooks and enabling true bi-directional TI sharing across tooling boundaries.",
          },
        ],
      },
    ],
  },
  {
    month: "Sep 2025",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Microsoft Sentinel data lake — scalable, cost-effective long-term data storage",
            detail: ["Microsoft Sentinel is now enhanced with a modern data lake purpose-built for data management, cost reduction, and AI adoption. Key capabilities include a single open-format data copy, separation of storage and compute, support for multiple analytics engines, and native integration with Microsoft Sentinel.", "Supports KQL queries and the new Microsoft Sentinel data lake notebook for VS Code."],
            whyItMatters: "Gives security teams a cost-effective way to retain large volumes of telemetry long-term without sacrificing query performance, enabling historical threat hunting and compliance retention at a fraction of the cost of hot-tier analytics storage.",
          },
          {
            severity: "important", status: "preview",
            summary: "Microsoft Sentinel graph — unified graph analytics for threat reasoning",
            detail: "Microsoft Sentinel graph models relationships across users, devices, and activities to support complex threat investigations and pre- and post-breach analysis.",
            whyItMatters: "Provides deeper context and unified graph analytics that surface lateral movement paths and hidden relationships across entities — enabling analysts to reason about attack chains rather than isolated alerts.",
          },
          {
            severity: "important", status: "preview",
            summary: "Microsoft Sentinel Model Context Protocol (MCP) server",
            detail: "The Microsoft Sentinel MCP server provides a hosted interface for building intelligent agents using natural language, allowing engineers to query and reason over security data without needing schema knowledge.",
            whyItMatters: "Lowers the barrier for security engineers to build AI-powered automation and investigation tools on top of Sentinel data, accelerating the adoption of agentic security workflows.",
          },
          {
            severity: "minor", status: "preview",
            summary: "New data sources for UEBA — AWS CloudTrail, CommonSecurityLog, GCPAuditLogs",
            detail: "Microsoft Sentinel UEBA now ingests additional data sources including AWS CloudTrail, CommonSecurityLog (CyberArk Vault, Palo Alto Threats), and GCPAuditLogs.",
            whyItMatters: "Extends AI-powered anomaly detection to multi-cloud and third-party security sources, giving SOC teams behavioral visibility across AWS and GCP environments alongside existing Azure and on-premises coverage.",
          },
        ],
      },
    ],
  },
  {
    month: "Aug 2025",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "minor", status: "preview",
            summary: "Edit workbooks directly in the Microsoft Defender portal",
            detail: "You can now create and edit Microsoft Sentinel workbooks directly in the Microsoft Defender portal, streamlining workflows.",
            whyItMatters: "Eliminates the need to switch to the Azure portal for workbook authoring, keeping analysts in a single pane of glass and reducing context-switching during reporting and visualization tasks.",
          },
        ],
      },
    ],
  },
  {
    month: "Jul 2025",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Table management and retention settings now available in Defender portal",
            detail: "Table management and retention settings are now available in the Microsoft Defender portal, including retention settings for Microsoft Sentinel and Defender XDR tables and the ability to switch between analytics and data lake tiers.",
            whyItMatters: "Centralises data lifecycle management within the same portal used for daily investigations, reducing the need to switch to the Azure portal for storage tier and retention decisions — simplifying cost optimization workflows.",
          },
          {
            severity: "minor", status: "ga",
            summary: "No limit on the number of workspaces onboarded to the Defender portal",
            detail: "There is no longer any limit to the number of Microsoft Sentinel workspaces you can onboard to the Defender portal. Limitations still apply to the number of workspaces you can include in a single Log Analytics query or scheduled analytics rule.",
            whyItMatters: "Large enterprises and MSSPs with many workspaces can now manage all of them from a single pane of glass in the Defender portal, removing a scaling bottleneck for multi-tenant and multi-region deployments.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Automatic onboarding to Defender portal for new Sentinel customers",
            detail: "Starting July 1, 2025, new Microsoft Sentinel customers with Owner or User Access Administrator permissions have their workspaces automatically onboarded to the Defender portal.",
            whyItMatters: "Streamlines the onboarding process so new customers start in the unified Defender experience from day one, avoiding the confusion of managing Sentinel across two portals.",
          },
          {
            severity: "critical", status: "change",
            summary: "Microsoft Sentinel in the Azure portal to be retired — plan your move to Defender portal",
            detail: "Microsoft Sentinel is generally available in the Microsoft Defender portal for all customers. Microsoft Sentinel in the Azure portal will be retired in March 2027 (date extended from July 2026).",
            whyItMatters: "Customers currently using the Azure portal for Sentinel should begin planning their transition to the Defender portal. Delaying migration risks disruption when the Azure portal experience is retired and limits access to new features shipping exclusively in the Defender portal.",
            actionNote: "If you still manage Sentinel from the Azure portal, start planning your migration to security.microsoft.com. The Azure portal experience will be retired March 31, 2027. Review your SOC workflows, bookmarks, and playbook integrations for portal-specific dependencies.",
          },
        ],
      },
    ],
  },
  {
    month: "Jun 2025",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "critical", status: "change",
            summary: "Codeless Connector Platform (CCP) renamed to Codeless Connector Framework (CCF)",
            detail: "The CCP has been renamed to CCF to reflect the platform's evolution and avoid confusion with other platform-oriented services.",
            whyItMatters: "If you reference CCP in documentation, scripts, or internal wikis, update those references to CCF to stay aligned with official terminology and avoid confusion in support or procurement conversations.",
          },
          {
            severity: "critical", status: "change",
            summary: "Consolidated Microsoft Sentinel data connector reference documentation",
            detail: "Separate connector articles have been merged into a single, comprehensive reference table.",
            whyItMatters: "A single reference table makes it faster to compare connectors, check prerequisites, and identify gaps in data source coverage — reducing the time spent navigating scattered documentation.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Summary rule templates now in public preview",
            detail: "Pre-built summary rule templates can now be deployed for common security scenarios, helping aggregate and analyze large datasets efficiently.",
            whyItMatters: "Reduces the effort required to set up data aggregation for high-volume tables, enabling analysts to surface trends and patterns without writing complex KQL from scratch.",
          },
        ],
      },
    ],
  },
  {
    month: "May 2025",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "All Microsoft Sentinel use cases generally available in the Defender portal",
            detail: "All GA Microsoft Sentinel use cases, including multitenant and multi-workspace capabilities and support for all government and commercial clouds, are now supported in the Defender portal.",
            whyItMatters: "Removes the last blockers for organizations that were waiting on full feature parity before migrating from the Azure portal, making the Defender portal the definitive home for Microsoft Sentinel operations.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Unified IdentityInfo table in the Defender portal",
            detail: "UEBA-enabled customers in the Defender portal can use a unified IdentityInfo table in Advanced Hunting that includes the largest possible set of fields common to both portals.",
            whyItMatters: "A single, consolidated IdentityInfo table eliminates the need to correlate identity data across separate schemas, simplifying hunting queries and ensuring consistent identity context during investigations.",
          },
          {
            severity: "minor", status: "preview",
            summary: "SOC optimization additions — AI MITRE ATT&CK tagging and risk-based recommendations",
            detail: "SOC optimization now uses AI to suggest tagging security detections with MITRE ATT&CK tactics and techniques, and recommends controls to address coverage gaps linked to business risks.",
            whyItMatters: "Automates the tedious process of mapping detections to ATT&CK, improves detection coverage visibility, and ties security recommendations to business risk — helping SOC teams prioritize effectively.",
          },
          {
            severity: "minor", status: "preview",
            summary: "SOC optimization support for unused columns",
            detail: "SOC optimization now surfaces unused columns in your tables to help optimize cost and security value ratio.",
            whyItMatters: "Identifying and removing unused columns reduces ingestion and storage costs without sacrificing detection coverage, making it easier to right-size your data collection strategy.",
          },
        ],
      },
    ],
  },
  {
    month: "Apr 2025",
    products: [
      {
        product: "Microsoft Sentinel",
        icon: "🔭",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Microsoft Sentinel solution for Microsoft Business Apps generally available",
            detail: "The Microsoft Sentinel solution for Microsoft Business Apps is now generally available in the Azure portal.",
            whyItMatters: "Extends Sentinel's detection and response capabilities to Dynamics 365 and Power Platform workloads, closing a visibility gap for organizations that rely on Microsoft Business Apps for critical operations.",
          },
          {
            severity: "important", status: "preview",
            summary: "Security Copilot generates incident summaries in Microsoft Sentinel",
            detail: "Microsoft Sentinel in the Azure portal now features incident summaries generated by Security Copilot, giving analysts up-front information to quickly understand, triage, and investigate incidents.",
            whyItMatters: "AI-generated summaries reduce the cognitive load on analysts during triage, providing immediate context and accelerating time-to-decision for incident response.",
          },
          {
            severity: "important", status: "preview",
            summary: "Multi workspace and multitenant support for Microsoft Sentinel in the Defender portal",
            detail: "In the Defender portal, connect to one primary workspace and multiple secondary workspaces for Microsoft Sentinel, with support for cross-tenant management via Defender multitenant management.",
            whyItMatters: "Enables MSSPs and large enterprises to manage multiple Sentinel workspaces and tenants from a single Defender portal session, eliminating the need to switch between portals or browser contexts for cross-tenant operations.",
          },
          {
            severity: "important", status: "preview",
            summary: "Microsoft Sentinel ingests all STIX objects and indicators into new threat intelligence tables",
            detail: "New ThreatIntelIndicators and ThreatIntelObjects tables support the STIX 2.1 schema. The legacy ThreatIntelligenceIndicator table stopped receiving data after July 31, 2025.",
            whyItMatters: "Full STIX 2.1 support enriches threat intelligence with relationships, campaigns, and threat actor objects — not just indicators — enabling deeper contextual analysis. Organizations still using the legacy table must migrate queries and workbooks to the new tables.",
          },
        ],
      },
    ],
  },
]
