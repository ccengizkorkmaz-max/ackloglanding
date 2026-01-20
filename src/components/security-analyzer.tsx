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
    Eye,
    Loader2,
    Info
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
import { runSecurityAnalysis, saveAnalysisLead, requestSolutionSupport } from '@/app/analiz/actions'
import { SecurityAnalysisResults } from '@/lib/security-analyzer'

interface SolutionContent {
    title: string;
    level: 'Critical' | 'High' | 'Medium' | 'Low';
    scenario: string;
    logSource: string;
    rule: string;
    action: string;
    checklist: string[];
}

// Loading Steps
const LOADING_STEPS = [
    { id: 'shodan', text: 'Shodan üzerinden aktif servisler ve portlar taranıyor...', icon: Globe },
    { id: 'criminalip', text: 'Criminal IP ile itibar ve VPN/Proxy analizi yapılıyor...', icon: Shield },
    { id: 'pulsedive', text: 'Pulsedive veri tabanından tehdit istihbaratı sorgulanıyor...', icon: Activity },
    { id: 'risk', text: 'Yapay zeka motoru ile risk skoru hesaplanıyor...', icon: Zap }
]

export default function SecurityAnalyzerComponent() {
    const [target, setTarget] = useState('45.33.32.156')
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [currentStep, setCurrentStep] = useState(0)
    const [results, setResults] = useState<SecurityAnalysisResults | null>(null)
    const [showLeadModal, setShowLeadModal] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [leadData, setLeadData] = useState({ name: '', email: '' })
    const [selectedVuln, setSelectedVuln] = useState<string | null>(null)
    const [solutionContent, setSolutionContent] = useState<SolutionContent | null>(null)
    const [showSolutionModal, setShowSolutionModal] = useState(false)
    const [isRequestingSupport, setIsRequestingSupport] = useState(false)

    // Success Modal State
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [successMessage, setSuccessMessage] = useState({ title: '', message: '' })

    // Auto-run analysis on mount
    useEffect(() => {
        startAnalysis();
    }, []);

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
                setTimeout(() => {
                    clearInterval(stepInterval)
                    setResults(res.data!)
                    setIsAnalyzing(false)
                }, 1500)
            } else {
                setSuccessMessage({ title: 'Hata', message: res.message || "Hata oluştu." })
                setShowSuccessModal(true)
                setIsAnalyzing(false)
                clearInterval(stepInterval)
            }
        } catch (e) {
            setIsAnalyzing(false)
            clearInterval(stepInterval)
            setSuccessMessage({ title: 'Bağlantı Hatası', message: "Sunucu ile iletişim kurulamadı." })
            setShowSuccessModal(true)
        }
    }

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const res = await saveAnalysisLead({ ...leadData, target })
            if (res.success) {
                setSuccessMessage({
                    title: 'Talebiniz Alındı',
                    message: "Rapor talebiniz başarıyla alındı. E-posta adresinizi kontrol edin."
                })
                setShowSuccessModal(true)
                setShowLeadModal(false)
            } else {
                setSuccessMessage({ title: 'Hata', message: res.message || "Bir hata oluştu" })
                setShowSuccessModal(true)
            }
        } catch (e) {
            setSuccessMessage({ title: 'Hata', message: "Sunucu hatası." })
            setShowSuccessModal(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleSupportRequest = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedVuln) return
        setIsRequestingSupport(true)
        try {
            const res = await requestSolutionSupport({
                ...leadData,
                target,
                vulnerability: selectedVuln,
                context: solutionContent?.scenario
            })
            if (res.success) {
                setSuccessMessage({
                    title: 'Destek Talebi Başarılı',
                    message: "Destek talebiniz alındı. Mühendislerimiz sizinle iletişime geçecektir."
                })
                setShowSuccessModal(true)
                setShowSolutionModal(false)
            } else {
                setSuccessMessage({ title: 'Hata', message: res.message || "Bir hata oluştu" })
                setShowSuccessModal(true)
            }
        } catch (e) {
            setSuccessMessage({ title: 'Hata', message: "Sunucu hatası." })
            setShowSuccessModal(true)
        } finally {
            setIsRequestingSupport(false)
        }
    }

    const getSolutionContent = (type: string, value: string | number): SolutionContent => {
        const valStr = value.toString().toUpperCase()

        if (type === 'port') {
            if (valStr === '3389') {
                return {
                    title: 'Açık RDP Portu (3389)',
                    level: 'Critical',
                    scenario: 'Saldırganlar kaba kuvvet (Brute Force) saldırıları ile sunucuya tam yetkiyle erişebilir ve Fidye Yazılımı bulaştırabilir.',
                    logSource: 'Windows Security Event Logs',
                    rule: 'RDP Brute Force Detection #402',
                    action: 'Şüpheli IP\'nin Firewall üzerinde otomatik bloklanması.',
                    checklist: [
                        'RDP portunu internete kapatın.',
                        'VPN üzerinden erişim sağlayın.',
                        'NLA (Network Level Authentication) aktif edin.'
                    ]
                }
            }
            if (valStr === '22') {
                return {
                    title: 'Açık SSH Portu (22)',
                    level: 'High',
                    scenario: 'SSH üzerinden botnet saldırıları ve yetkisiz komut çalıştırma denemeleri gerçekleştirilebilir.',
                    logSource: 'Linux Auth.log / Syslog',
                    rule: 'SSH Login Failure Threshold #405',
                    action: 'Fail2Ban entegrasyonu ile IP engelleme.',
                    checklist: [
                        'Root login devre dışı bırakın.',
                        'SSH Key tabanlı kimlik doğrulama kullanın.',
                        'Port numarasını değiştirin.'
                    ]
                }
            }
        }

        if (type === 'cve') {
            return {
                title: value.toString(),
                level: 'Critical',
                scenario: 'Bu zafiyet, saldırganların sistem üzerinde uzaktan kod çalıştırmasına (RCE) veya hassas verileri sızdırmasına olanak tanır.',
                logSource: 'Application & Firewall Logs',
                rule: `CVE Specific Correlation Rule [${value}]`,
                action: 'Anlık alarm üretimi ve SOC ekibine bildirim.',
                checklist: [
                    'İlgili yazılım yamasını (patch) derhal uygulayın.',
                    'Zafiyetli servisi geçici olarak devre dışı bırakın.',
                    'WAF üzerinde sanal yamalama (virtual patching) aktif edin.'
                ]
            }
        }

        if (type === 'malicious') {
            return {
                title: 'Kara Listede Bulunan IP Adresi',
                level: 'High',
                scenario: 'Bu IP adresi daha önce botnet, phishing veya malware dağıtımı ile ilişkilendirilmiş bir tehdit kaynağıdır.',
                logSource: 'Threat Intelligence (Pulsedive/CRIP)',
                rule: 'Global Blacklist Traffic Match #101',
                action: 'Tüm giriş/çıkış trafiğinin anlık olarak kesilmesi.',
                checklist: [
                    'Kurumsal firewall üzerinde IP\'yi bloklayın.',
                    'İç ağdan bu IP\'ye giden trafiği inceleyin.',
                    'EDR üzerinden bu IP ile ilişkili süreçleri tarayın.'
                ]
            }
        }

        return {
            title: value.toString(),
            level: 'Medium',
            scenario: 'Bu bulgu potansiyel bir risk teşkil etmektedir ve saldırganlar için keşif aşamasında bilgi sızmasına yol açabilir.',
            logSource: 'Generic SIEM Logs',
            rule: 'Anomalous Activity Detection',
            action: 'LogSIEM Dashboard üzerinde görselleştirme.',
            checklist: [
                'Servis konfigürasyonunu kontrol edin.',
                'Gereksiz bilgi sızdıran başlıkları (headers) kapatın.',
                'Düzenli zafiyet taraması gerçekleştirin.'
            ]
        }
    }

    const openSolution = (type: string, value: string | number) => {
        const content = getSolutionContent(type, value)
        setSolutionContent(content)
        setSelectedVuln(content.title)
        setShowSolutionModal(true)
    }

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
                        className="space-y-6"
                    >
                        {/* Diagnostic Banner */}
                        {results.metadata?.isDemo && (
                            <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-2xl flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <AlertTriangle className="h-5 w-5 text-orange-400" />
                                    <div className="text-sm">
                                        <p className="text-orange-400 font-bold uppercase tracking-widest text-[10px]">Simülasyon Modu Aktif</p>
                                        <p className="text-slate-400 text-xs mt-1">
                                            {results.metadata.shodanActive ? "✅ Shodan" : "❌ Shodan"} |
                                            {results.metadata.criminalActive ? " ✅ Criminal IP" : " ❌ Criminal IP"} |
                                            {results.metadata.pulsediveActive ? " ✅ Pulsedive" : " ❌ Pulsedive"}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[10px] text-slate-500 max-w-[400px] leading-tight hidden md:block">
                                    API anahtarları eksik veya sunucu henüz yeniden başlatılmadı. Lütfen .env.local dosyasını kontrol edin ve terminali kapatıp <b>npm run dev</b> ile tekrar açın.
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
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
                                        <Badge
                                            label="Criminal IP"
                                            value={results.criminalIp?.threatLevel || "Normal"}
                                            variant={results.criminalIp?.isMalicious ? "danger" : "safe"}
                                            onClick={results.criminalIp?.isMalicious ? () => openSolution('malicious', 'Criminal IP') : undefined}
                                        />
                                        <Badge
                                            label="Pulsedive"
                                            value={results.pulsedive?.risk || "Temiz"}
                                            variant={results.pulsedive?.isBlacklisted ? "danger" : "safe"}
                                            onClick={results.pulsedive?.isBlacklisted ? () => openSolution('malicious', 'Pulsedive') : undefined}
                                        />
                                        <Badge label="IP Tipi" value={results.criminalIp?.deviceType || "Bilinmiyor"} variant="info" />
                                        <Badge label="ISS" value={results.shodan?.isp || "Bilinmiyor"} variant="info" />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Service Details */}
                            <div className="lg:col-span-8 space-y-6">
                                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="text-white font-bold flex items-center gap-2">
                                            <Cpu className="h-5 w-5 text-cyan-400" /> Açık Portlar ve Servisler
                                        </h4>
                                        <span className="text-xs text-slate-500">{results.shodan?.ports.length || 0} Port Tespit Edildi</span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                                        {results.shodan?.ports.map(port => (
                                            <div
                                                key={port}
                                                onClick={() => openSolution('port', port)}
                                                className="bg-slate-950 border border-slate-800/50 p-4 rounded-xl text-center group hover:border-cyan-500/50 transition-all cursor-pointer hover:bg-slate-900 active:scale-95"
                                            >
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
                                                    onClick={() => openSolution('cve', vuln)}
                                                    className="border-cyan-500/30 text-cyan-400 text-xs hover:bg-cyan-500/10 h-8"
                                                >
                                                    ACKLog ile İzle
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

            {/* Solution Monitoring Modal */}
            <Dialog open={showSolutionModal} onOpenChange={setShowSolutionModal}>
                <DialogContent className="bg-slate-950 border-slate-800 text-white sm:max-w-xl p-0 overflow-hidden outline-none">
                    <div className="relative">
                        {/* Header Section */}
                        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 p-8 border-b border-white/5">
                            <div className="flex justify-between items-start mb-6">
                                <div className="space-y-1">
                                    <div className={cn(
                                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase border",
                                        solutionContent?.level === 'Critical' ? "bg-red-500/10 text-red-500 border-red-500/20" : "bg-orange-500/10 text-orange-500 border-orange-500/20"
                                    )}>
                                        <AlertTriangle className="h-3 w-3 mr-1.5" />
                                        {solutionContent?.level} RISK
                                    </div>
                                    <h2 className="text-2xl font-black tracking-tight text-white">{solutionContent?.title}</h2>
                                </div>
                            </div>

                            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl p-5 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-20">
                                    <Activity className="h-10 w-10 text-cyan-500" />
                                </div>
                                <h4 className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Saldırı Senaryosu</h4>
                                <p className="text-slate-300 text-sm leading-relaxed relative z-10">
                                    {solutionContent?.scenario}
                                </p>
                            </div>
                        </div>

                        {/* LogSIEM Flow Section */}
                        <div className="p-8 space-y-8 bg-slate-950">
                            <div>
                                <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">LogSIEM Koruma Stratejisi</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { label: 'Tespit Metodu', value: solutionContent?.logSource, icon: Database },
                                        { label: 'Aktif Kural', value: solutionContent?.rule, icon: Shield },
                                        { label: 'Otomatik Aksiyon', value: solutionContent?.action, icon: Zap }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-slate-900/40 border border-slate-800/50 p-4 rounded-2xl text-center space-y-3">
                                            <div className="h-8 w-8 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto">
                                                <item.icon className="h-4 w-4 text-cyan-400" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">{item.label}</p>
                                                <p className="text-[11px] text-white font-medium line-clamp-2">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                {/* Checklist */}
                                <div className="space-y-4">
                                    <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Teknik Yapılandırma</h4>
                                    <div className="space-y-2">
                                        {solutionContent?.checklist.map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                                <div className="h-5 w-5 rounded bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                                                </div>
                                                <span className="text-xs">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Support Form */}
                                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-3xl space-y-4">
                                    <h4 className="text-white text-xs font-bold uppercase tracking-widest">Hızlı Destek Al</h4>
                                    <form onSubmit={handleSupportRequest} className="space-y-3">
                                        <Input
                                            className="bg-slate-950 border-slate-800 h-9 text-xs focus:ring-cyan-500"
                                            placeholder="Ad Soyad"
                                            required
                                            value={leadData.name}
                                            onChange={e => setLeadData({ ...leadData, name: e.target.value })}
                                        />
                                        <Input
                                            type="email"
                                            className="bg-slate-950 border-slate-800 h-9 text-xs focus:ring-cyan-500"
                                            placeholder="E-posta"
                                            required
                                            value={leadData.email}
                                            onChange={e => setLeadData({ ...leadData, email: e.target.value })}
                                        />
                                        <Button
                                            type="submit"
                                            disabled={isRequestingSupport}
                                            className="w-full bg-cyan-600 hover:bg-cyan-500 h-10 text-xs font-bold rounded-xl"
                                        >
                                            {isRequestingSupport ? <Loader2 className="animate-spin mr-2 h-3 w-3" /> : <Zap className="mr-2 h-3 w-3" />}
                                            KURALI AKTİF ET
                                        </Button>
                                    </form>
                                    <p className="text-[10px] text-slate-500 text-center">
                                        Mühendislerimiz korelasyon kuralları için size rehberlik edecektir.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div className="bg-slate-900/80 p-6 flex flex-col sm:flex-row gap-4 border-t border-white/5">
                            <Button
                                variant="outline"
                                className="flex-1 border-slate-700 text-slate-400 hover:text-white h-12 rounded-xl text-xs uppercase font-bold tracking-widest"
                                onClick={() => {
                                    setSuccessMessage({
                                        title: 'Bilgilendirme',
                                        message: "Yapılandırma dokümanı hazırlanıyor..."
                                    })
                                    setShowSuccessModal(true)
                                }}
                            >
                                <Download className="h-4 w-4 mr-2" /> Dökümanı İndir
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Success Modal */}
            <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
                <DialogContent className="bg-slate-950 border-slate-800 text-white sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-cyan-400">
                            <CheckCircle2 className="h-5 w-5" /> {successMessage.title}
                        </DialogTitle>
                        <DialogDescription className="text-slate-300 pt-2">
                            {successMessage.message}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end pt-4">
                        <Button
                            onClick={() => setShowSuccessModal(false)}
                            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold"
                        >
                            Tamam
                        </Button>
                    </div>
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

function Badge({ label, value, variant, onClick }: { label: string, value: string, variant: 'safe' | 'danger' | 'info', onClick?: () => void }) {
    return (
        <div
            className={cn(
                "flex justify-between items-center py-2 border-b border-slate-800/50 last:border-none",
                onClick && "cursor-pointer group/badge"
            )}
            onClick={onClick}
        >
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest group-hover/badge:text-slate-300 transition-colors">{label}</span>
            <span className={cn(
                "text-[10px] font-bold px-2 py-0.5 rounded border transition-all",
                variant === 'safe' && "text-green-500 border-green-500/20 bg-green-500/5",
                variant === 'danger' && "text-red-500 border-red-500/20 bg-red-500/5 group-hover/badge:bg-red-500/10 group-hover/badge:scale-105",
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
