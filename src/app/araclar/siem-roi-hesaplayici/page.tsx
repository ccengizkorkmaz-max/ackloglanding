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
  Calculator, 
  TrendingDown, 
  Cpu, 
  Database, 
  DollarSign, 
  Coins, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  Clock
} from "lucide-react";

type Competitor = "splunk" | "qradar" | "sentinel" | "other";
type Currency = "USD" | "TRY";

interface CompetitorData {
  name: string;
  defaultLicense: number; // in USD
  defaultHardware: number; // in USD
  defaultAdmin: number; // in USD
  description: string;
}

const competitorProfiles: Record<Competitor, CompetitorData> = {
  splunk: {
    name: "Splunk Enterprise",
    defaultLicense: 32000,
    defaultHardware: 8000,
    defaultAdmin: 6000,
    description: "Günlük veri kotası (GB/Gün) üzerinden lisanslanır. Veri hacmi arttıkça sürpriz faturalar üretir ve ağır ters indeks yapısı disk alanını 3 kat şişirir."
  },
  qradar: {
    name: "IBM QRadar",
    defaultLicense: 35000,
    defaultHardware: 14000,
    defaultAdmin: 7000,
    description: "Java tabanlı ağır mimarisi nedeniyle yüksek CPU ve RAM (bellek) tüketir. Limit aşımında log düşürür veya ek lisans bedelleri çıkarır."
  },
  sentinel: {
    name: "Microsoft Sentinel",
    defaultLicense: 26000,
    defaultHardware: 6000,
    defaultAdmin: 5000,
    description: "Bulut tabanlıdır. Azure dışı firewall ve sunucu loglarını buluta taşırken yüksek bant genişliği (egress/ingress) ve bulut depolama ücretleri yansıtır."
  },
  other: {
    name: "Diğer SIEM Sistemleri",
    defaultLicense: 20000,
    defaultHardware: 5000,
    defaultAdmin: 4000,
    description: "Klasik ilişkisel veya NoSQL tabanlı veri depolayan, döviz bazlı lisanslama ve bakım modeli kullanan geleneksel SIEM'ler."
  }
};

const EXCHANGE_RATE = 33; // 1 USD = 33 TRY

