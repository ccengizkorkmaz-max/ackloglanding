"use client";

import { useState } from 'react';
import {
    DollarSign,
    BarChart4,
    HardDrive,
    Filter,
    Archive,
    TrendingDown,
    Server,
    Database,
    PieChart
} from 'lucide-react';
import { jsPDF } from "jspdf";
import { Button } from '@/components/ui/button';
import { DemoModal } from '@/components/demo-modal';

export function LogCostClient() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const handleDownload = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.setTextColor(40, 40, 40);
        doc.text("ACKLOG - Log Cost Optimization", 20, 20);

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
        const summary = "Acklog Log Cost Optimization, kurumlarin en buyuk problemi olan SIEM lisans ve donanim maliyetlerini dusurur. EPS (Event Per Second) limiti koymadan, akilli sikistirma ve log filtreleme teknolojileri ile %60'a varan tasarruf saglar.";
        const splitSummary = doc.splitTextToSize(summary, 170);
        doc.text(splitSummary, 20, 60);

        // 2. Key Capabilities
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("2. Temel Yetenekler", 20, 90);

        doc.setFontSize(12);
        doc.text("Lisanslama Avantaji", 20, 100);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- No EPS Limit: Saniye basina olay sayisina gore ceza odemezsiniz.", 25, 108);
        doc.text("- No GB Cap: Gunluk veri limitiniz yoktur.", 25, 114);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("Depolama Verimliligi", 20, 125);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Smart Compression: Log verisini %80 oraninda sikistirir.", 25, 133);
        doc.text("- Intelligent Filtering: Gereksiz 'gurultu' loglarini kaynaga girmeden eler.", 25, 139);

        // 3. Technical Specs
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("3. Teknik Ozellikler", 20, 155);

        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Veritabanı: ClickHouse (High Compression Columnar)", 25, 165);
        doc.text("- Tiering: Hot (NVMe), Warm (SSD), Cold (S3/Object)", 25, 171);
        doc.text("- Hardware: x86 Standard Sunucular (No Vendor Lock-in)", 25, 177);

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text("www.logsiem.com", 20, 280);

        doc.save("Acklog-Log-Cost-Optimization-Datasheet.pdf");
    };

    return (
        <main className="min-h-screen bg-slate-950">
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-green-900/10 pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                        <DollarSign className="w-4 h-4" />
                        <span>SIEM Cost Optimization</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Loglarınız Artarken <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                            Maliyetleriniz Artmasın.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        "EPS Limiti Aşıldı" cezalarına son verin. Sınırsız veri işleme kapasitesi ve akıllı sıkıştırma teknolojisi ile bütçenizi koruyun.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-green-600/20"
                        >
                            Fiyat Teklifi Al
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
                            <h2 className="text-3xl font-bold text-white mb-6">Geleneksel SIEM'ler Neden Pahalı?</h2>
                            <p className="text-slate-400 text-lg mb-6">
                                Legacy SIEM üreticileri (Splunk, QRadar, ArcSight) verinizi indekslemek için CPU kullanır ve bunu size "Veri Başına Lisans" (Ingestion License) olarak fatura eder.
                            </p>
                            <h4 className="text-white font-bold mb-3">Gizli Maliyetler:</h4>
                            <ul className="grid grid-cols-2 gap-3 text-slate-400 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> EPS Ceza Faturaları</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Yüksek Donanım Gereksinimi</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Arşiv / Retention Lisansı</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Uzman Personel Maliyeti</li>
                            </ul>
                        </div>
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors" />
                            <BarChart4 className="w-20 h-20 text-green-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">%60'a Varan Tasarruf</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Acklog, modern Big Data mimarisi (ClickHouse) kullanarak veriyi indekslemeden işler. Bu sayede aynı donanımda 10 kat daha fazla log tutabilir ve saklayabilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ACKLOG SOLUTION */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Maliyetleri Nasıl Düşürüyoruz?</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* 1. Smart Filtering */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-all text-center">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Filter className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Akıllı Filtreleme</h3>
                            <p className="text-slate-400">
                                Tüm loglar eşit değildir. Gereksiz "noise" (gürültü) loglarını kaynağında filtreleyerek lisans ve disk maliyetinden anında tasarruf sağlar.
                            </p>
                        </div>

                        {/* 2. Compression */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-all text-center">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Archive className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">%80 Sıkıştırma</h3>
                            <p className="text-slate-400">
                                Özel sıkıştırma algoritmaları ile 10TB ham datayı sadece 2TB disk alanında saklayın. Depolama yatırımınızı erteleyin.
                            </p>
                        </div>

                        {/* 3. Unlimited EPS */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-all text-center">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <TrendingDown className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Limitsiz EPS</h3>
                            <p className="text-slate-400">
                                Veriniz arttığında cezalandırılmazsınız. Ne kadar log üretirseniz üretin, lisans maliyetiniz sabittir. Büyümekten korkmayın.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TIERING */}
            <section className="py-20 px-4 bg-green-950/10 border-y border-green-900/20">
                <div className="container mx-auto max-w-4xl text-center">
                    <Database className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-6">Çok Katmanlı Veri Yönetimi (Tiering)</h2>
                    <p className="text-xl text-slate-400 mb-8">
                        Son 30 günü yüksek hızlı NVMe disklerde (Hot), son 1 yılı standart SSD'de (Warm), 10 yıllık arşivinizi ise ucuz S3 Object Storage'da (Cold) tutun.
                    </p>
                </div>
            </section>

            {/* 11. CTA SECTION */}
            <section className="py-24 px-4 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                        Maliyet Hesaplayın
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        Mevcut SIEM faturanız ile Acklog'u karşılaştırın. Ne kadar tasarruf edeceğinizi görün.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg rounded-full"
                        >
                            Teklif İsteyin
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    );
}
