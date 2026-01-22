"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, ShieldCheck, Calculator, Search, Activity, FileCheck } from "lucide-react";
import { DemoModal } from "./demo-modal";

const navLinks = [
    { name: "Ana Sayfa", href: "/", homeOnly: false, subOnly: true },
    { name: "Özellikler", href: "/ozellikler" },
    { name: "Çözümler", href: "/cozumler" },
];

const toolsLinks = [
    { name: "Sızıntı Kontrolü", href: "/sizinti-kontrol", icon: Search },
    { name: "Zafiyet Tarama", href: "/zafiyet-tarama", icon: ShieldCheck },
    { name: "Güvenlik Analizi", href: "/analiz", icon: Activity },
    { name: "Uyumluluk Testi", href: "/uyumluluk-testi", icon: FileCheck },
    { name: "Maliyet Hesaplayıcı", href: "/maliyet-hesaplayici", icon: Calculator },
];

const whyAcklogLinks = [
    { name: "Neden Modern SIEM?", href: "/wiki/neden-modern-siem" },
    { name: "Bölüm 1: Neden Değişim Şart?", href: "/wiki/siem-dunyasinda-neden-degisim-sart" },
    { name: "Bölüm 2: Global Devlerden Geçiş", href: "/wiki/qradar-ve-global-devlerden-ackloga-gecis" },
    { name: "Bölüm 3: Yerli SIEM Karşılaştırması", href: "/wiki/yerli-siem-karsilastirmasi-ve-acklog-farki" },
];

export function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isOpen, setIsOpen] = useState(false);
    const [isWhyOpen, setIsWhyOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const [isMobileWhyOpen, setIsMobileWhyOpen] = useState(false);
    const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menus on route change
    useEffect(() => {
        setIsOpen(false);
        setIsWhyOpen(false);
        setIsToolsOpen(false);
        setIsMobileWhyOpen(false);
        setIsMobileToolsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo Placeholder */}
                <Link href="/" className="relative flex items-center gap-2 group">
                    <div className="flex flex-col">
                        <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tighter">
                            ACKLOG
                        </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-amber-500">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[10px] font-bold text-amber-500 tracking-wider">PREMIUM PARTNER</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.filter(link => !link.subOnly || !isHome).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-semibold text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Araçlar Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsToolsOpen(true)}
                        onMouseLeave={() => setIsToolsOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-base font-semibold text-gray-300 hover:text-white transition-colors">
                            Araçlar
                            <ChevronDown className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 p-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ${isToolsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                            {toolsLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                                >
                                    <div className="bg-blue-500/10 p-2 rounded-lg group-hover/item:bg-blue-500/20 transition-colors">
                                        <link.icon className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-200 group-hover/item:text-white">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Why Acklog Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsWhyOpen(true)}
                        onMouseLeave={() => setIsWhyOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-base font-semibold text-gray-300 hover:text-white transition-colors">
                            Neden Acklog
                            <ChevronDown className={`w-4 h-4 transition-transform ${isWhyOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ${isWhyOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                            {whyAcklogLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block p-3 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-sm font-medium text-gray-200 group-hover:text-blue-400 block mb-1">{link.name}</span>
                                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">Makaleyi Oku</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/wiki"
                        className="text-base font-semibold text-gray-300 hover:text-white transition-colors"
                    >
                        Wiki
                    </Link>

                    <Button
                        onClick={() => setIsModalOpen(true)}
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-blue-600/20"
                    >
                        Demo Talep Et
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white p-2"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 overflow-y-auto max-h-[80vh]">
                    {navLinks.filter(link => !link.subOnly || !isHome).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-semibold text-gray-300 hover:text-white py-2 border-b border-white/5"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile Araçlar Dropdown */}
                    <div>
                        <button
                            onClick={() => setIsMobileToolsOpen(!isMobileToolsOpen)}
                            className="flex items-center justify-between w-full text-lg font-semibold text-gray-300 hover:text-white py-2 border-b border-white/5"
                        >
                            Araçlar
                            <ChevronDown className={`w-5 h-5 transition-transform ${isMobileToolsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMobileToolsOpen && (
                            <div className="flex flex-col gap-2 mt-2 pl-4">
                                {toolsLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 text-base font-medium text-gray-400 hover:text-blue-400 py-2"
                                    >
                                        <link.icon className="w-4 h-4" />
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Why Acklog Dropdown */}
                    <div>
                        <button
                            onClick={() => setIsMobileWhyOpen(!isMobileWhyOpen)}
                            className="flex items-center justify-between w-full text-lg font-semibold text-gray-300 hover:text-white py-2 border-b border-white/5"
                        >
                            Neden Acklog
                            <ChevronDown className={`w-5 h-5 transition-transform ${isMobileWhyOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMobileWhyOpen && (
                            <div className="flex flex-col gap-2 mt-2 pl-4">
                                {whyAcklogLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-base font-medium text-gray-400 hover:text-blue-400 py-2"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href="/wiki"
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-semibold text-gray-300 hover:text-white py-2 border-b border-white/5"
                    >
                        Wiki
                    </Link>

                    <Button
                        onClick={() => {
                            setIsOpen(false);
                            setIsModalOpen(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-xl py-6 text-lg font-bold mt-4"
                    >
                        Demo Talep Et
                    </Button>
                </div>
            )}
            <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </nav>
    );
}
