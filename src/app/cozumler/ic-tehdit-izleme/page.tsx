
import { Metadata } from 'next';
import { InsiderThreatClient } from './client';

export const metadata: Metadata = {
    title: 'İç Tehdit İzleme & UEBA | Insider Threat Monitoring',
    description: 'Çalışanlarınızın davranışsal anormalliklerini, yetki suistimallerini ve veri sızıntılarını Acklog UEBA ile tespit edin.',
    alternates: {
        canonical: 'https://logsiem.com/cozumler/ic-tehdit-izleme',
    },
    openGraph: {
        title: 'İç Tehdit İzleme & UEBA | ACKLOG SIEM',
        description: 'Çalışanlarınızın davranışsal anormalliklerini, yetki suistimallerini ve veri sızıntılarını Acklog UEBA ile tespit edin.',
        url: 'https://logsiem.com/cozumler/ic-tehdit-izleme',
        type: 'website',
    },
};

export default function InsiderThreatPage() {
    return <InsiderThreatClient />;
}
