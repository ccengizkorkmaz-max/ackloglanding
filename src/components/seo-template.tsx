"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle, ChevronDown, Calendar, User, Award } from "lucide-react";
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
    shortAnswer: string;
    technicalSummary: string[];
    resultParagraph: string;
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

  // Internal link injector for SEO automation
  const processedContent = useMemo(() => {
    let text = data.content;
    
    // Replace keys with absolute html links
    text = text.replace(/SIEM Nedir/g, '<a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">SIEM Nedir</a>');
    text = text.replace(/UEBA Nedir/g, '<a href="/wiki/ueba-kullanici-davranis-analizi-nedir" class="text-blue-400 hover:underline font-bold">UEBA Nedir</a>');
    text = text.replace(/Threat Hunting Nedir/g, '<a href="/wiki/threat-hunting-nedir" class="text-blue-400 hover:underline font-bold">Threat Hunting Nedir</a>');
    text = text.replace(/SOC Kurulumu/g, '<a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC Kurulumu</a>');
    
    // Premium SEO / GEO Extensions
    text = text.replace(/5651 Sayılı Kanun/gi, '<a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651 Sayılı Kanun</a>');
    text = text.replace(/KVKK Uyumluluğu/gi, '<a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK Uyumluluğu</a>');
    text = text.replace(/Log Yönetimi/gi, '<a href="/wiki/siem-vs-log-yonetimi" class="text-blue-400 hover:underline font-bold">Log Yönetimi</a>');
    text = text.replace(/QRadar Alternatifi/gi, '<a href="/wiki/qradar-alternatifi" class="text-blue-400 hover:underline font-bold">QRadar Alternatifi</a>');
    text = text.replace(/Logsign Alternatifi/gi, '<a href="/alternatif/logsign-alternatifi" class="text-blue-400 hover:underline font-bold">Logsign Alternatifi</a>');
    text = text.replace(/FortiGate Log/gi, '<a href="/log-kaynagi/fortinet-fortigate-log" class="text-blue-400 hover:underline font-bold">FortiGate Log</a>');
    text = text.replace(/Palo Alto Networks/gi, '<a href="/log-kaynagi/palo-alto-firewall-log" class="text-blue-400 hover:underline font-bold">Palo Alto Networks</a>');
    text = text.replace(/Cisco ASA/gi, '<a href="/log-kaynagi/cisco-asa-log" class="text-blue-400 hover:underline font-bold">Cisco ASA</a>');
    text = text.replace(/Windows Event/gi, '<a href="/log-kaynagi/windows-event-log" class="text-blue-400 hover:underline font-bold">Windows Event</a>');
    text = text.replace(/Linux Syslog/gi, '<a href="/log-kaynagi/linux-syslog" class="text-blue-400 hover:underline font-bold">Linux Syslog</a>');
    
    return text;
  }, [data.content]);

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

          {/* E-E-A-T Author & Update Meta */}
          <div className="flex flex-wrap gap-6 items-center mt-6 text-xs text-slate-400 border-t border-slate-900/50 pt-4">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-blue-500" />
              <span>Yazar: <strong>Fatih Emiral</strong> (Senior Security Consultant)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-500" />
              <span>Sertifikalar: <strong>CISA, CISSP, CEH</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span>Güncellenme: <strong>Haziran 2026</strong></span>
            </div>
          </div>
        </header>

        {/* GEO / AI Search: Short Answer Card */}
        <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-500/30 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 bg-blue-600/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase block mb-2">HIZLI ÖZET & KISA CEVAP (GEO)</span>
          <p className="text-base text-slate-200 leading-relaxed font-medium">
            {data.shortAnswer}
          </p>
        </div>

        {/* GEO / AI Search: Technical Summary List */}
        {data.technicalSummary && data.technicalSummary.length > 0 && (
          <div className="mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-4">TEKNİK ÖZET & KRİTERLER</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.technicalSummary.map((summary, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/80 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-slate-200 leading-snug">{summary}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Prose Content */}
          <div className="lg:col-span-8">
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-a:text-blue-400 prose-headings:font-bold prose-headings:scroll-mt-24">
              <div dangerouslySetInnerHTML={{ __html: processedContent }} />
            </article>

            {/* GEO / AI Search: Result Paragraph */}
            <div className="mt-8 p-5 border-l-4 border-blue-500 bg-slate-900/20 rounded-r-xl">
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block mb-1">DEĞERLENDİRME & SONUÇ</span>
              <p className="text-sm text-slate-300 leading-relaxed font-semibold italic">
                {data.resultParagraph}
              </p>
            </div>

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

            {/* E-E-A-T Technical Bibliography / References */}
            <div className="mt-8 pt-8 border-t border-slate-900 text-xs text-slate-500">
              <h5 className="font-bold text-slate-400 mb-3 uppercase tracking-wider">Teknik Referanslar ve Kaynakça</h5>
              <ol className="list-decimal pl-4 space-y-2">
                <li>Kamu Kurumları Bilgi ve İletişim Güvenliği Kılavuzu - Log Yönetimi Kriterleri (T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi)</li>
                <li>5651 Sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun</li>
                <li>Kişisel Verilerin Korunması Kanunu (KVKK) Veri Güvenliği Rehberi (Teknik Tedbirler)</li>
                <li>MITRE ATT&CK Matrix for Enterprise (Siber Tehdit Taktik ve Teknikleri Karşılaştırma Matrisi)</li>
                <li>ClickHouse Columnar Storage Compression Benchmarks (Columnar Veritabanı ve LZ4/ZSTD Sıkıştırma Standartları)</li>
              </ol>
            </div>

            {/* FAQ Accordion Section */}
            {data.faqs.length > 0 && (
              <section className="mt-16 pt-12 border-t border-slate-900">
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
