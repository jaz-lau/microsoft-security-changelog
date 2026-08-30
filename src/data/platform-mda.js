export const PLATFORM_UPDATES = [
  {
    month: "Aug 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Unified RBAC enabled by default for new Defender for Cloud Apps customers",
            detail: "From August 2026, Microsoft Defender unified role-based access control is automatically enabled for new Defender for Cloud Apps customers, with no manual workload activation required.",
            whyItMatters: "New tenants get centralised role management across Defender workloads from day one rather than configuring Cloud Apps permissions separately. Teams standing up a new tenant should plan their role model in unified RBAC from the outset, as the legacy per-workload permission path is no longer the starting point.",
          },
        ],
      },
    ],
  },
  {
    month: "Jun 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "critical", status: "change",
            summary: "File policies retire 6 January 2027 — migrate to Microsoft Purview",
            detail: "File-based data protection is moving from Defender for Cloud Apps to Microsoft Purview. Existing file policies must be recreated as Microsoft Purview DLP or auto-labeling policies before the retirement date.",
            whyItMatters: "Any file policy still in place after the cut-off stops enforcing, so data protection coverage silently lapses unless it has been rebuilt in Purview first. Migration is not like-for-like — Microsoft documents parity gaps and a governance action mapping — so teams need time to test equivalent Purview policies rather than porting them at the deadline.",
            actionNote: "Review existing file policies and recreate them in Microsoft Purview before 6 January 2027.",
          },
          {
            severity: "important", status: "preview",
            summary: "Salesforce connector adds Real-Time Event Monitoring ingestion and OAuth app governance (Preview)",
            detail: [
              "Real-time event monitoring: when a Salesforce administrator enables data storage for the relevant events in Salesforce Event Manager, the connector ingests Salesforce Real-Time Event Monitoring data within minutes, improving detection coverage for OAuth abuse, session hijacking, credential stuffing and anomalous API activity.",
              "Highly privileged and Unused app insights: the OAuth apps tab in the Application inventory now surfaces Highly privileged apps and Unused apps for Salesforce, and these feed the Highly privileged and Unused statistics on the Non-human identities tab of the Identity inventory.",
              "Permissions visibility: the Permissions list on the App governance page now covers Salesforce Connected Apps and External Client Apps (ECAs), so the rights granted to each Salesforce OAuth app can be reviewed.",
            ],
            whyItMatters: [
              "Salesforce attacks increasingly abuse OAuth tokens, connected apps and sessions to bypass MFA entirely, and these events are invisible in sign-in logs. Near real-time ingestion shortens the detection window from the connector's previous polling cadence to minutes — but only where the administrator has turned Real-Time Event Monitoring on in Salesforce.",
              "Over-privileged and dormant connected apps are the standing risk in a mature Salesforce tenant. Surfacing them alongside non-human identity statistics lets teams prune the OAuth estate using the same workflow they already use for Entra ID app governance.",
              "Reviewing granted permissions is the prerequisite for judging whether a connected app's access is proportionate. Without it, an ECA compromise is discovered only after the data movement, not before.",
            ],
          },
        ],
      },
    ],
  },
  {
    month: "May 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "minor", status: "preview",
            summary: "Informational alerts for unsanctioned app access can now be disabled (Preview)",
            detail: "A new 'Generate alert for blocked app access' toggle in the Microsoft Defender for Endpoint settings suppresses the informational alerts raised when users access unsanctioned apps, while leaving blocking enforcement active.",
            whyItMatters: "Blocked-app alerts are high-volume and low-signal in tenants with broad app-blocking policies, and they crowd out actionable detections in the queue. Suppressing them removes the noise without weakening enforcement — though teams that use these alerts to measure shadow IT should keep them on.",
          },
        ],
      },
    ],
  },
  {
    month: "Mar 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "important", status: "change",
            summary: "Secure Score category recalculation for increased accuracy",
            detail: "To improve accuracy and better protect organisational identities, some security recommendations previously categorised as Cloud apps are now considered identity-related and grouped under the Identity category.",
            whyItMatters: "While the total Secure Score remains unchanged, individual identity and app scores may differ. Teams that track Secure Score by category need to be aware so dashboards and reports reflect the new baselines accurately.",
          },
        ],
      },
    ],
  },
  {
    month: "Jan 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Workday connector updated to least-privilege permission model",
            detail: "The Workday connector now requires only 'View' permissions to function. The 'Modify' permission requirement has been removed to better align with the principle of least privilege.",
            whyItMatters: "Reducing connector permissions to the minimum necessary shrinks the attack surface if the integration account is compromised. Admins should update Workday account settings to remove the now-unnecessary 'Modify' right.",
          },
        ],
      },
    ],
  },
  {
    month: "Dec 2025",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Defender for Cloud Apps permissions integrated with Microsoft Defender unified RBAC (worldwide)",
            detail: "Integration of Microsoft Defender for Cloud Apps permissions with Microsoft Defender unified RBAC is now available worldwide. Activate the Defender for Cloud Apps workload via Activate Microsoft Defender unified RBAC.",
            whyItMatters: "Unified RBAC lets security teams manage Cloud Apps permissions alongside other Defender workloads in a single model, reducing administrative overhead and lowering the risk of inconsistent access controls across the security stack.",
          },
          {
            severity: "important", status: "preview",
            summary: "App governance unused app insights now available for most commercial customers",
            detail: "The app governance unused app insights feature helps administrators identify and manage unused Microsoft 365-connected OAuth apps, enforce policy-based governance, and use advanced hunting queries for better security. Now available for most commercial cloud customers.",
            whyItMatters: "Unused OAuth apps with lingering permissions are a common blind spot that attackers can exploit. Surfacing these apps enables teams to revoke stale access and reduce the overall OAuth attack surface.",
          },
        ],
      },
    ],
  },
  {
    month: "Nov 2025",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "AI Agent Protection — discover and monitor Copilot Studio and Azure AI Foundry agents",
            detail: ["Microsoft Defender now delivers comprehensive protection for AI agents, combining proactive exposure management with advanced threat detection.", "Copilot Studio agents: Defender ingests data into Advanced Hunting, enables custom queries, provides real-time protection by monitoring agent runtime, and blocks harmful or suspicious actions with XDR incident integration.", "Azure AI Foundry agents: Defender monitors for misconfigurations and vulnerabilities, identifies potential attack paths, and delivers actionable security recommendations through Exposure Management."],
            whyItMatters: "AI agents operate autonomously and can access sensitive data or take actions on behalf of users — making them high-value targets. Without dedicated monitoring, prompt injection attacks and misconfigured agents could go undetected, creating new lateral movement paths.",
          },
        ],
      },
    ],
  },
  {
    month: "Sep 2025",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Real-time protection during agent runtime for Microsoft Copilot Studio AI agents",
            detail: "Microsoft Defender now offers real-time protection during runtime for AI agents built with Microsoft Copilot Studio.",
            whyItMatters: "This capability automatically blocks an agent's response when suspicious behaviour — such as a prompt injection attack — is detected and notifies security teams with a detailed alert, closing the gap between detection and response for AI-driven threats.",
          },
        ],
      },
    ],
  },
  {
    month: "May 2025",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "Revamped Cloud Discovery Executive Summary report",
            detail: "The Cloud Discovery Executive Summary report has been updated with a modernised design and streamlined format, reducing from 26 pages to 6 pages.",
            whyItMatters: "A shorter, more focused report makes it easier for security leaders and stakeholders to quickly assess shadow IT risk and take action on the most relevant findings without sifting through noise.",
          },
          {
            severity: "important", status: "ga",
            summary: "New Applications inventory page in Defender XDR",
            detail: "The new Applications page in Microsoft Defender XDR provides a unified inventory of all SaaS and connected OAuth applications across your environment.",
            whyItMatters: "A single pane of glass for application discovery, monitoring, and risk assessment eliminates the need to switch between multiple consoles and helps security teams spot risky or unsanctioned apps faster.",
          },
          {
            severity: "critical", status: "change",
            summary: "Microsoft Defender for Cloud Apps SIEM agent to be deprecated November 2025",
            detail: ["As part of the ongoing convergence across Microsoft Defender workloads, Microsoft Defender for Cloud Apps SIEM agents will be deprecated starting November 2025.", "Recommended transition paths: Microsoft Defender XDR Streaming API for alerts and activities; IdentityLogonEvents table for Entra ID Protection logon events; Microsoft Graph Security Alerts API."],
            whyItMatters: "Continuing to rely on the legacy SIEM agent past the deprecation date risks losing alert and activity ingestion. Migrating early ensures uninterrupted detection coverage and positions your SOC on a supported, higher-fidelity data pipeline.",
            actionNote: "If you use the Cloud Apps SIEM agent to forward alerts, migrate to the Defender XDR Streaming API, IdentityLogonEvents table, or Microsoft Graph Security Alerts API before the deprecation date.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Revamped Cloud App Catalog page",
            detail: "The Cloud App Catalog page has been revamped with improved navigation, making it easier to discover and manage cloud applications and review risk scores.",
            whyItMatters: "Faster, more intuitive catalog navigation reduces the time analysts spend evaluating whether a cloud app meets organisational security and compliance requirements before sanctioning or blocking it.",
          },
        ],
      },
    ],
  },
  {
    month: "Mar 2025",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Enhanced Identity Inventory with consolidated identity view",
            detail: "The Identities page under Assets now includes two tabs: Identities (consolidated view across Active Directory and Entra ID) and Cloud application accounts (insights into accounts from connected applications including permissions, group memberships, and aliases).",
            whyItMatters: "A consolidated identity view closes visibility gaps between on-premises and cloud directories, helping security teams spot orphaned accounts, excessive permissions, and lateral movement risks across hybrid environments.",
          },
          {
            severity: "minor", status: "preview",
            summary: "RBAC scoping for Behaviors",
            detail: "Defender for Cloud Apps customers can now configure Role-Based Access Control scoping for Behaviors, allowing administrators to define and manage access permissions to specific application data more precisely based on user roles and responsibilities.",
            whyItMatters: "Granular RBAC scoping ensures analysts only see behaviour data relevant to their remit, enforcing least-privilege access within the SOC and reducing the risk of inadvertent data exposure across teams.",
          },
        ],
      },
    ],
  },
  {
    month: "Feb 2025",
    products: [
      {
        product: "Microsoft Defender for Cloud Apps",
        icon: "☁️",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Enhanced visibility into OAuth apps connected to Microsoft 365",
            detail: "App governance users can now gain visibility into the origin of OAuth apps connected to Microsoft 365, filter and monitor apps with external origins, and review permissions using the new Permissions filter and export capabilities.",
            whyItMatters: "Granular insights into data accessed by apps — including those using legacy EWS API alongside Microsoft Graph — and expanded privilege level classification for popular Microsoft first-party API permissions help teams identify overprivileged or suspicious OAuth integrations before they become a breach vector.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Enhanced alert source accuracy",
            detail: "Microsoft Defender for Cloud Apps is enhancing its alert sources to deliver more precise information about alert origins, applicable to new alerts across the Microsoft Defender portal, Advanced hunting, and Graph API.",
            whyItMatters: "Accurate alert source attribution helps SOC analysts triage and route incidents faster, reducing mean time to respond and preventing misclassification that could delay critical investigations.",
          },
        ],
      },
    ],
  },
]
