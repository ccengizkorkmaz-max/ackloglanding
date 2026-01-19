"use client";

import { motion } from "framer-motion";
import {
    Maximize,
    Zap,
    BellRing,
    PlugZap,
    Search,
    Eye,
    Ban,
    FileText,
    Crosshair
} from "lucide-react";

const specs = [
    {
        title: "Ölçeklenebilirlik",
        description: "Günlük işleme, indeksleme, arama ve uyarı oluşturma açısından yüksek ölçeklenebilirlik.",
        icon: Maximize,
    },
    {
        title: "Performans",
        description: "Ölçeklenebilir işlem gücü ve depolama kapasitesi, gerçek zamanlı veri işleme için en son teknolojilerin kullanılması.",
        icon: Zap,
    },
    {
        title: "Birinci Sınıf Uyarı İşleme",
        description: "Hem anında uyarı almanın hem de toplu bilgilerin kullanılmasının avantajlarından yararlanmak için hem gerçek zamanlı hem de planlı uyarıların sağlanması.",
        icon: BellRing,
    },
    {
        title: "Kolay Entegrasyon",
        description: "Olay kaydı ayrıştırma yapılandırma şablonlarının görünürlüğü ve kendi özel ayrıştırma yapılandırmalarınızı oluşturma yeteneği.",
        icon: PlugZap,
    },
    {
        title: "Güçlü Arama Motoru",
        description: "Etkili aramayı, filtrelemeyi ve veri görüntülemeyi kolaylaştıran güçlü arama dilbilgisi, kullanıcı dostu arama arayüzü.",
        icon: Search,
    },
    {
        title: "Veri Görünürlüğü",
        description: "Olayları aramayı, bulmayı, raporlamayı ve uyarıyı kolaylaştırmak için olay alan adını ve en yaygın değerlerin görünürlüğünü otomatikleştirin.",
        icon: Eye,
    },
    {
        title: "Kara Liste Eşleştirme",
        description: "Tehdit avcılığını desteklemek için tüm günlük alanı değerlerinizi gerçek zamanlı olarak çok büyük kara listelerle eşleştirir.",
        icon: Ban,
    },
    {
        title: "Anında Rapor & Uyarı",
        description: "Arama işlevini kullanarak raporların, planlanmış uyarıların ve gösterge tablosu widget'larının kolayca oluşturulması.",
        icon: FileText,
    },
    {
        title: "Etkin Tehdit Avcılığı",
        description: "Verilerinizin analitik olarak incelenebilmesi için çok önemli olan çok güçlü bir arama ve veri kümeleme dilbilgisi.",
        icon: Crosshair,
    },
];

export function TechnicalSpecs() {
    return (
        <section className="py-24 bg-slate-950/50 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Teknik <span className="text-blue-500">Üstünlük</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            ACKLOG'un çekirdek mimarisi, en yüksek performans ve esneklik gereksinimlerini karşılamak üzere sıfırdan inşa edildi.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <div className="text-4xl font-mono text-blue-500/20 select-none">ARCHITECTURE</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specs.map((spec, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-all hover:border-blue-500/30 group"
                        >
                            <div className="mb-6 inline-flex items-center justify-center p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <spec.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{spec.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {spec.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
