import { Metadata } from "next";
import { DemoTalepClient } from "./demo-talep-client";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
    title: "Ücretsiz SIEM Demo Talebi | ACKLOG PoC",
    description: "ACKLOG SIEM ve USO platformunu kendi verilerinizle 14 gün ücretsiz test edin. Kredi kartı gerekmez, kurulum desteği dahildir.",
    alternates: {
        canonical: "/demo-talep",
    },
    openGraph: {
        title: "ACKLOG SIEM Ücretsiz Deneme (PoC)",
        description: "Yerli SIEM çözümü ACKLOG'u kendi altyanınızda test edin. KVKK ve 5651 uyumlu log yönetimi.",
        url: "https://logsiem.com/demo-talep",
        type: "website",
    }
};

export default function DemoTalepPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <DemoTalepClient />
        </main>
    );
}
