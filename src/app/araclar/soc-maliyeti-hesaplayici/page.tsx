"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Users, ShieldAlert, Sparkles, CheckCircle } from "lucide-react";

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
              <div className="space-y-3">
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

              <Link href="/demo-talep" className="block w-full pt-2">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 rounded-xl">
                  Finansal Danışmanlık Al
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
