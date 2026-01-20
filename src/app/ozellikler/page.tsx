import { Metadata } from "next";
import { FeaturesClient } from "./features-client";

export const metadata: Metadata = {
    title: "ACKLOG SIEM Özellikleri | Tehdit Algılama, UEBA ve SOAR Yetenekleri",
    description: "ACKLOG USO platformunun teknik yeteneklerini keşfedin: Gerçek zamanlı log yönetimi, MITRE ATT&CK uyumlu tehdit algılama, Davranış Analitiği (UEBA) ve otomatik olay müdahalesi (SOAR).",
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
        canonical: "https://logsiem.com/ozellikler",
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
