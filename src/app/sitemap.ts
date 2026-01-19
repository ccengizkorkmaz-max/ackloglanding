import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://acklog.com.tr';

    // Ana sayfalar
    const routes = [
        '',
        '/ozellikler',
        '/wiki',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Wiki makaleleri (Dinamik hale getirilecekse makale listesi buraya eklenebilir)
    const wikiSlugs = [
        'siem-nedir',
        'log-yonetimi-nedir',
        'soc-nedir',
        'threat-hunting-nedir',
        'kvkk-ve-log-uyumluluk',
        'siem-vs-log-yonetimi',
        'qradar-alternatifi',
        'siber-terimler-sozlugu',
    ];

    const wikiRoutes = wikiSlugs.map((slug) => ({
        url: `${baseUrl}/wiki/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...wikiRoutes];
}
