
import { Metadata } from 'next';
import { AuditClient } from './client';

export const metadata: Metadata = {
    title: 'Adli Bilişim & Denetim Logları | Audit & Forensic Investigation',
    description: 'Log bütünlüğü, zaman damgası ve değiştirilemez arşivleme ile KVKK, ISO 27001 ve 5651 denetimlerine hazır olun.',
};

export default function AuditPage() {
    return <AuditClient />;
}
