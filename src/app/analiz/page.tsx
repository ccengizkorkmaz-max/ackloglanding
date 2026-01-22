import SecurityAnalyzerComponent from '@/components/security-analyzer';
import { Navbar } from '@/components/navbar';

export const metadata = {
    title: 'Anlık Güvenlik Analizi | ACKLog',
    description: 'IP ve Alan Adı üzerinden anlık zafiyet ve itibar analizi yapın.',
    alternates: {
        canonical: '/analiz',
    },
};

export default function AnalizPage() {
    return (
        <main className="min-h-screen bg-slate-950 selection:bg-cyan-500/30">
            <Navbar />
            <div className="pt-32 px-4">
                <SecurityAnalyzerComponent />
            </div>
        </main>
    );
}
