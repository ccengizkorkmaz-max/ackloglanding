"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Terminal, BarChart, Check } from "lucide-react";

const tabs = [
    { id: "soc", label: "SOC Analistleri İçin" },
    { id: "manager", label: "Bilgi İşlem Yöneticileri İçin" },
    { id: "compliance", label: "Uyum & Denetim İçin" },
];

const content = {
    soc: {
        title: "Tehdit Avcılığında Hız Kazanın",
        description: "Geleneksel SIEM'lerin yavaş sorgularıyla vakit kaybetmeyin. ACKLOG'un in-memory veritabanı ile petabytelarca veriyi saniyeler içinde tarayın.",
        points: [
            "Custom Query Language (AQL) ile esnek arama.",
            "MITRE ATT&CK framework entegrasyonu.",
            "Otomatik olay ilişkilendirme (Correlation).",
            "Tek tıkla PCAP analizi."
        ],
        icon: Terminal
    },
    manager: {
        title: "Maliyetleri ve Riski Yönetin",
        description: "Lisans maliyetlerini düşürürken operasyonel verimliliği artırın. Tek platformda tüm güvenlik operasyonlarını izleyin.",
        points: [
            "Kullanıcı bazlı lisanslama yok (EPS tabanlı).",
            "Düşük donanım kaynağı tüketimi.",
            "Rol tabanlı erişim yönetimi (RBAC).",
            "Özelleştirilebilir yönetim raporları."
        ],
        icon: BarChart
    },
    compliance: {
        title: "Denetimlere Her An Hazır Olun",
        description: "KVKK, 5651, GDPR, ISO 27001 gibi regülasyonlar için hazır rapor şablonları ve log imzalama.",
        points: [
            "TÜBİTAK Zaman Damgası entegrasyonu.",
            "Değiştirilemez log mimarisi (Immutability).",
            "Uzun süreli arşivleme ve sıkıştırma.",
            "Denetçi erişim modu."
        ],
        icon: Shield
    }
};

export function UseCases() {
    const [activeTab, setActiveTab] = useState("soc");

    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Her Rol İçin <span className="text-gradient">Mükemmel Çözüm</span></h2>
                    <p className="text-muted-foreground text-lg">Ekibinizin ihtiyaçlarına özel tasarlanmış araçlar.</p>
                </div>

                <div className="flex flex-col items-center">
                    {/* Tab Headers */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                                        : "text-muted-foreground hover:text-white"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full max-w-5xl">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-8 md:p-12 rounded-3xl"
                        >
                            <div>
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                                    {(() => {
                                        const Icon = content[activeTab as keyof typeof content].icon;
                                        return <Icon className="w-6 h-6" />;
                                    })()}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{content[activeTab as keyof typeof content].title}</h3>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    {content[activeTab as keyof typeof content].description}
                                </p>
                                <ul className="space-y-4">
                                    {content[activeTab as keyof typeof content].points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                            <span className="text-sm font-medium">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative">
                                {/* Abstract Visual for the Tab */}
                                <div className="aspect-video bg-black/40 rounded-xl border border-white/10 overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5" />

                                    {/* Mock Content based on Tab */}
                                    {activeTab === 'soc' && (
                                        <div className="p-4 font-mono text-xs text-green-400 opacity-80">
                                            {`> SELECT * FROM logs WHERE severity = 'CRITICAL'`} <br />
                                            {`> Scanning 12TB... Done in 0.4s`} <br />
                                            {`> 3 Threats Found.`}
                                        </div>
                                    )}
                                    {activeTab === 'manager' && (
                                        <div className="flex items-end justify-around h-full p-8 pb-0 gap-4">
                                            <div className="w-1/4 h-[60%] bg-primary/20 rounded-t-lg relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">Cost</div></div>
                                            <div className="w-1/4 h-[80%] bg-accent/20 rounded-t-lg relative"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">ROI</div></div>
                                        </div>
                                    )}
                                    {activeTab === 'compliance' && (
                                        <div className="p-8 flex items-center justify-center h-full">
                                            <div className="border-2 border-green-500/30 p-4 rounded-full">
                                                <Check className="w-12 h-12 text-green-500" />
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
