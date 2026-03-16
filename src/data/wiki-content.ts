import { articles as baseArticles } from './wiki/base-articles';
import { regulationArticles } from './wiki/regulations';
import { solutionsCostsArticles } from './wiki/solutions-costs';
import { technicalArticles } from './wiki/technical';
import { brandsSOCArticles } from './wiki/brands-soc';
import { trendsOthersArticles } from './wiki/trends-others';
import { generalPurchasingArticles } from './wiki/general-purchasing';
import { userDataSecurityArticles } from './wiki/user-data-security';
import { networkOpsSecurityArticles } from './wiki/network-ops-security';
import { threatWebSecurityArticles } from './wiki/threat-web-security';
import { complianceIndustrialArticles } from './wiki/compliance-industrial';
import { serverCloudAdminArticles } from './wiki/server-cloud-admin';
import { firewallCareerArticles } from './wiki/firewall-career';
import { windowsIOTArticles } from './wiki/windows-iot';
import { complianceGeneralArticles } from './wiki/compliance-general';
import { threatSoftwareArticles } from './wiki/threat-software';
import { opsCloudArticles } from './wiki/ops-cloud';
import { sectoralHealthFinanceArticles } from './wiki/sectoral-health-finance';
import { sectoralEduPublicArticles } from './wiki/sectoral-edu-public';
import { sectoralEnergyRetailArticles } from './wiki/sectoral-energy-retail';
import { sectoralTourismLogisticsArticles } from './wiki/sectoral-tourism-logistics';
import { sectoralLegalMediaArticles } from './wiki/sectoral-legal-media';
import { troubleshootingLogsArticles } from './wiki/troubleshooting-logs';
import { trainingCareerArticles } from './wiki/training-career';
import { comparisonsAlternativesArticles } from './wiki/comparisons-alternatives';
import { trendsFutureArticles } from './wiki/trends-future';
import { templatesChecklistsArticles } from './wiki/templates-checklists';


export const articles: Record<string, { 
  title: string; 
  description?: string; 
  content: string; 
  author?: { name: string; title: string; initials: string } 
}> = {
  ...baseArticles,
  ...regulationArticles,
  ...solutionsCostsArticles,
  ...technicalArticles,
  ...brandsSOCArticles,
  ...trendsOthersArticles,
  ...generalPurchasingArticles,
  ...userDataSecurityArticles,
  ...networkOpsSecurityArticles,
  ...threatWebSecurityArticles,
  ...complianceIndustrialArticles,
  ...serverCloudAdminArticles,
  ...firewallCareerArticles,
  ...windowsIOTArticles,
  ...complianceGeneralArticles,
  ...threatSoftwareArticles,
  ...opsCloudArticles,
  ...sectoralHealthFinanceArticles,
  ...sectoralEduPublicArticles,
  ...sectoralEnergyRetailArticles,
  ...sectoralTourismLogisticsArticles,
  ...sectoralLegalMediaArticles,
  ...troubleshootingLogsArticles,
  ...trainingCareerArticles,
  ...comparisonsAlternativesArticles,
  ...trendsFutureArticles,
  ...templatesChecklistsArticles
};

