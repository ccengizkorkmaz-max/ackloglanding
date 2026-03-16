import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Siber Güvenlik Kütüphanesi | ACKLOG SIEM Wiki",
    description: "SIEM, Log Yönetimi, SOAR, UEBA ve siber güvenlik hakkında teknik makaleler, rehberler ve en iyi uygulama örnekleri.",
    alternates: {
        canonical: "/wiki",
    },
};

export default function WikiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
