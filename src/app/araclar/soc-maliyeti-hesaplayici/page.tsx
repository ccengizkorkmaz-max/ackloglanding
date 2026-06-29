"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Users, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle,
  Loader2,
  CheckCircle2,
  Database
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { jsPDF } from "jspdf";
import { saveSocLead } from "../actions";


export default function SocCostCalculatorPage() {
  const [analystCount, setAnalystCount] = useState(5);
  const [avgSalary, setAvgSalary] = useState(65000); // Average monthly cost per analyst (gross)
  const [licensingCost, setLicensingCost] = useState(350000); // Annual SIEM licence cost (in TL)

  // Calculations
  const monthlySalaryTotal = analystCount * avgSalary;
  const annualSalaryTotal = monthlySalaryTotal * 12;
  const inHouseTotal = annualSalaryTotal + licensingCost + 120000; // Salary + Licence + Training/Servers

  // ACKLOG + MSSP Partner Cost model (roughly 75% cheaper)
  const acklogMsspTotal = Math.round(inHouseTotal * 0.25);
  const savings = inHouseTotal - acklogMsspTotal;

  // Lead Modal States
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Set colors
    doc.setFillColor(15, 23, 42); // slate-950 background for header
    doc.rect(0, 0, 210, 45, 'F');
    
    // Header Title
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("ACKLOG SIEM", 15, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(168, 85, 247); // purple-500
    doc.text("SOC MALiYET VE OPERASYON RAPORU", 15, 28);
    
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    const today = new Date().toLocaleDateString('tr-TR');
    doc.text(`Rapor Tarihi: ${today}`, 15, 36);
    
    // Section 1: Customer Details
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("MUSTERi VE ANALiZ DETAYLARI", 15, 60);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Hazirlayan: ${leadForm.name}`, 15, 70);
    doc.text(`Firma: ${leadForm.company || 'Belirtilmedi'}`, 15, 76);
    doc.text(`E-posta: ${leadForm.email}`, 15, 82);
    if (leadForm.phone) {
      doc.text(`Telefon: ${leadForm.phone}`, 15, 88);
    }
    
    // Draw line
    doc.setDrawColor(226, 232, 240);
    doc.line(15, 95, 195, 95);
    
    // Section 2: Input parameters
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("GIRILEN ANALiZ PARAMETRELERi", 15, 108);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Gereken Analist Sayisi: ${analystCount} Kisi`, 15, 118);
    doc.text(`Analist Ortalama Brut Maas (Aylik): ${avgSalary.toLocaleString("tr-TR")} TL`, 15, 124);
    doc.text(`Mevcut SIEM Yillik Lisans Bedeli: ${licensingCost.toLocaleString("tr-TR")} TL`, 15, 130);
    
    // Section 3: Financial Comparison Table
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("YILLIK TOPLAM MALiYET KARSiLASTIRMASI", 15, 145);
    
    // Table headers
    doc.setFontSize(10);
    doc.setFillColor(241, 245, 249);
    doc.rect(15, 152, 180, 8, 'F');
    doc.text("Model", 17, 158);
    doc.text("Yillik Toplam Maliyet", 130, 158);
    
    // Table rows
    doc.setFont("helvetica", "normal");
    doc.text("Kurum Ici SOC (In-House) (Personel + Donanim + SIEM)", 17, 170);
    doc.text(`${inHouseTotal.toLocaleString("tr-TR")} TL`, 130, 170);
    
    doc.text("ACKLOG + Partner MSSP Hibrit Modeli (7/24)", 17, 178);
    doc.text(`${acklogMsspTotal.toLocaleString("tr-TR")} TL`, 130, 178);
    
    doc.line(15, 184, 195, 184);
    
    // Section 4: SOC Savings Summary Box
    doc.setFillColor(250, 245, 255); // purple-50
    doc.setDrawColor(233, 213, 255); // purple-200
    doc.rect(15, 195, 180, 25, 'FD');
    
    doc.setTextColor(107, 33, 168); // purple-700
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("ACKLOG VE MSSP iLE YILLIK NET TASARRUFUNUZ", 20, 203);
    doc.setFontSize(16);
    doc.text(`${savings.toLocaleString("tr-TR")} TL`, 20, 213);
    
    // Footer / Contact Info
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("ACKLOG SIEM - BTPROSES Bilgi Teknolojileri", 15, 240);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("Web: www.logsiem.com | E-posta: info@logsiem.com", 15, 246);
    doc.text("ACKLOG yerli SIEM cozumleri ve MSSP siber olay izleme ortaklik modelleri.", 15, 252);
    
    // Save Document
    doc.save(`ACKLOG_SOC_Maliyet_Raporu_${today.replace(/\./g, '_')}.pdf`);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const res = await saveSocLead({
        name: leadForm.name,
        email: leadForm.email,
        phone: leadForm.phone,
        company: leadForm.company,
        analystCount,
        avgSalary,
        licensingCost,
        inHouseTotal,
        acklogMsspTotal,
        savings,
        currency: "TRY"
      });

      if (res.success) {
        setSubmitSuccess(true);
        generatePDF();
        
        setTimeout(() => {
          setShowLeadModal(false);
          setSubmitSuccess(false);
          setLeadForm({ name: "", email: "", phone: "", company: "" });
        }, 3000);
      } else {
        setStatusMessage(res.message || "Bir hata oluştu.");
      }
    } catch (err: any) {
      setStatusMessage("Baglanti hatasi olustu. Lutfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col justify-between">
      <Navbar />

      <div className="container mx-auto px-4 py-28 flex-1 max-w-5xl">
        <Link href="/araclar" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-8 transition-colors group text-sm font-semibold">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Tüm Araçlara Dön
        </Link>

        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-400 uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            Finansal Siber Analiz
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            SOC Personel & İşletme Maliyeti Hesaplayıcı
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            Kurum bünyesinde 7/24 siber olay izleme merkezi (SOC) kurmanın gerçek maliyetini görün ve ACKLOG & MSSP hibrit modelinin tasarruf potansiyelini keşfedin.
          </p>
        </header>

        {/* Brand statement */}
        <div className="mb-8 p-4 rounded-xl bg-blue-950/10 border border-blue-900/20 text-xs text-slate-400 max-w-4xl leading-relaxed">
          Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-purple-500" /> Kurum İçi SOC Parametreleri
              </h3>

              {/* Analyst Count */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Gereken Analist Sayısı (7/24 Vardiyalı)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-purple-400">{analystCount} Kişi</span>
                </div>
                <Slider
                  min={3}
                  max={15}
                  step={1}
                  value={[analystCount]}
                  onValueChange={(val) => setAnalystCount(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">7/24 kesintisiz nöbet için minimum 5 analist önerilir.</span>
              </div>

              {/* Average Salary */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Analist Ortalama Brüt Maaş + Masraflar (Aylık)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-purple-400">{avgSalary.toLocaleString("tr-TR")} TL</span>
                </div>
                <Slider
                  min={30000}
                  max={150000}
                  step={5000}
                  value={[avgSalary]}
                  onValueChange={(val) => setAvgSalary(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Yemek, sigorta ve diğer yan haklar dahildir.</span>
              </div>

              {/* Licensing cost */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Geleneksel SIEM Yıllık Lisans Bütçesi (Tahmini)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-purple-400">{licensingCost.toLocaleString("tr-TR")} TL</span>
                </div>
                <Slider
                  min={100000}
                  max={2000000}
                  step={50000}
                  value={[licensingCost]}
                  onValueChange={(val) => setLicensingCost(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Yabancı para birimlerinin TL karşılığı hesaplanmıştır.</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-purple-950/10 border border-purple-900/20 text-xs text-slate-400 leading-relaxed">
              <strong>Biliyor muydunuz?</strong> Kurum içi bir SOC ekibinde yıllık personel devir oranı siber güvenlik sektöründe %35 civarındadır. İşe alım, sertifikasyon ve eğitim maliyetleri ek bütçeler gerektirir.
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-6 space-y-6">
            {/* Comparison Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/20 to-slate-900/60 border border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-24 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" /> Yıllık Toplam Karşılaştırma
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-bold text-slate-200 block">Kendi SOC Ekibiniz (In-House)</span>
                    <span className="text-xs text-slate-400">Yazılım, personel ve altyapı dahil</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-red-400">{inHouseTotal.toLocaleString("tr-TR")} TL</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-slate-800/80 pt-4">
                  <div>
                    <span className="text-sm font-bold text-green-400 block">ACKLOG + Partner MSSP Model</span>
                    <span className="text-xs text-slate-400">Hazır yerli SIEM + 7/24 Uzaktan SOC</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-green-400">{acklogMsspTotal.toLocaleString("tr-TR")} TL</span>
                  </div>
                </div>

                <div className="border-t border-purple-500/30 pt-6 mt-2 text-center bg-purple-950/20 p-4 rounded-xl">
                  <span className="text-xs font-bold text-purple-400 block uppercase tracking-wider mb-1">ACKLOG İle Yıllık Tasarruf</span>
                  <span className="text-3xl font-black text-white">{savings.toLocaleString("tr-TR")} TL</span>
                </div>
              </div>
            </div>

            {/* Benefits of Hybrid MSSP */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-4">
              <h4 className="text-sm font-bold text-white mb-2">ACKLOG & MSSP Modelinin Avantajları</h4>
              <div className="space-y-3 font-sans">
                <div className="flex gap-2.5 items-start text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span><strong>Sıfır İşe Alım Yükü:</strong> Analist ayrıldı, yeni eleman bulma ve eğitme derdi son bulur.</span>
                </div>
                <div className="flex gap-2.5 items-start text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span><strong>7/24 Kesintisiz İzleme:</strong> Güvenlik olayları gece ve hafta sonları dahil profesyonelce izlenir.</span>
                </div>
                <div className="flex gap-2.5 items-start text-xs text-slate-400">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span><strong>Gelişmiş SOAR:</strong> Saldırılar otomatik veya yarı otomatik engelleme kurallarıyla anında izole edilir.</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <Button 
                  onClick={() => setShowLeadModal(true)} 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-green-600/10 cursor-pointer"
                >
                  Maliyet Analiz Raporunu İndir (PDF)
                </Button>
                <Link href="/demo-talep" className="block w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-purple-600/10" variant="outline">
                    Finansal Danışmanlık Al
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead capture modal for SOC Cost Report */}
      <Dialog open={showLeadModal} onOpenChange={setShowLeadModal}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-500" /> Maliyet Analiz Raporunu İndir
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Yıllık SOC personel ve işletme maliyet analiz raporunuzu PDF formatında indirmek ve detaylı MSSP servis kataloğunu e-posta ile almak için bilgilerinizi girin.
            </DialogDescription>
          </DialogHeader>
          
          {submitSuccess ? (
            <div className="flex flex-col items-center text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
              <h4 className="text-xl font-bold text-white">Rapor Başarıyla Oluşturuldu!</h4>
              <p className="text-sm text-slate-400">
                PDF dosyanız indiriliyor ve detaylı rapor e-posta adresinize gönderiliyor.
              </p>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="space-y-4 py-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Ad Soyad</label>
                <Input
                  className="bg-slate-950 border-slate-800 focus:ring-purple-500 text-white"
                  placeholder="Ahmet Yılmaz"
                  required
                  value={leadForm.name}
                  onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Kurumsal E-posta</label>
                <Input
                  type="email"
                  className="bg-slate-950 border-slate-800 focus:ring-purple-500 text-white"
                  placeholder="ahmet@sirket.com"
                  required
                  value={leadForm.email}
                  onChange={e => setLeadForm({ ...leadForm, email: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Şirket Adı</label>
                <Input
                  className="bg-slate-950 border-slate-800 focus:ring-purple-500 text-white"
                  placeholder="Teknoloji A.Ş."
                  required
                  value={leadForm.company}
                  onChange={e => setLeadForm({ ...leadForm, company: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Telefon Numarası (Opsiyonel)</label>
                <Input
                  type="tel"
                  className="bg-slate-950 border-slate-800 focus:ring-purple-500 text-white"
                  placeholder="0532 XXXXXXX"
                  value={leadForm.phone}
                  onChange={e => setLeadForm({ ...leadForm, phone: e.target.value })}
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
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold h-12 rounded-xl mt-4 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    Rapor Hazırlanıyor...
                  </>
                ) : (
                  "RAPORU İNDİR VE GÖNDER"
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  );
}
