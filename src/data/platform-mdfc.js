export const PLATFORM_UPDATES = [
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