export default function SiemRoiCalculatorPage() {
  const [competitor, setCompetitor] = useState<Competitor>("splunk");
  const [currency, setCurrency] = useState<Currency>("USD");
  
  // Custom states that override defaults
  const [licenseCost, setLicenseCost] = useState(competitorProfiles.splunk.defaultLicense);
  const [hardwareCost, setHardwareCost] = useState(competitorProfiles.splunk.defaultHardware);
  const [adminCost, setAdminCost] = useState(competitorProfiles.splunk.defaultAdmin);

  // When competitor changes, update values to its default profiles
  useEffect(() => {
    const profile = competitorProfiles[competitor];
    setLicenseCost(profile.defaultLicense);
    setHardwareCost(profile.defaultHardware);
    setAdminCost(profile.defaultAdmin);
  }, [competitor]);

  // Convert USD to local currency if TRY is selected
  const formatValue = (usdVal: number) => {
    if (currency === "TRY") {
      return (usdVal * EXCHANGE_RATE);
    }
    return usdVal;
  };

  const getCurrencySymbol = () => currency === "USD" ? "$" : "₺";

  // ACKLOG savings calculations
  // ACKLOG License: ~75% cheaper due to fixed pricing model
  const acklogLicense = Math.round(licenseCost * 0.25);
  // ACKLOG Hardware: ~70% cheaper due to ClickHouse columnar database and ZSTD compression requiring 80% less space & IOPS
  const acklogHardware = Math.round(hardwareCost * 0.30);
  // ACKLOG Admin: ~50% cheaper due to no-code parsers and included local support
  const acklogAdmin = Math.round(adminCost * 0.50);

  const currentTotal = licenseCost + hardwareCost + adminCost;
  const acklogTotal = acklogLicense + acklogHardware + acklogAdmin;
  const annualSavings = currentTotal - acklogTotal;
  const savingsPercent = Math.round((annualSavings / currentTotal) * 100);

  // Amortization (ROI Return Timeline)
  // Let's assume standard implementation and license swap pays off in approx 3 months
  const roiMonths = 3;

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col justify-between">
      <Navbar />

      <div className="container mx-auto px-4 py-28 flex-1 max-w-5xl">
        <Link href="/araclar" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-8 transition-colors group text-sm font-semibold">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Tüm Araçlara Dön
        </Link>

        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">
            <Coins className="w-3.5 h-3.5" />
            Finansal Yatırım Getirisi
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            SIEM Yatırım Geri Dönüşü (ROI) Hesaplayıcı
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            Mevcut SIEM maliyetlerinizi girin, ClickHouse tabanlı veri sıkıştırma ve yerli lisans avantajına sahip ACKLOG platformuna geçişteki net kazancınızı hesaplayın.
          </p>
        </header>

        {/* Brand statement */}
        <div className="mb-8 p-4 rounded-xl bg-blue-950/10 border border-blue-900/20 text-xs text-slate-400 max-w-4xl leading-relaxed">
          Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.
        </div>

        {/* Controls Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-6">
              
              {/* Currency & Competitor Selector */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-blue-500" /> Mevcut SIEM Durumu
                  </h3>
                  {/* Currency Toggle */}
                  <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
                    <button
                      onClick={() => setCurrency("USD")}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${currency === "USD" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
                    >
                      USD ($)
                    </button>
                    <button
                      onClick={() => setCurrency("TRY")}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${currency === "TRY" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
                    >
                      TRY (₺)
                    </button>
                  </div>
                </div>

                {/* Competitor Select buttons */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Karşılaştırılacak SIEM Markası</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(competitorProfiles) as Competitor[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => setCompetitor(key)}
                        className={`p-3 text-left rounded-xl border text-sm font-semibold transition-all ${
                          competitor === key
                            ? "bg-blue-600/10 border-blue-500 text-white"
                            : "bg-slate-950/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        {competitorProfiles[key].name}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 italic mt-1.5 leading-relaxed">
                    {competitorProfiles[competitor].description}
                  </p>
                </div>
              </div>

              {/* Slider 1: Annual License Cost */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Yıllık Yazılım Lisans & Bakım Bedeli</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-blue-400">
                    {getCurrencySymbol()} {formatValue(licenseCost).toLocaleString("tr-TR")}
                  </span>
                </div>
                <Slider
                  min={5000}
                  max={200000}
                  step={1000}
                  value={[licenseCost]}
                  onValueChange={(val) => setLicenseCost(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Korelasyon kuralları, veritabanı lisansları ve support dahildir.</span>
              </div>

              {/* Slider 2: Annual Hardware & Storage Cost */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Yıllık Donanım, CPU & Depolama Maliyeti</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-blue-400">
                    {getCurrencySymbol()} {formatValue(hardwareCost).toLocaleString("tr-TR")}
                  </span>
                </div>
                <Slider
                  min={2000}
                  max={50000}
                  step={500}
                  value={[hardwareCost]}
                  onValueChange={(val) => setHardwareCost(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Yedekleme üniteleri, disk IOPS yatırımları ve sunucu amortismanları.</span>
              </div>

              {/* Slider 3: Annual Admin & Operations */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Yıllık Yönetim & İşletme Maliyeti</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-blue-400">
                    {getCurrencySymbol()} {formatValue(adminCost).toLocaleString("tr-TR")}
                  </span>
                </div>
                <Slider
                  min={1000}
                  max={30000}
                  step={500}
                  value={[adminCost]}
                  onValueChange={(val) => setAdminCost(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Kurulum danışmanlığı, parser yazma süreleri ve siber analist eforu.</span>
              </div>

            </div>

            {/* Micro-insight box */}
            <div className="p-5 rounded-2xl bg-blue-950/10 border border-blue-900/20 text-xs text-slate-400 leading-relaxed flex gap-3">
              <Cpu className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block mb-1">ClickHouse Farkı Nedir?</strong>
                Geleneksel SIEM'ler verileri NoSQL tabanlı saklar ve disk alanını şişirir. ACKLOG, columnar veri yapısıyla logları ZSTD formatında %80'e varan oranlarda sıkıştırarak depolar. Bu sayede donanım faturasında anında tasarruf sağlar.
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Massive savings summary badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-900/60 border border-blue-500/20 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 p-24 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase block mb-1">YILLIK NET TASARRUF</span>
              
              <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2 flex items-center justify-center gap-1">
                {getCurrencySymbol()} {formatValue(annualSavings).toLocaleString("tr-TR")}
                <span className="text-sm font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded ml-2">
                  %{savingsPercent} Tasarruf
                </span>
              </div>
              
              <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                ACKLOG platformuna geçiş yaptığınızda, ilk yıl elde edeceğiniz tahmini toplam finansal kazançtır.
              </p>
            </div>

            {/* Breakdown Compare Table */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                Maliyet Kalemleri Kıyaslaması
              </h4>

              <div className="space-y-4">
                {/* License Row */}
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-sm font-semibold text-slate-200 block">Yazılım Lisans Bedeli</span>
                    <span className="text-[10px] text-slate-500">Limitsiz EPS & Sabit Bütçe</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-red-400 block line-through">{getCurrencySymbol()}{formatValue(licenseCost).toLocaleString("tr-TR")}</span>
                    <span className="text-sm font-bold text-green-400">{getCurrencySymbol()}{formatValue(acklogLicense).toLocaleString("tr-TR")}</span>
                  </div>
                </div>

                {/* Hardware Row */}
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-sm font-semibold text-slate-200 block">Sunucu & Disk Donanımı</span>
                    <span className="text-[10px] text-slate-500">%80 Veri Sıkıştırma Tasarrufu</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-red-400 block line-through">{getCurrencySymbol()}{formatValue(hardwareCost).toLocaleString("tr-TR")}</span>
                    <span className="text-sm font-bold text-green-400">{getCurrencySymbol()}{formatValue(acklogHardware).toLocaleString("tr-TR")}</span>
                  </div>
                </div>

                {/* Admin Row */}
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-sm font-semibold text-slate-200 block">Yönetim & Danışmanlık</span>
                    <span className="text-[10px] text-slate-500">Türkçe Destek & Kolay Arayüz</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-red-400 block line-through">{getCurrencySymbol()}{formatValue(adminCost).toLocaleString("tr-TR")}</span>
                    <span className="text-sm font-bold text-green-400">{getCurrencySymbol()}{formatValue(acklogAdmin).toLocaleString("tr-TR")}</span>
                  </div>
                </div>

                {/* Totals */}
                <div className="flex justify-between items-center pt-2">
                  <div>
                    <span className="text-sm font-bold text-slate-300">Toplam Yıllık Bütçe</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-red-400 block line-through font-semibold">{getCurrencySymbol()}{formatValue(currentTotal).toLocaleString("tr-TR")}</span>
                    <span className="text-base font-black text-white">{getCurrencySymbol()}{formatValue(acklogTotal).toLocaleString("tr-TR")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics (ROI Duration) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center">
                <div className="inline-flex p-2 rounded-lg bg-blue-500/10 mb-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-1">Amorti Süresi</span>
                <span className="text-xl font-black text-white">{roiMonths} Ay Altında</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-center">
                <div className="inline-flex p-2 rounded-lg bg-blue-500/10 mb-2">
                  <Database className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider mb-1">Disk Tasarrufu</span>
                <span className="text-xl font-black text-white">5 Kat (5:1)</span>
              </div>
            </div>

            {/* Call To Action */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Bütçenizi Boşa Harcamayı Bırakın</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  ACKLOG'un gelişmiş in-memory mimarisini ve ClickHouse tabanlı depolama verimliliğini test etmek için ücretsiz POC (Proof of Concept) süreci başlatın.
                </p>
              </div>
              <Link href="/demo-talep" className="block w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-600/10">
                  Ücretsiz Demo & POC Talep Et
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
