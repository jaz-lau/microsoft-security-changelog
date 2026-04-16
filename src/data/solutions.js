export const RAW_SOLUTIONS = [
  {
    name: "1Password",
    entries: [
      { version: "3.0.2", date: "17-09-2024", text: "Added new CCP Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "27-06-2024", text: "Fixed typo error in Analytic Rule 1Password - Changes to SSO configuration.yaml. Fixed Logo link and typo in CreateUI.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "12-06-2024", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "42Crunch API Protection",
    entries: [
      { version: "3.0.0", date: "15-07-2024", text: "Missing Tactics and Techniques added", contentTypes: [] },
    ],
  },
  {
    name: "A365 Observability",
    entries: [
      { version: "3.0.0", date: "01-04-2026", text: "Releasing a new A365 Observability connector solution.", contentTypes: [] },
      { version: "3.0.0", date: "01-04-2026", text: "Remove security admin from A365 solution.", contentTypes: [] },
    ],
  },
  {
    name: "Abnormal Security",
    alias: "AbnormalSecurity",
    entries: [
      { version: "3.0.0", date: "04-03-2026", text: "Added CCF Push connector with multi-table routing (9 tables), DeployPushConnectorButton, and OAuth 2.0 authentication. Legacy Azure Functions connector retained for backward compatibility.", contentTypes: [] },
      { version: "2.0.1", date: "29-06-2023", text: "Renaming Azure Function to Azure Functions in Data Connector Description and Updated the python runtime version to 3.11", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "AbuseIPDB",
    entries: [
      { version: "3.0.2", date: "09-12-2025", text: "Fix typos and update img Source in AbuseIPDB Playbook Solutions", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "29-03-2024", text: "Updated playbook description and corrected sentense formatting", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "31-07-2023", text: "Updated prerequisites for AbuseIPDB-BlacklistIpToThreatIntelligence playbook", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "Acronis Cyber Protect Cloud",
    entries: [
      { version: "3.0.0", date: "11-11-2025", text: "Initial Solution Release.", contentTypes: [] },
      { version: "3.0.0", date: "11-11-2025", text: "The publisherId has been Updated.", contentTypes: [] },
    ],
  },
  {
    name: "AI Analyst Darktrace",
    entries: [
      { version: "3.0.1", date: "11-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "18-09-2023", text: "Addition of new AI Analyst Darktrace AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "AIShield AI Security Monitoring",
    entries: [
      { version: "3.0.1", date: "06-03-2025", text: "Added new Analytic Rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "06-03-2025", text: "Added new Workbook GuardianDashboard.json.", contentTypes: ["Workbook"] },
      { version: "3.0.1", date: "06-03-2025", text: "Added new Parser Guardian.yaml", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "15-01-2023", text: "Added Entity Mapping and remove alertactics Column Name to Analytic Rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "15-01-2023", text: "Added new Analytic Rules and updated existing Analytic Rules and (AIShield) Parser.", contentTypes: ["Analytic Rule","Parser"] },
    ],
  },
  {
    name: "Akamai Security Events",
    entries: [
      { version: "3.0.2", date: "12-11-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "08-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "20-09-2023", text: "Addition of new Akamai Security Events AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Alibaba Cloud",
    entries: [
      { version: "3.0.1", date: "24-02-2025", text: "Updated Data Connector Instructions", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "09-09-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
    ],
  },
  {
    name: "Alibaba Cloud ActionTrail",
    entries: [
      { version: "3.0.1", date: "22-08-2025", text: "Moving Alibaba Cloud ActionTrail CCF Data Connector to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "07-07-2025", text: "Added Alibaba Cloud Actiontrail CCF connector.", contentTypes: [] },
      { version: "3.0.0", date: "07-07-2025", text: "Added Preview tag to CCF Connector title.", contentTypes: [] },
    ],
  },
  {
    name: "Alibaba Cloud Networking",
    entries: [
      { version: "3.0.1", date: "05-04-2026", text: "Fix added all data types to graph queries (line charts on the UX)", contentTypes: [] },
      { version: "3.0.0", date: "16-03-2026", text: "Added Public Preview Alibaba Cloud Networking CCF connector. to support ApiGW, VPC and firewall data", contentTypes: [] },
    ],
  },
  {
    name: "Amazon Web Services",
    entries: [
      { version: "3.0.8", date: "13-01-2026", text: "Updated non-functional links from Analytic rules and Hunting query", contentTypes: ["Analytic Rule","Hunting Query"] },
      { version: "3.0.7", date: "28-07-2025", text: "Fix ChangeToVPC Analytic Rule to ensure it excludes changes to API Gateway", contentTypes: ["Analytic Rule"] },
      { version: "3.0.6", date: "13-06-2025", text: "Updated Amazon Web Services S3 Data connector to include details for the default output format.", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "10-02-2025", text: "Repackaged to fix ccp grid showing only 1 record and rename of file", contentTypes: [] },
      { version: "3.0.4", date: "13-12-2024", text: "Updated title of Analytic Rule - AWS_LogTampering.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.3", date: "27-05-2024", text: "Updated Hunting Query AWS_FailedBruteForceS3Bucket.yaml and Analytic Rules for missing TTP", contentTypes: ["Analytic Rule","Hunting Query"] },
      { version: "3.0.2", date: "05-04-2024", text: "Updated awsS3 Data connector, added new Data Type CloudWatch", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "22-12-2023", text: "Added new Analytic Rule (AWS Config Service Resource Deletion Attempts)", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "04-12-2023", text: "Updated Analytical Rule AWS_GuardDuty_template with entity mappings", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Amazon Web Services NetworkFirewall",
    entries: [
      { version: "3.0.3", date: "03-02-2026", text: "Fix duplicate collectors creation.", contentTypes: [] },
      { version: "3.0.2", date: "19-08-2025", text: "CCF Connector moving to GA.", contentTypes: [] },
      { version: "3.0.1", date: "23-07-2025", text: "Updated AWS Network Firewall Readme file and the associated links for the CCF Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "20-03-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Amazon Web Services Route 53",
    entries: [
      { version: "3.0.1", date: "30-06-2025", text: "Amazon Web Services Route 53 CCF Data Connector moving to GA", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "27-05-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Anvilogic",
    entries: [
      { version: "3.0.0", date: "20-06-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Apache HTTP Server",
    alias: "ApacheHTTPServer",
    entries: [
      { version: "3.0.1", date: "05-12-2024", text: "Removed Deprecated Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "13-08-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Apache Log4j Vulnerability Detection",
    entries: [
      { version: "3.0.8", date: "25-08-2025", text: "Hardcoded the Watchlist description to resolve a deployment issue.", contentTypes: [] },
      { version: "3.0.7", date: "21-07-2025", text: "Removed 'BatchImportToSentinel' & Updated 'Log4jIndicatorProcessor' Playbook to handle new STIX action.", contentTypes: ["Playbook"] },
      { version: "3.0.6", date: "21-01-2025", text: "Fixed query in Analytical Rule UserAgentSearch_log4j.yaml.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.5", date: "26-07-2024", text: "Updated Analytical Rule for missing TTP.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "31-05-2024", text: "Added missing AMA Data Connector reference in Analytic rules and Hunting Query.", contentTypes: ["Analytic Rule","Hunting Query","Data Connector"] },
      { version: "3.0.3", date: "15-02-2024", text: "Updated the solution to fix Analytic Rules deployment issue.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "07-02-2024", text: "Updated solution description.", contentTypes: [] },
      { version: "3.0.1", date: "02-01-2024", text: "Tagged for dependent solutions for deployment.", contentTypes: [] },
      { version: "3.0.0", date: "06-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
    ],
  },
  {
    name: "Arista Awake Security",
    alias: "AristaAwakeSecurity",
    entries: [
      { version: "3.0.1", date: "03-01-2025", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "09-07-2024", text: "Deprecating data connectors.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Armis",
    entries: [
      { version: "3.2.0", date: "05-12-2025", text: "Log Ingestion Support.", contentTypes: [] },
      { version: "3.1.1", date: "19-05-2025", text: "Updated Armis AlertActivity and Armis Device Data connectors to add keyvault for storing Armis Access Token and Severity parameter in AlertActivity.", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "11-09-2024", text: "Updated Armis Alerts Data connector to ingest Armis Activities associated with only Armis Alerts.", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "26-08-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "3.0.2", date: "03-05-2024", text: "Repackaged for parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "15-04-2024", text: "Added Deploy to Azure Government button in Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "03-11-2023", text: "Fixed vulnerability related issue by passing the scret key in the body of the request instead of the param in the data connector and playbook", contentTypes: ["Data Connector","Playbook"] },
    ],
  },
  {
    name: "Armorblox",
    entries: [
      { version: "3.0.1", date: "11-09-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "3.0.0", date: "23-11-2023", text: "Added entity mapping in Analytical Rule [Armorblox Needs Review Alert]", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Aruba ClearPass",
    entries: [
      { version: "3.0.3", date: "13-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "08-07-2024", text: "Deprecating Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "26-09-2023", text: "Parser link update", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "21-09-2023", text: "Addition of new Aruba ClearPass AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Atlassian Confluence Audit",
    alias: "AtlassianConfluenceAudit",
    entries: [
      { version: "3.0.7", date: "07-04-2026", text: "Updated Data Connector - *Atlassian Confluence Audit* to change DCR data flows.", contentTypes: ["Data Connector"] },
      { version: "3.0.6", date: "28-07-2025", text: "Removed Deprecated Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "06-05-2025", text: "Launching CCP Data Connector - *Atlassian Confluence Audit* from Public Preview to Global Availability.", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "16-04-2025", text: "Updated Parser to support new and old table.", contentTypes: ["Parser"] },
      { version: "3.0.4", date: "16-04-2025", text: "Updated table name in CCP Connector.", contentTypes: [] },
      { version: "3.0.3", date: "21-02-2025", text: "Added new CCP Data Connector 'Atlassian Confluence Audit'.", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "21-02-2025", text: "Added new Parser 'ConfluenceAuditV2'.", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "09-09-2024", text: "Updated the Python runtime version to 3.11 in Data Connector Function APP.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "03-05-2024", text: "Repackaged for Parser issue fix on reinstall.", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "19-07-2023", text: "Updated to enable solution for Azure government.", contentTypes: [] },
    ],
  },
  {
    name: "Atlassian Jira Audit",
    alias: "AtlassianJiraAudit",
    entries: [
      { version: "3.0.6", date: "13-04-2026", text: "Deprecate Atlassian Jira Audit (using Azure Function)", contentTypes: [] },
      { version: "3.0.5", date: "18-03-2026", text: "Rename to Atlassian Jira Audit (via Codeless Connector Framework)", contentTypes: [] },
      { version: "3.0.4", date: "30-08-2024", text: "Updated parameters for CCP Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "14-08-2024", text: "Data Connector[Atlassian Jira Audit (using REST API)] Globally Available", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "22-05-2024", text: "Added new CCP Data Connector to the Solution", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "16-04-2024", text: "Added Deploy to Azure Goverment button for Government portal in Dataconnector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "06-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
    ],
  },
  {
    name: "Attacker Tools Threat Protection Essentials",
    entries: [
      { version: "3.0.3", date: "06-06-2024", text: "Added missing AMA Data Connector reference in Analytic rules and Hunting Queries", contentTypes: ["Analytic Rule","Hunting Query","Data Connector"] },
      { version: "3.0.2", date: "07-02-2024", text: "Tagged for dependent solutions for deployment", contentTypes: [] },
      { version: "3.0.1", date: "23-01-2024", text: "Added subTechniques in Template", contentTypes: [] },
      { version: "3.0.0", date: "06-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
    ],
  },
  {
    name: "Australian Cyber Security Centre",
    entries: [
      { version: "3.0.2", date: "08-01-2024", text: "Added support for Organization Unique Identifier in Playbook", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "24-11-2023", text: "Re-developed Playbook according to new requirements.", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "15-11-2023", text: "Updated the Playbook to align with the new requirements.", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "Auth0",
    entries: [
      { version: "3.1.5", date: "13-04-2026", text: "Deprecate Auth0 Logs (using Azure Function)", contentTypes: [] },
      { version: "3.1.4", date: "30-03-2026", text: "Fix space in name, Rename to Auth0 Logs (via Codeless Connector Framework)", contentTypes: [] },
      { version: "3.1.3", date: "20-03-2026", text: "Rename to Auth0 Logs(via Codeless Connector Framework)", contentTypes: [] },
      { version: "3.1.2", date: "10-02-2025", text: "Advancing CCP Data Connector from Public preview to Global Availability.", contentTypes: ["Data Connector"] },
      { version: "3.1.1", date: "22-01-2025", text: "Added Preview tag to CCP Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "13-12-2024", text: "Added new CCP Data Connector to the Solution", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "24-08-2024", text: "Updated the Data Connector Function app python runtime version to 3.11", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Authomize",
    entries: [
      { version: "3.0.0", date: "12-12-2023", text: "Added Entity Mapping to Analytic rules", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "AWS Access Logs",
    alias: "AWS_AccessLogs",
    entries: [
      { version: "3.0.2", date: "05-02-2026", text: "Resolved vulnerability reported in AWS Access log in CloudFoundation template file.", contentTypes: [] },
      { version: "3.0.1", date: "10-06-2025", text: "AWS S3 Server Access Log CCF Data Connector Moving to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "08-08-2025", text: "Initial Solution Release.", contentTypes: [] },
      { version: "3.0.0", date: "08-08-2025", text: "New CCF Data Connector for AWS_AccessLogs.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "AWS Athena",
    alias: "AWSAthena",
    entries: [
      { version: "3.0.2", date: "12-01-2026", text: "The Python version for FunctionAppConnector has been updated.", contentTypes: [] },
      { version: "3.0.1", date: "09-08-2024", text: "Updated Playbook post deployement steps", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "29-01-2024", text: "App insights to LA change in data connector and repackage", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "AWS CloudFront",
    entries: [
      { version: "3.0.0", date: "24-06-2025", text: "Initial Solution Release.", contentTypes: [] },
      { version: "3.0.0", date: "24-06-2025", text: "Added new CCF Data Connector 'AWSCloudFrontLog_CCF'", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "AWS EKS",
    entries: [
      { version: "3.0.0", date: "12-03-2026", text: "Initial Solution Release.", contentTypes: [] },
      { version: "3.0.0", date: "12-03-2026", text: "New CCF Data Connector 'AWS EKS'.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "12-03-2026", text: "Enables ingestion of Amazon Elastic Kubernetes Service audit logs into Microsoft Sentinel for comprehensive security monitoring and threat detection.", contentTypes: [] },
    ],
  },
  {
    name: "AWS ELB",
    entries: [
      { version: "3.0.0", date: "20-03-2026", text: "Initial Solution Release - Public Preview. New CCF Data Connector for AWS Elastic Load Balancing. Includes ingestion of ALB access logs, NLB access logs, and NLB/GLB flow logs. Added 3 Parsers for AWSALBAccessLogs, AWSNLBAccessLogs, AWSELBFlowLogs.", contentTypes: ["Data Connector","Parser"] },
    ],
  },
  {
    name: "AWS Security Hub",
    entries: [
      { version: "3.0.2", date: "27-08-2025", text: "AWS Security Hub added Analytical Rule and Hunting Queries", contentTypes: ["Analytic Rule","Hunting Query"] },
      { version: "3.0.1", date: "27-06-2025", text: "AWS Security Hub CCF Data Connector moving to GA", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "14-05-2025", text: "New Data Connector, Pre Release", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "AWS Systems Manager",
    entries: [
      { version: "3.0.2", date: "14-01-2026", text: "Fixed AWS-SSM-GetInstancePatches Playbook and updated Function App pagination", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "29-01-2024", text: "App insights to LA change in data connector and repackage", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "AWS VPC Flow Logs",
    entries: [
      { version: "3.0.0", date: "25-07-2025", text: "New Data Connector, Preview", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Azure Activity",
    entries: [
      { version: "3.0.4", date: "25-02-2026", text: "Updated description_detailed for the Rare_Custom_Script_Extension Hunting Query", contentTypes: ["Hunting Query"] },
      { version: "3.0.3", date: "19-02-2025", text: "Added new Workbook Azure Service Health to the Solution and added new Hunting query Machine_Learning_Creation.yaml.", contentTypes: ["Hunting Query","Workbook"] },
      { version: "3.0.3", date: "19-02-2025", text: "Added new Analytic Rule Machine_Learning_Creation.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "21-02-2024", text: "Modified Entity Mappings of Analytic Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "23-01-2024", text: "Added subTechniques in Template", contentTypes: [] },
      { version: "3.0.0", date: "06-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
      { version: "3.0.0", date: "06-11-2023", text: "Optimized the Analytic Rule query logic to achieve expected results", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Azure Cloud NGFW by Palo Alto Networks",
    entries: [
      { version: "3.0.2", date: "09-01-2025", text: "Updated query of Analytic Rules and fixed failing queries of Workbooks", contentTypes: ["Analytic Rule","Workbook"] },
      { version: "3.0.1", date: "02-12-2024", text: "Updated Data Connector Ids for dependent content", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "15-02-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Azure DevOps Auditing",
    alias: "AzureDevOpsAuditing",
    entries: [
      { version: "3.0.8", date: "26-01-2026", text: "Updated Data Connector to support dynamic Redirect URI", contentTypes: ["Data Connector"] },
      { version: "3.0.7", date: "22-01-2026", text: "Updated solution description by eliminating legacy streaming text", contentTypes: [] },
      { version: "3.0.6", date: "19-06-2025", text: "Updated Data Connector instructions to include a note about User permissions.", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "05-05-2025", text: "Updated Data Connector instructions.", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "15-04-2025", text: "Added new CCP Connector - Azure DevOps Audit Logs.", contentTypes: [] },
      { version: "3.0.3", date: "16-07-2024", text: "Updated the Analytic rules for missing TTP.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "23-01-2024", text: "Updated the solution to fix Analytic Rules deployment issue.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "27-11-2023", text: "Added new Entity Mappings to Analytic Rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "06-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
    ],
  },
  {
    name: "Azure Firewall",
    entries: [
      { version: "3.0.5", date: "13-02-2026", text: "Updated Analytic Rule to cover missing TTPs. Extended detection for FQDN and Destination IP across multiple sources and added new Analytic Rule for improved TI destination coverage.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "12-02-2024", text: "Updated Analytical Rule", contentTypes: ["Analytic Rule"] },
      { version: "3.0.3", date: "17-01-2024", text: "Updated Azure Firewall Data Connector to support resource specific logs.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "15-12-2023", text: "Updated query in Analytical Rule (Port Scan)", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "21-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
      { version: "3.0.0", date: "20-07-2023", text: "Updated Workbook template to remove unused variables.", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "Azure Key Vault",
    entries: [
      { version: "3.0.3", date: "25-10-2024", text: "Updated description of CreateUi and Analytic Rule", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "14-02-2024", text: "Updated Entity Mapping for KeyVaultSensitiveOperations and NRT_KeyVaultSensitiveOperations Analytic Rules to render the GUID information correctly", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "01-02-2024", text: "Updated ObjectGuid Identifier with Name (KeyvaultMassSecretRetrieval) Analytic Rule to render the GUID information correctly", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "03-01-2024", text: "Added field ResourceId in (KeyvaultMassSecretRetrieval) Analytic Rule for proper Entity Mapping", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Azure Resource Graph",
    entries: [
      { version: "3.0.2", date: "01-04-2026", text: "Update all ARG Tables' name to align with those in Table management part", contentTypes: [] },
      { version: "3.0.1", date: "10-03-2026", text: "Add a new table ARG Role Definitions for ARG Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "20-06-2025", text: "Releasing a new ARG Data Connector Solution in Content Hub and Data Connector gallery.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Azure Security Benchmark",
    alias: "AzureSecurityBenchmark",
    entries: [
      { version: "3.0.4", date: "13-04-2026", text: "Updated Azure Security Benchmark label and queries.", contentTypes: [] },
      { version: "3.0.3", date: "10-09-2025", text: "Removed the network map from the workbook.", contentTypes: ["Workbook"] },
      { version: "3.0.2", date: "12-04-2024", text: "Updated Entity Mappings", contentTypes: [] },
      { version: "3.0.1", date: "24-01-2023", text: "Updated the solution to fix Analytic Rules deployment issue", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "28-11-2023", text: "Changes for rebranding from Azure Active Directory to Microsoft Entra ID & MS 365 Defender to MS Defender XDR", contentTypes: [] },
      { version: "3.0.0", date: "28-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID & MS 365 Defender to MS Defender XDR", contentTypes: [] },
    ],
  },
  {
    name: "Azure SQL Database solution for sentinel",
    entries: [
      { version: "3.0.0", date: "25-10-2024", text: "Updated description of CreateUi and Analytic Rule", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Azure Web Application Firewall (WAF)",
    entries: [
      { version: "3.0.2", date: "06-02-2025", text: "Extracting transactionId_g and hostname_s from the AdditionalFields column using parse_json and Removing the now unavailable details_message_s and details_data_s fields from Analytic Rules App Gateway WAF - SQLi Detection and App Gateway WAF - XSS Detection.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "10-06-2024", text: "Added new Analytic Rules [App Gateway WAF - SQLi Detection and App Gateway WAF - XSS Detection]", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "21-12-2023", text: "Added ResourceProvide condition as it is standard for Application Gateway WAF logs", contentTypes: [] },
    ],
  },
  {
    name: "Barracuda CloudGen Firewall",
    entries: [
      { version: "3.0.2", date: "19-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "18-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "12-10-2023", text: "The support information is revised/updated.", contentTypes: [] },
    ],
  },
  {
    name: "Barracuda WAF",
    entries: [
      { version: "3.0.0", date: "09-07-2024", text: "Deprecating data connectors.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "BeyondTrust PM Cloud",
    alias: "BeyondTrustPMCloud",
    entries: [
      { version: "3.0.0", date: "31-10-2025", text: "Initial Release", contentTypes: [] },
    ],
  },
  {
    name: "Big ID",
    alias: "BigID",
    entries: [
      { version: "3.0.0", date: "13-01-2026", text: "First version of a BigID DSPM CCF Connector.", contentTypes: [] },
      { version: "3.0.0", date: "13-01-2026", text: "BigID DSPM CCF Connector now using JWT user token authentication", contentTypes: [] },
      { version: "3.0.0", date: "13-01-2026", text: "BigID DSPM Asset expansion and mapping", contentTypes: [] },
    ],
  },
  {
    name: "Bitglass",
    entries: [
      { version: "3.0.0", date: "21-10-2024", text: "Updated the python runtime version to 3.11 and updated functional URL", contentTypes: [] },
    ],
  },
  {
    name: "Bitsight",
    alias: "BitSight",
    entries: [
      { version: "3.1.0", date: "31-03-2026", text: "Updated the python runtime version to 3.12. Added support for Log Ingestion API and updated parsers accordingly.", contentTypes: ["Parser"] },
      { version: "3.1.0", date: "31-03-2026", text: "Reverted the solution id to fix the BitSight Solution publishing issue.", contentTypes: [] },
      { version: "3.0.2", date: "26-07-2024", text: "Update Analytic rules for missing TTP", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "15-04-2024", text: "Added Bitsight prefix in data tables name", contentTypes: [] },
      { version: "3.0.0", date: "23-01-2024", text: "Updated Data Connector code with the fix of Pagination and Checkpoint related issue", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Bitwarden",
    entries: [
      { version: "3.0.0", date: "07-06-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Blackberry CylancePROTECT",
    entries: [
      { version: "3.0.1", date: "23-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "18-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Blacklens",
    entries: [
      { version: "3.0.2", date: "13-04-2026", text: "Fix invalid secureData on ParseJson action.", contentTypes: [] },
      { version: "3.0.1", date: "30-03-2026", text: "Bug fix.", contentTypes: [] },
      { version: "3.0.0", date: "16-02-2026", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "BlinkOps",
    entries: [
      { version: "3.0.2", date: "06-08-2025", text: "Updated Playbooks with a minor version bump, improved webhook payload handling, and enhanced documentation and support metadata.", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "10-07-2025", text: "Addition of a new playbook", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "20-05-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "BloodHound Enterprise",
    entries: [
      { version: "3.2.1", date: "13-01-2026", text: "Updated WEBSITE_RUN_FROM_PACKAGE to use Microsoft-managed aka.ms URL", contentTypes: [] },
      { version: "3.2.0", date: "15-09-2025", text: "Added two extra Workbooks (Finding Trends & Posture History). Upgraded Data Connector to Azure Function.", contentTypes: ["Data Connector","Workbook"] },
      { version: "3.1.2", date: "25-02-2025", text: "Bump version for portal deployment", contentTypes: [] },
      { version: "3.1.1", date: "01-02-2025", text: "Fixed compilation error in golang Data Connector function app. Removed non-working function app installation hint, the workspace name.", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "17-11-2024", text: "Updated Solution: table schema updated, new Workbooks, new golang Data Connector function app uses bloodhound-golang-sdk", contentTypes: ["Data Connector","Workbook"] },
      { version: "3.0.0", date: "20-07-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Box",
    entries: [
      { version: "3.1.4", date: "13-04-2026", text: "Deprecate Box Events (using Azure Function)", contentTypes: [] },
      { version: "3.1.3", date: "24-03-2026", text: "Rename to Box Events (via Codeless Connector Framework)", contentTypes: [] },
      { version: "3.1.2", date: "29-10-2025", text: "Updated KQL queries in Workbook to use EventEndTime instead of TimeGenerated for time-based filtering", contentTypes: ["Workbook"] },
      { version: "3.1.1", date: "10-02-2025", text: "Advancing CCP Data Connector from Public preview to Global Availability.", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "06-12-2024", text: "Added new CCP Data Connector and modified Parser.", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.1", date: "18-08-2023", text: "Added text 'using Azure Functions' in Data Connector page.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "19-07-2023", text: "Manual deployment instructions updated for Data Connector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Broadcom SymantecDLP",
    entries: [
      { version: "3.0.3", date: "27-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "08-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "01-09-2023", text: "Addition of new Broadcom SymantecDLP AMA Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "27-07-2023", text: "Corrected the links in the solution.", contentTypes: [] },
    ],
  },
  {
    name: "Business Email Compromise - Financial Fraud",
    entries: [
      { version: "3.0.10", date: "10-11-2025", text: "Update in Analytical Rule alert description", contentTypes: ["Analytic Rule"] },
      { version: "3.0.9", date: "05-06-2024", text: "Analytical Rule description updated", contentTypes: ["Analytic Rule"] },
      { version: "3.0.8", date: "04-04-2024", text: "Updated Entity Mappings", contentTypes: [] },
      { version: "3.0.7", date: "28-02-2024", text: "Removed usage of BlastRadius from Hunting Queries", contentTypes: ["Hunting Query"] },
      { version: "3.0.6", date: "16-02-2024", text: "Updated the solution to fix Analytic Rules deployment issue", contentTypes: ["Analytic Rule"] },
      { version: "3.0.5", date: "08-02-2024", text: "Tagged for dependent solutions for deployment", contentTypes: [] },
      { version: "3.0.4", date: "10-01-2024", text: "Updated Analytic Rule (AuthenticationMethodChangedforPrivilegedAccount.yaml)", contentTypes: ["Analytic Rule"] },
      { version: "3.0.3", date: "23-11-2023", text: "Updated description of Hunting query", contentTypes: ["Hunting Query"] },
      { version: "3.0.2", date: "06-11-2023", text: "Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR", contentTypes: [] },
      { version: "3.0.1", date: "03-11-2023", text: "Updated Analytic Rule datatype and descriptions for Hunting queries", contentTypes: ["Analytic Rule","Hunting Query"] },
      { version: "3.0.0", date: "07-08-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Censys",
    entries: [
      { version: "3.0.0", date: "05-03-2026", text: "Initial Solution for Censys with Playbooks and Workbook", contentTypes: ["Playbook","Workbook"] },
    ],
  },
  {
    name: "Check Point CloudGuard CNAPP",
    entries: [
      { version: "3.0.0", date: "18-11-2024", text: "Initial Solution release", contentTypes: [] },
    ],
  },
  {
    name: "Check Point Cyberint Alerts",
    entries: [
      { version: "3.1.0", date: "10-03-2026", text: "Update Data Connector, add bi-directional sync playbooks, analytic rule (ingestion anomaly), workbook (alert overview & sync health), and automation rules.", contentTypes: ["Analytic Rule","Data Connector","Playbook","Workbook"] },
      { version: "3.0.0", date: "17-06-2025", text: "Initial Solution release.", contentTypes: [] },
    ],
  },
  {
    name: "Check Point Cyberint IOC",
    entries: [
      { version: "3.0.2", date: "03-04-2026", text: "Fixed table schema definition causing connector creation failure.", contentTypes: [] },
      { version: "3.0.2", date: "03-04-2026", text: "Fixed apiEndpoint URL construction (removed duplicate https:// prefix).", contentTypes: [] },
      { version: "3.0.2", date: "03-04-2026", text: "Added Customer Name configuration field.", contentTypes: [] },
      { version: "3.0.2", date: "03-04-2026", text: "Improved connector UI with field descriptions, placeholders, and password masking for API Token.", contentTypes: [] },
      { version: "3.0.2", date: "03-04-2026", text: "Updated connector description and prerequisites text.", contentTypes: [] },
      { version: "3.0.1", date: "12-09-2025", text: "Replaces the variable reference for graphQueriesTableName with the explicit table name 'iocsent_CL'", contentTypes: [] },
      { version: "3.0.0", date: "17-06-2025", text: "Initial Solution release.", contentTypes: [] },
    ],
  },
  {
    name: "Cisco ACI",
    entries: [
      { version: "3.0.1", date: "24-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "23-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Cisco ASA",
    alias: "CiscoASA",
    entries: [
      { version: "3.0.7", date: "01-09-2025", text: "Updates to the template_CiscoAsaAma.json file to reflect the general availability of the Cisco ASA/FTD via AMA connector", contentTypes: [] },
      { version: "3.0.6", date: "10-07-2025", text: "Preview tag removed from Connector title", contentTypes: [] },
      { version: "3.0.5", date: "25-04-2025", text: "Removed Legacy Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "22-05-2024", text: "Updated connectivity criteria for Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "14-03-2024", text: "Change the connectivity criteria to use the resource graph and not LA data", contentTypes: [] },
      { version: "3.0.2", date: "07-03-2024", text: "New AMA based connector is now in public preview", contentTypes: [] },
      { version: "3.0.1", date: "31-01-2023", text: "Added new Data Connector Cisco ASA/FTD via AMA (Preview) to the solution", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Cisco Duo Security",
    alias: "CiscoDuoSecurity",
    entries: [
      { version: "3.1.1", date: "17-02-2026", text: "Bumped solution version to 3.1.1. Updated ARM template apiVersions to meet ARM-TTK \"< 2 years old\" requirements.", contentTypes: [] },
      { version: "3.1.0", date: "03-02-2026", text: "Python runtime compatibility fix (breaking for connector deployments running on Python 3.11). Fixed solution installation via Azure portal by deriving deployment location from selected workspace (prevents empty location).", contentTypes: [] },
      { version: "3.0.4", date: "26-09-2025", text: "Updated support Microsoft to Partner", contentTypes: [] },
      { version: "3.0.3", date: "02-09-2025", text: "Added support for new log endpoints", contentTypes: [] },
      { version: "3.0.2", date: "16-04-2024", text: "Added Deploy to Azure Goverment button for Government portal in Dataconnector", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "16-04-2024", text: "Fixed Parser issue for Parser name and ParentID mismatch", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "30-01-2024", text: "Updated solution to fix parser query", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "08-01-2024", text: "Updated solution to fix Api version of saved searches", contentTypes: [] },
    ],
  },
  {
    name: "Cisco ETD",
    entries: [
      { version: "3.0.0", date: "11-02-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Cisco Firepower EStreamer",
    entries: [
      { version: "3.0.1", date: "10-07-2024", text: "Deprecating data connectors.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "26-09-2023", text: "Addition of new Cisco Firepower EStreamer AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Cisco ISE",
    entries: [
      { version: "3.0.3", date: "20-05-2025", text: "Updated Parser to parse new fields", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "04-12-2024", text: "Removed Deprecated Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "23-07-2024", text: "Deprecated data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "11-07-2023", text: "Parser query optimization done", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "Cisco Meraki",
    alias: "CiscoMeraki",
    entries: [
      { version: "3.0.5", date: "22-01-2026", text: "Correct name shown on Data Types to match query used & Updated the Cisco Meraki Custom Connector Default Service End-point.", contentTypes: [] },
      { version: "3.0.4", date: "23-07-2025", text: "Workbook updated with new ThreatIntelIndicators table.", contentTypes: ["Workbook"] },
      { version: "3.0.3", date: "02012-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "12-08-2024", text: "Deprecating data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "26-07-2023", text: "Updated Workbook template to remove unused variables.", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "Cisco Meraki Events via REST API",
    entries: [
      { version: "3.0.2", date: "10-01-2025", text: "Transitioned the CCP Connector to General Availability (GA).", contentTypes: [] },
      { version: "3.0.1", date: "30-09-2024", text: "Cisco Meraki via REST API configuration Changes pagination fix", contentTypes: [] },
      { version: "3.0.0", date: "27-12-2023", text: "Initial Solution Release with new addition of CCP Connector", contentTypes: [] },
    ],
  },
  {
    name: "Cisco Secure Cloud Analytics",
    entries: [
      { version: "3.0.2", date: "20-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "23-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "13-05-2024", text: "Changes for rebranding from Cisco Stealthwatch to Cisco Secure Cloud Analytics", contentTypes: [] },
    ],
  },
  {
    name: "Cisco Secure Endpoint",
    entries: [
      { version: "3.0.2", date: "14-08-2025", text: "Cisco Secure Endpoint CCF Connector moving to GA.", contentTypes: [] },
      { version: "3.0.1", date: "23-06-2025", text: "Adding a new CCF Data Connector - *Cisco Secure Endpoint* and updated the Parser to handle the newly introduced table.", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.0", date: "28-08-2024", text: "Updated the python runtime version to 3.11.", contentTypes: [] },
    ],
  },
  {
    name: "Cisco SEG",
    alias: "CiscoSEG",
    entries: [
      { version: "3.0.5", date: "02-12-2024", text: "Added Missed Column Parser", contentTypes: ["Parser"] },
      { version: "3.0.4", date: "14-11-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "08-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "03-05-2024", text: "Repackaged for parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "30-04-2024", text: "Updated the Data Connector to fix conectivity criteria query", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "28-09-2023", text: "Addition of new CiscoSEG AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Cisco UCS",
    entries: [
      { version: "3.0.1", date: "24-12-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "30-07-2024", text: "Update the Parser as part of Syslog migration", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "Cisco Umbrella",
    alias: "CiscoUmbrella",
    entries: [
      { version: "3.0.10", date: "23-03-2026", text: "Added null-byte sanitization for corrupted state manager timestamps in Data Connector to prevent crashes on corrupted Azure File Share markers. Added null-byte stripping in date formatting to handle corrupted date fields from csv file.", contentTypes: ["Data Connector"] },
      { version: "3.0.9", date: "13-03-2026", text: "Moved csv.field_size_limit to module level so all 12 CSV parsers are covered. Added csv.Error guardrail to prevent a single oversized row from stalling ingestion. Consolidated null-byte stripping into unpack_file() to prevent _csv.Error on embedded NUL characters across all parsers.", contentTypes: ["Parser"] },
      { version: "3.0.8", date: "29-01-2026", text: "The Data connector has been updated to support large fields.", contentTypes: ["Data Connector"] },
      { version: "3.0.7", date: "28-11-2025", text: "The Data connector has been updated to support up to version 14 log versioning for the Cisco log format, and the parser to include all tables.", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.6", date: "01-09-2025", text: "Added a new data connector, 'CiscoUmbrella_API_FunctionApp_elasticpremium.json'", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "21-06-2025", text: "To expand support for Cisco Umbrella data in KQL validation tests and to standardize the naming of analytic rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "15-05-2025", text: "Updating documentation to reflect support for Cisco Umbrella log schema version 11", contentTypes: [] },
      { version: "3.0.3", date: "30-12-2024", text: "Update Playbooks AddIpToDestination, AssignPolicyToIdentity, GetDomainInfo as v1 version of CiscoUmbrella APIs are deprecated and Urls are also changed for this. Cisco Umbrella Enforcement API has not been deprecated. Repackage of solution.", contentTypes: ["Playbook"] },
      { version: "3.0.2", date: "20-09-2024", text: "Update Analytic rules for Entity mapping and missing TTP and Updated the python runtime version to 3.11", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "03-05-2024", text: "Added Deploy to Azure Government button in Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "03-05-2024", text: "Fixed Parser issue for Parser name and ParentID mismatch", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "28-09-2023", text: "Updated Data Connector with step by step guidelines", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Cisco WSA",
    alias: "CiscoWSA",
    entries: [
      { version: "3.0.2", date: "19-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "24-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "16-08-2023", text: "Optimize the Parser by replacing the legacy code that uses regex with a more efficient algorithm to reduce the time taken to parse data.", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "Citrix ADC",
    entries: [
      { version: "3.0.3", date: "09-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "30-07-2024", text: "Update Parser as part of Syslog migration", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "18-08-2023", text: "Modified the Parser with correct watchlist alias", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "14-07-2023", text: "Modified the Data Connector with improved onboarding instructions \\|v 1.0.1", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Citrix Analytics CCF",
    entries: [
      { version: "3.0.0", date: "26-03-2026", text: "Initial release of the Citrix Analytics CCF connector.", contentTypes: [] },
    ],
  },
  {
    name: "Citrix Web App Firewall",
    entries: [
      { version: "3.0.2", date: "29-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "10-07-2024", text: "Deprecating data connectors.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "08-09-2023", text: "Addition of new Citrix Web App Firewall AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Claroty",
    entries: [
      { version: "3.0.4", date: "03-04-2026", text: "Fixed typo error in analytical rule", contentTypes: ["Analytic Rule"] },
      { version: "3.0.3", date: "18-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "10-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "11-09-2023", text: "Addition of new Claroty AMA Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "27-07-2023", text: "Corrected the links in the solution.", contentTypes: [] },
    ],
  },
  {
    name: "Claroty xDome",
    entries: [
      { version: "3.0.0", date: "16-04-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Cloud Identity Threat Protection Essentials",
    entries: [
      { version: "3.0.3", date: "28-02-2024", text: "Removed usage of BlastRadius from Hunting Queries", contentTypes: ["Hunting Query"] },
      { version: "3.0.2", date: "09-02-2024", text: "Tagged for dependent solutions for deployment", contentTypes: [] },
      { version: "3.0.1", date: "16-01-2024", text: "Sub-techniques added for Analytical Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "07-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
    ],
  },
  {
    name: "Cloud Service Threat Protection Essentials",
    entries: [
      { version: "3.0.0", date: "09-02-2024", text: "Tagged for dependent solutions for deployment", contentTypes: [] },
    ],
  },
  {
    name: "Cloudflare",
    entries: [
      { version: "3.0.2", date: "05-09-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "3.0.1", date: "01-08-2023", text: "Updated logic in Data Connector to handle broken events.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "24-07-2023", text: "Updated logic in Hunting Query (Cloudflare - Client errors,Cloudflare - Server errors)", contentTypes: ["Hunting Query"] },
    ],
  },
  {
    name: "Cloudflare CCF",
    entries: [
      { version: "3.0.1", date: "08-12-2025", text: "Fixed invalid GUIDs, updated analytic rules, aligned URL entity mappings with legacy Cloudflare solution", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "02-10-2025", text: "Includes all CCF connector definitions and configurations.", contentTypes: [] },
    ],
  },
  {
    name: "Cofense Intelligence",
    alias: "CofenseIntelligence",
    entries: [
      { version: "3.0.0", date: "10-12-2022", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Cofense Triage",
    alias: "CofenseTriage",
    entries: [
      { version: "3.0.0", date: "20-06-2024", text: "Updated Data Connector to retry failed indicators.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Cognyte Luminar",
    alias: "CognyteLuminar",
    entries: [
      { version: "3.0.2", date: "15-04-2025", text: "Added Cognyte Luminar Taxii Server", contentTypes: [] },
      { version: "3.0.1", date: "07-08-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "3.0.0", date: "15-09-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Cohesity Security",
    alias: "CohesitySecurity",
    entries: [
      { version: "3.1.2", date: "21-10-2024", text: "Corrected Param for JobId for recovery API", contentTypes: [] },
      { version: "3.1.1", date: "10-10-2024", text: "Updating Solution with fix for Restore Playbook", contentTypes: ["Playbook"] },
      { version: "3.1.0", date: "19-07-2024", text: "added missing helioID using anomaly strength", contentTypes: [] },
      { version: "3.0.0", date: "29-06-2023", text: "Updating Azure Function to Azure Functions in Data Connector Description", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Common Event Format",
    entries: [
      { version: "3.0.6", date: "20-08-2025", text: "The main template solution has been updated by changing arrays to fields for datatypes, graphqueries and samplequeries.", contentTypes: [] },
      { version: "3.0.5", date: "08-07-2025", text: "Modifying the availability status.", contentTypes: [] },
      { version: "3.0.4", date: "24-06-2025", text: "Updated Connector kind of Legacy CEF Data Connector so that the queries will be reflected.", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "18-06-2025", text: "Updated Connectivity Criteria for Legacy CEF Data Connector to add Device Vendors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "30-04-2025", text: "Updated Connectivity Criteria for CEFAMA Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "04-07-2024", text: "CEFOverview workbook added", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "22-05-2024", text: "Updated connectivity criteria for Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Commvault Security IQ",
    entries: [
      { version: "3.0.4", date: "05-03-2025", text: "Migrate to new data ingestion model via DCR & DCE setup", contentTypes: [] },
      { version: "3.0.3", date: "12-09-2025", text: "Enhanced Data connector with configurable event collection and streamlined deployment", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "28-03-2024", text: "Update Playbook - Bug fix in disabling data aging", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "28-03-2024", text: "Adding Data Connector for Commvault Sentinel Integration", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "21-08-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Continuous Diagnostics & Mitigation",
    alias: "ContinuousDiagnostics&Mitigation",
    entries: [
      { version: "3.0.2", date: "29-09-2025", text: "Updated the broken metrics in the workbook", contentTypes: ["Workbook"] },
      { version: "3.0.1", date: "29-01-2024", text: "Updated the solution to fix Analytic Rules deployment issue", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "09-11-2023", text: "Changes for rebranding from Azure Active Directory Identity Protection to Microsoft Entra ID Protection", contentTypes: [] },
    ],
  },
  {
    name: "Contrast ADR",
    alias: "ContrastADR",
    entries: [
      { version: "3.1.0", date: "27-03-2026", text: "Adding support for Contrast ADR CCF Connector and change in relevant components.", contentTypes: [] },
      { version: "3.0.1", date: "11-11-2025", text: "Updated Workbook and parsing logic in both supported Parsers to improve accuracy and compatibility.", contentTypes: ["Workbook","Parser"] },
      { version: "3.0.0", date: "22-02-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Contrast Protect",
    entries: [
      { version: "3.0.1", date: "11-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "07-09-2023", text: "Addition of new Contrast Protect AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Corelight",
    entries: [
      { version: "3.2.4", date: "19-03-2026", text: "Added 'Show Aggregation' filters in Corelight Data Explorer Workbook.", contentTypes: ["Workbook"] },
      { version: "3.2.3", date: "27-01-2026", text: "Added Corelight AWS VPC Flow dashboard.", contentTypes: [] },
      { version: "3.2.2", date: "01-12-2025", text: "Added Corelight Aggregation Parsers.", contentTypes: ["Parser"] },
      { version: "3.2.1", date: "30-10-2025", text: "Added corelight_first_seen and corelight_anomaly Parsers.", contentTypes: ["Parser"] },
      { version: "3.2.0", date: "05-03-2025", text: "Added new Parsers, Workbooks and Watchlists.", contentTypes: ["Workbook","Parser"] },
      { version: "3.1.0", date: "27-09-2024", text: "Updated Parsers and added new tabs in Workbook.", contentTypes: ["Workbook","Parser"] },
      { version: "3.0.2", date: "31-01-2024", text: "Updated Parser Corelight", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "31-01-2024", text: "Updated tactics of Hunting Query Corelight - Repetitive DNS Failures", contentTypes: ["Hunting Query"] },
      { version: "3.0.1", date: "16-11-2023", text: "Updated package mainTemplate variables", contentTypes: [] },
      { version: "3.0.0", date: "20-09-2023", text: "Changed backend format to use separate tables with parsed values", contentTypes: [] },
      { version: "2.0.0", date: "10-06-2022", text: "Updated Workbooks", contentTypes: ["Workbook"] },
      { version: "1.1.0", date: "22-10-2021", text: "Packaging updates", contentTypes: [] },
      { version: "1.0.2", date: "22-04-2021", text: "Updated instructions, rules, LA config", contentTypes: [] },
      { version: "1.0.1", date: "09-04-2021", text: "Updated Analytic Rule", contentTypes: ["Analytic Rule"] },
      { version: "1.0.0", date: "01-04-2021", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Cortex XDR",
    entries: [
      { version: "3.0.0", date: "28-07-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Cribl",
    entries: [
      { version: "3.0.1", date: "08-08-2025", text: "Corrected Query in Parsers to display correct columns.", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "19-08-2024", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "CrowdStrike Falcon Endpoint Protection",
    entries: [
      { version: "3.3.3", date: "13-04-2026", text: "Deprecate CrowdStrike Falcon Data Replicator (CrowdStrike Managed AWS-S3) (using Azure Function)", contentTypes: [] },
      { version: "3.3.2", date: "16-03-2026", text: "Update *CrowdStrike API Data Connector* to GA with adding rate limits to inner steps for Alerts and Detections data types", contentTypes: ["Data Connector"] },
      { version: "3.3.1", date: "05-03-2026", text: "Update *CrowdStrike API Data Connector* to fix Alerts and Detections data types", contentTypes: ["Data Connector"] },
      { version: "3.3.0", date: "26-01-2026", text: "Refresh *CrowdStrike API Data Connector* with Cases data type and multiple improvements", contentTypes: ["Data Connector"] },
      { version: "3.2.0", date: "07-01-2026", text: "Updated *CrowdStrike Falcon Adversary Data Connector* Change table name to be \"ThreatIntelIndicators\" instead of \"ThreatIntelligenceIndicator\"", contentTypes: ["Data Connector"] },
      { version: "3.1.9", date: "17-12-2025", text: "Updated *CrowdStrike API Data Connector* Enhance API configuration instructions with link", contentTypes: ["Data Connector"] },
      { version: "3.1.8", date: "08-12-2025", text: "Updated *CrowdStrike API Data Connector* to fix rate limit exceptions by introducing retry logic.", contentTypes: ["Data Connector"] },
      { version: "3.1.7", date: "12-11-2025", text: "Updated *CrowdStrike API Data Connector* to fix rate limit exceptions", contentTypes: ["Data Connector"] },
      { version: "3.1.6", date: "23-10-2025", text: "Updated *CrowdStrike API Data Connector* to fix deprecated detections API issues", contentTypes: ["Data Connector"] },
      { version: "3.1.5", date: "22-08-2025", text: "Updated *CrowdStrike API Data Connector* to fix duplicate logs issues", contentTypes: ["Data Connector"] },
      { version: "3.1.4", date: "04-07-2025", text: "Added new CCF Connector to the Solution *CrowdStrike API Data Connector*.", contentTypes: ["Data Connector"] },
      { version: "3.1.4", date: "04-07-2025", text: "Removed *Crowdstrike Falcon Data Replicator* - Function App Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.1.4", date: "04-07-2025", text: "Updated Connectors description.", contentTypes: [] },
      { version: "3.1.3", date: "24-06-2025", text: "Removed \"DEPRECATED\" label from the *Crowdstrike Falcon Data Replicator V2* - Data connector.", contentTypes: ["Data Connector"] },
      { version: "3.1.3", date: "24-06-2025", text: "Updated Solution description.", contentTypes: [] },
      { version: "3.1.2", date: "03-06-2025", text: "Crowdstrike Falcon S3 CCF connector moving to GA.", contentTypes: [] },
      { version: "3.1.1", date: "08-05-2025", text: "Added preview tag to CCP Connector.", contentTypes: [] },
      { version: "3.1.0", date: "11-03-2025", text: "Added new CCP Data Connector to the Solution.", contentTypes: ["Data Connector"] },
      { version: "3.0.10", date: "15-01-2025", text: "Resolve Workbook data type dependency issue.", contentTypes: ["Workbook"] },
      { version: "3.0.9", date: "12-11-2024", text: "Removed deprecated Data Connectors.", contentTypes: ["Data Connector"] },
      { version: "3.0.8", date: "10-07-2024", text: "Deprecated Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.7", date: "20-06-2024", text: "Shortlinks updated for Data Connector CrowdStrike Falcon Indicators of Compromise.", contentTypes: ["Data Connector"] },
      { version: "3.0.6", date: "06-06-2024", text: "Renamed Data Connector *CrowdStrike Falcon Indicators of Compromise* to *CrowdStrike Falcon Adversary Intelligence*.", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "30-05-2024", text: "Added new Function App Data Connector CrowdStrike Falcon Indicators of Compromise.", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "03-05-2024", text: "Fixed Parser issue for Parser name and ParentID mismatch.", contentTypes: ["Parser"] },
      { version: "3.0.3", date: "10-04-2024", text: "Added Azure Deploy button for government portal deployments.", contentTypes: [] },
      { version: "3.0.2", date: "14-02-2024", text: "Addition of new CrowdStrike Falcon Endpoint Protection AMA Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "31-01-2024", text: "Data Connector[Crowdstrike Falcon Data Replicator V2] globally available.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "28-07-2023", text: "New Data Connector added.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "CTERA",
    entries: [
      { version: "3.0.1", date: "05-12-2024", text: "Update on existing Hunting Queries and new Analytic Rules", contentTypes: ["Analytic Rule","Hunting Query"] },
      { version: "3.0.0", date: "21-10-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "CTM360",
    entries: [
      { version: "3.0.2", date: "03-09-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "3.0.1", date: "09-02-2024", text: "Corrected Lookback duration format for all Analytical Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "14-12-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Custom Logs AMA",
    alias: "CustomLogsAma",
    entries: [
      { version: "3.0.0", date: "08-08-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "CyberArk Audit",
    alias: "CyberArkAudit",
    entries: [
      { version: "3.1.0", date: "13-03-2026", text: "New Data Connector based on CCF.", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "13-03-2026", text: "added missing migration instructions and disclaimers.", contentTypes: [] },
      { version: "3.0.2", date: "16-10-2025", text: "Add Analytics Rules.", contentTypes: [] },
      { version: "3.0.1", date: "29-04-2024", text: "Configuration procedure update.", contentTypes: [] },
      { version: "3.0.0", date: "03-04-2024", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "CyberArk Enterprise Password Vault (EPV) Events",
    entries: [
      { version: "3.0.3", date: "29-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "11-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "06-03-2024", text: "Internal terminology changes", contentTypes: [] },
      { version: "3.0.0", date: "21-09-2023", text: "Addition of new CyberArk Enterprise Password Vault (EPV) Events AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "CyberArk EPM",
    alias: "CyberArkEPM",
    entries: [
      { version: "3.0.0", date: "27-07-2023", text: "Updated solution to fix deployment validations", contentTypes: [] },
      { version: "3.0.1", date: "28-04-2025", text: "Updated deployment instructions to use Python 3.10 version", contentTypes: [] },
    ],
  },
  {
    name: "Cybersecurity Maturity Model Certification(CMMC)2.0",
    alias: "CybersecurityMaturityModelCertification(CMMC)2.0",
    entries: [
      { version: "3.1.1", date: "13-01-2026", text: "Updated non-functional links from Workbook.", contentTypes: ["Workbook"] },
      { version: "3.1.0", date: "09-09-2025", text: "Removed the network map from the Workbook", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "29-01-2024", text: "Updated the solution to fix Analytic Rules deployment issue", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Cybersixgill Actionable Alerts",
    alias: "Cybersixgill-Actionable-Alerts",
    entries: [
      { version: "3.0.1", date: "02-09-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "3.0.0", date: "20-02-2024", text: "Replaced Hyperlinks with Shortlinks (aka.ms) in Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Cyble Vision",
    entries: [
      { version: "3.0.3", date: "12-01-2026", text: "Updated API endpoint for CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "12-01-2026", text: "Minor descriptive changes to Analytic Rule and Playbook.Updated Playbook API Body.", contentTypes: ["Analytic Rule","Playbook"] },
      { version: "3.0.2", date: "14-12-2025", text: "Added new CCF data connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "14-12-2025", text: "Added new Parsers to Parse data message of each service.", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "14-12-2025", text: "Added Analytic Rules to generate incidents based on Services.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "10-06-2025", text: "*Cyble-ThreatIntelligence-Ingest* Playbook, including fixes for de-duplication of IoCs, optimized KQL query load, and pagination support.", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "20-05-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Cyborg Security HUNTER",
    entries: [
      { version: "3.0.0", date: "22-11-2023", text: "Initial Submission", contentTypes: [] },
    ],
  },
  {
    name: "Cyera DSPM",
    alias: "CyeraDSPM",
    entries: [
      { version: "3.0.0", date: "05-03-2026", text: "Initial Creation of CCF Data Connector. Updated polling frequency to reduce duplicates, modified ASIM schema for the CyeraAssets_MS_CL table, and simplified deployment with API keys added via the Data Connector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Cyfirma Attack Surface",
    entries: [
      { version: "3.0.3", date: "04-09-2025", text: "Bugs fixes to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "24-07-2025", text: "Minor changes and New analytics rules added to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "17-06-2025", text: "Minor changes to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "14-04-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Cyfirma Brand Intelligence",
    entries: [
      { version: "3.0.3", date: "04-09-2025", text: "Bugs fixes to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "24-07-2025", text: "Minor changes and New analytics rules added to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "17-06-2025", text: "Minor changes to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "14-04-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Cyfirma Compromised Accounts",
    entries: [
      { version: "3.0.2", date: "04-09-2025", text: "Bugs fixes to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "24-07-2025", text: "Minor changes and New analytics rules added to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "17-06-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Cyfirma Cyber Intelligence",
    entries: [
      { version: "3.0.2", date: "04-09-2025", text: "Bugs fixes to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "24-07-2025", text: "Minor changes and New analytics rules added to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "17-06-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Cyfirma Digital Risk",
    entries: [
      { version: "3.0.3", date: "04-09-2025", text: "Bugs fixes to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "24-07-2025", text: "Minor changes and New analytics rules added to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "17-06-2025", text: "Minor changes to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "14-04-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Cyfirma Vulnerabilities Intel",
    entries: [
      { version: "3.0.2", date: "04-09-2025", text: "Bugs fixes to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "24-07-2025", text: "Minor changes and New analytics rules added to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "17-06-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Cynerio",
    entries: [
      { version: "3.0.0", date: "11-07-2023", text: "New analytic rules and workbook", contentTypes: ["Analytic Rule","Workbook"] },
      { version: "2.0.0", date: "29-03-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Cyren Threat Intelligence",
    alias: "CyrenThreatIntelligence",
    entries: [
      { version: "3.0.4", date: "12-03-2026", text: "Optional tokens: Made both JWT tokens (IP Reputation and Malware URL) optional with conditional deployment. Customers can now install either feed or both based on their subscription — connectors are only deployed for tokens that are provided. Added helper text to UI indicating tokens are optional. Updated labels to \"(Optional)\" and placeholder to \"Leave empty if not purchased\".", contentTypes: [] },
      { version: "3.0.3", date: "13-02-2026", text: "Duplicate ingestion fix: Increased count from 100→1000 to fetch all indicators in a single page (Cyren IP Reputation feed contains ~800 indicators, Malware URLs ~200). Increased queryWindowInMin from 15→360 minutes (6 hours) since threat intelligence feeds are relatively static. These two changes eliminate the primary cause of duplicate data ingestion — repeated multi-page fetches of the same indicator set on short polling intervals. See PR #13603 for prior paging-type fix context.", contentTypes: [] },
      { version: "3.0.2", date: "11-02-2026", text: "Fixed CCF paging duplication bug: Changed from Offset paging to PersistentToken paging to prevent duplicate data ingestion when Cyren API startOffset exceeds initial offset. Added DCR transform filter for time-based deduplication.", contentTypes: [] },
      { version: "3.0.1", date: "27-01-2026", text: "Cost optimization: Changed from offset-based paging to time-based filtering (startTime/endTime) to prevent historical data re-ingestion. Updated queryWindowInMin to 120 minutes per MS reviewer recommendation.", contentTypes: [] },
      { version: "3.0.0", date: "16-11-2025", text: "Initial Cyren Threat Intelligence CCF solution package, including all connector and ARM templates.", contentTypes: [] },
    ],
  },
  {
    name: "Cyren-Sentinel One-Threat Intelligence",
    alias: "Cyren-SentinelOne-ThreatIntelligence",
    entries: [
      { version: "3.0.1", date: "06-04-2026", text: "Fix ARM deployment failure from Content Hub — inner Logic App template was evaluating workspaceResourceId incorrectly at deployment scope, causing InvalidTemplate error at position 61. Fixed by referencing variables('workspace-name') (which equals parameters('workspace')) consistent with the outer ARM evaluation scope.", contentTypes: [] },
      { version: "3.0.0", date: "20-03-2026", text: "Initial release — Cyren CCF feed polling with NDJSON parsing, SentinelOne IOC push via Threat Intelligence API, PersistentToken pagination, 6-hour recurrence, cost safety parameters enforced.", contentTypes: [] },
    ],
  },
  {
    name: "Cyware",
    entries: [
      { version: "3.0.0", date: "06-03-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "D3Smart SOAR",
    alias: "D3SmartSOAR",
    entries: [
      { version: "3.3.0", date: "13-04-2026", text: "Added analytics rule for High and Critical severity incident detection.", contentTypes: [] },
      { version: "3.2.0", date: "01-04-2026", text: "Changed to Solution Template plan type. Updated offer ID to azure-sentinel-solution-d3smartsoar.", contentTypes: [] },
      { version: "3.1.0", date: "26-03-2026", text: "Fixed pagination using CountBasedPaging with nested JSON path paging ($.CommandParams.PageIndex). Updated publisher ID to match Partner Center registration. Updated branding to Microsoft Sentinel.", contentTypes: [] },
      { version: "3.0.0", date: "27-02-2026", text: "Initial release of D3 Smart SOAR data connector. Polls incidents every 5 minutes into D3SOARIncidents_CL with IncidentRawData and EventRawData dynamic fields via PollFromSentinel parameter.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Databahn",
    entries: [
      { version: "3.0.0", date: "11-03-2026", text: "Updated connector files to use template variables; updated documentation link; version bump to 3.0.0", contentTypes: [] },
      { version: "3.0.0", date: "11-03-2026", text: "Fix naming inconsistencies in DataBahn solution files.", contentTypes: [] },
    ],
  },
  {
    name: "Datalake to Sentinel",
    alias: "Datalake2Sentinel",
    entries: [
      { version: "3.0.0", date: "31-01-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Dataminr Pulse",
    entries: [
      { version: "3.0.5", date: "16-09-2025", text: "Updated Python version to 3.12 and Added Log Ingestion API support", contentTypes: [] },
      { version: "3.0.4", date: "12-09-2025", text: "Added support for Azure GovCloud", contentTypes: [] },
      { version: "3.0.3", date: "03-05-2024", text: "Repackaged for parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "14-12-2023", text: "Updated Data Connector code", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "06-12-2023", text: "Updated steps in DataConnector UI and README.md file.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "14-07-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Datawiza",
    entries: [
      { version: "3.0.1", date: "03-05-2026", text: "Added new analytics rules.", contentTypes: [] },
      { version: "3.0.0", date: "10-11-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Delinea Secret Server",
    entries: [
      { version: "3.0.1", date: "11-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "20-09-2023", text: "Addition of new Delinea Secret Server AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Dev 0270 Detection and Hunting",
    entries: [
      { version: "3.0.1", date: "07-06-2024", text: "Added missing AMA Data Connector reference in Analytic Rule", contentTypes: ["Analytic Rule","Data Connector"] },
      { version: "3.0.0", date: "12-04-2024", text: "Updated Entity Mappings of Analytic Rule", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Digital Guardian Data Loss Prevention",
    entries: [
      { version: "3.0.2", date: "26-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "25-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "09-10-2023", text: "Fixed KQL validation failure in Hunting Query (Digital Guardian - Users incidents)", contentTypes: ["Hunting Query"] },
    ],
  },
  {
    name: "Digital Shadows",
    entries: [
      { version: "3.0.0", date: "30-11-2023", text: "Added new Entity Mapping to Analytic Rules", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "DNS Essentials",
    entries: [
      { version: "3.0.4", date: "02-07-2025", text: "Updated new ThreatIntelIndicators table references using parser.", contentTypes: ["Parser"] },
      { version: "3.0.3", date: "28-11-2024", text: "Update Analytic Rule MultipleErrorsReportedForSameDNSQueryStaticThresholdBased.yaml to fix bug.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "29-07-2024", text: "Update Hunting Queries to fix TTP.", contentTypes: ["Hunting Query"] },
      { version: "3.0.1", date: "31-01-2023", text: "Updated the solution to fix Analytic Rules deployment issue.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "12-03-2024", text: "Added new Analytic rule and repackaged solution.", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "DomainTools",
    entries: [
      { version: "3.0.0", date: "29-01-2024", text: "App insights to LA change in data connector and repackage", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Doppel",
    entries: [
      { version: "3.0.1", date: "05-03-2025", text: "Fixed typo error in Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "03-12-2024", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "DORA Compliance",
    entries: [
      { version: "3.0.0", date: "16-12-2025", text: "Initial Solution release", contentTypes: [] },
    ],
  },
  {
    name: "DPDP Compliance",
    entries: [
      { version: "3.0.0", date: "26-01-2026", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Dragos",
    entries: [
      { version: "3.0.0", date: "10-01-2025", text: "Initial solution release.", contentTypes: [] },
    ],
  },
  {
    name: "Druva Data Security Cloud",
    alias: "DruvaDataSecurityCloud",
    entries: [
      { version: "3.0.0", date: "09-01-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Dynamics 365",
    entries: [
      { version: "3.0.1 (Dynamics 365 CE Apps Solution)", date: "02-09-2024", text: "Fixed duplicate analytics rule query", contentTypes: [] },
      { version: "3.0.0", date: "24-09-2024", text: "Fixed Data Connector Title", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Dynatrace",
    entries: [
      { version: "3.0.2", date: "03-05-2024", text: "Repackaged for parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "18-01-2024", text: "Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR,", contentTypes: [] },
      { version: "3.0.0", date: "16-10-2023", text: "Enabled new api paging mode on Data Connector to fix issues related to polling Dynatrace REST API's with a large number of results.", contentTypes: ["Data Connector"] },
      { version: "2.0.0", date: "18-10-2022", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Egress Defend",
    entries: [
      { version: "3.0.0", date: "02-08-2023", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Egress Iris",
    entries: [
      { version: "3.0.0", date: "17-04-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Endace",
    entries: [
      { version: "3.0.0", date: "30-06-2025", text: "Initial Release", contentTypes: [] },
    ],
  },
  {
    name: "Endpoint Threat Protection Essentials",
    entries: [
      { version: "3.0.5", date: "18-11-2024", text: "Removed the broken URL in Analytic Rule and Hunting query", contentTypes: ["Analytic Rule","Hunting Query"] },
      { version: "3.0.4", date: "10-06-2024", text: "Added entityMappings and added missing AMA DC reference in Analytical Rules and Hunting Queries", contentTypes: ["Analytic Rule","Hunting Query"] },
      { version: "3.0.3", date: "11-03-2024", text: "Added few Hunting Queries to detect Endpoint Threats", contentTypes: ["Hunting Query"] },
      { version: "3.0.2", date: "21-02-2024", text: "Tagged for dependent solutions for deployment", contentTypes: [] },
      { version: "3.0.1", date: "29-01-2024", text: "Added subTechniques in Template", contentTypes: [] },
      { version: "3.0.0", date: "25-10-2023", text: "Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR", contentTypes: [] },
    ],
  },
  {
    name: "Ermes Browser Security",
    entries: [
      { version: "3.1.0", date: "12-12-2025", text: "Added custom API URL support and LogData field with additional event details", contentTypes: [] },
      { version: "3.0.3", date: "19-02-2024", text: "Updated _solutionVersion to dataConnectorCCPVersion.", contentTypes: [] },
      { version: "3.0.3", date: "19-02-2024", text: "Removed grant_type and added the Solution version to the query parameters", contentTypes: [] },
      { version: "3.0.2", date: "23-01-2024", text: "Updated paging type in CCP Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "28-11-2023", text: "Updated CCP Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "29-09-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "ESET Protect Platform",
    entries: [
      { version: "3.1.1", date: "25-04-2025", text: "Add the location parameter to ARM template and update the email address.", contentTypes: [] },
      { version: "3.1.0", date: "06-02-2025", text: "Updated Data Connector FunctionApp code to work with old param and new", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "04-11-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "ESETPROTECT",
    entries: [
      { version: "3.0.0", date: "19-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Exabeam Advanced Analytics",
    entries: [
      { version: "3.0.2", date: "02-01-2025", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "27-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "24-07-2023", text: "Corrected the links in the solution.", contentTypes: [] },
    ],
  },
  {
    name: "ExtraHop",
    entries: [
      { version: "3.0.2", date: "20-03-2026", text: "Add Log Ingestion API Support.", contentTypes: [] },
      { version: "3.0.1", date: "04-06-2025", text: "Updated Parser and Workbook to fix issue.", contentTypes: ["Workbook","Parser"] },
      { version: "3.0.0", date: "19-03-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "ExtraHop Reveal(x)",
    entries: [
      { version: "3.0.1", date: "11-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "13-09-2023", text: "Addition of new ExtraHop Reveal(x) AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "F5 Networks",
    entries: [
      { version: "3.0.1", date: "11-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "29-09-2023", text: "Addition of new F5 Networks AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "FalconFriday",
    entries: [
      { version: "3.0.0", date: "24-06-2024", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID and Added missing AMA Data Connector reference in Analytic rules.", contentTypes: ["Analytic Rule","Data Connector"] },
    ],
  },
  {
    name: "Feedly",
    entries: [
      { version: "3.0.4", date: "16-02-2026", text: "Migrate to CCF connector", contentTypes: [] },
      { version: "3.0.3", date: "28-11-2023", text: "Added missing python packages to the Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "10-11-2023", text: "Fixed the app service plan", contentTypes: [] },
      { version: "3.0.1", date: "25-10-2023", text: "Fixed the runtime of the functionapp for the Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "17-08-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "FireEye Network Security",
    entries: [
      { version: "3.0.2", date: "21-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "10-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "01-09-2023", text: "Addition of new FireEye Network Security AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Flare",
    entries: [
      { version: "3.0.0", date: "26-12-2025", text: "Added new CFF Data Connector for this solution", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Forcepoint CASB",
    entries: [
      { version: "3.0.2", date: "27-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "15-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "31-08-2023", text: "Addition of new Forcepoint CASB AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Forcepoint CSG",
    entries: [
      { version: "3.0.3", date: "19-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "15-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "19-12-2023", text: "Workbook moved from standalone to solution and repackage", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "11-09-2023", text: "Addition of new Forcepoint CSG AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Forcepoint NGFW",
    entries: [
      { version: "3.0.2", date: "19-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "15-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "29-08-2023", text: "Addition of new Forcepoint NGFW AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Forescout (Legacy)",
    entries: [
      { version: "3.0.0", date: "20-06-2024", text: "Update in description changes", contentTypes: [] },
    ],
  },
  {
    name: "Forescout eyeInspect for OT Security",
    entries: [
      { version: "3.0.0", date: "14-07-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Forescout Host Property Monitor",
    alias: "ForescoutHostPropertyMonitor",
    entries: [
      { version: "3.0.0", date: "18-02-2025", text: "Added new Workbook Forescout Host Property Monitor Workbook.", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "18-02-2025", text: "Changes to Analytic Rules and Playbook corresponding to Customer table changes replaced HTTP Data Collector API with Log Ingestion API.", contentTypes: ["Analytic Rule","Playbook"] },
      { version: "2.0.1", date: "26-05-2022", text: "Updated Support details from Microsoft to Forescout.", contentTypes: [] },
      { version: "2.0.0", date: "05-11-2023", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "ForgeRock Common Audit for CEF",
    entries: [
      { version: "3.0.0", date: "01-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "2.0.0", date: "06-05-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Fortinet FortiGate Next-Generation Firewall connector for Microsoft Sentinel",
    entries: [
      { version: "3.0.9", date: "02-09-2025", text: "Update Fortinetfortigate Playbook fix", contentTypes: ["Playbook"] },
      { version: "3.0.8", date: "26-02-2025", text: "Playbook functionApp code change", contentTypes: ["Playbook"] },
      { version: "3.0.7", date: "11-11-2024", text: "Removed Deprecated data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.6", date: "22-08-2024", text: "Deprecated data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "05-04-2024", text: "Workbook queries are optimized to fix timeout issues", contentTypes: ["Workbook"] },
      { version: "3.0.4", date: "29-01-2024", text: "Classic app insights to Log analytics", contentTypes: [] },
      { version: "3.0.3", date: "07-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
      { version: "3.0.2", date: "10-08-2023", text: "Added the missing userAssignedIdentities field for UserAssigned type in the Playbooks", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "21-07-2023", text: "Updated the description in the solution", contentTypes: [] },
      { version: "3.0.0", date: "11-07-2023", text: "Updated the title, logo and the description in the solution", contentTypes: [] },
    ],
  },
  {
    name: "Fortinet FortiNDR Cloud",
    entries: [
      { version: "3.0.3", date: "05-05-2025", text: "Use Flex Consumption plan to hold Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "30-09-2024", text: "Show mitre attack ids and link to detection rule page", contentTypes: [] },
      { version: "3.0.1", date: "31-05-2024", text: "Replace Metastream with FortiNDR Cloud API", contentTypes: [] },
      { version: "3.0.0", date: "29-02-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Fortinet FortiWeb Cloud WAF-as-a-Service connector for Microsoft Sentinel",
    entries: [
      { version: "3.0.3", date: "10-12-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "30-04-2024", text: "Repackaged for parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "26-02-2024", text: "Addition of new Fortinet FortiWeb Cloud WAF AMA Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "11-07-2023", text: "Updated the title and the description of the solution", contentTypes: [] },
    ],
  },
  {
    name: "Garrison ULTRA",
    entries: [
      { version: "3.0.0", date: "22-11-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "GDPR Compliance & Data Security",
    entries: [
      { version: "3.0.2", date: "15-12-2025", text: "Update the Workbook to include support for additional assets in the Watchlist.", contentTypes: ["Workbook"] },
      { version: "3.0.1", date: "18-11-2025", text: "Fixing Issue with Defender Portal", contentTypes: [] },
      { version: "3.0.0", date: "08-10-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Gigamon Connector",
    entries: [
      { version: "3.0.1", date: "19-02-2026", text: "CCF Push Connector.", contentTypes: [] },
      { version: "3.0.0", date: "25-10-2023", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Git Hub",
    alias: "GitHub",
    entries: [
      { version: "3.1.4", date: "19-03-2026", text: "Fix NRT 2FA rule for new parser format.", contentTypes: ["Parser"] },
      { version: "3.1.3", date: "29-01-2026", text: "Promoted GitHub Enterprise Cloud Audit Log CCF connector from Public Preview to GA.", contentTypes: [] },
      { version: "3.1.2", date: "24-11-2025", text: "Added clarity to Github Enterprise Audit CCF connector definition to use API URL.", contentTypes: [] },
      { version: "3.1.1", date: "13-11-2025", text: "Fixed URL handling for GitHub Enterprise Audit CCF connector.", contentTypes: [] },
      { version: "3.1.0", date: "05-11-2025", text: "Updated Github Enterprise Audit CCF connector to use full URL instead of enterprise name.", contentTypes: [] },
      { version: "3.0.9", date: "05-09-2025", text: "Enhancements to user guidance for connecting GitHub Enterprise audit logs connector", contentTypes: [] },
      { version: "3.0.8", date: "26-08-2025", text: "Removed deprecated tag from webhook connector.", contentTypes: [] },
      { version: "3.0.7", date: "19-06-2025", text: "Introducing a new CCF-based GitHub Enterprise Audit connector to replace the CLV1 connector", contentTypes: [] },
      { version: "3.0.6", date: "26-04-2024", text: "Repackaged for fix on parser in maintemplate to have old parsername and parentid.", contentTypes: ["Parser"] },
      { version: "3.0.5", date: "18-04-2024", text: "Repackaged to fix parser issue.", contentTypes: ["Parser"] },
      { version: "3.0.4", date: "04-04-2024", text: "Updated Entity Mappings in Analytic Rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.3", date: "31-01-2024", text: "Updated the solution to fix Analytic Rules deployment issue.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "06-11-2023", text: "Updated the Workbook name to resolve the issue of multiple keywords.", contentTypes: ["Workbook"] },
      { version: "3.0.1", date: "22-08-2023", text: "Modified GitHubWorkbook to add new features (a.Filtering by organizations, b.Filtering by repository topics).", contentTypes: [] },
      { version: "3.0.0", date: "17-07-2023", text: "Data Connectors description updated & Code Enhancements added for Workbooks.", contentTypes: ["Data Connector","Workbook"] },
    ],
  },
  {
    name: "GitLab",
    entries: [
      { version: "3.0.2", date: "12-12-2024", text: "Removed Deprecated Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "24-07-2023", text: "Deprecated data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "07-11-2023", text: "Modifying text as there is rebranding from Azure Active Directory to Microsoft Entra ID", contentTypes: [] },
    ],
  },
  {
    name: "Global Secure Access",
    entries: [
      { version: "3.0.4", date: "15-04-2026", text: "Updated workbooks to support the new Entra traffic type; Fixed regex in GSA - TI URL Entity analytic rule for correct URL indicator matching", contentTypes: ["Analytic Rule","Workbook"] },
      { version: "3.0.3", date: "25-02-2026", text: "Modified the query period for the Analytic Rule: [GSA - Detect Abnormal Deny Rate for Source to Destination IP]", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "04-02-2026", text: "Added new Analytic Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "16-09-2025", text: "Made an update to the logic of the Abnormal Port-to-Protocol Analytic Rule", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "01-08-2025", text: "Updates to the workbook to improve the clarity and consistency of titles for visualizations", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "Google Apigee",
    entries: [
      { version: "3.1.1", date: "20-08-2025", text: "Moving Google Apigee CCF Data Connector to GA", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "20-05-2025", text: "Migrated the Function app connector to CCF Data Connector and Updated the Parser", contentTypes: ["Data Connector","Parser"] },
      { version: "3.1.0", date: "28-02-2025", text: "Added new CCP Data Connector to the Solution", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "05-09-2024", text: "Updated the python runtime version to 3.11 in Data Connector Function APP", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Google Cloud Platform Audit Logs",
    entries: [
      { version: "3.0.2", date: "19-01-2026", text: "Added new GCP security Analytic Rules and Hunting Queries", contentTypes: ["Analytic Rule","Hunting Query"] },
      { version: "3.0.1", date: "28-04-2025", text: "Updated Data Connector definition file and fixed overlapping collector issue.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "15-01-2024", text: "Created CCP Package", contentTypes: [] },
    ],
  },
  {
    name: "Google Cloud Platform CDN",
    alias: "GoogleCloudPlatformCDN",
    entries: [
      { version: "3.0.1", date: "13-08-2025", text: "Google Cloud Platform CDN CCF Connector moving to GA.", contentTypes: [] },
      { version: "3.0.0", date: "20-03-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Google Cloud Platform Cloud Monitoring",
    entries: [
      { version: "3.0.3", date: "21-01-2026", text: "Updated Data Connector to support dynamic Redirect URI", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "26-08-2025", text: "Moving Google Cloud Platform Cloud Monitoring CCF Data Connector to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "07-07-2025", text: "Migrated the Function app connector to new CCF Data Connector - *Google Cloud Platform Cloud Monitoring* and updated Parser.", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.0", date: "05-09-2024", text: "Updated the python runtime version to 3.11 in Function App Data Connector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Google Cloud Platform Cloud Run",
    entries: [
      { version: "3.0.1", date: "02-09-2025", text: "GCP Cloud Run CCF Conector moving to GA", contentTypes: [] },
      { version: "3.0.0", date: "14-07-2025", text: "Initial Solution Release and Added new CCF Data Connector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Google Cloud Platform Compute Engine",
    entries: [
      { version: "3.0.1", date: "28-08-2025", text: "Moving Google Cloud Platform Compute Engine CCF Data Connector to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "17-07-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Google Cloud Platform DNS",
    alias: "GoogleCloudPlatformDNS",
    entries: [
      { version: "3.0.5", date: "29-07-2025", text: "Removed Deprecated Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "26-06-2025", text: "Moving CCF Connector - *Google Cloud Platform DNS* from Public preview to GA.", contentTypes: [] },
      { version: "3.0.3", date: "09-05-2025", text: "Implemented Standard table Functionality to CCF Connector - *Google Cloud Platform DNS*.", contentTypes: [] },
      { version: "3.0.2", date: "11-02-2025", text: "Migrated the Function app connector to CCP Data Connctor and Updated Parser.", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "10-09-2024", text: "Repackaged solution to add existing Parser.", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "04-09-2024", text: "Updated the python runtime version to 3.11 Function app Data Connector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Google Cloud Platform Firewall Logs",
    entries: [
      { version: "3.0.1", date: "28-05-2025", text: "Updated Data Connector to add support for multiple collectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "19-11-2024", text: "Initial Solution release", contentTypes: [] },
    ],
  },
  {
    name: "Google Cloud Platform IAM",
    alias: "GoogleCloudPlatformIAM",
    entries: [
      { version: "3.0.7", date: "28-08-2025", text: "Improved type handling in the parser query by explicitly converting certain fields to bool and datetime.", contentTypes: ["Parser"] },
      { version: "3.0.6", date: "31-07-2025", text: "Removed deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "27-06-2025", text: "GoogleCloudPlatformIAM CCF Data Connector moving to GA", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "13-06-2025", text: "Updated Standard Table configuration in CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "28-05-2025", text: "Implementation of Standard Table functionality to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "18-02-2025", text: "Migrated the Function app connector to CCP Data Connctor and Updated Parser.", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "10-09-2024", text: "Repackaged solution to add existing Parser.", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "04-09-2024", text: "Updated the python runtime version to 3.11.", contentTypes: [] },
    ],
  },
  {
    name: "Google Cloud Platform IDS",
    alias: "GoogleCloudPlatformIDS",
    entries: [
      { version: "3.0.1", date: "13-08-2025", text: "Google Cloud Platform IDS CCF Data Connector moving to GA", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "11-03-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Google Cloud Platform Load Balancer Logs",
    entries: [
      { version: "3.0.1", date: "28-03-2025", text: "Moving Solution from Public Preview to Globally available.", contentTypes: [] },
      { version: "3.0.0", date: "14-02-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Google Cloud Platform NAT",
    alias: "GoogleCloudPlatformNAT",
    entries: [
      { version: "3.0.1", date: "03-09-2025", text: "Google Cloud Platform NAT CCF Data Connector moving to GA", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "17-07-2025", text: "Initial Solution Release.", contentTypes: [] },
      { version: "3.0.0", date: "17-07-2025", text: "Added new CCF Connector - *GCPNATLogsCCPDefinition.*", contentTypes: [] },
    ],
  },
  {
    name: "Google Cloud Platform Resource Manager",
    alias: "GoogleCloudPlatformResourceManager",
    entries: [
      { version: "3.0.1", date: "02-09-2025", text: "GCP Resource Manager CCF Conector moving to GA", contentTypes: [] },
      { version: "3.0.0", date: "18-06-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Google Cloud Platform Security Command Center",
    entries: [
      { version: "3.0.7", date: "11-11-2025", text: "Add New Analytic Rules and Hunting Queries", contentTypes: ["Analytic Rule","Hunting Query"] },
      { version: "3.0.6", date: "12-11-2024", text: "Modified datatype query for Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "16-05-2024", text: "Modification in Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "28-02-2024", text: "Initial solution release", contentTypes: [] },
    ],
  },
  {
    name: "Google Cloud Platform SQL",
    alias: "GoogleCloudPlatformSQL",
    entries: [
      { version: "3.0.1", date: "02-09-2025", text: "GCP Cloud SQL CCF Conector moving to GA", contentTypes: [] },
      { version: "3.0.0", date: "16-07-2025", text: "Initial Solution Release and Added new CCF Data Connector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Google Cloud Platform VPC Flow Logs",
    entries: [
      { version: "3.0.1", date: "26-06-2025", text: "GCP Pub/Sub VPC Flow Logs CCF Connector moving to GA.", contentTypes: [] },
      { version: "3.0.0", date: "26-02-2025", text: "Initial Solution Release.", contentTypes: [] },
      { version: "3.0.0", date: "26-02-2025", text: "New CCP Data Connector 'GCP Pub/Sub VPC Flow Logs'.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Google Kubernetes Engine",
    entries: [
      { version: "3.0.2", date: "27-02-2026", text: "Update Google Kubernetes Engine CCF Data Connector with GA Public Documentation, updated GCP Grid to have Stream information.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "06-10-2025", text: "Google Kubernetes Engine CCF Data Connector Moving to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "08-04-2025", text: "Initial Solution Release.", contentTypes: [] },
      { version: "3.0.0", date: "08-04-2025", text: "New CCF Data Connector 'Google Kubernetes Engine'.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Google Threat Intelligence",
    entries: [
      { version: "3.2.2", date: "02-12-2025", text: "- Included new Analytics Rules and Hunting Queries to improve detection capabilities and support proactive investigation.", contentTypes: ["Hunting Query"] },
      { version: "3.2.2", date: "02-12-2025", text: "- Filtering threat lists", contentTypes: [] },
      { version: "3.2.2", date: "02-12-2025", text: "- Migrating to Upload STIX Objects", contentTypes: [] },
      { version: "3.2.1", date: "25-08-2025", text: "Fix IoC Stream ingestion bug for results with more than 40 items due to a cursor iteration error.", contentTypes: [] },
      { version: "3.2.0", date: "20-05-2025", text: "New Playbook added *IoC Stream Threat Intelligence*.", contentTypes: ["Playbook"] },
      { version: "3.2.0", date: "20-05-2025", text: "Added x-tool header in Playbook Customer Connector.", contentTypes: ["Playbook"] },
      { version: "3.1.0", date: "29-01-2025", text: "New *Threat Intelligence Ingestion* Playbook added.", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "05-12-2024", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Google Workspace Reports",
    alias: "GoogleWorkspaceReports",
    entries: [
      { version: "3.0.4", date: "26-03-2026", text: "Updated Data Connector Configuration steps", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "21-01-2026", text: "Updated Data Connector to support dynamic Redirect URI", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "26-08-2025", text: "Moving GoogleWorkspaceReports CCF Data Connector to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "14-07-2025", text: "Added new CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "06-09-2024", text: "Updated the python runtime version to 3.11.", contentTypes: [] },
    ],
  },
  {
    name: "GreyNoise Threat Intelligence",
    alias: "GreyNoiseThreatIntelligence",
    entries: [
      { version: "3.1.0", date: "12-03-2026", text: "Updated to use GreyNoise Python SDK v3.0.3, updated Data Connector instructions, Fixed python module mismatches, bumped Az Functions Runtime", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "17-07-2025", text: "Updated to use GreyNoise Python SDK v3.0.1, use new Threat Intel API, updated requirements.txt, updated Data Connector instructions", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "30-05-2024", text: "Added missing AMA Data Connector reference in Analytic rules", contentTypes: ["Analytic Rule","Data Connector"] },
      { version: "3.0.1", date: "29-11-2023", text: "Updated the Data Connector Instructions, Fixed a Data Connector bug with Benign Indicator Ingest", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "21-09-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Halcyon",
    entries: [
      { version: "3.0.0", date: "12-09-2025", text: "Initial Solution release", contentTypes: [] },
    ],
  },
  {
    name: "HIPAA Compliance",
    entries: [
      { version: "3.0.0", date: "22-10-2025", text: "Initial Solution release", contentTypes: [] },
    ],
  },
  {
    name: "Holm Security",
    alias: "HolmSecurity",
    entries: [
      { version: "3.0.1", date: "05-10-2023", text: "Minor fixes", contentTypes: [] },
      { version: "3.0.0", date: "28-09-2023", text: "Repackaged with V3", contentTypes: [] },
      { version: "2.0.0", date: "17-02-2022", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "HYAS",
    entries: [
      { version: "3.0.0", date: "21-02-2024", text: "Renamed older Playbooks added new Playbooks", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "HYAS Protect",
    entries: [
      { version: "3.0.2", date: "04-06-2024", text: "Updated Parser and Data connector", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.1", date: "23-04-2024", text: "Updated Solution version for Partner Center policy regulations", contentTypes: [] },
      { version: "3.0.0", date: "22-09-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "iboss",
    entries: [
      { version: "3.1.2", date: "07-01-2025", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.1.1", date: "18-09-2024", text: "Updated AMA and legacy OMS connector to use new iboss field", contentTypes: [] },
      { version: "3.1.0", date: "05-09-2024", text: "Updated AMA connector with iboss specific instructions", contentTypes: [] },
      { version: "3.0.1", date: "12-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "20-09-2023", text: "Addition of new Iboss AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Illumio Core",
    entries: [
      { version: "3.0.3", date: "27-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "15-07-2024", text: "Deprecating data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "12-09-2023", text: "Addition of new Illumio Core AMA Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "24-07-2023", text: "Corrected the links in the solution.", contentTypes: [] },
    ],
  },
  {
    name: "Illumio Insight",
    entries: [
      { version: "3.3.2", date: "29-09-2025", text: "Dsecription , Instruction changes for CCF Data Connector , changing ps script to change desriptions in UiDefnition", contentTypes: ["Data Connector"] },
      { version: "3.3.1", date: "12-09-2025", text: "Adding iIlumio InsightsSummary CCF Data Connector to Illumio Insights Solution, changing URL of Illumio Resources to gw.console.illum.io", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "10-08-2025", text: "Corrected the links in the solution.", contentTypes: [] },
    ],
  },
  {
    name: "Illumio SaaS",
    alias: "IllumioSaaS",
    entries: [
      { version: "3.4.1", date: "13-03-2026", text: "Update function app to use Managed Identity.", contentTypes: [] },
      { version: "3.4.0", date: "03-02-2025", text: "Added 2 new Parser.", contentTypes: ["Parser"] },
      { version: "3.4.0", date: "03-02-2025", text: "Added new connectorid SyslogAma to Analytic Rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.4.0", date: "03-02-2025", text: "Resolved Playbook deployment error.", contentTypes: ["Playbook"] },
      { version: "3.4.0", date: "03-02-2025", text: "Made minor visualization changes to Workbooks.", contentTypes: ["Workbook"] },
      { version: "3.3.0", date: "12-12-2024", text: "Version fixed 3.2.3 to 3.3.0.", contentTypes: [] },
      { version: "3.2.2", date: "24-10-2024", text: "Bump up package to 3.2.2 version.", contentTypes: [] },
      { version: "3.2.0", date: "01-10-2024", text: "Added new Analytic Rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.1.0", date: "04-08-2024", text: "Solution packaged with Modified logo link.", contentTypes: [] },
      { version: "3.0.0", date: "13-05-2024", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Illusive Platform",
    entries: [
      { version: "3.0.1", date: "12-07-2024", text: "Deprecating data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "13-09-2023", text: "Addition of new Illusive Platform AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Imperva Cloud WAF",
    alias: "ImpervaCloudWAF",
    entries: [
      { version: "3.1.1", date: "10-04-2026", text: "Add \"CsvEscapeMode\": \"NoEscape\" to prevent logs with embedded JSON from being dropped during ingestion", contentTypes: [] },
      { version: "3.1.0", date: "30-03-2026", text: "Promoted the Imperva Cloud WAF CCF connector to Public Preview", contentTypes: [] },
      { version: "3.0.2", date: "06-06-2025", text: "Migrated the Function app connector to CCF Data connector and updated Parser", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.1", date: "07-11-2024", text: "Added existing *Parser* into the solution", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "22-08-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
    ],
  },
  {
    name: "Infoblox",
    entries: [
      { version: "3.0.2", date: "19-06-2025", text: "Added flags for Asset, Indicator, Event and Comment in InfobloxSOCGetInsightDetails playbook. Updated Workbook, Parser and Analytic rule.", contentTypes: ["Analytic Rule","Playbook","Workbook","Parser"] },
      { version: "3.0.1", date: "07-11-2024", text: "Bug fix in Infoblox_Workbook Workbook", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "15-07-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Infoblox Cloud Data Connector",
    entries: [
      { version: "3.0.5", date: "06-01-2025", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "12-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "30-04-2024", text: "Updated package for parser issue fix while reinstall", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "05-03-2024", text: "Updated InfobloxCDC parser to manually parse with extract() rather than dynamically due to slowness", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "11-09-2023", text: "Addition of new Infoblox Cloud Data Connector AMA Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "01-08-2023", text: "Updated Infoblox logo, Analytic Rules Optimization updates. 5 new rules,Playbooks 11 new playbooks", contentTypes: ["Analytic Rule","Playbook"] },
      { version: "2.0.10", date: "01-06-2023", text: "Bug fixes, Documentation updates", contentTypes: [] },
      { version: "1.0.0", date: "01-04-2021", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Infoblox NIOS",
    entries: [
      { version: "3.0.5", date: "07-10-2025", text: "Expanded exclusion lists in Infoblox_allotherdhcpdTypes and Infoblox_dhcpother parsers to filter additional log types.", contentTypes: ["Parser"] },
      { version: "3.0.4", date: "17-12-2024", text: "Removed Deprecated Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "01-08-2024", text: "Update Parser as part of Syslog migration", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "16-08-2023", text: "Updated the solution to include a default value for watchlist1-id", contentTypes: [] },
      { version: "3.0.1", date: "24-07-2023", text: "Updated ApiVersion for Watchlist", contentTypes: [] },
      { version: "3.0.0", date: "11-07-2023", text: "Updated support information for this solution", contentTypes: [] },
    ],
  },
  {
    name: "Infoblox SOC Insights",
    entries: [
      { version: "3.0.2", date: "28-06-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "03-05-2024", text: "Repackaged for parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "04-03-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Integration for Atlassian Beacon",
    entries: [
      { version: "3.0.3", date: "04-03-2024", text: "Updated title to comply with Atlassian", contentTypes: [] },
      { version: "3.0.2", date: "23-01-2024", text: "Replaced Atlassian Beacon Logo with Official Azure Sentinel Logo", contentTypes: [] },
      { version: "3.0.1", date: "04-12-2023", text: "Atlassian Beacon Payload update in Integration", contentTypes: [] },
      { version: "3.0.0", date: "24-10-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Intel471",
    entries: [
      { version: "3.0.0", date: "02-12-2025", text: "Added Playbook 'Intel 471 Malware Intelligence to Graph Security' using new upload indicators API to Intel 471 Solution.", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "02-12-2025", text: "Added the Verity471 backend in the Intel471 solution for ingesting malware indicators.", contentTypes: [] },
    ],
  },
  {
    name: "IONIX",
    entries: [
      { version: "3.1.0", date: "16-02-2026", text: "Added new CCF RestApiPoller data connector (recommended). Automatic daily polling from IONIX API. Old push connector marked as deprecated - will be removed June 2026. Updated workbook and analytics rule with id_s deduplication.", contentTypes: ["Data Connector","Workbook"] },
      { version: "3.0.0", date: "20-09-2023", text: "A UI-only update as part of a re-branding from \"Cyberpion\" to \"IONIX\" (no change to core functionality) \\|v1.0.1", contentTypes: [] },
    ],
  },
  {
    name: "IoT/OT Threat Monitoring with Defender for IoT",
    alias: "IoTOTThreatMonitoringwithDefenderforIoT",
    entries: [
      { version: "3.0.2", date: "29-01-2025", text: "Corrected Entity Mappings structure of Analytic Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "10-01-2025", text: "Reverted Entity Mappings of Analytic Rules to earlier version", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "30-11-2023", text: "Added new Entity Mapping to Analytic Rules", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "IPinfo",
    entries: [
      { version: "3.0.5", date: "21-03-2026", text: "Modified zip files to resolve dependency issues", contentTypes: [] },
      { version: "3.0.4", date: "13-03-2026", text: "Updated zip files for all connectors to fix the folder structure", contentTypes: [] },
      { version: "3.0.3", date: "03-03-2026", text: "Added 3 New Data Connectors i.e. Core, Plus and Residential Proxy", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "03-02-2026", text: "Update Data Connector and packaging refresh to resolve Marketplace validation issues", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "19-08-2024", text: "IPinfo New Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "10-07-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "ISC Bind",
    entries: [
      { version: "3.0.2", date: "27-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "24-07-2024", text: "Deprecated Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "09-10-2023", text: "Corrected the links in the solution", contentTypes: [] },
    ],
  },
  {
    name: "Island",
    entries: [
      { version: "3.2.0", date: "05-04-2026", text: "Reverted V1 connector names and descriptions to original. Updated V2 connector title, description, prerequisites, and configuration text. Removed placeholder URL from V2 connector.", contentTypes: [] },
      { version: "3.1.0", date: "16-02-2026", text: "Added Island V2 CCP Data Connector with DCR-based ingestion for user events, admin events, and system events. Marked V1 connectors as legacy.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "28-07-2023", text: "Added API Url field to Data Connectors so all regions can be supported", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Ivanti Unified Endpoint Management",
    entries: [
      { version: "3.0.1", date: "27-12-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "24-07-2024", text: "Deprecated Data Connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Jamf Protect",
    entries: [
      { version: "3.3.0", date: "02-09-2025", text: "Adding support for newly added event types in Telemetry, TCC_MODIFY,NETWORK_CONNECT, PTY_GRANT, PTY_CLOSE and some enhancements to mount and process object mapping.", contentTypes: [] },
      { version: "3.2.4", date: "27-03-2025", text: "Resolving issues related to the new Push Connector and the DCE/DCRs. Removing support for Telemetry Legacy in this newer Push Connector. Removing Hunting Queries as they were not relevant anymore. Updated Analytic Rules and Workbooks to work with the updated parsers, the single parser got split up to be more useful to customers that only use certain features.", contentTypes: ["Analytic Rule","Hunting Query","Workbook","Parser"] },
      { version: "3.2.1", date: "24-02-2025", text: "Adding support for the newly released gatekeeper_user_override event and removing totalRetentionInDays from the Push Connector.", contentTypes: [] },
      { version: "3.2.0", date: "04-02-2025", text: "Added new CCP Data Connector to the Solution.", contentTypes: ["Data Connector"] },
      { version: "3.1.1", date: "30-04-2024", text: "Repackaged for parser issue fix while reinstall.", contentTypes: ["Parser"] },
      { version: "3.1.0", date: "12-01-2024", text: "Improved data normalization in the parser JamfProtect, ParentProcess is better mapped now, productVersion has been added and more. Added new macOS Hunting Queries including recent malware IOCs.", contentTypes: ["Hunting Query","Parser"] },
      { version: "3.0.1", date: "05-12-2023", text: "Minor tweak to parser related to signerType", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "20-10-2023", text: "Added Parser for parsing jamfprotect_CL raw logs.", contentTypes: ["Parser"] },
      { version: "2.1.1", date: "03-03-2023", text: "Updating Analytic Rules to include MITRE Tactics and Techniques.", contentTypes: ["Analytic Rule"] },
      { version: "2.1.0", date: "10-02-2023", text: "Added Data Connector for monitoring logs", contentTypes: ["Data Connector"] },
      { version: "2.0.0", date: "12-10-2022", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "JBoss",
    entries: [
      { version: "3.0.1", date: "31-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "13-08-2024", text: "Deprecating data connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Joe Sandbox",
    alias: "JoeSandbox",
    entries: [
      { version: "3.0.0", date: "13-02-2026", text: "Initial Solution Release.", contentTypes: [] },
      { version: "3.0.0", date: "13-02-2026", text: "Removed Manual Deployment Steps.", contentTypes: [] },
    ],
  },
  {
    name: "Juniper IDP",
    alias: "JuniperIDP",
    entries: [
      { version: "3.0.1", date: "31-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "13-08-2024", text: "Deprecating data connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Juniper SRX",
    entries: [
      { version: "3.0.2", date: "18-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "19-07-2024", text: "Deprecated Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "29-08-2023", text: "Modified the Parser to process Zone Details", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "Keeper Security",
    entries: [
      { version: "3.0.1", date: "25-07-2025", text: "Added new Analytic Rules and Workbook", contentTypes: ["Analytic Rule","Workbook"] },
      { version: "3.0.0", date: "11-06-2025", text: "Initial Solution Release with KeeperSecurity Data Connector CCP.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "KnowBe4 Defend",
    entries: [
      { version: "3.0.0", date: "05-02-2026", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "KQL Training",
    entries: [
      { version: "3.0.1", date: "28-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID & MS 365 Defender to MS Defender XDR", contentTypes: [] },
    ],
  },
  {
    name: "LastPass",
    entries: [
      { version: "3.0.0", date: "07-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
    ],
  },
  {
    name: "Legacy IOC based Threat Protection",
    entries: [
      { version: "3.0.5", date: "03-06-2024", text: "Added missing AMA Data Connector reference in Hunting Query", contentTypes: ["Hunting Query","Data Connector"] },
      { version: "3.0.4", date: "22-02-2024", text: "Tagged for dependent solutions for deployment", contentTypes: [] },
      { version: "3.0.3", date: "19-12-2023", text: "Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*", contentTypes: [] },
      { version: "3.0.2", date: "12-12-2023", text: "Removed deprecated Analytical Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "07-11-2023", text: "Changes for rebranding from Azure Active Directory to Microsoft Entra ID & Microsoft 365 Defender to Microsoft Defender XDR", contentTypes: [] },
      { version: "3.0.0", date: "19-05-2023", text: "Deprecating outdated IOC Based Analytic Rules", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Lookout",
    entries: [
      { version: "3.0.2", date: "11-03-2026", text: "Updated lastPublishDate across solution metadata and package to 2026-03-11. Cleaned up stale v4.0.0 branches. Resubmission for certification after resolving link discrepancy flagged in Best Practice Test 300.4.1.1. Fixed product branding: updated \"Azure Sentinel\" to \"Microsoft Sentinel\" in workbook descriptions. Fixed DCR transform query error: undefined symbol detections corrected to smishing_alert.detections. Aligned data connector version from 1.0.0 to 3.0.2 for consistent version tracking across all solution components. Updated all template version references from 3.0.1 to 3.0.2 in package. Added Parsers and Notebooks steps to the install wizard (createUiDefinition.json) for improved discoverability during solution deployment.", contentTypes: ["Data Connector","Workbook","Parser"] },
      { version: "3.0.1", date: "18-12-2025", text: "Parser v3.1.0 with support for Streaming/Polling/REST API field structures. Enhanced workbooks and dashboards. Analytic Rules updated with MITRE ATT&CK mobile tactics. Added Jupyter Notebooks for threat hunting: Mobile Malware, Smishing, Device Compliance, and Audit/Insider Threat analysis.", contentTypes: ["Analytic Rule","Workbook","Parser"] },
      { version: "3.0.0", date: "07-11-2025", text: "New CCF Connector added to Solution - *Lookout Mobile Threat Detection Connector*.", contentTypes: [] },
    ],
  },
  {
    name: "Lookout Cloud Security Platform for Microsoft Sentinel",
    entries: [
      { version: "3.0.0", date: "05-09-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "2.0.0", date: "20-02-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Lumen Defender Threat Feed",
    entries: [
      { version: "3.2.0", date: "02-03-2026", text: "Deprecated and removed V1.1 Connector. Update V2 data connector for API v3 compatibility: added QUEUED status handling, improved confidence value type conversion for string/integer support, and reordered response handling for new pagination behavior", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "23-10-2025", text: "Update data connector to utilize more frequent TI object updates and improvements to Workbook", contentTypes: ["Data Connector","Workbook"] },
      { version: "3.0.0", date: "09-12-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "MailGuard 365",
    entries: [
      { version: "3.0.0", date: "31-08-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "MailRisk",
    entries: [
      { version: "3.0.0", date: "13-02-2026", text: "Migrate connector to CCF", contentTypes: [] },
      { version: "3.0.0", date: "13-02-2026", text: "Fix wrong syntax on extracting parameters in mainTemplate.json", contentTypes: [] },
    ],
  },
  {
    name: "Malware Protection Essentials",
    entries: [
      { version: "3.0.1", date: "18-10-2024", text: "Analytical Rule [Process Creation with Suspicious CommandLine Arguments]", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "21-12-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "MarkLogic Audit",
    alias: "MarkLogicAudit",
    entries: [
      { version: "3.0.1", date: "02-01-2025", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "12-08-2024", text: "Deprecating data connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Maturity Model for Event Log Management (M-2131)",
    alias: "MaturityModelForEventLogManagementM2131",
    entries: [
      { version: "3.0.3", date: "26-09-2025", text: "Updated the broken metrics in the workbook", contentTypes: ["Workbook"] },
      { version: "3.0.2", date: "31-01-2024", text: "Updated the solution to fix Analytic Rules deployment issue", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "09-11-2023", text: "Changes for rebranding from Azure Active Directory Identity Protection to Microsoft Entra ID Protection", contentTypes: [] },
      { version: "3.0.0", date: "20-07-2023", text: "Updated Workbook template to remove unused variables.", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "McAfee ePolicy Orchestrator",
    entries: [
      { version: "3.0.2", date: "18-12-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "24-07-2024", text: "Deprecated data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "16-07-2024", text: "Updated Data Connector Description", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "McAfee Network Security Platform",
    entries: [
      { version: "3.0.1", date: "27-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "23-07-2024", text: "Deprecated Data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "mesh Stack",
    alias: "meshStack",
    entries: [
      { version: "3.0.1", date: "10-04-2026", text: "Updated publisherId in solution metadata to address best practice validation", contentTypes: [] },
      { version: "3.0.0", date: "15-12-2025", text: "Initial release", contentTypes: [] },
    ],
  },
  {
    name: "Microsoft 365",
    entries: [
      { version: "3.0.5", date: "04-02-2025", text: "Updated Analytic Rule MailItemsAccessedTimeSeries.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "27-08-2024", text: "Updated Analytic Rule for Same names", contentTypes: ["Analytic Rule"] },
      { version: "3.0.3", date: "12-06-2024", text: "Updated Analytic Rule for Bug Fixes ExternalUserAddedRemovedInTeams.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "09-05-2024", text: "Updated Analytic Rule to get expected result and Entity Mapping exchange_auditlogdisabled.yaml and fixed typo description in Analytic Rules ExternalUserAddedRemovedInTeams.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "04-01-2024", text: "Updated Analytic Rules, Hunting Queries and Workbook for Bug Fixes", contentTypes: ["Analytic Rule","Hunting Query","Workbook"] },
      { version: "3.0.0", date: "08-08-2023", text: "Renamed Data Connector in the solution to Microsoft 365 (formerly, Office 365) so that the naming aligns in Content Hub and Data Connector gallery.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "08-08-2023", text: "Updated Hunting Queries to have descriptions that meet the 255 characters limit.", contentTypes: ["Hunting Query"] },
    ],
  },
  {
    name: "Microsoft 365 Assets",
    entries: [
      { version: "3.0.0", date: "20-06-2025", text: "Releasing a new Microsoft 365 Asset connector solution in Content Hub and Data Connector gallery.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Microsoft Business Applications",
    entries: [
      { version: "3.2.3", date: "23-02-2026", text: "Updated Dataverse - Activity after failed logons hunting query to use valid Enterprise technique", contentTypes: ["Hunting Query"] },
      { version: "3.2.2", date: "22-04-2025", text: "Updated solution description.", contentTypes: [] },
      { version: "3.2.1", date: "11-04-2025", text: "Move solution and content to GA.Minor analytic rule update.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.0", date: "15-11-2024", text: "Renamed solution from Power Platform to Microsoft Business Applications.Merge Dynamics 365 CE Apps and Dynamics 365 Finance & Operations into a unified solution.New analytics rules, playbooks and hunting queries.Replace Dynamics 365 Finance and Operations function app using Codeless Connector.Retire PPInventory function app.", contentTypes: ["Hunting Query","Playbook"] },
      { version: "3.1.3", date: "12-07-2024", text: "Removal of Power Apps, Power Platform Connectors, Power Platform DLP data connectors. Associated logs are now ingested via Power Platform Admin Activity data connector.Update of analytics rules to utilize PowerPlatfromAdminActivity table.Update data connectors DCR properties.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Microsoft Copilot",
    entries: [
      { version: "3.0.2", date: "02-04-2026", text: "Update Solution and Connector Descriptions.", contentTypes: [] },
      { version: "3.0.2", date: "02-04-2026", text: "Added a Analytic rules, Hunting Queries and Workbook for Microsoft Copilot Activity Monitoring and detection.", contentTypes: ["Analytic Rule","Hunting Query","Workbook"] },
      { version: "3.0.2", date: "02-04-2026", text: "Solution push to GA.", contentTypes: [] },
      { version: "3.0.1", date: "12-12-2025", text: "Update copilot table name from LLMActivity to CopilotActivity.", contentTypes: [] },
      { version: "3.0.0", date: "10-09-2025", text: "Releasing a new Microsoft Copilot connector solution in Content Hub and Data Connector gallery.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Microsoft Defender for Cloud",
    entries: [
      { version: "3.0.3", date: "06-12-2025", text: "Moved MicrosoftDefenderForCloudTenantBased's Data Connector from public preview to Global Availability", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "15-04-2024", text: "Updated Data Connector MicrosoftDefenderForCloudTenantBased's kind as GenericUI", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "03-04-2024", text: "Corrected the standard tier in Data Connector and Updated MicrosoftDefenderForCloudTenantBased.json to support FFX", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "08-11-2023", text: "New Data Connector included", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Microsoft Defender for Cloud Apps",
    entries: [
      { version: "3.0.0", date: "07-04-2025", text: "Updated ConnectivityCriteria Type in Data Connector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Microsoft Defender for Endpoint",
    alias: "MicrosoftDefenderForEndpoint",
    entries: [
      { version: "3.0.6", date: "24-09-2025", text: "Updated MDE Playbooks Instructions to use Microsoft Graph SDK", contentTypes: ["Playbook"] },
      { version: "3.0.5", date: "06-08-2025", text: "Updated MDE Playbooks with newer logic", contentTypes: ["Playbook"] },
      { version: "3.0.4", date: "07-04-2025", text: "Updated ConnectivityCriteria Type in Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "26-07-2024", text: "Updated Analytical Rule for missing TTP", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "08-07-2024", text: "Corrected UI changes in Playbook's metadata", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "24-11-2023", text: "Entities has been mapped for Playbooks", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "17-07-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Microsoft Defender For Identity",
    entries: [
      { version: "3.0.0", date: "07-04-2025", text: "Updated ConnectivityCriteria Type in Data Connector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Microsoft Defender for Office 365",
    entries: [
      { version: "3.0.3", date: "07-04-2025", text: "Updated ConnectivityCriteria Type in Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "24-04-2024", text: "Updated link for Custom Connector redirection in playbooks", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "29-09-2023", text: "1 new Playbook added to the solution", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "11-07-2023", text: "4 new Playbooks added to the solution", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "Microsoft Defender Threat Intelligence",
    entries: [
      { version: "3.0.2", date: "20-09-2025", text: "Updated Playbooks to use managde identity for authentication.", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "01-12-2024", text: "Added Playbooks for enhanced solution workflows.", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "11-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
    ],
  },
  {
    name: "Microsoft Defender XDR",
    entries: [
      { version: "3.0.14", date: "09-02-2026", text: "Added new Hunting Query Punycode chars lookalike domains.yaml.", contentTypes: ["Hunting Query"] },
      { version: "3.0.13", date: "22-01-2026", text: "Updated Defender XDR solution with new Hunting Queries.", contentTypes: ["Hunting Query"] },
      { version: "3.0.12", date: "07-04-2025", text: "Updated ConnectivityCriteria Type in Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.11", date: "16-12-2024", text: "Updated Analytic Rule LocalAdminGroupChanges.yaml.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.11", date: "16-12-2024", text: "Updated Workbook.", contentTypes: ["Workbook"] },
      { version: "3.0.10", date: "25-10-2024", text: "Added New Hunting Queries.", contentTypes: ["Hunting Query"] },
      { version: "3.0.9", date: "20-09-2024", text: "Added New Hunting Queries.", contentTypes: ["Hunting Query"] },
      { version: "3.0.8", date: "10-06-2024", text: "Added missing AMA Data Connector reference in Analytic rules.", contentTypes: ["Analytic Rule","Data Connector"] },
      { version: "3.0.7", date: "29-05-2024", text: "Updated Analytic Rule PossiblePhishingwithCSL&NetworkSession.yaml.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.6", date: "13-05-2024", text: "Updated queried to use Signinlogs table.", contentTypes: [] },
      { version: "3.0.5", date: "06-05-2024", text: "To correct erroneous entity mapping.", contentTypes: [] },
      { version: "3.0.4", date: "08-04-2024", text: "Added in FullName and IPAddress mappings where needed.", contentTypes: [] },
      { version: "3.0.3", date: "21-03-2024", text: "Increased Analytic rule coverage.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "04-12-2023", text: "Added UrlClickEvents datatype to the solution.", contentTypes: [] },
      { version: "3.0.1", date: "12-10-2023", text: "Solution name changed from Microsoft 365 Defender to Microsoft Defender XDR.", contentTypes: [] },
      { version: "3.0.0", date: "26-07-2023", text: "Updated Workbook template to remove unused variables.", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "Microsoft Entra ID",
    entries: [
      { version: "3.3.11", date: "13-04-2026", text: "Added Watchlist ConditionalAccessBenignStatusCodes and updated BypassCondAccessRule analytic rule", contentTypes: ["Analytic Rule"] },
      { version: "3.3.10", date: "12-04-2026", text: "Updated AccountCreatedandDeletedinShortTimeframe analytic rule to extend query period to 7 days, normalize UPN parsing, and use immutable UserId for improved detection accuracy and evasion resistance", contentTypes: ["Analytic Rule"] },
      { version: "3.3.9", date: "23-02-2026", text: "Updated Block-AADUser Incident trigger to fix the permissions for disable user block", contentTypes: [] },
      { version: "3.3.8", date: "06-02-2026", text: "Fixed Broken Links in Analytical Rule.", contentTypes: ["Analytic Rule"] },
      { version: "3.3.7", date: "20-01-2026", text: "Updated Revoke-AADSignInSessions Playbooks Instructions.", contentTypes: ["Playbook"] },
      { version: "3.3.7", date: "20-01-2026", text: "Add Conditional Access Insights Workbook for Microsoft Entra ID.", contentTypes: ["Workbook"] },
      { version: "3.3.6", date: "23-09-2025", text: "Updated Analytical Rule to fix the rule saving issue.", contentTypes: ["Analytic Rule"] },
      { version: "3.3.6", date: "23-09-2025", text: "Removed Preview Designation from Microsoft Entra ID Connector Data Types.", contentTypes: [] },
      { version: "3.3.5", date: "25-07-2025", text: "Updated Entra id Conditional Access (prefix) Analytical Rule", contentTypes: ["Analytic Rule"] },
      { version: "3.3.4", date: "10-07-2025", text: "Updated Analytical Rule NRT_UseraddedtoPrivilgedGroups.yaml and UseraddedtoPrivilgedGroups.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.3.3", date: "03-06-2025", text: "Updates to multiple Playbooks to improve documentation, streamline deployment instructions, and add links to detailed setup steps.", contentTypes: ["Playbook"] },
      { version: "3.3.2", date: "08-05-2025", text: "Removed the IP entity type and its associated field mappings (Address and IPAddress) in *DistribPassCrackAttempt.yaml* Analytic Rule.", contentTypes: ["Analytic Rule"] },
      { version: "3.3.1", date: "08-04-2025", text: "Updated Analytical Rule [Anomalous sign-in location by user account and authenticating application]", contentTypes: ["Analytic Rule"] },
      { version: "3.3.0", date: "28-01-2025", text: "Added new Analytic Rule AzureRBAC to the Solution.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.10", date: "19-12-2024", text: "Updated Analytical Rule MFARejectedbyUser.yaml.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.9", date: "27-08-2024", text: "Updated Analytical Rule for missing TTP.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.8", date: "19-08-2024", text: "Exclude Result Reason \"RoleAssignmentExists\" from Analytic Rule [NRT PIM Elevation Request Rejected].", contentTypes: ["Analytic Rule"] },
      { version: "3.2.7", date: "12-06-2024", text: "Fixed the bugs from Analytic Rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.6", date: "06-06-2024", text: "Successful logon from IP and failure from a different IP fixes.", contentTypes: [] },
      { version: "3.2.5", date: "28-05-2024", text: "Updated Entity mappings and changed description in Analytic Rule.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.4", date: "21-03-2024", text: "Used the make-series operator instead of Make_list.", contentTypes: [] },
      { version: "3.2.3", date: "13-03-2024", text: "Removed uses of BlastRadius from query section of Hunting Queries where it was used incorrectly.", contentTypes: ["Hunting Query"] },
      { version: "3.2.2", date: "13-03-2024", text: "Updated Analytic Rule ExplicitMFADeny.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.1", date: "16-02-2024", text: "Fixed entity mapping of Analytic Rule NRT_NewAppOrServicePrincipalCredential.yaml.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.0", date: "05-02-2024", text: "1 Analytic Rule added PossibleSignInfromAzureBackdoor NRT_NewAppOrServicePrincipalCredential.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.11", date: "17-01-2024", text: "1 Analytic Rule Fixed wrong capitalization for identifier ResourceId.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.10", date: "26-12-2023", text: "1 Analytic Rule Modified by adding \"GroupMembership\" instead of \"Admin\" condition for better extraction of admin accounts from the identity infotable.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.9", date: "28-11-2023", text: "2 Analytic Rules Modified by Adding Entity Mapping to (GuestAccountsAddedinAADGroupsOtherThanTheOnesSpecified.yaml) and Changed timerange of (SigninPasswordSpray.yaml) from 3d to 1d.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.8", date: "21-11-2023", text: "1 Analytic Rules Fixed issue that was causing multiple triggers for the same event.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.7", date: "06-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
      { version: "3.0.6", date: "30-10-2023", text: "1 Data Connector added back in the solution.", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "19-10-2023", text: "1 Analytic Rules updated in the solution (PIMElevationRequestRejected).", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "16-10-2023", text: "1 Analytic Rules got added in the solution (SuspiciousSignInFollowedByMFAModification), modified workbook query to fix duplicate locations for the query.", contentTypes: ["Analytic Rule","Workbook"] },
      { version: "3.0.3", date: "22-09-2023", text: "2 Analytic Rules updated in the solution (PIM Elevation Request Rejected),(NRT Authentication Methods Changed for VIP Users).", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "08-08-2023", text: "1 Analytic Rules updated in the solution (Credential added after admin consented to Application).", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "01-08-2023", text: "Added new Analytic Rule (New onmicrosoft domain added to tenant).", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "19-07-2023", text: "2 Analytic Rules updated in the solution (User Assigned Privileged Role,Successful logon from IP and failure from a different IP).", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Microsoft Entra ID Assets",
    entries: [
      { version: "3.0.2", date: "04-03-2025", text: "Added Devices and Org Contacts", contentTypes: [] },
      { version: "3.0.1", date: "28-10-2025", text: "Fixed a typo in the data connector tile, correcting enta to Entra", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "11-09-2025", text: "Releasing a new Microsoft Entra ID Assets connector solution in Content Hub and Data Connector gallery.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Microsoft Entra ID Protection",
    entries: [
      { version: "3.0.3", date: "07-07-2025", text: "To enhance functionality, improve entity mappings, and update playbook configurations.", contentTypes: ["Playbook"] },
      { version: "3.0.2", date: "07-04-2025", text: "Updated ConnectivityCriteria Type in Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "18-01-2024", text: "Updated mapping in Analytic Rule for better correlation", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "09-11-2023", text: "Changes for rebranding from Azure Active Directory Identity Protection to Microsoft Entra ID Protection", contentTypes: [] },
    ],
  },
  {
    name: "Microsoft Exchange Security - Exchange On-Premises",
    entries: [
      { version: "3.3.2", date: "26-03-2025", text: "Update documentation link to new repository", contentTypes: [] },
      { version: "3.3.0", date: "26-08-2024", text: "Add Compare in Exchange Security Review. Create DataConnectors for Azure Monitor Agent. Correct bugs", contentTypes: ["Data Connector"] },
      { version: "3.2.0", date: "09-04-2024", text: "Explode \"ExchangeAdminAuditLogEvents\" dataconnector to multiple simplier dataconnectors", contentTypes: ["Data Connector"] },
      { version: "3.1.5", date: "26-04-2024", text: "Fix Typpo in DataConnector", contentTypes: ["Data Connector"] },
      { version: "3.1.4", date: "18-04-2024", text: "Repackaged for parser issue while redeployment", contentTypes: ["Parser"] },
      { version: "3.1.3", date: "10-04-2024", text: "Updated DataConnector last Log indicator and IsConnected queries by including Application and System Log Event Types", contentTypes: ["Data Connector"] },
      { version: "3.1.2", date: "20-02-2024", text: "Correct DataConnector last Log indicator and IsConnected queries", contentTypes: ["Data Connector"] },
      { version: "3.1.1", date: "18-12-2023", text: "Update Parsers parameters", contentTypes: ["Parser"] },
      { version: "3.1.0", date: "01-11-2023", text: "Added Watchlist to track activities on VIPs' Mailboxes. Change ExchangeAuditLog parser to work without watchlist and searching all type of VIP information", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "13-09-2023", text: "Readme file for Parsers and typo correction", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "23-08-2023", text: "ExchangeEnvironmentList parser name corrected in Workbooks.", contentTypes: ["Workbook","Parser"] },
    ],
  },
  {
    name: "Microsoft Exchange Security - Exchange Online",
    entries: [
      { version: "3.1.7", date: "26-03-2025", text: "Update documentation link to new repository", contentTypes: [] },
      { version: "3.1.6", date: "30-08-2024", text: "Correct bug on LasdtReceivedData of DataConnector. and change parser", contentTypes: ["Data Connector","Parser"] },
      { version: "3.1.5", date: "15-05-2024", text: "Enhancement in existing Parser", contentTypes: ["Parser"] },
      { version: "3.1.4", date: "30-04-2024", text: "Repackaged for parser issue", contentTypes: ["Parser"] },
      { version: "3.1.3", date: "25-04-2024", text: "Repackaged for parser issue with old names", contentTypes: ["Parser"] },
      { version: "3.1.2", date: "18-04-2024", text: "Repackaged for parser issue while update", contentTypes: ["Parser"] },
      { version: "3.1.1", date: "19-03-2024", text: "Manually updated package content", contentTypes: [] },
      { version: "3.0.5", date: "20-02-2024", text: "Correct DataConnector last Log indicator", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "18-12-2023", text: "Correct Parser parameters and force version update", contentTypes: ["Parser"] },
      { version: "3.0.3", date: "05-12-2023", text: "Added parameters in Parser to fix default values issue.", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "01-11-2023", text: "Added a Parser to verify if user is Microsoft Exchange Security VIP (Watchlist)", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "13-09-2023", text: "Readme file for parsers added and typo correction", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "23-08-2023", text: "ExchangeEnvironmentList parser name corrected in Workbooks.", contentTypes: ["Workbook","Parser"] },
    ],
  },
  {
    name: "Microsoft Purview",
    entries: [
      { version: "3.0.0", date: "27-03-2025", text: "Data Connector [Microsoft Purview] Globally Available", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Microsoft Purview Information Protection",
    entries: [
      { version: "3.0.0", date: "19-03-2024", text: "Adjust wording for Microsoft Purview Information Protection logs - log source isn't Azure Diagnostics for this one", contentTypes: [] },
    ],
  },
  {
    name: "Microsoft Purview Insider Risk Management",
    alias: "MicrosoftPurviewInsiderRiskManagement",
    entries: [
      { version: "3.0.6", date: "07-04-2025", text: "Updated ConnectivityCriteria Type in Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "10-04-2024", text: "Updated Entity Mappings InsiderRiskyAccessByApplication.yaml", contentTypes: [] },
      { version: "3.0.4", date: "07-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
      { version: "3.0.3", date: "10-10-2023", text: "Updated Workbook template to replace the datatype InformationProtectionLogs_CL to MicrosoftPurviewInformationProtection", contentTypes: ["Workbook"] },
      { version: "3.0.2", date: "04-10-2023", text: "Updated Workbook template to fix Signinlogs datatype", contentTypes: ["Workbook"] },
      { version: "3.0.1", date: "20-09-2023", text: "Updated Workbook template to fix the invaild json issue", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "17-07-2023", text: "Updating Analytic Rules with grouping configuration(Single Alert)", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Microsoft Sysmon For Linux",
    entries: [
      { version: "3.0.0", date: "26-07-2024", text: "Deprecated Data Connector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Microsoft Windows SQL Server Database Audit",
    entries: [
      { version: "3.0.1", date: "18-03-2024", text: "Change in Hunting Queries description", contentTypes: ["Hunting Query"] },
      { version: "3.0.0", date: "10-07-2023", text: "Updated Parser to correctly parse failed login events", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "Mimecast",
    entries: [
      { version: "3.1.0", date: "29-10-2025", text: "Added Log Ingestion API support in Data Connectors. Added Government button for support.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "12-02-2025", text: "Updated default table for MimecastAudit to get the Connected label on Data Connector UI page.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "09-09-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Mimecast Audit",
    alias: "MimecastAudit",
    entries: [
      { version: "3.0.2", date: "06-03-2025", text: "Solution Deprecated", contentTypes: [] },
      { version: "3.0.1", date: "05-12-2023", text: "Enhanced Dataconnector to use existing workspace and updated checkpoint mechanism", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "23-08-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Mimecast SEG",
    alias: "MimecastSEG",
    entries: [
      { version: "3.0.2", date: "06-03-2025", text: "Solution Deprecated", contentTypes: [] },
      { version: "3.0.1", date: "05-12-2023", text: "Enhanced Dataconnector to use existing workspace and updated checkpoint mechanism", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "23-08-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Mimecast TI Regional",
    alias: "MimecastTIRegional",
    entries: [
      { version: "3.0.2", date: "06-03-2025", text: "Solution Deprecated", contentTypes: [] },
      { version: "3.0.1", date: "05-12-2023", text: "Enhanced Dataconnector to use existing workspace and updated checkpoint mechanism", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "23-08-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Mimecast TTP",
    alias: "MimecastTTP",
    entries: [
      { version: "3.0.2", date: "06-03-2025", text: "Solution Deprecated", contentTypes: [] },
      { version: "3.0.1", date: "05-12-2023", text: "Enhanced Dataconnector to use existing workspace and updated checkpoint mechanism", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "23-08-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Minemeld",
    entries: [
      { version: "3.0.0", date: "03-04-2024", text: "Added RleaseNotes file for Minemeld solution", contentTypes: [] },
    ],
  },
  {
    name: "Miro",
    entries: [
      { version: "3.0.0", date: "05-12-2025", text: "Initial release of the Miro solution with two CCF connectors (Audit Logs and Content Logs).", contentTypes: [] },
    ],
  },
  {
    name: "MISP to Sentinel",
    alias: "MISP2Sentinel",
    entries: [
      { version: "3.0.0", date: "29-07-2023", text: "Data Connector Initial version of MISP2Sentinel with support for Upload Indicators API", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "MongoDB Atlas",
    alias: "MongoDBAtlas",
    entries: [
      { version: "3.0.8", date: "05-11-2025", text: "Fix slow UI for MongoDB Cluster ID validation.", contentTypes: [] },
      { version: "3.0.7", date: "29-10-2025", text: "Update extension bundle version, minor instructions update, publisherId update.", contentTypes: [] },
      { version: "3.0.6", date: "17-10-2025", text: "Add ability to pass MongoDB Client Secret via a key vault. Improve concurrency model used to ingest logs.", contentTypes: [] },
      { version: "3.0.5", date: "08-10-2025", text: "Removal of workspace creation. Add ability to pull logs from multiple MongoDB clusters.", contentTypes: [] },
      { version: "3.0.4", date: "01-10-2025", text: "Deployment UI updates. Fix Deploy to Azure button.", contentTypes: [] },
      { version: "3.0.3", date: "29-09-2025", text: "Fixed a bug in log filtering. Some improvements to UI text.", contentTypes: [] },
      { version: "3.0.2", date: "25-09-2025", text: "Fixed bad link to logo in Solution json. Fixed Deploy to Azure links.", contentTypes: [] },
      { version: "3.0.1", date: "18-09-2025", text: "Improved filtering by log ID. Performance improvement to upload via Log Ingestion API in parallel.", contentTypes: [] },
      { version: "3.0.0", date: "17-09-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "MongoDB Audit",
    alias: "MongoDBAudit",
    entries: [
      { version: "3.0.1", date: "23-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "08-08-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Morphisec",
    entries: [
      { version: "3.1.0", date: "10-09-2025", text: "Adding CCF connector", contentTypes: [] },
      { version: "3.0.1", date: "26-06-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "07-09-2023", text: "Addition of new Morphisec AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Mulesoft",
    entries: [
      { version: "3.0.2", date: "09-09-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "3.0.1", date: "13-06-2024", text: "Updated Data Connector instructions to notify Cloudhub Application support.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Multi Cloud Attack Coverage Essentials - Resource Abuse",
    entries: [
      { version: "3.0.3", date: "07-06-2024", text: "Analytical Rule description updated", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "08-04-2024", text: "Added Account and FullName in entity mapping", contentTypes: [] },
      { version: "3.0.1", date: "23-02-2024", text: "Tagged for dependent solutions for deployment", contentTypes: [] },
      { version: "3.0.0", date: "22-11-2023", text: "Initial Release", contentTypes: [] },
    ],
  },
  {
    name: "Nasuni",
    entries: [
      { version: "3.0.3", date: "03-01-2025", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "18-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "02-08-2023", text: "Solution Id and Tier Updated", contentTypes: [] },
      { version: "3.0.0", date: "14-07-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "NCSC-NL NDN Cyber Threat Intelligence Sharing",
    entries: [
      { version: "3.0.1", date: "06-10-2025", text: "Fix release, such as Azure portal bug, broken link and typo corrections.", contentTypes: [] },
      { version: "3.0.0", date: "19-05-2025", text: "Initial release of the NCSC-NL NDNShareSTIXObjects Playbook.", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "NetApp Ransomware Resilience",
    entries: [
      { version: "3.0.0", date: "16-12-2025", text: "Added Initial changes for Playbooks, Data Connectors and Analytics Rules.", contentTypes: ["Data Connector","Playbook"] },
    ],
  },
  {
    name: "NetClean ProActive",
    entries: [
      { version: "3.0.2", date: "30-01-2025", text: "Updated Analytic Rules, Workbook columns due to change in Data Connector", contentTypes: ["Analytic Rule","Data Connector","Workbook"] },
      { version: "3.0.1", date: "27-07-2023", text: "Updated solution to remove unwanted spaces from variables.", contentTypes: [] },
    ],
  },
  {
    name: "Netskope v2",
    alias: "Netskopev2",
    entries: [
      { version: "3.1.4", date: "30-03-2026", text: "Fix space in name. Rename to Netskope Alerts and Events (via Codeless Connector Framework)", contentTypes: [] },
      { version: "3.1.3", date: "20-03-2026", text: "Rename to Netskope Alerts and Events(via Codeless Connector Framework)", contentTypes: [] },
      { version: "3.1.2", date: "31-10-2025", text: "Added Dropdown in CCF UI page for data ingestion", contentTypes: [] },
      { version: "3.1.1", date: "15-10-2025", text: "Added CCF WebTx Parser and Dashboard", contentTypes: ["Parser"] },
      { version: "3.1.0", date: "12-08-2025", text: "Added Parsers and Dashboards for CCP and CE Data.", contentTypes: ["Parser"] },
      { version: "3.0.3", date: "08-04-2025", text: "Updated index value of api endpoint in CCP Data Connector poller files.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "30-05-2024", text: "Updated python packages of Netskope Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "03-05-2024", text: "Repackaged for Parser issue fix on reinstall.", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "03-04-2024", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Netskope Web Tx",
    alias: "NetskopeWebTx",
    entries: [
      { version: "3.0.0", date: "11-02-2026", text: "Includes all CCF connector definitions and configurations.", contentTypes: [] },
    ],
  },
  {
    name: "Network Session Essentials",
    entries: [
      { version: "3.0.11", date: "24-03-2026", text: "Bump solution version and Updated links to remove review.learn.", contentTypes: [] },
      { version: "3.0.10", date: "14-02-2026", text: "Updated links to remove review.learn.", contentTypes: [] },
      { version: "3.0.9", date: "06-02-2026", text: "Updated the relevant techniques in the hunting queries.", contentTypes: ["Hunting Query"] },
      { version: "3.0.8", date: "23-09-2025", text: "Removed duplicate and redundant query blocks that previously handled different eps ranges, reducing code complexity and improving maintainability.", contentTypes: [] },
      { version: "3.0.7", date: "04-07-2025", text: "Summary rules added and updated requiredDataConnectors.", contentTypes: [] },
      { version: "3.0.6", date: "15-04-2025", text: "Updated Analytic Rule NetworkPortSweepFromExternalNetwork.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.5", date: "12-12-2024", text: "Added IllumioSaaS solution in a domain solution list", contentTypes: [] },
      { version: "3.0.4", date: "03-06-2024", text: "Added missing AMA Data Connector reference in Analytical rule and Hunting Query.", contentTypes: ["Analytic Rule","Hunting Query","Data Connector"] },
      { version: "3.0.3", date: "12-03-2024", text: "Added 3 new Hunting Queries and 2 new Analytic Rules.", contentTypes: ["Analytic Rule","Hunting Query"] },
      { version: "3.0.2", date: "07-02-2024", text: "Updated Analytic Rule (DetectPortMisuseByAnomalyBasedDetection).", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "07-02-2024", text: "Updated Solution description.", contentTypes: [] },
      { version: "3.0.1", date: "02-01-2024", text: "Tagged for dependent solutions for deployment.", contentTypes: [] },
      { version: "3.0.0", date: "24-07-2023", text: "Updated ApiVersion for Watchlist.", contentTypes: [] },
    ],
  },
  {
    name: "Network Threat Protection Essentials",
    entries: [
      { version: "3.0.2", date: "13-01-2026", text: "Updated non-functional links from Exploit and Pentest Framework User Agent Hunting query", contentTypes: ["Hunting Query"] },
      { version: "3.0.1", date: "23-02-2024", text: "Tagged for dependent solutions for deployment", contentTypes: [] },
      { version: "3.0.0", date: "19-12-2023", text: "Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*", contentTypes: [] },
    ],
  },
  {
    name: "Netwrix Auditor",
    entries: [
      { version: "3.0.2", date: "22-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "10-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "29-08-2023", text: "Addition of new Netwrix Auditor AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "NGINX HTTP Server",
    entries: [
      { version: "3.0.1", date: "13-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "08-08-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "NIST SP 800-53",
    alias: "NISTSP80053",
    entries: [
      { version: "3.0.3", date: "19-01-2026", text: "EOP rebrand (updated minor link and link title changes)", contentTypes: [] },
      { version: "3.0.2", date: "23-09-2025", text: "Updated the workbook with new links and fixed broken metrics.", contentTypes: ["Workbook"] },
      { version: "3.0.1", date: "31-01-2024", text: "Updated the solution to fix Analytic Rules deployment issue", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "09-11-2023", text: "Changes for rebranding from Azure Active Directory Identity Protection to Microsoft Entra ID Protection", contentTypes: [] },
    ],
  },
  {
    name: "NordPass",
    entries: [
      { version: "3.0.1", date: "25-08-2025", text: "Added new Activity Logs", contentTypes: [] },
      { version: "3.0.0", date: "22-04-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Nozomi Networks",
    alias: "NozomiNetworks",
    entries: [
      { version: "3.0.3", date: "21-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "12-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "22-12-2023", text: "Query issue fixed in AMA Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "13-09-2023", text: "Addition of new NozomiNetworks AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Obsidian Datasharing",
    entries: [
      { version: "3.0.0", date: "25-09-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Okta Single Sign-On",
    entries: [
      { version: "3.1.6", date: "14-04-2026", text: "Deprecate Okta Single Sign-On (using Azure Function)", contentTypes: [] },
      { version: "3.1.5", date: "02-04-2026", text: "Rename CCF solution to Okta Single Sign-On (via Codeless Connector Framework).", contentTypes: [] },
      { version: "3.1.5", date: "02-04-2026", text: "Add SessionId variable and reference in template.", contentTypes: [] },
      { version: "3.1.4", date: "13-01-2026", text: "Updated non-functional link from MFA Fatigue (OKTA) Analytic rule", contentTypes: ["Analytic Rule"] },
      { version: "3.1.3", date: "05-02-2025", text: "Version Update", contentTypes: [] },
      { version: "3.1.2", date: "06-01-2025", text: "Removing Custom Entity mappings from Analytic Rule", contentTypes: ["Analytic Rule"] },
      { version: "3.1.1", date: "08-11-2024", text: "Fixed CCP Data Connector connection bug", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "27-11-2024", text: "Fixed Solution version in Maintemplate and resolved ARM template error", contentTypes: [] },
      { version: "3.0.10", date: "08-11-2024", text: "Updated Parser to fix the schema", contentTypes: ["Parser"] },
      { version: "3.0.9", date: "17-10-2024", text: "Updated package to fix connectivity of CCP connector", contentTypes: [] },
      { version: "3.0.8", date: "14-08-2024", text: "Data Connector Globally Available", contentTypes: ["Data Connector"] },
      { version: "3.0.7", date: "25-04-2024", text: "Repackaged for parser issue with old names", contentTypes: ["Parser"] },
      { version: "3.0.6", date: "17-04-2024", text: "Repackaged solution for parser fix", contentTypes: ["Parser"] },
      { version: "3.0.5", date: "08-04-2024", text: "Added Azure Deploy button for government portal deployments", contentTypes: [] },
      { version: "3.0.4", date: "18-03-2024", text: "Updated description in data file, data connector and added logo for ccp data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "08-03-2024", text: "Updated ccp with domainname in dcr, tables, name change in definition and poller", contentTypes: [] },
      { version: "3.0.2", date: "20-02-2024", text: "Updated _solutionVersion to resource specific version and repackage", contentTypes: [] },
      { version: "3.0.1", date: "24-01-2024", text: "New Analytic Rule added (UserSessionImpersonation.yaml)", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "10-10-2023", text: "Manual deployment instructions updated for Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Onapsis Defend",
    entries: [
      { version: "3.0.1", date: "21-11-2025", text: "Updated schema and added new fields.", contentTypes: [] },
      { version: "3.0.0", date: "01-08-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Onapsis Platform",
    entries: [
      { version: "3.0.0", date: "28-06-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "2.0.1", date: "01-02-2023", text: "Updated CreateUi file", contentTypes: [] },
    ],
  },
  {
    name: "OneLogin IAM",
    alias: "OneLoginIAM",
    entries: [
      { version: "3.0.3", date: "29-07-2025", text: "Removed Deprecated Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "30-06-2025", text: "OneLoginIAM CCF Data Connector moving to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "10-04-2025", text: "Migrated the Function app connector to CCF Data Connector and Updated Parser.", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.1", date: "10-04-2025", text: "Added Preview tag to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "25-09-2023", text: "Modified Parser for query optimization.", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "OneTrust",
    entries: [
      { version: "3.0.0", date: "24-10-2025", text: "Initial release of the OneTrust CCF connector.", contentTypes: [] },
    ],
  },
  {
    name: "Open AI",
    alias: "OpenAI",
    entries: [
      { version: "3.0.0", date: "13-03-2026", text: "Added OpenAI CCF connector to support ingesting audit log and chat completions", contentTypes: [] },
    ],
  },
  {
    name: "Open Systems",
    entries: [
      { version: "3.0.0", date: "12-05-2025", text: "Initial Solution release.", contentTypes: [] },
    ],
  },
  {
    name: "Open VPN",
    alias: "OpenVPN",
    entries: [
      { version: "3.0.1", date: "18-12-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "19-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Oracle Cloud Infrastructure",
    entries: [
      { version: "3.0.9", date: "10-02-2026", text: "Add support for group Cursor", contentTypes: [] },
      { version: "3.0.8", date: "05-02-2026", text: "fix name in package 3.0.7", contentTypes: [] },
      { version: "3.0.7", date: "26-01-2026", text: "Improve Instructions part of the connector with more InfoMessage.", contentTypes: [] },
      { version: "3.0.6", date: "09-12-2025", text: "Support Multistream + multi partition.", contentTypes: [] },
      { version: "3.0.5", date: "13-11-2025", text: "Updated partition id text box's description with zero-based indexing.", contentTypes: [] },
      { version: "3.0.4", date: "22-09-2025", text: "Updated the OCI CCF Data Connector instructions to include information about the partition ID limitation.", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "25-08-2025", text: "Moving OCI CCF Data Connector to GA", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "14-07-2025", text: "Introduced new CCF Connector to the Solution - \"OCI-Connector-CCP-Definition\".", contentTypes: [] },
      { version: "3.0.1", date: "05-10-2023", text: "Manual deployment instructions updated for Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "21-08-2023", text: "Modified the Parser by adding Columnifexists condition to avoid errors.", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "Oracle Database Audit",
    alias: "OracleDatabaseAudit",
    entries: [
      { version: "3.0.3", date: "11-12-2024", text: "Removed Deprecated Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "23-07-2024", text: "Deprecated data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "26-04-2024", text: "Repackaged for fix on parser in maintemplate to have old parsername and parentid", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "19-12-2023", text: "Documentation changes for oracle data base audit", contentTypes: [] },
    ],
  },
  {
    name: "Oracle WebLogic Server",
    alias: "OracleWebLogicServer",
    entries: [
      { version: "3.0.2", date: "23-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "09-08-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "15-12-2023", text: "Updated the Parser field TreadId to ThreadId", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "OSSEC",
    entries: [
      { version: "3.0.2", date: "21-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "12-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "28-08-2023", text: "Addition of new OSSEC AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Palo Alto CDL",
    alias: "PaloAltoCDL",
    entries: [
      { version: "3.0.3", date: "12-11-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "12-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "12-06-2024", text: "Optimized parser", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "25-09-2023", text: "Addition of new PaloAltoCDL AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Palo Alto Cortex XDR CCP",
    entries: [
      { version: "3.0.4", date: "14-10-2025", text: "Updating CCF Polling file to implement parameters", contentTypes: [] },
      { version: "3.0.3", date: "09-04-2025", text: "Updating CCF connector parameters", contentTypes: [] },
      { version: "3.0.2", date: "10-02-2025", text: "Advancing CCF Data Connector from Public preview to Global Availability.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "22-01-2025", text: "Added Preview tag to Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "17-12-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Palo Alto Cortex Xpanse CCF",
    entries: [
      { version: "3.0.1", date: "07-10-2025", text: "Palo Alto Cortex Xpanse CCF Data Connector Moving to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "04-08-2025", text: "Initial Solution Release.", contentTypes: [] },
      { version: "3.0.0", date: "04-08-2025", text: "New CCF Data Connector 'Palo Alto Cortex Xpanse CCF'.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Palo Alto PAN-OS",
    alias: "PaloAlto-PAN-OS",
    entries: [
      { version: "3.0.11", date: "13-01-2026", text: "Updated non-functional link from PaloAlto-NetworkBeaconing Analytic rule", contentTypes: ["Analytic Rule"] },
      { version: "3.0.10", date: "13-11-2025", text: "Adding New Detection Rule for Nmap Top 100 Port Scan", contentTypes: [] },
      { version: "3.0.9", date: "06-01-2025", text: "Removing Custom Entity mappings from Analytic Rule", contentTypes: ["Analytic Rule"] },
      { version: "3.0.8", date: "15-11-2024", text: "Corrected Data Connector count in CreateUiDefinition", contentTypes: ["Data Connector"] },
      { version: "3.0.7", date: "11-11-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.6", date: "12-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "30-04-2024", text: "Updated the Data Connector to fix conectivity criteria query", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "16-04-2024", text: "Fixed existing rule for sites with private IP addresses other than 10/8", contentTypes: [] },
      { version: "3.0.3", date: "11-04-2024", text: "Enhanced the existing Workbook as per requirement", contentTypes: ["Workbook"] },
      { version: "3.0.2", date: "12-02-2024", text: "Addition of new PaloAlto-PAN-OS AMA Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "22-01-2024", text: "Added subTechniques in Template", contentTypes: [] },
      { version: "3.0.0", date: "12-12-2023", text: "Fixed Playbooks issue", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "Palo Alto Prisma Cloud",
    alias: "PaloAltoPrismaCloud",
    entries: [
      { version: "3.0.4", date: "27-10-2025", text: "Add missing \"detailed\" flag to CCF Data Connector polling config", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "10-10-2025", text: "CCF Data Connector Moving to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "06-08-2025", text: "Change authentication type from Basic to JWT Token.", contentTypes: [] },
      { version: "3.0.1", date: "17-07-2025", text: "1 Analytic Rule updated with improved rule logic.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "17-07-2025", text: "Added new CCF Connector - *Palo Alto Prisma Cloud CSPM.*", contentTypes: [] },
      { version: "3.0.0", date: "18-08-2023", text: "Manual deployment instructions updated for Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Palo Alto Prisma Cloud CWPP",
    entries: [
      { version: "3.0.3", date: "03-01-2024", text: "Repackaged for _solutionVersion issue in resource", contentTypes: [] },
      { version: "3.0.2", date: "03-01-2024", text: "Updated package version and password as a securestring", contentTypes: [] },
      { version: "3.0.1", date: "30-11-2023", text: "Updated the data connector and its associated package", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "10-10-2023", text: "Added new files to support CCP CLV2 and its package", contentTypes: [] },
    ],
  },
  {
    name: "Pathlock_T Dn R",
    alias: "Pathlock_TDnR",
    entries: [
      { version: "3.0.0", date: "05-11-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "PCI DSS Compliance",
    entries: [
      { version: "3.0.0", date: "16-10-2024", text: "Updated solution to fix content issue and data type for Workbook issue", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "Phosphorus",
    entries: [
      { version: "3.0.0", date: "15-08-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "PingFederate",
    entries: [
      { version: "3.0.2", date: "22-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "12-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "04-09-2023", text: "Addition of new PingFederate AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "PingOne",
    entries: [
      { version: "3.0.2", date: "14-08-2025", text: "PingOne CCF Data Connector moving to GA", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "23-07-2025", text: "Update to CCF Data Connector Readme File Link", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "23-06-2025", text: "Initial Solution release with one CCF Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Postgre SQL",
    alias: "PostgreSQL",
    entries: [
      { version: "3.0.1", date: "12-12-2024", text: "Removed Deprecated Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "09-08-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Power Platform",
    entries: [
      { version: "3.1.3", date: "12-07-2024", text: "Removal of Power Apps, Power Platform Connectors, Power Platform DLP data connectors. Associated logs are now ingested via Power Platform Admin Activity data connector.Update of analytics rules to utilize PowerPlatfromAdminActivity table.Update data connectors DCR properties.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Prancer PenSuiteAI Integration",
    entries: [
      { version: "3.0.1", date: "19-03-2024", text: "Updated Workbook, Analytic Rules and Hunting Queries", contentTypes: ["Analytic Rule","Hunting Query","Workbook"] },
      { version: "3.0.0", date: "20-09-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Proofpoint On demand(POD) Email Security",
    entries: [
      { version: "3.1.3", date: "19-03-2026", text: "Update ProofpointPOD_PollingConfig.json to pass user-agent header with solution package version.", contentTypes: [] },
      { version: "3.1.2", date: "08-12-2025", text: "Update ProofpointPOD_PollingConfig.json to remove start and end time query params, it impacts time frames at server side and causes duplicate data ingestion.", contentTypes: [] },
      { version: "3.1.1", date: "03-11-2025", text: "Update support url in SolutionMetadata.json.", contentTypes: [] },
      { version: "3.1.0", date: "31-07-2025", text: "Updated Support details and publisherId in SolutionMetadata.json, updated Author details and Logo in Solution_ProofPointPOD.json from Microsoft to Proofpoint.", contentTypes: [] },
      { version: "3.0.5", date: "28-07-2025", text: "Removed Deprecated Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "06-05-2025", text: "Launching CCP Data Connector - *Proofpoint On Demand Email Security* from Public Preview to Global Availability.", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "12-03-2025", text: "Added new CCP Data Connector - *Proofpoint On Demand Email Security*.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "06-09-2024", text: "Updated the python runtime version to 3.11 in Data Connector Function App.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "02-05-2024", text: "Optimized Parser.", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "01-08-2023", text: "Updated solution logo with Microsoft Sentinel logo.", contentTypes: [] },
    ],
  },
  {
    name: "Proofpoint TAP",
    alias: "ProofPointTap",
    entries: [
      { version: "3.1.3", date: "19-03-2026", text: "Update ProofpointTAP_PollingConfig.json to pass user-agent header with solution package version.", contentTypes: [] },
      { version: "3.1.2", date: "22-01-2026", text: "Removed Playbook GetProofpointTAPEvents for TAP connector.", contentTypes: ["Playbook"] },
      { version: "3.1.1", date: "03-11-2025", text: "Update support url in SolutionMetadata.json.", contentTypes: [] },
      { version: "3.1.0", date: "31-07-2025", text: "Updated Support details and publisherId in SolutionMetadata.json, updated Author details and Logo in Solution_ProofTap.json from Microsoft to Proofpoint.", contentTypes: [] },
      { version: "3.0.10", date: "28-07-2025", text: "Removed Deprecated Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.9", date: "20-06-2025", text: "Expanded the query for *ProofpointTAPEvent* Parser to include additional columns and data sources (V2).", contentTypes: ["Parser"] },
      { version: "3.0.8", date: "06-05-2025", text: "Launching CCP Data Connector *Proofpoint TAP (via Codeless Connector Platform)* from Public Preview to Global Availability.", contentTypes: ["Data Connector"] },
      { version: "3.0.7", date: "21-04-2025", text: "Correction in CCP Connector DCR File to resolve deployment issue.", contentTypes: [] },
      { version: "3.0.6", date: "04-04-2025", text: "New CCP Connector added *Proofpoint TAP (via Codeless Connector Platform)*.", contentTypes: [] },
      { version: "3.0.5", date: "12-01-2025", text: "Updated Analytic Rule MalwareLinkClicked.yaml.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "26-04-2024", text: "Repackaged for fix on parser in maintemplate to have old parsername and parentid.", contentTypes: ["Parser"] },
      { version: "3.0.3", date: "16-04-2024", text: "Repackaged for parser issue in maintemplate.", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "10-04-2024", text: "Added Azure Deploy button for government portal deployments.", contentTypes: [] },
      { version: "3.0.1", date: "10-10-2023", text: "Manual deployment instructions updated for Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "01-08-2023", text: "Updated solution logo with Microsoft Sentinel logo.", contentTypes: [] },
    ],
  },
  {
    name: "Pulse Connect Secure",
    entries: [
      { version: "3.0.4", date: "07-01-2025", text: "Removed Custom Entity mappings from Analytic Rule", contentTypes: ["Analytic Rule"] },
      { version: "3.0.3", date: "16-12-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "01-08-2024", text: "Update Parser as part of Syslog migration", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "13-12-2023", text: "Updated broken link in Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "20-07-2023", text: "Corrected the links in the solution.", contentTypes: [] },
    ],
  },
  {
    name: "Pure Storage",
    entries: [
      { version: "3.0.3", date: "05-11-2024", text: "Added new Analytic Rule a Playbook and a Parser", contentTypes: ["Analytic Rule","Playbook","Parser"] },
      { version: "3.0.2", date: "09-05-2024", text: "Repackaged for Parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "03-05-2024", text: "Repackaged for Parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "03-05-2024", text: "Added 2 new Analytic Rules and 3 new Playbooks", contentTypes: ["Analytic Rule","Playbook"] },
      { version: "3.0.0", date: "05-02-2024", text: "Initial Solution Release - Parser Only", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "Qualys VM",
    alias: "QualysVM",
    entries: [
      { version: "3.0.7", date: "18-11-2025", text: "Adding adjustable API partition limit & rate limit protection.", contentTypes: [] },
      { version: "3.0.6", date: "18-09-2025", text: "Updated Analytic rules, Parsers, and Workbooks in Sentinel solution content for CCF connector compatibility.", contentTypes: ["Analytic Rule","Workbook","Parser"] },
      { version: "3.0.5", date: "29-07-2025", text: "Removed Deprecated Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "30-06-2025", text: "QualysVM CCF Data Connector moving to GA", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "27-05-2025", text: "New CCP Connector added to the Solution.", contentTypes: [] },
      { version: "3.0.2", date: "08-04-2025", text: "Add HostTags to Data Connector and Parsers.", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.1", date: "07-01-2025", text: "Removed Custom Entity mappings from Analytic Rule.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "16-04-2024", text: "Added Deploy to Azure Goverment button for Government portal in Dataconnector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Qualys VM Knowledgebase",
    entries: [
      { version: "4.0.0", date: "19-03-2026", text: "Added Codeless Connector to solution and updated parser to add fields and clean up typos.", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "03-05-2024", text: "Added Deploy to Azure Goverment button for Government portal in Dataconnector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "03-05-2024", text: "Fixed Metadata issue for ParserName and ParentId mismatch", contentTypes: [] },
      { version: "3.0.0", date: "12-10-2023", text: "Manual deployment instructions updated for Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Quokka",
    entries: [
      { version: "3.0.1", date: "13-01-2026", text: "Fix an issue with the CCF Data Connector that prevented it from polling data.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "07-11-2025", text: "Initial Solution Release for Quokka CCF Data Connector with an Analytic Rule and a Workbook.", contentTypes: ["Analytic Rule","Data Connector","Workbook"] },
    ],
  },
  {
    name: "Radiflow",
    entries: [
      { version: "3.0.0", date: "18-05-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Rapid7Insight VM",
    alias: "Rapid7InsightVM",
    entries: [
      { version: "3.2.0", date: "05-03-2026", text: "Added new Rapid7InsightVM CCP data connector.", contentTypes: ["Data Connector"] },
      { version: "3.1.1", date: "05-02-2026", text: "Update Az Func packages related to InsightVMCloudData Connector", contentTypes: [] },
      { version: "3.1.0", date: "03-02-2026", text: "Update Data Connector to use latest 4.x Azure Functions extension bundles", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "03-05-2024", text: "Fixed Metadata issue for ParserName and ParentId mismatch", contentTypes: [] },
      { version: "3.0.0", date: "16-01-2024", text: "Updated Manual Deployment instructions in Data Connector Description", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Recorded Future",
    entries: [
      { version: "3.2.18", date: "03-02-2026", text: "To reduce noise in incident comments: updated RecordedFuture-IOC_Enrichment logic app with a RiskScoreThreshold parameter that defaults to 5. If an entity has a risk score lower than this threshold, we will not leave a comment on the incident.", contentTypes: [] },
      { version: "3.2.17", date: "12-08-2025", text: "Updated Indicator imports with deterministic STIX ID that should reduce the number duplicate IOCs. Updated RecordedFuture-Playbook-Alert-Importer to improve the description formatting. Updated documentation with typo fixes and clarifications.", contentTypes: ["Playbook"] },
      { version: "3.2.16", date: "08-05-2025", text: "Updated workbooks, analytic rules and hunting queries to new ThreatIntelIndicators schema. Removed deprecated analytic rules. Updated documentation to reflect changes.", contentTypes: ["Analytic Rule","Hunting Query","Workbook"] },
      { version: "3.2.15", date: "12-03-2025", text: "Fixed description of Playbooks.", contentTypes: ["Playbook"] },
      { version: "3.2.14", date: "30-01-2025", text: "Fix the name of IntelligenceCloud parameter in RecordedFuture-CustomConnector + other minor renames.", contentTypes: [] },
      { version: "3.2.13", date: "08-01-2025", text: "Removed Custom Entity mappings from Analytic rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.12", date: "28-11-2024", text: "Fix API connection bug in RecordedFuture-AlertImporter Playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.11", date: "31-10-2024", text: "Fix API connection bug in RecordedFuture-ThreatMap-Importer Playbook, documentation improvements.", contentTypes: ["Playbook"] },
      { version: "3.2.10", date: "01-10-2024", text: "Updated install README for multiple Playbooks, added protocol check for URL enrichments in RecordedFuture-IOC_Enrichment Playbook, moved parameters from important to advanced and internal in RecordedFuture-CustomConnector.", contentTypes: ["Playbook"] },
      { version: "3.2.9", date: "23-09-2024", text: "Updated RecordedFuture-Alert-Importer Playbook improved text encoding and added utm links.", contentTypes: ["Playbook"] },
      { version: "3.2.8", date: "23-08-2024", text: "Updated RecordedFuture-Alert-Importer Playbook added text encoding and latest_event_date bugfix.", contentTypes: ["Playbook"] },
      { version: "3.2.7", date: "01-08-2024", text: "Updated Analytic rules for entity mappings.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.6", date: "03-08-2024", text: "Added incident creation to RecordedFuture-Alert-Importer Playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.6", date: "03-08-2024", text: "Update concurrency in RecordedFuture-IOC_Enrichment Playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.5", date: "24-06-2024", text: "Added missing AMA Data Connector reference in Analytic rules.", contentTypes: ["Analytic Rule","Data Connector"] },
      { version: "3.2.4", date: "08-03-2024", text: "Change default Recurrence for pulling data in Fix parse json in RecordedFuture-ThreatMap-Importer Playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.4", date: "08-03-2024", text: "Update solution description, referencing release notes.", contentTypes: [] },
      { version: "3.2.3", date: "27-02-2024", text: "Fix parsing in RecordedFuture-PlaybookAlert-Importer Playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.3", date: "27-02-2024", text: "Added Recorded Future AI Summary to Alert workbook.", contentTypes: ["Workbook"] },
      { version: "3.2.3", date: "27-02-2024", text: "Added Statues to Playbook alert Workbook.", contentTypes: ["Playbook","Workbook"] },
      { version: "3.2.1", date: "08-02-2024", text: "Fix parse json in RecordedFuture-Alert-Importer Playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.1", date: "08-02-2024", text: "Fixed broken links in readme.md", contentTypes: [] },
      { version: "3.2.0", date: "27-12-2023", text: "Added (Recorded Future Malware Threat Map) Workbook", contentTypes: ["Workbook"] },
      { version: "3.2.0", date: "27-12-2023", text: "Added (ThreatMapMalware-Importer) Playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.0", date: "27-12-2023", text: "Added (MalwareThreatHunt-IndicatorImport) Playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.0", date: "27-12-2023", text: "Fix defaults on RecordedFuture-ActorThreatHunt-IndicatorImport Playbook", contentTypes: ["Playbook"] },
      { version: "3.2.0", date: "27-12-2023", text: "Fixed description on RecordedFutureThreatHuntingDomainAllActors Analytic Rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.0", date: "27-12-2023", text: "Fixed description on RecordedFutureThreatHuntingHashAllActors Analytic Rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.0", date: "27-12-2023", text: "Added Malware endpoints to RecordedFuture-CustomConnector Playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.0", date: "27-12-2023", text: "Fixed defaults on Playbook-Alert-Importer Playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.0", date: "27-12-2023", text: "Updated API connection names for all Playbooks to ease API connection configuration.", contentTypes: ["Playbook"] },
      { version: "3.2.0", date: "27-12-2023", text: "Changed connectorId for Hunting Analytic Rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.2.0", date: "27-12-2023", text: "Updated documentation.", contentTypes: [] },
      { version: "3.1.1", date: "27-12-2023", text: "Minor fix, added Release Notes to Solution description.", contentTypes: [] },
      { version: "3.1.0", date: "01-12-2023", text: "Added (Recorded Future Threat Actor Map) Workbook.", contentTypes: ["Workbook"] },
      { version: "3.1.0", date: "01-12-2023", text: "Added (RecordedFuture-ThreatMap-Importer) Playbook.", contentTypes: ["Playbook"] },
      { version: "3.1.0", date: "01-12-2023", text: "Added (RecordedFuture-ActorThreatHunt-IndicatorImport) Playbook.", contentTypes: ["Playbook"] },
      { version: "3.1.0", date: "01-12-2023", text: "Added 4 Analytic Rules to be used for Recorded Future Threat Hunt.", contentTypes: ["Analytic Rule"] },
      { version: "3.1.0", date: "01-12-2023", text: "Documentation update.", contentTypes: [] },
      { version: "3.1.0", date: "01-12-2023", text: "Removed 6 deprecated Playbooks from Solution package.", contentTypes: ["Playbook"] },
      { version: "3.0.2", date: "02-11-2023", text: "Encoding Fix to the (RecordedFuture-Alert-Importer) Playbook.", contentTypes: ["Playbook"] },
      { version: "3.0.2", date: "02-11-2023", text: "Changed defaults in (RecordedFuture-Playbook-Alert-Importer).", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "26-10-2023", text: "Fix to the (RecordedFuture-ThreatIntelligenceImport) Playbook.", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "20-09-2023", text: "Added Workbooks for correlating Recorded Future and logs containing IoC of type IP, DNS, URL and Hash", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "20-09-2023", text: "Generate Markdown/HTML response for enrichment comments.", contentTypes: [] },
      { version: "3.0.0", date: "20-09-2023", text: "(Recorded Future Playbook Alerts) Playbook and Workbook for visualization.", contentTypes: ["Playbook","Workbook"] },
      { version: "3.0.0", date: "20-09-2023", text: "(Recorded Future Classic Alerts) Playbook and Workbook for visualization.", contentTypes: ["Playbook","Workbook"] },
      { version: "3.0.0", date: "20-09-2023", text: "Leveraging new API for importing threat indicators and deprecating old Playbooks.", contentTypes: ["Playbook"] },
      { version: "2.4.0", date: "29-05-2023", text: "(Sandbox URL enrichment) Playbook included in the solution.", contentTypes: ["Playbook"] },
      { version: "2.4.0", date: "29-05-2023", text: "Sandbox( of outlook attachment Playbook) provided as an example outside the solution.", contentTypes: ["Playbook"] },
      { version: "2.4.0", date: "29-05-2023", text: "Sandbox of files in Azure storage accounts provided as example outside the solution.", contentTypes: [] },
      { version: "2.4.0", date: "29-05-2023", text: "Fix to (IOC enrichment playbook) don’t report 404 (not found) as an error.", contentTypes: ["Playbook"] },
      { version: "2.3.0", date: "13-02-2023", text: "Layout improvements to the (incident enrichment Playbook).", contentTypes: ["Playbook"] },
      { version: "2.3.0", date: "13-02-2023", text: "Added Detections from collective insights to enrichment playbooks.", contentTypes: ["Playbook"] },
      { version: "2.3.0", date: "13-02-2023", text: "IncidentId and MITRE Att&ck code added to collective insights.", contentTypes: [] },
      { version: "2.3.0", date: "13-02-2023", text: "Fix for image in incident comment.", contentTypes: [] },
      { version: "2.2.2", date: "23-01-2023", text: "Fixes for all risk list import Playbooks.", contentTypes: ["Playbook"] },
      { version: "2.2.1", date: "23-12-2022", text: "Display severity for risk rules in enrichment of IOCs.", contentTypes: [] },
      { version: "2.2.1", date: "23-12-2022", text: "Sorting of risk rules, showing very malicious rules first.", contentTypes: [] },
      { version: "2.2.0", date: "14-12-2022", text: "Improvements to the (incident enrichment playbook).", contentTypes: ["Playbook"] },
      { version: "2.2.0", date: "14-12-2022", text: "Added Recorded Future links to enrichment comment.", contentTypes: [] },
      { version: "2.2.0", date: "14-12-2022", text: "Improved layout of the enrichment, adding Recorded Future logo, table layout.", contentTypes: [] },
      { version: "2.1.0", date: "20-09-2022", text: "Updated all Playbooks to use RecordedFutureV2 connector, which requires new API keys.", contentTypes: ["Playbook"] },
      { version: "2.1.0", date: "20-09-2022", text: "Added Playbooks for importing Ukraine Russia conflict risk lists.", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "Recorded Future Identity",
    entries: [
      { version: "3.1.2", date: "29-04-2025", text: "Removed Get Risky User action from Playbooks due to Recorded Future can act as a authority on compromise.", contentTypes: ["Playbook"] },
      { version: "3.1.1", date: "02-04-2025", text: "Updated documentation, restructured solution and added correct paths for Playbooks.", contentTypes: ["Playbook"] },
      { version: "3.1.0", date: "10-02-2025", text: "Refactored solution to be based on Recorded Future Playbook Alerts, moved old solution to v3.0 folder.", contentTypes: ["Playbook"] },
      { version: "3.1.0", date: "10-02-2025", text: "Added new Playbooks.", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "27-08-2024", text: "Fixedhardcoded Resource Group and Analytics Workspace Name in search Playbooks.", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "15-04-2024", text: "Fixedhardcoded SubscriptionID.", contentTypes: [] },
      { version: "3.0.0", date: "15-04-2024", text: "Entra ID renaming of Playbooks and readme.", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "15-04-2024", text: "Using solution format V3", contentTypes: [] },
      { version: "3.0.0", date: "15-04-2024", text: "Change prefix on all logic app installation names from RecordedFutureIdentity to RFI due to logic app name size limitation of 64 characters.", contentTypes: [] },
      { version: "2.0.0", date: "14-09-2022", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "ReversingLabs",
    entries: [
      { version: "3.0.2", date: "08-08-2025", text: "Updated Reversing Labs workbook with new ThreatIntelIndicators Table", contentTypes: ["Workbook"] },
      { version: "3.0.1", date: "17-07-2024", text: "What's New", contentTypes: [] },
      { version: "3.0.1", date: "17-07-2024", text: "- Playbook \\|SpectraAnalyze-EnrichNetworkEntities: New playbook that enriches network entities (IP addresses, URLs, and domain names) with data from a Spectra Analyze appliance \\|v1.0.0", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "17-07-2024", text: "- Playbook \\|SpectraIntelligence-EnrichNetworkEntities: New playbook that enriches network entities (IP addresses, URLs, and domain names) with data from Spectra Intelligence. \\|v1.0.0", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "17-07-2024", text: "- Playbook \\|SpectraAnalyze-EnrichFileHash: New playbook exmaple for enriching file hash entities with data from a Spectra Analyze apliance \\|v1.0.0", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "17-07-2024", text: "What's Changed", contentTypes: [] },
      { version: "3.0.1", date: "17-07-2024", text: "- Playbook \\|ReversingLabs-EnrichFileHash has been renamed to SpectraIntelligence-EnrichFileHash", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "09-08-2023", text: "Playbook \\|ReversingLabs-EnrichFileHash: Updated to use new TitaniumCloud Logic App connector; Added AV scan results \\|v2.0.0", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "09-08-2023", text: "Workbook \\|ReversingLabs-CapabilitiesOverview: Remove hardcoded parameter value \"ti_feed_check\"; Update indicator quality query to be more accurate for uniqueness check \\|v1.1.2", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "Ridge Security",
    alias: "RidgeSecurity",
    entries: [
      { version: "3.0.1", date: "01-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "23-10-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Risk IQ",
    alias: "RiskIQ",
    entries: [
      { version: "3.0.0", date: "13-01-2026", text: "Updating Playbooks to remove non-functional hyperlinks.", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "RSA ID Plus Admin Logs Connector",
    alias: "RSAIDPlus_AdminLogs_Connector",
    entries: [
      { version: "3.0.1", date: "23-10-2025", text: "Updating offerId", contentTypes: [] },
      { version: "3.0.0", date: "14-10-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "RSA SecurID",
    entries: [
      { version: "3.0.1", date: "26-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "01-08-2024", text: "Update Parser as part of Syslog migration", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "Rubrik Security Cloud",
    alias: "RubrikSecurityCloud",
    entries: [
      { version: "3.5.2", date: "19-02-2026", text: "Added RubrikSecurityCloud CCF (Codeless Connector Framework) Data Connector for ingesting Rubrik Protection Status data into Microsoft Sentinel. Enables backup compliance monitoring, ransomware recovery assessment, and incident correlation with protection status for Azure VMs.", contentTypes: ["Data Connector"] },
      { version: "3.5.1", date: "05-11-2025", text: "Updated API Host Name default value in playbooks and custom connector", contentTypes: ["Playbook"] },
      { version: "3.5.0", date: "25-07-2025", text: "Added RubrikTurboThreatHunt and RubrikAdvanceThreatHunt playbooks. RubrikThreatMonitoring and RubrikCriticalAnomaly Analytic Rules also added.", contentTypes: ["Analytic Rule","Playbook"] },
      { version: "3.4.0", date: "07-04-2025", text: "Added RubrikUpdateAnomalyStatusViaIncident and RubrikUpdateAnomalyStatus playbook. Enhanced RubrikAnomalyAnalysis playbook. Added User-Agent in every API call of each playbook. Removed policy creation resources from data connector Arm template.", contentTypes: ["Data Connector","Playbook"] },
      { version: "3.3.0", date: "19-11-2024", text: "Added one new Playbook(RubrikWorkloadAnalysis) and updated the RubrikWebhookEvents Data Connector to add a new Orchestrator for Rubrik Events.", contentTypes: ["Data Connector","Playbook"] },
      { version: "3.2.1", date: "11-11-2024", text: "Fixed the issue of Custom Connector id parameter in RubrikRansomwareDiscoveryAndVmRecovery playbook.", contentTypes: ["Playbook"] },
      { version: "3.2.0", date: "24-02-2024", text: "Added 3 new Playbooks(RubrikFileObjectContextAnalysis, RubrikUserIntelligenceAnalysis, RubrikRetrieveUserIntelligenceInformation) for FileObject and User, fixed clusterLocation issue of Collect_IOC_Scan_Data adaptive card in RubrikRansomwareDiscoveryAndVmRecovery playbook and updated python packages to fix vulnerability CVE-2023-50782 of cryptography module. Enhanced Anomaly Analysis playbook and added RubrikAnomalyGenerateDownloadableLink playbook.", contentTypes: ["Playbook"] },
      { version: "3.1.0", date: "20-10-2023", text: "Updated the DataConnector code by implementing Durable Function App.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "14-07-2023", text: "Updated the title in such a way that user can identify the adaptive card based on incident.", contentTypes: [] },
    ],
  },
  {
    name: "SailPoint IdentityNow",
    alias: "SailPointIdentityNow",
    entries: [
      { version: "3.0.0", date: "28-08-2024", text: "Data Connector instruction updated", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Salem Cyber",
    alias: "SalemCyber",
    entries: [
      { version: "3.0.0", date: "14-07-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Salesforce Service Cloud",
    entries: [
      { version: "3.0.10", date: "23-01-2026", text: "Update the Salesforce data connector with instructions for the Salesforce Shield Event Monitoring license requirement", contentTypes: ["Data Connector"] },
      { version: "3.0.9", date: "17-11-2025", text: "Resolved bug in CCF Data Connector related to column names", contentTypes: ["Data Connector"] },
      { version: "3.0.8", date: "04-11-2025", text: "Resolved bugs in Analytic rules related to TimestampDerived field.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.7", date: "02-11-2025", text: "Updated CCF Data Connector polling config to v65.0.", contentTypes: ["Data Connector"] },
      { version: "3.0.6", date: "17-10-2025", text: "Updated KQL transformation logic to map USER_NAME to the UserEmail column instead of USER_EMAIL.", contentTypes: [] },
      { version: "3.0.5", date: "20-08-2025", text: "Moving Salesforce Service cloud CCF Data Connector to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "11-07-2025", text: "Salesforce Workbook updated with new ThreatIntelIndicators.", contentTypes: ["Workbook"] },
      { version: "3.0.3", date: "03-07-2025", text: "Added Preview tag to CCF Connector title.", contentTypes: [] },
      { version: "3.0.3", date: "03-07-2025", text: "Deprecated Function app Connector.", contentTypes: [] },
      { version: "3.0.2", date: "24-03-2025", text: "Updated Analytic rules query to use TimeStampDerived column rather than TimeGenerated.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "06-02-2025", text: "Updated timeframes for Salesforce cloud Analytic rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "05-09-2023", text: "Manual deployment instructions updated for Data Connector.", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Samsung Knox Asset Intelligence",
    entries: [
      { version: "3.0.2", date: "25-07-2025", text: "Updated Data Connector to support new Columns.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "28-01-2025", text: "Enhance DCR instruction steps in Data Connector & Update Analytics rules name.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "22-04-2025", text: "Initial Solution public Release.", contentTypes: [] },
    ],
  },
  {
    name: "SAP",
    entries: [
      { version: "2.0.74", date: "28-06-2023", text: "SAP Audit Control Workbook", contentTypes: ["Workbook"] },
      { version: "2.0.76", date: "18-09-2023", text: "SAP Audit Control Workbook", contentTypes: ["Workbook"] },
      { version: "2.0.76", date: "18-09-2023", text: "Reflect alerts in addition to incidents", contentTypes: [] },
      { version: "2.0.76", date: "18-09-2023", text: "Added visualizations for better monitoring", contentTypes: [] },
      { version: "2.0.76", date: "18-09-2023", text: "Focus on SAP alerts by default", contentTypes: [] },
      { version: "2.0.76", date: "18-09-2023", text: "Exclude users using wildcards- The SAPUsersGetVIP function now supports excluding users using wildcards. For examples, can exclude all firefighters using FF*.", contentTypes: [] },
      { version: "2.0.76", date: "18-09-2023", text: "The “SAP - Security Audit Log Configuration Change” logic was modified so it will not alert on dummy changes that surface after system restart", contentTypes: [] },
      { version: "3.0.1", date: "01-01-2024", text: "Content migrated to a content hub V3 protocol- to overcome the error of “Creating the resource of type Microsoft.Resources/templateSpecs would exceed the quota of ‘800’ resources of type Microsoft.Resources/templateSpecs per resource group”", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "Updated and improved logic for these alert rules:", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAP - Execution of an Obsolete or an Insecure Function Module", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAP - Multiple Password Changes", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAP - Assignment of a sensitive role", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAP - Sensitive User's Password Change and Log in", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAP - Login from unexpected network", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAP - Sensitive privileged user makes a change in another user", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "Updated parsers:", contentTypes: ["Parser"] },
      { version: "3.0.3", date: "02-02-2024", text: "SAPChangeDocsLog- support for blank workspaces, added SystemGuid", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAPJAVAFilesLogs- switch to SAPControl file-based logs", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAPSpoolLog, SAPSpoolOutputLog- handle different SpoolRequestNumber formats in different SAP releases", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAPTableDataLog- handle SidGuid, UpdatedOn fields", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAPUsersAssignments- inffer user master data changes in near realtime", contentTypes: [] },
      { version: "3.0.3", date: "02-02-2024", text: "SAPUsersGetPrivileged- allow SAP AS JAVA systems support", contentTypes: [] },
      { version: "3.1.0", date: "06-03-2024", text: "New JAVA AS alert rules", contentTypes: [] },
      { version: "3.1.0", date: "06-03-2024", text: "SAP - (Preview) AS JAVA - Sensitive Privileged User Signed In", contentTypes: [] },
      { version: "3.1.0", date: "06-03-2024", text: "SAP - (Preview) AS JAVA - Sign-In from Unexpected Network", contentTypes: [] },
      { version: "3.1.0", date: "06-03-2024", text: "SAP - (Preview) AS JAVA - User Creates and Uses New User", contentTypes: [] },
      { version: "3.1.0", date: "06-03-2024", text: "SAP - Execution of an Obsolete or an Insecure Function Module- improved logic", contentTypes: [] },
      { version: "3.1.4", date: "15-04-2024", text: "Bug fixes", contentTypes: [] },
      { version: "3.1.5", date: "25-04-2024", text: "Fixes SAPCONTROL_CL error when using cross workspace feature", contentTypes: [] },
      { version: "3.1.7", date: "16-06-2024", text: "Improved and simplified logic for 4 alert rules:", contentTypes: [] },
      { version: "3.1.7", date: "16-06-2024", text: "SAP Data has Changed During Debugging Activity", contentTypes: [] },
      { version: "3.1.7", date: "16-06-2024", text: "SAP Execution of Sensitive Function Module", contentTypes: [] },
      { version: "3.1.7", date: "16-06-2024", text: "SAP Function module tested", contentTypes: [] },
      { version: "3.1.7", date: "16-06-2024", text: "SAP Multiple Logons by IP.", contentTypes: [] },
      { version: "3.1.7", date: "16-06-2024", text: "Fixed bugs in parsers:", contentTypes: ["Parser"] },
      { version: "3.1.7", date: "16-06-2024", text: "SAPCRLog, SAPGetSystemParameter.", contentTypes: [] },
      { version: "3.1.7", date: "16-06-2024", text: "Added additionalData column to \"SAP - Systems\" watchlist", contentTypes: [] },
      { version: "3.1.13", date: "11-07-2024", text: "Handle the \"Unknown function\" error on queries using multiple parsers.", contentTypes: ["Parser"] },
      { version: "3.1.13", date: "11-07-2024", text: "Disable incident creation for low severity data collection health alerts.", contentTypes: [] },
      { version: "3.1.13", date: "11-07-2024", text: "Excluded SAPJAVAFilesLogs from being queried in SAPSystems and SAPUsers* parsers by default.", contentTypes: ["Parser"] },
      { version: "3.1.13", date: "11-07-2024", text: "Updated \"Audit Controls\" workbook to support solution versions 3.X.", contentTypes: ["Workbook"] },
      { version: "3.1.13", date: "11-07-2024", text: "Updated workbooks to default to local workspace even when workspace is a fresh one.", contentTypes: ["Workbook"] },
      { version: "3.2.02", date: "12-02-2024", text: "Added two new detections: SAP - (Preview) Dormant users detected, SAP - (Preview) Developer key assigned in a production system (Preview). Switched SAPAuditLog to be based on standard table ABAPAuditLog. Added support for SAP version 7.31 through 7.4 to reflect dialog users IP address using TableDataLog (DBTABLOG). Enable table logging for SAP table USR41 to enable this feature", contentTypes: [] },
    ],
  },
  {
    name: "SAP BTP",
    entries: [
      { version: "3.0.12", date: "29-12-2025", text: "Updated grid view UI with new subaccount onboarding properties", contentTypes: [] },
      { version: "3.0.11", date: "29-12-2025", text: "Added queryWindowDelayInMin for SAP log delays and included the SAP CIS analytic rules.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.10", date: "03-10-2025", text: "Resolves data connector duplicate handle pagination errors", contentTypes: ["Data Connector"] },
      { version: "3.0.9", date: "02-09-2025", text: "Connector UI fix", contentTypes: [] },
      { version: "3.0.8", date: "03-12-2024", text: "Removal of Function App data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.7", date: "24-07-2024", text: "Updated BAS malware rule after changes in source message format", contentTypes: [] },
      { version: "3.0.6", date: "23-07-2024", text: "Resolves ContentTemplateNotFound error for CCP", contentTypes: [] },
      { version: "3.0.5", date: "15-07-2024", text: "Remove data source mappings for deprecated function app connector", contentTypes: [] },
      { version: "3.0.4", date: "11-07-2024", text: "Move codeless connector to GA and deprecated function app connector", contentTypes: [] },
      { version: "3.0.3", date: "21-06-2024", text: "Fixes issue with data connector TokenEndpoint query parameter", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "21-03-2024", text: "Fix data connector version mismatch", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "19-03-2024", text: "Add data connector based on CCP with support for multiple subaccounts", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "SAP ETD Cloud",
    entries: [
      { version: "3.0.3", date: "11-09-2025", text: "Investigations API Connector added", contentTypes: [] },
      { version: "3.0.2", date: "24-06-2025", text: "Data connector polling window reduced", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "31-03-2025", text: "SAP OData entity change from TriggeringEvents to new NormalizedTriggeringEvents", contentTypes: [] },
      { version: "3.0.0", date: "17-02-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "SAP LogServ",
    entries: [
      { version: "3.0.5", date: "01-04-2026", text: "preview tag remove, UI update", contentTypes: [] },
      { version: "3.0.4", date: "11-08-2025", text: "Connector UI updates", contentTypes: [] },
      { version: "3.0.3", date: "17-07-2025", text: "Observability Workbook added", contentTypes: ["Workbook"] },
      { version: "3.0.2", date: "25-06-2025", text: "Analytic Rules for HANA DB added", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "09-04-2025", text: "Retention setting dropped from table to default to LogAnalytics ws default", contentTypes: [] },
      { version: "3.0.0", date: "17-02-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "SAP S4 Cloud Public Edition",
    entries: [
      { version: "3.0.3", date: "01-04-2026", text: "preview tag remove, UI update", contentTypes: [] },
      { version: "3.0.2", date: "30-10-2025", text: "DCR transform updates", contentTypes: [] },
      { version: "3.0.1", date: "16-10-2025", text: "DCR transform updates", contentTypes: [] },
      { version: "3.0.0", date: "06-10-2025", text: "Initial release", contentTypes: [] },
    ],
  },
  {
    name: "Security Threat Essential Solution",
    alias: "SecurityThreatEssentialSolution",
    entries: [
      { version: "3.0.3", date: "05-06-2024", text: "Added missing AMA Data Connector reference in Analytic Rule", contentTypes: ["Analytic Rule","Data Connector"] },
      { version: "3.0.2", date: "18-03-2024", text: "Tagged for dependent solutions for deployment", contentTypes: [] },
      { version: "3.0.1", date: "10-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
      { version: "3.0.0", date: "06-07-2023", text: "Updating Analytic rule query for KQL failure", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "SecurityBridge App",
    entries: [
      { version: "3.2.1", date: "22-09-2025", text: "adding SecurityBridge_CL table", contentTypes: [] },
      { version: "3.2.0", date: "15-07-2025", text: "adding push API data connector", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "12-02-2025", text: "Adjusted contact and support", contentTypes: [] },
      { version: "3.0.1", date: "07-01-2025", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "08-08-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Semperis Directory Services Protector",
    entries: [
      { version: "3.0.2", date: "23-04-2025", text: "Updated Analytical Rule and Parser", contentTypes: ["Analytic Rule","Parser"] },
      { version: "3.0.1", date: "28-03-2025", text: "Removed duplicate query and fixed query in Workbook SemperisDSPSecurityIndicators.", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "18-03-2025", text: "Fixed correct function name in Workbook SemperisDSPSecurityIndicators.", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "Semperis Lightning",
    alias: "SemperisLightning",
    entries: [
      { version: "3.0.0", date: "23-03-2026", text: "Initial Solution Release. Added Semperis Lightning Connector", contentTypes: [] },
    ],
  },
  {
    name: "Senserva Pro",
    alias: "SenservaPro",
    entries: [
      { version: "3.0.0", date: "11-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
    ],
  },
  {
    name: "Sentinel SOAR Essentials",
    alias: "SentinelSOARessentials",
    entries: [
      { version: "3.0.7", date: "13-01-2026", text: "Removed the redundant *IncidentOverview* workbook from SentinelSOAREssentianls", contentTypes: ["Workbook"] },
      { version: "3.0.6", date: "24-12-2025", text: "Added new playbooks for the incident alerting.", contentTypes: ["Playbook"] },
      { version: "3.0.5", date: "11-12-2025", text: "Updated the lookback value to 7 days across all three Logic Apps and Renamed the Logic App title to \"URL Trigger Entity Analyzer\".", contentTypes: [] },
      { version: "3.0.4", date: "17-11-2025", text: "Added new playbooks for the Sentinel SentinelSOARessentials solution.", contentTypes: ["Playbook"] },
      { version: "3.0.3", date: "30-05-2025", text: "This upgrade focused on improving Playbook functionality, updating documentation, and refining deployment parameters.", contentTypes: ["Playbook"] },
      { version: "3.0.2", date: "26-10-2023", text: "Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR.", contentTypes: [] },
      { version: "3.0.1", date: "11-08-2023", text: "Updated timeContextFromParameter with TimeRange in the Workbook template.", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "17-07-2023", text: "Updated Workbook template to remove unused variables.", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "SentinelOne",
    entries: [
      { version: "3.0.9", date: "14-04-2026", text: "Deprecate SentinelOne (using Azure Function)", contentTypes: [] },
      { version: "3.0.8", date: "24-03-2026", text: "Rename CCF solution to SentinelOne (via Codeless Connector Framework)", contentTypes: [] },
      { version: "3.0.7", date: "09-01-2026", text: "Updated broken URL and bumped the SentinelOne solution version", contentTypes: [] },
      { version: "3.0.6", date: "10-02-2025", text: "Advancing CCP Data Connector from Public preview to Global Availability.", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "20-01-2025", text: "Updated \"Sentinel One - Agent uninstalled from multiple hosts\" Analytic Rule with ActivityType", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "15-01-2025", text: "Added older Function app Data Connector again to SOlution until final deprecation of Function app happens", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "12-12-2024", text: "Added new CCP Data Connector and Updated Parser", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.2", date: "11-09-2024", text: "Updated the python runtime version to 3.11 in Data Connector Function App", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "03-05-2024", text: "Repackaged for Parser issue fix", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "28-07-2023", text: "Bug fixes in API version.", contentTypes: [] },
    ],
  },
  {
    name: "Seraphic Security",
    alias: "SeraphicSecurity",
    entries: [
      { version: "2.0.0", date: "17-11-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "ServiceNow TISC",
    entries: [
      { version: "3.0.0", date: "15-01-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Sevco Security",
    alias: "SevcoSecurity",
    entries: [
      { version: "3.0.0", date: "18-07-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "SIGNL4",
    entries: [
      { version: "3.0.0", date: "02-06-2025", text: "This version introduces several updates to the SIGNL4 solution for Microsoft Sentinel, focusing on improving metadata, updating templates, and enhancing descriptions for better clarity and functionality.", contentTypes: [] },
    ],
  },
  {
    name: "Silverfort",
    entries: [
      { version: "3.0.0", date: "13-09-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "SINEC Security Guard",
    entries: [
      { version: "3.0.0", date: "12-11-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Slack Audit",
    alias: "SlackAudit",
    entries: [
      { version: "3.0.5", date: "12-12-2025", text: "Updated the Parser yaml file.", contentTypes: ["Parser"] },
      { version: "3.0.4", date: "28-07-2025", text: "Removed Deprecated Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "30-06-2025", text: "Moving CCF Data Connector to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "30-05-2025", text: "Preview tag added to CCF Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "24-04-2025", text: "Migrated the Function app Connector to CCP Data Connector and Updated the Parser.", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.0", date: "23-08-2023", text: "Manual deployment instructions updated for Data Connector & Convert Parser from text to yaml.", contentTypes: ["Data Connector","Parser"] },
    ],
  },
  {
    name: "SlashNext",
    entries: [
      { version: "3.0.0", date: "17-12-2024", text: "Modified the Phishing Investigation application in Data Connector Function App.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "17-12-2024", text: "Added new Playbook Phishing Incident Investigation.", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "SlashNext SIEM",
    entries: [
      { version: "3.1.0", date: "10-07-2024", text: "Integrated API for detailed data", contentTypes: [] },
      { version: "3.0.0", date: "25-04-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Snowflake",
    entries: [
      { version: "3.0.9", date: "03-02-2026", text: "Updated the analytic rule query.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.8", date: "22-12-2025", text: "Added a 120‑minute ingestion delay for the Snowflake connector and updated the parser KQL to surface accurate start/end timestamps.", contentTypes: ["Parser"] },
      { version: "3.0.7", date: "10-12-2025", text: "Resolved bug in CCF Data Connector related to Output stream for Snowflake tables.", contentTypes: ["Data Connector"] },
      { version: "3.0.6", date: "20-11-2025", text: "Resolved bug in CCF Data Connector related to SQL queries", contentTypes: ["Data Connector"] },
      { version: "3.0.5", date: "13-10-2025", text: "Updated Parser to support function app table", contentTypes: ["Parser"] },
      { version: "3.0.4", date: "23-09-2025", text: "Updated parser to extend the normalized fields, and updated Analytic Rules, Workbooks to use CCF connector fields.", contentTypes: ["Analytic Rule","Workbook","Parser"] },
      { version: "3.0.3", date: "09-09-2025", text: "Updated DCR and Poller to prevent redundant data ingestion, improve pagination and handle connection interruptions for Snowflake CCF connector", contentTypes: [] },
      { version: "3.0.2", date: "20-08-2025", text: "Moving Snowflake CCF Data Connector to GA.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "26-05-2025", text: "Migrated the Function app connector to CCP Data Connector and Updated Parser", contentTypes: ["Data Connector","Parser"] },
      { version: "3.0.0", date: "31-08-2023", text: "Manual deployment instructions updated for Data Connector & Convert Parser from text to Yaml", contentTypes: ["Data Connector","Parser"] },
    ],
  },
  {
    name: "SOC Handbook",
    entries: [
      { version: "3.0.6", date: "13-01-2026", text: "Updated *IncidentOverview* Workbook to correct the incident render issue by using ProviderIncidentId with IncidentNumber", contentTypes: ["Workbook"] },
      { version: "3.0.5", date: "24-09-2025", text: "Updated *SecurityOperationsEfficiency* to fix Mean time to triage", contentTypes: [] },
      { version: "3.0.4", date: "22-04-2025", text: "Updated *Azure to Sentinel Cost* - Workbook.", contentTypes: ["Workbook"] },
      { version: "3.0.3", date: "28-11-2023", text: "Changes for rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
      { version: "3.0.2", date: "21-11-2023", text: "Updated SecurityOperationsEfficiency Workbook to run the query on \"set in query\".", contentTypes: ["Workbook"] },
      { version: "3.0.1", date: "14-07-2023", text: "Updated Workbook to correctly get the drop down for Subscription and Workspace.", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "07-07-2023", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "SOC Prime CCF",
    entries: [
      { version: "3.0.1", date: "16-02-2026", text: "New Analytic Rules were added.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "24-11-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "SOC Process Framework",
    alias: "SOC-Process-Framework",
    entries: [
      { version: "3.0.2", date: "10-07-2025", text: "Updates to the playbook description, prerequisites, and post-deployment instructions, as well as adjustments to variable naming conventions for consistency .", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "24-07-2023", text: "Update Table markdown from \" : \" to \" - \" in SOCProcessFramework Workbook .", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "12-07-2023", text: "Correction of Logo in the solution.", contentTypes: [] },
    ],
  },
  {
    name: "SonicWall Firewall",
    entries: [
      { version: "3.1.2", date: "28-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.1.1", date: "27-06-2024", text: "OMS Data Connector Migration", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "29-03-2024", text: "Addition of new content, including ASIM Network Session and Web Session parsers, Analytic Rules, Hunting Queries, and a Workbook.", contentTypes: ["Analytic Rule","Hunting Query","Workbook","Parser"] },
      { version: "3.0.0", date: "18-09-2023", text: "Addition of new SonicWall Firewall AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Sonrai Security",
    alias: "SonraiSecurity",
    entries: [
      { version: "3.0.0", date: "04-12-2023", text: "Added entity mapping to Analytic Rules", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Sophos Endpoint Protection",
    entries: [
      { version: "3.0.8", date: "14-04-2026", text: "Deprecate Sophos Endpoint Protection (using Azure Function)", contentTypes: [] },
      { version: "3.0.7", date: "24-03-2026", text: "Sophos Endpoint Protection (via Codeless Connector Platform)", contentTypes: [] },
      { version: "3.0.6", date: "23-10-2025", text: "Updated the solution to be compatible with tool changes for the connection name.", contentTypes: [] },
      { version: "3.0.5", date: "21-08-2024", text: "Data Connector [Sophos Endpoint Protection (using REST API)] Globally Available", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "01-07-2024", text: "Update files for CCP Connector to fix the connectivity", contentTypes: [] },
      { version: "3.0.3", date: "25-04-2024", text: "Repackaged for parser issue with old names", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "12-04-2024", text: "Repackaged for parser fix in solution package", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "12-03-2024", text: "Updated Sophos Endpoint Function App and Parser", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "12-03-2024", text: "Added new CCP Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "14-08-2023", text: "Manual deployment instructions updated for Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Sophos XG Firewall",
    entries: [
      { version: "3.0.1", date: "09-12-2024", text: "Rmoved Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "01-08-2024", text: "Update Parser as part of Syslog migration Deprecating Data Connectors", contentTypes: ["Data Connector","Parser"] },
    ],
  },
  {
    name: "SOX IT Compliance",
    entries: [
      { version: "3.0.0", date: "11-12-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "SpyCloud Enterprise Protection",
    entries: [
      { version: "3.0.1", date: "18-07-2024", text: "Fixed Invalid Analytic Rule SpyCloudEnterpriseProtectionMalwareRule.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "12-09-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Squadra Technologies SecRmm",
    entries: [
      { version: "3.0.0", date: "15-11-2025", text: "Added Analytical Rule", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Squid Proxy",
    alias: "SquidProxy",
    entries: [
      { version: "3.0.2", date: "16-05-2025", text: "Optimized Parser for improved performance and parsing accuracy", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "16-12-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "12-08-2024", text: "Deprecating Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Styx Intelligence",
    entries: [
      { version: "3.0.0", date: "14-04-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Symantec Endpoint Protection",
    entries: [
      { version: "3.0.5", date: "13-01-2025", text: "Removed Custom Entity mappings from Analytic rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "17-12-2024", text: "Removed Deprecated Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "01-08-2024", text: "Update Parser as part of Syslog migration", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "26-04-2024", text: "Repackaged for fix on parser in maintemplate to have old parsername and parentid", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "18-04-2024", text: "Repackaged for fix in parser in maintemplate", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "15-04-2024", text: "Updated Parser SymantecEndpointProtection.yaml to automatic update applicable logs", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "Symantec ProxySG",
    alias: "SymantecProxySG",
    entries: [
      { version: "3.0.3", date: "20-01-2025", text: "Removed Custom Entity mappings from Analytic rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "24-12-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "01-08-2024", text: "Update Parser as part of Syslog migration", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "06-11-2023", text: "Modified the Data Connector with improved onboarding instructions and Optimized the Parser to process the logs with improved performance", contentTypes: ["Data Connector","Parser"] },
    ],
  },
  {
    name: "Symantec VIP",
    entries: [
      { version: "3.0.2", date: "20-01-2025", text: "Removed Custom Entity mappings from Analytic rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "31-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "01-08-2024", text: "Update Parser as part of Syslog migration", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "Synqly Integration Connector",
    alias: "SynqlyIntegrationConnector",
    entries: [
      { version: "3.0.0", date: "20-02-2026", text: "Initial Solution release supporting ingestion of 10 ASIM event types directly to built-in ASIM tables.", contentTypes: [] },
    ],
  },
  {
    name: "Syslog",
    entries: [
      { version: "3.0.7", date: "04-11-2024", text: "Updated the Syslog Data Connector template to latest version", contentTypes: ["Data Connector"] },
      { version: "3.0.6", date: "01-08-2024", text: "Updated Analytic rules for entity mappings and parameter for parser function", contentTypes: ["Analytic Rule","Parser"] },
      { version: "3.0.5", date: "16-07-2024", text: "Added 2 new Workspace Function Parsers and a new Workbook", contentTypes: ["Workbook","Parser"] },
      { version: "3.0.4", date: "27-06-2024", text: "Updated Connectivity criteria query for Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "10-04-2024", text: "Updated Entity Mappings Analytic Rule FailedLogonAttempts_UnknownUser.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "21-02-2024", text: "Addition of new Syslog AMA Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "01-02-2024", text: "Hunting Queries Description updated", contentTypes: ["Hunting Query"] },
    ],
  },
  {
    name: "Tacit Red Defender Threat Intelligence",
    alias: "TacitRed-Defender-ThreatIntelligence",
    entries: [
      { version: "3.0.1", date: "11-02-2026", text: "Fixed deployment failure: Restored functionCode.zip package removed in prior commit. Removed workspace-scoped roleAssignments from Function App template to resolve InvalidTemplate error during Content Hub deployment.", contentTypes: [] },
      { version: "3.0.0", date: "09-12-2025", text: "Initial release of TacitRed Defender Threat Intelligence solution with Azure Function and Logic App playbook for syncing TacitRed compromised credentials to Microsoft Defender Threat Intelligence.", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "Tacit Red IOC CrowdStrike",
    alias: "TacitRed-IOC-CrowdStrike",
    entries: [
      { version: "3.0.3", date: "06-03-2026", text: "Added User-Agent: data443-tacitred-crowdstrike/1.0 header to CrowdStrike API calls (OAuth2 token + IOC POST) for CrowdStrike Technology Partner certification compliance.", contentTypes: [] },
      { version: "3.0.2", date: "02-03-2026", text: "Fixed hardcoded CrowdStrike_BaseUrl default (https://api.us-2.crowdstrike.com) causing auth failures for US-1/EU-1 customers. Cleared to empty string with regional URL guidance.", contentTypes: [] },
      { version: "3.0.1", date: "17-02-2026", text: "Fixed InvalidResourceLocation error: removed non-standard location parameter from inner template. Added missing hidden-SentinelTemplateName and hidden-SentinelTemplateVersion tags so playbook template appears in Sentinel Automation. Removed TacitRed_Domain filter — playbook now fetches all findings.", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "23-01-2026", text: "Initial Solution Release - Playbook for automated IOC synchronization between TacitRed and CrowdStrike Falcon. Supports Domain and SHA256 IOC types.", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "Tacit Red SentinelOne",
    alias: "TacitRed-SentinelOne",
    entries: [
      { version: "3.0.3", date: "03-03-2026", text: "Added filter.accountIds to SentinelOne IOC POST request body. Without this field, the SentinelOne API (/web/api/v2.1/threat-intelligence/iocs) returns HTTP 500. Playbook now includes the account ID in the POST body for reliable IOC creation.", contentTypes: ["Playbook"] },
      { version: "3.0.2", date: "23-02-2026", text: "Fixed SentinelOne_BaseUrl parameter: default value was hardcoded to https://usea1-001.sentinelone.net (a non-existent placeholder URL) since v1.0.0. Customers deploying from Content Hub without changing this field would get a connection timeout on every playbook run. Default is now blank — customers must enter their actual SentinelOne console URL. Updated parameter description and README to guide customers.", contentTypes: ["Playbook"] },
      { version: "3.0.1", date: "17-02-2026", text: "Fixed InvalidResourceLocation deployment error by removing non-standard location parameter from inner template, aligned with standard Content Hub variable pattern. Fixed metadata resource name bracket type. Removed TacitRed_Domain filter parameter from deployment UI. Added missing hidden-SentinelTemplateName and hidden-SentinelTemplateVersion tags for Content Hub template discovery.", contentTypes: [] },
      { version: "3.0.0", date: "09-12-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Tacit Red Threat Intelligence",
    alias: "TacitRedThreatIntelligence",
    entries: [
      { version: "3.0.0", date: "09-12-2025", text: "Initial TacitRed Compromised Credentials CCF solution package with data connector, analytics rules and workbook.", contentTypes: ["Data Connector","Workbook"] },
    ],
  },
  {
    name: "Team Cymru Scout",
    entries: [
      { version: "3.1.1", date: "25-09-2025", text: "Fixed bug in TeamCymruScoutEnrichIncident playbook.", contentTypes: ["Playbook"] },
      { version: "3.1.0", date: "16-05-2025", text: "Updated Workbook, Parser, Data Connector and created new playbook.", contentTypes: ["Data Connector","Playbook","Workbook","Parser"] },
      { version: "3.0.0", date: "07-08-2024", text: "Added Solution for Team Cymru Scout.", contentTypes: [] },
    ],
  },
  {
    name: "Teams",
    entries: [
      { version: "3.0.0", date: "19-07-2023", text: "Updated Workbook template to remove unused variables.", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "Tenable App",
    entries: [
      { version: "3.1.2", date: "03-04-2026", text: "Updated checkpoint field in vuln data fetching. New field name: indexed_at", contentTypes: [] },
      { version: "3.1.2", date: "03-04-2026", text: "Corrected Tenable_IE_CL table references in Data Connector Configuration.", contentTypes: ["Data Connector"] },
      { version: "3.1.2", date: "03-04-2026", text: "Update PyTenableUABuild value to 3.1.0 in template.", contentTypes: [] },
      { version: "3.1.2", date: "03-04-2026", text: "Updating data connector UI page for multiple rsyslog configuration support in Tenable IE.", contentTypes: ["Data Connector"] },
      { version: "3.1.2", date: "03-04-2026", text: "Updated schema for Vulnerabilities and WAS Vulnerabilities in Tenable VM.", contentTypes: [] },
      { version: "3.1.1", date: "12-09-2025", text: "Added button for Azure Gov Cloud in the UI page of the data connector.", contentTypes: ["Data Connector"] },
      { version: "3.1.0", date: "19-06-2025", text: "Updated the python runtime version to 3.12. Updated pyTenable sdk version to 1.7.4. Added support for WAS Asset and WAS Vuln data ingestion. Removed Queue Trigger functions and updated with Durable Functions. Added support for Log Ingestion API and updated parsers and playbooks accordingly", contentTypes: ["Playbook","Parser"] },
      { version: "3.0.1", date: "05-09-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "3.0.0", date: "03-07-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Test Solution",
    alias: "TestSolution",
    entries: [
      { version: "3.0.0", date: "Contribution date in specific format", text: "overview about solution", contentTypes: [] },
    ],
  },
  {
    name: "TheHive",
    entries: [
      { version: "3.0.2", date: "06-04-2026", text: "codeless Data Connector bases on Rest + api polling Moved to GA + small fix to avoid arm-ttk validation issue", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "05-03-2026", text: "codeless Data Connector bases on Rest api polling", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "05-09-2023", text: "Manual deployment instructions updated for Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Theom",
    entries: [
      { version: "3.0.0", date: "04-12-2023", text: "Updated all Analytical Rule with entity mappings", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Threat Analysis & Response",
    alias: "ThreatAnalysis&Response",
    entries: [
      { version: "3.0.1", date: "01-09-2025", text: "Updated the Threat Analysis & Response workbook to view in graphical view.", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "11-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
    ],
  },
  {
    name: "Threat Intelligence",
    entries: [
      { version: "3.1.3", date: "20-01-2026", text: "Updated Analytical Rule to include the missing column.", contentTypes: ["Analytic Rule"] },
      { version: "3.1.2", date: "26-06-2025", text: "Updated TI Map IP Entity to CommonSecurityLog Analytical Rules to exclude private ips", contentTypes: ["Analytic Rule"] },
      { version: "3.1.1", date: "22-01-2025", text: "Fixed feature flag configs for PMDTI, MDTI, and UploadAPI based on the new FeatureStates. Fix api-version and documentation link for UploadAPI.", contentTypes: [] },
      { version: "3.1.0", date: "15-01-2025", text: "Updated feature flags for PMDTI and MDTI for GA, and Upload API for PP.", contentTypes: [] },
      { version: "3.0.9", date: "04-12-2024", text: "Modified DomainEntity_EmailUrlInfo Analytic Rule to resolve memory issues", contentTypes: ["Analytic Rule"] },
      { version: "3.0.8", date: "28-11-2024", text: "Removed (Preview) from name for Data Connectors Microsoft Defender Threat Intelligence and Premium Microsoft Defender Threat Intelligence, make the MDTI and PMDTI data connctors available in gov solution, and update descriptions of data connectors.", contentTypes: ["Data Connector"] },
      { version: "3.0.7", date: "24-10-2024", text: "Updated Columns of Analytical Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.6", date: "24-09-2024", text: "Updated Entity Mappings of Analytical Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.5", date: "19-08-2024", text: "Updated isConnectedQuery for Data Connector of \"Threat Intelligence Upload Indicators API\".", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "22-05-2024", text: "Updated connectivity criteria for Data Connector and added New Data Connector for Premium Microsoft Defender Threat Intelligence (Preview)", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "21-03-2024", text: "Updated Entity Mappings of Analytical Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "23-10-2023", text: "Updated KQL of analytic rules to improve performance in large datasets", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "22-08-2023", text: "Removed (Preview) from Name field in Analytical Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "14-08-2023", text: "Modified Analytical Rule (TI map Domain entity to SecurityAlert). Updated dynamic([1]) to dynamic([1,1]) so as to make result array of array consistent.", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Threat Intelligence (NEW)",
    entries: [
      { version: "3.0.17", date: "02-04-2026", text: "Updated TI map Domain entity to SecurityAlert analytic rule with deduplication and filters", contentTypes: ["Analytic Rule"] },
      { version: "3.0.16", date: "25-03-2026", text: "Optimized TI map Domain entity to EmailUrlInfo analytic rule with deduplication and filters", contentTypes: ["Analytic Rule"] },
      { version: "3.0.15", date: "09-03-2026", text: "Update IPEntity_DuoSecurity Analytic Rule", contentTypes: ["Analytic Rule"] },
      { version: "3.0.14", date: "16-02-2026", text: "Added Analytic Rule for URL IOC", contentTypes: ["Analytic Rule"] },
      { version: "3.0.13", date: "27-01-2026", text: "Updated package to include latest query changes.", contentTypes: [] },
      { version: "3.0.12", date: "23-12-2025", text: "Replaces the 'AlertPriority' field with 'Severity' in the IPEntity_AppServiceHTTPLogs analytic rule and updates all related references.", contentTypes: ["Analytic Rule"] },
      { version: "3.0.11", date: "02-12-2025", text: "Update Threat Intelligence package and release notes", contentTypes: [] },
      { version: "3.0.10", date: "20-11-2025", text: "Update Syntax for IPEntity_CloudAppEvents_Updated.yaml Rule", contentTypes: [] },
      { version: "3.0.9", date: "07-11-2025", text: "Updated EmailEntity_CloudAppEvents_Updated.yaml to adjust lookback periods to match the query period and frequency.", contentTypes: [] },
      { version: "3.0.8", date: "18-10-2025", text: "Update IPEntity_AzureFirewall.yaml to use Resource specific tables rather than AzureDiagnostics", contentTypes: [] },
      { version: "3.0.7", date: "16-10-2025", text: "Added new connector for Threat Intelligence TAXII export and now available in public preview.", contentTypes: [] },
      { version: "3.0.6", date: "08-09-2025", text: "Fixed the problem related to the Workbook query", contentTypes: ["Workbook"] },
      { version: "3.0.5", date: "03-09-2025", text: "Support for a new data type, ThreatIntelObjects, across multiple Threat Intelligence Data Connector templates", contentTypes: ["Data Connector"] },
      { version: "3.0.4", date: "08-08-2025", text: "Updated Data Connectors and Analytic Rules to ensures consistency and likely aligns with updated connector schemas or naming conventions", contentTypes: ["Analytic Rule","Data Connector"] },
      { version: "3.0.3", date: "25-07-2025", text: "Added several new Data Connectors for Microsoft Sentinel, aimed at enhancing threat intelligence integration capabilities", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "10-07-2025", text: "Improve kql query efficiency and accuracy", contentTypes: [] },
      { version: "3.0.1", date: "17-04-2025", text: "Updated entity mappings of Analytic Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "02-04-2025", text: "Initial solution release", contentTypes: [] },
    ],
  },
  {
    name: "Threat Intelligence Solution for Azure Government",
    entries: [
      { version: "3.0.5", date: "22-01-2025", text: "Fixed feature flag configs for PMDTI, MDTI, and UploadAPI based on the new FeatureStates. Fix api-version and documentation link for UploadAPI.", contentTypes: [] },
      { version: "3.0.4", date: "15-01-2025", text: "Updated feature flags for PMDTI and MDTI for GA, and Upload API for PP.", contentTypes: [] },
      { version: "3.0.3", date: "28-11-2024", text: "Removed (Preview) from name for Data Connectors Microsoft Defender Threat Intelligence and Premium Microsoft Defender Threat Intelligence, make the MDTI and PMDTI data connctors available in gov solution, and update descriptions of data connectors.", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "19-08-2024", text: "Updated isConnectedQuery for Data Connector of \"Threat Intelligence Upload Indicators API\".", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "06-08-2024", text: "Updated the URL in data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "02-08-2024", text: "Added a new data connector of \"Threat Intelligence Upload Indicators API\" for Fairfax", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "ThreatConnect",
    entries: [
      { version: "3.0.1", date: "02-07-2025", text: "Updated ThreatConnect Workbook to ThreatIntelIndicators table references.", contentTypes: ["Workbook"] },
      { version: "3.0.1", date: "10-06-2024", text: "Added missing AMA Data Connector reference in Analytic rules", contentTypes: ["Analytic Rule","Data Connector"] },
      { version: "3.0.0", date: "12-10-2023", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Tomcat",
    entries: [
      { version: "3.0.1", date: "09-12-2024", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "13-08-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Torq",
    entries: [
      { version: "3.0.1", date: "24-12-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Transmit Security",
    alias: "TransmitSecurity",
    entries: [
      { version: "3.0.2", date: "20-11-2024", text: "Change Functions to support one endpoint at a time", contentTypes: [] },
      { version: "3.0.1", date: "03-09-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "3.0.0", date: "11-07-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Trellix",
    entries: [
      { version: "3.0.1", date: "03-04-2026", text: "Move Trellix solution to GA, remove preview state.", contentTypes: [] },
      { version: "3.0.0", date: "26-02-2026", text: "Introduce the Trellix solution with a CCF Data Connector and parser", contentTypes: ["Data Connector","Parser"] },
    ],
  },
  {
    name: "Trend Micro Apex One",
    entries: [
      { version: "3.0.3", date: "13-12-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "12-07-2024", text: "Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "25-10-2023", text: "Hunting Query column corrected", contentTypes: ["Hunting Query"] },
      { version: "3.0.0", date: "22-09-2023", text: "Addition of new Trend Micro Apex One AMA Data connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Trend Micro Deep Security",
    entries: [
      { version: "3.0.1", date: "03-01-2025", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "27-06-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "2.0.1", date: "11-11-2022", text: "Updated OfferId", contentTypes: [] },
      { version: "2.0.0", date: "20-07-2022", text: "Initial Package", contentTypes: [] },
    ],
  },
  {
    name: "Trend Micro TippingPoint",
    entries: [
      { version: "3.0.1", date: "06-01-2025", text: "Removed Deprecated Data connector", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "27-06-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "2.0.2", date: "30-05-2023", text: "Updated Package", contentTypes: [] },
      { version: "2.0.1", date: "11-11-2022", text: "Initial Release", contentTypes: [] },
    ],
  },
  {
    name: "Trend Micro Vision One",
    entries: [
      { version: "3.0.1", date: "30-01-2025", text: "Updated hyperlink in Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Tropico",
    entries: [
      { version: "3.0.0", date: "02-12-2025", text: "Initial release", contentTypes: [] },
    ],
  },
  {
    name: "Ubiquiti UniFi",
    entries: [
      { version: "3.0.4", date: "17-12-2025", text: "Updated UbiquitiAuditEvent parser for new log format.", contentTypes: ["Parser"] },
      { version: "3.0.3", date: "04-12-2024", text: "Removed Deprecated Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "09-08-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "16-07-2024", text: "Updated the Analytic rules for missing TTP", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "23-01-2024", text: "Updated the Data Connector by removing preview-tag", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "UEBA Essentials",
    entries: [
      { version: "3.0.6", date: "10-02-2026", text: "Removed hardcoded PII-like sample values in the UEBA workbook by replacing specific \"value\" fields with empty strings", contentTypes: ["Workbook"] },
      { version: "3.0.5", date: "05-02-2026", text: "Resolved the UEBA Behaviors Analysis Workbook loading issue", contentTypes: ["Workbook"] },
      { version: "3.0.4", date: "29-01-2026", text: "Added new UEBA Behaviors Analysis Workbook to solution", contentTypes: ["Workbook"] },
      { version: "3.0.3", date: "24-11-2025", text: "Added new Hunting Queries", contentTypes: ["Hunting Query"] },
      { version: "3.0.2", date: "04-11-2025", text: "Enhance UEBA Essentials with multi-cloud detection capabilities", contentTypes: [] },
      { version: "3.0.1", date: "23-09-2024", text: "Updated query logic in Hunting Query [Anomalous Sign-in Activity]", contentTypes: ["Hunting Query"] },
      { version: "3.0.0", date: "07-11-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
      { version: "4.1.0", date: "23-11-2025", text: "Added new hunting queries: User-Centric Anomaly Investigation, Anomaly Detection Trend Analysis, Anomaly Template Distribution, Anomalous High-Score Activity Triage, Top Anomalous Source IP Triage. Updated solution version.", contentTypes: ["Hunting Query"] },
    ],
  },
  {
    name: "Upwind",
    entries: [
      { version: "3.0.0", date: "10-03-2026", text: "Initial solution release.", contentTypes: [] },
    ],
  },
  {
    name: "Valence Security",
    entries: [
      { version: "3.0.0", date: "27-11-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "vArmour Application Controller",
    entries: [
      { version: "3.0.1", date: "27-06-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "04-09-2023", text: "Addition of new vArmour Application Controller AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Varonis Purview",
    entries: [
      { version: "3.0.1", date: "25-03-2026", text: "Updated Schema Configuration", contentTypes: [] },
      { version: "3.0.0", date: "27-10-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Varonis SaaS",
    alias: "VaronisSaaS",
    entries: [
      { version: "3.0.3", date: "25-11-2025", text: "Add Informational severity level support", contentTypes: [] },
      { version: "3.0.2", date: "12-09-2025", text: "Save last alert ingest time", contentTypes: [] },
      { version: "3.0.1", date: "02-12-2025", text: "Bug fixes", contentTypes: [] },
      { version: "3.0.0", date: "02-07-2024", text: "Refactor azure function", contentTypes: [] },
    ],
  },
  {
    name: "Vectra AI Detect",
    entries: [
      { version: "3.0.2", date: "02-12-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "27-06-2024", text: "Deprecating Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "16-02-2024", text: "Addition of new Vectra AI Detect AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Vectra AI Stream",
    entries: [
      { version: "3.0.1", date: "19-11-2024", text: "Added new Parser vectra_match to the Solution Update the solution to support a new metadata type: match (suricata)", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "10-07-2024", text: "Added new AMA Data Connector Removed deprecated content Hunting Queries And Workbooks Added new Parsers to the Solution", contentTypes: ["Hunting Query","Data Connector","Workbook","Parser"] },
    ],
  },
  {
    name: "Vectra XDR",
    entries: [
      { version: "3.3.0", date: "29-10-2025", text: "Added Playbooks, Vectra API version update and Log ingestion API support", contentTypes: ["Playbook"] },
      { version: "3.2.0", date: "01-08-2024", text: "Added Playbooks, Analytic rules and updated Data Connector and Workbook", contentTypes: ["Analytic Rule","Data Connector","Playbook","Workbook"] },
      { version: "3.1.1", date: "03-04-2024", text: "Repackaged for parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.1.0", date: "04-01-2024", text: "Included Parser files in yaml format", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "04-10-2023", text: "Enhanced Data Connector logic to post data into Sentinel", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "21-08-2023", text: "Workbook metadata issue resolved", contentTypes: ["Workbook"] },
      { version: "3.0.0", date: "03-08-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Veeam",
    entries: [
      { version: "3.0.2", date: "15-10-2025", text: "Updated author to Veeam Software", contentTypes: [] },
      { version: "3.0.1", date: "03-10-2025", text: "Updated Coveware security findings integration; Removed irrelevant mappings from all analytic rules; Updated Workbooks' drilldown capabilities", contentTypes: ["Analytic Rule","Workbook"] },
      { version: "3.0.0", date: "26-08-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Veritas NetBackup",
    entries: [
      { version: "3.0.0", date: "13-11-2024", text: "Initial version", contentTypes: [] },
    ],
  },
  {
    name: "Versasec CMS",
    alias: "VersasecCMS",
    entries: [
      { version: "3.0.2", date: "25-02-2026", text: "ApiVersion for SavedSearches has been updated by Micrososft", contentTypes: [] },
      { version: "3.0.1", date: "05-02-2026", text: "Improvement in paging request and added new Analytic Rule and Parsers.", contentTypes: ["Analytic Rule","Parser"] },
      { version: "3.0.0", date: "11-12-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "VirtualMetric DataStream",
    entries: [
      { version: "3.0.0", date: "19-09-2025", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "VirusTotal",
    entries: [
      { version: "3.0.1", date: "02-06-2025", text: "Updated Playbook instructions for clarity", contentTypes: ["Playbook"] },
      { version: "3.0.0", date: "11-01-2024", text: "Updated solution to 3.0.0 to fix IP Enrichment - Virus Total report playbook", contentTypes: ["Playbook"] },
    ],
  },
  {
    name: "VMRay",
    entries: [
      { version: "3.0.1", date: "07-11-2025", text: "Fixed Premium ARM template", contentTypes: [] },
      { version: "3.0.0", date: "23-07-2025", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "VMware Carbon Black Cloud",
    entries: [
      { version: "3.0.8", date: "24-03-2026", text: "Deprecate to VMware Carbon Black Cloud (using Azure Function)", contentTypes: [] },
      { version: "3.0.7", date: "24-03-2026", text: "Rename to VMware Carbon Black Cloud via AWS S3(via Codeless Connector Framework)", contentTypes: [] },
      { version: "3.0.6", date: "28-01-2026", text: "Updated all VMware Carbon Black Cloud product page URLs to now point to the new Broadcom URL", contentTypes: [] },
      { version: "3.0.5", date: "22-01-2025", text: "Removed Custom Entity mappings from Analytic rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "19-11-2024", text: "Modified TransformKQL queries of CCP Data Connector", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "28-10-2024", text: "Added Sample Queries to the CCP Data Connector template", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "15-10-2024", text: "Added new CCP Data Connector to the Solution", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "17-04-2024", text: "Added Azure Deploy button for government portal deployments in Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "19-02-2024", text: "Alterts API integration done in Carbon Black Function App", contentTypes: [] },
    ],
  },
  {
    name: "VMware ESXi",
    alias: "VMWareESXi",
    entries: [
      { version: "3.0.6", date: "04-01-2026", text: "Remove broken VMware ESXi link", contentTypes: [] },
      { version: "3.0.5", date: "03-11-2025", text: "Added new Analytic Rule (VMware ESXi - Root change password) and (VMware ESXi - Multiple Failed SSH Login)", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "09-10-2025", text: "Added new Analytic Rule (VMware ESXi - SSH Enable on ESXi Host)", contentTypes: ["Analytic Rule"] },
      { version: "3.0.3", date: "02-12-2024", text: "Removed Deprecated Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "01-08-2024", text: "Update Parser as part of Syslog migration", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "30-04-2024", text: "Repackaged for parser name issue", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "15-04-2024", text: "Updated Parser VMwareESXi.yaml to automatic update applicable logs", contentTypes: ["Parser"] },
    ],
  },
  {
    name: "VMware SD-WAN and SASE",
    entries: [
      { version: "3.0.0", date: "13-03-2024", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "VMware vCenter",
    entries: [
      { version: "3.0.5", date: "13-06-2025", text: "Updating Parser to improve data parsing logic and adjusts entity mappings.", contentTypes: ["Parser"] },
      { version: "3.0.4", date: "03-12-2024", text: "Removed Deprecated Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.3", date: "18-11-2024", text: "Modified Parser vCenter.yaml for better parsing.", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "09-08-2024", text: "Deprecating Data Connectors.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "27-05-2024", text: "Updated the Data Connector instructions.", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "27-07-2023", text: "Corrected the links in the solution.", contentTypes: [] },
    ],
  },
  {
    name: "Votiro",
    entries: [
      { version: "3.0.1", date: "01-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "22-07-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Watchguard Firebox",
    entries: [
      { version: "3.0.0", date: "18-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Web Session Essentials",
    entries: [
      { version: "3.0.3", date: "06-06-2024", text: "Updated Entity Mapping Analytic Rule CommandInURL.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "31-01-2024", text: "Updated the solution to fix Analytic Rules deployment issue", contentTypes: ["Analytic Rule"] },
      { version: "3.0.1", date: "02-01-2024", text: "Tagged for dependent Solutions for deployment", contentTypes: [] },
      { version: "3.0.0", date: "11-09-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Web Shells Threat Protection",
    entries: [
      { version: "3.0.4", date: "10-06-2024", text: "Added missing AMA Data Connector reference in Analytic rules", contentTypes: ["Analytic Rule","Data Connector"] },
      { version: "3.0.3", date: "12-04-2024", text: "Updated Entity Mapping and Query of Analytic Rule Supernovawebshell.yaml and MaliciousAlertLinkedWebRequests.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "22-02-2024", text: "Tagged for dependent Solutions for deployment", contentTypes: [] },
      { version: "3.0.1", date: "25-10-2023", text: "Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR", contentTypes: [] },
      { version: "3.0.0", date: "12-07-2023", text: "Updated Hunting Queries descriptions to meet the 255 character limit.", contentTypes: ["Hunting Query"] },
    ],
  },
  {
    name: "Windows Firewall",
    entries: [
      { version: "3.0.3", date: "16-07-2025", text: "Changed Data Connector template_WindowsFirewallAma.json to GA", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "07-06-2024", text: "Changed Data Connector description template_WindowsFirewallAma.json", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "27-10-2023", text: "New Data Connector added WindowsFirewallAma", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "19-07-2023", text: "Initial Solution Release", contentTypes: [] },
    ],
  },
  {
    name: "Windows Forwarded Events",
    entries: [
      { version: "3.0.0", date: "10-04-2024", text: "Updated entity mappings of Analytical Rule", contentTypes: ["Analytic Rule"] },
    ],
  },
  {
    name: "Windows Security Events",
    entries: [
      { version: "3.0.12", date: "18-02-2026", text: "Removed external blog reference text from \"Remote Scheduled Task Creation or Update using ATSVC Named Pipe\" and \" Scheduled Task Creation or Update from User Writable Directory\" hunting query description", contentTypes: ["Hunting Query"] },
      { version: "3.0.11", date: "28-01-2026", text: "Updated Analytic Rule to fix the link from the description & Update Analytic Rule NonDCActiveDirectoryReplication - to reduce false positive results", contentTypes: ["Analytic Rule"] },
      { version: "3.0.10", date: "12-01-2026", text: "Update Analytic Rule NonDCActiveDirectoryReplication - fix swapped fields", contentTypes: ["Analytic Rule"] },
      { version: "3.0.9", date: "01-10-2024", text: "Removed kind from Hunting Query [Service installation from user writable directory]", contentTypes: ["Hunting Query"] },
      { version: "3.0.8", date: "23-07-2024", text: "Updated the Workspace type from resource type picker to resource picker in Workbook", contentTypes: ["Workbook"] },
      { version: "3.0.7", date: "12-06-2024", text: "Fixed the bugs from Analytic Rules NRT_execute_base64_decodedpayload.yaml and ADFSRemoteAuthSyncConnection.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.6", date: "16-05-2024", text: "Fixed wrong fieldMappings of Analytic Rules password_not_set.yaml", contentTypes: ["Analytic Rule"] },
      { version: "3.0.5", date: "21-03-2024", text: "Updated Entity Mappings of Analytic Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.4", date: "06-03-2024", text: "Added New Hunting Queries", contentTypes: ["Hunting Query"] },
      { version: "3.0.3", date: "19-02-2024", text: "Updated Entity Mapping in Analytical Rule [Non Domain Controller Active Directory Replication]", contentTypes: ["Analytic Rule"] },
      { version: "3.0.2", date: "23-01-2024", text: "Added Sub-Technique in Template", contentTypes: [] },
      { version: "3.0.1", date: "13-12-2023", text: "Updated query in Analytical Rule (AD user enabled and password not set within 48 hours)", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "26-12-2023", text: "Modified text as there is rebranding from Azure Active Directory to Microsoft Entra ID.", contentTypes: [] },
    ],
  },
  {
    name: "Windows Server DNS",
    entries: [
      { version: "3.0.1", date: "19-03-2024", text: "Updated Entity Mappings of Analytic Rules", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "18-09-2023", text: "Windows DNS Events via AMA Data Connector now General Availability", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "WireX Network Forensics Platform",
    entries: [
      { version: "3.0.1", date: "27-06-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "05-09-2023", text: "Addition of new WireX Network Forensics Platform Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "WithSecure Elements via Connector",
    alias: "WithSecureElementsViaConnector",
    entries: [
      { version: "3.0.1", date: "01-07-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "31-10-2023", text: "Updated legacy F-Secure links related to the connector installation and event forwarding configuration with WithSecure links", contentTypes: [] },
    ],
  },
  {
    name: "WithSecure Elements via Function",
    alias: "WithSecureElementsViaFunction",
    entries: [
      { version: "3.0.2", date: "13-02-2026", text: "Add support of lacking event types. Migrate to Python 3.12.", contentTypes: [] },
      { version: "3.0.1", date: "28-03-2025", text: "Memory overflow fix - process events via batches", contentTypes: [] },
      { version: "3.0.1", date: "28-03-2025", text: "Fix wrong workspace name in sentinel connector installation instruction", contentTypes: [] },
      { version: "3.0.0", date: "22-02-2024", text: "Initial commit - Data Connector based on Azure Function and \"Top computers by infections\" Workbook", contentTypes: ["Data Connector","Workbook"] },
    ],
  },
  {
    name: "Wiz",
    entries: [
      { version: "3.0.0", date: "15-07-2024", text: "Updated the queries on the Workbook and Connector to match with the new table names we offer", contentTypes: ["Workbook"] },
      { version: "2.0.0", date: "07-09-2023", text: "Updated Workbook query in Maintemplate", contentTypes: ["Workbook"] },
    ],
  },
  {
    name: "Workday",
    entries: [
      { version: "3.0.3", date: "23-12-2025", text: "Updated page size for the Workday Data connector and configure the query window + updated Data Connector to support dynamic Redirect URI", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "02-04-2025", text: "Updated Data Connector guidelines.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "10-01-2025", text: "Transitioned the CCP Connector to General Availability (GA).", contentTypes: [] },
      { version: "3.0.0", date: "13-03-2024", text: "Initial Solution Release.", contentTypes: [] },
    ],
  },
  {
    name: "Workplace from Facebook",
    entries: [
      { version: "3.0.1", date: "03-05-2024", text: "Repackaged for parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "18-04-2024", text: "Updated Dataconnector with step by step guidelines and Added Deploy to Azure Goverment button for Government portal", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "XBOW",
    entries: [
      { version: "3.0.0", date: "17-03-2026", text: "Initial Solution Release. Added XBOW Function App Data Connector. Added Analytic Rules for Critical/High, Medium, Low findings, and Asset Discovery.", contentTypes: ["Analytic Rule","Data Connector"] },
      { version: "3.0.0", date: "17-03-2026", text: "Updated short link.", contentTypes: [] },
    ],
  },
  {
    name: "Zero Fox",
    alias: "ZeroFox",
    entries: [
      { version: "3.2.2", date: "17-11-2025", text: "Added New CCF connector.", contentTypes: [] },
      { version: "3.2.1", date: "26-12-2024", text: "Update alerts data connector version that fix issues in fetching updates", contentTypes: ["Data Connector"] },
      { version: "3.2.0", date: "26-09-2024", text: "Changed query parameter in alerts connector for fetching updates", contentTypes: [] },
      { version: "3.1.0", date: "26-07-2024", text: "Updated ZeroFox connector to generate result batches and implemented async Sentinel connector logic", contentTypes: [] },
      { version: "3.0.1", date: "30-04-2024", text: "Fixed Solution Metadata for deployment", contentTypes: [] },
      { version: "3.0.0", date: "04-08-2023", text: "Added Data Connectors for ZeroFox's Alerts and CTI feeds", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Zero Networks",
    alias: "ZeroNetworks",
    entries: [
      { version: "3.0.3", date: "29-01-2026", text: "Updated audit parser, created CCP Push & Pull connectors", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "17-09-2025", text: "Removed Deprecated Data Connector.", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "06-02-2025", text: "Added missing parameter URI to Solution.", contentTypes: [] },
      { version: "3.0.0", date: "11-12-2024", text: "Updated solution to 3.0.0", contentTypes: [] },
    ],
  },
  {
    name: "Zero Trust (TIC 3.0)",
    alias: "ZeroTrust(TIC3.0)",
    entries: [
      { version: "3.0.3", date: "19-01-2026", text: "EOP rebrand (updated minor link and link title changes)", contentTypes: [] },
      { version: "3.0.2", date: "11-09-2025", text: "Removed the network map from the workbook.", contentTypes: ["Workbook"] },
      { version: "3.0.1", date: "31-01-2024", text: "Updated the solution to fix Analytic Rules deployment issue", contentTypes: ["Analytic Rule"] },
      { version: "3.0.0", date: "09-11-2023", text: "Changes for rebranding from Azure Active Directory Identity Protection to Microsoft Entra ID Protection", contentTypes: [] },
    ],
  },
  {
    name: "Zinc Open Source",
    entries: [
      { version: "3.0.3", date: "30-05-2024", text: "Added missing AMA Data Connector reference in Analytic rules", contentTypes: ["Analytic Rule","Data Connector"] },
      { version: "3.0.2", date: "27-02-2024", text: "Tagged for dependent solutions for deployment", contentTypes: [] },
      { version: "3.0.1", date: "19-12-2023", text: "Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*", contentTypes: [] },
      { version: "3.0.0", date: "25-10-2023", text: "Changes for rebranding from Microsoft 365 Defender to Microsoft Defender XDR", contentTypes: [] },
    ],
  },
  {
    name: "Zoom Reports",
    alias: "ZoomReports",
    entries: [
      { version: "3.0.7", date: "18-03-2026", text: "Updated ZoomReports CCF to use a different table name and schema", contentTypes: [] },
      { version: "3.0.6", date: "13-03-2026", text: "Added ZoomReports CCF Connector Public Preview", contentTypes: [] },
      { version: "3.0.5", date: "29-08-2024", text: "Updated the python runtime version to 3.11", contentTypes: [] },
      { version: "3.0.4", date: "26-04-2024", text: "Repackaged for fix on parser in maintemplate to have old parsername and parentid", contentTypes: ["Parser"] },
      { version: "3.0.3", date: "18-04-2024", text: "Repackaged for fix on parser in maintemplate", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "10-04-2024", text: "Added Azure Deploy button for government portal deployments", contentTypes: [] },
      { version: "3.0.1", date: "04-12-2023", text: "Authentication changes for zoom reports with server to server Oauth app", contentTypes: [] },
      { version: "3.0.0", date: "04-07-2023", text: "Fixed broken links for Data Connector & Added Workbook in Solution content", contentTypes: ["Data Connector","Workbook"] },
    ],
  },
  {
    name: "Zscaler Internet Access",
    entries: [
      { version: "3.0.4", date: "14-02-2026", text: "Added 15 new CloudNSS CCF Data connectors, 17 new Workbooks and OAuth2 Playbooks.", contentTypes: ["Data Connector","Playbook","Workbook"] },
      { version: "3.0.3", date: "28-11-2024", text: "Removed Deprecated Data Connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.2", date: "28-06-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.1", date: "03-05-2024", text: "Repackaged for parser issue fix on reinstall", contentTypes: ["Parser"] },
      { version: "3.0.0", date: "16-02-2024", text: "Addition of new Zscaler AMA Data Connector", contentTypes: ["Data Connector"] },
    ],
  },
  {
    name: "Zscaler Private Access (ZPA)",
    entries: [
      { version: "3.0.4", date: "12-01-2026", text: "Updated the ZscalerZPAUnexpectedSessionDuration Analytic Rule", contentTypes: ["Analytic Rule"] },
      { version: "3.0.3", date: "28-08-2025", text: "The parser query now includes additional fields such as SessionID, IPProtocol, ClientCountryCode, and others, improving event parsing and enrichment.", contentTypes: ["Parser"] },
      { version: "3.0.2", date: "08-07-2025", text: "Enhanced Parser logic to improve result filtering.", contentTypes: ["Parser"] },
      { version: "3.0.1", date: "05-12-2024", text: "Removed Deperacted Data connectors", contentTypes: ["Data Connector"] },
      { version: "3.0.0", date: "22-08-2024", text: "Deprecating data connectors", contentTypes: ["Data Connector"] },
    ],
  },
]
