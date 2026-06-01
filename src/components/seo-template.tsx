"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/demo-modal";
import { Footer } from "@/components/footer";

interface SeoTemplateProps {
  data: {
    title: string;
    description: string;
    heroTitle: string;
    heroSubtitle: string;
    badge: string;
    content: string;
    faqs: { question: string; answer: string }[];
    features?: string[];
    specs?: { label: string; value: string }[];
  };
  backUrl?: string;
  backText?: string;
}

export function SeoTemplate({ data, backUrl = "/wiki", backText = "Kütüphaneye Dön" }: SeoTemplateProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between pt-24">
      <div className="container mx-auto px-4 max-w-5xl py-12 flex-1">
        {/* Back Link */}
        <Link href={backUrl} className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-8 transition-colors group text-sm font-semibold">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> {backText}
        </Link>

        {/* Hero Area */}
        <header className="mb-12 border-b border-slate-900 pb-10 relative">
          <div className="absolute -top-16 -left-16 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            {data.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 leading-none">
            {data.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
            {data.heroSubtitle}
          </p>
        </header>

        {/* Features list if exists */}
        {data.features && data.features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {data.features.map((feature, i) => (
              <div key={i} className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/80 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                <span className="text-sm font-bold text-slate-200">{feature}</span>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Prose Content */}
          <div className="lg:col-span-8">
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-a:text-blue-400 prose-headings:font-bold prose-headings:scroll-mt-24">
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </article>

            {/* Brand Entity Relation Text Box */}
            <div className="mt-12 p-6 rounded-2xl bg-blue-950/20 border border-blue-900/30 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">Marka ve Geliştirici Bilgisi</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.
                </p>
              </div>
            </div>

            {/* FAQ Accordion Section */}
            {data.faqs.length > 0 && (
              <section className="mt-16 pt-12 border-t border-slate-950">
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight">Sıkça Sorulan Sorular</h3>
                <div className="space-y-4">
                  {data.faqs.map((faq, i) => {
                    const isOpen = openFaqIndex === i;
                    return (
                      <div key={i} className="rounded-xl border border-slate-900 bg-slate-950 overflow-hidden">
                        <button
                          onClick={() => toggleFaq(i)}
                          className="w-full p-5 text-left font-bold text-white flex items-center justify-between hover:bg-slate-900/40 transition-colors"
                        >
                          <span className="text-sm md:text-base">{faq.question}</span>
                          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                          <p className="p-5 pt-0 border-t border-slate-900 text-sm text-slate-400 leading-relaxed bg-slate-950/50">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent opacity-50 pointer-events-none" />
              <h3 className="text-xl font-bold text-white mb-3">ACKLOG'u Keşfedin</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Kurumunuz için tam uyumlu siber güvenlik ve log yönetimi çözümlerimizi canlı ortamda test edin.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2"
                >
                  Ücretsiz Deneyin <ArrowRight className="w-4 h-4" />
                </Button>
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
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
