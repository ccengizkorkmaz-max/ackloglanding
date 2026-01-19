"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

const topics = [
    {
        title: "SIEM Nedir?",
        description: "Güvenlik Bilgi ve Olay Yönetimi temelleri ve modern yaklaşımlar.",
        href: "/wiki/siem-nedir",
        readTime: "5 dk"
    },
    {
        title: "Log Yönetimi Rehberi",
        description: "5651 ve KVKK için log toplama, imzalama ve saklama standartları.",
        href: "/wiki/log-yonetimi-nedir",
        readTime: "7 dk"
    },
    {
        title: "SOC Nedir?",
        description: "Güvenlik Operasyon Merkezi kurmak için gereken süreçler ve araçlar.",
        href: "/wiki/soc-nedir",
        readTime: "6 dk"
    },
    {
        title: "Threat Hunting",
        description: "Siber tehdit avcılığı metodolojileri ve proaktif savunma.",
        href: "/wiki/threat-hunting-nedir",
        readTime: "8 dk"
    },
    {
        title: "KVKK Uyumluluğu",
        description: "Kişisel verilerin korunması kanunu kapsamında loglama yükümlülükleri.",
        href: "/wiki/kvkk-ve-log-uyumluluk",
        readTime: "4 dk"
    },
    {
        title: "SIEM vs Log Yönetimi",
        description: "İki kavram arasındaki farklar ve işletmeniz için doğru seçim.",
        href: "/wiki/siem-vs-log-yonetimi",
        readTime: "5 dk"
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
                        <Link key={idx} href={topic.href} className="group p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all hover:border-primary/20">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-mono text-muted-foreground">{topic.readTime}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{topic.title}</h3>
                            <p className="text-sm text-muted-foreground">{topic.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
