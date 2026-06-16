import { notFound } from "next/navigation";
import { competitorAlternativePages } from "@/data/pseo/competitor-alternatives";
import { SeoTemplate } from "@/components/seo-template";
import { getArticleSchema } from "@/components/seo/json-ld";

export async function generateStaticParams() {
  return Object.keys(competitorAlternativePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = competitorAlternativePages[slug];
  if (!data) return { title: "Sayfa Bulunamadı" };
  return {
    title: data.title, description: data.description,
    alternates: { canonical: `https://logsiem.com/alternatif/${slug}` },
    openGraph: { title: data.title, description: data.description, url: `https://logsiem.com/alternatif/${slug}`, type: 'article', locale: 'tr_TR', siteName: 'ACKLOG SIEM' },
  };
}

export default async function AlternativePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = competitorAlternativePages[slug];
  if (!data) notFound();

  const publishDate = '2026-06-11T10:00:00+03:00';
  const articleSchema = getArticleSchema(data.title, data.description, `https://logsiem.com/alternatif/${slug}`, publishDate);
  const faqSchema = data.faqs.length > 0 ? { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />)}
      <SeoTemplate data={data} backText="Karşılaştırmalar" backUrl="/wiki" />
    </>
  );
}
