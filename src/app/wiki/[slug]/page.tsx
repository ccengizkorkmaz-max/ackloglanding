import { notFound } from "next/navigation";
import { articles } from "@/data/wiki-content";
import { WikiClient } from "./wiki-client";

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

    return {
        title: `${data.title} | ACKLOG Wiki`,
        description: (data as any).description || data.content.substring(0, 160).replace(/<[^>]*>?/g, '').trim() + "...",
        alternates: {
            canonical: `https://logsiem.com/wiki/${slug}`,
        }
    };
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

    // JSON-LD Article Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "id": `https://logsiem.com/wiki/${slug}`
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
        "datePublished": new Date().toISOString()
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <WikiClient slug={slug} data={data} otherArticles={otherArticles} />
        </>
    );
}
