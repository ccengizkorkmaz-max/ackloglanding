
import { Metadata } from 'next';
import { RansomwareClient } from './client';

export const metadata: Metadata = {
    title: 'Fidye Yazılımı Önleme & Tespiti | Ransomware Protection',
    description: 'Acklog Honeyfile ve Entropi analizi teknolojileri ile fidye yazılımlarını (Ransomware) dosyalarınız şifrelenmeden tespit edin ve durdurun.',
};

export default function RansomwarePage() {
    return <RansomwareClient />;
}
