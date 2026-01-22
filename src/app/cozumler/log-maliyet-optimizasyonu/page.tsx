
import { Metadata } from 'next';
import { LogCostClient } from './client';

export const metadata: Metadata = {
    title: 'Log Maliyet Optimizasyonu & Sıkıştırma | Cost Optimization',
    description: 'Acklog ile SIEM lisans ve depolama maliyetlerinizi %60 düşürün. Limitsiz EPS ve akıllı sıkıştırma teknolojisi ile tasarruf edin.',
};

export default function LogCostPage() {
    return <LogCostClient />;
}
