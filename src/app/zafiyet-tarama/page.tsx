import { Navbar } from "@/components/navbar";
import VulnerabilityScanner from "@/components/vulnerability-scanner";
import { Footer } from "@/components/footer";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ücretsiz Zafiyet Tarama & Penetrasyon Testi | ACKLog",
    description: "Web sitenizi ve ağınızı saniyeler içinde tarayın. SQL Injection, XSS ve açık port zafiyetlerini ücretsiz raporlayın.",
    alternates: {
        canonical: "/zafiyet-tarama",
    },
};

export default function ZafiyetTaramaPage() {
    return (
        <div className="min-h-screen bg-slate-950">
            <Navbar />
            <main className="pt-20">
                <VulnerabilityScanner />
            </main>
            <Footer />
        </div>
    )
}
