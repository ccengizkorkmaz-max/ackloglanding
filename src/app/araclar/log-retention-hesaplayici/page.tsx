"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Database, HardDrive, Info, ShieldCheck } from "lucide-react";

export default function LogRetentionCalculatorPage() {
  const [dailyLogGB, setDailyLogGB] = useState(50);
  const [activeReg, setActiveReg] = useState("5651");

  const getRegulationMonths = (reg: string) => {
    switch (reg) {
      case "5651": return 24; // 2 years
      case "kvkk": return 12; // 1 year minimum recommended
      case "pci-dss": return 12; // 1 year
      case "iso27001": return 12; // 1 year recommended
      default: return 12;
    }
  };

  const months = getRegulationMonths(activeReg);
  const days = months * 30;
  const rawTotalGB = dailyLogGB * days;
  const compressedTotalGB = Math.round(rawTotalGB / 5); // 5:1 ratio
  const rawTotalTB = (rawTotalGB / 1024).toFixed(2);
  const compressedTotalTB = (compressedTotalGB / 1024).toFixed(2);

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col justify-between">
      <Navbar />

      <div className="container mx-auto px-4 py-28 flex-1 max-w-5xl">
        <Link href="/araclar" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-8 transition-colors group text-sm font-semibold">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Tüm Araçlara Dön
        </Link>

        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-4">
            <Database className="w-3.5 h-3.5" />
            Depolama Optimizasyonu
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Log Retention (Saklama Süresi) Hesaplayıcı
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            Seçtiğiniz regülasyona (5651, KVKK, PCI DSS) göre yasal saklama sürelerini öğrenin ve ihtiyaç duyacağınız disk alanını hesaplayın.
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
                <HardDrive className="w-4 h-4 text-indigo-500" /> Hesaplama Parametreleri
              </h3>

              {/* Regulation Selector */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-200 block">Hedef Mevzuat / Standart</label>
                <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold">
                  <button
                    onClick={() => setActiveReg("5651")}
                    className={`p-3.5 rounded-xl border transition-colors ${activeReg === "5651" ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-400"}`}
                  >
                    5651 Kanunu (24 Ay)
                  </button>
                  <button
                    onClick={() => setActiveReg("kvkk")}
                    className={`p-3.5 rounded-xl border transition-colors ${activeReg === "kvkk" ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-400"}`}
                  >
                    KVKK Tedbirler (12 Ay)
                  </button>
                  <button
                    onClick={() => setActiveReg("pci-dss")}
                    className={`p-3.5 rounded-xl border transition-colors ${activeReg === "pci-dss" ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-400"}`}
                  >
                    PCI DSS Kart Standartı (12 Ay)
                  </button>
                  <button
                    onClick={() => setActiveReg("iso27001")}
                    className={`p-3.5 rounded-xl border transition-colors ${activeReg === "iso27001" ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-400"}`}
                  >
                    ISO 27001 BGYS (12 Ay)
                  </button>
                </div>
              </div>

              {/* Daily Log GB */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Günlük Üretilen Log Miktarı (GB)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-indigo-400">{dailyLogGB} GB</span>
                </div>
                <Slider
                  min={5}
                  max={500}
                  step={5}
                  value={[dailyLogGB]}
                  onValueChange={(val) => setDailyLogGB(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Sistemlerinizin ürettiği günlük log dosyası boyutudur.</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-950/10 border border-indigo-900/20 text-xs text-slate-400 leading-relaxed">
              <strong>Yasal Bilgi:</strong> 5651 Sayılı Kanun kapsamındaki zaman damgalı log dosyalarının hash bütünlüğü bozulmadan 2 yıl saklanması hukuken zorunludur. Aksi halde idari yaptırımlar uygulanmaktadır.
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/20 to-slate-900/60 border border-indigo-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-24 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-lg font-bold text-white mb-6">Disk Kapasite Analizi</h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Standart Disk İhtiyacı</span>
                    <span className="text-xl font-black text-slate-400">{rawTotalTB} TB</span>
                    <span className="text-[9px] text-slate-500 block mt-1">Sıkıştırma Yokken</span>
                  </div>
                  <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20">
                    <span className="text-[10px] text-indigo-400 uppercase font-bold block mb-1">ACKLOG Disk İhtiyacı</span>
                    <span className="text-xl font-black text-green-400">{compressedTotalTB} TB</span>
                    <span className="text-[9px] text-green-500 block mt-1">%80 Sıkıştırılmış</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 text-xs text-slate-300 leading-relaxed">
                  <strong>ACKLOG Superpower Data Lake</strong> teknolojisi logları 5:1 oranında sıkıştırdığı için <strong>{rawTotalTB} TB</strong> yerine sadece <strong>{compressedTotalTB} TB</strong> disk satın alarak donanım faturanızı düşürürsünüz.
                </div>
              </div>

              <Link href="/demo-talep" className="block w-full pt-6">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-5 rounded-xl">
                  Detaylı Rapor Al
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
