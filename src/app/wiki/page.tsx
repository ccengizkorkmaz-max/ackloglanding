import Link from "next/link";
import { BookOpen, ArrowRight, FileText, Shield, Zap, Search } from "lucide-react";
import { articles } from "@/data/wiki-content";
import { Footer } from "@/components/footer";

export const metadata = {
    title: "Siber Güvenlik Kütüphanesi | ACKLOG SIEM Wiki",
    description: "SIEM, Log Yönetimi, SOAR, UEBA ve siber güvenlik hakkında teknik makaleler, rehberler ve en iyi uygulama örnekleri.",
};

export default function WikiIndexPage() {
    // Convert articles object to array for mapping
    const articleList = Object.entries(articles).map(([slug, data]) => ({
        slug,
        ...data,
    }));

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative w-full py-24 lg:py-32 overflow-hidden border-b border-white/10 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/0 to-slate-950/0" />
                <div className="container relative mx-auto px-4 md:px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 uppercase tracking-widest text-[10px] font-bold text-blue-400">
                        <BookOpen className="w-3 h-3" />
                        Akademik & Bilgi Merkezi
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
                        Siber Güvenlik <br className="hidden sm:block" /> Kütüphanesi
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-400 md:text-lg leading-relaxed">
                        ACKLOG uzmanları tarafından hazırlanan teknik rehberler, derinlemesine SIEM analizleri ve siber dayanıklılık stratejileri ile kurumunuzun güvenliğini güçlendirin.
                    </p>
                </div>
            </section>

            {/* Article Grid */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {articleList.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/wiki/${article.slug}`}
                                className="group flex flex-col p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Decorative Icon Background */}
                                <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:scale-110 transition-transform duration-500 group-hover:opacity-[0.06]">
                                    <FileText className="w-32 h-32" />
                                </div>

                                <div className="mb-6 p-3 rounded-xl bg-blue-500/10 w-fit group-hover:bg-blue-500/20 transition-colors">
                                    <FileText className="w-6 h-6 text-blue-500" />
                                </div>

                                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {article.title}
                                </h2>

                                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                                    {article.content.replace(/<[^>]*>?/g, '').substring(0, 150)}...
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest">
                                    Tamamını Oku <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900/50 border-t border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Aradığınızı bulamadınız mı?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Yeni teknolojiler ve tehdit vektörleri hakkında daha fazla bilgiye mi ihtiyacınız var? Bizimle iletişime geçin.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-8 text-sm font-medium text-white shadow transition-all hover:bg-blue-700 hover:scale-105"
                    >
                        Bize Ulaşın
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
