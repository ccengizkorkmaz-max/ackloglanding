"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, Star } from "lucide-react";

const topics = [
    {
        title: "SIEM Nedir? (2026 Dev Rehber)",
        description: "Güvenlik Bilgi ve Olay Yönetimi temelleri, modern yaklaşımlar ve kapsamlı uygulama stratejileri.",
        href: "/wiki/siem-nedir",
        readTime: "15 dk",
        featured: true
    },
    {
        title: "Log Yönetimi Rehberi",
        description: "5651 ve KVKK için log toplama, imzalama ve saklama standartları.",
        href: "/wiki/5651-log-yonetimi-rehberi",
        readTime: "7 dk"
    },
    {
        title: "SOC Nedir?",
        description: "Güvenlik Operasyon Merkezi kurmak için gereken süreçler ve araçlar.",
        href: "/wiki/soc-kurulum-rehberi-maliyetler",
        readTime: "6 dk"
    },
    {
        title: "5651 Log Tutma Rehberi (2026)",
        description: "İnternet yasası ve loglama zorunluluğu hakkında bilmeniz gereken her şey.",
        href: "/wiki/5651-log-yonetimi-rehberi",
        readTime: "8 dk"
    },
    {
        title: "KVKK Uyumluluğu",
        description: "Kişisel verilerin korunması kanunu kapsamında loglama yükümlülükleri.",
        href: "/wiki/kvkk-siem-log-yonetimi-rehberi",
        readTime: "6 dk"
    },
    {
        title: "SIEM Performans Savaşı",
        description: "Disk tabanlı vs In-Memory analiz farkları. Hız ve maliyet karşılaştırması.",
        href: "/wiki/siem-performans-analizi",
        readTime: "5 dk"
    },
    {
        title: "Siber Tehdit Avcılığı",
        description: "Threat Hunting nedir? Kurumunuzda nasıl uygulanır?",
        href: "/wiki/threat-hunting-nedir",
        readTime: "9 dk"
    },
    {
        title: "Siber Terimler Sözlüğü",
        description: "Siber güvenlik dünyasındaki temel terimlerin açıklamaları.",
        href: "/wiki/siber-terimler-sozlugu",
        readTime: "12 dk"
    }
];

export function ClusterLinks() {
    return (
        <section className="py-24 bg-slate-950 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-primary font-mono text-sm mb-2 block">KNOWLEDGE BASE</span>
                        <h2 className="text-3xl font-bold">Siber Güvenlik Kütüphanesi</h2>
                        <p className="text-muted-foreground mt-2 max-w-lg">
                            Sektör uzmanları tarafından hazırlanan rehberler ile bilginizi güncel tutun.
                        </p>
                    </div>
                    <Link href="/wiki" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
                        Tüm Makaleler <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topics.map((topic, idx) => (
                        <Link
                            key={idx}
                            href={topic.href}
                            className={`group p-6 rounded-xl border transition-all relative overflow-hidden ${topic.featured
                                ? "border-blue-500/50 bg-blue-900/10 hover:bg-blue-900/20 md:col-span-2 lg:col-span-2"
                                : "border-white/5 bg-white/5 hover:bg-white/10 hover:border-primary/20"
                                }`}
                        >
                            {topic.featured && (
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-white" /> Öne Çıkan
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-2 rounded-lg ${topic.featured ? "bg-blue-500 text-white" : "bg-primary/10 text-primary"}`}>
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <span className={`text-xs font-mono ${topic.featured ? "text-blue-200" : "text-muted-foreground"}`}>{topic.readTime}</span>
                            </div>
                            <h3 className={`text-lg font-bold mb-2 transition-colors ${topic.featured ? "text-white text-xl" : "group-hover:text-primary"}`}>
                                {topic.title}
                            </h3>
                            <p className={`text-sm ${topic.featured ? "text-blue-100" : "text-muted-foreground"}`}>
                                {topic.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
