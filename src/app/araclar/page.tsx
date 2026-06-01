import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  Calculator, Search, ShieldCheck, Activity, FileCheck, 
  Cpu, Users, Clock, Database, CheckSquare, ShieldQuestion, ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Siber Güvenlik ve Uyum Hesaplama Araçları | ACKLOG",
  description: "Kurumunuzun siber güvenlik ihtiyaçlarını ölçün: EPS hesaplayıcı, SOC maliyet hesaplayıcı, log retention, KVKK/5651 kontrol listeleri ve fazlası.",
  alternates: {
    canonical: "/araclar",
  },
};

const tools = [
  {
    name: "EPS (Saniye Başına Olay) Hesaplayıcı",
    description: "Cihaz sayısı ve türlerine göre saniye başına üretilecek log hacmini (EPS) hesaplayın.",
    href: "/araclar/eps-hesaplayici",
    icon: Cpu,
    category: "Hesaplayıcılar",
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400"
  },
  {
    name: "SOC Personel Maliyeti Hesaplayıcı",
    description: "7/24 kurum içi SOC ekibi kurma maliyeti ile ACKLOG + MSSP modelini kıyaslayın.",
    href: "/araclar/soc-maliyeti-hesaplayici",
    icon: Users,
    category: "Maliyet Analizleri",
    color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400"
  },
  {
    name: "MTTD / MTTR Olgunluk Simülatörü",
    description: "Ortalama tehdit algılama ve müdahale sürelerinizle siber olgunluk seviyenizi analiz edin.",
    href: "/araclar/mttd-mttr-hesaplayici",
    icon: Clock,
    category: "Analiz & Simülasyon",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400"
  },
  {
    name: "Log Depolama ve Maliyet Hesaplayıcı",
    description: "Günlük log hacminize göre disk ihtiyacınızı ve ACKLOG sıkıştırma tasarrufunu hesaplayın.",
    href: "/maliyet-hesaplayici",
    icon: Calculator,
    category: "Hesaplayıcılar",
    color: "from-amber-500/20 to-orange-500/10 border-amber-500/30 text-amber-400"
  },
  {
    name: "Log Retention (Saklama Süresi) Hesaplayıcı",
    description: "Yasal regülasyonların log saklama sürelerini ve veri tabanı boyut gereksinimlerini hesaplayın.",
    href: "/araclar/log-retention-hesaplayici",
    icon: Database,
    category: "Hesaplayıcılar",
    color: "from-indigo-500/20 to-blue-500/10 border-indigo-500/30 text-indigo-400"
  },
  {
    name: "KVKK Teknik Tedbir Kontrol Listesi",
    description: "KVKK SIEM uyumluluğu için almanız gereken teknik tedbirleri interaktif olarak denetleyin.",
    href: "/araclar/kvkk-checklist",
    icon: CheckSquare,
    category: "Mevzuat & Uyum",
    color: "from-red-500/20 to-rose-500/10 border-red-500/30 text-red-400"
  },
  {
    name: "5651 Sayılı Kanun Uyum Denetimi",
    description: "Ağınızın 5651 sayılı kanunun log imzalama standartlarına uygunluğunu checklist ile test edin.",
    href: "/araclar/5651-checklist",
    icon: FileCheck,
    category: "Mevzuat & Uyum",
    color: "from-green-500/20 to-emerald-500/10 border-green-500/30 text-green-400"
  },
  {
    name: "Sızıntı Kontrolü (Data Leak Checker)",
    description: "Kurumsal e-postalarınızın bilinen veri sızıntılarında (leak) yer alıp almadığını sorgulayın.",
    href: "/sizinti-kontrol",
    icon: Search,
    category: "Siber Tehdit",
    color: "from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-400"
  },
  {
    name: "Zafiyet Tarama Simülatörü",
    description: "Ağ adresinizin dış dünyaya açık zafiyetlerini ve port açıklarını analiz edin.",
    href: "/zafiyet-tarama",
    icon: ShieldCheck,
    category: "Siber Tehdit",
    color: "from-teal-500/20 to-cyan-500/10 border-teal-500/30 text-teal-400"
  },
  {
    name: "Hızlı Güvenlik Analizi",
    description: "Web sitenizin SSL, DNS ve HTTP başlık güvenlik skorunu anında ölçün.",
    href: "/analiz",
    icon: Activity,
    category: "Analiz & Simülasyon",
    color: "from-yellow-500/20 to-amber-500/10 border-yellow-500/30 text-yellow-400"
  },
  {
    name: "KVKK/5651 Hızlı Testi",
    description: "Kurum içi mevzuat eksikliklerinizi saptamak için pratik uyumluluk testi yapın.",
    href: "/uyumluluk-testi",
    icon: ShieldQuestion,
    category: "Mevzuat & Uyum",
    color: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30 text-indigo-400"
  }
];

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col justify-between">
      <Navbar />
      
      <div className="container mx-auto px-4 py-28 flex-1 max-w-6xl">
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-500 font-mono text-sm uppercase tracking-widest block mb-3 font-bold">ACKLOG INTERACTIVE SUITE</span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Siber Güvenlik <span className="text-blue-500">Araçlar Kütüphanesi</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Kurumunuzun yasal uyumluluk (KVKK, 5651), teknik log hacmi (EPS, depolama) ve finansal SOC operasyon maliyetlerini anında hesaplayan interaktif araçlarımızla tanışın.
          </p>
        </header>

        {/* Brand Entity Relation Text Block */}
        <div className="mb-12 p-6 rounded-2xl bg-blue-950/20 border border-blue-900/20 text-center max-w-4xl mx-auto">
          <p className="text-sm text-slate-400 leading-relaxed">
            Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Link 
                key={index} 
                href={tool.href}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${tool.color} border hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-12 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all pointer-events-none" />
                <div>
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-slate-900/60 border border-white/5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase block mb-2">{tool.category}</span>
                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-xs font-bold text-blue-500 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Aracı Başlat <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
