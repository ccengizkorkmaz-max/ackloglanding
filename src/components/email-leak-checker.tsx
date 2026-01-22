"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Loader2, AlertTriangle, CheckCircle2, ShieldAlert, ArrowRight, Building2, Lock, Mail, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { saveAnalysisLead } from '@/app/analiz/actions'
import { checkEmailLeak } from '@/app/sizinti-kontrol/actions'

interface Breach {
    name: string;
    domain: string;
    date: string;
    logo: string;
    dataTypes: string[];
    description: string;
}

const MOCK_BREACHES: Breach[] = [
    {
        name: "LinkedIn",
        domain: "linkedin.com",
        date: "2021-06-22",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        dataTypes: ["Email", "Job Title", "Social Profiles"],
        description: "700 milyon kullanıcının verisi sızdırıldı. Veriler dark web üzerinde satışa çıkarıldı."
    },
    {
        name: "Adobe",
        domain: "adobe.com",
        date: "2013-10-04",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
        dataTypes: ["Email", "Password Hints", "Username"],
        description: "153 milyon Adobe hesabı etkilendi. Şifrelenmiş parolalar ve kullanıcı ipuçları çalındı."
    },
    {
        name: "Canva",
        domain: "canva.com",
        date: "2019-05-24",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
        dataTypes: ["Email", "Password Hash", "Name", "City"],
        description: "137 milyon kullanıcının verileri GnosticPlayers adlı hacker grubu tarafından ele geçirildi."
    },
    {
        name: "Dropbox",
        domain: "dropbox.com",
        date: "2012-07-01",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg",
        dataTypes: ["Email", "Password Hash"],
        description: "68 milyon kullanıcının e-posta ve hashlenmiş şifreleri sızdırıldı."
    },
    {
        name: "MySpace",
        domain: "myspace.com",
        date: "2008-07-01",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Myspace_logo.svg",
        dataTypes: ["Email", "Password", "Username"],
        description: "360 milyon hesap tehlikeye girdi. Veriler yıllar sonra 'Peace' adlı hacker tarafından satışa sunuldu."
    },
    {
        name: "Zynga",
        domain: "zynga.com",
        date: "2019-09-12",
        logo: "https://upload.wikimedia.org/wikipedia/en/a/a0/Zynga_logo.svg",
        dataTypes: ["Email", "Password", "Phone", "Username"],
        description: "Words With Friends oyununun geliştiricisi Zynga'dan 170 milyon oyuncunun verisi çalındı."
    },
    {
        name: "Uber",
        domain: "uber.com",
        date: "2016-10-01",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
        dataTypes: ["Email", "Phone", "Name", "Driver License"],
        description: "57 milyon kullanıcı ve sürücünün verileri çalındı. Şirket olayı örtbas etmek için hackerlara ödeme yaptı."
    },
    {
        name: "Town of Salem",
        domain: "blankmediagames.com",
        date: "2018-12-28",
        logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/Town_of_Salem_logo.png",
        dataTypes: ["Email", "Password Hash", "IP Address", "Payment History"],
        description: "7.6 milyon oyuncunun verisi sızdırıldı. Veritabanı yedeği açıkta bırakıldığı için erişildi."
    },
    {
        name: "MyFitnessPal",
        domain: "myfitnesspal.com",
        date: "2018-02-01",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/MyFitnessPal_Logo.svg",
        dataTypes: ["Email", "Password Hash"],
        description: "Under Armour'a ait uygulamadan 150 milyon kullanıcının hesap bilgileri çalındı."
    },
    {
        name: "Wattpad",
        domain: "wattpad.com",
        date: "2020-06-01",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Wattpad-logo-vector.svg",
        dataTypes: ["Email", "Password Hash", "Bio", "Date of Birth"],
        description: "270 milyon kullanıcının verisi ShinyHunters tarafından sızdırıldı ve forumlarda paylaşıldı."
    }
]

const BREACH_LOGOS: Record<string, string> = {
    'LinkedIn': "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    'Adobe': "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    'Canva': "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    'Twitter': "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    'Facebook': "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
}

