import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import CostCalculator from '@/components/cost-calculator'

export const metadata: Metadata = {
    title: 'SIEM Depolama ve Maliyet Hesaplayıcı | ACKLog',
    description: 'Log hacminize göre disk alanı ve maliyet ihtiyacınızı hesaplayın. 5651 ve KVKK uyumluluğu için gereken altyapıyı öğrenin.',
    alternates: {
        canonical: '/maliyet-hesaplayici',
    },
}

export default function CostCalculatorPage() {
    return (
        <main className="min-h-screen bg-slate-950 flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center py-20">
                <div className="text-center mb-12 px-4">
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Log Depolama ve <span className="text-blue-500">Maliyet Hesaplayıcı</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Kurumunuzun log hacmine göre ne kadar disk alanına ihtiyacınız olduğunu ve ACKLog'un sıkıştırma teknolojisiyle ne kadar tasarruf edebileceğinizi hemen hesaplayın.
                    </p>
                </div>
                <CostCalculator />
            </div>
        </main>
    )
}
