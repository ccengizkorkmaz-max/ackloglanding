"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileCheck, Info, ShieldAlert, CheckCircle } from "lucide-react";

interface ChecklistItem {
  id: string;
  text: string;
  weight: number;
}

export default function FiftySixFiftyOneChecklistPage() {
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: "internet_trafigi", text: "İç IP dağıtım (DHCP) logları ile kullanıcı eşleştirmesi", weight: 20 },
    { id: "nat_loglari", text: "Dış IP ve kaynak port (NAT) loglarının eksiksiz toplanması", weight: 20 },
    { id: "zaman_damgasi", text: "TÜBİTAK/KamuSM uyumlu zaman damgasıyla günlük mühürleme", weight: 20 },
    { id: "retention", text: "Zaman damgalı logların en az 2 yıl boyunca saklanması", weight: 15 },
    { id: "degistirilemezlik", text: "Logların manuel müdahaleye kapalı şifreli dizinlerde saklanması", weight: 15 },
    { id: "dogrulama", text: "Zaman damgası bütünlüğünün düzenli asenkron kontrol edilmesi", weight: 10 }
  ]);

  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setCheckedIds(
      checkedIds.includes(id)
        ? checkedIds.filter(item => item !== id)
        : [...checkedIds, id]
    );
  };

  const totalScore = items.reduce((acc, curr) => {
    if (checkedIds.includes(curr.id)) {
      return acc + curr.weight;
    }
    return acc;
  }, 0);

  const getEvaluation = (score: number) => {
    if (score === 100) return { title: "Yasal Uyum Tam", desc: "5651 Sayılı Kanunun teknik gerekliliklerini eksiksiz uyguluyorsunuz. Yasal denetimlerde güvendesiniz.", color: "text-green-400 border-green-500/20 bg-green-500/5" };
    if (score >= 60) return { title: "Hukuki Risk Var", desc: "Zaman damgası eksik veya DHCP/NAT eşleştirmeleriniz yetersiz. Tespit durumunda yasal sorumluluk doğabilir.", color: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5" };
    return { title: "Yüksek Cezai Risk", desc: "İnternet trafik loglarınız yasal standartlarda tutulmuyor. 5651 kapsamında idari ve cezai işlem riski çok yüksektir.", color: "text-red-400 border-red-500/20 bg-red-500/5" };
  };

  const evalResult = getEvaluation(totalScore);

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col justify-between">
      <Navbar />

      <div className="container mx-auto px-4 py-28 flex-1 max-w-5xl">
        <Link href="/araclar" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-8 transition-colors group text-sm font-semibold">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Tüm Araçlara Dön
        </Link>

        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-bold text-green-400 uppercase tracking-wider mb-4">
            <FileCheck className="w-3.5 h-3.5" />
            5651 Kanun Denetimi
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            5651 Sayılı Kanun Uyum Denetimi
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            İnternet toplu kullanım sağlayıcıları için 5651 sayılı kanunun gerektirdiği teknik log imzalama kriterlerinizi interaktif denetleyin.
          </p>
        </header>

        {/* Brand statement */}
        <div className="mb-8 p-4 rounded-xl bg-blue-950/10 border border-blue-900/20 text-xs text-slate-400 max-w-4xl leading-relaxed">
          Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Checklist */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-3">Denetim Listesi</h3>

              {items.map((item) => {
                const isChecked = checkedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggle(item.id)}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${isChecked ? "bg-green-500/10 border-green-500/30 text-white" : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"}`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}} // Controlled by parent div click
                      className="mt-1 text-green-500 rounded border-slate-800 bg-slate-950 focus:ring-green-500 accent-green-500 shrink-0"
                    />
                    <div className="flex-1">
                      <span className={`text-sm font-semibold block ${isChecked ? "text-slate-100" : "text-slate-300"}`}>
                        {item.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-center relative overflow-hidden">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-500 block mb-2 uppercase">5651 Uyum Yüzdesi</span>
              <div className="text-6xl font-black text-white tracking-tighter mb-4">
                %{totalScore}
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-green-500 h-full transition-all duration-500"
                  style={{ width: `${totalScore}%` }}
                />
              </div>

              <div className={`p-4 rounded-xl border text-left ${evalResult.color}`}>
                <h4 className="text-sm font-bold mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> {evalResult.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">{evalResult.desc}</p>
              </div>
            </div>

            {/* How ACKLOG helps */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-4">
              <h4 className="text-sm font-bold text-white mb-2">ACKLOG 5651 Otomasyonu</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                ACKLOG, entegre hot-spot ve DHCP log parser'ları sayesinde iç ağ IP/MAC ve port bazlı dış IP (NAT) loglarını toplar, günlük olarak KamuSM (TÜBİTAK) zaman damgasıyla otomatik mühürler. Yasal denetimlerde log geçerliliği garantidir.
              </p>
              <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 text-xs text-slate-400 leading-relaxed flex gap-2">
                <Info className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <span>
                  <strong>%100 Otomatik İmzalama:</strong> Zaman damgası mühürleme ve arşivleme işlemleri asenkron olarak arka planda yürütülür.
                </span>
              </div>

              <Link href="/demo-talep" className="block w-full pt-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-xl">
                  5651 Danışmanlığı Talep Et
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
