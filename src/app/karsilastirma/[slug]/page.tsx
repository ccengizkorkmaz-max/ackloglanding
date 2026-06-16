import { notFound } from "next/navigation";
import { programmaticComparisons } from "@/data/programmatic-seo";
import { competitorComparisonPages } from "@/data/pseo/competitor-comparisons";
import { SeoTemplate } from "@/components/seo-template";
import { getArticleSchema } from "@/components/seo/json-ld";

// Merge both comparison datasets
const allComparisons = { ...programmaticComparisons, ...competitorComparisonPages };

export async function generateStaticParams() {
  return Object.keys(allComparisons).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = allComparisons[slug];

  if (!data) return { title: "Sayfa Bulunamadı" };

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://logsiem.com/karsilastirma/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://logsiem.com/karsilastirma/${slug}`,
      type: 'article',
      locale: 'tr_TR',
      siteName: 'ACKLOG SIEM',
    },
  };
}

export default async function ComparisonSeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = allComparisons[slug];

  if (!data) {
    notFound();
  }

  // Schema Markup
  const publishDate = '2026-04-01T10:00:00+03:00';
  const articleSchema = getArticleSchema(data.title, data.description, `https://logsiem.com/karsilastirma/${slug}`, publishDate);

  const faqSchema = data.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <SeoTemplate data={data} backText="Wiki Anasayfa" backUrl="/wiki" />
    </>
  );
}
