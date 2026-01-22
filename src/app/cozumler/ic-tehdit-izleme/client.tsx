"use client";

import { useState } from 'react';
import {
    Users,
    Activity,
    Eye,
    UserX,
    ShieldAlert,
    Database,
    Lock,
    Server,
    FileText,
    Briefcase,
    AlertTriangle,
    Fingerprint,

    CreditCard,
    Network
} from 'lucide-react';
import { jsPDF } from "jspdf";
import { Button } from '@/components/ui/button';
import { DemoModal } from '@/components/demo-modal';

export function InsiderThreatClient() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const handleDownload = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.setTextColor(40, 40, 40);
        doc.text("ACKLOG - Insider Threat Monitoring", 20, 20);

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
        const summary = "Acklog UEBA, kurumsal aginizdaki kullanici ve varliklarin davranislarini makine ogrenmesi (ML) ile analiz ederek, kural tabanli sistemlerin yakalayamadigi Yetki Suistimali, Veri Sizintisi (DLP) ve Ele Gecirilmis Hesap saldirilarini gercek zamanli tespit eder.";
        const splitSummary = doc.splitTextToSize(summary, 170);
        doc.text(splitSummary, 20, 60);

        // 2. Key Capabilities
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("2. Temel Yetenekler", 20, 90);

        doc.setFontSize(12);
        doc.text("Davranissal Analiz (Behavioral Profiling)", 20, 100);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Statik kurallar yerine her kullanici icin dinamik profil olusturur.", 25, 108);
        doc.text("- Ornek: Mesai saati disindaki anormal VPN erisimleri.", 25, 114);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("Risk Skorlama (Risk Scoring)", 20, 125);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Dusuk Risk (0-30): Normal aktiviteler.", 25, 133);
        doc.text("- Kritik Risk (71-100): Acil mudahale gerektiren tehditler.", 25, 139);

        // 3. Integrations
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("3. Desteklenen Entegrasyonlar", 20, 155);

        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Kimlik: Active Directory, Azure Entra ID, Okta", 25, 165);
        doc.text("- Erisim: VPN (Pulse, Forti), RDP, Citrix", 25, 171);
        doc.text("- Endpoint: Sysmon, EDR (Crowdstrike, SentinelOne)", 25, 177);
        doc.text("- IK Sistemleri: Workday, SAP HR", 25, 183);

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text("www.logsiem.com", 20, 280);

        doc.save("Acklog-Insider-Threat-Datasheet.pdf");
    };

    return (
        <main className="min-h-screen bg-slate-950">
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/10 pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                        <Users className="w-4 h-4" />
                        <span>Insider Threat Monitoring & UEBA</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        İç Tehditleri <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                            Davranışsal Analiz ile
                        </span> Tespit Edin.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Privilege abuse, lateral movement ve veri sızıntılarını kural yazmaya gerek kalmadan, kullanıcı davranış analizi (UEBA) ile gerçek zamanlı yakalayın.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-purple-600/20"
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

            {/* 2. PROBLEM TANIMI */}
            <section className="py-20 px-4 bg-slate-900/50">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-6">En Büyük Risk İçeride Olabilir</h2>
                        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                            Dış tehditlere karşı birçok kurum ciddi yatırım yapıyor ancak araştırmalar en maliyetli ve yıkıcı saldırıların %60'ının içeriden geldiğini gösteriyor.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Ayrılan Personel", desc: "İşten ayrılan ama erişimi açık kalan 'zombi' hesaplar.", icon: UserX },
                            { title: "Yetki Suistimali", desc: "Mevcut yetkilerini kötüye kullanan ayrıcalıklı kullanıcılar.", icon: ShieldAlert },
                            { title: "Exfiltration", desc: "Hassas verilerin USB veya Cloud'a kopyalanması.", icon: Database },
                            { title: "Kimlik Hırsızlığı", desc: "Çalınan personel şifreleri ile yapılan sızmalar.", icon: Fingerprint },
                            { title: "Privilege Escalation", desc: "Yetki yükseltme denemeleri.", icon: Activity },
                            { title: "Shadow IT", desc: "Onaylanmamış güvensiz yazılım kullanımı.", icon: Eye },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-purple-500/30 transition-all group">
                                <item.icon className="w-10 h-10 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CHALLENGES & SOLUTION */}
            <section className="py-20 px-4">
                <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Neden Klasik SIEM Yetmez?
                        </h2>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Saldırgan zaten 'yetkili' bir kullanıcıdır, firewall durdurmaz.",
                                "Eşik (threshold) bazlı kurallar çok fazla false-positive üretir.",
                                "Davranışsal sapmalar (örn: gece yarısı VPN) kural ile zor yakalanır.",
                                "Sinyaller AD, İK, VPN ve Endpoint gibi kopuk sistemlerde yaşar."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-slate-300">
                                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="p-6 bg-purple-900/10 border border-purple-500/20 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">Acklog UEBA Çözümü</h3>
                            <p className="text-purple-200">
                                Acklog, statik kurallar yerine Kimlik (Identity) + Erişim (Access) + Davranış (Behavior) üçlüsünü korele eder. Her kullanıcı için dinamik bir "Risk Skoru" oluşturur.
                            </p>
                        </div>
                    </div>

                    {/* Visual Placeholder for User Risk Score Card */}
                    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-4">
                            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center">
                                <Users className="w-8 h-8 text-slate-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Ahmet Yılmaz (IT Admin)</h4>
                                <div className="text-sm text-slate-400">Department: DevOps</div>
                            </div>
                            <div className="ml-auto text-right">
                                <div className="text-3xl font-black text-red-500">85/100</div>
                                <div className="text-xs text-red-400 font-bold">CRITICAL RISK</div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm p-3 bg-red-500/10 rounded border border-red-500/20 text-red-200">
                                <span>🚀 Abnormal Data Egress (5GB)</span>
                                <span>10 min ago</span>
                            </div>
                            <div className="flex justify-between text-sm p-3 bg-red-500/10 rounded border border-red-500/20 text-red-200">
                                <span>🕒 Unusual Login Time (03:14 AM)</span>
                                <span>2 hours ago</span>
                            </div>
                            <div className="flex justify-between text-sm p-3 bg-orange-500/10 rounded border border-orange-500/20 text-orange-200">
                                <span>🔑 New Admin Privileges Added</span>
                                <span>Yesterday</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SCENARIOS */}
            <section className="py-20 px-4 bg-slate-900/30 border-y border-slate-800">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Örnek Tespit Senaryoları</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Scenario 1 */}
                        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition-all">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4"><Lock className="w-5 h-5 text-blue-500" /></div>
                            <h3 className="font-bold text-white text-lg mb-3">Yetki Suistimali</h3>
                            <div className="text-sm text-slate-400 flex flex-col gap-2 relative pl-4 border-l-2 border-slate-800">
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">User → Privilege Escalation</div>
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">Database Access Spike</div>
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">Data Export (CSV)</div>
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">VPN Dış Bağlantı</div>
                            </div>
                        </div>

                        {/* Scenario 2 */}
                        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-red-500 transition-all">
                            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4"><UserX className="w-5 h-5 text-red-500" /></div>
                            <h3 className="font-bold text-white text-lg mb-3">Offboarding Risk</h3>
                            <div className="text-sm text-slate-400 flex flex-col gap-2 relative pl-4 border-l-2 border-slate-800">
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-red-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">HR: User Termination Signal</div>
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-red-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">AD Account Still Active</div>
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-red-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">VPN Login Attempt</div>
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-red-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">ALERT: Terminated User Access</div>
                            </div>
                        </div>

                        {/* Scenario 3 */}
                        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-yellow-500 transition-all">
                            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4"><Network className="w-5 h-5 text-yellow-500" /></div>
                            <h3 className="font-bold text-white text-lg mb-3">Credential Abuse</h3>
                            <div className="text-sm text-slate-400 flex flex-col gap-2 relative pl-4 border-l-2 border-slate-800">
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">Multi-geo Login (Impossible Travel)</div>
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">Failed Login Burst</div>
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">Successful Login</div>
                                <div className="before:content-[''] before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full before:absolute before:-left-[5px] before:top-1.5">Lateral Movement to DC</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DATA INPUTS */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Gerekli Veri Kaynakları</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Active Directory', 'AzureAD / Okta', 'VPN / RDP', 'Database Query Logs', 'Sysmon / Endpoint', 'Proxy / DLP', 'HR / Offboarding Sistemleri'].map((item) => (
                            <div key={item} className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-full text-slate-300 font-medium">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. COMPLIANCE TIES */}
            <section className="py-16 bg-purple-900/10 border-y border-purple-900/20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-white mb-8">Uyumluluk için Hazır</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {[
                            { code: "ISO 27001", axis: "A.9 Access Control" },
                            { code: "PCI DSS", axis: "Requirement 10" },
                            { code: "KVKK", axis: "Veri Erişim İzleri" },
                            { code: "SOX", axis: "Internal Controls" },
                            { code: "5651", axis: "Zaman Damgası" }
                        ].map((reg) => (
                            <div key={reg.code} className="px-6 py-3 bg-slate-950 border border-purple-500/20 rounded-lg">
                                <span className="block text-purple-400 font-bold">{reg.code}</span>
                                <span className="text-xs text-slate-500">{reg.axis}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. MSSP */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl bg-gradient-to-r from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">MSSP Hizmet Sağlayıcıları İçin</h3>
                        <p className="text-slate-400">Çoklu müşteri (multi-tenant) yapısı ve SLA tabanlı alarm yönetimi ile müşterilerinize katma değerli "Managed Insider Threat" servisi sunun.</p>
                    </div>
                    <Button variant="outline" className="border-slate-700 text-slate-300 whitespace-nowrap">MSSP Detayları</Button>
                </div>
            </section>

            {/* 11. CTA SECTION */}
            <section className="py-24 px-4 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                        Gerçek Veri İle Test Edin
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        Demo ortamında kendi senaryolarınızı simüle edin veya POC talep ederek kurumunuzdaki riskleri görün.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 text-lg rounded-full"
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
