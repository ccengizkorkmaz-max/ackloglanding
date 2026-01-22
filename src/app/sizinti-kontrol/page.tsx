import { Metadata } from 'next'
import EmailLeakChecker from '@/components/email-leak-checker'

export const metadata: Metadata = {
    title: 'E-Posta Sızıntı Kontrolü (Email Leak Checker) | ACKLog',
    description: 'Kurumsal e-posta adresinizin Dark Web sızıntı veritabanlarında olup olmadığını saniyeler içinde kontrol edin.',
    alternates: {
        canonical: '/sizinti-kontrol',
    },
}

export default function EmailLeakPage() {
    return (
        <div className="min-h-screen bg-[#020617] relative overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            {/* Hero Section */}
            <div className="relative pt-24 pb-16 px-4 md:px-8">
                <EmailLeakChecker />

                {/* Stats Bar */}
                <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-8 bg-white/[0.02]">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">15 Milyar+</div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest">Sızan Kayıt</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-500 mb-1">Anlık</div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest">Veri Akışı</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-orange-500 mb-1">%100</div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest">Gizlilik</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">7/24</div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest">İzleme</div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <section className="py-20 relative border-t border-white/5 bg-slate-900/50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Nasıl Çalışır?</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            E-posta adresinizin güvenliğini 3 basit adımda kontrol ediyoruz. Hiçbir kayıt tutmuyor ve verilerinizi üçüncü taraflarla paylaşmıyoruz.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">1</div>
                            <h3 className="text-xl font-bold text-white mb-3 mt-4">Sorgulama</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                E-posta adresinizi girdiğiniz anda, sistemimiz bu adresi global sızıntı veritabanlarında (Dark Web, Pastebin, Dump siteleri) arar.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors group">
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-orange-900/20 group-hover:scale-110 transition-transform">2</div>
                            <h3 className="text-xl font-bold text-white mb-3 mt-4">Analiz</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Eğer bir eşleşme bulunursa, hangi platformdan (LinkedIn, Adobe vb.) ve hangi tarihte sızdırıldığı, hangi verilerin (Şifre, IP vb.) çalındığı analiz edilir.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors group">
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-green-900/20 group-hover:scale-110 transition-transform">3</div>
                            <h3 className="text-xl font-bold text-white mb-3 mt-4">Raporlama</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Sonuçlar anında ekranınıza yansıtılır. Eğer sızıntı varsa, şifrenizi değiştirmeniz ve 2FA (İki Faktörlü Doğrulama) açmanız için öneriler sunulur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-[#020617] border-t border-white/5">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-white mb-2">Sıkça Sorulan Sorular</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Bu işlem güvenli mi? Şifremi kaydediyor musunuz?",
                                a: "Kesinlikle güvenlidir. Sadece e-posta adresinizin 'hash'lenmiş (şifrelenmiş) özetini veritabanımızda sorgularız. Şifrenizi asla sormayız ve sorguladığınız e-posta adreslerini kaydetmeyiz."
                            },
                            {
                                q: "E-postam sızdırılmışsa ne yapmalıyım?",
                                a: "Hemen panik yapmayın. Öncelikle o platformdaki (örn: LinkedIn) şifrenizi değiştirin. Eğer aynı şifreyi başka yerlerde de kullandıysanız, onları da değiştirin ve mutlaka 2 Adımlı Doğrulama'yı (2FA) aktif edin."
                            },
                            {
                                q: "Şirketim için toplu tarama yapabilir miyim?",
                                a: "Evet. ACKLog kurumsal hesabınızla tüm şirket alan adınızı (domain) sürekli izleyebilir ve yeni bir sızıntı olduğunda anında bildirim alabilirsiniz."
                            },
                            {
                                q: "Veriler nereden geliyor?",
                                a: "Verilerimiz, 'Have I Been Pwned' gibi güvenilir kaynaklardan ve Dark Web üzerindeki halka açık sızıntı veritabanlarından derlenmektedir."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-900/30 border border-white/5 rounded-xl p-6 hover:bg-slate-900/50 transition-colors">
                                <h4 className="font-bold text-white mb-2 flex items-start gap-3">
                                    <span className="text-blue-500 text-lg">Q.</span> {item.q}
                                </h4>
                                <p className="text-slate-400 pl-8 text-sm leading-relaxed">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
