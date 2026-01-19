import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ACKLOG | Yerli SIEM & USO Platformu | QRadar, Logsign ve Cryptech Alternatifi",
    template: "%s | ACKLOG SIEM"
  },
  description: "ACKLOG; QRadar'ın gücünü, Logsign'ın kullanım kolaylığını ve Cryptech'ın yerel uyumluluğunu tek bir USO platformunda birleştirir. SIEM, UEBA ve SOAR yetenekleriyle Türkiye'nin en kapsamlı siber güvenlik çözümü.",
  keywords: [
    "ACKLOG",
    "Yerli SIEM yazılımları",
    "IBM QRadar alternatif",
    "Logsign muadili",
    "Cryptech SIEM",
    "Logalarm karşılaştırma",
    "Berqnet SIEM",
    "ArcSight Türkiye",
    "SOC yönetim platformu",
    "USO vs SIEM",
    "KVKK uyumlu log yönetimi",
    "5651 loglama çözümleri"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://acklog.com.tr",
    title: "ACKLOG: Türkiye'nin Yeni Nesil SIEM ve USO Platformu",
    description: "QRadar, Logsign ve Cryptech deneyiminizi bir üst seviyeye taşıyın. Tek platform, tam otomasyon.",
    siteName: "ACKLOG SIEM",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACKLOG SIEM",
    description: "QRadar, Logsign ve Cryptech deneyiminizi bir üst seviyeye taşıyın.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://acklog.com.tr",
  }
};

import { JsonLd, organizationSchema } from "@/components/seo/json-ld";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/20`}
      >
        {/* Organization Schema Global */}
        <JsonLd data={organizationSchema} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
