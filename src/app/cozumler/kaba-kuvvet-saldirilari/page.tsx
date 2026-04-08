
import { Metadata } from 'next';
import { WithContext, FAQPage } from 'schema-dts';
import { BruteForceClient } from './client';

export const metadata: Metadata = {
    title: 'Kaba Kuvvet Saldırı Koruması | Brute Force Protection',
    description: 'Acklog GeoIP ve Botnet analizi ile şifre deneme (Brute Force) saldırılarını ve kimlik hırsızlığı girişimlerini engelleyin.',
    alternates: {
        canonical: 'https://logsiem.com/cozumler/kaba-kuvvet-saldirilari',
    },
    openGraph: {
        title: 'Kaba Kuvvet Saldırı Koruması | ACKLOG SIEM',
        description: 'Acklog GeoIP ve Botnet analizi ile şifre deneme (Brute Force) saldırılarını ve kimlik hırsızlığı girişimlerini engelleyin.',
        url: 'https://logsiem.com/cozumler/kaba-kuvvet-saldirilari',
        type: 'website',
    },
};

export default function BruteForcePage() {
    return <BruteForceClient />;
}
