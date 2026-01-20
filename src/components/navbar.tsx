"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { DemoModal } from "./demo-modal";

const navLinks = [
    { name: "Ana Sayfa", href: "/", homeOnly: false, subOnly: true },
    { name: "Özellikler", href: "/ozellikler" },
];

const whyAcklogLinks = [
    { name: "Bölüm 1: Neden Değişim Şart?", href: "/wiki/siem-dunyasinda-neden-degisim-sart" },
    { name: "Bölüm 2: Global Devlerden Geçiş", href: "/wiki/qradar-ve-global-devlerden-ackloga-gecis" },
    { name: "Bölüm 3: Yerli SIEM Karşılaştırması", href: "/wiki/yerli-siem-karsilastirmasi-ve-acklog-farki" },
];

export function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isOpen, setIsOpen] = useState(false);
    const [isWhyOpen, setIsWhyOpen] = useState(false);
    const [isMobileWhyOpen, setIsMobileWhyOpen] = useState(false);
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
        setIsMobileWhyOpen(false);
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
                <Link href="/" className="relative flex items-center">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                        ACKLOG
                    </span>
                    <span className="sr-only">ACKLOG Home</span>
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
