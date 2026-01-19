"use client";

import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, Radio, Calendar, LayoutDashboard, Server, FileCheck, Activity, Box, Users, Database, Search, Target, Scale, Siren, Settings, Eye, ListFilter, PieChart, Layers, Shield, Cpu, RefreshCw, BarChart, FileText, CheckCircle, ShieldAlert, Bot, Globe } from "lucide-react";
import { useState } from "react";
import { DemoModal } from "@/components/demo-modal";

export function FeaturesClient() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full py-24 lg:py-32 overflow-hidden border-b border-white/10 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0" />
                <div className="container relative mx-auto px-4 md:px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 group cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-xs font-medium text-blue-400">
                            ACKLOG Birleşik Güvenlik Operasyonları Platformu (USO)
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
                        Siber Dayanıklılığı Artırın. <br />
                        Riskleri Azaltın. Kaosu Engelleyin.
                    </h1>
                    <p className="mx-auto max-w-[800px] text-gray-400 md:text-xl mb-10 leading-relaxed">
                        ACKLOG, kuruluşların siber dayanıklılığını artırmak için tüm veri toplama, tehdit algılama, inceleme ve olay müdahale yeteneklerini tek bir bütünsel platformda birleştirir. Karmaşık güvenlik araçlarını yönetmek yerine, ACKLOG ile tam uyumluluk ve hızlı yanıt kapasitesi elde edersiniz.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-8 text-sm font-medium text-white shadow transition-all hover:bg-blue-700 hover:scale-105"
                        >
                            Hemen Başlayın
                        </Button>
                    </div>
                </div>
            </section>

            {/* Neden ACKLOG? Section */}
            <section className="py-24 bg-slate-950 border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-4">
                            Neden ACKLOG Birleşik Platformu?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Ayrı araçları bir araya getirmek bütünsel bir çözüm yaratmaz. ACKLOG, her aşamada fark yaratır.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: <Shield className="w-6 h-6 text-blue-500" />,
                                title: "Bütünsel Platform",
                                desc: "SIEM, UEBA ve Tehdit İstihbaratını tek bir yapıda sunar."
                            },
                            {
                                icon: <Zap className="w-6 h-6 text-blue-500" />,
                                title: "Hızlı ve Kolay Kullanım",
                                desc: "Karmaşıklıktan uzak, kullanıcı dostu arayüz."
                            },
                            {
                                icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
                                title: "Sorunsuz Kurulum",
                                desc: "Hibrit ortamlarda dahi hızlı devreye alma."
                            },
                            {
                                icon: <Scale className="w-6 h-6 text-blue-500" />,
                                title: "Şeffaf Maliyet",
                                desc: "Gizli maliyet içermeyen, stressiz ölçeklendirme."
                            }
                        ].map((item, index) => (
                            <div key={index} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                                <div className="p-3 rounded-lg bg-blue-500/10 w-fit mb-6 group-hover:bg-blue-500/20 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Temel Yetenekler & Teknoloji Header */}
            <section className="pt-24 pb-12 bg-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                            Temel Yetenekler ve Teknoloji Stack’i
                        </h2>
                    </div>
                </div>
            </section>

            {/* 1. Veri Gölü & Tehdit Algılama */}
            <section className="pb-24 bg-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 border border-blue-500/20">
                                    01. Veri Gölü ve Log Yönetimi
                                </div>
                                <h3 className="text-2xl font-bold text-white">"Süper Güç" Veri Gölü</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    ACKLOG, yüzlerce farklı kaynaktan veri toplayarak yüksek performanslı bir veri gölü oluşturur.
                                </p>
                            </div>
                            <div className="grid gap-4">
                                {[
                                    { title: "Geniş Entegrasyon", desc: "Sınırsız kaynaktan veri toplama ve yanıt entegrasyonu." },
                                    { title: "Gelişmiş Ölçeklenebilirlik", desc: "Dikey ve yatay büyüme, yüksek kullanılabilirlik (High Availability)." },
                                    { title: "Veri Yönetimi", desc: "Veri politikasını yöneterek gürültüyü azaltma ve uzun süreli saklama." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                        <div className="mt-1"><CheckCircle className="w-5 h-5 text-blue-500" /></div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                            <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 border border-blue-500/20">
                                    02. Tehdit Algılama
                                </div>
                                <h3 className="text-2xl font-bold text-white">Gerçek Zamanlı Zenginleştirme</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Modern tehditleri tespit etmek için verileri MITRE ATT&CK çerçevesiyle eşleştirir ve zenginleştirir.
                                </p>
                            </div>
                            <div className="grid gap-4">
                                {[
                                    { title: "Varlık ve Kimlik Zenginleştirme", desc: "Geo IP, LDAP/AD ve davranış verileriyle tam bağlam." },
                                    { title: "Gelişmiş Korelasyon", desc: "500'den fazla önceden tanımlanmış kural ile kurumsal güvenlik." },
                                    { title: "Hızlı Sorgulama", desc: "Milisaniyeler içinde yanıt veren gelişmiş arama yetenekleri." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                        <div className="mt-1"><CheckCircle className="w-5 h-5 text-blue-500" /></div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                            <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* UEBA & Threat Intelligence Section */}
            <section className="py-24 bg-slate-950 border-y border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                <Cpu className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">03. UEBA (Davranış Analitiği)</h3>
                            <p className="text-gray-400 mb-8">İçeriden gelen tehditleri ve gelişmiş saldırıları tespit etmek için kimlik merkezli analiz sunar.</p>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li className="flex gap-3 items-center"><ShieldAlert className="w-5 h-5 text-blue-500" /> Risk Skorlama ve Önceliklendirme</li>
                                <li className="flex gap-3 items-center"><ShieldAlert className="w-5 h-5 text-blue-500" /> Veri Sızıntısını (Exfiltration) Önleme</li>
                                <li className="flex gap-3 items-center"><ShieldAlert className="w-5 h-5 text-blue-500" /> Kritik Veri Erişimi İzleme</li>
                            </ul>
                        </div>

                        <div className="p-10 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-transparent border border-indigo-500/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                <Globe className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">04. Tehdit İstihbaratı</h3>
                            <p className="text-gray-400 mb-8">ACKLOG, 40'tan fazla güvenilir global istihbarat akışıyla (feed) entegre çalışır.</p>
                            <ul className="space-y-4 text-sm text-gray-300">
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-indigo-500" /> İlk Girişimde Tehdit Tespiti</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-indigo-500" /> Şüpheli Vektör Görselleştirme</li>
                                <li className="flex gap-3 items-center"><CheckCircle className="w-5 h-5 text-indigo-500" /> Anlık İstihbarat Beslemesi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOAR Section */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
                        <div>
                            <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 border border-blue-500/20 mb-4">
                                Otomasyon ve Olay Müdahale
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl mb-6">
                                SOAR ile Müdahaleyi Otomatize Edin
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                ACKLOG, NIST Olay Müdahale Çerçevesini referans alarak olay yönetimini otomatikleştirir. Manuel müdahale ihtiyacını minimize ederek SOC ekiplerinin verimliliğini artırır.
                            </p>
                        </div>
                        <div className="grid gap-6">
                            {[
                                { icon: <Zap />, title: "Hızlı Eylemler (Quick Actions)", text: "Tehditleri saniyeler içinde bertaraf etmek için tam otomatik yanıtlar." },
                                { icon: <Bot />, title: "Yarı Otomatik Yanıt", text: "Tek tıkla (Action Button) manuel müdahale imkanı." },
                                { icon: <RefreshCw />, title: "Yaşam Döngüsü İzleme", text: "Analizden kurtarma aşamasına kadar tüm süreci tek ekrandan yönetin." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                    <div className="text-blue-500">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-white">{item.title}</h4>
                                        <p className="text-sm text-gray-400 mt-1">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Raporlama Section */}
            <section className="py-24 bg-slate-900/50 border-t border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white mb-4">
                            Raporlama ve Mevzuat Uyumluluğu
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            İcra Kurulu ve denetim ihtiyaçlarınız için saniyeler içinde raporlar oluşturun.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="p-8 rounded-2xl border border-white/5 bg-black/40">
                            <FileText className="w-10 h-10 text-blue-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Hazır Şablonlar</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                ISO/IEC 27001, KVKK/GDPR, PCI DSS ve HIPAA gibi global ve yerel mevzuatlara tam uyumlu hazır raporlar.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border border-white/5 bg-black/40">
                            <BarChart className="w-10 h-10 text-blue-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Yönetici Özetleri</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                Teknik detayları iş odaklı metriklere dönüştüren, yönetici seviyesinde anlaşılır dashboardlar.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border border-white/5 bg-black/40">
                            <Calendar className="w-10 h-10 text-blue-500 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-4">Otomatik Planlama</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                Günlük, haftalık veya aylık periyodik raporların ilgili paydaşlara otomatik olarak iletilmesi.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-bold text-white mb-8 italic">"ACKLOG ile Güvenliğinizi Birleştirin."</h3>
                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex h-14 items-center justify-center rounded-2xl bg-blue-600 px-12 text-lg font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-105"
                        >
                            Hemen Keşfedin
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
            <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
