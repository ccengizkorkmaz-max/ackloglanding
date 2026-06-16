import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { kanitArticles } from "@/data/kanit-content";
import { JsonLd, getArticleSchema } from "@/components/seo/json-ld";
import { WithContext, FAQPage as FAQPageSchema } from "schema-dts";
import { Footer } from "@/components/footer";

export async function generateStaticParams() {
  return Object.keys(kanitArticles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = kanitArticles[slug];

  if (!data) return { title: "Kanıt Belgesi Bulunamadı" };

  return {
    title: `${data.title} | ACKLOG Kanıt Kitaplığı`,
    description: data.description,
    alternates: {
      canonical: `https://logsiem.com/kanit/${slug}`,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://logsiem.com/kanit/${slug}`,
      type: 'article',
      locale: 'tr_TR',
      siteName: 'ACKLOG SIEM',
    },
  };
}

export default async function KanitPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = kanitArticles[slug];

  if (!data) {
    notFound();
  }

  // Schema Markup
  const publishDate = '2026-03-10T09:00:00+03:00';
  const articleSchema = getArticleSchema(data.title, data.description, `https://logsiem.com/kanit/${slug}`, publishDate);

  const faqSchema: WithContext<FAQPageSchema> | null = data.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question" as const,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer" as const,
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

      <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between pt-24">
        <div className="container mx-auto px-4 max-w-5xl py-12 flex-1">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-8 transition-colors group text-sm font-semibold">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Ana Sayfaya Dön
          </Link>

          {/* Hero Section */}
          <header className="mb-12 border-b border-slate-800 pb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              {data.heroBadge}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              {data.title}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              {data.subtitle}
            </p>
          </header>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {data.metrics.map((metric, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 p-16 bg-blue-600/5 rounded-full blur-2xl group-hover:bg-blue-600/10 transition-all pointer-events-none"></div>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-1">{metric.label}</span>
                <div className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{metric.value}</div>
                <p className="text-xs text-slate-400 leading-snug">{metric.desc}</p>
              </div>
            ))}
          </div>

          {/* Main Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8">
              <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-a:text-blue-400 prose-headings:scroll-mt-24 prose-headings:font-bold prose-table:border-collapse prose-table:w-full prose-th:bg-slate-900/50 prose-td:border-slate-800">
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
              </div>

              {/* Brand Statement Box */}
              <div className="mt-12 p-6 rounded-2xl bg-blue-950/20 border border-blue-900/30 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">Marka ve Sahiplik Bilgisi</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.
                  </p>
                </div>
              </div>

              {/* FAQ Accordion Section */}
              {data.faqs.length > 0 && (
                <section className="mt-16 pt-12 border-t border-slate-800">
                  <h3 className="text-2xl font-black text-white mb-8 tracking-tight">Sıkça Sorulan Sorular</h3>
                  <div className="space-y-6">
                    {data.faqs.map((faq, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80">
                        <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                          {faq.question}
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent opacity-50 pointer-events-none" />
                <h3 className="text-xl font-bold text-white mb-3">ACKLOG'u Keşfedin</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Bu test raporlarında sunulan tüm performans verilerini kendi ortamınızda test etmek için ücretsiz deneme hesabı oluşturun.
                </p>
                <div className="space-y-3">
                  <Link href="/demo-talep" className="block w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2">
                      Ücretsiz Deneyin <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/ozellikler" className="block w-full">
                    <Button variant="outline" className="w-full border-slate-800 bg-white/5 hover:bg-white/10 text-slate-300 py-6 rounded-xl font-bold">
                      Tüm Özellikleri Gör
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
