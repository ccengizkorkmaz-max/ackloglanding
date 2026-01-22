"use client";

import { useState } from 'react';
import {
    Shield,
    Globe,
    UserX,
    Bot,
    MapPin,
    Key,
    AlertOctagon,
    Server,
    Activity,
    Lock
} from 'lucide-react';
import { jsPDF } from "jspdf";
import { Button } from '@/components/ui/button';
import { DemoModal } from '@/components/demo-modal';

export function BruteForceClient() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const handleDownload = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.setTextColor(40, 40, 40);
        doc.text("ACKLOG - Brute Force Protection", 20, 20);

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
        const summary = "Acklog Brute Force Protection, sistemlerinize yonelik kaba kuvvet (sifre deneme) saldirilarini, botnet girisimlerini ve kimlik hirsizligi denemelerini saniyeler icinde tespit eder. GeoIP (Cografi Konum) verisi ile entegre calisarak supheli ulkelerden gelen erisimleri engeller.";
        const splitSummary = doc.splitTextToSize(summary, 170);
        doc.text(splitSummary, 20, 60);

        // 2. Key Capabilities
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("2. Temel Yetenekler", 20, 90);

        doc.setFontSize(12);
        doc.text("Kimlik Guvenligi (Identity Security)", 20, 100);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Failed Login Storm: Saniyedeki basarisiz giris denemesi analizi.", 25, 108);
        doc.text("- Account Lockout Prevention: Hesap kilitlenmeden once saldirgani bloklar.", 25, 114);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text("Cografi ve Bot Tespiti", 20, 125);
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- GeoIP Blocking: Riskli ulkelerden gelen trafiği otomatik keser.", 25, 133);
        doc.text("- Tor/VPN Detection: Anonim aglardan gelen istekleri isaretler.", 25, 139);

        // 3. Supported Systems
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text("3. Desteklenen Sistemler", 20, 155);

        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        doc.text("- Active Directory / Azure AD", 25, 165);
        doc.text("- Microsoft Exchange (OWA)", 25, 171);
        doc.text("- VPN Gateways (Fortinet, Pulse, Cisco)", 25, 177);
        doc.text("- Web Uygulamalari (WAF Entegrasyonu)", 25, 183);

        // Footer
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text("www.logsiem.com", 20, 280);

        doc.save("Acklog-BruteForce-Protection-Datasheet.pdf");
    };

    return (
        <main className="min-h-screen bg-slate-950">
            <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-orange-900/10 pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                        <Shield className="w-4 h-4" />
                        <span>Identity & Access Security</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        Kaba Kuvvet Saldırılarını <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                            Hesaplar Kilitlenmeden
                        </span> Durdurun.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Saniyede binlerce şifre deneyen botnet'leri, Tor ağlarından gelen anonim saldırganları ve coğrafi anormallikleri gerçek zamanlı engelleyin.
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
                            <h2 className="text-3xl font-bold text-white mb-6">En Yaygın Sızma Yöntemi: Parola Denemesi</h2>
                            <p className="text-slate-400 text-lg mb-6">
                                Saldırganlar karmaşık exploitler yerine, sızdırılmış veritabanlarındaki (credential stuffing) milyonlarca şifreyi botlar aracılığıyla denerler.
                            </p>
                            <h4 className="text-white font-bold mb-3">Sessiz Tehlikeler:</h4>
                            <ul className="grid grid-cols-2 gap-3 text-slate-400 text-sm">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Account Lockout (Servis Kesintisi)</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> VPN Sızmaları</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> OWA / E-posta Erişimi</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Yanal Hareket (Lateral Movement)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors" />
                            <Bot className="w-20 h-20 text-orange-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Botnet Saldırıları</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Saldırgan tek bir IP'den değil, binlerce ele geçirilmiş cihazdan aynı anda saldırır. Geleneksel firewall'lar bu "yavaş ve dağıtık" (Low and Slow) saldırıları yakalayamaz. Acklog davranışsal analiz ile botnet'i parmak izinden tanır.
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
                        {/* 1. GeoIP */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all text-center">
                            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Globe className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">GeoIP & Konum Analizi</h3>
                            <p className="text-slate-400">
                                Şirketiniz Türkiye'de faaliyet gösteriyorsa, gece yarısı Çin veya Rusya'dan gelen VPN denemeleri anında "Kritik Şüpheli" olarak işaretlenir ve engellenir.
                            </p>
                        </div>

                        {/* 2. Lockout Prevention */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all text-center">
                            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Key className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Akıllı Hesap Kilidi</h3>
                            <p className="text-slate-400">
                                Saldırganlar hesapları kilitleyerek (Lockout) operasyonunuzu durdurmak ister. Acklog, hesabı kilitlemeden "Saldırgan IP adresini" bloklar. İş sürekliliği sağlanır.
                            </p>
                        </div>

                        {/* 3. Threat Intel */}
                        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all text-center">
                            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <AlertOctagon className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Threat Intelligence</h3>
                            <p className="text-slate-400">
                                Küresel karalisteler (Blacklists) ve Tor çıkış düğümleri (Tor Exit Nodes) veritabanımız ile entegredir. Bilinen saldırganlar kapınızı çalamaz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. REAL TIME ALERT */}
            <section className="py-20 px-4 bg-amber-950/10 border-y border-amber-900/20">
                <div className="container mx-auto max-w-4xl text-center">
                    <MapPin className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-bounce" />
                    <h2 className="text-3xl font-bold text-white mb-6">Impossible Travel (İmkansız Yolculuk)</h2>
                    <p className="text-xl text-slate-400 mb-8">
                        Bir kullanıcı İstanbul'dan giriş yaptıktan 5 dakika sonra Berlin'den giriş yapıyorsa, bu fiziksel olarak imkansızdır. Acklog bu anomaliyi yakalar.
                    </p>
                </div>
            </section>

            {/* 11. CTA SECTION */}
            <section className="py-24 px-4 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                        Sınırlarınızı Koruyun
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                        Active Directory ve VPN loglarınızı canlı analiz ederek kimlik güvenliğinizi sağlayın.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            onClick={() => setIsDemoOpen(true)}
                            size="lg"
                            className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg rounded-full"
                        >
                            Canlı Demo Talep Et
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    );
}
