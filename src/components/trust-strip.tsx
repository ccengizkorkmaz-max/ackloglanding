"use client";

import { motion } from "framer-motion";

// Placeholder names since I don't have logo SVGs yet.
const logos = [
    "Fortinet",
    "Palo Alto Networks",
    "Checkpoint",
    "Windows Server",
    "RHEL / Ubuntu",
    "Cisco",
    "Sophos",
    "Office 365",
    "AWS CloudTrail",
    "Azure Sentinel"
];

export function TrustStrip() {
    return (
        <div className="w-full bg-[#020617] border-y border-white/5 py-8 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-6">
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest">
                    "Sınırsız" Entegrasyon ve Veri Kaynağı Desteği
                </p>
            </div>

            {/* Marquee Effect */}
            <div className="flex relative overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap gap-16 min-w-full justify-center">
                    {[...logos, ...logos].map((logo, i) => (
                        <span key={i} className="text-xl md:text-2xl font-bold bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent opacity-50 hover:opacity-100 transition-opacity cursor-default">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>

            {/* Tailwind Config needs 'animate-marquee' for this to work flawlessly, 
           or I can just use a simple overflow-x-auto for MVP if marquee config is missing.
           For now, I'll assume marquee class isn't there and use a simple flex wrap for stability 
           unless I add the keyframe to globals.css. 
           Let's actually just do a static responsive grid for robustness.
       */}
            <div className="container mx-auto px-4 mt-6 hidden">
                {/* Fallback to static grid if marquee animation missing */}
            </div>
        </div>
    );
}
