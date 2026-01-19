"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, ShieldCheck, Activity, Globe, Zap, Lock } from "lucide-react";
import { useState } from "react";
import { DemoModal } from "./demo-modal";

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="relative min-h-[70vh] flex items-start justify-center overflow-hidden bg-[#020617] pt-0">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 z-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Background Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] opacity-30" />

                <div className="max-w-7xl mx-auto px-4 relative z-10 pt-20">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left Content (Text) */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="lg:col-span-6 flex flex-col gap-4 text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-white/10 w-fit mx-auto lg:mx-0 backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-primary-foreground/90">
                                    USO Platformu &bull; v2.0 Live
                                </span>
                            </div>

                            <div className="flex justify-center lg:justify-start -mb-4">
                                <Image
                                    src="/logo.png"
                                    alt="Acklog Logo"
                                    width={180}
                                    height={60}
                                    className="h-12 w-auto object-contain"
                                    priority
                                />
                            </div>

                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                                YERLİ SIEM <br />
                                <span className="text-gradient decoration-clone">LOG YÖNETİMİ</span>
                            </h1>

                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white/90 mb-2">
                                <span className="text-primary">"Sınırsız"</span> Entegrasyon ve Veri Kaynağı Desteği
                            </h2>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                ACKLOG, dağınık güvenlik araçlarını tek bir <span className="text-white font-semibold">Birleşik Güvenlik Operasyonları (USO)</span> platformunda birleştirir.
                                Yapay zeka desteğiyle siber tehditleri yayılmadan durdurun.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                                <Button
                                    onClick={() => setIsModalOpen(true)}
                                    size="lg"
                                    className="h-14 px-10 text-lg rounded-full gap-3 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all"
                                >
                                    Ücretsiz Deneyin <ArrowRight className="w-5 h-5" />
                                </Button>
                                <Link href="/ozellikler">
                                    <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all">
                                        Keşfedin
                                    </Button>
                                </Link>
                            </div>

                            {/* Real-time Stats */}
                            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5 mt-4">
                                <div>
                                    <div className="text-2xl font-bold text-white">0ms</div>
                                    <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">Detection Latency</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">Unlimited</div>
                                    <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">Log Sources</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">99.9%</div>
                                    <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">Accuracy Rate</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content (Visual) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotateY: 10 }}
                            animate={{ opacity: 1, y: 0, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="lg:col-span-6 relative perspective-1000 hidden lg:block"
                        >
                            {/* Main Dashboard Frame */}
                            <div className="relative z-10 rounded-2xl border border-white/10 bg-slate-900/50 p-2 shadow-2xl backdrop-blur-2xl group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5 opacity-50" />

                                {/* Browser/System Bar */}
                                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-black/40">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                    <div className="ml-4 h-3 w-48 bg-white/5 rounded-full" />
                                </div>

                                {/* The Generated Mockup Image */}
                                <div className="relative aspect-square md:aspect-video overflow-hidden bg-slate-950">
                                    <Image
                                        src="/dashboard-mockup.png"
                                        alt="ACKLOG Yerli SIEM ve Log Yönetimi Dashboard Arayüzü"
                                        fill
                                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                                    />

                                    {/* Overlay Scanning Effect */}
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        <motion.div
                                            animate={{ y: ["-100%", "200%"] }}
                                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                            className="h-20 w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent blur-xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Feature Cards */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="absolute -right-6 top-1/4 z-20 bg-slate-900/90 backdrop-blur-xl p-4 rounded-xl border border-primary/30 shadow-2xl flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-primary tracking-widest">Active Protection</div>
                                    <div className="text-sm font-bold text-white">Threats Neutralized</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-6 bottom-1/4 z-20 bg-slate-900/90 backdrop-blur-xl p-4 rounded-xl border border-accent/30 shadow-2xl flex items-center gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-accent tracking-widest">Efficiency</div>
                                    <div className="text-sm font-bold text-white">5X Faster Analysis</div>
                                </div>
                            </motion.div>

                            {/* Background Orbitals/Decorations */}
                            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-[80px] -z-10 animate-pulse" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full -z-10 opacity-20 scale-110" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/5 rounded-full -z-10 opacity-10 scale-125" />
                        </motion.div>

                    </div>
                </div>
            </section>
            <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
