"use client"

import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { motion, AnimatePresence } from 'framer-motion'
import { HardDrive, Server, Zap, ChevronRight, FileText } from 'lucide-react'
import { cn } from "@/lib/utils"
import { sendCostAnalysisEmail } from '@/app/maliyet-hesaplayici/actions'

export default function CostCalculator() {
    const [dailyLogGB, setDailyLogGB] = useState(50)
    const [retentionMonths, setRetentionMonths] = useState(12)
    const [showForm, setShowForm] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [formData, setFormData] = useState({
        companySize: '50-250',
        firewall: '',
        deployment: 'Cloud',
        email: ''
    })

    // Calculation Logic
    const days = retentionMonths * 30
    const rawTotalGB = dailyLogGB * days
    const compressedTotalGB = rawTotalGB / 5 // 5:1 compression
    const rawTotalTB = (rawTotalGB / 1024).toFixed(2)
    const compressedTotalTB = (compressedTotalGB / 1024).toFixed(2)
    const iops = Math.round(dailyLogGB * 15) // Estimated IOPS

    // Recommendation Logic
    const getRecommendation = () => {
        if (dailyLogGB < 50) return {
            cpu: '4 Core', ram: '8GB RAM',
            budgetLow: 500, budgetHigh: 1000,
            cloudCost: 1500, onPremCost: 800
        }
        if (dailyLogGB < 200) return {
            cpu: '8 Core', ram: '16GB RAM',
            budgetLow: 1000, budgetHigh: 2500,
            cloudCost: 3500, onPremCost: 1800
        }
        if (dailyLogGB < 500) return {
            cpu: '16 Core', ram: '32GB RAM',
            budgetLow: 2500, budgetHigh: 5000,
            cloudCost: 7500, onPremCost: 4000
        }
        return {
            cpu: '32 Core', ram: '64GB RAM',
            budgetLow: 5000, budgetHigh: 10000,
            cloudCost: 15000, onPremCost: 8500
        }
    }

    const rec = getRecommendation()
    const savingsAmount = Math.round(rec.budgetLow * 0.43) // Approx 30% reduction calculation reversed

    // Chart Data
    const data = [
        {
            name: 'Depolama Alanı (TB)',
            raw: parseFloat(rawTotalTB),
            compressed: parseFloat(compressedTotalTB),
        },
    ]

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const result = await sendCostAnalysisEmail({
                ...formData,
                dailyLogGB,
                retentionMonths,
                estimatedBudget: `$${rec.budgetLow} - $${rec.budgetHigh}`,
                recommendedHardware: `${rec.cpu} / ${rec.ram}`
            })

            if (result.success) {
                setShowSuccessModal(true) // Open modal instead of alert
                setShowForm(false)
            } else {
                alert("Bir hata oluştu: " + result.message)
            }
        } catch (error) {
            console.error("Form submission error:", error)
            alert("Beklenmedik bir hata oluştu.")
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
                {/* Left Panel: Inputs */}
                <div className="lg:col-span-5 space-y-6">
                    <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-blue-400 flex items-center gap-2">
                                <Server className="h-5 w-5" />
                                Parametreler
                            </CardTitle>
                            <CardDescription className="text-slate-400">
                                Log hacminizi ve saklama sürenizi belirleyin.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <Label className="text-white text-base">Günlük Log Hacmi</Label>
                                    <span className="text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-md">{dailyLogGB} GB</span>
                                </div>
                                <Slider
                                    defaultValue={[50]}
                                    max={1000}
                                    min={1}
                                    step={1}
                                    value={[dailyLogGB]}
                                    onValueChange={(value) => setDailyLogGB(value[0])}
                                    className="py-4"
                                />
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>1 GB</span>
                                    <span>1000 GB</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <Label className="text-white text-base">Saklama Süresi</Label>
                                    <span className="text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-md">{retentionMonths} Ay</span>
                                </div>
                                <Slider
                                    defaultValue={[12]}
                                    max={24}
                                    min={1}
                                    step={1}
                                    value={[retentionMonths]}
                                    onValueChange={(value) => setRetentionMonths(value[0])}
                                    className="py-4"
                                />
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>1 Ay</span>
                                    <span>24 Ay</span>
                                </div>
                                {retentionMonths >= 24 && (
                                    <p className="text-xs text-green-500 flex items-center gap-1">
                                        <Zap className="h-3 w-3" /> 5651 Kanunu ile tam uyumlu (2 Yıl).
                                    </p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6">
                        <h4 className="text-slate-300 font-semibold mb-3 flex items-center gap-2">
                            <FileText className="h-4 w-4 text-blue-500" /> Neden Önemli?
                        </h4>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">
                            Acklog'un gelişmiş sıkıştırma algoritmaları sayesinde, rakiplere göre 5 kata kadar daha az disk alanına ihtiyaç duyarsınız. Acklog daha az donanım kaynağı ile daha fazla iş yapar.
                        </p>

                        {/* Recommendation Panel */}
                        <div className="bg-slate-950 rounded-lg p-4 border border-blue-500/20 shadow-lg shadow-blue-900/10">
                            <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <Zap className="h-4 w-4" /> Altyapı Tavsiye Paneli
                            </h4>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                                    <span className="text-slate-400 text-sm">Önerilen Donanım:</span>
                                    <span className="text-white font-bold">{rec.cpu} / {rec.ram}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                                    <span className="text-slate-400 text-sm">Yaklaşık Donanım Bütçesi:</span>
                                    <span className="text-white font-bold">${rec.budgetLow} - ${rec.budgetHigh}</span>
                                </div>

                                <div className="bg-green-500/10 p-3 rounded border border-green-500/20">
                                    <p className="text-xs text-green-400 leading-snug">
                                        <span className="font-bold">Tasarruf Analizi:</span> ACKLog'un özel mimarisi sayesinde, standart SIEM'lere göre donanım ihtiyacınızı %30 daha düşük tutarak toplamda <span className="underline decoration-green-500/50 decoration-2">${savingsAmount}+</span> tasarruf edersiniz.
                                    </p>
                                </div>

                                {/* Comparison Table */}
                                <div className="mt-4 pt-2">
                                    <h5 className="text-[10px] uppercase text-slate-500 font-bold mb-2">Maliyet Karşılaştırması (Yıllık)</h5>
                                    <div className="grid grid-cols-3 gap-2 text-xs text-center font-medium">
                                        <div className="bg-slate-900 p-2 rounded text-slate-400">Platform</div>
                                        <div className="bg-slate-900 p-2 rounded text-slate-400">Standart SIEM</div>
                                        <div className="bg-blue-900/20 p-2 rounded text-blue-400 border border-blue-500/20">ACKLog</div>

                                        <div className="bg-slate-800 p-2 rounded text-slate-300">Bulut (Cloud)</div>
                                        <div className="bg-slate-800 p-2 rounded text-slate-300">${rec.cloudCost}</div>
                                        <div className="bg-blue-900/10 p-2 rounded text-blue-300 border border-blue-500/10">${Math.round(rec.cloudCost * 0.7)}</div>

                                        <div className="bg-slate-800 p-2 rounded text-slate-300">On-Prem</div>
                                        <div className="bg-slate-800 p-2 rounded text-slate-300">${rec.onPremCost}</div>
                                        <div className="bg-blue-900/10 p-2 rounded text-blue-300 border border-blue-500/10">${Math.round(rec.onPremCost * 0.7)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Results & Chart */}
                <div className="lg:col-span-7 space-y-6">
                    <Card className="bg-gradient-to-br from-slate-900 to-slate-950 border-slate-800 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-32 bg-blue-600/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <CardHeader>
                            <CardTitle className="text-white">Tahmini İhtiyaç Analizi</CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800/50 flex flex-col justify-center items-center text-center">
                                    <span className="text-slate-500 text-sm mb-2 uppercase tracking-wider font-semibold">Net Depolama</span>
                                    <div className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                                        {compressedTotalTB} <span className="text-xl text-slate-500 font-normal">TB</span>
                                    </div>
                                    <div className="text-xs text-green-500 mt-2 font-medium bg-green-500/10 px-2 py-1 rounded">
                                        ACKLog ile Sıkıştırılmış
                                    </div>
                                </div>

                                <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-800/50 flex flex-col justify-center items-center text-center">
                                    <span className="text-slate-500 text-sm mb-2 uppercase tracking-wider font-semibold">Ham Veri</span>
                                    <div className="text-4xl md:text-5xl font-black text-slate-600 tracking-tighter decoration-slate-700 line-through decoration-2">
                                        {rawTotalTB} <span className="text-xl text-slate-700 font-normal">TB</span>
                                    </div>
                                    <div className="text-xs text-slate-500 mt-2 font-medium">
                                        Sıkıştırma Olmadan
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
                                    <span className="text-slate-500 text-xs mb-1">Tahmini IOPS</span>
                                    <span className="text-white font-bold text-lg">{iops}</span>
                                </div>
                                <div className="flex flex-col items-center bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
                                    <span className="text-slate-500 text-xs mb-1">Tasarruf Oranı</span>
                                    <span className="text-green-500 font-bold text-lg">%80</span>
                                </div>
                            </div>

                            <div className="h-[250px] w-full mt-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        layout="vertical"
                                        data={data}
                                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#1e293b" />
                                        <XAxis type="number" stroke="#64748b" fontSize={12} tickFormatter={(value) => `${value} TB`} />
                                        <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={12} width={100} hide />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#fff' }}
                                            itemStyle={{ color: '#fff' }}
                                            cursor={{ fill: 'transparent' }}
                                        />
                                        <Legend />
                                        <Bar dataKey="raw" name="Sıkıştırılmamış (Ham)" fill="#475569" radius={[0, 4, 4, 0]} barSize={32} />
                                        <Bar dataKey="compressed" name="ACKLog (Sıkıştırılmış)" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={32} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>

                        <CardFooter className="bg-slate-950/30 p-6 flex justify-end">
                            {!showForm ? (
                                <Button
                                    onClick={() => setShowForm(true)}
                                    className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20"
                                >
                                    Detaylı Maliyet Analizi Al <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            ) : (
                                <Button variant="ghost" className="text-slate-400" disabled>
                                    Analiz Formu Açıldı
                                </Button>
                            )}
                        </CardFooter>
                    </Card>

                    {/* Analysis Form */}
                    <AnimatePresence>
                        {showForm && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                            >
                                <Card className="bg-slate-900/80 border-slate-800 border-t-4 border-t-blue-500">
                                    <CardHeader>
                                        <CardTitle className="text-white">Kişiselleştirilmiş Rapor</CardTitle>
                                        <CardDescription className="text-slate-400">
                                            Size özel donanım önerisi ve maliyet tablosu için lütfen formu doldurun.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <form onSubmit={handleFormSubmit} className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label className="text-slate-300">Şirket Ölçeği</Label>
                                                    <select
                                                        className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                                        value={formData.companySize}
                                                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                                                    >
                                                        <option value="1-50">1-50 Çalışan</option>
                                                        <option value="50-250">50-250 Çalışan</option>
                                                        <option value="250+">250+ Çalışan</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-slate-300">Kurulum Tercihi</Label>
                                                    <div className="flex gap-4 pt-2">
                                                        {['On-prem', 'Cloud', 'Hybrid'].map((type) => (
                                                            <label key={type} className="flex items-center gap-2 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name="deployment"
                                                                    value={type}
                                                                    checked={formData.deployment === type}
                                                                    onChange={(e) => setFormData({ ...formData, deployment: e.target.value })}
                                                                    className="text-blue-500 focus:ring-blue-500 accent-blue-500"
                                                                />
                                                                <span className="text-sm text-slate-300">{type}</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-slate-300">Mevcut Firewall Markası</Label>
                                                    <Input
                                                        className="bg-slate-950 border-slate-800 text-white"
                                                        placeholder="Örn: Fortinet, Palo Alto..."
                                                        value={formData.firewall}
                                                        onChange={(e) => setFormData({ ...formData, firewall: e.target.value })}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label className="text-slate-300">Kurumsal E-posta</Label>
                                                    <Input
                                                        type="email"
                                                        className="bg-slate-950 border-slate-800 text-white"
                                                        placeholder="ad.soyad@sirket.com"
                                                        required
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <Button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white mt-4">
                                                Raporu Gönder
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Success Modal */}
            <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
                <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-green-500">
                            <Zap className="h-5 w-5" /> Başarılı!
                        </DialogTitle>
                        <DialogDescription className="text-slate-400 text-base pt-2">
                            Maliyet analizi talebiniz başarıyla alındı. Detaylı rapor e-posta adresinize gönderildi.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-center mt-4">
                        <Button
                            type="button"
                            className="bg-blue-600 hover:bg-blue-500 text-white w-full sm:w-auto min-w-[120px]"
                            onClick={() => setShowSuccessModal(false)}
                        >
                            Tamam
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
