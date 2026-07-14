import { MetadataRoute } from 'next';
import { articles } from '@/data/wiki-content';
import { kanitArticles } from '@/data/kanit-content';
import { 
  programmaticSectors, 
  programmaticRegulations, 
  programmaticComparisons, 
  programmaticIntegrations 
} from '@/data/programmatic-seo';
import { eventIdPages } from '@/data/pseo/event-ids';
import { useCasePages } from '@/data/pseo/use-cases';
import { logSourcePages } from '@/data/pseo/log-sources';
import { attackTypePages } from '@/data/pseo/attack-types';
import { rolePages } from '@/data/pseo/roles';
import { checklistPages } from '@/data/pseo/checklists';
import { competitorComparisonPages } from '@/data/pseo/competitor-comparisons';
import { competitorAlternativePages } from '@/data/pseo/competitor-alternatives';
import { competitorMigrationPages } from '@/data/pseo/competitor-migrations';
import { partnerPages } from '@/data/pseo/partner-pages';
import { siemUseCasesData } from '@/data/siem-use-cases';

const LIMIT = 5000;

function getAllRoutes(): MetadataRoute.Sitemap {
    const baseUrl = 'https://logsiem.com';

    // Sabit bir tarih kullan - new Date() Googlebot'a her ziyarette "yeni güncelleme" sinyali verir
    // Bu durum Google'ın güvenini sarsar ve "Discovered - currently not indexed" sorununa yol açar
    const lastBuildDate = new Date('2026-06-01');

    // Ana sayfalar - yüksek öncelik
    const mainRoutes = [
        { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { path: '/ozellikler', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/wiki', priority: 0.9, changeFrequency: 'daily' as const },
        { path: '/siem-use-cases', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/cozumler', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/uyumluluk-testi', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/maliyet-hesaplayici', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/analiz', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/demo-talep', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/sizinti-kontrol', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/zafiyet-tarama', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/araclar', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/araclar/siem-roi-hesaplayici', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/araclar/eps-hesaplayici', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/araclar/soc-maliyeti-hesaplayici', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/araclar/mttd-mttr-hesaplayici', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/araclar/log-retention-hesaplayici', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/araclar/kvkk-checklist', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/araclar/5651-checklist', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/araclar/acklog-scout', priority: 0.85, changeFrequency: 'weekly' as const },
    ].map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: lastBuildDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    // Çözüm sayfaları - yüksek SEO değeri
    const solutionRoutes = [
        '/cozumler/denetim-ve-inceleme',
        '/cozumler/fidye-yazilimi-onleme',
        '/cozumler/ic-tehdit-izleme',
        '/cozumler/kaba-kuvvet-saldirilari',
        '/cozumler/log-maliyet-optimizasyonu',
        '/cozumler/tehdit-algilama',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: lastBuildDate,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // Tüm Wiki makalelerini dinamik olarak ekle
    const wikiRoutes = Object.keys(articles).map((slug) => ({
        url: `${baseUrl}/wiki/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Tüm Kanıt (Claim Proof) makalelerini dinamik olarak ekle
    const kanitRoutes = Object.keys(kanitArticles).map((slug) => ({
        url: `${baseUrl}/kanit/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));

    // Programmatic SEO sayfaları (Sektör, Regülasyon, Karşılaştırma, Entegrasyon)

    const sectorRoutes = Object.keys(programmaticSectors).map((slug) => ({
        url: `${baseUrl}/sektor/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const regRoutes = Object.keys(programmaticRegulations).map((slug) => ({
        url: `${baseUrl}/regulasyon/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const compRoutes = Object.keys(programmaticComparisons).map((slug) => ({
        url: `${baseUrl}/karsilastirma/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }));

    const intRoutes = Object.keys(programmaticIntegrations).map((slug) => ({
        url: `${baseUrl}/entegrasyon/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Yeni Programmatic SEO Sayfaları
    const eventIdRoutes = Object.keys(eventIdPages).map((slug) => ({
        url: `${baseUrl}/event-id/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    const useCaseRoutes = Object.keys(useCasePages).map((slug) => ({
        url: `${baseUrl}/kullanim/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const logSourceRoutes = Object.keys(logSourcePages).map((slug) => ({
        url: `${baseUrl}/log-kaynagi/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    const attackRoutes = Object.keys(attackTypePages).map((slug) => ({
        url: `${baseUrl}/saldiri/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    const roleRoutes = Object.keys(rolePages).map((slug) => ({
        url: `${baseUrl}/kimler-icin/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    const checklistRoutes = Object.keys(checklistPages).map((slug) => ({
        url: `${baseUrl}/checklist/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Rakip ürün hedefli pSEO sayfaları
    const competitorCompRoutes = Object.keys(competitorComparisonPages).map((slug) => ({
        url: `${baseUrl}/karsilastirma/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }));

    const alternativeRoutes = Object.keys(competitorAlternativePages).map((slug) => ({
        url: `${baseUrl}/alternatif/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }));

    const migrationRoutes = Object.keys(competitorMigrationPages).map((slug) => ({
        url: `${baseUrl}/gecis-rehberi/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));
    const partnerProgramRoutes = Object.keys(partnerPages).map((slug) => ({
        url: `${baseUrl}/ortak/${slug}`,
        lastModified: lastBuildDate,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
    }));
    const siemUseCaseRoutes = Object.keys(siemUseCasesData)
        .filter((slug) => slug !== 'index')
        .map((slug) => ({
            url: `${baseUrl}/siem-use-cases/${slug}`,
            lastModified: lastBuildDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }));

    return [
      ...mainRoutes, 
      ...solutionRoutes, 
      ...wikiRoutes, 
      ...kanitRoutes,
      ...sectorRoutes,
      ...regRoutes,
      ...compRoutes,
      ...intRoutes,
      ...eventIdRoutes,
      ...useCaseRoutes,
      ...logSourceRoutes,
      ...attackRoutes,
      ...roleRoutes,
      ...checklistRoutes,
      ...competitorCompRoutes,
      ...alternativeRoutes,
      ...migrationRoutes,
      ...partnerProgramRoutes,
      ...siemUseCaseRoutes
    ];
}

export async function generateSitemaps() {
    const allRoutes = getAllRoutes();
    const numSitemaps = Math.ceil(allRoutes.length / LIMIT);
    return Array.from({ length: numSitemaps }, (_, i) => ({ id: i }));
}

export default async function sitemap(props: { id?: number } = {}): Promise<MetadataRoute.Sitemap> {
    const allRoutes = getAllRoutes();
    if (props.id === undefined) {
        return allRoutes;
    }
    const start = props.id * LIMIT;
    const end = start + LIMIT;
    return allRoutes.slice(start, end);
}
