import { Metadata } from 'next';
import { Shield, Lock, Activity, Users, DollarSign, Search, CheckCircle, AlertTriangle, FileText, Server } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SIEM Kullanım Senaryoları | Fidye Yazılımı, KVKK ve Tehdit Avcılığı',
    description: 'ACKLOG SIEM ile fidye yazılımı engelleme, KVKK loglama, içeriden gelen tehditleri tespit etme ve log yönetimi maliyetlerini düşürme çözümleri.',
};

const solutions = [
    {
        id: 'compliance',
        title: 'Kanuni Uyumluluk (Compliance)',
        icon: FileText,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        description: 'KVKK, 5651, ISO 27001 ve GDPR gibi regülasyonlara tam uyum sağlayın. Denetim süreçlerini stres olmaktan çıkarın.',
        link: '/cozumler/denetim-ve-inceleme',
        features: [
            'Otomatik Log İmzalama (Zaman Damgası)',
            'Hazır Denetçi Raporları',
            'Değiştirilemez (Immutable) Log Saklama',
            'Uzun Süreli Arşivleme'
        ]
    },
    {
        id: 'ransomware',
        title: 'Fidye Yazılımı Tespiti',
        icon: Lock,
        color: 'text-red-500',
        bg: 'bg-red-500/10',
        description: 'Dosya sunucularınızdaki şüpheli şifreleme hareketlerini saniyeler içinde tespit edin ve saldırıyı başlamadan durdurun.',
        link: '/cozumler/fidye-yazilimi-onleme',
        features: [
            'Dosya Uzantısı Anormallik Tespiti',
            'Toplu Dosya Değişiklik Alarmı',
            'Honeyfile (Tuzak Dosya) Teknolojisi',
            'Otomatik Kullanıcı Engelleme'
        ]
    },
    {
        id: 'insider',
        title: 'İçeriden Gelen Tehditler',
        icon: Users,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        description: 'En büyük tehdit bazen içeriden gelir. Çalışanlarınızın normal dışı davranışlarını yapay zeka ile analiz edin (UEBA).',
        link: '/cozumler/ic-tehdit-izleme',
        features: [
            'Mesai Dışı Erişim Tespiti',
            'Yetkisiz Veri İndirme Alarmları',
            'VPN ve Hassas Sistem Erişimi İzleme',
            'Kullanıcı Davranış Analizi (UEBA)'
        ]
    },
    {
        id: 'bruteforce',
        title: 'Kaba Kuvvet (Brute Force)',
        icon: Shield,
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
        description: 'Sistemlerinize yönelik şifre deneme saldırılarını ve kimlik hırsızlığı girişimlerini anında yakalayın.',
        link: '/cozumler/kaba-kuvvet-saldirilari',
        features: [
            'Başarısız Oturum Açma Analizi',
            'Coğrafi Konum (GeoIP) Kontrolü',
            'Botnet ve Tor Ağı Tespiti',
            'Active Directory Entegrasyonu'
        ]
    },
    {
        id: 'cost',
        title: 'Log Maliyet Optimizasyonu',
        icon: DollarSign,
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        description: 'SIEM lisans ve donanım maliyetleri altında ezilmeyin. %80 sıkıştırma ile daha az kaynakla daha çok iş yapın.',
        link: '/cozumler/log-maliyet-optimizasyonu',
        features: [
            'EPS Bazlı Değil, Performans Bazlı',
            'Soğuk ve Sıcak Veri Katmanlama',
            '%80Disk Alanı Tasarrufu',
            'Gereksiz Logları Filtreleme'
        ]
    },
    {
        id: 'hunting',
        title: 'Tehdit Avcılığı (Threat Hunting)',
        icon: Search,
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10',
        description: 'Saldırının gelmesini beklemeyin. Gelişmiş sorgu yetenekleri ile ağınızdaki sessiz tehditleri avlayın.',
        link: '/cozumler/tehdit-algilama',
        features: [
            'Saniyeler İçinde Petabyte Sorgulama',
            'MITRE ATT&CK Korelasyonu',
            'Görsel Ağ Haritası',
            'Tehdit İstihbaratı Entegrasyonu'
        ]
    }
];

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-slate-950 pt-24">
            {/* Hero Section */}
            <section className="relative px-4 py-20 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Gerçek Sorunlar İçin <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Gerçek Çözümler</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                        ACKLOG sadece log toplamaz; işletmenizi yasal risklerden, siber saldırılardan ve gereksiz maliyetlerden korur.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/zafiyet-tarama" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all">
                            Sistemi Tara
                        </Link>
                        <Link href="#cozumler" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold transition-all border border-slate-700">
                            Çözümleri İncele
                        </Link>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section id="cozumler" className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution) => {
                            const CardContent = (
                                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all hover:shadow-2xl hover:shadow-blue-500/10 group h-full cursor-pointer">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${solution.bg}`}>
                                        <solution.icon className={`w-8 h-8 ${solution.color}`} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                        {solution.title}
                                    </h3>

                                    <p className="text-slate-400 mb-8 leading-relaxed">
                                        {solution.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );

                            return solution.link ? (
                                <Link href={solution.link} key={solution.id} className="block h-full">
                                    {CardContent}
                                </Link>
                            ) : (
                                <div key={solution.id} className="h-full">
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 border-t border-slate-900 bg-slate-900/50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Riskleri Yönetmeye Bugün Başlayın</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        Hangi çözümün size uygun olduğunu görmek için ücretsiz bir demo talep edebilir veya sisteminizi hemen şimdi tarayabilirsiniz.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-all">
                            Demo Talep Et
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
