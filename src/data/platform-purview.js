export const PLATFORM_UPDATES = [
  {
    month: "Apr 2026",
    products: [
      {
        product: "Microsoft Purview",
        icon: "📋",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "Advanced resource sets in Unified Catalog now generally available",
            detail: "The advanced resource sets capability is now available to all customers in the Microsoft Purview Unified Catalog.",
            whyItMatters: "Improves data asset grouping and management, reducing manual effort when cataloguing large-scale storage resources and making it easier to govern data at scale.",
          },
          {
            severity: "important", status: "ga",
            summary: "Auto-labeling policies for SharePoint and OneDrive — override manually applied labels",
            detail: "Auto-labeling policies now support a new flow where you can choose to automatically apply or remove a sensitivity label when configured conditions apply for files in SharePoint and OneDrive.",
            whyItMatters: "Administrators can now override an existing label with a lower priority even if it was manually applied — previously only available for emails. This closes a gap where outdated or incorrect manual labels could persist on SharePoint and OneDrive files, undermining data protection policies.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Bulk edit and move glossary terms in Unified Catalog",
            detail: "Edit glossary terms in bulk and move multiple terms between governance domains in Unified Catalog.",
            whyItMatters: "Streamlines glossary management for organisations with large term sets, reducing repetitive manual work when reorganising governance domains or correcting terms across multiple entries.",
          },
          {
            severity: "minor", status: "change",
            summary: "Endpoint DLP just-in-time (JIT) protection documentation restructured",
            detail: "A new conceptual article, Learn about just-in-time protection, now covers JIT concepts, terms, supported activities, device compatibility, and includes a detailed JIT workflow diagram. The Get started with just-in-time protection article now focuses on deployment and configuration steps.",
            whyItMatters: "Separating concepts from deployment steps makes it easier to onboard new admins to JIT — they can build a mental model first, then follow a focused configuration guide without wading through theory.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Collection Policies — sensitivity labels as a scoping condition",
            detail: "Collection policies now support sensitivity labels as a condition for scoping detection to items with specific sensitivity labels applied. This condition is supported with browser and network cloud apps detection.",
            whyItMatters: "Allows DLP and collection policies to target only content carrying specific sensitivity labels, reducing false positives by scoping enforcement to data that has already been classified — rather than re-evaluating every item from scratch.",
          },
          {
            severity: "minor", status: "preview",
            summary: "DLP for unmanaged cloud apps — URL contains text condition",
            detail: "DLP policies for unmanaged cloud apps support a new URL contains text condition that detects when the URL of the cloud app contains specified text strings. Can be used as a condition to scope DLP rules to specific URLs or as an exception to exclude URLs from policy enforcement.",
            whyItMatters: "Gives administrators surgical control over which cloud app URLs trigger DLP enforcement, reducing noise from irrelevant apps while ensuring sensitive data moving to risky destinations is caught.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Email notifications for browser and network DLP rules",
            detail: "Browser and network DLP rules can now notify end users via email when their activity is blocked. Notifications use a rolling 10-minute batching window to prevent excessive emails.",
            whyItMatters: "Users blocked by inline DLP policies often don't understand why their action failed. Email notifications close that feedback loop, reducing help-desk tickets and helping users self-correct without admin intervention.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Insider Risk Management — preview content while triaging alerts",
            detail: "Reviewers can now preview content while triaging Insider Risk Management alerts to quickly identify false positives, confirm the presence of sensitive data, and decide whether the alert warrants escalation.",
            whyItMatters: "Cuts triage time by removing the need to pivot to a separate eDiscovery or content review surface — reviewers can validate or dismiss alerts in context, reducing the backlog that historically slows insider-risk programmes.",
          },
        ],
      },
    ],
  },
  {
    month: "Mar 2026",
    products: [
      {
        product: "Microsoft Purview",
        icon: "📋",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "Custom data quality rules using SQL expression language now GA",
            detail: "Authoring custom data quality rules using SQL expression language is now generally available. Users can create custom rules using both Azure Data Factory expression and SQL expression languages.",
            whyItMatters: "Teams familiar with SQL no longer need to learn a separate expression language to define quality rules, lowering the barrier to comprehensive data quality governance.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Configurable Data Quality thresholds — define minimum acceptable quality scores per rule and asset",
            detail: "Configurable Data Quality thresholds allow users to define minimum acceptable quality scores at the data quality rule and data asset levels.",
            whyItMatters: "Aligns quality evaluation with business criticality so teams can enforce stricter standards on high-impact assets while allowing more flexibility on lower-priority data.",
          },
          {
            severity: "minor", status: "preview",
            summary: "DLP adaptive scopes for scoping SharePoint policies",
            detail: "Data Loss Prevention now supports adaptive scopes for scoping SharePoint policies.",
            whyItMatters: "Enables more targeted and dynamic DLP policy application, reducing false positives and administrative overhead by automatically adjusting scope as the environment changes.",
          },
          {
            severity: "important", status: "preview",
            summary: "Data Security Posture Agent — proactively surface credentials buried across files, emails, and Teams",
            detail: "The Data Security Posture Agent in Data Security Investigations helps your organisation proactively surface credentials buried in data at scale.",
            whyItMatters: "Uses natural language search — not keywords, sensitive information types, or classifiers — to search across SharePoint, OneDrive, Teams, Exchange, and Copilot interactions, dramatically reducing the risk of credential exposure that traditional pattern-matching approaches would miss.",
          },
          {
            severity: "important", status: "ga",
            summary: "Audit search in Data Security Investigations now GA",
            detail: "Audit search is now generally available in Data Security Investigations. Identify and collect content based on user activities recorded in the Microsoft Purview unified audit log — such as accessing, copying, or downloading files.",
            whyItMatters: "Allows investigators to pull associated content directly into investigations based on audit activity, accelerating incident response by connecting user actions to the actual data involved.",
          },
          {
            severity: "important", status: "preview",
            summary: "DSPM — extend data insights to GCP, Snowflake, and Databricks via Sentinel partner solutions",
            detail: "Data Security Posture Management can now use Microsoft Sentinel with partner solutions to extend coverage of data insights to Google Cloud Platform, Snowflake, and Databricks.",
            whyItMatters: "Organisations with multi-cloud or hybrid data estates gain unified visibility into sensitive data risks across third-party SaaS and IaaS platforms, eliminating blind spots outside Microsoft 365.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Data Security Investigations — Categorization Standard and Advanced options",
            detail: "Standard categorization reduces processing time and Data Security Investigation Compute Units needed.",
            whyItMatters: "Gives investigators flexibility to balance speed and cost against categorization depth, enabling faster triage on straightforward cases while reserving advanced analysis for complex incidents.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Data Security Investigations — Soft purge for Exchange mailbox items",
            detail: "Soft purge moves items to recoverable items folder, preserving restore ability based on retention settings.",
            whyItMatters: "Provides a safer remediation option during investigations by removing sensitive items from user mailboxes without permanent deletion, maintaining a recovery path if items are purged in error.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Federated credentials for Fabric data risk assessments in DSPM",
            detail: "Federated credentials available as a more secure authentication method for Fabric data risk assessments, also available for DSPM for AI (classic).",
            whyItMatters: "Eliminates the need for stored credentials when connecting to Fabric, reducing the attack surface and aligning with zero-trust principles for data risk assessment workflows.",
          },
          {
            severity: "important", status: "preview",
            summary: "eDiscovery — Advanced review set explorer with KQL",
            detail: "Use the new Advanced review set explorer to query review set data with KQL, build advanced queries with complex filtering, pattern-based text extraction, and data visualization.",
            whyItMatters: "Empowers legal and compliance teams to perform precise, complex searches within review sets, significantly reducing time spent on document review and improving the accuracy of responsive data identification.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Insider Risk Management — Disable content download for faster case creation",
            detail: "A new option allows disabling content download when creating cases, reducing triage time by creating cases without attached content.",
            whyItMatters: "Accelerates the initial triage workflow by letting analysts create and begin reviewing cases immediately rather than waiting for potentially large content downloads to complete.",
          },
          {
            severity: "important", status: "preview",
            summary: "Insider Risk Management — Triage Agent enhanced summary tab",
            detail: "The agent summary tab intelligently distils user activity risk into meaningful risk pattern narratives, contextual filtering options, granular activity signals, and provides specific files within alerts.",
            whyItMatters: "Reduces the cognitive load on analysts during triage by surfacing AI-generated risk narratives and contextual signals, enabling faster and more informed decisions on which alerts warrant escalation.",
          },
          {
            severity: "important", status: "ga",
            summary: "Insider Risk Management — Microsoft Fabric Lakehouse indicators now GA",
            detail: "Microsoft Fabric Lakehouse indicators in Insider Risk Management are now generally available, extending detection coverage to data exfiltration via Fabric Lakehouse.",
            whyItMatters: "Closes a detection gap for data movement through Fabric Lakehouse, which is an increasingly common data platform that was previously only covered in preview, giving security teams production-ready risk signals.",
          },
          {
            severity: "important", status: "ga",
            summary: "Insider Risk Management — Non-M365 app data theft policy template now GA",
            detail: "The quick policy template for detecting data theft from non-Microsoft 365 apps by departing users is now generally available.",
            whyItMatters: "Provides production-ready detection for data exfiltration through non-Microsoft 365 applications by departing employees, a common blind spot that organisations can now address with a supported, GA-quality policy template.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Insider Risk Management — Pay-as-you-go usage reports now GA",
            detail: "Pay-as-you-go usage reports for Microsoft Purview Insider Risk Management are now generally available.",
            whyItMatters: "Gives organisations reliable, production-grade visibility into consumption-based costs, enabling confident budget planning and policy optimisation with GA-level support and accuracy.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Manual sensitivity labeling for OneNote at section level now GA",
            detail: "Manual labeling for OneNote is now supported at the section level. Requires SharePoint and OneDrive to already be enabled for sensitivity labels.",
            whyItMatters: "Extends sensitivity labeling to OneNote sections, closing a gap where OneNote content in SharePoint and OneDrive could not be manually classified at a granular level alongside other Office documents.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Viva Engage communities now support sensitivity labels",
            detail: "Container label settings supported are privacy and guest access controls. Labels can be manually applied in Engage communities and configured in label policies as a default label for newly created communities.",
            whyItMatters: "Brings Viva Engage communities under the same sensitivity labeling governance as Teams and Microsoft 365 Groups, ensuring consistent privacy and guest access controls across collaboration surfaces.",
          },
        ],
      },
    ],
  },
  {
    month: "Feb 2026",
    products: [
      {
        product: "Microsoft Purview",
        icon: "📋",
        updates: [
          {
            severity: "minor", status: "preview",
            summary: "Incremental data quality scans using time-based filtering",
            detail: "Microsoft Purview Data Quality now supports incremental data quality scans using time-based filtering. Choose between full scans, incremental scans, or both when running data quality rules on data assets.",
            whyItMatters: "Reduces scan time and compute cost for large datasets by only evaluating new or changed data, making frequent quality checks practical for high-volume environments.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Data quality scans for standalone data assets — without linking to a data product",
            detail: "Organisations can now measure and improve data quality immediately without associating a data asset to a data product.",
            whyItMatters: "Significantly speeds up governance adoption by removing the prerequisite of data product association, letting teams assess quality first and decide whether formal association is warranted.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Azure SQL Managed Instance support for Data Quality scanner now GA",
            detail: "You can now measure, understand, and improve the quality of your data in Azure SQL Managed Instance. Both public network and private endpoint configurations are supported.",
            whyItMatters: "Extends Purview data quality governance to Azure SQL Managed Instance workloads, ensuring organisations using this managed database service are no longer excluded from centralized quality monitoring.",
          },
          {
            severity: "important", status: "preview",
            summary: "Insider Risk Management — Microsoft Fabric Lakehouse indicators and non-M365 app policy template",
            detail: ["Microsoft Fabric indicators in Insider Risk Management now include Lakehouse indicators.", "A new quick policy template is available for detecting data theft from non-Microsoft 365 apps by users leaving your organisation."],
            whyItMatters: "Closes detection gaps for data exfiltration via Fabric Lakehouse and non-M365 applications, both of which are increasingly common vectors that were previously outside insider risk policy coverage.",
          },
        ],
      },
    ],
  },
  {
    month: "Jan 2026",
    products: [
      {
        product: "Microsoft Purview",
        icon: "📋",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "Virtual network support for Unified Catalog self-service analytics metadata storage now GA",
            detail: "Virtual network support for self-service analytics metadata storage is now generally available.",
            whyItMatters: "Provides secure, compliant storage for analytics metadata within managed VNets, meeting network isolation requirements for regulated industries and preventing metadata from traversing public endpoints.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Workflows for data product access management and publication now GA",
            detail: "Workflows for data product access management and publication of data products and glossary terms in the Unified Catalog are now generally available.",
            whyItMatters: "Formalises approval processes for data product access and publication, ensuring governance controls are enforced consistently rather than relying on ad-hoc manual processes.",
          },
          {
            severity: "important", status: "preview",
            summary: "Data Security Posture Agent in DSPM — natural language search across M365 and Copilot data",
            detail: "Asset explorer in Data Security Posture Management now has an Agent tab for the new Data Security Posture Agent from Security Copilot.",
            whyItMatters: "The agent uses natural-language search across SharePoint, OneDrive, Teams messages, Exchange emails, and Copilot interactions — without relying on keywords, sensitive information types, or classifiers — enabling security teams to find sensitive data that traditional detection methods miss.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Sensitivity label groups — migration of parent labels now rolling out",
            detail: "Migration of parent sensitivity labels to label groups is gradually rolling out in general availability. No visible changes for end users.",
            whyItMatters: "Provides more flexibility in label organisation and reduces complexity for administrators managing large label taxonomies, without disrupting the end-user experience.",
          },
        ],
      },
    ],
  },
  {
    month: "Dec 2025",
    products: [
      {
        product: "Microsoft Purview",
        icon: "📋",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Data security and compliance protections for Microsoft Agent 365",
            detail: "Data security and compliance protections are now rolling out in preview for Microsoft Agent 365.",
            whyItMatters: "Extends Purview's governance and protection capabilities to the Agent 365 platform, ensuring AI agent interactions are subject to the same data security policies as other Microsoft 365 workloads.",
          },
          {
            severity: "important", status: "ga",
            summary: "Compliance Manager integrates with Azure AI Foundry for automated compliance evaluations",
            detail: "Compliance Manager now integrates with Azure AI Foundry to automate compliance evaluations for AI models and agents, syncing evaluation results directly from AI Foundry.",
            whyItMatters: "Reduces manual effort for demonstrating AI compliance and improves alignment with key AI regulations by automating the evaluation-to-evidence pipeline between AI development and compliance teams.",
          },
          {
            severity: "important", status: "preview",
            summary: "New Data Security Posture Management — outcome-based guided workflows, AI observability, posture reports",
            detail: "New version of DSPM brings together previous DSPM and DSPM for AI (classic) versions with outcome-based guided workflows, posture reports (label usage, DLP activities, posture drift), and AI observability with agent inventory and risk levels.",
            whyItMatters: "Consolidates previously fragmented DSPM experiences into a single unified view with actionable workflows, giving security teams a clear path from posture assessment to remediation — including new Security Copilot agents for sensitive data discovery.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Data risk graphs in Data Security Investigations now GA",
            detail: "Data risk graphs help visualise correlations between impacted data, users, and their activities.",
            whyItMatters: "Provides critical context to guide security incident mitigation by revealing relationships between data, users, and actions that would be difficult to piece together from raw logs alone.",
          },
          {
            severity: "important", status: "ga",
            summary: "Unified Catalog metadata self-service analytics now GA",
            detail: "Microsoft Purview Unified Catalog metadata self-service analytics capability is now generally available.",
            whyItMatters: "Enables programmatic data quality API access, custom SQL expression rules, and multiregion data quality error record storage — letting data teams build automated quality pipelines tailored to their specific needs.",
          },
        ],
      },
    ],
  },
  {
    month: "Nov 2025",
    products: [
      {
        product: "Microsoft Purview",
        icon: "📋",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Network Data Security for third-party SASE network security solutions now GA",
            detail: "Microsoft Purview Network Data Security is now generally available for third-party SASE network security solutions.",
            whyItMatters: "Enables data security policy enforcement across network traffic flowing through third-party SASE solutions, closing a major gap where data leaving the Microsoft ecosystem was not subject to Purview DLP controls.",
          },
          {
            severity: "important", status: "ga",
            summary: "Sensitivity labels — SharePoint document library label extension to downloaded documents GA",
            detail: "SharePoint document libraries can now be configured with a sensitivity label that extends permissions to downloaded documents and protects files from being copied or moved.",
            whyItMatters: "Microsoft 365 Copilot can access unopened files labelled with this configuration, and RAG-based Foundry apps using AI search as knowledge retrieval can also honor sensitivity labels — ensuring protection follows documents even when consumed by AI workloads.",
          },
          {
            severity: "important", status: "preview",
            summary: "Insider Risk Management — Risky Agents policy template for Copilot Studio and Foundry agents",
            detail: "The new Risky Agents policy template in Insider Risk Management detects activities of agents hosted on Microsoft Copilot Studio and Microsoft Foundry.",
            whyItMatters: "Extends insider risk detection to AI agent workloads, addressing the emerging threat of autonomous agents performing risky data access or exfiltration activities that traditional user-centric policies would not catch.",
          },
          {
            severity: "minor", status: "preview",
            summary: "DSPM for AI — item-level scanning with remediation for overshared files in SharePoint",
            detail: "Custom data risk assessments in DSPM for AI now include item-level scanning with remediation for potentially overshared files in SharePoint.",
            whyItMatters: "Helps organisations more confidently adopt Microsoft 365 Copilot by identifying and fixing oversharing at the individual file level before Copilot can surface sensitive content to unauthorised users.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Insider Risk Management — pay-as-you-go usage reports for budget planning",
            detail: "Pay-as-you-go usage reports are now available for Microsoft Purview Insider Risk Management.",
            whyItMatters: "Provides transparency into consumption-based costs and enables more accurate budget planning and policy tuning, helping organisations optimise spending while maintaining effective insider risk coverage.",
          },
        ],
      },
    ],
  },
]
