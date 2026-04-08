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
    "name": "ACKLOG SIEM",
    "url": "https://logsiem.com",
    "logo": "https://logsiem.com/logo.png",
    "description": "ACKLOG; QRadar ve Logsign alternatifi, KVKK/5651 uyumlu yerli SIEM & USO platformu.",
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

// WebSite Schema - AI aramalarında site genelinde tanınırlık sağlar
export const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ACKLOG SIEM",
    "alternateName": "LogSIEM",
    "url": "https://logsiem.com",
    "description": "Türkiye'nin Yeni Nesil SIEM ve Unified Security Operations (USO) Platformu",
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
    "description": "Yerli ve milli SIEM çözümü. KVKK/5651 uyumlu, In-Memory teknolojisiyle yüksek performanslı log yönetimi ve tehdit algılama platformu.",
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
