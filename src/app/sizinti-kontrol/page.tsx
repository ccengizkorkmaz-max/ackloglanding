import { Metadata } from 'next'
import EmailLeakChecker from '@/components/email-leak-checker'

export const metadata: Metadata = {
    title: 'E-Posta Sızıntı Kontrolü (Email Leak Checker) | ACKLog',
    description: 'Kurumsal e-posta adresinizin Dark Web sızıntı veritabanlarında olup olmadığını saniyeler içinde kontrol edin.',
}

export default function EmailLeakPage() {
    return (
        <div className="min-h-screen bg-slate-950 py-20 px-4 md:px-8">
            <EmailLeakChecker />
        </div>
    )
}
