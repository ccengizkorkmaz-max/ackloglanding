
import { Metadata } from 'next';
import { BruteForceClient } from './client';

export const metadata: Metadata = {
    title: 'Kaba Kuvvet Saldırı Koruması | Brute Force Protection',
    description: 'Acklog GeoIP ve Botnet analizi ile şifre deneme (Brute Force) saldırılarını ve kimlik hırsızlığı girişimlerini engelleyin.',
};

export default function BruteForcePage() {
    return <BruteForceClient />;
}
