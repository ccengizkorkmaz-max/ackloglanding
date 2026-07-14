import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Shield, ExternalLink, ArrowRight, ShieldCheck } from "lucide-react";
import { siemUseCasesData } from "@/data/siem-use-cases";
import { Footer } from "@/components/footer";
import { DetailSidebar } from "./detail-sidebar";
import { InteractiveToolsCta } from "@/components/interactive-tools-cta"; // Create client-side helper for sidebar modal triggers

export async function generateStaticParams() {
  return Object.keys(siemUseCasesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const data = siemUseCasesData[slug];
  
  if (!data) return { title: "Sayfa Bulunamadı" };
  
  return {
    title: `${data.title} - SIEM Log Analizi & Use Case | ACKLOG`,
    description: data.description,
    alternates: {
      canonical: `https://logsiem.com/siem-use-cases/${slug}`,
      languages: {
        "tr-TR": `https://logsiem.com/siem-use-cases/${slug}`,
        "x-default": `https://logsiem.com/siem-use-cases/${slug}`,
      },
    },
    openGraph: {
      title: `${data.title} - SIEM Log Analizi & Use Case | ACKLOG`,
      description: data.description,
      url: `https://logsiem.com/siem-use-cases/${slug}`,
      type: "article",
      locale: "tr_TR",
      siteName: "ACKLOG SIEM",
    }
  };
}

export default async function SiemUseCaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const data = siemUseCasesData[slug];
  
  if (!data || slug === "index") {
    notFound();
  }

  // Get other related articles within the same category to show in sidebar
  const allUseCases = Object.values(siemUseCasesData).filter(item => item.slug !== "index");
  const relatedCases = allUseCases
    .filter(item => item.category === data.category && item.slug !== slug)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between pt-24">
      <div className="container mx-auto px-4 max-w-5xl py-12 flex-1">
        {/* Back Link */}
        <Link href="/siem-use-cases" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-8 transition-colors group text-sm font-semibold">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Tüm SIEM Senaryolarına Dön
        </Link>

        {/* Hero Area */}
        <header className="mb-12 border-b border-slate-900 pb-10 relative">
          <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            {data.categoryTr}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {data.title}
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl">
            {data.description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-a:text-blue-400 prose-headings:font-bold prose-headings:scroll-mt-24">
              <div dangerouslySetInnerHTML={{ __html: data.htmlContent }} />
            </article>

            {/* Interactive security tools CTA widget */}
            <InteractiveToolsCta />
            
            {/* References Disclaimer */}
            <div className="mt-12 p-6 rounded-2xl bg-blue-950/10 border border-blue-900/20 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wider">ACKLOG SIEM İle Tam Entegrasyon</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Bu dokümantasyonda listelenen log kaynakları, kurallar, korelasyon mantıkları ve tespit senaryoları ACKLOG SIEM ürün ailesi tarafından yerleşik olarak desteklenmektedir. ACKLOG, teknolojisi ve otomasyon modülleri ile tespit süreçlerinizi saniyeler içinde devreye almanızı sağlar.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-6">
            <DetailSidebar />

            {/* Related Cases inside Sidebar */}
            {relatedCases.length > 0 && (
              <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-900">
                <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Benzer Senaryolar</h3>
                <div className="space-y-4">
                  {relatedCases.map((rc) => (
                    <Link
                      key={rc.slug}
                      href={`/siem-use-cases/${rc.slug}`}
                      className="block group border-b border-slate-900/60 pb-3 last:border-0 last:pb-0"
                    >
                      <h4 className="text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {rc.title}
                      </h4>
                      <span className="text-[10px] text-slate-500 block mt-1 uppercase tracking-wider">
                        İncele &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
