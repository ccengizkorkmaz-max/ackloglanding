"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Search,
    Shield,
    AlertTriangle,
    Terminal,
    Cpu,
    Globe,
    Database,
    ExternalLink,
    Zap,
    Download,
    CheckCircle2,
    XCircle,
    Server,
    Activity,
    Lock,
    Eye
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { runSecurityAnalysis, saveAnalysisLead } from '@/app/analiz/actions'
import { SecurityAnalysisResults } from '@/lib/security-analyzer'

// Loading Steps
const LOADING_STEPS = [
    { id: 'shodan', text: 'Shodan üzerinden aktif servisler ve portlar taranıyor...', icon: Globe },
    { id: 'criminalip', text: 'Criminal IP ile itibar ve VPN/Proxy analizi yapılıyor...', icon: Shield },
    { id: 'pulsedive', text: 'Pulsedive veri tabanından tehdit istihbaratı sorgulanıyor...', icon: Activity },
    { id: 'risk', text: 'Yapay zeka motoru ile risk skoru hesaplanıyor...', icon: Zap }
]

export default function SecurityAnalyzerComponent() {
    const [target, setTarget] = useState('')
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const [results, setResults] = useState<SecurityAnalysisResults | null>(null)
    const [showLeadModal, setShowLeadModal] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [leadData, setLeadData] = useState({ name: '', email: '' })

    const startAnalysis = async () => {
        if (!target) return
        setIsAnalyzing(true)
        setResults(null)
        setCurrentStep(0)

        // Step animation sequences
        const stepInterval = setInterval(() => {
            setCurrentStep(prev => (prev < LOADING_STEPS.length - 1 ? prev + 1 : prev))
        }, 2000)

        try {
            const res = await runSecurityAnalysis(target)
            if (res.success && res.data) {
                // Buffer to show the last step for a bit
                setTimeout(() => {
                    clearInterval(stepInterval)
                    setResults(res.data!)
                    setIsAnalyzing(false)
                }, 1500)
            } else {
                alert(res.message || "Hata oluştu.")
                setIsAnalyzing(false)
                clearInterval(stepInterval)
            }
        } catch (e) {
            setIsAnalyzing(false)
            clearInterval(stepInterval)
            alert("Bağlantı hatası.")
        }
    }

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const res = await saveAnalysisLead({ ...leadData, target })
            if (res.success) {
                alert("Rapor talebiniz alındı. E-posta adresinizi kontrol edin.")
                setShowLeadModal(false)
            } else {
                alert(res.message)
            }
        } catch (e) {
            alert("Sunucu hatası.")
        } finally {
            setIsSubmitting(false)
        }
    }

    // Risk Gauge Color Helper
    const getRiskColor = (score: number) => {
        if (score >= 80) return "text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
        if (score >= 50) return "text-orange-500"
        if (score >= 30) return "text-yellow-500"
        return "text-green-500"
    }

    return (
        <div className="w-full max-w-6xl mx-auto space-y-12 font-mono pb-20">
            {/* Header Area */}
            <div className="text-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4"
                >
                    OSINT Engine v2.0
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                    ANLIK GÜVENLİK <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-white border-b-4 border-cyan-500/30 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">ANALİZİ</span>
                </h1>
                <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
                    Shodan, Criminal IP ve Pulsedive verilerini anlık olarak tarayarak hedefin risk haritasını çıkarın.
                </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-3xl mx-auto group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative flex bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 p-2 overflow-hidden shadow-2xl">
                    <div className="flex items-center px-4 text-slate-500">
                        <Terminal className="h-5 w-5" />
                    </div>
                    <Input
                        className="bg-transparent border-none text-white focus-visible:ring-0 text-lg h-14 placeholder:text-slate-600 outline-none flex-1"
                        placeholder="IP Adresi veya Alan Adı Analiz Et..."
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && startAnalysis()}
                    />
                    <Button
                        onClick={startAnalysis}
                        disabled={isAnalyzing}
                        className="h-14 px-8 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all active:scale-95"
                    >
                        {isAnalyzing ? <Loader2 className="animate-spin h-5 w-5" /> : <Zap className="mr-2 h-5 w-5" />}
                        ANALİZ ET
                    </Button>
                </div>
            </div>

            {/* Content Switcher */}
            <AnimatePresence mode="wait">
                {isAnalyzing ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-8 py-10"
                    >
                        <div className="flex flex-col items-center space-y-6">
                            <div className="relative">
                                <Activity className="h-16 w-16 text-cyan-500 animate-pulse" />
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"></div>
                            </div>
                            <div className="w-full max-w-md space-y-4">
                                {LOADING_STEPS.map((step, idx) => (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{
                                            opacity: idx <= currentStep ? 1 : 0.3,
                                            x: idx <= currentStep ? 0 : -10
                                        }}
                                        className={cn(
                                            "flex items-center gap-4 p-3 rounded-lg border border-slate-800 transition-colors",
                                            idx === currentStep ? "bg-slate-800/50 border-cyan-500/30" : "bg-transparent"
                                        )}
                                    >
                                        <step.icon className={cn("h-4 w-4", idx === currentStep ? "text-cyan-400" : "text-slate-600")} />
                                        <span className="text-xs text-slate-300">{step.text}</span>
                                        {idx < currentStep && <CheckCircle2 className="h-4 w-4 text-green-500 ml-auto" />}
                                        {idx === currentStep && <Loader2 className="animate-spin h-4 w-4 text-cyan-500 ml-auto" />}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : results ? (
                    <motion.div
                        key="results"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
                    >
                        {/* LEFT COLUMN: Main Scoring & Info */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl text-center relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4">
                                    <Shield className="h-12 w-12 text-slate-800" />
                                </div>
                                <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">TEHDİT SEVİYESİ</h3>
                                <div className={cn("text-8xl font-black transition-all", getRiskColor(results.riskScore))}>
                                    {results.riskScore}
                                </div>
                                <p className="text-slate-400 text-xs mt-6 uppercase tracking-widest">
                                    {results.riskScore >= 70 ? "Kritik Risk" : results.riskScore >= 40 ? "Orta Risk" : "Güvenli"}
                                </p>
                                <div className="w-full h-1.5 bg-slate-800 rounded-full mt-8 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${results.riskScore}%` }}
                                        className={cn(
                                            "h-full rounded-full transition-all",
                                            results.riskScore >= 70 ? "bg-red-500" : "bg-cyan-500"
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl space-y-4">
                                <h4 className="text-white text-sm font-bold flex items-center gap-2">
                                    <Info className="h-4 w-4 text-cyan-400" /> API İtibar Bilgileri
                                </h4>
                                <div className="space-y-3">
                                    <Badge label="Criminal IP" value={results.criminalIp?.threatLevel || "Normal"} variant={results.criminalIp?.isMalicious ? "danger" : "safe"} />
                                    <Badge label="Pulsedive" value={results.pulsedive?.risk || "Temiz"} variant={results.pulsedive?.isBlacklisted ? "danger" : "safe"} />
                                    <Badge label="IP Tipi" value={results.criminalIp?.deviceType || "Bilinmiyor"} variant="info" />
                                    <Badge label="ISS" value={results.shodan?.isp || "Bilinmiyor"} variant="info" />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Service Details */}
                        <div className="lg:col-span-8 space-y-6">
                            {/* Ports Grid */}
                            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="text-white font-bold flex items-center gap-2">
                                        <Cpu className="h-5 w-5 text-cyan-400" /> Açık Portlar ve Servisler
                                    </h4>
                                    <span className="text-xs text-slate-500">{results.shodan?.ports.length || 0} Port Tespit Edildi</span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                    {results.shodan?.ports.map(port => (
                                        <div key={port} className="bg-slate-950 border border-slate-800/50 p-4 rounded-xl text-center group hover:border-cyan-500/50 transition-colors">
                                            <div className="text-lg font-black text-cyan-400">{port}</div>
                                            <div className="text-[10px] text-slate-500 uppercase mt-1">TCP/UDP</div>
                                        </div>
                                    ))}
                                    {(!results.shodan?.ports || results.shodan.ports.length === 0) && (
                                        <div className="col-span-full py-10 text-center text-slate-600 border border-dashed border-slate-800 rounded-xl">
                                            Açık port tespiti yapılamadı.
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* CVE List */}
                            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
                                <h4 className="text-white font-bold flex items-center gap-2 mb-6">
                                    <AlertTriangle className="h-5 w-5 text-orange-500" /> Tespit Edilen Zafiyetler (CVE)
                                </h4>
                                <div className="max-h-[300px] overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                                    {results.shodan?.vulns.map(vuln => (
                                        <div key={vuln} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800 gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-2 w-2 rounded-full bg-red-500 pulse"></div>
                                                <span className="text-white font-bold text-sm tracking-wider">{vuln}</span>
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-cyan-500/30 text-cyan-400 text-xs hover:bg-cyan-500/10 h-8"
                                            >
                                                LogSIEM ile İzle
                                            </Button>
                                        </div>
                                    ))}
                                    {(!results.shodan?.vulns || results.shodan.vulns.length === 0) && (
                                        <div className="py-10 text-center text-slate-600">
                                            Kritik bir CVE verisi bulunamadı.
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Action Area */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    onClick={() => setShowLeadModal(true)}
                                    className="flex-1 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-black h-16 rounded-2xl shadow-xl shadow-cyan-900/40"
                                >
                                    <Download className="mr-2 h-5 w-5" /> KURUMSAL GÜVENLİK RAPORUNU İNDİR (.PDF)
                                </Button>
                                <Button
                                    onClick={() => { setResults(null); setTarget(''); }}
                                    variant="outline"
                                    className="h-16 px-8 border-slate-800 text-slate-400 hover:text-white rounded-2xl"
                                >
                                    TEMİZLE
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
                        {STATS_ITEMS.map((item, i) => (
                            <div key={i} className="bg-slate-900/30 border border-slate-800 p-8 rounded-3xl text-center space-y-4">
                                <item.icon className="h-10 w-10 text-cyan-500/50 mx-auto" />
                                <h4 className="text-white font-bold">{item.title}</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Lead Modal */}
            <Dialog open={showLeadModal} onOpenChange={setShowLeadModal}>
                <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Database className="h-5 w-5 text-cyan-500" /> Teknik Analiz Raporu
                        </DialogTitle>
                        <DialogDescription className="text-slate-400">
                            {target} adresi için detaylı OSINT haritasını ve güvenlik önerilerini PDF olarak almak için bilgilerinizi doğrulayın.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleLeadSubmit} className="space-y-4 py-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Ad Soyad</label>
                            <Input
                                className="bg-slate-950 border-slate-800 focus:ring-cyan-500 text-white"
                                placeholder="John Doe"
                                required
                                value={leadData.name}
                                onChange={e => setLeadData({ ...leadData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Kurumsal E-posta</label>
                            <Input
                                type="email"
                                className="bg-slate-950 border-slate-800 focus:ring-cyan-500 text-white"
                                placeholder="john@sirket.com"
                                required
                                value={leadData.email}
                                onChange={e => setLeadData({ ...leadData, email: e.target.value })}
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold h-12 rounded-xl mt-4"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
                            RAPORU HAZIRLA VE GÖNDER
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>

            <style jsx global>{`
                .scrollbar-thin::-webkit-scrollbar { width: 4px; }
                .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
                .scrollbar-thin::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
                .pulse { animation: pulse-red 2s infinite; }
                @keyframes pulse-red {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
                }
            `}</style>
        </div>
    )
}

function Loader2(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    )
}

function Info(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    )
}

function Badge({ label, value, variant }: { label: string, value: string, variant: 'safe' | 'danger' | 'info' }) {
    return (
        <div className="flex justify-between items-center py-2 border-b border-slate-800/50 last:border-none">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{label}</span>
            <span className={cn(
                "text-[10px] font-bold px-2 py-0.5 rounded border",
                variant === 'safe' && "text-green-500 border-green-500/20 bg-green-500/5",
                variant === 'danger' && "text-red-500 border-red-500/20 bg-red-500/5",
                variant === 'info' && "text-cyan-500 border-cyan-500/20 bg-cyan-500/5"
            )}>
                {value}
            </span>
        </div>
    )
}

const STATS_ITEMS = [
    { title: 'Global OSINT Verisi', desc: '4 milyardan fazla IP adresini gerçek zamanlı tarayan global veri tabanı.', icon: Globe },
    { title: 'Anlık İtibar Analizi', desc: 'VPN, Proxy veya Malicious olarak işaretlenmiş trafiği anında tespit edin.', icon: Shield },
    { title: 'Zafiyet Haritalama', desc: 'Cihaz üzerindeki açık portları ve bilinen CVE kayıtlarını listeleyin.', icon: Database },
]
