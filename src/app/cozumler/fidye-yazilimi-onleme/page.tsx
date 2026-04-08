
import { Metadata } from 'next';
import { RansomwareClient } from './client';

export const metadata: Metadata = {
    title: 'Fidye Yazılımı Önleme & Tespiti | Ransomware Protection',
    description: 'Acklog Honeyfile ve Entropi analizi teknolojileri ile fidye yazılımlarını (Ransomware) dosyalarınız şifrelenmeden tespit edin ve durdurun.',
    alternates: {
        canonical: 'https://logsiem.com/cozumler/fidye-yazilimi-onleme',
    },
    openGraph: {
        title: 'Fidye Yazılımı Önleme & Tespiti | ACKLOG SIEM',
        description: 'Acklog Honeyfile ve Entropi analizi teknolojileri ile fidye yazılımlarını (Ransomware) dosyalarınız şifrelenmeden tespit edin ve durdurun.',
        url: 'https://logsiem.com/cozumler/fidye-yazilimi-onleme',
        type: 'website',
    },
};

export default function RansomwarePage() {
    return <RansomwareClient />;
}
