"use client";

import { useState } from 'react';
import {
    FileSearch,
    Scale,
    History,
    FileCheck,
    HardDrive,
    ShieldCheck,
    Search,
    BookOpen,
    CalendarClock,
    Fingerprint
} from 'lucide-react';
import { jsPDF } from "jspdf";
import { Button } from '@/components/ui/button';
import { DemoModal } from '@/components/demo-modal';

export function AuditClient() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const handleDownload = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.setTextColor(40, 40, 40);
        doc.text("ACKLOG - Audit & Forensics", 20, 20);

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
        const summary = "Acklog Audit, kurumlarin KVKK, 5651, ISO 27001 ve PCI-DSS gibi kritik regulasyonlara tam uyum saglamasi icin gelistirilmistir. Degistirilemez (Immutable) log saklama teknolojisi ve zaman damgasi entegrasyonu ile denetim sureclerini garanti altina alir.";
        const splitSummary = doc.splitTextToSize(summary, 170);
        doc.text(splitSummary, 20, 60);

        // 2. Key Capabilities
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("2. Temel Yetenekler", 20, 90);

        doc.setFontSize(12);
        doc.text("Log Butunlugu (Integrity)", 20, 100);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Hashing: Her log satiri SHA-256 ile imzalanir.", 25, 108);
        doc.text("- Timestamp: TUBITAK/Kamu SM zaman damgasi entegrasyonu.", 25, 114);
        doc.text("- Chaining: Blokzincir benzeri yapi ile log zinciri bozulamaz.", 25, 120);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("Adli Inceleme (Forensics)", 20, 135);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Timeline: Olaylari saniye saniye kronolojik siraya dizer.", 25, 143);
        doc.text("- Evidence: Olay anindaki paketleri (PCAP) ve ham loglari saklar.", 25, 149);

        // 3. Compliance
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("3. Uyumluluk Matrisi", 20, 165);

        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- ISO 27001: Ek-A 12.4 (Loglama ve Izleme)", 25, 175);
        doc.text("- KVKK: Veri Guvenligi Rehberi (Erisim Loglari)", 25, 181);
        doc.text("- 5651: Internet Trafik Loglari ve Imzalama", 25, 187);
        doc.text("- PCI-DSS: Madde 10 (Ag Kaynaklarina Erisimin Izlenmesi)", 25, 193);

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text("www.logsiem.com", 20, 280);

        doc.save("Acklog-Audit-Compliance-Datasheet.pdf");
    };

    return (
        <main className="min-h-screen bg-slate-950">
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                        <Scale className="w-4 h-4" />
                        <span>Audit & Forensic Investigation</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Adli Bilişim ve Denetim İçin <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                            Tekleştirilmiş İz Kayıtları
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Olayları zaman çizgisi, kullanıcı izi ve sistem davranışı ile saniyeler içinde çözümleyin. Denetim süreçlerinden %100 uyumla geçin.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-emerald-600/20"
                        >
                            Canlı Demo
                        </Button>
                        <Button
                            onClick={handleDownload}
                            variant="outline"
                            size="lg"
                            className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-lg px-8 py-6 rounded-full"
                        >
                            Detaylı Rapor İndir
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEM KAPSAMI */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Denetçilerin ve Üst Yönetimin Sorduğu İlk Soru:</h2>
                            <blockquote className="text-2xl font-serif text-slate-300 italic mb-8 border-l-4 border-emerald-500 pl-6">
                                "Ne oldu? Kim yaptı? Hangi sistemler etkilendi?"
                            </blockquote>
                            <p className="text-slate-400 text-lg mb-6">
                                Bu soruları cevaplamak için sadece "log tutmak" yetmez. Log bütünlüğü, görsel zaman tüneli ve korelasyon gerekir.
                            </p>
                            <h4 className="text-white font-bold mb-3">Mevcut Durumda Loglar:</h4>
                            <ul className="grid grid-cols-2 gap-3 text-slate-400 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Dağınık ve Siliktir</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Değiştirilebilir (Güvensiz)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Zaman Damgasızdır</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Arama Yapması Zordur</li>
                            </ul>
                        </div>
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <FileSearch className="w-32 h-32 text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6">Forensik İnceleme Neden Tıkanır?</h3>
                            <div className="space-y-6 relative z-10">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500">1</div>
                                    <div>
                                        <h4 className="text-white font-medium">Veri Bütünlüğü Yok</h4>
                                        <p className="text-sm text-slate-500">Log dosyasının değiştirilmediğini ispatlayamazsınız.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500">2</div>
                                    <div>
                                        <h4 className="text-white font-medium">Bağlam Eksik (Context)</h4>
                                        <p className="text-sm text-slate-500">Olaylar arasındaki sebep-sonuç ilişkisi kurulamaz.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500">3</div>
                                    <div>
                                        <h4 className="text-white font-medium">Yavaş Erişim</h4>
                                        <p className="text-sm text-slate-500">Arşivdeki 1 yıllık logu sorgulamak günler sürer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ACKLOG SOLUTIONS */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Acklog Yaklaşımı</h2>
                        <p className="text-slate-400">Denetim ve İnceleme için 3 Katmanlı Güvence</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* 1. Integrity */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all text-center">
                            <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">1. İz Kaydı Bütünlüğü</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Her log satırı kriptografik olarak imzalanır (Hashing) ve zaman damgası (Timestamp) ile mühürlenir. Değiştirilemez (Immutable) depolama sağlar.
                            </p>
                        </div>

                        {/* 2. Timeline */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all text-center">
                            <CalendarClock className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">2. Zaman Çizgisi</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Dağınık olaylar yapay zeka ile kronolojik bir hikayeye dönüştürülür. Olayın başlangıç ve bitiş anı saniye hassasiyetinde görülür.
                            </p>
                        </div>

                        {/* 3. Interaction */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all text-center">
                            <Fingerprint className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">3. Çoklu Sistem İzi</h3>
                            <p className="text-slate-400 leading-relaxed">
                                <span className="text-white">Kim → Ne Yaptı → Nereden → Hangi Dosyaya?</span> sorularının cevabı zincirleme olarak sunulur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. REPORTS */}
            <section className="py-20 px-4 bg-emerald-950/10 border-y border-emerald-900/20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Hazır Denetim Rapor Paketleri</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            "Access & Authentication Timeline",
                            "Privilege Usage Report",
                            "Change Management Audit",
                            "Endpoint Interaction Trace",
                            "Data Exfiltration Evidence",
                            "Compliance Audit Pack (ISO/PCI)",
                            "Case Oriented Forensic Report (PDF)",
                            "Administrator Activity Log"
                        ].map((report) => (
                            <div key={report} className="flex items-center gap-3 bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-emerald-500/30 transition-colors">
                                <FileCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-slate-300 text-sm font-medium">{report}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-slate-500 text-sm mt-8">
                        * Özellikle PDF Case Raporu, Kamu ve Finans sektörü denetimlerinde kanıt niteliği taşır.
                    </p>
                </div>
            </section>

            {/* 6. STORAGE & RETENTION */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-800">
                    <div className="flex items-center gap-4 mb-8">
                        <HardDrive className="w-10 h-10 text-blue-400" />
                        <h3 className="text-3xl font-bold text-white">Akıllı Depolama & Arşivleme</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-white font-bold border-b border-slate-700 pb-2">Desteklenen Modeller</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li className="flex gap-2">✓ Sıcak Veri (Hot Storage - SSD/NVMe)</li>
                                <li className="flex gap-2">✓ Soğuk Veri (Cold Storage - HDD/S3)</li>
                                <li className="flex gap-2">✓ Offline Arşivleme</li>
                                <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓ Air-gapped Retention</span></li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-slate-400 leading-relaxed">
                                Acklog, yasal saklama süreleri (5651 için 2 yıl vb.) boyunca veriyi sıkıştırarak saklar. <strong className="text-white">Air-gapped</strong> özelliği sayesinde fiziksel olarak izole edilmiş ortamlarda bile log bütünlüğünü korur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. COMPLIANCE TIES */}
            <section className="py-16 bg-slate-950 border-t border-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-white mb-8">Hangi Regülasyonları Karşılar?</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {[
                            { code: "ISO 27001", axis: "A.12.4 Logging" },
                            { code: "PCI DSS", axis: "Req. 10 Audit Trails" },
                            { code: "KVKK", axis: "Veri Güvenliği" },
                            { code: "SOX", axis: "Section 404" },
                            { code: "BDDK", axis: "Bilgi Sistemleri Yönetmeliği" }
                        ].map((reg) => (
                            <div key={reg.code} className="px-6 py-3 bg-slate-900 border border-emerald-500/20 rounded-lg">
                                <span className="block text-emerald-400 font-bold">{reg.code}</span>
                                <span className="text-xs text-slate-500">{reg.axis}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. CTA SECTION */}
            <section className="py-24 px-4 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                        Olay Senaryosu Çözümünü İzleyin
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        Canlı demoda bir siber olayın nasıl baştan sona analiz edildiğini görün.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg rounded-full"
                        >
                            Olay İnceleme Demosu
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    );
}
