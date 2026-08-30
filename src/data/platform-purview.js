export const PLATFORM_UPDATES = [
  {
    month: "Aug 2026",
    products: [
      {
        product: "Microsoft Purview",
        icon: "📋",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "DLP and sensitivity label policies extend to non-Microsoft connected apps including Box and Google Workspace (Preview)",
            detail: [
              "Data Loss Prevention: DLP policies can protect sensitive data at rest in non-Microsoft connected applications such as Box and Google Workspace, using the existing Microsoft Defender for Cloud Apps connectors and the same classification engine available for Microsoft 365 locations.",
              "Sensitivity labels: auto-labeling policies can likewise protect sensitive data at rest in non-Microsoft connected apps including Box and Google Workspace, over the same connectors and classification engine.",
            ],
            whyItMatters: [
              "Data protection that stops at the Microsoft 365 boundary leaves the second-largest repository in most organisations unmanaged, and Box and Google Workspace are where regulated data accumulates after acquisitions or in business units that never migrated. Reusing the same classification engine means policy intent is consistent rather than approximated in a second tool.",
              "Labelling at rest in third-party apps is what makes protection travel with the file rather than depending on where it sits. Both depend on Defender for Cloud Apps connectors, so coverage is bounded by which connectors are actually configured.",
            ],
          },
          {
            severity: "important", status: "ga",
            summary: "Auto-labeling policies gain simulation mode and a policy Insights tab",
            detail: [
              "Before enforcing an auto-labeling policy, it can be run in simulation mode to identify which items it would label without making changes. Match results and source distribution can be reviewed to determine whether the policy is ready to enforce.",
              "The Insights tab in the policy details panel gives an at-a-glance view of an auto-labeling policy's performance, varying according to whether the policy is running in simulation or enforcement mode.",
            ],
            whyItMatters: [
              "An over-broad auto-labeling policy applies encryption to files it should not, and unwinding that across a tenant is considerably harder than applying it. Simulation converts an irreversible change into a reviewable one.",
              "Policy performance data is what distinguishes a policy that is not matching from one that has nothing to match, which otherwise look identical from the admin centre.",
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
        product: "Microsoft Purview",
        icon: "📋",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Network Data Security — DLP integrates with Microsoft Entra Global Secure Access to inspect text and AI prompts (Preview)",
            detail: "Integration with Microsoft Entra Global Secure Access lets organisations intercept and inspect text and AI interactions at the network layer, enforce restrictive actions based on DLP policies, and detect risky user activity through Insider Risk Management. It aims to prevent sensitive data being shared with untrusted cloud applications through browsers, apps, APIs and add-ins, including generative AI platforms, social media and collaborative platforms.",
            whyItMatters: "Endpoint and application DLP cannot see data pasted into an arbitrary web application, which is precisely how sensitive content reaches consumer AI tools. Enforcing at the network layer covers any destination rather than only the applications with a connector — the trade-off being that network-layer inspection is a significant deployment with its own privacy considerations.",
          },
          {
            severity: "critical", status: "change",
            summary: "Priority cleanup policies now require three separate approvals before permanent deletion",
            detail: "Priority cleanup policies require three separate approvals before content can be permanently deleted: one Priority Cleanup administrator, one retention manager and one eDiscovery administrator.",
            whyItMatters: "Priority cleanup permanently destroys content with no recovery path, and a mistaken or malicious policy is unrecoverable by definition. Requiring three distinct roles makes it a deliberate, auditable act rather than something a single compromised administrator account can trigger — but it also means existing cleanup workflows stall until all three approvers are identified.",
            actionNote: "Identify Priority Cleanup administrator, retention manager and eDiscovery administrator approvers before scheduling further priority cleanup runs.",
          },
          {
            severity: "important", status: "change",
            summary: "Microsoft Purview protection policies no longer support Azure SQL Database",
            detail: "Microsoft Purview protection policies no longer support Azure SQL Database.",
            whyItMatters: "Any protection policy relying on Azure SQL Database coverage stops applying, so data that was in scope becomes unprotected without a policy failure to signal it. Teams using this should confirm what covered those databases and arrange an alternative control.",
            actionNote: "Review protection policies scoped to Azure SQL Database and arrange alternative controls.",
          },
          {
            severity: "important", status: "preview",
            summary: "Insider Risk Management unified alert experience combines Triage Agent and standard dashboards (Preview)",
            detail: [
              "The unified alert experience combines the Triage Agent and Standard alert dashboards into a single alerts list page, allowing both classic and agent-triaged alerts to be viewed and managed in one place, with agent summaries and alert and user details previewable on the list page.",
              "Expanded user profile details add further signals from Microsoft Entra, including office location, employee type, department and last working date.",
              "Expanded note capabilities let analysts and investigators add and view notes on both alerts and cases. System-generated notes are applied automatically when alert or case status, assigned user, closure or case escalation changes.",
            ],
            whyItMatters: [
              "Two parallel alert queues meant insider risk work was split by which system triaged it, which is an artefact of the tooling rather than anything about the risk. One queue makes workload and backlog measurable.",
              "Last working date is the signal that matters most in insider risk — data exfiltration concentrates in the notice period, and having it inline avoids a separate HR lookup during triage.",
              "Insider risk cases frequently become HR or legal matters where the investigation record is scrutinised. Automatic system notes on status and ownership changes produce that audit trail without relying on analysts to write it.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Exchange Online DLP can detect classification failures from timeouts and throttling (Preview)",
            detail: "Exchange Online DLP policies can detect classification failures caused by timeouts, throttling and other scanning errors. Administrators can enable classification-failure detection and use the DocumentScanFailures condition to apply different protection actions for specific failure types.",
            whyItMatters: "A message that fails classification is currently indistinguishable from one that contains nothing sensitive, so a throttling event becomes a silent DLP bypass. Being able to act on the failure — quarantine rather than deliver, for instance — closes a gap that is invisible in policy reporting.",
          },
          {
            severity: "important", status: "ga",
            summary: "Purview role-group assignments can carry an expiration date",
            detail: "Microsoft Purview role-group assignments can be configured with an expiration date so access is revoked automatically. Temporary assignments can last from one day to two years, and are supported by most built-in and custom role groups except eDiscovery Administrator and eDiscovery Manager.",
            whyItMatters: "Purview roles grant access to the organisation's most sensitive content — eDiscovery, DLP alerts, insider risk cases — and are typically granted for a project and never revoked. Time-bounding them means the standing privileged population shrinks by default rather than by access review. Note the two eDiscovery roles are excluded, which are arguably the most sensitive.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Manual business continuity and disaster recovery guidance for Purview Data Map",
            detail: "New guidance covers configuring a manual business continuity and disaster recovery environment for Microsoft Purview Data Map, including creating a secondary account, mirroring scans, validating the environment and requesting account promotion during a regional outage.",
            whyItMatters: "Data Map underpins catalogue and governance workflows, and there is no built-in regional failover — meaning a regional outage stops governance operations entirely unless a secondary has been prepared in advance. The account promotion step requires a Microsoft request, so it cannot be improvised during an incident.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Fabric governance experiences in the OneLake catalog now show DLP activity and adoption",
            detail: "Administrators can use Microsoft Fabric governance experiences in the OneLake catalog to understand DLP activity and adoption, identifying evaluated workspaces, locating sensitive information, tracking policy adoption and prioritising high-risk assets.",
            whyItMatters: "Fabric workspaces accumulate copies of production data for analytics, and DLP coverage there is rarely measured. Seeing which workspaces are actually evaluated distinguishes real coverage from assumed coverage.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Auto-labeling documentation expanded: prerequisites, troubleshooting, and by-design behaviours",
            detail: [
              "A checklist covers auditing, regional availability, label scope, encryption settings, sensitive information types, file eligibility and required roles to review before creating an auto-labeling policy.",
              "Diagnostic guidance explains why a specific SharePoint or OneDrive file was or was not labelled, covering unsupported formats, checked-out files, indexing delays, existing higher-priority labels, encryption prerequisites, transient failures and unexpected labelling.",
              "Documentation now explains behaviours that are by design but often read as bugs — activation results differing from simulation, encryption restrictions, cross-tenant label identities, conflicts with label-application policies, and the effect of label removal on encryption. Auto-labeling policies can remove or downgrade sensitivity labels.",
              "Simulation is documented as not being a completely silent dry run: it can generate activity alerts, duplicated policies start in simulation, management actions can remain unavailable during provisioning, and the review experience can mix auto-labeling and DLP results in test mode.",
              "Licensing and configuration locations are documented for client-side Office auto-labeling, service-side auto-labeling policies and container-level labels, along with symptoms caused by missing licences, roles, regional availability or transient backend failures.",
              "Supported and unsupported group types are identified, with membership-propagation delays explained. Mail-enabled security groups, distribution groups and Microsoft 365 groups are supported; mail-disabled, dynamic distribution and deeply nested groups have limitations.",
            ],
            whyItMatters: [
              "Auto-labeling failures are usually prerequisite failures, and discovering them after a policy has been scoped to a tenant is expensive. A pre-flight checklist is the cheapest place to catch them.",
              "'Why was this file not labelled?' is the most common auto-labeling support question and previously had no systematic answer.",
              "That auto-labeling can remove or downgrade labels surprises most administrators, and it is the behaviour most likely to reduce protection unintentionally.",
              "Teams treat simulation as risk-free and are then surprised by activity alerts. Knowing simulation is observable matters if alerting is tuned tightly.",
              "Licensing gaps produce the same symptom as a misconfigured policy — nothing happens — so documenting the distinction saves considerable diagnosis.",
              "Group-scoped policies silently under-apply where the group type is unsupported, which looks like a policy that works but covers fewer people than intended. Deeply nested groups are a common structure in large directories.",
            ],
          },
        ],
      },
    ],
  },
  {
    month: "Jun 2026",
    products: [
      {
        product: "Microsoft Purview",
        icon: "📋",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "DLP can block external email from being used as Copilot grounding data (Preview)",
            detail: "A new 'Email is received from > External users' condition for the Microsoft 365 Copilot and Copilot Chat policy location lets DLP policies prevent Copilot from using external email as grounding data.",
            whyItMatters: "Copilot grounding turns any message in a mailbox into potential model input, so an attacker who can email a user can attempt to influence what Copilot tells them. Excluding external mail from grounding removes the delivery path for that class of prompt injection without restricting Copilot generally.",
          },
          {
            severity: "important", status: "ga",
            summary: "Endpoint DLP device attributes queryable in advanced hunting, and DLP policies can be scoped to device groups",
            detail: [
              "Endpoint DLP device configuration and policy sync attributes can be queried at scale through the DeviceInfo table's DlpInfo column in advanced hunting in the Microsoft Defender portal, rather than relying on point-in-time exports from the Microsoft Purview portal.",
              "Endpoint DLP policies can be scoped to specific device groups using dynamic device groups defined in Microsoft Entra ID — for example enforcing a policy when Finance users access data from Windows devices but not from macOS.",
            ],
            whyItMatters: [
              "Confirming that a DLP policy actually reached every device has been guesswork based on exported snapshots. Querying sync state directly means coverage gaps can be found before an incident reveals them.",
              "A single policy applied uniformly across a mixed estate is either too strict for some platforms or too loose for others, which is why endpoint DLP rollouts stall. Device group scoping lets enforcement be tightened where it is supported without blocking the rest.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Endpoint DLP evidence available as a data source in Data Security Investigations (Preview)",
            detail: "Investigators can query data captured by endpoint DLP policies on onboarded devices and add the associated content to an investigation scope for AI-powered analysis, enabling aggregate analysis of endpoint exfiltration events rather than per-alert triage.",
            whyItMatters: "Endpoint DLP produces high alert volumes where each individual event looks trivial and the pattern across them does not. Aggregate analysis is what surfaces the user steadily copying files over weeks — the behaviour per-alert triage is structurally unable to see.",
          },
          {
            severity: "important", status: "ga",
            summary: "Insider Risk Management can select which generative AI apps to monitor",
            detail: "For Microsoft Copilot experiences and Enterprise AI apps, individual generative AI apps can be selected or deselected for monitoring in Insider Risk Management policy indicators, reducing alert noise and avoiding unnecessary pay-as-you-go billing charges.",
            whyItMatters: "Monitoring every AI app indiscriminately generates alerts on sanctioned tools people are expected to use, which trains analysts to dismiss the category. The billing point is worth noting — indicator monitoring carries consumption cost, so scope directly affects spend.",
          },
          {
            severity: "important", status: "ga",
            summary: "Data security and compliance protections for Microsoft 365 Copilot Cowork are now generally available",
            detail: "Data security and compliance protections for Microsoft 365 Copilot Cowork have reached general availability.",
            whyItMatters: "Brings Cowork under the same DLP, labelling and compliance controls as the rest of Microsoft 365, which is the prerequisite for allowing it in regulated environments rather than blocking it outright.",
          },
          {
            severity: "important", status: "preview",
            summary: "Sensitivity label setting to prevent connected experiences broadens on Windows and reaches macOS, iOS and Android (Preview)",
            detail: [
              "Rolling out: the sensitivity label setting preventing connected experiences that analyse content now prevents all connected experiences in Word, Excel and PowerPoint for Windows, rather than a subset.",
              "Rolling out: the same setting extends to Word, Excel and PowerPoint across macOS, iOS and Android.",
            ],
            whyItMatters: [
              "Blocking only a subset of connected experiences left content-analysing features reachable on labelled documents, so the control did not deliver what its name implied. Note this is a broadening of enforcement — features that previously worked on labelled files will stop.",
              "Platform parity matters because a control that applies only on Windows is trivially bypassed by opening the file on a tablet, and that gap is more likely to be found by ordinary users than by attackers.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Information Protection client can view and label files on macOS (Preview)",
            detail: "The Information Protection client supports viewing and labelling files on macOS.",
            whyItMatters: "macOS users have had to rely on web or Office integrations for labelling, leaving protected files outside Office formats effectively unreadable on the platform. Closing this removes a standing exception in labelling policy for mixed estates.",
          },
          {
            severity: "important", status: "preview",
            summary: "Exchange DLP events surface detailed non-SIT condition matches (Preview)",
            detail: "Enhanced matched conditions for Exchange DLP events surface detailed non-sensitive information type condition matches in DLP alerts and Activity Explorer for Exchange Online. Each matched condition includes the condition name, matched value and source.",
            whyItMatters: "Where a policy triggered on something other than a sensitive information type — a recipient, an attachment property, a header — the alert previously said only that the policy matched. Showing the condition and value makes false positives diagnosable instead of requiring the policy to be re-read and inferred.",
          },
          {
            severity: "important", status: "ga",
            summary: "Data Security Investigations adds notifications and automatic background data preparation",
            detail: [
              "Email and portal notifications: investigators are notified through the Microsoft Purview Notification Center and by email when setup completes and investigations are ready to use.",
              "Data preparation now runs automatically in the background as items are added to scope, so vectorization no longer needs to be initiated manually.",
            ],
            whyItMatters: [
              "Investigation setup is slow enough that investigators leave and return, and without notification the delay became dead time.",
              "Manual vectorization was an easily forgotten step that left AI features silently unavailable, making the investigation appear to have no findings rather than being unprepared.",
            ],
          },
          {
            severity: "minor", status: "ga",
            summary: "eDiscovery can convert cloud-native file formats to HTML for review and export",
            detail: "A 'Convert supported file formats to HTML' option is available when adding search results to a review set and when exporting items from a review set. Cloud-native formats such as .loop and .page files are converted to HTML, making content indexed and keyword searchable in the review set and easier to process in post-export workflows.",
            whyItMatters: "Loop and Page content was effectively invisible to eDiscovery keyword search, which is a genuine legal exposure when that content is responsive to a hold. Conversion brings collaborative content into the same review workflow as documents and mail.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Device health reports dashboard for Endpoint DLP",
            detail: "The device health reports dashboard monitors device onboarding status, policy update readiness and feature readiness for Endpoint DLP.",
            whyItMatters: "Endpoint DLP is only as good as its device coverage, and a device that failed to onboard produces no alerts — indistinguishable from a device where nothing risky happened. A readiness dashboard makes that distinction visible.",
          },
          {
            severity: "minor", status: "ga",
            summary: "New sensitive information type definitions across eight regions",
            detail: "Added definitions for: China physical addresses; Colombia national ID; Colombia tax identification number; Greenland physical addresses; Russia physical addresses; Russia taxpayer identification number; Singapore physical addresses; South Africa physical addresses.",
            whyItMatters: "Regional identifier and address coverage determines whether DLP and labelling work at all for data about people in those jurisdictions. Organisations operating in these regions can retire custom sensitive information types built to fill the gap, though existing custom types should be checked for overlap before removal.",
          },
        ],
      },
    ],
  },
  {
    month: "May 2026",
    products: [
      {
        product: "Microsoft Purview",
        icon: "📋",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "New version of Data Security Posture Management is now generally available",
            detail: "The new version of Data Security Posture Management is generally available, providing guided workflows for proactive risk management and streamlining data security operations for AI adoption across the digital estate. Partner solutions for non-Microsoft data sources remain in preview, as does the Data Security Posture Agent.",
            whyItMatters: "DSPM is the surface most organisations use to judge whether AI adoption is safe, so GA status is what allows it to be relied on in that decision. The parts still in preview — partner data sources and the posture agent — are exactly the ones covering non-Microsoft data, so coverage outside Microsoft 365 remains provisional.",
          },
          {
            severity: "important", status: "preview",
            summary: "DSPM adds an Anthropic Claude (Enterprise) data connector (Preview)",
            detail: "Configuring the Anthropic Claude data connector makes Claude appear as an AI application alongside Copilot, Copilot Studio, ChatGPT Enterprise and other AI apps. Activity explorer shows individual Claude interactions — who used Claude, when, and what kinds of content were involved — as for other AI apps.",
            whyItMatters: "Enterprise AI assistants outside Microsoft's own stack have been a visibility gap, monitored by proxy logs at best. Interaction-level visibility is what makes an evidenced statement about what corporate data reached the tool possible, rather than an assumption.",
          },
          {
            severity: "important", status: "preview",
            summary: "DLP can block access to sensitive files for specific external domains or users (Preview)",
            detail: "A new 'Block access for specific external domains or users' sub-option for the 'Restrict access or encrypt the content in Microsoft 365 locations' action lets DLP policies for SharePoint and OneDrive block access to sensitive files for named external domains or user SMTP addresses.",
            whyItMatters: "External sharing controls have generally been all-or-nothing, which is why exceptions get made and then never withdrawn. Blocking specific domains supports the realistic case — a former partner or a competitor — without disabling external collaboration wholesale.",
          },
          {
            severity: "important", status: "change",
            summary: "DeepL and Zapier removed from unmanaged AI apps supported by Edge for Business browser policies",
            detail: "DeepL and Zapier have been removed from the list of unmanaged AI apps supported by browser policies in Microsoft Edge for Business.",
            whyItMatters: "Any DLP policy relying on these two for coverage no longer restricts them, and the policy continues to report as healthy — so protection lapses without a signal. Both are common shadow-IT destinations for pasted text, which is exactly the content these policies exist to control.",
            actionNote: "Review Edge for Business DLP policies that depended on DeepL or Zapier coverage and arrange alternative controls.",
          },
          {
            severity: "important", status: "ga",
            summary: "Data Security Investigations adds OCR processing and custom examinations",
            detail: [
              "Image files are automatically processed with optical character recognition, and the extracted text is merged and vectorized for AI analysis.",
              "Custom examinations let investigators define their own examination focus with custom prompts, analysing investigation content beyond the built-in examination areas.",
            ],
            whyItMatters: [
              "Screenshots are among the most common ways sensitive data leaves an organisation precisely because image content was unsearchable. OCR closes a gap that a determined insider could rely on.",
              "Built-in examination areas cover common scenarios but not the specific question an investigation is actually asking. Custom prompts make the tool usable for the case at hand rather than only for the anticipated ones.",
            ],
          },
          {
            severity: "important", status: "ga",
            summary: "Data quality scans in Data Governance are now generally available",
            detail: [
              "Standalone data asset data quality scan is generally available.",
              "Incremental data quality scan is generally available.",
              "Configurable data quality thresholds for data quality rules and data assets are generally available.",
            ],
            whyItMatters: [
              "Scanning a single asset without running a full domain scan makes it practical to validate one dataset on demand rather than waiting for a scheduled cycle.",
              "Incremental scanning is what makes data quality monitoring affordable on large estates, where full rescans are too slow and costly to run often.",
              "Fixed thresholds produce either constant failure or meaningless passes depending on the dataset. Configurable thresholds let the standard match the data's actual role.",
            ],
          },
          {
            severity: "important", status: "ga",
            summary: "Data security and compliance protections for Microsoft Agent 365 are now generally available",
            detail: "Data security and compliance protections for Microsoft Agent 365 have reached general availability.",
            whyItMatters: "Agents act on corporate data with their own identities, and until this the compliance story for Agent 365 was incomplete. GA is the point at which agent activity falls under the same retention, DLP and audit expectations as user activity.",
          },
          {
            severity: "important", status: "preview",
            summary: "Sensitivity labels: manual labelling for MP4 files and automatic labelling of meeting artifacts (Preview)",
            detail: [
              "Rolling out: manual labelling support for MP4 files in SharePoint and OneDrive.",
              "Rolling out: a new label policy setting for meetings, 'Apply meeting label to artifacts', automatically applies the meeting's sensitivity label to recordings and their transcripts (.mp4 files) and to meeting notes (.loop files).",
            ],
            whyItMatters: [
              "Video has been a persistent unlabelled category, and recordings of sensitive discussions are as disclosing as any document.",
              "Meeting recordings and transcripts inherit the sensitivity of the meeting itself, but until now that had to be applied by hand — which meant it usually was not. Automatic inheritance is what makes protection of meeting content consistent rather than dependent on the organiser.",
            ],
          },
          {
            severity: "important", status: "ga",
            summary: "Label policy sync status and per-policy labelling activity for SharePoint and OneDrive",
            detail: [
              "The sync status of sensitivity label publishing policies is visible on the Label policies page, showing when label policy updates are fully synced across Microsoft 365.",
              "For auto-labeling policies that are turned on and target SharePoint and OneDrive, per-policy review pages allow daily labelling activity to be monitored, labelled and failed files to be spot-checked, and labelling failures investigated.",
            ],
            whyItMatters: [
              "Label policy changes propagate slowly and invisibly, so administrators could not tell whether a user reporting a missing label had hit a bug or simply had not received the policy yet.",
              "Auto-labeling failures were previously aggregate numbers with no route to the underlying files. Being able to inspect the failures is what turns a stalled labelling rollout into a diagnosable problem.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Information protection scanner: PowerShell cluster configuration and custom reporting (Preview)",
            detail: [
              "Administrators can enable, disable and configure cluster-level scanner features from PowerShell.",
              "Custom Reporting populates additional columns and tables in the scanner cluster database, so administrators can build reports directly against scan results in Power BI or any SQL-based reporting tool rather than stitching together per-scan CSV reports.",
            ],
            whyItMatters: [
              "Scanner clusters are deployed at scale across file estates, and portal-only configuration made consistent settings across nodes a manual exercise.",
              "The CSV-stitching workflow is why on-premises scanner results rarely reached the same dashboards as cloud data. Querying the database directly puts file share findings on the same footing as everything else.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Custom posture reports for information protection and DLP activity (Preview)",
            detail: "Custom posture reports let administrators build tailored views of information protection and DLP activity, assembling metric and chart cards in sections to answer organisation-specific questions alongside the built-in posture reports.",
            whyItMatters: "Built-in reports answer Microsoft's questions rather than the organisation's, and the gap is usually filled by exporting to a spreadsheet that is stale the moment it is made. Custom cards keep the specific question and live data in the same place.",
          },
          {
            severity: "minor", status: "ga",
            summary: "DSPM adds administrative unit support, inactive-tenant processing pause and an Application card",
            detail: [
              "Support for administrative units, bringing parity with the classic versions of DSPM and DSPM for AI.",
              "To optimise resources, processing is paused for Microsoft 365 data when tenants are inactive for more than 60 days, resuming automatically on return to the solution.",
              "The 'Responsible AI FAQ for Data Security Posture Management' is replaced with a more detailed Application card covering the solution's AI capabilities, intended uses, limitations, evaluations, safety components and best practices.",
            ],
            whyItMatters: [
              "Administrative units are how large or federated organisations delegate administration by region or business unit. Without them, DSPM required tenant-wide access, which many organisations will not grant.",
              "The pause is worth knowing about before it is encountered — a tenant returning after 60 days will find posture data stale until processing resumes, which can be mistaken for a fault.",
              "The Application card documents evaluations and limitations, which is the material needed for an AI governance review of the tool itself.",
            ],
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Edge for Business DLP: required admin permissions and browser profile scope documented",
            detail: [
              "The admin permissions required to activate DLP policies for unmanaged cloud apps in Microsoft Edge for Business are documented: Directory Reader, Microsoft Edge administration and Microsoft Intune administration.",
              "Edge browser profile scope is clarified: policies for unmanaged cloud apps on managed devices apply across all Edge profiles (work, personal and InPrivate), while policies for managed apps apply only in the Edge work profile.",
            ],
            whyItMatters: [
              "Missing permissions cause activation to fail in ways that look like a policy problem, and three separate admin roles is not a combination anyone would guess at.",
              "The profile scope distinction determines whether a policy covers personal and InPrivate browsing — which is where users go when they intend to bypass a control. Assuming the wrong scope means believing a gap is closed when it is not.",
            ],
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Guidance for audit search results exceeding the Data Security Investigations item limit",
            detail: "New guidance covers working with large audit search results in Data Security Investigations: where audit searches exceed the approximately 3,000-item limit, use the Audit solution to analyse the full result volume, then split searches into smaller time-based slices for ingestion into an investigation.",
            whyItMatters: "The limit truncates silently, so an investigation can appear complete while resting on a partial result set — a meaningful risk when the output supports an HR or legal process. Time-slicing is a workaround rather than a fix, and investigators need to know to apply it.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Documented labelling behaviour when opting out of sensitivity labels for SharePoint and OneDrive",
            detail: "The 'How to disable sensitivity labels for SharePoint and OneDrive (opt-out)' documentation now covers labelling behaviour where sensitivity labels are disabled after having been enabled.",
            whyItMatters: "Turning the feature off does not simply return the tenant to its prior state — existing labels and their encryption persist in ways that surprise administrators. Documenting it matters most to anyone considering a rollback.",
          },
        ],
      },
    ],
  },
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
          {
            severity: "important", status: "change",
            summary: "Teams call data records move out of chat retention policies into new Teams call logs retention policies",
            detail: "Newly created Teams call data records (call detail records) are no longer included with Teams chat retention policies. They are covered instead by new Teams call logs retention policies created using PowerShell, which manage deletion of calling-related data where compliance and regulatory requirements demand it. Call data records previously included in Teams chat retention policies continue to be managed by those policies.",
            whyItMatters: "Retention coverage that was implicit becomes something an administrator has to configure deliberately, and only through PowerShell — so new call records fall outside retention until someone creates the policy. The split treatment of old and new records also means two policies govern the same data type, which complicates any retention audit.",
            actionNote: "Create Teams call logs retention policies via PowerShell to retain newly created call data records.",
          },
          {
            severity: "important", status: "preview",
            summary: "Data Security Investigations: proactive AI insights from DSPM and a new Contributor role (Preview)",
            detail: [
              "Proactive AI insights from Data Security Posture Management automatically create and refresh a single investigation for the tenant every 24 hours. The DSPM exfiltration objective card displays risk counts across five fixed categories, giving continuous visibility into recently exfiltrated sensitive data without manual investigation creation.",
              "A new Data Security Investigation Contributor role automatically grants Data Security Investigations access to members of several Purview role groups. Compliance Administrator and Organization Management members get administrative and contributor access; Data Security Management and Insider Risk Management members get contributor access without explicit role assignment.",
            ],
            whyItMatters: [
              "Investigations previously started only when someone suspected something, which meant exfiltration nobody noticed was never investigated. A standing, self-refreshing investigation inverts that.",
              "Automatic access grants are convenient but widen who can read investigation content — which includes the organisation's most sensitive material. Worth confirming the membership of those four role groups is still appropriate.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "eDiscovery adds customer-managed key encryption for direct exports and raises the review set limit to 100",
            detail: [
              "Organisations using Customer Key can enable customer-managed key encryption for direct export packages in eDiscovery. Exported investigation data is then encrypted at rest using tenant-specific encryption scopes backed by customer-managed keys.",
              "The maximum number of review sets per case has increased from 20 to 100 for eDiscovery with premium feature support.",
              "The Advanced review set explorer (preview) adds a left navigation pane to browse the review set schema, insert KQL operators and run sample queries, plus a Getting started tab with basic and advanced query templates.",
            ],
            whyItMatters: [
              "Export packages are the point at which case data leaves the compliance boundary, and they routinely contain the most sensitive material in the tenant. Customer-managed keys let organisations retain cryptographic control over that data at rest.",
              "The 20-review-set ceiling forced large matters to be split across cases, fragmenting the record. Raising it to 100 keeps complex litigation in a single case.",
              "Review set querying requires KQL, which most legal reviewers do not write. Schema browsing and templates lower that barrier without needing an analyst.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Data Governance: glossary migration to Unified Catalog, on-premises data quality, and quality thresholds (Preview)",
            detail: [
              "A one-time glossary migration and asset enablement process migrates glossary terms created in the classic governance experience into Unified Catalog, centralising term management and enabling curation of data assets and columns.",
              "Data quality gains on-premises support for Oracle and SQL Server. On-premises databases are scanned within on-premises infrastructure so data does not leave the organisation's premises; a Kubernetes cluster is required to host the scanning runtime.",
              "Data quality thresholds let stakeholders and data consumers know when quality scores fall below standards, with configurable alerts at rule level and data asset level.",
            ],
            whyItMatters: [
              "Glossary terms split between classic and Unified Catalog meant two sources of truth for what a business term means — the problem a glossary exists to solve.",
              "Keeping the scan on-premises is what makes data quality assessment permissible for data that cannot leave the estate for regulatory reasons. The Kubernetes runtime is a real prerequisite, not a detail.",
              "Quality scores nobody watches change nothing. Threshold alerts convert them into a signal that reaches the people who depend on the data.",
            ],
          },
          {
            severity: "important", status: "ga",
            summary: "Policy configuration can be exported as a ZIP snapshot, and label policies gain an Export option",
            detail: [
              "Shared capabilities: policy configuration can be exported as a ZIP file containing a point-in-time snapshot of all policy configurations in XML for DLP and sensitivity label publishing policies, for use in support requests, configuration reference and local analysis with PowerShell or Microsoft 365 Copilot.",
              "Sensitivity labels: the Label policies page for label publishing policies has a new Export policies option. Export to CSV behaves similarly to Export on the Sensitivity labels page, while Export to Zip includes more detailed information about the policies and all sensitivity labels in the tenant.",
            ],
            whyItMatters: [
              "Purview policy configuration has been difficult to back up or diff, so unintended changes were found by their effects rather than by comparison. A point-in-time XML snapshot makes configuration drift reviewable and gives change control something to attach to.",
              "Exporting the full label and policy set is what makes an offline review or an audit response practical without screenshotting the portal.",
            ],
          },
          {
            severity: "minor", status: "ga",
            summary: "Sensitivity labels with user-defined permissions can be applied in Office for the web",
            detail: "Rolling out: users can apply sensitivity labels configured for user-defined permissions while using Office for the web. Co-authoring must be enabled for the tenant; without it, users continue to see the message that a desktop app is required.",
            whyItMatters: "User-defined permission labels are how ad hoc restricted sharing is done, and requiring a desktop app to apply them pushed web-first users towards leaving content unlabelled. The co-authoring prerequisite is the catch — tenants that have not enabled it see no change.",
          },
          {
            severity: "minor", status: "preview",
            summary: "DLP policy tip reference for Outlook on Android, iOS and macOS (Preview)",
            detail: "A new reference article covers DLP policy tips, supported conditions, oversharing dialogs and override capabilities for Outlook on Android, iOS and macOS.",
            whyItMatters: "Policy tip behaviour differs by platform, and assuming parity with Outlook on Windows leads to policies whose user-facing warnings never appear on mobile — where oversharing is most likely.",
          },
          {
            severity: "minor", status: "preview",
            summary: "DSPM partner solutions add Varonis support for Salesforce",
            detail: "Microsoft Sentinel with partner solutions now also supports Varonis, providing data insights for Salesforce.",
            whyItMatters: "Extends DSPM visibility into Salesforce through an existing partner deployment, relevant to organisations already running Varonis that would otherwise have no Purview-native view of Salesforce data.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Developer documentation adds a Scenarios and API overview section",
            detail: "A new Scenarios and API overview section helps developers identify which APIs to use for specific scenarios.",
            whyItMatters: "Purview's API surface spans several separately documented services, and picking the wrong one is a common cause of abandoned integrations. Scenario-based navigation is a documentation improvement rather than a capability change.",
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
          {
            severity: "important", status: "ga",
            summary: "Data Security Investigations adds personal data examinations and respects compliance boundaries",
            detail: [
              "Personal data examinations identify and extract personally identifiable information from selected data items in an investigation scope — names, email addresses, financial account numbers and Social Security numbers — with severity classification and AI-generated reasoning to support regulatory compliance reporting.",
              "Data Security Investigations searches now respect compliance boundaries configured with search permissions filters. Investigators whose accounts are scoped by a compliance boundary see search results only for content locations within that boundary.",
              "Updated guidance explains how categorization processes data: relevance scoring prioritises the most relevant content for each selected category, with considerations for results, content volume effects, and recommendations for using examination tools for comprehensive analysis.",
            ],
            whyItMatters: [
              "Breach notification deadlines are measured in days and turn on which personal data types were exposed. Identifying them directly from the investigation scope is what makes a regulatory assessment achievable in that window.",
              "Without boundary enforcement, an investigation tool is a route around the compliance boundaries the organisation configured elsewhere — a particular concern for multinationals with data residency separation. This closes that gap.",
              "Relevance scoring means results are prioritised rather than exhaustive, which matters when an investigator treats the output as a complete set. The guidance is explicit that examination tools are needed for comprehensive analysis.",
            ],
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Purview deployment models expanded with step-by-step inline guides for five scenarios",
            detail: "Microsoft Purview deployment models now include comprehensive step-by-step inline guides for five deployment scenarios: prevent data leak to shadow AI; secure and govern Microsoft 365 Copilot agents; deploy and use Data Security Posture Management; a lightweight guide to mitigate data leakage; and reduce false positives with sensitive information types and advanced classifiers. Previously available only as downloadable PPTX and PDF files, each model now includes detailed articles following a step-based workflow.",
            whyItMatters: "Deployment guidance trapped in slide decks is hard to follow during an actual rollout and impossible to link to from a runbook. The shadow AI and Copilot agent scenarios in particular address the deployments most teams are attempting now with the least established practice.",
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
          {
            severity: "minor", status: "ga",
            summary: "SharePoint permissions on downloaded documents complete rollout, now on Monthly Enterprise Channel",
            detail: "The client-side improvements for sensitivity labels that extend SharePoint permissions to downloaded documents, which began rolling out to Windows version 2601+ in January on the Current Channel, are complete and now also available on the Monthly Enterprise Channel.",
            whyItMatters: "A downloaded copy that loses its SharePoint permissions is the ordinary way controlled documents escape control. Monthly Enterprise Channel availability is what brings this to most managed enterprise fleets, which do not run Current Channel.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Software Developer Partner Integrations list published",
            detail: "Microsoft Purview enables software development companies to integrate governance, protection and compliance capabilities into their applications using SDKs and APIs. A new list of partner integrations is available, with links to partner documentation.",
            whyItMatters: "Useful when evaluating whether a third-party application can honour Purview labels and policies natively rather than needing a bespoke integration — a question that usually arises during procurement.",
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
