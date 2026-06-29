"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  TrendingUp, 
  Coins, 
  Users, 
  Cpu, 
  Database, 
  Award, 
  CheckCircle,
  Loader2,
  CheckCircle2,
  Lock
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { jsPDF } from "jspdf";
import { savePartnerRoiLead } from "../actions";

type Tier = "standard" | "gold" | "platinum";

interface TierData {
  name: string;
  margin: number;
  description: string;
}

const tierProfiles: Record<Tier, TierData> = {
  standard: {
    name: "Standard Partner",
    margin: 0.20,
    description: "Yetkili satış ortağı. ACKLOG lisans satışlarından %20 net marj elde eder."
  },
  gold: {
    name: "Gold Partner",
    margin: 0.30,
    description: "Gelişmiş satış ve entegrasyon ortağı. ACKLOG lisans satışlarından %30 net marj elde eder."
  },
  platinum: {
    name: "Platinum Partner",
    margin: 0.40,
    description: "Bölgesel veya stratejik ortak. ACKLOG lisans satışlarından %40 net marj elde eder."
  }
};

export default function PartnerRoiCalculatorPage() {
  const [clientCount, setClientCount] = useState(5);
  const [avgDealSize, setAvgDealSize] = useState(15000); // average client deal size in USD/year
  const [tier, setTier] = useState<Tier>("standard");
  const [currency, setCurrency] = useState<"USD" | "TRY">("USD");

  const EXCHANGE_RATE = 33; // 1 USD = 33 TRY

  // Calculations
  const marginPercent = tierProfiles[tier].margin;
  const totalCiro = clientCount * avgDealSize;
  const partnerLicenseRevenue = totalCiro * marginPercent;
  
  // Custom installation and support services billed directly to client (approx $2,000 per client)
  const partnerServiceRevenue = clientCount * 2000;
  
  const partnerTotalRevenue = partnerLicenseRevenue + partnerServiceRevenue;

  // Foreign vendor benchmark (typically 10% margin, no extra local support margins)
  const foreignVendorRevenue = (totalCiro * 0.10);
  const extraGainWithAcklog = partnerTotalRevenue - foreignVendorRevenue;

  // Convert USD to local currency if TRY is selected
  const formatValue = (usdVal: number) => {
    if (currency === "TRY") {
      return (usdVal * EXCHANGE_RATE);
    }
    return usdVal;
  };

  const getCurrencySymbol = () => currency === "USD" ? "$" : "₺";

  // Lead Modal States
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const generatePDF = () => {
    const doc = new jsPDF();
    const cSymbol = getCurrencySymbol();
    const today = new Date().toLocaleDateString('tr-TR');

    // Set colors
    doc.setFillColor(15, 23, 42); // slate-950 background for header
    doc.rect(0, 0, 210, 45, 'F');
    
    // Header Title
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("ACKLOG SIEM", 15, 20);
    
    doc.setFontSize(12);
    doc.setTextColor(16, 185, 129); // emerald-500
    doc.text("PARTNER KARLiLiK VE SIMULASYON RAPORU", 15, 28);
    
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(`Rapor Tarihi: ${today}`, 15, 36);
    
    // Section 1: Customer Details
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("PARTNER ADAYI VE DETAYLARI", 15, 60);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Yetkili Ad Soyad: ${leadForm.name}`, 15, 70);
    doc.text(`Firma: ${leadForm.company}`, 15, 76);
    doc.text(`E-posta: ${leadForm.email}`, 15, 82);
    if (leadForm.phone) {
      doc.text(`Telefon: ${leadForm.phone}`, 15, 88);
    }
    doc.text(`Partnerlik Seviyesi: ${tierProfiles[tier].name}`, 15, 94);
    
    // Draw line
    doc.setDrawColor(226, 232, 240);
    doc.line(15, 100, 195, 100);
    
    // Section 2: Input parameters
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("SIMULASYON PARAMETRELERi", 15, 112);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`Hedeflenen Musteri Sayisi: ${clientCount} Firma`, 15, 122);
    doc.text(`Musteri Basi Yillik Ort. Lisans Bedeli: ${cSymbol}${formatValue(avgDealSize).toLocaleString("tr-TR")}`, 15, 128);
    doc.text(`Musteri Basi Yillik Hizmet & Kurulum Geliri: ${cSymbol}${formatValue(2000).toLocaleString("tr-TR")} (Tahmini)`, 15, 134);
    
    // Section 3: Profit Comparison Table
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("KAZANC VE GELiR TABLOSU", 15, 150);
    
    // Table headers
    doc.setFontSize(10);
    doc.setFillColor(241, 245, 249);
    doc.rect(15, 157, 180, 8, 'F');
    doc.text("Gelir Kalemi", 17, 163);
    doc.text("ACKLOG SIEM", 140, 163);
    
    // Table rows
    doc.setFont("helvetica", "normal");
    doc.text("Yillik Lisans Marj Geliri", 17, 175);
    doc.text(`${cSymbol}${formatValue(partnerLicenseRevenue).toLocaleString("tr-TR")}`, 140, 175);
    
    doc.text("Kurulum, Bakim ve Hizmet Geliri (Tahmini)", 17, 183);
    doc.text(`${cSymbol}${formatValue(partnerServiceRevenue).toLocaleString("tr-TR")}`, 140, 183);
    
    doc.line(15, 189, 195, 189);
    
    doc.setFont("helvetica", "bold");
    doc.text("Yillik Toplam Partner Kazanci", 17, 199);
    doc.text(`${cSymbol}${formatValue(partnerTotalRevenue).toLocaleString("tr-TR")}`, 140, 199);
    
    // Section 4: ROI Box
    doc.setFillColor(236, 253, 245); // green-50
    doc.setDrawColor(167, 243, 208); // green-200
    doc.rect(15, 210, 180, 20, 'FD');
    
    doc.setTextColor(4, 120, 87); // green-700
    doc.setFontSize(11);
    doc.text(`Geleneksel SIEM Satmaya Kiyasla EK KAZANCINIZ: ${cSymbol}${formatValue(extraGainWithAcklog).toLocaleString("tr-TR")}`, 20, 222);
    
    // Footer / Contact Info
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(10);
    doc.text("ACKLOG SIEM - BTPROSES Bilgi Teknolojileri", 15, 245);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("Web: www.logsiem.com | E-posta: info@logsiem.com", 15, 251);
    doc.text("ACKLOG yerli SIEM cozumleri ve yaygin bayi ortaklik programi.", 15, 257);
    
    // Save Document
    doc.save(`ACKLOG_Partner_Karlilik_Raporu_${today.replace(/\./g, '_')}.pdf`);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const res = await savePartnerRoiLead({
        name: leadForm.name,
        email: leadForm.email,
        phone: leadForm.phone,
        company: leadForm.company,
        clientCount,
        avgDealSize,
        tier,
        partnerRevenue: partnerTotalRevenue,
        totalRevenue: totalCiro,
        currency
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
        <Link href="/is-ortakligi" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-8 transition-colors group text-sm font-semibold">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> İş Ortaklığı Sayfasına Dön
        </Link>

        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            B2B Karlılık Simülatörü
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Partner & Bayi Kârlılık Hesaplayıcı
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            ACKLOG SIEM satarak ve kurulum/destek hizmetleri vererek yıllık ne kadar ciro ve net gelir elde edebileceğinizi interaktif olarak hesaplayın.
          </p>
        </header>

        {/* Controls Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-6">
              
              {/* Currency & Partner Tier Header */}
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Coins className="w-4 h-4 text-emerald-500" /> Simülasyon Kriterleri
                </h3>
                {/* Currency Toggle */}
                <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
                  <button
                    onClick={() => setCurrency("USD")}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${currency === "USD" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"}`}
                  >
                    USD ($)
                  </button>
                  <button
                    onClick={() => setCurrency("TRY")}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${currency === "TRY" ? "bg-emerald-600 text-white" : "text-slate-400 hover:text-white"}`}
                  >
                    TRY (₺)
                  </button>
                </div>
              </div>

              {/* Client Count Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Hedeflenecek Müşteri Sayısı (Yıllık)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-emerald-400">{clientCount} Firma</span>
                </div>
                <Slider
                  min={1}
                  max={20}
                  step={1}
                  value={[clientCount]}
                  onValueChange={(val) => setClientCount(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">ACKLOG satmayı planladığınız yıllık toplam kurumsal müşteri sayısı.</span>
              </div>

              {/* Deal Size Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Ortalama Proje / Lisans Hacmi</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-emerald-400">{getCurrencySymbol()}{formatValue(avgDealSize).toLocaleString("tr-TR")}</span>
                </div>
                <Slider
                  min={5000}
                  max={50000}
                  step={2500}
                  value={[avgDealSize]}
                  onValueChange={(val) => setAvgDealSize(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Proje büyüklüğüne göre müşteri başına yıllık ortalama lisans bedeli.</span>
              </div>

              {/* Partner Tier Selection */}
              <div className="space-y-3 pt-2">
                <label className="text-sm font-semibold text-slate-200 block">İş Ortaklığı Yetki Seviyeniz</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["standard", "gold", "platinum"] as Tier[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${tier === t ? "bg-emerald-600/10 border-emerald-500 text-emerald-400 font-extrabold" : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"}`}
                    >
                      {tierProfiles[t].name.split(" ")[0]} ({tierProfiles[t].margin * 100}%)
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-900">
                  {tierProfiles[tier].description}
                </p>
              </div>

            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Margins Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/20 to-slate-900/60 border border-emerald-500/20 relative overflow-hidden">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400 animate-pulse" /> Yıllık Gelir Projeksiyonu
              </h3>

              <div className="space-y-5">
                
                {/* Total Deal Volume */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-semibold text-slate-300 block">Yaratılan Toplam Ciro</span>
                    <span className="text-[10px] text-slate-500">Müşterilerden toplanacak lisans bütçesi</span>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-slate-400">{getCurrencySymbol()}{formatValue(totalCiro).toLocaleString("tr-TR")}</span>
                  </div>
                </div>

                {/* Partner License Share */}
                <div className="flex justify-between items-center border-t border-slate-800/80 pt-4">
                  <div>
                    <span className="text-sm font-semibold text-slate-300 block">Lisans Marj Geliri</span>
                    <span className="text-[10px] text-slate-500">Tier marjı karşılığı net kazancınız</span>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-emerald-400">+{getCurrencySymbol()}{formatValue(partnerLicenseRevenue).toLocaleString("tr-TR")}</span>
                  </div>
                </div>

                {/* Partner Services Share */}
                <div className="flex justify-between items-center border-t border-slate-800/80 pt-4">
                  <div>
                    <span className="text-sm font-semibold text-slate-300 block">Hizmet & Destek Geliri</span>
                    <span className="text-[10px] text-slate-500">Kurulum ve danışmanlıktan kalacak net kazanç</span>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-bold text-emerald-400">+{getCurrencySymbol()}{formatValue(partnerServiceRevenue).toLocaleString("tr-TR")}</span>
                  </div>
                </div>

                {/* Net Income Box */}
                <div className="border-t border-emerald-500/30 pt-6 mt-2 text-center bg-emerald-950/20 p-4 rounded-xl">
                  <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider mb-1">Tahmini Yıllık Net Geliriniz</span>
                  <span className="text-3xl font-black text-white">{getCurrencySymbol()}{formatValue(partnerTotalRevenue).toLocaleString("tr-TR")}</span>
                </div>

              </div>
            </div>

            {/* Benchmark vs Foreign Vendors */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-4">
              <h4 className="text-sm font-bold text-white mb-2">ACKLOG vs Yabancı SIEM Satış Geliri</h4>
              <div className="space-y-3 font-sans">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Yabancı SIEM Satış Geliri (Ort. %10 Marj):</span>
                  <span className="font-mono text-red-400">{getCurrencySymbol()}{formatValue(foreignVendorRevenue).toLocaleString("tr-TR")}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>ACKLOG Hibrit Model Geliri:</span>
                  <span className="font-mono text-green-400">{getCurrencySymbol()}{formatValue(partnerTotalRevenue).toLocaleString("tr-TR")}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-300 pt-2 border-t border-slate-800">
                  <strong>ACKLOG ile Ekstra Net Kazanç:</strong>
                  <strong className="font-mono text-emerald-400">+{getCurrencySymbol()}{formatValue(extraGainWithAcklog).toLocaleString("tr-TR")}</strong>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <Button 
                  onClick={() => setShowLeadModal(true)} 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-green-600/10 cursor-pointer"
                >
                  Kârlılık Raporunu PDF Olarak İndir
                </Button>
                <Link href="/is-ortakligi" className="block w-full">
                  <Button className="w-full bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 font-bold py-5 rounded-xl shadow-lg shadow-emerald-600/5 cursor-pointer">
                    Hemen İş Ortağı Olun
                  </Button>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Lead capture modal for Partner ROI Report */}
      <Dialog open={showLeadModal} onOpenChange={setShowLeadModal}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-500" /> Kârlılık Analizini İndir
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Bu gelir simülasyonunu PDF olarak indirmek ve iş ortaklığı şartnamesini e-posta adresinize almak için bilgilerinizi girin.
            </DialogDescription>
          </DialogHeader>
          
          {submitSuccess ? (
            <div className="flex flex-col items-center text-center py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
              <h4 className="text-xl font-bold text-white">Rapor Başarıyla Oluşturuldu!</h4>
              <p className="text-sm text-slate-400">
                PDF dosyanız indiriliyor ve detaylı şartname e-posta adresinize gönderiliyor.
              </p>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="space-y-4 py-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Ad Soyad</label>
                <Input
                  className="bg-slate-950 border-slate-800 focus:ring-emerald-500 text-white"
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
                  className="bg-slate-950 border-slate-800 focus:ring-emerald-500 text-white"
                  placeholder="ahmet@sirket.com"
                  required
                  value={leadForm.email}
                  onChange={e => setLeadForm({ ...leadForm, email: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Şirket Adı</label>
                <Input
                  className="bg-slate-950 border-slate-800 focus:ring-emerald-500 text-white"
                  placeholder="Teknoloji Bilişim Ltd."
                  required
                  value={leadForm.company}
                  onChange={e => setLeadForm({ ...leadForm, company: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Telefon Numarası (Opsiyonel)</label>
                <Input
                  type="tel"
                  className="bg-slate-950 border-slate-800 focus:ring-emerald-500 text-white"
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
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12 rounded-xl mt-4 cursor-pointer"
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
