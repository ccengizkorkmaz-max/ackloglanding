import { Metadata } from "next";
import { FeaturesClient } from "./features-client";

export const metadata: Metadata = {
    title: "ACKLOG SIEM Özellikleri | Tehdit Algılama, UEBA ve SOAR",
    description: "ACKLOG teknik yetenekleri: Gerçek zamanlı log yönetimi, MITRE uyumlu tehdit algılama, UEBA ve otomatik olay müdahalesi (SOAR) ile tam koruma.",
    keywords: [
        "SIEM özellikleri",
        "UEBA nedir",
        "SOAR platformu",
        "MITRE ATT&CK korelasyon",
        "log yönetimi teknik özellikler",
        "siber tehdit algılama",
        "KVKK raporlama araçları"
    ],
    alternates: {
        canonical: "/ozellikler",
    },
    openGraph: {
        title: "ACKLOG SIEM & USO Teknik Yetenekleri",
        description: "Siber dayanıklılığınızı artıran yeni nesil SIEM özelliklerini inceleyin.",
        url: "https://logsiem.com/ozellikler",
        type: "website",
    }
};

export default function FeaturesPage() {
    return <FeaturesClient />;
}
