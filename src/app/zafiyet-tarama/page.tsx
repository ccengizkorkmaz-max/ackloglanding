import { Navbar } from "@/components/navbar";
import VulnerabilityScanner from "@/components/vulnerability-scanner";
import { Footer } from "@/components/footer";

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
