
import { Metadata } from 'next';
import { AuditClient } from './client';

export const metadata: Metadata = {
    title: 'Adli Bilişim & Denetim Logları | Audit & Forensic Investigation',
    description: 'Log bütünlüğü, zaman damgası ve değiştirilemez arşivleme ile KVKK, ISO 27001 ve 5651 denetimlerine hazır olun.',
    alternates: {
        canonical: 'https://logsiem.com/cozumler/denetim-ve-inceleme',
    },
    openGraph: {
        title: 'Adli Bilişim & Denetim Logları | ACKLOG SIEM',
        description: 'Log bütünlüğü, zaman damgası ve değiştirilemez arşivleme ile KVKK, ISO 27001 ve 5651 denetimlerine hazır olun.',
        url: 'https://logsiem.com/cozumler/denetim-ve-inceleme',
        type: 'website',
    },
};

export default function AuditPage() {
    return <AuditClient />;
}
