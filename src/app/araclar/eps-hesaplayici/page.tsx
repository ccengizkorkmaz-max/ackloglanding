"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Cpu, Activity, Info, ShieldCheck } from "lucide-react";

export default function EpsCalculatorPage() {
  const [windowsCount, setWindowsCount] = useState(10);
  const [linuxCount, setLinuxCount] = useState(5);
  const [firewallCount, setFirewallCount] = useState(2);
  const [switchCount, setSwitchCount] = useState(15);
  const [dbCount, setDbCount] = useState(3);
  const [appCount, setAppCount] = useState(5);

  // Benchmarks EPS per unit
  const WINDOWS_EPS = 15;
  const LINUX_EPS = 8;
  const FIREWALL_EPS = 120;
  const SWITCH_EPS = 4;
  const DB_EPS = 25;
  const APP_EPS = 30;

  // Calculation
  const totalEps = 
    (windowsCount * WINDOWS_EPS) + 
    (linuxCount * LINUX_EPS) + 
    (firewallCount * FIREWALL_EPS) + 
    (switchCount * SWITCH_EPS) + 
    (dbCount * DB_EPS) + 
    (appCount * APP_EPS);

  const getHardwareRecommendation = (eps: number) => {
    if (eps < 500) {
      return { cpu: "4 vCPU", ram: "8 GB RAM", storage: "500 GB SAS", bandwidth: "10 Mbps" };
    } else if (eps < 2000) {
      return { cpu: "8 vCPU", ram: "16 GB RAM", storage: "1 TB SAS/SSD", bandwidth: "50 Mbps" };
    } else if (eps < 10000) {
      return { cpu: "16 vCPU", ram: "32 GB RAM", storage: "4 TB NVMe SSD", bandwidth: "150 Mbps" };
    } else {
      return { cpu: "32 vCPU (Dağıtık Mimari)", ram: "64 GB+ RAM", storage: "10 TB+ NVMe SSD (Kümeli)", bandwidth: "500 Mbps+" };
    }
  };

  const rec = getHardwareRecommendation(totalEps);

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col justify-between">
      <Navbar />

      <div className="container mx-auto px-4 py-28 flex-1 max-w-5xl">
        <Link href="/araclar" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-8 transition-colors group text-sm font-semibold">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Tüm Araçlara Dön
        </Link>

        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Siber Güvenlik Boyutlandırma
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            EPS (Saniye Başına Olay) Hesaplayıcı
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            Kurumunuzdaki aktif sistem sayılarını girerek saniyede oluşacak log hacmini (Events Per Second) tahmin edin ve ACKLOG için ideal donanım konfigürasyonunu bulun.
          </p>
        </header>

        {/* Brand statement */}
        <div className="mb-8 p-4 rounded-xl bg-blue-950/10 border border-blue-900/20 text-xs text-slate-400 max-w-4xl leading-relaxed">
          Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-500" /> Log Kaynakları
              </h3>

              {/* Windows Servers */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Windows Sunucular (Domain Controller vb.)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-blue-400">{windowsCount} Adet</span>
                </div>
                <Slider
                  min={0}
                  max={200}
                  step={1}
                  value={[windowsCount]}
                  onValueChange={(val) => setWindowsCount(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Ortalama Log Üretimi: {WINDOWS_EPS} EPS / cihaz</span>
              </div>

              {/* Linux/Unix Servers */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Linux / Unix Sunucular (Web, Veritabanı vb.)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-blue-400">{linuxCount} Adet</span>
                </div>
                <Slider
                  min={0}
                  max={200}
                  step={1}
                  value={[linuxCount]}
                  onValueChange={(val) => setLinuxCount(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Ortalama Log Üretimi: {LINUX_EPS} EPS / cihaz</span>
              </div>

              {/* Firewalls */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Güvenlik Duvarları (Firewall - Fortigate/Palo Alto vb.)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-blue-400">{firewallCount} Adet</span>
                </div>
                <Slider
                  min={0}
                  max={20}
                  step={1}
                  value={[firewallCount]}
                  onValueChange={(val) => setFirewallCount(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Ortalama Log Üretimi: {FIREWALL_EPS} EPS / cihaz</span>
              </div>

              {/* Network Switches */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Ağ Anahtarları & Router Cihazları</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-blue-400">{switchCount} Adet</span>
                </div>
                <Slider
                  min={0}
                  max={500}
                  step={5}
                  value={[switchCount]}
                  onValueChange={(val) => setSwitchCount(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Ortalama Log Üretimi: {SWITCH_EPS} EPS / cihaz</span>
              </div>

              {/* Databases */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Veritabanları (MSSQL, Oracle, MySQL vb.)</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-blue-400">{dbCount} Adet</span>
                </div>
                <Slider
                  min={0}
                  max={50}
                  step={1}
                  value={[dbCount]}
                  onValueChange={(val) => setDbCount(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Ortalama Log Üretimi: {DB_EPS} EPS / cihaz</span>
              </div>

              {/* Applications */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">Kritik Uygulamalar & Özel API Entegrasyonları</label>
                  <span className="text-xs font-mono font-bold bg-slate-800 px-2.5 py-1 rounded text-blue-400">{appCount} Adet</span>
                </div>
                <Slider
                  min={0}
                  max={50}
                  step={1}
                  value={[appCount]}
                  onValueChange={(val) => setAppCount(val[0])}
                />
                <span className="text-[10px] text-slate-500 block">Ortalama Log Üretimi: {APP_EPS} EPS / cihaz</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-5 space-y-6">
            {/* Total EPS Output Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-900/60 border border-blue-500/20 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 p-24 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase block mb-2">TOPLAM TAHMİNİ HAKİMİYET</span>
              <div className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
                {totalEps.toLocaleString("tr-TR")} <span className="text-lg text-slate-400 font-normal">EPS</span>
              </div>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                Tüm log kaynaklarının aktif çalışması durumunda saniyede işlenecek ortalama olay sayısıdır.
              </p>
            </div>

            {/* Hardware Recommendations */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-blue-500" />
                Önerilen Sunucu Konfigürasyonu
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">İşlemci (CPU):</span>
                  <span className="text-white font-bold">{rec.cpu}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Bellek (RAM):</span>
                  <span className="text-white font-bold">{rec.ram}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Depolama Alanı:</span>
                  <span className="text-white font-bold">{rec.storage}</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="text-slate-400">Log Ağı Bant Genişliği:</span>
                  <span className="text-white font-bold">{rec.bandwidth}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 text-xs text-slate-400 leading-relaxed mt-2 flex gap-2">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>ACKLOG Superpower Mimarisi</strong>, ClickHouse tabanlı depolaması sayesinde standart SIEM'lere göre CPU ve disk üzerinde %70 daha az kaynak harcar.
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
              <h4 className="text-sm font-bold text-white mb-2">Bu Konfigürasyonu Test Etmek İster misiniz?</h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Hesaplanan EPS ve donanım limitlerinde ACKLOG SIEM'i ücretsiz test etmek için demo talebi oluşturun.
              </p>
              <Link href="/demo-talep" className="block w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl">
                  Ücretsiz Demo Başlat
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
