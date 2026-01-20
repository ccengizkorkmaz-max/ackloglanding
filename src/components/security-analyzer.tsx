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
    Zap,
    Download,
    CheckCircle2,
    Activity,
    Info,
    PieChart as PieChartIcon,
    Loader2,
    Clock,
    Calendar,
    History,
    Server,
    Layers,
    ArrowRight
} from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
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

// Initial Stats Items
const STATS_ITEMS = [
    { title: 'Global İstihbarat', icon: Globe, desc: '6 farklı OSINT kaynağından anlık veri toplama.' },
    { title: 'Yapay Zeka Analizi', icon: Cpu, desc: 'Toplanan verileri korelasyon motoru ile işleyerek risk skorlama.' },
    { title: 'Sıfır Gün Tehditleri', icon: Zap, desc: 'Bilinen CVE ve exploit veritabanları ile otomatik eşleştirme.' }
]

// Loading Steps
const LOADING_STEPS = [
    { id: 'shodan', text: 'Shodan üzerinden aktif servisler ve portlar taranıyor...', icon: Globe },
    { id: 'censys', text: 'Censys ile SSL ve Shadow IT varlıkları tespit ediliyor...', icon: Server },
    { id: 'criminalip', text: 'Criminal IP ile itibar ve VPN/Proxy analizi yapılıyor...', icon: Shield },
    { id: 'virustotal', text: 'VirusTotal v3 motorları ile global tarama yapılıyor...', icon: PieChartIcon },
    { id: 'sectrails', text: 'SecurityTrails ile DNS geçmişi ve subdomain keşfi yapılıyor...', icon: History },
    { id: 'pulsedive', text: 'Pulsedive veri tabanından tehdit istihbaratı sorgulanıyor...', icon: Activity },
    { id: 'risk', text: 'Yapay zeka motoru ile Global Kurumsal Risk Skoru hesaplanıyor...', icon: Zap }
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

        const rules: Record<string, SolutionContent> = {
            'cve': {
                title: 'Aktif Zafiyet (Exploit) Girişimi',
                level: 'Critical',
                scenario: 'Dış ağdan iç sunuculara yönelik bilinen bir CVE (Örn: CVE-2023-44487) exploit denemesi algılandı.',
                logSource: 'WAF, IPS, Web Server Logs',
                rule: JSON.stringify({
                    "rule_name": "Vulnerability_Exploit_Attempt",
                    "severity": "HIGH",
                    "condition": "http.request.uri CONTAINS 'exploit_pattern' OR vulnerability.id == 'CVE-XXXX-YYYY'",
                    "action": "Quarantine_Host"
                }, null, 2),
                action: 'Acklog SIEM saldırı imzasını tanır ve IPS üzerinden bağlantıyı keser.',
                checklist: ['Yama (Patch) durumunu kontrol et', 'WAF kurallarını sıkılaştır', 'Port kısıtlamalarını gözden geçir']
            },
            'malicious': {
                title: 'Malicious IP/Domain Tespit Edildi',
                level: 'High',
                scenario: 'İç ağdan zararlı olarak işaretlenmiş bir IP adresine (C2 sunucusu veya Phishing kaynağı) doğru trafik başlatıldığı tespit edildi.',
                logSource: 'Firewall, DNS, Proxy Logs',
                rule: JSON.stringify({
                    "rule_name": "Connect_to_Malicious_IP",
                    "severity": "CRITICAL",
                    "condition": "destination.ip IN ThreatIntel_Malicious_IP_List AND event.action == 'allow'",
                    "timeframe": "1m",
                    "action": "Block_and_Alert"
                }, null, 2),
                action: 'Acklog SIEM bu trafiği anında bloklar ve SOC ekibine "Yüksek Öncelikli" alarm gönderir.',
                checklist: ['Firewall kuralını kontrol et', 'Enfekte cihazı izole et', 'Antivirüs taraması başlat']
            }
        }

        if (type === 'port') {
            return {
                title: `Riskli Port Aktivitesi (${valStr})`,
                level: 'Medium',
                scenario: 'Kritik olmayan bir sunucuda beklenmedik bir portun açık olduğu ve dış dünyadan erişildiği tespit edildi.',
                logSource: 'Network Flow, Firewall Logs',
                rule: JSON.stringify({
                    "rule_name": "Risky_Port_Access",
                    "severity": "MEDIUM",
                    "condition": `destination.port == ${valStr} AND source.ip_geo != 'Internal'`,
                    "threshold": "5_attempts_in_1min"
                }, null, 2),
                action: 'Acklog SIEM, belirlenen politikalara aykırı port erişimlerini raporlar ve ilgili yöneticiye uyarı gönderir.',
                checklist: ['Gereksiz servisleri kapat', 'Erişimi sadece VPN ile sınırla', 'Güçlü parola politikası uygula']
            }
        }

        return rules[type] || {
            title: valStr,
            level: 'Medium',
            scenario: 'Bu bulgu potansiyel bir risk teşkil etmektedir ve saldırganlar için keşif aşamasında bilgi sızmasına yol açabilir.',
            logSource: 'Generic SIEM Logs',
            rule: JSON.stringify({
                "rule_name": "Anomalous_Activity_Detection",
                "severity": "MEDIUM",
                "condition": "event.outcome == 'success' AND user.behavior == 'abnormal'",
                "action": "Log_and_Monitor"
            }, null, 2),
            action: 'ACKLog Dashboard üzerinde görselleştirme.',
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
                                            {results.metadata.pulsediveActive ? " ✅ Pulsedive" : " ❌ Pulsedive"} |
                                            {results.metadata.isDemo ? " ❌ VirusTotal (Demo)" : " ✅ VirusTotal"}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-[10px] text-slate-500 max-w-[400px] leading-tight hidden md:block">
                                    API anahtarları eksik veya sunucu henüz yeniden başlatılmadı. Lütfen .env.local dosyasını kontrol edin ve terminali kapatıp <b>npm run dev</b> ile tekrar açın.
                                </div>
                            </div>
                        )}

                        {/* Critical Threat Banner for VirusTotal */}
                        {results.virustotal && results.virustotal.stats.malicious > 3 && (
                            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-2xl flex items-center gap-4 animate-pulse">
                                <AlertTriangle className="h-6 w-6 text-red-500" />
                                <div>
                                    <h4 className="text-red-500 font-bold text-sm uppercase tracking-widest">KRİTİK TEHDİT TESPİT EDİLDİ</h4>
                                    <p className="text-white text-xs mt-1">
                                        Bu IP/Domain global kara listelerde yer alıyor. <span className="font-bold underline">ACKLog</span> ile trafiği acilen izlemeye alın!
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* LEFT COLUMN: Main Scoring & Info */}
                            <div className="lg:col-span-4 space-y-6">
                                {/* Global Risk Gauge */}
                                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4">
                                        <Zap className="h-6 w-6 text-yellow-500 animate-pulse" />
                                    </div>
                                    <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">KURUMSAL RİSK SKORU</h3>

                                    <div className="h-[180px] w-full relative flex justify-center items-center">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={[{ value: results.riskScore }, { value: 100 - results.riskScore }]}
                                                    cx="50%"
                                                    cy="80%"
                                                    startAngle={180}
                                                    endAngle={0}
                                                    innerRadius={60}
                                                    outerRadius={80}
                                                    paddingAngle={0}
                                                    dataKey="value"
                                                    stroke="none"
                                                >
                                                    <Cell fill={getRiskColor(results.riskScore).replace('text-', 'bg-').split(' ')[0].replace('500', '500')} />
                                                    <Cell fill="#1e293b" />
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                        <div className="absolute bottom-6 flex flex-col items-center">
                                            <span className={cn("text-5xl font-black", getRiskColor(results.riskScore))}>{results.riskScore}</span>
                                            <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">{results.riskLevel}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mt-4">
                                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                                            <p className="text-[10px] text-slate-500 uppercase">En Yüksek Risk</p>
                                            <p className="text-xs font-bold text-white truncate">{results.riskBreakdown[0]?.source || "N/A"}</p>
                                        </div>
                                        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                                            <p className="text-[10px] text-slate-500 uppercase">Aktif Tehdit</p>
                                            <p className="text-xs font-bold text-red-400">{results.riskBreakdown.length} Kaynak</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Threat Heatmap */}
                                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl">
                                    <h4 className="text-white text-sm font-bold flex items-center gap-2 mb-4">
                                        <Layers className="h-4 w-4 text-cyan-400" /> Tehdit Isı Haritası
                                    </h4>
                                    <div className="space-y-2">
                                        {results.riskBreakdown.map((item, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 bg-slate-950/50 rounded-xl border border-slate-800/50">
                                                <div className="flex items-center gap-3">
                                                    <div className={cn("h-2 w-2 rounded-full", item.score >= 30 ? "bg-red-500" : "bg-orange-500")} />
                                                    <span className="text-xs text-slate-300 font-medium">{item.source}</span>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-[10px] text-slate-500">{item.reason}</div>
                                                    <div className={cn("text-xs font-bold", item.score >= 30 ? "text-red-400" : "text-orange-400")}>+{item.score} Puan</div>
                                                </div>
                                            </div>
                                        ))}
                                        {results.riskBreakdown.length === 0 && (
                                            <div className="text-center py-6 text-xs text-slate-600">
                                                Aktif tehdit ağırlığı bulunamadı.
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* API Status Grid */}
                                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl">
                                    <h4 className="text-white text-sm font-bold flex items-center gap-2 mb-4">
                                        <Database className="h-4 w-4 text-cyan-400" /> Veri Kaynakları
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {Object.entries(results.metadata || {}).filter(([k]) => k.endsWith('Active')).map(([k, v]) => (
                                            <div key={k} className="flex items-center gap-2 text-[10px] text-slate-400">
                                                {v ? <CheckCircle2 className="h-3 w-3 text-green-500" /> : <div className="h-3 w-3 rounded-full bg-slate-800" />}
                                                {k.replace('Active', '').toUpperCase()}
                                            </div>
                                        ))}
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

                                {/* Censys Services Block */}
                                {results.censys && results.censys.services.length > 0 && (
                                    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
                                        <h4 className="text-white font-bold flex items-center gap-2 mb-6">
                                            <Server className="h-5 w-5 text-blue-400" /> Censys ile Keşfedilen Servisler
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {results.censys.services.map((svc, i) => (
                                                <div key={i} className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                                    <span className="text-xs text-slate-300 font-mono">{svc}</span>
                                                </div>
                                            ))}
                                        </div>
                                        {results.censys.adminPageFound && (
                                            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3">
                                                <AlertTriangle className="h-5 w-5 text-red-400" />
                                                <span className="text-xs text-red-200">
                                                    <strong>Shadow IT Uyarısı:</strong> Censys bu hedefte potansiyel bir Yönetim Paneli (Admin/Login) tespit etti.
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* SecurityTrails Timeline Block */}
                                {results.securityTrails && (
                                    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
                                        <h4 className="text-white font-bold flex items-center gap-2 mb-6">
                                            <History className="h-5 w-5 text-purple-400" /> DNS & IP Geçmişi (SecurityTrails)
                                        </h4>
                                        <div className="relative border-l border-slate-800/50 ml-3 space-y-6">
                                            {results.securityTrails.history.map((h, i) => (
                                                <div key={i} className="relative pl-6">
                                                    <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-800 border block border-slate-600" />
                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                                        <span className="text-sm text-cyan-400 font-mono font-bold">{h.ip}</span>
                                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                                            <Calendar className="h-3 w-3" />
                                                            {h.date}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6 pt-6 border-t border-slate-800">
                                            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Alt Alan Adları (Subdomains)</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {results.securityTrails.subdomains.map((sub, i) => (
                                                    <span key={i} className="text-[10px] text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800/50 hover:border-cyan-500/30 transition-colors">
                                                        {sub}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

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

                        {/* ACKLog Flow Section */}
                        <div className="p-8 space-y-8 bg-slate-950">
                            <div>
                                <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">ACKLogic Koruma Stratejisi</h4>
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

            {/* Wiki Article Promo */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-blue-950/30 border border-blue-500/20 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 group hover:border-blue-500/40 transition-all"
            >
                <div className="bg-blue-500/10 p-4 rounded-full group-hover:bg-blue-500/20 transition-colors">
                    <Globe className="h-8 w-8 text-blue-400" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        Dijital Ayak İzi ve Saldırı Yüzeyi Yönetimi
                    </h3>
                    <p className="text-slate-400 text-sm mb-0">
                        Hackerlar sizi nasıl görüyor? EASM (External Attack Surface Management) ve açık port risklerini detaylı makalemizde inceleyin.
                    </p>
                </div>
                <a
                    href="/wiki/dijital-ayak-izi-ve-saldiri-yuzeyi-yonetimi"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap shadow-lg shadow-blue-900/20"
                >
                    Makaleyi Oku <ArrowRight className="h-4 w-4" />
                </a>
            </motion.div>

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

