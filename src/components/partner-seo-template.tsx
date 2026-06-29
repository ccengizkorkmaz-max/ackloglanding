"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  Calendar, 
  User, 
  Award, 
  Coins, 
  Cpu, 
  Database,
  Lock,
  Loader2,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { savePartnerLead } from "@/app/araclar/actions";

interface PartnerSeoTemplateProps {
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

export function PartnerSeoTemplate({ data, backUrl = "/is-ortakligi", backText = "İş Ortaklığı Sayfasına Dön" }: PartnerSeoTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // NFR Modal States
  const [showNfrModal, setShowNfrModal] = useState(false);
  const [nfrForm, setNfrForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleNfrSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const res = await savePartnerLead({
        name: nfrForm.name,
        email: nfrForm.email,
        phone: nfrForm.phone,
        company: nfrForm.company,
        message: "Partner pSEO sayfasından ücretsiz NFR Laboratuvar Lisansı talebi."
      });

      if (res.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setShowNfrModal(false);
          setSubmitSuccess(false);
          setNfrForm({ name: "", email: "", phone: "", company: "" });
        }, 3000);
      } else {
        setStatusMessage(res.message || "Bir hata oluştu.");
      }
    } catch (err: any) {
      setStatusMessage("Bağlantı hatası oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Internal link injector for SEO automation
  const processedContent = useMemo(() => {
    let text = data.content;
    
    // Replace keys with absolute html links
    text = text.replace(/SIEM Nedir/g, '<a href="/wiki/siem-nedir" class="text-blue-400 hover:underline font-bold">SIEM Nedir</a>');
    text = text.replace(/SOC Kurulumu/g, '<a href="/wiki/soc-kurulum-rehberi-maliyetler" class="text-blue-400 hover:underline font-bold">SOC Kurulumu</a>');
    text = text.replace(/5651 Sayılı Kanun/gi, '<a href="/wiki/5651-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">5651 Sayılı Kanun</a>');
    text = text.replace(/KVKK Uyumluluğu/gi, '<a href="/wiki/kvkk-siem-log-yonetimi-rehberi" class="text-blue-400 hover:underline font-bold">KVKK Uyumluluğu</a>');
    text = text.replace(/Log Yönetimi/gi, '<a href="/wiki/siem-vs-log-yonetimi" class="text-blue-400 hover:underline font-bold">Log Yönetimi</a>');
    text = text.replace(/Logsign Alternatifi/gi, '<a href="/alternatif/logsign-alternatifi" class="text-blue-400 hover:underline font-bold">Logsign Alternatifi</a>');
    
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            {data.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {data.heroTitle}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
            {data.heroSubtitle}
          </p>

          {/* E-E-A-T Author & Update Meta */}
          <div className="flex flex-wrap gap-6 items-center mt-6 text-xs text-slate-400 border-t border-slate-900/50 pt-4">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-emerald-500" />
              <span>Yazar: <strong>Kanal Satış Direktörlüğü</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>Konu: <strong>B2B Bilişim & İş Ortaklığı Politikaları</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-500" />
              <span>Son Güncellenme: <strong>Haziran 2026</strong></span>
            </div>
          </div>
        </header>

        {/* GEO / AI Search: Short Answer Card */}
        <div className="p-6 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-16 bg-emerald-600/5 rounded-full blur-2xl pointer-events-none"></div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase block mb-2">HIZLI ÖZET & KANAL AVANTAJI (GEO)</span>
          <p className="text-base text-slate-200 leading-relaxed font-medium">
            {data.shortAnswer}
          </p>
        </div>

        {/* GEO / AI Search: Technical Summary List */}
        {data.technicalSummary && data.technicalSummary.length > 0 && (
          <div className="mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-4">İŞ ORTAĞI KRİTERLERİ & KAZANIMLARI</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.technicalSummary.map((summary, i) => (
                <div key={i} className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/80 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
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
            <div className="mt-8 p-5 border-l-4 border-emerald-500 bg-slate-900/20 rounded-r-xl">
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block mb-1">DEĞERLENDİRME & KANAL ÇIKARIMI</span>
              <p className="text-sm text-slate-300 leading-relaxed font-semibold italic">
                {data.resultParagraph}
              </p>
            </div>

            {/* Brand Entity Relation Text Box */}
            <div className="mt-12 p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-1 uppercase tracking-wider">İş Ortaklığı ve Kanal Politikası</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  logsiem.com üzerinden toplanan son kullanıcı (müşteri) talepleri, ilgili şehirdeki aktif ve yetkili bilişim iş ortaklarımıza (bayilere) yönlendirilir. ACKLOG kanal modeli, distribütör ve entegratör üzerinden satış prensiplerini korur.
                </p>
              </div>
            </div>

            {/* FAQ Accordion Section */}
            {data.faqs.length > 0 && (
              <section className="mt-16 pt-12 border-t border-slate-900">
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight">İş Ortaklığı Sıkça Sorulan Sorular</h3>
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
            <div className="sticky top-28 space-y-6">
              
              {/* Partner CTA Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 via-transparent to-transparent opacity-50 pointer-events-none" />
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-1.5">
                  <Coins className="w-5 h-5 text-emerald-500" /> ACKLOG İş Ortağı Olun
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Siber güvenlik projelerinden yüksek kazanç marjları elde etmek ve müşterilerinize tam uyumlu yerli SIEM sunmak için partner programımıza başvurun.
                </p>
                <div className="space-y-3">
                  <Link href="/is-ortakligi" className="block w-full">
                    <Button
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Hemen Bayilik Başvurusu Yap <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/araclar/partner-kazanc-hesaplayici" className="block w-full">
                    <Button variant="outline" className="w-full border-slate-800 bg-white/5 hover:bg-white/10 text-slate-300 py-6 rounded-xl font-bold cursor-pointer">
                      Kazanç Simülatörünü Aç
                    </Button>
                  </Link>
                </div>
              </div>

              {/* NFR License Mini Banner */}
              <div className="p-5 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 shadow-lg text-center">
                <span className="text-[10px] font-mono font-bold text-emerald-400 block tracking-widest uppercase mb-1">BİLİŞİM FİRMALARINA ÖZEL</span>
                <h4 className="text-sm font-bold text-white mb-2">Ücretsiz Test (NFR) Lisansı</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                  Ürünü lab ortamınızda incelemek ve demo yapmak için 1 yıllık ücretsiz NFR lisansı talep edin.
                </p>
                <Button 
                  onClick={() => setShowNfrModal(true)}
                  className="w-full bg-emerald-900/40 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-500/25 text-xs font-bold py-2.5 rounded-lg cursor-pointer"
                >
                  Ücretsiz NFR Lisansı Talep Et
                </Button>
              </div>

            </div>
          </aside>
        </div>
      </div>
      
      {/* NFR Modal */}
      <Dialog open={showNfrModal} onOpenChange={setShowNfrModal}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-emerald-400">
              <Cpu className="w-5 h-5" /> NFR Test Lisansı Başvurusu
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Şirketinizin lab ortamında ACKLOG SIEM kurup denemeniz için 1 yıllık ücretsiz NFR lisans bilgileri gönderilecektir.
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            <div className="flex flex-col items-center text-center py-8 space-y-4">
              <CheckCircle className="w-16 h-16 text-emerald-500 animate-bounce" />
              <h4 className="text-xl font-bold text-white">Talebiniz Alındı!</h4>
              <p className="text-sm text-slate-400">
                Teknik ekibimiz lab lisans anahtarınızı hazırlamak üzere sizinle kurumsal e-postanız üzerinden iletişime geçecektir.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNfrSubmit} className="space-y-4 py-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Ad Soyad</label>
                <Input
                  className="bg-slate-950 border-slate-800 focus:ring-emerald-500 text-white"
                  placeholder="Ahmet Yılmaz"
                  required
                  value={nfrForm.name}
                  onChange={e => setNfrForm({ ...nfrForm, name: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Kurumsal E-posta</label>
                <Input
                  type="email"
                  className="bg-slate-950 border-slate-800 focus:ring-emerald-500 text-white"
                  placeholder="ahmet@sirket.com"
                  required
                  value={nfrForm.email}
                  onChange={e => setNfrForm({ ...nfrForm, email: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Şirket Adı</label>
                <Input
                  className="bg-slate-950 border-slate-800 focus:ring-emerald-500 text-white"
                  placeholder="Teknoloji Bilişim Ltd."
                  required
                  value={nfrForm.company}
                  onChange={e => setNfrForm({ ...nfrForm, company: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Telefon Numarası</label>
                <Input
                  type="tel"
                  className="bg-slate-950 border-slate-800 focus:ring-emerald-500 text-white"
                  placeholder="0532 XXXXXXX"
                  required
                  value={nfrForm.phone}
                  onChange={e => setNfrForm({ ...nfrForm, phone: e.target.value })}
                />
              </div>

              {statusMessage && (
                <p className="text-xs text-red-500 text-center font-medium bg-red-500/10 border border-red-500/20 py-2 rounded-lg">
                  {statusMessage}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 rounded-xl mt-4 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    Lisans Talebi İletiliyor...
                  </>
                ) : (
                  "NFR LABORATUVAR LİSANSI TALEP ET"
                )}
              </Button>
              <p className="text-[10px] text-slate-600 text-center flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Bilgileriniz siber güvenlik kuralları uyarınca korunmaktadır.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
