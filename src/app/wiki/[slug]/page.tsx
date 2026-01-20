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
        title: `${data.title} | ACKLOG Siber Güvenlik Kütüphanesi`,
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

    // Filter out the current article to show others in the sidebar
    // Convert to a plain array of entries for easy serialization
    const otherArticles = Object.entries(articles)
        .filter(([s]) => s !== slug)
        .map(([s, d]) => [s, { title: d.title }] as [string, { title: string }]);

    return <WikiClient slug={slug} data={data} otherArticles={otherArticles} />;
}
