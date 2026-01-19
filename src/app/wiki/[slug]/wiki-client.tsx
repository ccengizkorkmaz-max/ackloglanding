"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DemoModal } from "@/components/demo-modal";

interface WikiClientProps {
    slug: string;
    data: {
        title: string;
        content: string;
    };
    otherArticles: [string, { title: string }][];
}

export function WikiClient({ slug, data, otherArticles }: WikiClientProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <article className="min-h-screen bg-background py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <Link href="/wiki" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Kütüphaneye Dön
                </Link>

                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <header className="mb-12">
                            <span className="text-primary font-mono text-sm mb-2 block uppercase tracking-widest text-[10px] font-bold">Kütüphane &bull; Makale</span>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-6">{data.title}</h1>
                            <div className="h-1 w-20 bg-blue-600 rounded-full" />
                        </header>

                        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-400 prose-strong:text-white prose-a:text-blue-400">
                            {/* Render HTML Content */}
                            <div dangerouslySetInnerHTML={{ __html: data.content }} />
                        </div>

                        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl text-center">
                            <h3 className="text-2xl font-bold mb-4 text-white">Güvenliğinizi Şansa Bırakmayın</h3>
                            <p className="mb-6 text-gray-400">
                                {data.title.includes("SIEM") ? "ACKLOG SIEM ile gerçek zamanlı koruma sağlayın." : "KVKK uyumlu loglama çözümlerimizle tanışın."}
                            </p>
                            <Button
                                onClick={() => setIsModalOpen(true)}
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8"
                            >
                                Uzmanlarımızla Görüşün
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                                    <span className="w-1 h-4 bg-blue-600 rounded-full" />
                                    Diğer Makaleler
                                </h3>
                                <div className="space-y-4">
                                    {otherArticles.map(([otherSlug, otherData]) => (
                                        <Link
                                            key={otherSlug}
                                            href={`/wiki/${otherSlug}`}
                                            className="block p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all group"
                                        >
                                            <h4 className="text-sm font-bold text-gray-300 group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                                                {otherData.title}
                                            </h4>
                                            <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-blue-500/70 uppercase">
                                                Hemen Oku <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </Link>
                                    ))}
                                    <Link
                                        href="/wiki"
                                        className="block p-4 rounded-xl border border-dashed border-white/10 text-center hover:border-blue-500/50 transition-all text-xs font-bold text-gray-500 hover:text-blue-400"
                                    >
                                        Tüm Kütüphaneyi Gör
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </article>
    );
}
