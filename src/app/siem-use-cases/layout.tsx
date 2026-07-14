import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIEM Log Analizi & SIEM Kullanım Senaryoları | ACKLOG",
  description: "Kurumunuzda log analizi süreçlerini hızlandıracak, tehdit tespiti ve olay müdahale için MITRE ATT&CK uyumlu SIEM kullanım senaryoları (use cases) kütüphanesi.",
  alternates: {
    canonical: "https://logsiem.com/siem-use-cases",
    languages: {
      "tr-TR": "https://logsiem.com/siem-use-cases",
      "x-default": "https://logsiem.com/siem-use-cases",
    },
  },
};

export default function SiemUseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
