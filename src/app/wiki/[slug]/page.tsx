import { notFound } from "next/navigation";
import { articles } from "@/data/wiki-content";
import { WikiClient } from "./wiki-client";
import { RelatedArticles } from "@/components/related-articles";
import { WithContext, FAQPage as FAQPageSchema } from "schema-dts";

// Define generateStaticParams for static export optimization
export async function generateStaticParams() {
    return Object.keys(articles).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const data = articles[slug];

    if (!data) return { title: "Sayfa Bulunamadı" };

    // Description: önce data.description, yoksa içerikten çıkart
    const description = (data as any).description 
        || data.content.substring(0, 160).replace(/<[^>]*>?/g, '').trim() + "...";

    return {
        title: `${data.title} | ACKLOG Wiki`,
        description,
        alternates: {
            canonical: `https://logsiem.com/wiki/${slug}`,
        },
        openGraph: {
            title: data.title,
            description,
            url: `https://logsiem.com/wiki/${slug}`,
            type: 'article',
            locale: 'tr_TR',
            siteName: 'ACKLOG SIEM',
        },
        twitter: {
            card: 'summary_large_image',
            title: data.title,
            description,
        },
    };
}

// İçerikten FAQ çıkaran yardımcı fonksiyon
function extractFAQFromContent(content: string): { question: string; answer: string }[] {
    const faqs: { question: string; answer: string }[] = [];
    // "Soru:" ve "Cevap:" kalıplarını yakala
    const faqRegex = /<strong>Soru:<\/strong>\s*(.*?)(?:<br\s*\/?>)\s*<strong>Cevap:<\/strong>\s*(.*?)<\/p>/gi;
    let match;
    while ((match = faqRegex.exec(content)) !== null) {
        const question = match[1].replace(/<[^>]*>/g, '').trim();
        const answer = match[2].replace(/<[^>]*>/g, '').trim();
        if (question && answer) {
            faqs.push({ question, answer });
        }
    }
    return faqs;
}

export default async function WikiPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const data = articles[slug];

    if (!data) {
        notFound();
    }

    // Sabit tarih kullan - her render'da new Date() kullanmak Google'ın güvenini sarsar
    const publishDate = '2026-01-15T10:00:00+03:00';

    // JSON-LD Article Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://logsiem.com/wiki/${slug}`
        },
        "headline": data.title,
        "description": (data as any).description || data.title,
        "author": {
            "@type": "Person",
            "name": data.author?.name || "Fatih Emiral",
            "jobTitle": data.author?.title || "IT Müdürü & Siber Güvenlik Uzmanı"
        },
        "publisher": {
            "@type": "Organization",
            "name": "ACKLOG SIEM",
            "logo": {
                "@type": "ImageObject",
                "url": "https://logsiem.com/logo.png"
            }
        },
        "datePublished": publishDate,
        "dateModified": publishDate,
        "inLanguage": "tr",
        "isAccessibleForFree": true
    };

    // İçerikten FAQ çıkar ve FAQPage schema oluştur
    const faqs = extractFAQFromContent(data.content);
    const faqSchema: WithContext<FAQPageSchema> | null = faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question" as const,
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer" as const,
                "text": faq.answer,
            }
        }))
    } : null;

    // Diğer makaleleri hesapla (sidebar için)
    const allSlugs = Object.keys(articles);
    const currentIndex = allSlugs.indexOf(slug);
    const otherArticles: [string, { title: string }][] = allSlugs
        .filter((s) => s !== slug)
        .slice(Math.max(0, currentIndex - 2), Math.max(0, currentIndex - 2) + 5)
        .map((s) => [s, { title: articles[s].title }]);

    // Fallback: ilk 5 makaleyi göster eğer sonuç boşsa
    if (otherArticles.length === 0) {
        const fallback = allSlugs.filter(s => s !== slug).slice(0, 5);
        otherArticles.push(...fallback.map(s => [s, { title: articles[s].title }] as [string, { title: string }]));
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <WikiClient slug={slug} data={data} otherArticles={otherArticles}>
                <RelatedArticles currentSlug={slug} articles={articles} maxItems={6} />
            </WikiClient>
        </>
    );
}
