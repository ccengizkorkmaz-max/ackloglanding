"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { DemoModal } from "./demo-modal";

const navLinks = [
    { name: "Ana Sayfa", href: "/", homeOnly: false, subOnly: true },
    { name: "Özellikler", href: "/ozellikler" },
    { name: "Wiki", href: "/wiki" },
];

export function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative flex items-center">
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
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-bold"
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
                <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
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
                    <Button
                        onClick={() => {
                            setIsOpen(false);
                            setIsModalOpen(true);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-xl py-6 text-lg font-bold"
                    >
                        Demo Talep Et
                    </Button>
                </div>
            )}
            <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </nav>
    );
}
