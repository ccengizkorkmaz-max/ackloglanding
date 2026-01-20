'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CheckCircle2, AlertTriangle, XCircle, ArrowRight, Loader2, BookOpen } from 'lucide-react'
import { handleSaveLead } from '@/app/uyumluluk-testi/actions'
import { DemoModal } from './demo-modal'

// Questions Data
const questions = [
    {
        id: 1,
        title: "5651 Sayılı Kanun (Yasal Zorunluluklar)",
        question: "Zaman Damgalı Loglama",
        description: "Şirketinizdeki internet çıkış logları (DHCP ve NAT logları), TÜBİTAK veya yetkili makamların zaman damgasıyla imzalanarak değiştirilemez şekilde saklanıyor mu?",
        points: 10
    },
    {
        id: 2,
        title: "5651 Sayılı Kanun (Yasal Zorunluluklar)",
        question: "Misafir/Hotspot Yönetimi",
        description: "Misafirlerinize veya taşeronlarınıza sunduğunuz kablosuz ağ (Wi-Fi) erişimlerinde, kullanıcıları T.C. Kimlik No veya SMS doğrulaması ile kayıt altına alıyor musunuz?",
        points: 10
    },
    {
        id: 3,
        title: "5651 Sayılı Kanun (Yasal Zorunluluklar)",
        question: "Geriye Dönük Saklama",
        description: "Yasa gereği internet trafik loglarınızı en az 2 yıl boyunca, gizliliğini ve bütünlüğünü koruyacak şekilde arşivliyor musunuz?",
        points: 10
    },
    {
        id: 4,
        title: "KVKK Teknik Tedbirler (Veri Güvenliği)",
        question: "Merkezi Log Yönetimi",
        description: "Sunucu, firewall, switch ve veritabanı gibi farklı noktalardan gelen logları tek bir merkezde (SIEM) topluyor musunuz?",
        points: 10
    },
    {
        id: 5,
        title: "KVKK Teknik Tedbirler (Veri Güvenliği)",
        question: "Yetkili Kullanıcı İzleme",
        description: "Sistem yöneticilerinin (Admin) sistemler üzerindeki hareketlerini (dosya silme, yetki değiştirme vb.) özel olarak takip edip raporlayabiliyor musunuz?",
        points: 10
    },
    {
        id: 6,
        title: "KVKK Teknik Tedbirler (Veri Güvenliği)",
        question: "Kritik Veri Erişimi",
        description: "Kişisel verilerin tutulduğu dosya veya veritabanlarına kimin, ne zaman eriştiğine dair detaylı 'Erişim Logları' tutuluyor mu?",
        points: 10
    },
    {
        id: 7,
        title: "KVKK Teknik Tedbirler (Veri Güvenliği)",
        question: "Anlık Alarm Mekanizması",
        description: "Mesai saatleri dışında sisteme giriş yapılması veya toplu veri indirilmesi gibi şüpheli durumlarda BT ekibine anlık uyarı/SMS gidiyor mu?",
        points: 10
    },
    {
        id: 8,
        title: "İzlenebilirlik ve Müdahale",
        question: "Korelasyon Analizi",
        description: "Farklı cihazlardan gelen loglar birbiriyle ilişkilendirilerek (Korelasyon) karmaşık bir saldırı girişimi tespit edilebiliyor mu?",
        points: 10
    },
    {
        id: 9,
        title: "İzlenebilirlik ve Müdahale",
        question: "Kullanıcı Hareket Analizi (UBA)",
        description: "Kullanıcıların alışılmışın dışındaki davranışları (farklı bir lokasyondan giriş vb.) sistem tarafından otomatik olarak fark ediliyor mu?",
        points: 10
    },
    {
        id: 10,
        title: "İzlenebilirlik ve Müdahale",
        question: "Olay Müdahale ve Raporlama",
        description: "Bir veri ihlali durumunda, ihlalin nereden başladığını ve hangi verilerin etkilendiğini geriye dönük loglardan 24 saat içinde tespit edebilecek altyapınız var mı?",
        points: 10
    }
]

