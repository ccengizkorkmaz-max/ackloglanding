import { notFound } from "next/navigation";
import { partnerPages } from "@/data/pseo/partner-pages";
import { PartnerSeoTemplate } from "@/components/partner-seo-template";
import { getArticleSchema } from "@/components/seo/json-ld";

export async function generateStaticParams() {
  return Object.keys(partnerPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = partnerPages[slug];
  if (!data) return { title: "Sayfa Bulunamadı" };
  return {
    title: data.title, description: data.description,
    alternates: { canonical: `https://logsiem.com/ortak/${slug}` },
    openGraph: { title: data.title, description: data.description, url: `https://logsiem.com/ortak/${slug}`, type: 'article', locale: 'tr_TR', siteName: 'ACKLOG SIEM' },
  };
}

export default async function PartnerProgramSeoPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = partnerPages[slug];
  if (!data) notFound();

  const publishDate = '2026-06-29T10:00:00+03:00';
  const articleSchema = getArticleSchema(data.title, data.description, `https://logsiem.com/ortak/${slug}`, publishDate);
  const faqSchema = data.faqs.length > 0 ? { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />)}
      <PartnerSeoTemplate data={data} backText="İş Ortaklığı Programı" backUrl="/is-ortakligi" />
    </>
  );
}
