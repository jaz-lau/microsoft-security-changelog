export const PLATFORM_UPDATES = [
  {
    month: "Mar 2026",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        releases: [
          { version: "2.255.19201.14651", notes: "Bug fixes" },
        ],
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Major identity security expansion: Identity Security dashboard, Coverage and maturity, non-human identities, identity risk score, domain investigation, password protection page (all Preview)",
            detail: ["Identity Security dashboard shows summary cards for identity providers, on-premises identities, SaaS identities, PAM/IGA integrations, and non-human identities — with widgets for deployment status, highly privileged identities, users at risk, and domains with unsecured configurations.", "Coverage and maturity page shows maturity levels (Connected, Protected, Fortified, Resilient) per identity source with coverage scores and prioritised setup tasks.", "Non-human identities tab in Identity Inventory covers Entra ID apps, AD service accounts, Google Workspace apps, and Salesforce apps — with risk, privilege, usage and exposure statistics per identity.", "Identity risk score (0–100) based on criticality and privileged roles, available in Entra ID for Conditional Access workflows. A new Risk score tab on the Identity page shows breakdown, percentile comparison and trends.", "Identity security recommendations across AD, Entra ID, and SaaS applications including Atlassian, GitHub, Google Workspace, Salesforce, ServiceNow, Okta, PingOne, CyberArk, and SailPoint.", "Domain investigation page shows AD domain health: domain properties, deployment health, identity summary, service account breakdown, sensitive entities, active recommendations, group policies, and trust relationships.", "Password protection page shows identity password risk from AD, Entra ID, and Okta — with tabs for password hygiene, password policies, leaked credentials, and exposed passwords."],
            whyItMatters: "Provides a single pane of glass for identity security posture across hybrid and multi-cloud environments. Security teams can now prioritise remediation using maturity scores, risk quantification, and unified visibility into both human and non-human identities — closing gaps that previously required stitching together data from multiple consoles.",
          },
          {
            severity: "important", status: "ga",
            summary: "Sensor v2.x to v3.x migration now available from the Defender portal — no downtime",
            detail: "You can now migrate Defender for Identity sensors from v2.x to v3.x directly from the Microsoft Defender portal. Eligible servers show as 'Ready for migration' on the Sensors page; migration takes up to 20 minutes.",
            whyItMatters: "The v2.x sensor continues running during migration until the v3.x sensor is ready, ensuring no monitoring downtime. This removes the operational risk and complexity that previously discouraged teams from upgrading to the newer sensor architecture.",
          },
          {
            severity: "important", status: "ga",
            summary: "10 new security alerts: 7 Entra ID, 3 Active Directory",
            detail: ["New Entra ID alerts: Attempt to disable Defender for Identity service principal; Suspicious Entra account enablement after disruption; Suspicious Intune device registration; Suspicious OS switch sign-in; Suspicious shared client infrastructure; Suspicious sign-in from unusual user agent and IP using PowerShell; Suspicious sign-in from unusual user agent and IP using device code flow.", "New Active Directory alerts: Suspicious on-premises account enablement after disruption; Suspicious RBCD attribute change; Suspicious RBCD authentication.", "The Suspected pass-the-ticket attack alert is now generally available (previously in public preview as 'Pass-the-Ticket (PtT) attack')."],
            whyItMatters: "Expands detection coverage for modern identity attack techniques — including device code phishing, resource-based constrained delegation abuse, and post-disruption account re-enablement — that adversaries actively use to bypass MFA and maintain persistence.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Sensor version numbers now show full build number (e.g. 2.255.19201.14651)",
            detail: "Sensor versions now display the full version number (e.g. 2.255.19201.14651) instead of only major/minor (e.g. 2.255).",
            whyItMatters: "The last two numbers show exactly which update is installed, making it easier to validate upgrades, troubleshoot issues, and confirm patch compliance across large sensor deployments.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Secure Score category recalibration — some Cloud Apps recommendations moved to Identity",
            detail: "Some security recommendations previously categorised under Cloud apps are now grouped under Identity to better reflect their nature.",
            whyItMatters: "Total Secure Score is unchanged but individual identity and app scores may shift. Teams tracking identity-specific scores should expect a temporary increase and update any score-based reporting thresholds accordingly.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Continued rollout: Sensor v3.x RPC Audit Misconfigured health alert",
            detail: "The Sensor v3.x RPC Audit Misconfigured health alert continues rolling out gradually. It identifies v3.x sensors where Enhanced RPC auditing configuration is missing or incorrectly applied.",
            whyItMatters: "Enhanced RPC auditing is required for some advanced Defender for Identity detections. Without it, certain lateral movement and privilege escalation attacks may go undetected, so surfacing misconfiguration early prevents blind spots.",
          },
        ],
      },
    ],
  },
  {
    month: "Feb 2026",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        releases: [
          { version: "2.255", notes: "Bug fixes" },
        ],
        updates: [
          {
            severity: "important", status: "unspecified",
            summary: "7 new security alerts: 5 Entra ID, 2 Active Directory",
            detail: ["New Entra ID alerts: Suspicious user configuration change from Entra ID sync application; Anomalous OAuth device code authentication; Suspicious Graph API request from Entra ID sync application; Suspicious sign-in from Entra ID sync application; Suspicious sign-in with CSRF speedbump trigger.", "New Active Directory alerts: Possible golden ticket attack (suspicious ticket); Possible Kerberos key list attack."],
            whyItMatters: "Covers critical attack vectors targeting Entra Connect sync applications and Kerberos infrastructure. These detections help catch golden ticket forgery and OAuth abuse early, before attackers can leverage compromised sync accounts for domain-wide persistence.",
          },
        ],
      },
    ],
  },
  {
    month: "Jan 2026",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        releases: [
          { version: "2.254", notes: "Added support for new DNS zone target *.atp.gcc.azure.com — sensors in GCC must be able to access this zone with the sensor DNS prefix." },
        ],
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Identity inventory enhancements now GA: Accounts tab, manual account linking, identity-level remediation, IdentityAccountInfo hunting table",
            detail: ["Accounts tab in Identity Inventory provides a consolidated view of all accounts associated with an identity from AD, Entra ID, and non-Microsoft providers.", "Manual link and unlink of accounts directly in the Accounts tab, enabling correlation across directory sources.", "Identity-level remediation actions (disable account, reset password) across all accounts linked to an identity.", "New IdentityAccountInfo table in Advanced Hunting provides account information from various sources including Entra ID, linked to the owning identity."],
            whyItMatters: "Eliminates the need to manually correlate accounts across directories during investigations. Analysts can now see a unified identity view, take remediation actions across all linked accounts at once, and hunt across identity data programmatically — significantly reducing response time for compromised-account scenarios.",
          },
          {
            severity: "important", status: "unspecified",
            summary: "11 new security alerts: 5 Entra ID, 6 Active Directory",
            detail: ["New Entra ID alerts: Suspicious sign-in from Entra ID sync application to uncommon resource app; Suspicious sign-in to Entra ID sync application using uncommon user agent; Possible OAuth code theft via consent abuse; Possible adversary-in-the-middle (AiTM) attack (ConsentFix); Skipped MFA on remembered device from uncommon ISP sign-in.", "New Active Directory alerts: Pass-the-Ticket (PtT) attack; Possible AD Certificate Services enumeration; Possible AD enumeration via ADWS; Suspicious NTLM authentication; Possible Kerberoasting attack using stealthy LDAP search; Suspicious Kerberos authentication (TGT request using TGS-REQ)."],
            whyItMatters: "Adds detection for high-impact techniques including AiTM phishing, AD Certificate Services abuse, stealthy Kerberoasting, and MFA bypass via remembered devices. These are actively exploited in real-world attacks and were previously difficult to detect without custom hunting queries.",
          },
          {
            severity: "important", status: "ga",
            summary: "New security posture assessments: Stale AD accounts, Entra privileged accounts also privileged in AD",
            detail: ["Remove stale Active Directory accounts (Preview) lists user accounts in AD that have not logged in during the past 90 days.", "Microsoft Entra ID privileged user accounts that are also privileged in Active Directory (Preview) lists Entra privileged accounts with dual privilege in AD."],
            whyItMatters: "Stale accounts are a common entry point for attackers since they are often forgotten and unmonitored. Dual-privileged accounts spanning both Entra ID and AD represent a high-risk configuration where compromising one directory grants access to both — identifying these enables targeted remediation.",
          },
          {
            severity: "important", status: "ga",
            summary: "New health alert: Sensor v3.x RPC Audit Misconfigured; automatic Windows event auditing for v3.x (Preview)",
            detail: ["A new health alert identifies v3.x sensors where Enhanced RPC auditing configuration is missing or incorrectly applied — required for some advanced MDI detections.", "Automatic Windows event-auditing configuration is rolling out for v3.x sensors, streamlining deployment by automatically applying required auditing settings and correcting misconfigurations."],
            whyItMatters: "This update may surface previously undetected auditing configuration gaps. Ensuring all servers with v3.x sensors have the latest Windows cumulative update and automatic Windows event auditing enabled prevents detection blind spots and reduces manual configuration burden.",
          },
          {
            severity: "important", status: "ga",
            summary: "New security posture assessments: Service accounts in privileged groups; accounts in built-in Operator Groups",
            detail: ["Identify service accounts in privileged groups lists AD service accounts with direct or nested membership in privileged groups.", "Locate accounts in built-in Operator Groups lists AD accounts that are members of built-in Operator Groups including indirect membership."],
            whyItMatters: "Service accounts in privileged groups are high-value targets because they often have weak passwords and are excluded from MFA. Built-in Operator Group memberships are frequently inherited from legacy configurations and forgotten — reviewing these reduces unnecessary privilege and limits lateral movement paths.",
          },
        ],
      },
    ],
  },
  {
    month: "Dec 2025",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        releases: [
          { version: "2.253", notes: "Bug fixes and stability improvements" },
          { version: "2.252", notes: "Bug fixes and stability improvements" },
        ],
        updates: [
          {
            severity: "minor", status: "unspecified",
            summary: "ADWS LDAP search activity now available in IdentityQueryEvents table in Advanced Hunting",
            detail: "New ADWS LDAP search activity is now captured in the IdentityQueryEvents table in Advanced Hunting.",
            whyItMatters: "Provides visibility into directory queries performed through ADWS, enabling security teams to track these operations and build custom detections. ADWS queries were previously a blind spot that attackers could exploit for stealthy reconnaissance.",
          },
          {
            severity: "minor", status: "preview",
            summary: "New Graph API properties for sensorCandidate resource type (Preview): domainName, senseClientVersion",
            detail: "Two new properties are available for the sensorCandidate resource type in the Graph API (preview version): domainName (the domain name of the sensor) and senseClientVersion (the version of the Defender for Identity sensor client).",
            whyItMatters: "Enables automation teams to programmatically query sensor deployment status across domains and versions, supporting infrastructure-as-code workflows and automated compliance checks for sensor coverage.",
          },
        ],
      },
    ],
  },
  {
    month: "Nov 2025",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        releases: [
          { version: "2.251", notes: "Enhanced ADWS LDAP and legacy password-based LDAP query methods now capture a broader range of unique events at scale — you may notice an increase in recorded activity." },
          { version: "2.250", notes: "Improved event log query method captures a broader range of unique events at scale. Includes security and performance improvements." },
        ],
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Identity Inventory enhancements (Preview): Accounts tab, manual account linking, identity-level remediation actions",
            detail: ["Accounts tab in Identity Inventory provides a consolidated view of all accounts associated with an identity from AD, Entra ID, and supported non-Microsoft providers.", "Manual link and unlink of accounts directly in the Accounts tab — enables correlation across directory sources for complete identity context during investigations.", "Identity-level remediation actions (disable accounts, reset passwords) across all accounts linked to an identity."],
            whyItMatters: "Consolidates fragmented identity data into a single view, reducing investigation time and enabling cross-directory remediation without switching consoles. Note: these features were promoted to GA in January 2026.",
          },
          {
            severity: "important", status: "preview",
            summary: "New security posture assessment: Change password for on-premises account with potentially leaked credentials (Preview)",
            detail: "This new security posture assessment lists users whose valid credentials were found to have been leaked.",
            whyItMatters: "Leaked credentials are one of the most common initial access vectors. Proactively identifying and remediating compromised passwords before attackers use them prevents account takeover and reduces the window of exposure.",
          },
          {
            severity: "important", status: "preview",
            summary: "Expansion of identity scoping: Support for Organisational Units (Preview)",
            detail: "In addition to scoping by Active Directory domains, you can now scope by Organisational Units (OUs) as part of XDR user role-based access control (URBAC).",
            whyItMatters: "Provides more granular control over which entities and resources are included in security analysis. This is critical for large organisations with delegated administration models, ensuring analysts only see identities within their scope of responsibility.",
          },
        ],
      },
    ],
  },
  {
    month: "Oct 2025",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        releases: [
          { version: "2.249", notes: "Improved event log query method captures a broader range of unique events at scale. You may notice an increase in captured activities. Includes security enhancements and performance improvements." },
        ],
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Microsoft Defender for Identity sensor v3.x now generally available",
            detail: "The Microsoft Defender for Identity sensor v3.x is now generally available.",
            whyItMatters: "v3.x provides enhanced detection coverage, improved performance, and easier deployment and management for domain controllers compared to v2.x sensors. Upgrading ensures access to the latest identity threat detections and positions environments to receive future capabilities that may be v3.x-exclusive.",
          },
        ],
      },
    ],
  }
];