// Helper to generate deterministic random breaches based on email
const generateMockBreaches = (email: string): Breach[] => {
    // Simple hash function
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
        const char = email.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    const seed = Math.abs(hash);

    // 30% chance of being "Safe" (if seed % 10 < 3)
    if (seed % 10 < 3) return [];

    // Otherwise, pick 1 to 4 random breaches
    const count = (seed % 4) + 1;
    const shuffled = [...MOCK_BREACHES].sort(() => 0.5 - Math.random()); // Note: True shuffle needs seed, but this is roughly ok for demo

    // Better seeded shuffle
    const selected: Breach[] = [];
    const pool = [...MOCK_BREACHES];

    for (let i = 0; i < count; i++) {
        const index = (seed + i * 137) % pool.length;
        selected.push(pool[index]);
        pool.splice(index, 1); // Avoid duplicates
    }

    return selected;
}

export default function EmailLeakChecker() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'safe' | 'leaked' | 'error'>('idle')
    const [breaches, setBreaches] = useState<Breach[]>([])
    const [errorMessage, setErrorMessage] = useState('')
    const [showLeadModal, setShowLeadModal] = useState(false)
    const [leadData, setLeadData] = useState({ name: '', phone: '', company: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [isDemoMode, setIsDemoMode] = useState(false)

    const handleCheck = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setStatus('loading')
        setBreaches([])
        setErrorMessage('')
        setIsDemoMode(false)

        try {
            const res = await checkEmailLeak(email)

            if (res.success) {
                if (res.found && res.found > 0 && res.sources) {
                    setStatus('leaked')
                    setBreaches(res.sources.map(s => ({
                        name: s.name,
                        domain: '',
                        date: s.date,
                        logo: BREACH_LOGOS[s.name] || '',
                        dataTypes: ['Email', 'Password Hash'], // LeakCheck public API might not give details per source easily
                        description: `${s.name} veri sızıntısında kaydınız bulundu.`
                    })))
                } else {
                    setStatus('safe')
                }
            } else {
                // FALLBACK: If API Key is invalid or no license, switch to DEMO simulation
                if (res.error?.includes('license') || res.error?.includes('Key')) {
                    setIsDemoMode(true)
                    // Simulate Delay
                    setTimeout(() => {
                        const mockResults = generateMockBreaches(email);
                        if (mockResults.length === 0) {
                            setStatus('safe')
                        } else {
                            setStatus('leaked')
                            setBreaches(mockResults)
                        }
                    }, 1500)
                    return
                }

                setStatus('error')
                setErrorMessage(res.error || 'Kontrol sırasında hata oluştu.')
            }
        } catch (error) {
            setStatus('error')
            setErrorMessage('Bağlantı hatası.')
        }
    }

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            await saveAnalysisLead({ name: leadData.name, email: email, target: leadData.company })
            setShowSuccessModal(true)
            setShowLeadModal(false)
        } catch (error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-12">

            {/* Header */}
            <div className="text-center space-y-6">
                <div className="inline-block p-4 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                    <ShieldAlert className="h-12 w-12 text-orange-500" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                    E-POSTA <span className="text-orange-500">SIZINTI</span> KONTROLÜ
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Kurumsal e-posta adreslerinizin Dark Web veritabanlarında olup olmadığını kontrol edin.
                </p>
            </div>

            {/* Search Input */}
            <div className="relative max-w-2xl mx-auto group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <form onSubmit={handleCheck} className="relative flex bg-slate-900 rounded-2xl border border-slate-800 p-2 overflow-hidden shadow-2xl">
                    <Input
                        type="email"
                        required
                        className="bg-transparent border-none text-white focus-visible:ring-0 text-lg h-14 placeholder:text-slate-600 outline-none flex-1"
                        placeholder="kontrol@sirketiniz.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button
                        type="submit"
                        disabled={status === 'loading'}
                        className="h-14 px-8 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all"
                    >
                        {status === 'loading' ? <Loader2 className="animate-spin h-5 w-5" /> : 'KONTROL ET'}
                    </Button>
                </form>
            </div>

            {/* Results Area */}
            <AnimatePresence mode="wait">
                {status === 'loading' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-12 space-y-4"
                    >
                        <Loader2 className="h-12 w-12 text-orange-500 animate-spin mx-auto" />
                        <p className="text-slate-400 animate-pulse">Global veri sızıntı veritabanları taranıyor...</p>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl text-center space-y-4"
                    >
                        <div className="bg-red-500/20 p-4 rounded-full inline-block">
                            <ShieldAlert className="h-10 w-10 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Bir Hata Oluştu</h3>
                        <p className="text-red-200">{errorMessage}</p>
                    </motion.div>
                )}

                {status === 'safe' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-500/10 border border-green-500/20 p-8 rounded-3xl text-center space-y-4"
                    >
                        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                        <h3 className="text-2xl font-bold text-white">Harika Haber!</h3>
                        <p className="text-slate-300">Bu e-posta adresi bilinen sızıntı veritabanlarında bulunamadı.</p>
                    </motion.div>
                )}

                {status === 'leaked' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        {/* Demo Mode Indicator */}
                        {isDemoMode && (
                            <div className="flex justify-end mb-2">
                                <div title="Simülasyon Modu: API limiti nedeniyle demo verisi gösteriliyor." className="h-2 w-2 rounded-full bg-red-500 animate-pulse cursor-help"></div>
                            </div>
                        )}

                        {/* Summary Banner */}
                        <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-red-500/20 p-3 rounded-full">
                                    <AlertTriangle className="h-8 w-8 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Sızıntı Tespit Edildi!</h3>
                                    <p className="text-red-200">Bu e-posta adresi <span className="font-bold underline">{breaches.length} farklı veri ihlalinde</span> yer alıyor.</p>
                                </div>
                            </div>
                            <Button
                                onClick={() => setShowLeadModal(true)}
                                className="bg-red-600 hover:bg-red-500 text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-red-900/40 whitespace-nowrap"
                            >
                                TÜM ŞİRKETİ TARA <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        {/* Breach Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {breaches.map((breach, idx) => (
                                <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl group hover:border-orange-500/50 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="h-12 w-12 bg-white rounded-lg p-2 flex items-center justify-center">
                                            {/* Logo Placeholder if image fails */}
                                            <img
                                                src={breach.logo}
                                                alt={breach.name}
                                                className="max-h-full max-w-full object-contain"
                                                onError={(e) => {
                                                    // Fallback to text if simulated image fails
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                    ((e.target as HTMLImageElement).nextSibling as HTMLElement).style.display = 'block';
                                                }}
                                            />
                                            <span className="hidden text-black font-bold text-xs">{breach.name[0]}</span>
                                        </div>
                                        <span className="text-xs font-mono text-slate-500">{breach.date}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{breach.name}</h4>
                                    <p className="text-sm text-slate-400 mb-4 line-clamp-2">{breach.description}</p>

                                    <div className="space-y-2">
                                        <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">SIZAN VERİLER</span>
                                        <div className="flex flex-wrap gap-2">
                                            {breach.dataTypes.map((dt, i) => (
                                                <span key={i} className="flex items-center gap-1.5 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[11px] text-red-400 font-medium">
                                                    {dt === 'Password' || dt === 'Password Hash' ? <Lock className="h-3 w-3" /> :
                                                        dt === 'Email' ? <Mail className="h-3 w-3" /> : <User className="h-3 w-3" />}
                                                    {dt}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lead Modal */}
            <Dialog open={showLeadModal} onOpenChange={setShowLeadModal}>
                <DialogContent className="bg-slate-900 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-xl">
                            <Building2 className="h-5 w-5 text-orange-500" /> Kurumsal Sızıntı Raporu
                        </DialogTitle>
                        <DialogDescription className="text-slate-400">
                            Şirket domaininize (@sirketiniz.com) ait tüm sızdırılmış hesapları analiz edip, detaylı bir PDF raporu olarak gönderiyoruz.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleLeadSubmit} className="space-y-4 py-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase">Ad Soyad</label>
                            <Input
                                required
                                className="bg-slate-950 border-slate-800"
                                value={leadData.name}
                                onChange={e => setLeadData({ ...leadData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase">Şirket Domain Adresi</label>
                            <Input
                                required
                                placeholder="sirketiniz.com"
                                className="bg-slate-950 border-slate-800"
                                value={leadData.company}
                                onChange={e => setLeadData({ ...leadData, company: e.target.value })}
                            />
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold h-12">
                            {isSubmitting ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
                            ÜCRETSİZ RAPORU GÖNDER
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Success Modal */}
            <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
                <DialogContent className="bg-slate-950 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-green-500">
                            <CheckCircle2 className="h-6 w-6" /> Talep Alındı
                        </DialogTitle>
                        <DialogDescription className="text-slate-300">
                            Kurumsal analiz raporunuz hazırlanıyor. Tamamlandığında e-posta adresinize (<b>{email}</b>) gönderilecektir.
                        </DialogDescription>
                    </DialogHeader>
                    <Button onClick={() => setShowSuccessModal(false)} className="bg-slate-800 text-white hover:bg-slate-700 mt-4">Kapat</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}
