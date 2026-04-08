import { MetadataRoute } from 'next';
import { articles } from '@/data/wiki-content';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://logsiem.com';

    // Sabit bir tarih kullan - new Date() Googlebot'a her ziyarette "yeni güncelleme" sinyali verir
    // Bu durum Google'ın güvenini sarsar ve "Discovered - currently not indexed" sorununa yol açar
    const lastBuildDate = new Date('2026-04-08');

    // Ana sayfalar - yüksek öncelik
    const mainRoutes = [
        { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { path: '/ozellikler', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/wiki', priority: 0.9, changeFrequency: 'daily' as const },
        { path: '/cozumler', priority: 0.9, changeFrequency: 'weekly' as const },
        { path: '/uyumluluk-testi', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/maliyet-hesaplayici', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/analiz', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/demo-talep', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/sizinti-kontrol', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/zafiyet-tarama', priority: 0.7, changeFrequency: 'monthly' as const },
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

    return [...mainRoutes, ...solutionRoutes, ...wikiRoutes];
}
