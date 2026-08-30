export const PLATFORM_UPDATES = [
  {
    month: "Aug 2026",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Automatic Windows event auditing expands to AD CS, AD FS and Entra Connect servers",
            detail: "Automatic Windows event auditing now configures auditing for AD FS, AD CS and Microsoft Entra Connect. Auditing is applied automatically on any eligible server running Defender for Identity sensor v3.x, including servers that are not domain controllers.",
            whyItMatters: "AD CS and AD FS are high-value targets — certificate abuse and token forgery both grant durable access that survives password resets — yet their audit policy is routinely left at defaults because it sits outside the domain controller baseline. Configuring it automatically removes the most common cause of blind spots on these servers.",
          },
        ],
      },
    ],
  },
  {
    month: "Jul 2026",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        releases: [
          { version: "2.255.19295.47272", notes: "Adds support for a new Event Tracing for Windows (ETW) provider, plus other improvements" },
        ],
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Sensor v2.x to v3.x migration is now generally available",
            detail: "Migration of Defender for Identity sensors from v2.x to v3.x has reached general availability.",
            whyItMatters: "Removes the preview caveat that kept most organisations from scheduling the migration. With v3.x now carrying the automatic auditing and expanded detection work, staying on v2.x increasingly means missing capability rather than merely running an older build.",
          },
          {
            severity: "important", status: "ga",
            summary: "Windows Server 2025 domain controllers can now migrate to sensor v3.x",
            detail: "Domain controllers running Windows Server 2025 can now be migrated from sensor v2.x to sensor v3.x.",
            whyItMatters: "Lifts the known limitation documented in May 2026, which forced the newest domain controllers to stay on the older sensor. Organisations that deferred their Windows Server 2025 rollout on this basis can now proceed without splitting their sensor estate across two versions.",
          },
          {
            severity: "important", status: "ga",
            summary: "Automatic RPC auditing on domain controllers from sensor v3.0.8",
            detail: "Defender for Identity automatically enables RPC auditing on domain controllers when upgrading to sensor version 3.0.8 or later. Applying a tag manually is no longer required.",
            whyItMatters: "Enhanced RPC auditing underpins several lateral movement and privilege escalation detections, and the manual tagging step was easy to miss — leaving sensors deployed but partially blind. Automatic enablement closes the gap that the 'RPC Audit Misconfigured' health alert was created to surface.",
          },
          {
            severity: "important", status: "preview",
            summary: "Password protection expands to SaaS apps connected through Defender for Cloud Apps (Preview)",
            detail: "The Password protection page now includes password risks from SaaS apps connected through Microsoft Defender for Cloud Apps, alongside Active Directory, Microsoft Entra ID and Okta. SaaS apps supporting SaaS Security Posture Management, such as Salesforce and ServiceNow, appear on the Password Hygiene and Password Policies tabs. Each SaaS app requires a Defender for Cloud Apps app connector.",
            whyItMatters: "Weak or reused passwords in SaaS applications sit outside directory password policy entirely, and they are where credential stuffing succeeds after the directory has been hardened. Coverage depends on having the relevant Defender for Cloud Apps connector in place, so the view is only as complete as the connector estate.",
          },
          {
            severity: "important", status: "ga",
            summary: "Domain investigation page is now generally available",
            detail: "The Domain investigation page supports investigation of an Active Directory domain, showing domain properties, deployment health, identity summary, service account breakdown, sensitive entities, active recommendations, group policies and trust relationships.",
            whyItMatters: "Brings the domain-level context that determines blast radius — trust relationships, service accounts, sensitive entities — into one page rather than assembled from AD tooling mid-incident. Pairing it with active recommendations connects the investigation to the hardening that would prevent a recurrence.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Sensors page now explains why a server is not ready for migration",
            detail: "Where a server is marked 'Not ready for migration' on the Sensors page, hovering over the status shows a tooltip listing the specific prerequisites the server does not meet.",
            whyItMatters: "Turns a blocked migration into an actionable list without opening a support case or working through prerequisite documentation server by server. Mostly a time saving, but a meaningful one across a large sensor estate.",
          },
        ],
      },
    ],
  },
  {
    month: "Jun 2026",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Identity risk score is now generally available",
            detail: "The identity risk score is generally available. Ranging from 0 to 100, it reflects how likely an identity is to be compromised and how much damage a compromise could cause, based on the identity's criticality level and privileged role assignments. The Risk score tab on the Identity page provides a breakdown of risk factors, percentile comparison and risk trends.",
            whyItMatters: "Gives a single defensible number for prioritising identity remediation and for driving Conditional Access decisions, replacing ad hoc judgements about which accounts matter most. The percentile comparison is what makes it usable at scale — an absolute score means little without knowing how the identity ranks in the estate.",
          },
          {
            severity: "important", status: "ga",
            summary: "10 new security alerts: 7 Entra ID, 2 Active Directory, 1 SailPoint",
            detail: [
              "New Entra ID alerts: Anomalous activity following Global Administrator elevation; Reciprocal Temporary Access Pass creation between users; Suspicious service principal sign-in following credential addition; Suspicious bulk user deletion via scripted activity; Suspicious removal of privileged app role assignment through Graph API; Suspicious sign-in by a user exhibiting a spike in account update activity; User exhibiting spike in distinct application-resource access combinations.",
              "New Active Directory alerts: DCSync attack (replication of directory services); Suspicious Entra Connect account authentication.",
              "New alerts for other identity providers: SailPoint ISC suspected brute-force attack.",
            ],
            whyItMatters: [
              "These cover the post-elevation phase that most identity detection misses — an attacker who has already reached Global Administrator behaves like an administrator. Reciprocal Temporary Access Pass creation and service principal sign-in after credential addition are both established persistence techniques that leave no failed sign-ins behind.",
              "DCSync detection is a long-standing gap-filler for credential theft at the domain level, and Entra Connect account authentication is worth watching closely because that account bridges on-premises and cloud with high privilege in both.",
              "Extending detection to SailPoint reflects that identity governance platforms are themselves targets — compromising the system that grants access is more efficient than attacking each account.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Non-human identity inventory expands to all Entra service principals and shows Entra roles (Preview)",
            detail: [
              "Expanded Entra ID inventory: the non-human identity inventory now includes all Microsoft Entra service principals, not only those holding API permissions.",
              "Microsoft Entra roles visibility: the Permissions tab now shows assigned Microsoft Entra roles alongside API permissions.",
            ],
            whyItMatters: [
              "Service principals without API permissions were previously invisible here, yet they can still hold directory roles or Azure RBAC assignments — a meaningful blind spot in the non-human identity picture.",
              "API permissions alone understate what a service principal can do. Showing directory roles next to them gives the complete privilege picture in one place, which is what an access review actually needs.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Non-human identity inventory identifies service principals used by AI agents (Preview)",
            detail: "The non-human identity inventory now identifies which Entra ID service principals are used by AI agents, with a 'Used by AI agents' column and an insight card to find and prioritise them.",
            whyItMatters: "Agent-backed service principals often accumulate broad permissions during development and are rarely reviewed afterwards, while being reachable through prompt injection in a way conventional workloads are not. Separating them from ordinary service principals lets teams apply tighter review to the identities that carry that additional exposure.",
          },
        ],
      },
    ],
  },
  {
    month: "May 2026",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        releases: [
          { version: "2.255.19247.44775", notes: "Adds properties to Group Policy (GPO) event collection, plus bug fixes" },
        ],
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Sensor v3.x supports domain controllers running all identity roles",
            detail: "Defender for Identity sensor v3.x now supports domain controllers running all identity roles, including Microsoft Entra Connect, AD FS and AD CS.",
            whyItMatters: "Domain controllers carrying additional identity roles were the awkward exception in v3.x deployments, forcing a mixed sensor estate. Removing that restriction lets organisations standardise on one sensor version across the identity infrastructure.",
          },
          {
            severity: "important", status: "ga",
            summary: "8 new Entra ID security alerts covering session theft and Conditional Access bypass",
            detail: "New Entra ID alerts: Guest user account promoted to member; User was created and assigned to Global Administrator role; Failed credential abuse attempt in Entra ID authentication; Malicious sign in from a randomized user agent; Possible use of a stolen session cookie; Stolen session cookie replay detected; Suspected Conditional Access bypass via non-compliant device; Suspicious addition of default third-party MFA method to user account.",
            whyItMatters: "Session cookie theft and replay is the dominant way MFA is bypassed in practice, and it produces a successful sign-in that looks legitimate — two alerts aimed squarely at it is the significant part of this release. Guest promotion to member and third-party MFA method addition are both quiet persistence techniques that rarely trigger review.",
          },
          {
            severity: "important", status: "ga",
            summary: "Sensor capacity increased to 1,000 sensors per workspace",
            detail: "Defender for Identity now supports up to 1,000 sensors per workspace, up from the previous limit of 350. Deployments needing more than 1,000 sensors should contact Defender for Identity support.",
            whyItMatters: "The 350 limit forced large or heavily acquisitive organisations to split across workspaces, which fragments the identity picture exactly where cross-domain attack paths matter. Consolidating back into one workspace restores a single view.",
          },
          {
            severity: "important", status: "change",
            summary: "Known limitation: Windows Server 2025 domain controllers cannot migrate to sensor v3.x",
            detail: "Migrating domain controllers running Windows Server 2025 to sensor v3.x was not supported at this point; the guidance was to remain on the v2.x sensor on those domain controllers until migration support became available.",
            whyItMatters: "Organisations deploying Windows Server 2025 had to plan for a split sensor estate and forgo v3.x capabilities on their newest domain controllers. This limitation was lifted in July 2026.",
          },
        ],
      },
    ],
  },
  {
    month: "Apr 2026",
    products: [
      {
        product: "Microsoft Defender for Identity",
        icon: "🕵️",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Automatic Windows event auditing configuration for sensors v3.x is now generally available",
            detail: "Automatic Windows event-auditing configuration for sensors v3.x has reached general availability. It applies the required auditing settings to new sensors automatically and corrects misconfigurations on existing ones.",
            whyItMatters: "Missing or drifted audit policy is the most common reason Defender for Identity detections fail to fire on a correctly deployed sensor, and it is invisible until an incident exposes it. Correcting existing misconfigurations matters more than configuring new sensors, since that is where the accumulated drift sits.",
          },
          {
            severity: "important", status: "preview",
            summary: "Identity Explorer tab visualises identity attack paths as interactive graphs (Preview)",
            detail: "The Identity page includes an Identity Explorer tab for customers with a Microsoft Sentinel Data Lake licence. It uses the hunting graph to visualise identity attack paths and exposure scenarios as interactive graphs, with predefined identity scenarios for lateral movement paths, privilege escalation routes and credential-access risks.",
            whyItMatters: "Attack paths are inherently relational, and reading them from tabular query output is where analysts lose the thread. Requires a Sentinel Data Lake licence, so it is not available to every Defender for Identity customer.",
          },
          {
            severity: "important", status: "preview",
            summary: "Custom account correlation rules link accounts without shared identifiers (Preview)",
            detail: "Custom account correlation rules link accounts belonging to the same identity — such as privileged accounts using distinct naming conventions — where they share no strong identifier like account ID, SID, object ID or UPN. Rules can be defined on UPN prefix, UPN suffix or domain UPN.",
            whyItMatters: "Separate admin accounts are standard practice, and when the platform cannot tie them to the human behind them, both the risk score and the investigation timeline are fragmented. Correlation rules make the tiering model legible to the product rather than only to the people who designed it.",
          },
        ],
      },
    ],
  },
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
