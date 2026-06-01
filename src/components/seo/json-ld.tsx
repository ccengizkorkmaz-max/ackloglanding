import { Thing, WithContext, Organization, SoftwareApplication, WebSite } from "schema-dts";

export function JsonLd<T extends Thing>({ data }: { data: WithContext<T> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// JSON-LD for multiple schemas
export function JsonLdMulti({ schemas }: { schemas: WithContext<Thing>[] }) {
    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}

// Organization Schema
export const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BTPROSES Bilgi Teknolojileri",
    "alternateName": "BTPROSES",
    "url": "https://logsiem.com",
    "logo": "https://logsiem.com/logo.png",
    "description": "Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.",
    "sameAs": [
        "https://twitter.com/acklog",
        "https://linkedin.com/company/acklog"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-850-123-4567",
        "contactType": "sales",
        "areaServed": "TR",
        "availableLanguage": "Turkish"
    },
    "foundingDate": "2020",
    "knowsAbout": [
        "SIEM",
        "Log Yönetimi",
        "Siber Güvenlik",
        "KVKK Uyumluluğu",
        "5651 Log Tutma",
        "SOC Operasyonları",
        "Threat Detection",
        "UEBA"
    ]
};

// WebSite Schema - AI aramalarında site genelinde tanınırilik sağlar
export const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ACKLOG SIEM & Log Yönetimi",
    "alternateName": "LogSIEM",
    "url": "https://logsiem.com",
    "description": "Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür.",
    "inLanguage": "tr",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://logsiem.com/wiki?q={search_term_string}"
        },
        // @ts-ignore - schema-dts doesn't have query-input but Google needs it
        "query-input": "required name=search_term_string"
    }
};

// Software Product Schema
export const productSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ACKLOG SIEM",
    "applicationCategory": "SecurityApplication",
    "applicationSubCategory": "SIEM & Log Management",
    "operatingSystem": "Linux, Windows Server",
    "description": "Logsiem.com, ACKLOG yerli SIEM platformunun resmi ürün sitesidir. ACKLOG, BTPROSES tarafından geliştirilen yerli SIEM ve log yönetimi çözümüdür. In-Memory teknolojisiyle yüksek performans sunar.",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TRY",
        "availability": "https://schema.org/InStock",
        "description": "Ücretsiz deneme sürümü"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": 120,
        "bestRating": "5",
        "worstRating": "1"
    },
    "featureList": "Real-time Threat Detection, No-Code Parsing, KVKK Compliance Log Signing, In-Memory Analysis, UEBA, SOAR Integration, MITRE ATT&CK Mapping"
};
