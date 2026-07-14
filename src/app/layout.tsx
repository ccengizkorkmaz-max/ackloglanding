import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
    default: "ACKLOG | Yerli SIEM & USO Platformu",
    template: "%s"
  },
  description: "Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM, log yönetimi, UEBA ve SOAR çözümüdür. QRadar ve Logsign alternatifi yerli platform.",
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
    url: "https://logsiem.com",
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
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  metadataBase: new URL("https://logsiem.com"),
};

import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/json-ld";
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DDM057XNSZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DDM057XNSZ');
          `}
        </Script>
        {/* Global Structured Data - Organization + WebSite schemas for AI/Search engines */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
