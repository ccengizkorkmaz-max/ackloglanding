"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Phone, Mail, User, ShieldCheck, Lock, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DemoTalepClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [responseMessage, setResponseMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/send-demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus("success");
                setResponseMessage("Talebiniz başarıyla alındı. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.");
                setFormData({ name: "", email: "", phone: "", company: "", message: "" });
            } else {
                throw new Error("Bir hata oluştu.");
            }
        } catch (error) {
            setStatus("error");
            setResponseMessage("Hata oluştu. Lütfen daha sonra tekrar deneyin veya info@logsiem.com adresinden bize ulaşın.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-32 pb-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-900/20 blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            🚀 15 Dakikada Kurulum
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            ACKLOG SIEM'i <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                                Kendi Verilerinizle Deneyin
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Simülasyonlarla değil, gerçek verilerinizle test edin. Hiçbir bağlayıcılığı olmayan 14 günlük ücretsiz deneme (PoC) süreci için formu doldurun.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Tam Özellikli Deneme</h3>
                                    <p className="text-sm text-slate-400">Kısıtlı demo değil, tüm özellikleri (SOAR, UEBA, KVKK) içeren tam sürüm.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                    <Activity className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Gerçek Zamanlı Analiz</h3>
                                    <p className="text-sm text-slate-400">Saldırıları ve anomalileri anında tespit eden In-Memory gücünü görün.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                    <Lock className="w-6 h-6 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Ücretsiz Mühendislik Desteği</h3>
                                    <p className="text-sm text-slate-400">Kurulum ve konfigürasyon sürecinde uzman mühendislerimiz yanınızda.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">

                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4">Talep Alındı!</h4>
                                <p className="text-slate-400 text-lg mb-8">{responseMessage}</p>
                                <Button
                                    className="w-full"
                                    variant="outline"
                                    onClick={() => setStatus("idle")}
                                >
                                    Yeni Talep Oluştur
                                </Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Demo Formu</h3>
                                <p className="text-slate-400 text-sm mb-6">Bilgilerinizi girin, sizi 30 dakika içinde arayalım.</p>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Adınız Soyadınız"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            required
                                            type="email"
                                            placeholder="Kurumsal E-posta Adresiniz"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Telefon Numaranız"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Şirket Adı (Opsiyonel)"
                                            className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {status === "error" && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center font-medium">
                                        {responseMessage}
                                    </div>
                                )}

                                <Button
                                    disabled={status === "loading"}
                                    className="w-full h-14 rounded-xl text-lg font-bold gap-3 shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            İşleniyor...
                                        </>
                                    ) : (
                                        <>
                                            Demoyu Başlat
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </Button>
                                <p className="text-center text-[10px] text-slate-500">
                                    Verileriniz KVKK kapsamında korunmaktadır. Asla 3. taraflarla paylaşılmaz.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
