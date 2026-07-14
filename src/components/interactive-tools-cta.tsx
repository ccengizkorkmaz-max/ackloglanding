import Link from "next/link";
import { Calculator, ShieldCheck, Activity, ArrowRight } from "lucide-react";

export function InteractiveToolsCta() {
  return (
    <div className="mt-12 p-8 rounded-3xl bg-slate-900/30 border border-slate-800/80 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />
      
      <header className="mb-6">
        <span className="text-blue-500 font-mono text-[10px] uppercase tracking-widest block mb-2 font-bold">ACKLOG INTERACTIVE SUITE</span>
        <h3 className="text-xl font-black text-white mb-2 tracking-tight">Ücretsiz Siber Güvenlik & Uyum Araçları</h3>
        <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
          Kurumunuzun yasal uyumluluk (KVKK, 5651) ve teknik operasyon ihtiyaçlarını analiz eden araçlarımızı ücretsiz deneyin:
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Tool 1 */}
        <Link 
          href="/araclar/eps-hesaplayici"
          className="p-4 rounded-2xl bg-slate-950/40 border border-slate-900 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="mb-3 inline-flex p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
              <Calculator className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
              EPS Hesaplayıcı
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Cihazlarınıza göre saniye başına üretilecek log hacmini (EPS) hesaplayın.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-blue-500 uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
            Başlat <ArrowRight className="w-3 h-3" />
          </div>
        </Link>

        {/* Tool 2 */}
        <Link 
          href="/uyumluluk-testi"
          className="p-4 rounded-2xl bg-slate-950/40 border border-slate-900 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="mb-3 inline-flex p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/10 text-purple-400 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
              KVKK/5651 Testi
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Mevzuat ve yasal uyumluluk eksikliklerinizi saptamak için hızlı test yapın.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-purple-500 uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
            Başlat <ArrowRight className="w-3 h-3" />
          </div>
        </Link>

        {/* Tool 3 */}
        <Link 
          href="/araclar/soc-maliyeti-hesaplayici"
          className="p-4 rounded-2xl bg-slate-950/40 border border-slate-900 hover:border-blue-500/30 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="mb-3 inline-flex p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
              <Activity className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
              SOC Maliyet Analizi
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Kurum içi SOC ekibi kurma maliyeti ile ACKLOG modelini kıyaslayın.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
            Başlat <ArrowRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </div>
  );
}
