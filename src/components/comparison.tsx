"use client";

import { Check, X } from "lucide-react";

const comparisonData = [
    { feature: "Kurulum Süresi", acklog: "15 Dakika", traditional: "Haftalar / Aylar" },
    { feature: "Sorgu Hızı (1TB)", acklog: "< 1 Saniye", traditional: "Dakikalar" },
    { feature: "Log Formatı Desteği", acklog: "Otomatik (No-Code)", traditional: "Karmaşık Parser Yazılımı" },
    { feature: "Lisanslama Modeli", acklog: "Veri Boyutu (Şeffaf)", traditional: "EPS + Kullanıcı + Modül" },
    { feature: "KVKK İmzalaması", acklog: "Dahili (Ücretsiz)", traditional: "Ek Modül / Ücret" },
    { feature: "Cluster Desteği", acklog: "Sınırsız Yatay", traditional: "Zorlu & Pahalı" },
];

export function Comparison() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Neden <span className="text-primary">ACKLOG</span>?</h2>
                    <p className="text-muted-foreground text-lg">Geleneksel çözümleri neden geride bırakmalısınız?</p>
                </div>

                <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative">
                    <div className="absolute top-0 left-1/3 bottom-0 w-px bg-white/10 z-0" />
                    <div className="absolute top-0 right-1/3 bottom-0 w-px bg-white/10 z-0" />

                    <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-white/5 font-bold text-lg">
                        <div className="text-muted-foreground pl-4">Özellik</div>
                        <div className="text-center text-primary">ACKLOG SIEM</div>
                        <div className="text-center text-muted-foreground">Eski Nesil SIEM</div>
                    </div>

                    {comparisonData.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-3 p-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors relative z-10">
                            <div className="font-medium pl-4 flex items-center gap-2">
                                {item.feature}
                            </div>
                            <div className="text-center font-bold text-white flex items-center justify-center gap-2 bg-primary/10 py-1 rounded">
                                {item.acklog === "15 Dakika" || item.acklog === "< 1 Saniye" ? <Check className="w-4 h-4 text-green-400" /> : null}
                                {item.acklog}
                            </div>
                            <div className="text-center text-muted-foreground/60 flex items-center justify-center gap-2">
                                {item.traditional.includes("Pahalı") || item.traditional.includes("Karmaşık") ? <X className="w-4 h-4 text-red-500/50" /> : null}
                                {item.traditional}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground">
                        * Testler Intel I9 işlemcili standart sunucularda 1 milyar log satırı üzerinde gerçekleştirilmiştir.
                    </p>
                </div>

            </div>
        </section>
    );
}
