
import { Metadata } from 'next';
import { InsiderThreatClient } from './client';

export const metadata: Metadata = {
    title: 'İç Tehdit İzleme & UEBA | Insider Threat Monitoring',
    description: 'Çalışanlarınızın davranışsal anormalliklerini, yetki suistimallerini ve veri sızıntılarını Acklog UEBA ile tespit edin.',
};

export default function InsiderThreatPage() {
    return <InsiderThreatClient />;
}
