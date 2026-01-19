"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2, Phone, Mail, User } from "lucide-react";
import { Button } from "./ui/button";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

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
                setMessage("Talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.");
                setTimeout(() => {
                    onClose();
                    setStatus("idle");
                    setFormData({ name: "", email: "", phone: "" });
                }, 3000);
            } else {
                throw new Error("Bir hata oluştu.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Hata oluştu. Lütfen daha sonra tekrar deneyin.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 bg-slate-900/50 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-bold text-white">Ücretsiz Demo Talep Edin</h3>
                                <p className="text-sm text-muted-foreground">ACKLOG USO Platformu'nu keşfedin.</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Form Body */}
                        <div className="p-8">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Harika!</h4>
                                    <p className="text-muted-foreground">{message}</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                required
                                                type="text"
                                                placeholder="Adınız Soyadınız"
                                                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                required
                                                type="email"
                                                placeholder="İş E-posta Adresiniz"
                                                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
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
                                                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {status === "error" && (
                                        <div className="text-red-500 text-sm text-center font-medium">{message}</div>
                                    )}

                                    <Button
                                        disabled={status === "loading"}
                                        className="w-full h-14 rounded-xl text-lg font-bold gap-3 shadow-lg shadow-primary/20"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Gönderiliyor...
                                            </>
                                        ) : (
                                            <>
                                                Demo Talebi Gönder
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </Button>
                                    <p className="text-center text-[10px] text-muted-foreground">
                                        Demo talebi oluşturarak ACKLOG'un gizlilik politikasını kabul etmiş olursunuz.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
