"use client";

import Link from 'next/link';
import { useState } from 'react';
import { WithContext, FAQPage } from 'schema-dts';
import {
    ShieldAlert,
    Activity,
    Database,
    Network,
    Lock,
    FileCheck,
    Server,
    Cloud,
    Globe,
    CheckCircle,
    XCircle,
    Zap,
    TrendingUp,
    CreditCard,
    LayoutDashboard
} from 'lucide-react';
import { jsPDF } from "jspdf";
import { Button } from '@/components/ui/button';
import { JsonLd } from '@/components/seo/json-ld';
import { DemoModal } from '@/components/demo-modal';

interface Props {
    faqSchema: WithContext<FAQPage>;
}

export function ThreatDetectionClient({ faqSchema }: Props) {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const handleDownload = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.setTextColor(40, 40, 40);
        doc.text("ACKLOG - Threat Detection & Response", 20, 20);

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
        const summary = "Acklog Threat Detection, karmasik siber saldirilari saniyeler icinde tespit etmek icin tasarlanmistir. Splunk ve benzeri cozumlerin yuksek maliyeti ve karmasikligi olmadan, imza tabanli ve davranissal analiz yeteneklerini birlestirir.";
        const splitSummary = doc.splitTextToSize(summary, 170);
        doc.text(splitSummary, 20, 60);

        // 2. Key Capabilities
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("2. Temel Yetenekler", 20, 90);

        doc.setFontSize(12);
        doc.text("Detection Engine", 20, 100);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Signature-based: Bilinen tehditleri (IOC) aninda yakalar.", 25, 108);
        doc.text("- Behavioral: Bilinmeyen tehditleri (Anomali) tespit eder.", 25, 114);
        doc.text("- MITRE ATT&CK: Tum alarmlari global standartla etiketler.", 25, 120);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("Correlation Engine", 20, 135);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Cross-source: Firewall, Endpoint ve Identity loglarini birlestirir.", 25, 143);
        doc.text("- Identity-aware: IP adreslerini gercek kullanicilarla eslestirir.", 25, 149);

        // 3. Integrations
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("3. Entegrasyon ve Lisanslama", 20, 165);

        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Destek: Fortinet, Palo Alto, Cisco, Crowdstrike, Microsoft", 25, 175);
        doc.text("- Lisanslama: GB veya EPS limiti yoktur. Cihaz bazli ucretlendirme.", 25, 181);

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text("www.logsiem.com", 20, 280);

        doc.save("Acklog-Threat-Detection-Datasheet.pdf");
    };

    return (
        <main className="min-h-screen bg-slate-950">
            <JsonLd data={faqSchema} />
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-red-900/10 pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                        <ShieldAlert className="w-4 h-4" />
                        <span>Threat Detection Made Practical</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Advanced Threat Detection, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                            Karmaşıklık ve Yüksek Maliyet Olmadan.
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Splunk seviyesinde karmaşıklık veya bütçe gerektirmeden, gelişmiş tehditleri gerçek zamanlı olarak tespit edin.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-red-600/20"
                        >
                            Demo Talep Et
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

            {/* 2. PROBLEM CONTEXT */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Tehditler Güvenlik Duvarlarını Aşabilir, <br />
                                <span className="text-red-500">Maliyetleriniz Aşmamalı.</span>
                            </h2>
                            <p className="text-slate-400 text-lg mb-6">
                                Kurumsal ortamlarda tehditler çoğu zaman firewall’lardan veya EDR araçlarından kaçarlar.
                                Kaçtıklarında ise fark edilmeleri gecikmeye bağlı devasa maliyetler yaratır.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-4">Geleneksel Çözümler Neden Yetersiz?</h3>
                            <ul className="space-y-3">
                                {[
                                    "False positive oranları çok yüksek",
                                    "Rule authoring (kural yazımı) uzmanlık gerektiriyor",
                                    "Log ingest (veri alma) maliyetleri sürpriz faturalar yaratıyor",
                                    "Veri kaynakları birbirinden kopuk (Siloed Data)",
                                    "SOC analistleri 'alert yorgunluğu' yaşıyor"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <XCircle className="w-5 h-5 text-red-500/80 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[400px] bg-slate-950 rounded-2xl border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden group">
                            {/* Visual representation of chaos/noise */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950 to-slate-950" />
                            <Activity className="w-24 h-24 text-red-500/20 animate-pulse mb-4" />
                            <p className="text-slate-500 font-mono text-sm">Alert Fatigue: Critical Level</p>
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ACKLOG SOLUTION */}
            <section className="py-20 px-4">
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Acklog Yaklaşımı</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Dağınık veriyi anlamlı istihbarata dönüştüren süreç.
                    </p>
                </div>

                <div className="container mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-5 gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 -translate-y-1/2 z-0" />

                        {[
                            { title: "Normalize", desc: "Veriyi Standartlaştırır", icon: Database },
                            { title: "Korelasyon", desc: "İlişkilendirir", icon: Network },
                            { title: "Sınıflandırma", desc: "MITRE ATT&CK", icon: LayoutDashboard },
                            { title: "Risk Skorlama", desc: "Önceliklendirir", icon: TrendingUp },
                            { title: "Müdahale", desc: "SOC Operasyonu", icon: Zap }
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 bg-slate-900 border border-slate-700 p-6 rounded-xl flex flex-col items-center text-center hover:border-blue-500 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-4 border border-slate-700 group-hover:bg-blue-500/20 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-all">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-white mb-1">{step.title}</h3>
                                <p className="text-xs text-slate-400">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TECHNICAL FEATURES */}
            <section className="py-20 px-4 bg-slate-900/30 border-y border-slate-800">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Detection Engine */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                                <ShieldAlert className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Detection Engine</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-blue-500" /> Signature-based rules</li>
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-blue-500" /> Behavioral rules (Davranışsal)</li>
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-blue-500" /> MITRE mapping</li>
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-blue-500" /> Entity risk scoring</li>
                            </ul>
                        </div>

                        {/* Correlation Engine */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/30 transition-all">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                                <Network className="w-6 h-6 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Correlation Engine</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500" /> Cross-source correlation</li>
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500" /> Time-based correlation</li>
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-purple-500" /> Identity-linked analysis</li>
                            </ul>
                        </div>

                        {/* Alerting */}
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/30 transition-all">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Alerting & SOAR</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-orange-500" /> Priority scoring</li>
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-orange-500" /> Alert deduplication</li>
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-orange-500" /> Automatic Enrichment</li>
                                <li className="flex gap-2 text-slate-400 text-sm"><CheckCircle className="w-4 h-4 text-orange-500" /> SOAR hand-off</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DATA INPUTS & 6. DEPLOYMENT */}
            <section className="py-20 px-4">
                <div className="container mx-auto grid md:grid-cols-2 gap-16">
                    {/* Data Inputs */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Desteklenen Log Kaynakları</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {['Firewall logs', 'Endpoint (EDR/Sysmon)', 'VPN & Auth', 'Active Directory / AzureAD', 'Network (Netflow)', 'Threat Intel Feeds'].map((item) => (
                                <div key={item} className="bg-slate-900 border border-slate-800 p-4 rounded-lg text-slate-300 text-sm font-medium">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Deployment Models */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Esnek Dağıtım Modelleri</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-slate-300"><Server className="w-5 h-5 text-blue-400" /> On-prem</div>
                            <div className="flex items-center gap-2 text-slate-300"><Cloud className="w-5 h-5 text-blue-400" /> Cloud</div>
                            <div className="flex items-center gap-2 text-slate-300"><Globe className="w-5 h-5 text-blue-400" /> Hybrid</div>
                            <div className="flex items-center gap-2 text-white font-bold bg-blue-600/20 px-2 py-1 rounded"><Lock className="w-5 h-5 text-blue-400" /> Air-gapped</div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Air-gapped (Kapalı Devre) SIEM opsiyonu Splunk Cloud ve Sumo Logic gibi rakiplerde bulunmaz. Kamu, Finans ve kritik altyapılar için tam izolasyon sağlar.
                        </p>
                    </div>
                </div>
            </section>

            {/* 7. COMPLIANCE TIES */}
            <section className="py-16 bg-blue-950/20 border-y border-blue-900/30">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-white mb-8">Uyumluluk Gereksinimlerini Doğrudan Karşılar</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {[
                            "ISO 27001 — A.12.4.1",
                            "PCI DSS — Req.10",
                            "KVKK — Log Bütünlüğü",
                            "5651 — Zaman Damgası",
                            "BDDK — İz Kayıtları"
                        ].map((reg) => (
                            <span key={reg} className="px-6 py-3 bg-slate-900 border border-blue-500/30 rounded-full text-blue-200 font-medium">
                                {reg}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. REPORTING & INVESTIGATION */}
            <section className="py-20 px-4 border-b border-slate-800">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-6">Olay İnceleme ve Raporlama</h2>
                            <ul className="space-y-4">
                                {[
                                    "Alert Timeline (Olay Zaman Çizelgesi)",
                                    "Kill Chain Haritalama",
                                    "Kullanıcı Aktivite Özeti",
                                    "Endpoint İşlem İzleri",
                                    "Network İlişki Grafiği"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-lg text-slate-300">
                                        <FileCheck className="w-5 h-5 text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 bg-slate-900 h-64 rounded-xl border border-slate-800 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-slate-800/[0.2] bg-[bottom_1px_center]" style={{ backgroundSize: '24px 24px' }} />
                            <p className="text-slate-500 z-10 font-mono text-sm">[UI Screenshot Placeholder: Threat Graph]</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. MSSP & 10. PRICING */}
            <section className="py-20 px-4">
                <div className="container mx-auto grid md:grid-cols-2 gap-12">
                    {/* MSSP Value */}
                    <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                        <h3 className="text-2xl font-bold text-white mb-4">MSSP İş Ortakları İçin</h3>
                        <ul className="space-y-2 mb-6">
                            <li className="text-slate-400">• Multi-tenant Mimarisi</li>
                            <li className="text-slate-400">• Tam İzolasyon (Tenant Isolation)</li>
                            <li className="text-slate-400">• Tek Ekrandan Yönetim (Unified Dashboard)</li>
                            <li className="text-slate-400">• SLA Tabanlı Alert Yönetimi</li>
                        </ul>
                        <button onClick={() => setIsDemoOpen(true)} className="text-blue-400 font-bold hover:underline">MSSP Programını İncele →</button>
                    </div>

                    {/* Pricing Note */}
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-green-900/20 to-slate-900 border border-green-900/30">
                        <div className="flex items-center gap-3 mb-4">
                            <CreditCard className="w-8 h-8 text-green-400" />
                            <h3 className="text-2xl font-bold text-white">Adil Fiyatlandırma</h3>
                        </div>
                        <p className="text-slate-300 text-lg mb-4">
                            "License + Support" modeli ile sürpriz faturalara son.
                        </p>
                        <p className="text-slate-400 mb-6 font-medium">
                            GB/gün veya EPS limiti yok. Donanımınız ne kadar kaldırıyorsa o kadar log işleyin. Splunk ve rakiplere karşı %60'a varan maliyet avantajı.
                        </p>
                        <Button onClick={() => setIsDemoOpen(true)} variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500/10 w-full">Fiyat Teklifi Al</Button>
                    </div>
                </div>
            </section>

            {/* 12. FAQ */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Sıkça Sorulan Sorular</h2>
                    <div className="space-y-4">
                        {(Array.isArray(faqSchema.mainEntity) ? faqSchema.mainEntity : []).map((qa: any, i: number) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                                <h3 className="text-lg font-bold text-white mb-2">{qa.name}</h3>
                                <p className="text-slate-400">{qa.acceptedAnswer?.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. CTA SECTION */}
            <section className="py-24 px-4 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                        Güvenliğinizi Şansa Bırakmayın
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg rounded-full"
                        >
                            Canlı Demo Talep Et
                        </Button>
                        <Button
                            onClick={handleDownload}
                            variant="outline"
                            size="lg"
                            className="border-slate-700 text-slate-300 hover:text-white px-10 py-6 text-lg rounded-full"
                        >
                            Datasheet İndir
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    );
}
