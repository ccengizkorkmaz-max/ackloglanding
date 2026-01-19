"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Search, BarChart3, Lock, Cpu } from "lucide-react";

const features = [
    {
        title: "Gerçek Zamanlı Tehdit Tespiti",
        description: "Saniyeler içinde korelasyon kuralları çalıştırın ve siber tehditleri yayılmadan engelleyin.",
        icon: Zap,
        className: "lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-primary/20 to-secondary/50",
        iconColor: "text-yellow-400"
    },
    {
        title: "KVKK & 5651 Uyumlu Loglama",
        description: "Yasal gerekliliklere tam uyumlu, zaman damgalı ve imzalı log arşivleme.",
        icon: Shield,
        className: "bg-secondary/50",
        iconColor: "text-primary"
    },
    {
        title: "No-Code Log Parsing",
        description: "Regex yazmadan sürükle-bırak ile log formatlarını tanımlayın.",
        icon: Cpu,
        className: "bg-secondary/50",
        iconColor: "text-purple-400"
    },
    {
        title: "Sınırsız Ölçeklenebilirlik",
        description: "Cluster mimarisi ile Petabyte ölçeğinde veriyi analiz edin.",
        icon: BarChart3,
        className: "lg:col-span-2 bg-secondary/50",
        iconColor: "text-green-400"
    },
];

export function FeatureGrid() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Güvenlik Operasyonlarınız İçin <span className="text-gradient">Eksiksiz Güç</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Geleneksel SIEM çözümlerinin hantallığını unutun. ACKLOG, modern SOC ekipleri için tasarlandı.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors group relative overflow-hidden ${feature.className}`}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <feature.icon className="w-24 h-24" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className={`p-3 rounded-lg w-fit mb-4 bg-black/20 backdrop-blur-sm ${feature.iconColor}`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
