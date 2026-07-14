"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ShieldCheck, ArrowRight, Search, LayoutGrid, Target, 
  Database, Activity, Users, CheckSquare, FileText 
} from "lucide-react";
import { siemUseCasesData } from "@/data/siem-use-cases";
import { Footer } from "@/components/footer";

const CATEGORIES = [
  { id: "all", label: "Tümü", icon: LayoutGrid },
  { id: "detection-use-cases", label: "Tespit Senaryoları", icon: Target },
  { id: "logging", label: "Log Yönetimi & Analiz", icon: Database },
  { id: "soc", label: "SOC & Tehdit Avcılığı", icon: Activity },
  { id: "work-in-a-soc", label: "SOC Operasyonları", icon: Users },
  { id: "incident-response", label: "Olay Müdahale (IR)", icon: ShieldCheck },
  { id: "other-stuff", label: "Sıkılaştırma & Diğer", icon: CheckSquare },
];

export default function SiemUseCasesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get index/homepage data for the intro
  const introData = siemUseCasesData["index"];

  // Filter out the index page from the main grid cards
  const allItems = useMemo(() => {
    return Object.values(siemUseCasesData).filter(item => item.slug !== "index");
  }, []);

  // Filter and search logic
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      
      const query = searchQuery.toLowerCase().trim();
      const titleMatch = item.title.toLowerCase().includes(query);
      const descMatch = item.description.toLowerCase().includes(query);
      const contentMatch = item.htmlContent.toLowerCase().includes(query);

      return titleMatch || descMatch || contentMatch;
    });
  }, [allItems, selectedCategory, searchQuery]);

  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-slate-100 pt-24 justify-between">
      {/* Hero Area */}
      <section className="relative w-full py-16 lg:py-24 overflow-hidden border-b border-slate-900 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950/0 to-slate-950/0" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container relative mx-auto px-4 text-center max-w-5xl">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 uppercase tracking-widest text-[10px] font-bold text-blue-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              SIEM Kullanım Kılavuzu & Dizin
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 uppercase tracking-widest text-[10px] font-bold text-emerald-400 font-mono">
              <FileText className="w-3.5 h-3.5" />
              {allItems.length} Kullanım Senaryosu
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            SIEM Use Cases <br className="hidden sm:block" /> Kütüphanesi
          </h1>

          <p className="mx-auto max-w-3xl text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
            Korelasyon kurallarınızı optimize etmek, yüksek doğruluklu alarmlar üretmek ve siber dayanıklılığınızı artırmak için derlenmiş, MITRE ATT&CK ile eşleştirilmiş kapsamlı SIEM senaryoları ve dökümantasyon kütüphanesi.
          </p>

          {/* Scraped Homepage/Intro content integrated gracefully */}
          {introData && (
            <div className="mx-auto max-w-3xl p-5 rounded-2xl bg-blue-950/10 border border-blue-500/15 mb-12 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 bg-blue-600/5 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-xs font-mono font-bold tracking-wider text-blue-400 uppercase mb-3">Editörün Notu & Başlangıç</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Yeni bir SIEM devraldıysanız veya satın aldıysanız ve <em className="text-blue-300 font-medium">"Tüm bu log kaynaklarıyla ne yapacağım?"</em> diye düşünüyorsanız, başlamak için en iyi yer açık kaynaklı <strong>Sigma kurallarıdır</strong>. Ayrıca tespit mühendisliği ve olgunluk modeli analizleri yapılması da önemlidir.
              </p>
              <div className="text-[10px] text-slate-500 border-t border-slate-900/50 pt-2.5 flex justify-between items-center">
                <span>Kaynak: siemusecases.com</span>
                <span className="text-blue-400 hover:underline inline-flex items-center gap-1 cursor-pointer">
                  Sigma Kurallarına Git &rarr;
                </span>
              </div>
            </div>
          )}

          {/* Search Box */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-500" />
              </div>
              <input
                type="text"
                placeholder="Kurallar, log kaynakları veya taktikler arasında arama yapın (örn: Windows, Sysmon, Lateral...)"
                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-slate-900/50 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all text-base shadow-2xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all border active:scale-95 ${
                      isActive 
                        ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20" 
                        : "bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-900/80 hover:border-slate-700 hover:text-white"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Use Cases */}
      <section className="py-16 bg-slate-950 flex-1">
        <div className="container mx-auto px-4 max-w-6xl">
          {filteredItems.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/siem-use-cases/${item.slug}`}
                  className="group flex flex-col p-6 rounded-2xl border border-slate-900 bg-slate-900/20 hover:bg-slate-900/40 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="mb-4 px-2.5 py-1 rounded-full bg-blue-500/10 w-fit border border-blue-500/10 text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                    {item.categoryTr}
                  </div>

                  <h2 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-widest">
                    Kaynakları Gör <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex p-4 rounded-full bg-slate-900 mb-6 border border-slate-800">
                <Search className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Arama sonucu bulunamadı</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                "{searchQuery}" ile eşleşen bir SIEM kullanım senaryosu veya makalesi bulamadık. Farklı anahtar kelimeler aramayı deneyebilirsiniz.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-950 border-t border-slate-900/60">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-white">ACKLOG SIEM ile Korelasyon Kurallarını Otomatikleştirin</h2>
          <p className="text-slate-400 mb-8 text-sm max-w-xl mx-auto leading-relaxed">
            Buradaki tüm kullanım senaryoları, yerli ve milli ACKLOG SIEM platformumuz içinde hazır şablonlar ve korelasyon kuralları olarak yer almaktadır. Canlı denemek için demo talep edin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/demo-talep"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 px-8 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all active:scale-95"
            >
              Demo Talep Et
            </Link>
            <Link
              href="/ozellikler"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-800 bg-white/5 hover:bg-white/10 px-8 text-sm font-bold text-slate-300 transition-all active:scale-95"
            >
              Tüm Özellikleri Gör
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
