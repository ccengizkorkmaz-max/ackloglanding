"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Clock, Zap, Target, ShieldAlert } from "lucide-react";

export default function MttdMttrPage() {
  const [mttdHours, setMttdHours] = useState(72); // MTTD in hours
  const [mttrHours, setMttrHours] = useState(24); // MTTR in hours

  // Maturity calculation
  const getMaturityTier = (mttd: number, mttr: number) => {
    const score = mttd + mttr;
    if (score <= 2) {
      return { tier: "Optimize (Lider)", desc: "Tehditleri anında izole ediyorsunuz. Siber olaylara hazırlık düzeyiniz mükemmel.", color: "text-green-400 border-green-500/20 bg-green-500/5" };
    } else if (score <= 24) {
      return { tier: "Yönetilen (Olgun)", desc: "Saldırıları aynı gün içinde durdurabiliyorsunuz. Kabul edilebilir seviye.", color: "text-blue-400 border-blue-500/20 bg-blue-500/5" };
    } else if (score <= 168) {
      return { tier: "Temel Güvenlik", desc: "Tehditleri tespit ve müdahale süreniz 1 haftayı buluyor. Risk seviyeniz yüksek.", color: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5" };
    } else {
      return { tier: "Kritik Risk Altında", desc: "Zararlı aktiviteleri fark etmeniz haftalar alıyor. Ciddi veri ihlali riskiniz var.", color: "text-red-400 border-red-500/20 bg-red-500/5" };
    }
  };

  const maturity = getMaturityTier(mttdHours, mttrHours);

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col justify-between">
      <Navbar />

      <div className="container mx-auto px-4 py-28 flex-1 max-w-5xl">
        <Link href="/araclar" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-8 transition-colors group text-sm font-semibold">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Tüm Araçlara Dön
        </Link>

        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            Olgunluk Simülatörü
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            MTTD & MTTR Olgunluk Simülatörü
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            Tehdit Tespit Süresi (MTTD) ve Tehdit Yanıt Süresi (MTTR) değerlerinizi girerek kurumsal siber olgunluk seviyenizi analiz edin.
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
                <Target className="w-4 h-4 text-emerald-500" /> Operasyonel Metrikleriniz
              </h3>

              {/* MTTD Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Ortalama Tehdit Tespit Süresi (MTTD)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-emerald-400">
                    {mttdHours === 0 ? "Real-time (< 1 sn)" : `${mttdHours} Saat`}
                  </span>
                </div>
                <Slider
                  min={0}
                  max={720} // 30 days
                  step={1}
                  value={[mttdHours]}
                  onValueChange={(val) => setMttdHours(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Saldırının başladığı an ile ekibin haberdar olduğu an arasındaki süre.</span>
              </div>

              {/* MTTR Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Ortalama Tehdide Müdahale Süresi (MTTR)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-emerald-400">
                    {mttrHours === 0 ? "Otomatik (< 1 dk)" : `${mttrHours} Saat`}
                  </span>
                </div>
                <Slider
                  min={0}
                  max={168} // 7 days
                  step={1}
                  value={[mttrHours]}
                  onValueChange={(val) => setMttrHours(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Saldırının fark edildiği an ile yayılmasının durdurulduğu an arasındaki süre.</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-950/10 border border-emerald-900/20 text-xs text-slate-400 leading-relaxed">
              <strong>Global Raporlara Göre:</strong> 2026 yılı siber güvenlik raporlarına göre, dünya genelinde ortalama MTTD 200 günden fazla sürmektedir. Saldırganlar ağda haftalarca fark edilmeden kalabilmektedir.
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-6 space-y-6">
            {/* Maturity level box */}
            <div className={`p-6 rounded-2xl border ${maturity.color} relative overflow-hidden`}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Mevcut Güvenlik Durumu</h3>
              <div className="text-3xl font-black mb-3 tracking-tight">{maturity.tier}</div>
              <p className="text-sm text-slate-300 leading-relaxed">{maturity.desc}</p>
            </div>

            {/* ACKLOG performance benchmark */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-4">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-yellow-400" />
                ACKLOG Mimarisi İle Hedeflenen Süreler
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">ACKLOG MTTD Hedefi</span>
                    <span className="text-sm text-slate-200">Bellekte akar log analizi (In-Memory)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-green-400">&lt; 0.4 Milisaniye</span>
                  </div>
                </div>

                <div className="flex justify-between items-start border-b border-slate-800/80 pb-3">
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">ACKLOG MTTR Hedefi</span>
                    <span className="text-sm text-slate-200">Otomatik SOAR kuralları (Playbooks)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-green-400">&lt; 30 Saniye</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10 text-xs text-slate-400 leading-relaxed flex gap-2">
                <ShieldAlert className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>
                  ACKLOG SIEM, in-memory korelasyon yeteneği ve dahili SOAR playbook otomasyonu ile MTTD/MTTR değerlerinizi <strong>dakikalar seviyesine</strong> çekerek siber yayılmayı anında engeller.
                </span>
              </div>

              <Link href="/demo-talep" className="block w-full pt-2">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-xl">
                  Süreleri Düşürmeye Başla
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
