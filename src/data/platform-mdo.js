export const PLATFORM_UPDATES = [
  {
    month: "Jul 2026",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Prompt injection protection detects injection attacks hidden in inbound email",
            detail: "Microsoft Defender for Office 365 now detects prompt injection attacks concealed in inbound email.",
            whyItMatters: "As mail flows into AI assistants that summarise and act on inboxes, hidden instructions in message bodies become an execution path rather than inert text. Filtering at the mail gateway blocks the attack before any downstream agent reads it, which is the only layer that sees the message ahead of every consumer of it.",
          },
          {
            severity: "important", status: "ga",
            summary: "Unified RBAC is the default permission model for new Defender for Office 365 Plan 2 organisations",
            detail: "From July 2026, new Microsoft Defender for Office 365 Plan 2 organisations use the Microsoft Defender unified role-based access control model by default (MC1246006).",
            whyItMatters: "New tenants get one role model spanning Defender workloads instead of Exchange Online role groups layered under Defender permissions. Existing organisations are unaffected, so teams running both old and new tenants should expect their permission designs to diverge.",
          },
          {
            severity: "important", status: "ga",
            summary: "Microsoft Defender for Office 365 Plan 1 now included in Microsoft 365 E3",
            detail: "Microsoft 365 E3 now includes Microsoft Defender for Office 365 Plan 1.",
            whyItMatters: "E3 tenants gain Safe Attachments, Safe Links and anti-phishing policies without a separate add-on, so protections previously left unconfigured on cost grounds are now available by default. Worth auditing which E3 tenants are still running Exchange Online Protection alone.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Default 'Mark as and notify' email templates are now localised",
            detail: "Where automatic notifications use the default template, users receive notification emails in their preferred language based on their Outlook language settings. Custom notification templates configured by admins are unaffected.",
            whyItMatters: "Reporting feedback that arrives in a language the user reads is more likely to be acted on, which matters for the admin review loop on user-reported messages. Teams using custom templates keep the previous behaviour and would need to localise them separately.",
          },
        ],
      },
    ],
  },
  {
    month: "Apr 2026",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "New granular RBAC permission for email content associated with alerts",
            detail: "A new Unified RBAC permission — 'Email & collaboration content: Emails associated with alerts (read)' — allows analysts to preview or download email messages associated with specific security alerts.",
            whyItMatters: "Previously, letting an analyst read a phishing message during triage meant granting broad access to mailbox content. This scopes the read to messages already tied to an alert, so tier-1 investigation no longer requires standing access to the wider mail estate.",
          },
          {
            severity: "important", status: "ga",
            summary: "Removing internal users from Teams chats is now generally available",
            detail: "The ability to remove internal users from Teams chats in the Teams message entity panel has reached general availability.",
            whyItMatters: "Containment of a compromised account inside an active chat previously meant disabling the account or waiting on the Teams admin. Doing it from the message entity panel keeps the response in the analyst's existing workflow.",
          },
          {
            severity: "important", status: "ga",
            summary: "Security Copilot email summary available on the Email entity page",
            detail: "With a Microsoft Security Copilot subscription, an AI summary of email entity data can be generated directly from the Email entity page using the Copilot action.",
            whyItMatters: "Condenses headers, authentication results, URLs and detonation verdicts into a readable summary, cutting the time to a triage decision on a reported message. Requires a separate Security Copilot subscription, so it does not change the baseline analyst experience.",
          },
          {
            severity: "important", status: "preview",
            summary: "Bulk email below the BCL threshold can be delivered to the Promotions folder (Preview)",
            detail: "Anti-spam policies can be configured to deliver bulk mail below the bulk complaint level threshold to the Promotions folder in supported versions of Outlook.",
            whyItMatters: "Moves marketing mail out of the inbox without quarantining it, which reduces user-reported false positives compared with raising the BCL threshold. Note that mail in Promotions is still delivered — teams should not treat this as a blocking control, and users who do not check the folder may miss legitimate senders.",
          },
        ],
      },
    ],
  },
  {
    month: "Mar 2026",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "User reporting in Teams expanded to include Calls",
            detail: "Users can now report completed or missed one-to-one Microsoft Teams calls from call history as malicious (scam) or non-malicious (non-scam) to the specified reporting mailbox, or Microsoft and the reporting mailbox via user reported settings.",
            whyItMatters: "Extends threat reporting beyond chat and channels to voice calls, closing a gap where vishing (voice phishing) and scam calls in Teams could go unreported and uninvestigated.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Contextual Teams messages included in User reported Teams Messages",
            detail: "When users report Microsoft Teams messages from chats, channels (standard, shared, and private), and meeting conversations to Microsoft as malicious (security risk), up to fifteen messages before and after the reported message are now shared for analysis.",
            whyItMatters: "Providing surrounding conversation context enables analysts and automated systems to better assess the true intent of a reported message, reducing false positives and improving investigation accuracy.",
          },
        ],
      },
    ],
  },
  {
    month: "Feb 2026",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "User reporting in Teams expanded to Defender for Office 365 Plan 1",
            detail: "Users can now report external and intra-org Microsoft Teams messages from chats, standard, shared, and private channels, and meeting conversations to Microsoft as malicious (security risk) via user reported settings.",
            whyItMatters: "Previously limited to Plan 2, this brings Teams message threat reporting to a broader set of organisations on Plan 1, ensuring more environments can crowdsource threat intelligence from end users.",
          },
        ],
      },
    ],
  },
  {
    month: "Jan 2026",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Block communication from sender email addresses and domains in Teams",
            detail: "Admins can now directly block malicious domains and email addresses from within the Microsoft Defender portal, adding targeted entries to the Teams Admin Center blocked domains and users list.",
            whyItMatters: "This enables near real-time protection — when suspicious or abusive external organisations are identified, SOC teams can immediately block new external chat messages, invites, and channel communications from those domains while deleting existing ones.",
          },
          {
            severity: "minor", status: "ga",
            summary: "ZAP and Teams Admin quarantine expanded to Plan 1",
            detail: "Zero-hour-auto-purge (ZAP) and admin management of quarantined Teams messages is now available to Microsoft Defender for Office 365 Plan 1 by default.",
            whyItMatters: "Brings post-delivery protection to Plan 1 customers, ensuring that messages identified as malicious after initial delivery are automatically removed — closing the window of exposure without requiring a Plan 2 licence.",
          },
        ],
      },
    ],
  },
  {
    month: "Oct 2025",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "New Email Actions available directly in Advanced Hunting",
            detail: "Security teams can now perform Submit to Microsoft, Add to TABL, and Initiate automated investigation actions directly from the Advanced Hunting interface in Microsoft Defender XDR.",
            whyItMatters: "These actions were previously only available in Threat Explorer. Surfacing them in Advanced Hunting enables more efficient and programmatic investigative and response workflows without switching tools.",
          },
        ],
      },
    ],
  },
  {
    month: "Sep 2025",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Near real-time URL protection in Teams messages",
            detail: ["Known malicious URLs in Teams messages are now delivered with a warning. Messages found to contain malicious URLs up to 48 hours after delivery also receive a warning.", "The warning is added to messages in internal and external chats and channels for all URL verdicts (not just malware or high confidence phishing)."],
            whyItMatters: "Mitigates phishing and credential-harvesting attacks delivered via Teams links by warning users at the point of click, and retroactively protecting against URLs that are reclassified as malicious after delivery.",
          },
          {
            severity: "minor", status: "ga",
            summary: "User reporting of non-malicious Teams messages now supported",
            detail: "Users can now report external and intra-org Teams messages as non-malicious (not a security risk) from chats, standard, shared, and private channels, and meeting conversations.",
            whyItMatters: "Allows users to flag false positives, helping Microsoft and SOC teams tune detection accuracy. User reported settings determine whether reported messages go to the reporting mailbox, to Microsoft, or both. Teams mobile client reporting is also now supported.",
          },
        ],
      },
    ],
  },
  {
    month: "Aug 2025",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "SecOps can dispute Microsoft's verdict on previously submitted items",
            detail: "SecOps can now dispute Microsoft's verdict on previously submitted email or URLs when they believe the result is incorrect.",
            whyItMatters: "Disputing an item links back to the original submission and triggers a reevaluation with full context and audit history, giving security teams a formal feedback loop to correct false negatives or false positives in Microsoft's threat intelligence.",
          },
        ],
      },
    ],
  },
  {
    month: "Jul 2025",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "User reporting of Teams messages as malicious",
            detail: "Users can report external and intra-org Teams messages from chats, channels, and meeting conversations as malicious to the specified reporting mailbox, or Microsoft and the reporting mailbox via user reported settings.",
            whyItMatters: "Empowers end users to flag suspicious Teams messages directly, feeding real-time threat signals into the SOC pipeline and enabling faster detection and response to phishing and social engineering attacks delivered through Teams.",
          },
        ],
      },
    ],
  },
  {
    month: "Jun 2025",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Mail bombing attack detection and classification",
            detail: "Defender for Office 365 can now detect and classify mail bombing attacks — a DDoS-style attack that subscribes recipients to large volumes of legitimate newsletters to overwhelm their mailbox, often acting as a precursor to malware, ransomware, or data exfiltration.",
            whyItMatters: "Mail bombing is now an available Detection technology value in Threat Explorer, the Email entity page, Email summary panel, and as a DetectionMethods value in Advanced Hunting, giving SOC teams visibility into an attack vector that was previously difficult to identify and triage.",
          },
          {
            severity: "minor", status: "ga",
            summary: "AI-powered Submissions Response with generative AI explanations",
            detail: "AI-powered Submissions Response introduces generative AI explanations for admin email submissions to Microsoft.",
            whyItMatters: "Provides clearer and more actionable submission result definitions, reducing the time analysts spend interpreting verdict rationale and helping them understand why a particular email was classified the way it was.",
          },
        ],
      },
    ],
  },
  {
    month: "May 2025",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "Take action replaces Message actions in Threat Explorer for government cloud",
            detail: "SecOps can now create block entries on URLs and files via TABL, take multiple actions on up to 100 selected messages (purge, submit, trigger investigations, block), and use the Show all response actions toggle. For 101+ messages, only purge and remediation options are available.",
            whyItMatters: "Brings the modernised Take action experience to government cloud environments, unifying response workflows and giving GCC, GCC High, and DoD analysts the same multi-action capabilities previously available only in commercial tenants.",
          },
        ],
      },
    ],
  },
  {
    month: "Mar 2025",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "User reported messages from non-Microsoft add-ins can be sent to Microsoft for analysis",
            detail: "In user reported settings, admins can now select Monitor reported messages in Outlook with a non-Microsoft add-in button. By selecting Microsoft and my reporting mailbox in the Reported message destination section, Microsoft will analyse these messages and provide results on the User reported tab of the Submissions page.",
            whyItMatters: "Organisations using third-party reporting add-ins no longer miss out on Microsoft's analysis pipeline, ensuring all user-reported messages benefit from Microsoft's threat intelligence regardless of the reporting tool in use.",
          },
          {
            severity: "minor", status: "ga",
            summary: "Create allow entries directly in the Tenant Allow/Block List",
            detail: "You can now create allow entries for domains & addresses and URLs directly in the Tenant Allow/Block List, without needing to go through the submissions workflow.",
            whyItMatters: "Streamlines the allow-listing process for SOC teams, removing the extra step of submitting an item first. Available in Microsoft 365 Worldwide, GCC, GCC High, DoD, and Office 365 operated by 21Vianet.",
          },
        ],
      },
    ],
  },
  {
    month: "Jan 2025",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "Built-in Report button in Outlook iOS and Android now supports user reported settings",
            detail: "The built-in Report button in Outlook for iOS version 4.2508 or later and Android version 4.2446 or later now supports the user reported settings experience to report messages as Phishing, Junk, and Not Junk.",
            whyItMatters: "Extends the native reporting experience to mobile users, ensuring threats spotted on phones and tablets are captured through the same pipeline as desktop reports — closing a gap where mobile-only users had no easy way to flag suspicious messages.",
          },
        ],
      },
    ],
  },
  {
    month: "Dec 2024",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "New guidance for deploying defense-in-depth email security with non-Microsoft services",
            detail: "Published considerations and recommendations for organizations using non-Microsoft security services alongside Microsoft 365 for defense-in-depth email protection.",
            whyItMatters: "Provides a clear reference architecture for hybrid email security deployments, helping organisations avoid misconfigurations that can weaken protection when layering third-party gateways or filters with Exchange Online Protection and Defender for Office 365.",
          },
        ],
      },
    ],
  },
  {
    month: "Nov 2024",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "important", status: "ga",
            summary: "LLM-based BEC detection and classification now available",
            detail: "Defender for Office 365 now detects business email compromise (BEC) attacks using large language model (LLM)-based filters that analyse email language and infer intent.",
            whyItMatters: "Traditional BEC detections rely on heuristics and sender reputation, which sophisticated attackers can evade. LLM-based analysis understands conversational context and social engineering cues, significantly improving catch rates for impersonation and fraud attempts.",
          },
        ],
      },
    ],
  },
  {
    month: "Oct 2024",
    products: [
      {
        product: "Microsoft Defender for Office 365",
        icon: "📧",
        updates: [
          {
            severity: "minor", status: "ga",
            summary: "Tenant Allow/Block List now supports IPv6 addresses",
            detail: "TABL now supports allowing and blocking IPv6 addresses. Available in Microsoft 365 Worldwide, GCC, GCC High, DoD, and Office 365 operated by 21Vianet environments.",
            whyItMatters: "As IPv6 adoption grows, threat actors increasingly use IPv6 infrastructure. Supporting IPv6 in TABL ensures security teams can block or allow traffic from these addresses without relying on workarounds or external filtering.",
          },
        ],
      },
    ],
  },
]