export default function ComplianceTest() {
    const [currentStep, setCurrentStep] = useState(0)
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [score, setScore] = useState(0)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

    // Lead Form State
    const [formData, setFormData] = useState({
        full_name: '',
        company: '',
        title: '',
        email: ''
    })

    const handleAnswer = (answer: 'Evet' | 'Hayır' | 'Kısmen') => {
        let points = 0
        if (answer === 'Evet') points = 10
        if (answer === 'Kısmen') points = 5

        setAnswers(prev => ({ ...prev, [currentStep]: answer }))
        setScore(prev => prev + points)

        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 300)
        } else {
            setIsAnalyzing(true)
            setTimeout(() => {
                setIsAnalyzing(false)
                setShowForm(true)
            }, 2000)
        }
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsAnalyzing(true) // Re-use loading state

        const data = new FormData()
        data.append('full_name', formData.full_name)
        data.append('company', formData.company)
        data.append('title', formData.title)
        data.append('email', formData.email)
        data.append('score', score.toString())
        data.append('answers', JSON.stringify(answers))

        const result = await handleSaveLead(null, data)

        if (result?.success) {
            setShowForm(false)
            setShowResult(true)
        } else {
            alert('Bir hata oluştu. Lütfen tekrar deneyin.')
        }
        setIsAnalyzing(false)
    }

    const getRiskLevel = () => {
        if (score >= 80) return { label: 'Yüksek Uyum (Düşük Risk)', color: 'text-green-500', bg: 'bg-green-500/10', icon: CheckCircle2 }
        if (score >= 50) return { label: 'Orta Uyum (Orta Risk)', color: 'text-yellow-500', bg: 'bg-yellow-500/10', icon: AlertTriangle }
        return { label: 'Düşük Uyum (Yüksek Risk)', color: 'text-red-500', bg: 'bg-red-500/10', icon: XCircle }
    }

    const risk = getRiskLevel()

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl">

                {/* Header Section - Only visible on quiz start */}
                {!showResult && !showForm && currentStep === 0 && !isAnalyzing && (
                    <div className="text-center mb-10 animate-in slide-in-from-bottom-5 duration-700">
                        <h1 className="text-2xl md:text-3xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 tracking-tight leading-tight">
                            5651 ve KVKK Log Uyumluluğunuzu 2 Dakikada Test Edin
                        </h1>
                        <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl mx-auto">
                            Şirketinizin dijital varlıkları yasal mevzuata ne kadar hazır? ACKLog tarafından geliştirilen interaktif Log Uyumluluk Analizi ile; 5651 Sayılı Kanun ve KVKK Teknik Tedbirler Rehberi kapsamındaki eksiklerinizi anında tespit edin. Zaman damgalı loglamadan veri erişim güvenliğine kadar 10 kritik noktada altyapınızı sorgulayın, olası bir denetimde karşılaşabileceğiniz riskleri minimize edin. Karmaşık siber güvenlik raporları yerine, size özel hazırlanan anlaşılır Risk Skorunuzu hemen görün ve yasal uyumluluk sürecinde bir adım öne geçin.
                        </p>
                    </div>
                )}

                {/* Progress Bar */}
                {!showResult && !showForm && !isAnalyzing && (
                    <div className="mb-8">
                        <div className="flex justify-between text-xs text-slate-400 mb-2 uppercase tracking-widest font-semibold">
                            <span>İlerleme</span>
                            <span>{Math.round(((currentStep) / questions.length) * 100)}%</span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-blue-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${((currentStep) / questions.length) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {/* Question View */}
                    {!isAnalyzing && !showForm && !showResult && (
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl shadow-2xl backdrop-blur-sm"
                        >
                            <div className="text-blue-400 text-sm font-semibold mb-2 tracking-wide">
                                {questions[currentStep].title}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                                {questions[currentStep].question}
                            </h2>
                            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                {questions[currentStep].description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Button
                                    variant="outline"
                                    className="h-14 text-lg border-slate-700 hover:bg-green-500/20 hover:text-green-400 hover:border-green-500 transition-all font-normal"
                                    onClick={() => handleAnswer('Evet')}
                                >
                                    Evet
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-14 text-lg border-slate-700 hover:bg-yellow-500/20 hover:text-yellow-400 hover:border-yellow-500 transition-all font-normal"
                                    onClick={() => handleAnswer('Kısmen')}
                                >
                                    Kısmen
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-14 text-lg border-slate-700 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500 transition-all font-normal"
                                    onClick={() => handleAnswer('Hayır')}
                                >
                                    Hayır
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {/* Analyzing View */}
                    {isAnalyzing && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center flex flex-col items-center justify-center py-12"
                        >
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                                <Loader2 className="h-16 w-16 text-blue-500 animate-spin relative z-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Analiz Yapılıyor...</h3>
                            <p className="text-slate-400">Yanıtlarınız KVKK ve 5651 mevzuatına göre işleniyor.</p>
                        </motion.div>
                    )}

                    {/* Form View */}
                    {showForm && !isAnalyzing && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-md mx-auto"
                        >
                            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Raporunuz Hazır</h3>
                            <p className="text-slate-400 mb-6 text-sm">Detaylı uyumluluk raporunuzu görüntülemek için bilgilerinizi tamamlayın.</p>

                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-slate-500 font-bold tracking-wider">Ad Soyad</label>
                                    <input
                                        required
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-600"
                                        placeholder="Örn: Ahmet Yılmaz"
                                        value={formData.full_name}
                                        onChange={e => setFormData({ ...formData, full_name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-slate-500 font-bold tracking-wider">Şirket Adı</label>
                                    <input
                                        required
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-600"
                                        placeholder="Örn: ACKLog Teknoloji A.Ş."
                                        value={formData.company}
                                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-slate-500 font-bold tracking-wider">Ünvan</label>
                                    <input
                                        required
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-600"
                                        placeholder="Örn: IT Müdürü"
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase text-slate-500 font-bold tracking-wider">Kurumsal E-posta</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-slate-600"
                                        placeholder="ahmet@sirket.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg shadow-lg shadow-blue-500/20 mt-4 rounded-xl">
                                    Raporu Görüntüle <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </motion.div>
                    )}

                    {/* Result View */}
                    {showResult && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto text-center"
                        >
                            <div className="mb-8 flex justify-center">
                                <div className={cn("relative h-40 w-40 flex items-center justify-center rounded-full border-8", risk.color.replace('text', 'border'))}>
                                    <div className="absolute inset-0 rounded-full border-8 border-slate-800 -z-10 opacity-30"></div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-5xl font-black tracking-tighter text-white">{score}</span>
                                        <span className="text-xs uppercase font-bold text-slate-400 mt-1">Puan</span>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-white mb-2">{risk.label}</h2>
                            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                                {score >= 80
                                    ? "Harika! Sistemleriniz yasal mevzuata ve güvenlik standartlarına büyük ölçüde uyumlu görünüyor. Küçük iyileştirmelerle mükenmelliği yakalayabilirsiniz."
                                    : score >= 50
                                        ? "İyi bir başlangıç, ancak bazı kritik eksiklikler var. KVKK ve 5651 uyumluluğu için log yönetimi ve izleme süreçlerinizi güçlendirmeniz gerekiyor."
                                        : "Sisteminizde ciddi güvenlik ve uyumluluk riskleri tespit edildi. Olası cezai yaptırımlar ve veri ihlalleri için acilen aksiyon almalısınız."
                                }
                            </p>

                            <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 mb-8 text-left">
                                <h4 className="font-bold text-white mb-4 flex items-center">
                                    <risk.icon className={cn("mr-2 h-5 w-5", risk.color)} />
                                    ACKLog Size Nasıl Yardımcı Olabilir?
                                </h4>
                                <ul className="space-y-3 text-sm text-slate-300">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 mt-0.5 shrink-0" />
                                        <span>TÜBİTAK zaman damgalı loglama ile 5651 yasal uyumluluğunu otomatikleştirin.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 mt-0.5 shrink-0" />
                                        <span>SIEM ve Korelasyon motoru ile tehditleri saniyeler içinde tespit edin.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 mt-0.5 shrink-0" />
                                        <span>KVKK için özel hazırlanmış hazır rapor şablonlarını kullanın.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    variant="outline"
                                    className="h-12 px-8 border-slate-700 hover:bg-slate-800 text-white rounded-xl"
                                    onClick={() => setIsDemoModalOpen(true)}
                                >
                                    Uzmanımızla Görüşün
                                </Button>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
                <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
            </div>
            {/* Wiki Article Promo */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 bg-blue-950/30 border border-blue-500/20 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 group hover:border-blue-500/40 transition-all"
            >
                <div className="bg-blue-500/10 p-4 rounded-full group-hover:bg-blue-500/20 transition-colors">
                    <BookOpen xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-400" />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        Hibrit Altyapılarda Log Merkeziyeti
                    </h3>
                    <p className="text-slate-400 text-sm mb-0">
                        Neden uyumluluk testi yapmalısınız? 5651 ve KVKK kapsamında log yönetiminin önemini ve işletmenize sağladığı ROI'yi detaylı makalemizde inceleyin.
                    </p>
                </div>
                <a
                    href="/wiki/hibrit-altyapilarda-log-merkeziyeti"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap shadow-lg shadow-blue-900/20"
                >
                    Makaleyi Oku <ArrowRight className="h-4 w-4" />
                </a>
            </motion.div>
        </div>
    )
}
