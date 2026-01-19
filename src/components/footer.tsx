"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import { DemoModal } from "./demo-modal";

interface FooterProps {
    // No props needed anymore as we handle state internally
}

export function Footer({ }: FooterProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer className="bg-[#020617] border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
                            <Image
                                src="/logo.png"
                                alt="Acklog Logo"
                                width={120}
                                height={40}
                                className="h-8 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Türkiye'nin yeni nesil SIEM ve Log Yönetimi çözümü. SOC operasyonlarınızı modernize edin.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Ürün</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/ozellikler" className="hover:text-primary transition-colors">Özellikler</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Yol Haritası</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Kaynaklar</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/wiki/siem-nedir" className="hover:text-primary transition-colors">SIEM Nedir?</Link></li>
                            <li><Link href="/wiki/soc-nedir" className="hover:text-primary transition-colors">SOC Rehberi</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Kurumsal</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">

                            <li>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="hover:text-primary transition-colors text-left w-full"
                                >
                                    İletişim
                                </button>
                            </li>

                        </ul>
                    </div>

                </div>

                {/* SEO Tags Section */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-gray-600 font-medium">
                        <span className="text-gray-500 uppercase tracking-widest mr-2">Etiketler:</span>
                        <a href="#" className="hover:text-blue-500 transition-colors">Türkiye'deki SIEM Yazılımları Listesi 2026</a>
                        <a href="#" className="hover:text-blue-500 transition-colors">QRadar lisanslama vs ACKLOG maliyet avantajı</a>
                        <a href="#" className="hover:text-blue-500 transition-colors">Logsign veri zenginleştirme vs ACKLOG Superpower Data Lake</a>
                        <a href="#" className="hover:text-blue-500 transition-colors">En iyi yerli SIEM yazılımı hangisi?</a>
                    </div>
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground border-t border-white/5 pt-8 pb-12">
                    <p>© {new Date().getFullYear()} BTPROSES. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
                        <Link href="#" className="hover:text-white transition-colors">Çerez Politikası</Link>
                    </div>
                </div>
            </div>
            <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </footer>
    );
}
