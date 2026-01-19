"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export function ProblemSolution() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Problem Phase */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-red-500/10 blur-3xl rounded-full" />
                        <h2 className="text-3xl font-bold mb-4 relative z-10">
                            Log Yığınları Arasında <br />
                            <span className="text-red-500">Kör Uçuşu Yapmayın</span>
                        </h2>
                        <div className="space-y-4 relative z-10">
                            <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/10 rounded-lg">
                                <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-red-200">Gürültülü Data</h4>
                                    <p className="text-sm text-red-200/60">Günde milyonlarca log oluşuyor, ancak kritik tehditler gürültü içinde kayboluyor.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/10 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-red-200">Kaçan Tehditler</h4>
                                    <p className="text-sm text-red-200/60">Saldırganlar ortalama 200+ gün fark edilmeden ağda kalabiliyor.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5 font-mono text-xs text-muted-foreground opacity-70">
                        {/* Mock Log Terminal */}
                        <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-red-400/80">[ERROR] Failed login attempt from 192.168.1.55</p>
                            <p className="text-green-400/50">[INFO] Service started: sshd</p>
                            <p className="text-red-400/80">[CRITICAL] Buffer overflow detected in module auth.c</p>
                            <p className="text-muted-foreground/30">... 1,048,576 more lines ...</p>
                        </div>
                    </div>
                </div>

                {/* Transition Arrow or Divider */}
                <div className="flex justify-center mb-24">
                    <div className="h-24 w-px bg-gradient-to-b from-red-500/50 to-primary/50" />
                </div>

                {/* Solution Phase */}
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        ACKLOG ile <span className="text-gradient">Tam Görünürlük</span>
                    </motion.h2>
                    <p className="text-xl text-muted-foreground mb-12">
                        Basit bir log yönetiminden fazlası. Yapay zeka destekli analiz motorumuz ile veriyi bilgiye, bilgiyi güvenliğe dönüştürün.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="p-6 bg-primary/5 border border-primary/10 rounded-xl">
                            <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Anında Tespit</h3>
                            <p className="text-sm text-muted-foreground">Tehditleri saniyeler içinde yakalayın.</p>
                        </div>
                        <div className="p-6 bg-primary/5 border border-primary/10 rounded-xl">
                            <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Otomatik Yanıt</h3>
                            <p className="text-sm text-muted-foreground">SOAR entegrasyonu ile aksiyon alın.</p>
                        </div>
                        <div className="p-6 bg-primary/5 border border-primary/10 rounded-xl">
                            <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold mb-2">%100 Uyum</h3>
                            <p className="text-sm text-muted-foreground">KVKK, 5651, GDPR denetimlerine hazır olun.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
