import { notFound } from "next/navigation";
import { programmaticRegulations } from "@/data/programmatic-seo";
import { SeoTemplate } from "@/components/seo-template";

export async function generateStaticParams() {
  return Object.keys(programmaticRegulations).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = programmaticRegulations[slug];

  if (!data) return { title: "Sayfa Bulunamadı" };

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `https://logsiem.com/regulasyon/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://logsiem.com/regulasyon/${slug}`,
      type: 'article',
      locale: 'tr_TR',
      siteName: 'ACKLOG SIEM',
    },
  };
}

export default async function RegulationSeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = programmaticRegulations[slug];

  if (!data) {
    notFound();
  }

  // Schema Markup
  const publishDate = '2026-04-01T10:00:00+03:00';
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://logsiem.com/regulasyon/${slug}`
    },
    "headline": data.title,
    "description": data.description,
    "author": {
      "@type": "Organization",
      "name": "BTPROSES"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ACKLOG",
      "logo": {
        "@type": "ImageObject",
        "url": "https://logsiem.com/logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": publishDate
  };

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
      <SeoTemplate data={data} backText="Çözümlere Git" backUrl="/cozumler" />
    </>
  );
}
