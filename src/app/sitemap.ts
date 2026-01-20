import { MetadataRoute } from 'next';
import { articles } from '@/data/wiki-content';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://logsiem.com';

    // Ana sayfalar
    const routes = [
        '',
        '/ozellikler',
        '/wiki',
        '/uyumluluk-testi',
        '/maliyet-hesaplayici',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Tüm Wiki makalelerini dinamik olarak ekle
    const wikiRoutes = Object.keys(articles).map((slug) => ({
        url: `${baseUrl}/wiki/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...wikiRoutes];
}
