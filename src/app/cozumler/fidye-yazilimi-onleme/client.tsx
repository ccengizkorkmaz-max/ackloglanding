"use client";

import { useState } from 'react';
import {
    Lock,
    ShieldBan,
    FileWarning,
    Siren,
    Server,
    HardDrive,
    FileKey,
    Database,
    ShieldCheck,
    Zap,
    Clock
} from 'lucide-react';
import { jsPDF } from "jspdf";
import { Button } from '@/components/ui/button';
import { DemoModal } from '@/components/demo-modal';

export function RansomwareClient() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const handleDownload = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.setTextColor(40, 40, 40);
        doc.text("ACKLOG - Ransomware Protection", 20, 20);

        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        doc.text("Datasheet V2026.1", 20, 30);

        // Line
        doc.setLineWidth(0.5);
        doc.line(20, 35, 190, 35);

        // 1. Executive Summary
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("1. Urun Ozeti (Executive Summary)", 20, 50);

        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        const summary = "Acklog Ransomware Protection, dosya sunucularinizdaki (File Server) supheli aktiviteleri, dosya uzantisi degisikliklerini ve entropi analizini kullanarak sifreleme islemi henuz baslangic asamasindayken tespit eder ve saldiriyi otomatik olarak durdurur.";
        const splitSummary = doc.splitTextToSize(summary, 170);
        doc.text(splitSummary, 20, 60);

        // 2. Key Capabilities
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("2. Temel Yetenekler", 20, 90);

        doc.setFontSize(12);
        doc.text("Erken Tespit (Early Detection)", 20, 100);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Honeyfile: Klasorlere tuzak dosyalar birakarak erisimi izler.", 25, 108);
        doc.text("- Entropi Analizi: Dosya icerigindeki karisiklik (sifreleme) artisini olcer.", 25, 114);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("Otomatik Mudahale (Automated Response)", 20, 125);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Active Block: Saldirgan kullanicinin (veya virusun) IP adresini bloklar.", 25, 133);
        doc.text("- Session Kill: Kullanicinin Active Directory oturumunu sonlandirir.", 25, 139);

        // 3. Desteklenen Sistemler
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("3. Desteklenen Sistemler", 20, 155);

        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Windows File Server (2016/2019/2022)", 25, 165);
        doc.text("- NetApp / EMC Storage Logs", 25, 171);
        doc.text("- SharePoint On-Premise", 25, 177);

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text("www.logsiem.com", 20, 280);

        doc.save("Acklog-Ransomware-Protection-Datasheet.pdf");
    };

    return (
        <main className="min-h-screen bg-slate-950">
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-orange-900/10 pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                        <Lock className="w-4 h-4" />
                        <span>Ransomware & Cryptolock Detection</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Fidye Yazılımlarını <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                            Şifreleme Başlamadan
                        </span> Durdurun.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Yedekleriniz bile şifrelenmeden önce, Honeyfile (Tuzak Dosya) ve Entropi Analizi teknolojileri ile saldırıyı saniyeler içinde tespit edin.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-orange-600/20"
                        >
                            Koruma Demosu
                        </Button>
                        <Button
                            onClick={handleDownload}
                            variant="outline"
                            size="lg"
                            className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-lg px-8 py-6 rounded-full"
                        >
                            Datasheet İndir
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEM TANIMI */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Yedekleriniz Sizi Kurtarmayabilir</h2>
                            <p className="text-slate-400 text-lg mb-6">
                                Modern ransomware saldırıları artık sadece dosyaları şifrelemekle kalmıyor, önce yedekleri siliyor (Shadow Copy Deletion) veya yedekleri de şifreliyor.
                            </p>
                            <h4 className="text-white font-bold mb-3">Saldırının Maliyeti:</h4>
                            <ul className="grid grid-cols-2 gap-3 text-slate-400 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> İş Durması (Downtime)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Veri Kaybı</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> İtibar Kaybı</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> KVKK Cezaları</li>
                            </ul>
                        </div>
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors" />
                            <FileWarning className="w-20 h-20 text-red-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Sıfırıncı Gün (Zero-Day) Tehlikesi</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Antivirüs yazılımları imza tabanlıdır ve yeni çıkan bir fidye yazılımını (Zero-day) tanıyamaz. Ancak <strong className="text-white">davranışlar asla yalan söylemez.</strong> Bir kullanıcı 1 dakikada 500 dosyayı değiştiremez, ama ransomware değiştirir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ACKLOG SOLUTION */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Acklog Nasıl Korur?</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* 1. Honeyfile */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all text-center">
                            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FileKey className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Honeyfile (Tuzak Dosya)</h3>
                            <p className="text-slate-400">
                                Dosya sunucularının kritik klasörlerine gizli "tuzak" dosyalar bırakırız. Bu dosyalara normal kullanıcılar dokunmaz, sadece her şeyi şifrelemeye çalışan virüsler dokunur.
                            </p>
                        </div>

                        {/* 2. Entropy */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all text-center">
                            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Kütlesel Dosya Analizi</h3>
                            <p className="text-slate-400">
                                Bir kullanıcı kısa sürede çok sayıda dosyanın uzantısını değiştiriyorsa (örn: .docx &rarr; .encrypted) veya toplu silme yapıyorsa anında alarm üretilir.
                            </p>
                        </div>

                        {/* 3. Response */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all text-center">
                            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShieldBan className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Otomatik Engelleme</h3>
                            <p className="text-slate-400">
                                Müdahale için insan beklenmez. Acklog, SIEM üzerinden Firewall veya AD ile konuşarak enfekte olan makinenin ağ erişimini otomatik olarak keser.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. REAL TIME ALERT */}
            <section className="py-20 px-4 bg-orange-950/10 border-y border-orange-900/20">
                <div className="container mx-auto max-w-4xl text-center">
                    <Siren className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
                    <h2 className="text-3xl font-bold text-white mb-6">Saniyeler İçinde Müdahale</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-300">
                        <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
                            <Clock className="w-4 h-4 text-orange-500" />
                            <span>Tespit Süresi: &lt; 3 Saniye</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-lg border border-slate-800">
                            <ShieldCheck className="w-4 h-4 text-green-500" />
                            <span>False Positive Oranı: &lt; %0.1</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. CTA SECTION */}
            <section className="py-24 px-4 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                        Fidye Yazılımı Simülasyonu
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        Güvenli bir ortamda WannaCry benzeri bir saldırıyı simüle edip Acklog'un nasıl durdurduğunu izleyin.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg rounded-full"
                        >
                            Anti-Ransomware Demosu
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    );
}
