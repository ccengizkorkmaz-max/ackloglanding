
import ComplianceTest from '@/components/compliance-test'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'KVKK & 5651 Uyumluluk Testi | ACKLog',
    description: 'Şirketinizin KVKK ve 5651 yasalarına uyumluluğunu 10 adımda test edin ve ücretsiz raporunuzu alın.',
    alternates: {
        canonical: '/uyumluluk-testi',
    },
}

export default function ComplianceTestPage() {
    return (
        <main className="min-h-screen">
            <ComplianceTest />
        </main>
    )
}
