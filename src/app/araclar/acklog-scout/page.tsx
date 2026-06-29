import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Terminal, Download, ShieldCheck, Cpu, RefreshCw, Layers, AlertCircle, FileText, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "ACKLOG Scout | Ücretsiz Log Denetim ve Kurulum Ajanı",
  description: "Windows Server ve Linux sunucularınızın log altyapısını KVKK, 5651 ve CIS standartlarına göre ücretsiz tarayın, Sysmon'u otomatik yapılandırın.",
  alternates: {
    canonical: "/araclar/acklog-scout",
  },
};

export default function AcklogScoutPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col justify-between">
      <Navbar />

      <div className="container mx-auto px-4 py-28 flex-1 max-w-6xl">
        {/* Hero Section */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-emerald-500 font-mono text-sm uppercase tracking-widest block mb-3 font-bold">
            ÜCRETSİZ YEREL AUDIT VE ENROLLER ARACI
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            ACKLOG <span className="text-emerald-500">Scout</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Sistem yöneticileri için ağdaki cihazları tarayan, yasal ve teknik loglama eksikliklerini saptayan ve Sysmon kurulumunu tek tıkla otomatikleştiren açık kaynaklı Go aracı.
          </p>
        </header>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Çok İş Parçacıklı Tarama</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Belirttiğiniz IP aralığındaki (CIDR) tüm ağ cihazlarını saniyeler içinde tarar, açık portları bulur ve OS parmak izi tespiti yapar.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Gelişmiş Denetim Analizi</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Windows Advanced Audit Policies ayarlarını dil bağımsız GUID'ler üzerinden denetleyerek CIS Benchmarks ve KVKK uyum durumunu ölçer.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Otomatik Sysmon Kurulumu</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Eksik log politikalarını otomatik açar, Sysmon'u indirir ve ACKLOG siber tehdit senaryolarına özel XML kurallarıyla kurup yapılandırır.
            </p>
          </div>
        </div>

        {/* Technical Steps & CLI instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white tracking-tight">
              Nasıl Çalışır & Nasıl Kullanılır?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              ACKLOG Scout, sisteminizde herhangi bir bağımlılık veya arka plan servisi kurmaz. Go diliyle yazılmış tek bir çalıştırılabilir (`.exe`) dosyadır. Yönetici (Administrator) yetkileriyle çalıştırıldığında yerel güvenlik log politikasını anında analiz eder.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold text-emerald-400">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Ağ ve Port Keşfi yapın</h4>
                  <p className="text-sm text-slate-400">Yerel veya alt ağdaki tüm sunucu ve firewall portlarını taramak için `-scan` komutunu kullanın.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold text-emerald-400">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Log Güvenlik Açıklarını Denetleyin</h4>
                  <p className="text-sm text-slate-400">Yerel Windows Server üzerinde yasal log uyumluluğunu test etmek için `-local -action audit` komutunu çalıştırın.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-sm font-bold text-emerald-400">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Tek Tıkla Otomatik İyileştirin</h4>
                  <p className="text-sm text-slate-400">Eksik denetim politikalarını açmak ve Sysmon'u kurmak için `-local -action enroll` komutunu verin.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Execution Shell Box */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-sm relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-850 pb-4 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">POWERSHELL / CMD</span>
            </div>

            <div className="space-y-4 text-slate-300">
              <div>
                <span className="text-slate-500"># 1. Projeyi yerelde derlemek için klonlayın</span>
                <p className="text-emerald-400">git clone https://github.com/ccengizkorkmaz-max/acklog-scout.git</p>
                <p className="text-emerald-400">cd acklog-scout</p>
              </div>

              <div>
                <span className="text-slate-500"># 2. Go ile çalıştırılabilir dosyayı derleyin</span>
                <p className="text-emerald-400">go build -o acklog-scout.exe main.go</p>
              </div>

              <div>
                <span className="text-slate-500"># 3. Yerel makinenizde KVKK/5651 log denetimini başlatın</span>
                <p className="text-emerald-400">.\acklog-scout.exe -local -action audit</p>
              </div>

              <div>
                <span className="text-slate-500"># 4. Eksik politikaları açın ve otomatik Sysmon kurun</span>
                <p className="text-emerald-400">.\acklog-scout.exe -local -action enroll</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form Section */}
        <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/20 shadow-xl shadow-emerald-950/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-white mb-2">ACKLOG Scout Kurumsal Raporlama ve POC Talebi</h3>
            <p className="text-slate-400 text-sm">
              Tüm etki alanınızda (Domain GPO) ACKLOG Scout dağıtımı yapmak ve siber güvenlik loglarınızı ACKLOG SIEM ile ücretsiz korele etmek için bizimle iletişime geçin.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Ad Soyad</label>
                <input 
                  type="text" 
                  placeholder="Ahmet Yılmaz" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  required 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Şirket E-postası</label>
                <input 
                  type="email" 
                  placeholder="ahmet@sirketiniz.com" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Şirket Adı</label>
                <input 
                  type="text" 
                  placeholder="Yılmaz Bilişim A.Ş." 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  required 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Telefon</label>
                <input 
                  type="tel" 
                  placeholder="0555 123 45 67" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  required 
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black rounded-xl uppercase tracking-wider transition-colors"
            >
              Ücretsiz Kurumsal Rapor ve Demo Talep Et
            </button>
          </form>
        </div>

      </div>

      <Footer />
    </main>
  );
}
