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
  ...serverCloudAdminArticles
};
