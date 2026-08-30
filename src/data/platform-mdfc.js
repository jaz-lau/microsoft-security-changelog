export const PLATFORM_UPDATES = [
  {
    month: "Aug 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "critical", status: "change",
            summary: "Breaking change: unused actions removed from AWS and GCP overprovisioned identity assessments",
            detail: [
              "To improve performance and scalability of overprovisioned identity recommendation generation, Defender for Cloud no longer uses unused actions when computing overprovisioned identity assessments for AWS and GCP environments.",
              "The Unused actions list is no longer displayed as part of overprovisioned identity recommendations for AWS and GCP identities, and any workflow relying on that list within Defender for Cloud CIEM is no longer available for AWS and GCP recommendations.",
              "To validate whether permissions have been used, use the cloud provider's own tooling: AWS IAM access activity and last-accessed information, or Google Cloud IAM usage and access insights via Cloud Asset Inventory.",
            ],
            whyItMatters: [
              "Unused-permission data was the evidence that made right-sizing an over-permissioned role defensible. Without it, CIEM recommendations for AWS and GCP identify that an identity is overprovisioned but not which permissions are safe to remove.",
              "Least-privilege programmes built on exporting this list — access reviews, ticket automation, permission-trimming reports — break outright rather than degrade, and the failure is quiet because the recommendation still appears.",
              "Recovering the capability means adding per-provider tooling and reconciling two different data models, which is materially more work than the single Defender for Cloud view it replaces.",
            ],
            actionNote: "Migrate any process depending on the CIEM Unused actions list for AWS or GCP to AWS IAM last-accessed data or Google Cloud IAM access insights.",
          },
          {
            severity: "critical", status: "change",
            summary: "Classic Defender for SQL APIs retire on 16 August 2027",
            detail: "The classic Defender for SQL APIs for Vulnerability Assessment and Advanced Threat Protection will be retired on 16 August 2027. Users of these APIs should migrate to the supported configuration model and update dependent scripts and automation before the retirement date.",
            whyItMatters: "A year's notice is generous, but SQL vulnerability assessment automation tends to be embedded in compliance reporting pipelines that nobody owns day to day — the kind of dependency discovered when an audit report comes back empty. Worth inventorying callers now rather than close to the date.",
            actionNote: "Migrate from the classic Defender for SQL Vulnerability Assessment and Advanced Threat Protection APIs before 16 August 2027.",
          },
          {
            severity: "important", status: "change",
            summary: "CVE details in Azure Resource Graph move to the microsoft.security/cvedetails resource type",
            detail: "Defender for Cloud has changed how vulnerability assessment CVE details are consumed in Azure Resource Graph. CVE information remains available, but detailed CVE properties are now consumed through the microsoft.security/cvedetails resource type, to improve query performance, scalability and support for larger data sets. Existing API or Resource Graph queries that read CVE details from vulnerability assessment records must be updated.",
            whyItMatters: "Queries that are not updated might not return the expected detailed CVE properties — they still succeed, just with less data. A vulnerability report that quietly loses its CVE detail looks like an improvement in posture rather than a broken query, so this is worth verifying rather than assuming.",
            actionNote: "Update Azure Resource Graph and API queries to read CVE details from the microsoft.security/cvedetails resource type.",
          },
          {
            severity: "important", status: "preview",
            summary: "On-demand malware scanning supports targeted scans of specific blobs, files, containers and file shares (Preview)",
            detail: "On-demand malware scanning in Microsoft Defender for Storage supports targeted scanning of specific items. Rather than scanning an entire storage account, scans can be scoped to a single blob or file, a specific container or file share, or all objects matching a path prefix, using filters in the REST API request body. With no filters supplied, the scan covers the entire storage account.",
            whyItMatters: "Full-account scans are slow and costly on large data lakes, which in practice meant on-demand scanning went unused during incidents. Scoping to a path prefix makes it viable to scan just the container an alert points at, turning it into a triage tool rather than a scheduled exercise.",
          },
        ],
      },
    ],
  },
  {
    month: "Jul 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "critical", status: "change",
            summary: "Deprecation completed: legacy grouped recommendations removed from the Azure portal",
            detail: "Retirement of legacy grouped recommendations (sub-assessments) has started and the deprecated data is no longer accessible through the API; the Azure portal and Azure Resource Graph may take a few days to reflect the change. Individual recommendations replace them, as announced in May 2026. Customers who relied on grouped recommendations should validate existing automation, reporting, governance workflows and queries, and migrate any remaining disable rules to exemptions.",
            whyItMatters: "Sub-assessment queries are woven through compliance reporting and governance automation, and they now return nothing rather than failing loudly. The disable-rule to exemption migration is the part most likely to be missed — an unmigrated disable rule means suppressed findings quietly reappear in scoring.",
            actionNote: "Validate automation, reporting and Resource Graph queries against individual recommendations, and migrate remaining disable rules to exemptions.",
          },
          {
            severity: "important", status: "change",
            summary: "Foundational CSPM moves to an opt-in model for new Azure subscriptions from 27 October 2026",
            detail: "From 27 October 2026, Foundational CSPM moves to an opt-in model and is no longer enabled by default for new Azure subscriptions. It remains available at no cost and can be enabled at any time. The change applies only to new Azure subscriptions — existing subscriptions keep their current configuration, and AWS and GCP environments are unaffected.",
            whyItMatters: "Security posture coverage that was automatic becomes a step someone has to remember, and new subscriptions are created by teams outside security far more often than not. Organisations should add Foundational CSPM enablement to subscription provisioning — via Azure Policy or landing zone templates — before the date, or coverage will erode one subscription at a time without any alert to say so.",
            actionNote: "Add Foundational CSPM enablement to subscription provisioning automation before 27 October 2026.",
          },
          {
            severity: "important", status: "ga",
            summary: "Database-level recommendations for SQL Vulnerability Assessment are now generally available",
            detail: "The SQL vulnerability assessment recommendations created as part of the transition from grouped to individual recommendations are generally available. Each SQL vulnerability assessment rule is surfaced as its own recommendation, reported directly on the affected SQL database resource. These recommendations affect the risk-based Cloud Score; they do not affect the classic Secure Score.",
            whyItMatters: "Per-rule recommendations on the database resource make ownership assignable — a grouped finding across an estate of databases had no single owner and so tended to be assigned to nobody. Expect the risk-based Cloud Score to move as these land, while the classic Secure Score stays flat, which will look like a discrepancy if only one score is tracked.",
          },
          {
            severity: "important", status: "ga",
            summary: "New container security capabilities are now generally available",
            detail: [
              "Container-level misconfiguration recommendations for Kubernetes: agentless, container-level KSPM recommendations in Defender CSPM that assess individual containers rather than entire clusters. The following cluster-level recommendations are now deprecated: HostPath volume mount restrictions, allowed ports enforcement, host networking/ports restrictions, CAP_SYS_ADMIN capability restrictions, and AppArmor profile restrictions.",
              "Upgrade Azure Kubernetes Service Version recommendation: identifies the minimum AKS version upgrade required to remediate vulnerabilities in AKS-managed system pods.",
              "Vulnerability assessment for runtime-discovered container images on EKS and GKE, giving unified coverage across Azure, AWS and GCP.",
              "Kubernetes node vulnerability assessment for EKS and GKE, bringing parity with the existing AKS capability.",
              "Scanning support for Docker Hardened container images.",
            ],
            whyItMatters: [
              "Cluster-level findings were unactionable in multi-tenant clusters — the recommendation named the cluster while the offending container belonged to one team. Container-level assessment makes the finding routable to whoever owns the workload, but the five deprecated cluster recommendations will disappear from existing reports.",
              "AKS system pod vulnerabilities were previously reported with no remediation path, since the components are managed by the platform. Naming the minimum version upgrade converts an unfixable finding into a scheduled maintenance task.",
              "Runtime-discovered images are the ones actually running, as opposed to what the registry holds. Extending this to EKS and GKE closes the gap for organisations whose Kubernetes estate is not primarily Azure.",
              "Node-level vulnerabilities sit in the host OS layer beneath the workload, and were visible only on AKS. Parity removes the need for separate tooling on AWS and GCP nodes.",
              "Hardened base images are adopted specifically to reduce vulnerability surface, and being unable to scan them left teams unable to evidence that benefit.",
            ],
          },
          {
            severity: "important", status: "ga",
            summary: "Kubernetes misconfiguration enforcement in Defender for Containers is now generally available",
            detail: "Kubernetes misconfiguration enforcement evaluates Kubernetes resource configurations at admission time and can audit or block deployments that do not meet Microsoft security best-practice rules. It is now available through automatic provisioning — for AKS and Azure Arc-enabled Kubernetes by enabling Defender for Containers with Kubernetes API access, and for AWS and GCP by enabling Defender for Containers with agentless threat protection. Manual deployment with Helm remains supported.",
            whyItMatters: "Moves container posture from reporting misconfigurations after deployment to preventing them at admission, which is the only point where the fix costs nothing. Start in audit mode — an admission controller in blocking mode will reject legitimate workloads that predate the rules, and in a CI/CD pipeline that surfaces as a failed deployment rather than a security finding.",
          },
          {
            severity: "important", status: "change",
            summary: "Plan enablement API now blocks onboarding to five deprecated Defender plans",
            detail: [
              "Onboarding through the plan-enablement API is blocked for five deprecated pricing plans, matching existing portal behaviour. Microsoft Defender for Azure Kubernetes Service and Microsoft Defender for Azure Container Registry migrate to Defender for Containers; Microsoft Defender for Key Vault and Microsoft Defender for Azure Resource Manager migrate to the fixed pricing model; Microsoft Defender for DNS migrates to Defender for Servers.",
              "The change applies to new enablement only. Existing subscriptions on these plans continue to receive product access and billing with no immediate change. No official retirement date has been announced for these plans.",
            ],
            whyItMatters: [
              "Subscription provisioning automation that enables plans by name will start failing for these five, and because plan enablement usually runs at the end of a landing zone deployment, the failure surfaces as a subscription that looks onboarded but has no protection.",
              "Existing subscriptions are unaffected for now, so there is no urgency beyond fixing automation — but the absence of a retirement date is not a reason to defer migration, since the plans are already closed to new enablement.",
            ],
            actionNote: "Update scripts and automation calling the plan-enablement API for these five plans to use the supported replacements.",
          },
          {
            severity: "important", status: "ga",
            summary: "Discovery and posture for serverless container workloads is now generally available",
            detail: "Discovery and posture management for serverless container workloads is generally available in Microsoft Defender for Cloud.",
            whyItMatters: "Serverless containers have been a coverage gap precisely because there is no host to install an agent on, so they were absent from the inventory that posture management depends on. Teams that adopted serverless containers to reduce operational overhead can now account for them in the same posture view as the rest of the estate.",
          },
        ],
      },
    ],
  },
  {
    month: "Jun 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Expanded multicloud security coverage is now generally available — 200+ new AWS and GCP recommendations",
            detail: [
              "Over 200 new security recommendations for AWS and GCP resources are generally available and contribute to the Cloud secure score, spanning data, identity and access, networking, compute and container categories.",
              "Support for around 90 additional AWS and GCP resource types, including Amazon EMR, Amazon Neptune, AWS DMS, AWS DataSync, Amazon FSx, Amazon Kendra, Amazon Keyspaces, Amazon Kinesis, Amazon MQ, Amazon QuickSight, AWS AppFlow, AWS AppSync, AWS CodeBuild, AWS Cognito and AWS Comprehend.",
              "To explain score movement, recommendations introduced in the last 30 days carry a New tag, a change log is reachable from View updates on the Cloud secure score card, and a banner on the Cloud secure score page links to it.",
            ],
            whyItMatters: [
              "Secure scores will drop in most multicloud tenants, and the drop reflects a broader assessed estate rather than any degradation. Teams reporting score to management should get ahead of that conversation before the next reporting cycle.",
              "The added resource types are the analytics, integration and machine learning services that accumulate outside the core compute and storage footprint most posture programmes focus on — often provisioned by data teams rather than platform teams.",
              "The change log and New tag exist precisely because an unexplained score drop erodes trust in the metric. Use them as the evidence when explaining the movement.",
            ],
          },
          {
            severity: "important", status: "ga",
            summary: "SQL Vulnerability Assessment Express Configuration generally available for SQL Managed Instance and Synapse, with automatic enablement rolling out",
            detail: [
              "Express Configuration is generally available for Azure SQL Managed Instance and Azure Synapse Analytics workspaces, joining Azure SQL Database, at no extra cost. It enables SQL VA without provisioning or managing a customer-managed storage account, and provides the same security value as Classic Configuration — the full rule set, weekly automatic scans, on-demand scans and baseline management.",
              "A new unified SQL VA REST API provides a consistent management surface across Azure SQL Database, SQL Managed Instance, Synapse Analytics workspaces and SQL Server on machines, including SQL Server on Azure VMs and Azure Arc-enabled SQL Server.",
              "Over the following month, automatic enablement of Express Configuration rolls out at subscription level where Defender for Azure SQL Databases is enabled, turning it on for SQL Managed Instances and Synapse workspaces with no existing SQL VA configuration. Resources already using Classic or Express Configuration are unaffected, and existing baselines and scan results are preserved.",
            ],
            whyItMatters: [
              "The customer-managed storage account requirement was the main reason SQL VA went unconfigured — it needed a storage decision and permissions before any security value appeared. Removing it takes the enablement barrier away entirely.",
              "A single API across every SQL hosting model removes the per-resource-type branching that made SQL VA automation disproportionately fiddly to maintain.",
              "Automatic enablement means new scan results appear on previously unassessed databases without anyone requesting them. That is a coverage win, but it will look like a sudden influx of findings — worth telling database owners in advance.",
            ],
            actionNote: "Expect new SQL VA findings on Managed Instances and Synapse workspaces that had no prior configuration, as automatic enablement rolls out.",
          },
          {
            severity: "important", status: "ga",
            summary: "API security posture management for Function Apps and Logic Apps is now generally available",
            detail: [
              "Discover APIs hosted in Function Apps and Logic Apps alongside APIs managed in Azure API Management, with automated onboarding into Defender for Cloud.",
              "Assess API security recommendations with risk factors including unauthenticated APIs, APIs exposed to the internet, inactive or dormant APIs, and APIs permitting unencrypted traffic.",
              "Investigate API risks and attack paths using Cloud Security Explorer and attack path analysis.",
            ],
            whyItMatters: [
              "APIs built on Functions and Logic Apps bypass API Management entirely, so they sat outside API security posture despite often being the least reviewed endpoints in the estate.",
              "Dormant and unauthenticated APIs are the highest-value findings here — a forgotten HTTP-triggered function with anonymous access is a common initial access path that no one is monitoring.",
              "Attack path analysis is what turns an exposed API from an isolated finding into a demonstrated route to data, which is usually what it takes to get remediation prioritised.",
            ],
          },
          {
            severity: "important", status: "ga",
            summary: "Cloud security reporting in the Microsoft Defender portal is now generally available",
            detail: "Cloud security insights can be created, customised and shared across the organisation using built-in and custom reports. Cards can now be customised when building custom reports, tailoring the data each card displays.",
            whyItMatters: "Posture reporting has typically meant exporting to Power BI or assembling screenshots, which decays as soon as the underlying data changes. Native reports keep the numbers live and let non-analyst stakeholders self-serve rather than requesting extracts.",
          },
          {
            severity: "important", status: "ga",
            summary: "Serverless protection for Azure and AWS is now generally available",
            detail: "Serverless protection discovers serverless resources and assesses them for misconfigurations, vulnerabilities and insecure dependencies across Azure Web Apps, Azure Functions and AWS Lambda.",
            whyItMatters: "Serverless functions carry the same dependency risk as any other code but have no host to scan, so they were routinely absent from vulnerability management. Insecure dependency detection is the substantive part — an outdated package in a Lambda is exploitable in exactly the way it would be on a VM.",
          },
          {
            severity: "important", status: "ga",
            summary: "Defender for Open-Source Relational Databases on AWS RDS is now generally available",
            detail: "Microsoft Defender for Open-Source Relational Databases is generally available for AWS RDS instances, covering Aurora PostgreSQL, Aurora MySQL, PostgreSQL, MySQL and MariaDB with database threat protection and sensitive data discovery. From 1 June 2026 the plan bills for AWS RDS instances previously onboarded to the preview, with usage appearing on the July 2026 bill. No action is required to maintain protection for preview participants — the feature transitioned automatically.",
            whyItMatters: "Preview participants move from free to billed without any action on their part, so the first indication for many teams will be the July invoice. Worth confirming which RDS instances are onboarded before that lands, since preview enrolment was often broader than anyone would choose to pay for.",
            actionNote: "Review onboarded AWS RDS instances — preview usage began billing on 1 June 2026 and appears on the July 2026 bill.",
          },
          {
            severity: "important", status: "preview",
            summary: "Container-level misconfiguration recommendations for Kubernetes (Preview)",
            detail: [
              "Agentless, container-level KSPM misconfiguration recommendations in Defender CSPM assess individual containers rather than entire clusters, covering CPU and memory limits, trusted registries, privilege escalation, sensitive host namespaces, read-only root filesystem, HTTPS-only access, automounting API credentials, Linux capabilities, privileged containers and running as root.",
              "Container-level and cluster-level recommendations may coexist temporarily during the transition; cluster-level recommendations are deprecated at GA. Those set for deprecation are HostPath volume mount restrictions, allowed ports enforcement, host networking/ports restrictions, CAP_SYS_ADMIN capability restrictions and AppArmor profile restrictions.",
              "No runtime agent is required, and scale controls are included for high-volume environments.",
            ],
            whyItMatters: [
              "These are the workload-hardening controls that actually determine whether a container escape succeeds, and assessing them per container makes each finding attributable to the team that owns the deployment.",
              "The temporary coexistence means duplicate-looking findings during the transition. Teams should avoid building reporting on the cluster-level recommendations now, since they disappear at GA.",
              "Agentless assessment removes the deployment barrier that kept KSPM off clusters whose owners would not accept another DaemonSet.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Kubernetes misconfiguration enforcement in Defender for Containers (Preview)",
            detail: "Kubernetes misconfiguration enforcement extends Kubernetes security from audit to audit or block mode at deployment time, evaluating resource configurations at admission and enforcing Microsoft Defender security best practice rules. After enablement, a default security rule is created automatically in Audit mode, and rules can be configured to Block mode to prevent non-compliant deployments. Available only in commercial clouds — not in national or sovereign clouds, including US Government and China Government regions.",
            whyItMatters: "Admission-time enforcement is the only control point where a misconfiguration costs nothing to fix. Defaulting to Audit mode is the right design — switching to Block without first measuring what would have been rejected will break deployments that predate the rules. Sovereign cloud customers get no equivalent.",
          },
          {
            severity: "important", status: "preview",
            summary: "Vulnerability assessment extended to runtime-discovered container images on EKS and GKE (Preview)",
            detail: "Vulnerability assessment now covers runtime-discovered container images on Amazon EKS and Google GKE. Previously it covered registry-based images only; images discovered at runtime that were not scanned from a registry are now assessed. Requires AWS or GCP onboarded into Defender for Cloud. Scanning additional image types may increase billing.",
            whyItMatters: "Images pulled from public registries or built outside the sanctioned pipeline never appear in the registry scan, and those are disproportionately the ones carrying known vulnerabilities. Note the explicit billing warning — coverage expansion here has a cost attached.",
          },
          {
            severity: "important", status: "preview",
            summary: "Kubernetes node vulnerability assessment extended to EKS and GKE (Preview)",
            detail: [
              "Kubernetes node (host) vulnerability assessment now covers Amazon EKS and Google GKE, bringing parity with the existing AKS capability, and detects OS-level vulnerabilities in Kubernetes node VMs. Where vulnerabilities are found, an 'Upgrade Kubernetes nodes' recommendation identifies affected node pools and guides upgrade to a patched Kubernetes or node version.",
              "Covers Kubernetes host nodes at the OS and infrastructure layer, not container workloads, and provides consistent remediation guidance across Azure, AWS and GCP. Requires AWS or GCP onboarded with agentless scanning enabled. Billing may increase as additional image types are scanned.",
            ],
            whyItMatters: [
              "Node OS vulnerabilities are frequently overlooked because the nodes are treated as managed infrastructure, yet a compromised node exposes every workload scheduled on it. Naming the affected node pools makes the finding actionable rather than advisory.",
              "The distinction between host and workload layer matters when assigning ownership — node upgrades belong to the platform team, container image fixes to the application team, and conflating them is why these findings stall.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Discovery and posture for serverless container workloads (Preview)",
            detail: "Discovery and posture coverage for supported serverless container workloads adds inventory visibility, security recommendations for misconfigurations and vulnerability assessment findings, and attack path analysis for Azure Container Apps and Azure Container Instances.",
            whyItMatters: "Container Apps and Container Instances are commonly used for short-lived or bursty workloads that never enter the CMDB, so they escape both inventory and posture assessment. Attack path analysis is the part that shows whether such a workload bridges to something that matters.",
          },
          {
            severity: "important", status: "preview",
            summary: "More than 60 new multicloud security recommendations in public preview",
            detail: "Over 60 multicloud security recommendations are in public preview, covering AWS services including AppFlow, AppStream, AppSync, Athena, Auto Scaling, CodeBuild, Cognito, Comprehend, DMS, DataSync, FSx, Kendra, Keyspaces, Kinesis, MQ, Neptune and QuickSight, and spanning data security, identity and access, networking, compute and container categories — assessing encryption, access control, logging, network exposure, backup and workload hardening. Further preview recommendations cover Amazon MSK and OpenSearch Service (TLS enforcement, public access, unauthenticated access, encryption, audit logging, fine-grained access control, VPC access, customer-managed keys and service update hygiene), plus GCP networking recommendations for App Engine SSL certificate expiration and DNS authorisation on Google-managed certificates.",
            whyItMatters: "Preview recommendations do not affect the secure score, so this is the window to assess and remediate before they reach GA and the score moves. OpenSearch and MSK in particular tend to be deployed with permissive defaults and rarely revisited.",
          },
          {
            severity: "important", status: "preview",
            summary: "New actionable recommendation to upgrade AKS for system pod vulnerabilities (Preview)",
            detail: "A new 'Upgrade Azure Kubernetes Service Version' recommendation helps remediate vulnerabilities in AKS-managed system pods, replacing the previous non-actionable recommendation with a resolvable remediation path.",
            whyItMatters: "The former recommendation reported vulnerabilities in components customers cannot patch, so it accumulated as permanent noise and trained teams to ignore that category. Tying the finding to a specific version upgrade makes it closable.",
          },
          {
            severity: "important", status: "unspecified",
            summary: "Cloud scopes expanded to Kubernetes namespaces, clusters, registries and repositories",
            detail: [
              "K8s namespace: organise resources by Kubernetes namespace for granular access control.",
              "K8s cluster: group entire Kubernetes clusters for comprehensive security management.",
              "Registry (multi cloud): include container registries from multiple cloud providers.",
              "Repository (multi cloud): manage artifact repositories across cloud platforms.",
            ],
            whyItMatters: [
              "Namespace is the boundary that usually matches team ownership in a shared cluster, so scoping at that level is what makes delegated access workable without splitting clusters.",
              "Cluster-level grouping suits environments where whole clusters map to environments or business units.",
              "Multicloud registry and repository scopes let supply chain findings be routed by artifact ownership rather than by the cloud the registry happens to sit in — which is how most organisations actually structure responsibility.",
            ],
          },
          {
            severity: "minor", status: "ga",
            summary: "Defender for Key Vault is now generally available in Azure Government cloud",
            detail: "The Defender for Key Vault plan in Azure Government cloud now aligns with the commercial cloud offering in feature coverage and runtime protection capabilities.",
            whyItMatters: "Closes a parity gap for government customers, who previously had to accept reduced key vault threat protection or compensate with custom detections. Relevant only to Azure Government tenants.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Defender for APIs and API security posture management expand to UAE North and UAE Central",
            detail: "Microsoft Defender for APIs and API security posture management with Defender CSPM now cover the UAE North and UAE Central Azure regions. Customers with Azure API Management services in those regions can use these capabilities, and API discovery and security posture for Azure Function Apps and Logic Apps has also expanded there.",
            whyItMatters: "Regional availability, relevant to organisations with data residency requirements in the UAE that previously could not enable API security posture without moving the API Management instance.",
          },
        ],
      },
    ],
  },
  {
    month: "May 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Defender for Cloud integration into the Microsoft Defender portal is now generally available",
            detail: [
              "A unified cloud security dashboard with posture insights, risk-based prioritisation and progress tracking, plus a centralised cloud asset inventory with enriched risk, health and coverage data.",
              "Integrated posture management through Microsoft Security Exposure Management, including secure score, recommendations, attack paths and vulnerabilities.",
              "A risk-based Cloud secure score for more accurate assessment and prioritisation, including improved daily secure score calculations. Available only in the Defender portal.",
              "A new recommendation model with individual findings; these may affect risk-based Cloud secure score calculations, as they contribute based on granular, context-aware findings rather than as part of a grouped recommendation. Cloud scopes remains in preview.",
            ],
            whyItMatters: [
              "Cloud posture and endpoint, identity and email detection have lived in separate portals, which is why cloud findings rarely reached the analysts handling incidents. One console removes the handoff.",
              "Routing cloud posture through Exposure Management means cloud findings are scored on the same basis as the rest of the estate, so cross-domain attack paths become visible rather than stopping at the cloud boundary.",
              "The risk-based Cloud secure score exists only in the Defender portal, so teams reporting from the Azure portal are working from a different number. Worth settling which score is authoritative before the two diverge in reporting.",
              "Individual recommendations change how the score is composed. Expect movement in the risk-based score even where nothing about the environment has changed.",
            ],
          },
          {
            severity: "critical", status: "change",
            summary: "Individual recommendations generally available in the Azure portal; legacy grouped recommendations deprecated",
            detail: "Individual recommendations previously represented as grouped recommendations are generally available in the Azure portal. The classic secure score is affected, but no material change in the overall score is expected, as individual recommendations replace their grouped equivalents and are designed to keep the score functionally stable. Grouped recommendation types are deprecated and were removed on 31 July 2026; they are currently tagged 'Set for deprecation'.",
            whyItMatters: "The removal date has now passed, so any automation, report or Resource Graph query still built on grouped recommendations returns nothing. Disable rules attached to grouped recommendations also needed migrating to exemptions — if that was missed, previously suppressed findings are now counting against the score.",
            actionNote: "Grouped recommendations were removed on 31 July 2026 — verify automation, reporting and disable-rule migration completed.",
          },
          {
            severity: "important", status: "ga",
            summary: "Defender for Cloud and GitHub Advanced Security integration is now generally available",
            detail: [
              "Runtime context in GitHub: GHAS alerts are enriched with runtime risk factors from Defender for Cloud, including internet exposure, sensitive data access and lateral movement potential.",
              "AI-powered remediation: GitHub Copilot Autofix provides validated, ready-to-merge security fixes with multi-fix bundling.",
              "Security campaigns: security teams can trigger targeted GitHub Security Campaigns from Defender for Cloud to mobilise developer teams on prioritised vulnerabilities.",
              "Bidirectional sync: GitHub issue status and ownership changes sync to Defender for Cloud within minutes. Requires the Defender CSPM plan.",
            ],
            whyItMatters: [
              "Code scanning backlogs are unmanageable because every finding looks equally urgent. Knowing which vulnerable code is actually running on an internet-facing service with access to sensitive data is the context that makes triage possible.",
              "Ready-to-merge fixes shift remediation effort from the security team writing tickets to the developer accepting a pull request, which is where the work is cheapest.",
              "Campaigns give security teams a way to drive a specific remediation push through the developers' own tooling rather than through a spreadsheet.",
              "Bidirectional sync keeps Defender for Cloud from reporting as open what a developer already fixed — the stale-data problem that erodes trust in security dashboards.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Cloud security reporting in the Microsoft Defender portal (Preview)",
            detail: [
              "Built-in reports include the CNAPP Executive Summary — a consolidated view of threat detection, secure score trends, vulnerability management, security recommendations, investigation and response activity, and regulatory compliance status — and Cloud Posture, a centralised view of overall cloud security posture for assessing risk and tracking progress.",
              "Reports can be customised by duplicating and modifying sections, cards and layout, or created from scratch; exported to PDF; access-controlled with Private, Tenant-level or Public visibility; and filtered by type and visibility. Reports are found on the Reporting page under the Cloud tab.",
            ],
            whyItMatters: [
              "The CNAPP Executive Summary is aimed squarely at the board-level reporting most teams currently assemble by hand each quarter, and it stays current between readings.",
              "Visibility controls matter more than they appear — a posture report names weaknesses and their locations, so Public visibility should be a deliberate decision rather than a default.",
            ],
          },
          {
            severity: "important", status: "ga",
            summary: "On-demand malware scanning of Azure Files is now generally available",
            detail: "On-demand malware scanning in Microsoft Defender for Storage now covers Azure Files, extending it to storage accounts containing both blobs and files. Scans can be started in the Azure portal or through the REST API, and automated with Azure Logic Apps, Azure Automation runbooks and PowerShell.",
            whyItMatters: "Azure Files backs file shares that users and applications write to directly, which is exactly where malware lands and spreads laterally. Blob-only scanning left that surface uncovered, and API automation means scanning can be triggered by an alert rather than only on a schedule.",
          },
          {
            severity: "important", status: "ga",
            summary: "Microsoft Defender Experts for Servers available as a managed XDR option",
            detail: "Defender for Cloud is now partnered with Microsoft Defender Experts as a managed extended detection and response service for server workloads. Microsoft analysts and automation detect, prioritise and respond to threats on machines protected by Defender for Servers Plan 1 or Plan 2 across Azure, AWS, GCP and on-premises environments. Sold separately, and includes Defender Experts for Hunting and Ask Defender Experts.",
            whyItMatters: "Server workloads are where out-of-hours coverage gaps hurt most, since ransomware deployment is deliberately timed for them. Relevant to teams with capable endpoint operations but no 24/7 rota for the server estate.",
          },
          {
            severity: "important", status: "preview",
            summary: "Private cluster support for gated deployment, binary drift detection and malware detection (Preview)",
            detail: "Private clusters now support the Defender sensor for gated deployment, binary drift detection and malware detection in preview, extending Defender for Containers coverage to private cluster scenarios that use the sensor-based container protection features.",
            whyItMatters: "Private clusters are chosen for the most sensitive workloads and were precisely the environments the sensor could not reach, so the strongest container protections were unavailable where they mattered most. Installation follows a separate preview path rather than the standard flow.",
          },
          {
            severity: "important", status: "preview",
            summary: "Malware detection for EKS and GKE nodes (Preview)",
            detail: "Malware detection is in preview for Amazon EKS and Google GKE nodes, expanding Kubernetes node malware coverage beyond Azure Kubernetes Service.",
            whyItMatters: "Cryptomining and container-escape payloads land on the node rather than inside the workload, and coverage limited to AKS left multicloud Kubernetes estates checking only part of their footprint.",
          },
          {
            severity: "important", status: "preview",
            summary: "SQL Vulnerability Assessment Express Configuration for SQL Managed Instance and Synapse (Preview)",
            detail: "SQL VA Express Configuration entered preview for Azure SQL Managed Instance and Azure Synapse Analytics workspaces, extending the Microsoft-managed storage experience already available for Azure SQL Database at no extra cost, and removing the need for a customer-managed storage account. A new unified REST API provides consistent SQL VA management across Azure SQL Database, SQL Managed Instance, Synapse workspaces and SQL on machines.",
            whyItMatters: "Reached general availability in June 2026, followed by automatic subscription-level enablement. Teams that trialled it in preview should confirm their baselines carried across.",
          },
          {
            severity: "important", status: "change",
            summary: "Advance notice: Defender for Open-Source Relational Databases on AWS RDS moving to general availability and billing",
            detail: "Microsoft Defender for Open-Source Relational Databases became generally available for AWS RDS instances on 1 June 2026, at which point the plan began billing for instances already onboarded to the preview, with usage appearing on the July 2026 bill. Protection continues automatically for preview participants. Opting out required disabling Open-Source Relational Databases on the relevant AWS account before 1 June 2026.",
            whyItMatters: "The opt-out window has closed. Any AWS account left enabled from the preview is now billing, so the practical action is to review which accounts are onboarded and disable those that were only ever intended as a trial.",
            actionNote: "The 1 June 2026 opt-out deadline has passed — review onboarded AWS accounts and disable any unintended enrolments.",
          },
          {
            severity: "important", status: "preview",
            summary: "Vulnerability scanning extended to Docker Hardened container images (Preview)",
            detail: "The Defender for Cloud vulnerability scanner, powered by Microsoft Defender Vulnerability Management, is extending coverage to Docker Hardened container images to identify vulnerabilities and validate that the most secure builds are shipping. Billing may increase as additional image types are scanned. Rollout was gradual over several weeks and required no user action.",
            whyItMatters: "Hardened base images are adopted specifically to shrink vulnerability surface, and until now teams could not evidence that benefit because the images were unscannable. Note the billing caveat — coverage arrives automatically, and so does the cost.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Daily Cloud secure score now uses end-of-day snapshots instead of daily averages",
            detail: "Daily Cloud secure score values are now end-of-day snapshots rather than values averaged across the day, giving a more consistent view of the score at each point in time. Historical values have been recalculated to align with this definition.",
            whyItMatters: "Averaged scores smeared the effect of remediation across two days, making it hard to tie a score movement to the change that caused it. Because history was recalculated, trend comparisons spanning this change will show slight differences that are an artefact of the recalculation rather than real posture movement.",
          },
          {
            severity: "minor", status: "change",
            summary: "Defender for Containers sensor Helm installation now uses direct chart deployment",
            detail: "Defender for Containers sensor installation using Helm now uses direct Helm chart deployment instead of installation scripts, with environment-specific Helm commands for AKS, EKS and GKE clusters.",
            whyItMatters: "Direct chart deployment fits GitOps and pipeline-managed clusters, where wrapper scripts were awkward to audit and version. Existing script-based automation needs updating to the new commands.",
          },
        ],
      },
    ],
  },
  {
    month: "Apr 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "Container security capabilities now GA in Azure Government cloud",
            detail: "The Defender for Containers plan in Azure Government cloud now aligns with the commercial cloud offering, including agentless Kubernetes discovery, comprehensive inventory, attack path analysis, enhanced risk hunting, vulnerability assessment, compliance, and runtime protection capabilities.",
            whyItMatters: "U.S. federal and government agencies, including the Department of Defense (DoD) and civilian agencies, can now leverage the same container security tooling available in commercial Azure — closing a critical capability gap for regulated government workloads.",
          },
          {
            severity: "critical", status: "change",
            summary: "Updated Defender for SQL Servers on Machines plan for Fairfax customers",
            detail: "An enhanced agent solution is being released for Fairfax customers that uses existing SQL infrastructure, removing the need to deploy Azure Monitor Agent (AMA).",
            whyItMatters: "Eliminating the AMA dependency simplifies deployment and reduces agent sprawl on SQL Server machines, but existing customers must update their configuration to avoid gaps in protection.",
            actionNote: "If you are a Fairfax (US Gov) customer with Defender for SQL Server on machines enabled before April 2026, update your configuration and verify SQL Server protection status starting May 2026.",
          },
          {
            severity: "important", status: "ga",
            summary: "Container runtime anti-malware detection and blocking, and DNS Detection for Kubernetes, are now generally available",
            detail: [
              "Container runtime anti-malware detection and blocking is generally available in Defender for Containers for AKS, Amazon EKS and Google GKE.",
              "DNS Detection for Kubernetes is generally available in Defender for Containers for AKS, Amazon EKS and Google GKE.",
            ],
            whyItMatters: [
              "Reaching GA across all three managed Kubernetes services means runtime malware protection can be standardised rather than applied only where it was supported, which is what makes a consistent container security baseline possible in a multicloud estate.",
              "DNS is where container command-and-control and data exfiltration are most reliably observed, since egress from a cluster is otherwise hard to attribute to a workload.",
            ],
          },
          {
            severity: "minor", status: "ga",
            summary: "Defender for Storage integration in Azure portal Storage Center is now generally available",
            detail: "The integration brings Defender for Storage insights directly into the native storage management experience, making it easier to understand and improve storage security posture at scale.",
            whyItMatters: "Puts security posture in front of the storage administrators who can actually change it, rather than only in a security console they do not open. Placement matters more than capability here — the underlying findings are unchanged.",
          },
        ],
      },
    ],
  },
  {
    month: "Mar 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Malware automated remediation in Defender for Storage now GA",
            detail: "Defender for Cloud can now configure automatic soft deletion of detected malicious blobs during on-upload or on-demand scanning.",
            whyItMatters: "Auto-deletion quarantines harmful content while keeping it recoverable for investigation, reducing manual response effort and shrinking the window in which malicious files can be accessed. Can be enabled at subscription or storage account level.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Defender for APIs and API security posture expanded to 15 additional Azure regions",
            detail: "Support expanded to Sweden Central, Sweden South, Germany West Central, Germany North, Italy North, France Central, France South, Norway East, Norway West, Switzerland North, Switzerland West, Korea Central, Korea South, South Africa North, and South Africa West. API discovery and security posture capabilities for Azure Function Apps and Azure Logic Apps also expanded to these regions (Preview).",
            whyItMatters: "Organisations operating in European, African, and Asian regions can now assess API security posture locally, meeting data-residency requirements and reducing latency for posture evaluations.",
          },
          {
            severity: "important", status: "preview",
            summary: "AI model security for Azure Machine Learning",
            detail: "Defender for Cloud now offers AI model security for Azure Machine Learning registries and workspaces. Discover AI models, scan supported model artifacts for malware and unsafe operators, review security findings, and perform CLI-based scanning for CI/CD integrations.",
            whyItMatters: "AI models can harbour malicious payloads or unsafe operators that execute during inference. Scanning model artifacts before deployment closes a supply-chain attack vector that traditional endpoint protection does not cover.",
          },
          {
            severity: "important", status: "preview",
            summary: "Expanded multicloud coverage for AWS and GCP — ~150 new recommendations",
            detail: "Broader native coverage for AWS and GCP adds discovery and posture assessment for additional resource types across compute, databases, storage, analytics, networking, identity, secrets, DevOps, and AI/ML services.",
            whyItMatters: "Approximately 150 new recommendations help identify misconfigurations across newly supported resources, with updated regulatory compliance assessments — significantly reducing blind spots in multicloud environments.",
          },
          {
            severity: "important", status: "ga",
            summary: "Kubernetes gated deployment support for AKS Automatic now GA",
            detail: "Kubernetes gated deployment is now generally available for AKS Automatic clusters. Install the Defender for Containers sensor using Helm in the kube-system namespace. The Helm installation script handles migration from the AKS add-on automatically.",
            whyItMatters: "Gated deployment blocks vulnerable or non-compliant container images from being admitted to clusters, enforcing security policy at deploy time rather than relying on post-deployment detection.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Severity-based risk assignment for 'Not evaluated' recommendations",
            detail: "Recommendations previously appearing as Not evaluated now receive a risk level derived from recommendation severity and are included in risk calculations and Secure Score.",
            whyItMatters: "Previously invisible recommendations now contribute to Secure Score, giving security teams a more accurate picture of their overall posture. Defender CSPM customers retain full contextual, environment-aware risk evaluation.",
          },
          {
            severity: "important", status: "preview",
            summary: "Code to runtime enrichment for recommendations",
            detail: "Provides end-to-end visibility across the software development lifecycle (SDLC) — trace runtime security issues back to source code and understand the blast radius of vulnerabilities.",
            whyItMatters: "Fixing issues at the source prevents recurring regressions and reduces mean time to remediate, because developers see exactly which code introduced the vulnerability rather than chasing symptoms in production.",
          },
          {
            severity: "minor", status: "preview",
            summary: "On-demand malware scanning of Azure Files in Defender for Storage",
            detail: "On-demand malware scanning now extended to Azure Files, allowing you to scan entire Azure Storage accounts containing blobs and files via the Azure portal UI, REST API, Logic Apps, Azure Automation playbooks, or PowerShell.",
            whyItMatters: "Azure Files shares are widely used for lift-and-shift workloads and user file storage. Extending malware scanning to this surface closes a gap where infected files could persist undetected alongside blob storage.",
          },
          {
            severity: "minor", status: "preview",
            summary: "New individual recommendations format in Azure portal",
            detail: "Defender for Cloud is converting grouped recommendations into individual recommendations in the Azure portal. Grouped recommendations will continue to show alongside the new format during the transition period.",
            whyItMatters: "Individual recommendations provide smarter prioritisation, actionable context per finding, and better governance and tracking — making it easier to assign, remediate, and audit each issue independently.",
          },
          {
            severity: "critical", status: "change",
            summary: "File Integrity Monitoring requires MDE agent 10.8799+ on legacy Windows machines",
            detail: [
              "A pipeline change in Microsoft Defender for Endpoint means File Integrity Monitoring now requires the Defender for Servers Windows client (MDE agent) version 10.8799 or above to function properly on legacy Windows machines.",
              "Affected systems: Windows Server 2016, Windows Server 2012 R2 and other downlevel clients. Required version: MDE agent 10.8799 or later. Impact: FIM monitoring will not function properly on versions below the minimum.",
            ],
            whyItMatters: [
              "FIM stops working rather than reporting an error, so the monitoring appears configured while producing nothing — and FIM is frequently in place to satisfy PCI DSS or similar requirements where a silent gap is also a compliance gap.",
              "Legacy servers are the least likely to be running a current MDE agent and the most likely to be carrying FIM for compliance reasons, so the affected population is precisely the one where this matters most.",
            ],
            actionNote: "Verify MDE agent version 10.8799 or later on Windows Server 2016, 2012 R2 and other downlevel clients running File Integrity Monitoring.",
          },
        ],
      },
    ],
  },
  {
    month: "Feb 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "important", status: "change",
            summary: "CIEM recommendation logic reworked — inactivity now based on unused role assignments, Permissions Creep Index deprecated",
            detail: [
              "Cloud Infrastructure Entitlement Management recommendations are now a native capability across Azure, AWS and GCP. The change alters how inactive identities and over-permissioned roles are evaluated and may affect existing recommendation results.",
              "Inactive identity detection now evaluates unused role assignments rather than sign-in activity; the inactivity lookback window extends from 45 to 90 days; identities created within the past 90 days are not evaluated as inactive; the Permissions Creep Index metric is deprecated and no longer appears in recommendations; and CIEM onboarding no longer requires elevated high-risk permissions.",
              "Cloud-specific considerations: on Azure, inactive identity recommendations include evaluation of read-level permissions. On AWS, CIEM evaluates users and roles whose permissions can be reliably assessed — SAML and SSO identities require AWS CloudTrail Logs (Preview) enabled in the Defender CSPM plan, and serverless and compute identities are excluded from inactivity evaluation, which may affect recommendation counts. On GCP, evaluation requires Cloud Logging ingestion (Preview) enabled in the Defender CSPM plan.",
            ],
            whyItMatters: [
              "Recommendation results move without the environment changing, so a shift in CIEM findings after this date reflects new logic rather than new risk. Anything trending entitlement findings over time needs a noted baseline break.",
              "Basing inactivity on unused role assignments is the more meaningful signal — an identity can sign in regularly while never exercising the privileged role attached to it, and the old model would have called that active. The longer 90-day window reduces false positives from quarterly processes, and excluding new identities stops freshly provisioned accounts being flagged before they have had a chance to be used.",
              "The per-cloud prerequisites are easy to miss: without CloudTrail Logs on AWS or Cloud Logging on GCP, coverage is silently partial, and the excluded AWS serverless and compute identities mean the recommendation count understates the true entitlement surface.",
            ],
          },
          {
            severity: "important", status: "preview",
            summary: "Container runtime anti-malware detection and blocking (Preview)",
            detail: "Real-time detection and prevention of malware in containerised workloads across AKS, EKS and GKE. Anti-malware rules can be created to define the conditions for generating alerts and blocking malware.",
            whyItMatters: "Container workloads have largely been protected at the image scanning stage, which does nothing about malware introduced at runtime through a compromised dependency or an exploited application. Rule-based conditions matter because blanket blocking in a container runtime risks killing legitimate processes.",
          },
          {
            severity: "important", status: "preview",
            summary: "Binary drift detection now supports blocking (Preview)",
            detail: "Binary drift policies can be configured not only to detect but also to block unauthorised changes to container images at runtime, stopping execution of binaries within containers that have been tampered with or contain unexpected modifications.",
            whyItMatters: "Containers are meant to be immutable, so a binary appearing at runtime that was not in the image is a strong signal rather than an ambiguous one — which is what makes blocking viable here where it would be too risky on a general-purpose host. This closes the gap between detecting drift and preventing the payload from running.",
          },
          {
            severity: "important", status: "preview",
            summary: "Threat protection for AI agents built with Foundry (Preview)",
            detail: "Threat protection for AI agents built with Foundry is available in preview as part of the Defender for AI Services plan, providing security from development through runtime and addressing threats aligned with OWASP guidance for LLM and agentic AI systems.",
            whyItMatters: "Agents built on Foundry act with real permissions against real data, and the OWASP LLM risks — prompt injection, insecure output handling, excessive agency — have no equivalent control in conventional workload protection. Requires the Defender for AI Services plan.",
          },
          {
            severity: "important", status: "preview",
            summary: "Database-level recommendations experience for SQL Vulnerability Assessment (Preview)",
            detail: "Each SQL Vulnerability Assessment rule generates a separate assessment for each affected database, displayed and managed as recommendations on the Defender for Cloud Recommendations page. Previously findings were aggregated at server or instance level under 'SQL databases should have vulnerability findings resolved' and 'SQL servers on machines should have vulnerability findings resolved'. It applies across all supported database types, PaaS and IaaS, in both Express and Classic configurations, in both the Azure and Defender portals. Scanning logic, rules, queries, scan schedules, APIs and pricing are unchanged. During preview the database-level assessments do not affect Secure Score in the Azure portal but do contribute to Secure Score in the Defender portal; the server-level experience remains available.",
            whyItMatters: "Aggregated findings could not be assigned to a database owner or exempted individually, so they tended to sit unresolved as a single perpetually unhealthy recommendation. The asymmetry during preview is the trap — the same findings affect the Defender portal score but not the Azure portal score, so the two will disagree.",
          },
          {
            severity: "important", status: "ga",
            summary: "Simulated alerts for SQL servers on machines are now generally available",
            detail: "SQL simulated alerts let security teams validate SQL protection, detections and automated response workflows without introducing real risk. They generate realistic alerts with full SQL and machine context on Azure VMs or Arc-connected machines, enabling end-to-end testing of playbooks and SOC readiness. All alerts are produced locally using a safe script extension, with no external payloads or impact to production resources.",
            whyItMatters: "Detection and response pipelines are usually validated for the first time during a real incident, which is when a misrouted alert or broken playbook is most costly. Being able to test safely on production-representative infrastructure is the only way to confirm the chain works end to end.",
          },
          {
            severity: "minor", status: "unspecified",
            summary: "Vulnerability scanning extended to Minimus and Photon OS container images",
            detail: "The Defender for Cloud vulnerability scanner, powered by Microsoft Defender Vulnerability Management, extends scanning coverage to Minimus and Photon OS container images. Billing may increase as additional image types are scanned.",
            whyItMatters: "Photon OS underpins VMware appliance workloads and Minimus is a minimal distribution chosen for reduced attack surface — both were previously unscannable, leaving a blind spot in estates that adopted them deliberately for security reasons.",
          },
        ],
      },
    ],
  },
  {
    month: "Jan 2026",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Microsoft Security Private Link (Preview)",
            detail: "Microsoft Security Private Link enables private connectivity between Defender for Cloud and workloads. The connection is established by creating private endpoints in the virtual network, keeping Defender for Cloud traffic on the Microsoft backbone and avoiding exposure to the public internet. Private endpoints are currently supported for the Defender for Containers plan.",
            whyItMatters: "Organisations with strict egress controls have had to open outbound paths for security tooling — the awkward position of weakening network policy to enable security monitoring. Private endpoints remove that trade-off, though coverage is limited to Defender for Containers at this stage.",
          },
        ],
      },
    ],
  },
  {
    month: "Dec 2025",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "AWS CloudTrail ingestion enhances CIEM with observed activity data",
            detail: "AWS CloudTrail management event ingestion is now available in preview. When enabled, it enhances Cloud Infrastructure Entitlement Management (CIEM) by incorporating observed AWS management event activity alongside existing entitlement signals such as Access Advisor data. Supported for single AWS accounts and AWS Organizations with centralised logging.",
            whyItMatters: "Combining observed activity with entitlement data lets CIEM distinguish between permissions that are actively used and those that are merely assigned, enabling more confident right-sizing of IAM policies and reducing the blast radius of compromised credentials.",
          },
          {
            severity: "critical", status: "change",
            summary: "Updated CIEM recommendation logic — extended 90-day lookback, inactive identity detection changes",
            detail: "Inactive identity detection now uses unused role assignments rather than sign-in activity. Lookback window extended to 90 days (previously 45). Identities created within the past 90 days will not be evaluated as inactive. This change applies across Azure, AWS, and GCP as part of the Entra Permissions Management deprecation process.",
            whyItMatters: "Role-assignment-based detection is more accurate than sign-in activity alone, reducing false positives for service accounts and automation identities that authenticate infrequently. The longer lookback window prevents premature flagging of legitimately used identities.",
          },
          {
            severity: "important", status: "ga",
            summary: "Endor Labs integration now GA",
            detail: "The Endor Labs integration with Microsoft Defender for Cloud is now generally available.",
            whyItMatters: "Endor Labs provides deep software composition analysis and dependency risk scoring. The GA integration gives security teams production-ready visibility into open-source supply-chain risks directly within Defender for Cloud workflows.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Cloud posture management adds serverless protection for Azure and AWS",
            detail: "Defender for Cloud's Cloud Security Posture Management now includes serverless resource discovery and security posture assessment for Azure and AWS serverless compute workloads.",
            whyItMatters: "Serverless functions often bypass traditional VM-based security controls. Adding CSPM coverage for these workloads ensures misconfigured functions, overly permissive roles, and unpatched runtimes are surfaced before they become attack vectors.",
          },
        ],
      },
    ],
  },
  {
    month: "Nov 2025",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Defender for Cloud now deeply integrated into the Microsoft Defender portal",
            detail: "Microsoft Defender for Cloud is now integrated into the Defender portal at security.microsoft.com, adding posture management alongside existing threat protection for a complete cloud security solution in one unified experience.",
            whyItMatters: "A single pane of glass across Azure, AWS, GCP, and other platforms eliminates context-switching between portals, accelerates investigation workflows, and is especially valuable for hybrid and multicloud organisations managing security across multiple providers.",
          },
          {
            severity: "important", status: "ga",
            summary: "Risk-based Cloud Secure Score now available in Defender portal",
            detail: "The new Cloud Secure Score introduces a formula based on asset risk factors and criticality, available in the Defender portal alongside the classic Secure Score in the Azure portal.",
            whyItMatters: "Risk-weighted scoring ensures high-impact, exploitable issues are prioritised over low-risk findings, helping security teams focus remediation effort where it reduces the most actual risk rather than chasing checkbox compliance.",
          },
          {
            severity: "important", status: "ga",
            summary: "AI security posture management for GCP Vertex AI now GA",
            detail: "AI security posture management is now generally available for GCP Vertex AI, providing continuous monitoring, risk assessments, and actionable recommendations to secure AI workloads on GCP.",
            whyItMatters: "As organisations deploy AI models on GCP Vertex AI, misconfigurations and excessive permissions can expose training data and model endpoints. Dedicated posture management catches these risks before they are exploited.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Discover Azure AI Foundry agents with Defender for Cloud",
            detail: "You can now discover Azure AI Foundry agents in your environment using Defender for Cloud.",
            whyItMatters: "AI agents can autonomously access data and invoke tools, creating a new attack surface. Discovering these agents and understanding their security posture is the first step toward governing AI-driven automation risks.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Attack Path now includes Microsoft Entra OAuth application compromise",
            detail: "Attack Path now shows how bad actors use compromised Microsoft Entra OAuth applications to move across environments and reach critical resources.",
            whyItMatters: "Over-privileged or vulnerable OAuth applications are a common lateral-movement vector. Visualising these paths helps identity and security teams proactively reduce OAuth app permissions before attackers can chain them into full environment compromise.",
          },
          {
            severity: "minor", status: "preview",
            summary: "In-pipeline container vulnerability scanning via Defender for Cloud CLI",
            detail: "In-pipeline container vulnerability scanning for Defender for DevOps Security is now available in preview through the Defender for Cloud CLI.",
            whyItMatters: "Scanning container images within CI/CD pipelines catches vulnerabilities before images are deployed, shifting security left and preventing known-vulnerable containers from ever reaching production clusters.",
          },
        ],
      },
    ],
  },
  {
    month: "Jul 2025",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "important", status: "preview",
            summary: "Four new Regulatory Compliance Standards added",
            detail: "Regulatory Compliance now supports four new frameworks across Azure, AWS, and GCP: Digital Operational Resilience Act (DORA), European Union Artificial Intelligence Act (EU AI Act), Korean Information Security Management System for Public Cloud (k-ISMS-P), and CIS Microsoft Azure Foundations Benchmark v3.0.",
            whyItMatters: "These frameworks address emerging regulatory requirements in financial services (DORA), AI governance (EU AI Act), and Korean cloud compliance (k-ISMS-P). Built-in assessment mappings save organisations weeks of manual control-mapping effort.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Vulnerability scanning support for Chainguard container images and Wolfi",
            detail: "The vulnerability scanner, powered by Microsoft Defender Vulnerability Management, now extends its scanning coverage to Chainguard container images and Wolfi distributions.",
            whyItMatters: "Chainguard and Wolfi are increasingly adopted for their minimal, hardened base images. Validating these images ensures that even security-focused distributions are scanned for newly disclosed CVEs and supply-chain risks.",
          },
        ],
      },
    ],
  },
  {
    month: "Jun 2025",
    products: [
      {
        product: "Microsoft Defender for Cloud",
        icon: "🔒",
        updates: [
          {
            severity: "minor", status: "preview",
            summary: "Defender for Containers DNS detections based on Helm deployment",
            detail: "DNS threat detections for Defender for Containers are now available when deploying via Helm.",
            whyItMatters: "Helm-based deployment improves memory efficiency and reduces CPU consumption for large clusters, making DNS-layer threat detection practical at scale without degrading workload performance.",
          },
          {
            severity: "minor", status: "preview",
            summary: "API discovery and security posture for APIs in Function Apps and Logic Apps",
            detail: "Defender for Cloud now extends API discovery and security posture to include APIs hosted in Azure Function Apps and Logic Apps, in addition to Azure API Management.",
            whyItMatters: "APIs in Function Apps and Logic Apps often fly under the radar of traditional API management. Centralised inventory and risk assessment surfaces dormant, unencrypted, or misconfigured APIs that would otherwise go unmonitored.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Agentless File Integrity Monitoring",
            detail: "Agentless File Integrity Monitoring is now available in preview, providing file integrity monitoring without requiring an agent deployment on monitored machines.",
            whyItMatters: "Eliminating the agent requirement lowers deployment friction and extends FIM coverage to environments where installing agents is impractical or restricted by policy, while still detecting unauthorised file changes that may indicate compromise.",
          },
          {
            severity: "minor", status: "preview",
            summary: "Agentless code scanning with GitHub support and customisable coverage",
            detail: "Agentless code scanning now supports GitHub repositories with customisable scanning coverage.",
            whyItMatters: "Security teams can assess code for vulnerabilities without installing agents in CI/CD pipelines, reducing onboarding friction and enabling broader coverage across repositories that may not yet have pipeline-integrated scanning.",
          },
        ],
      },
    ],
  },
]
