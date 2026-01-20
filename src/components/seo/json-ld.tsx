import { Thing, WithContext, Organization, SoftwareApplication } from "schema-dts";

export function JsonLd<T extends Thing>({ data }: { data: WithContext<T> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Pre-defined schemas for easy usage
export const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ACKLOG SIEM",
    "url": "https://logsiem.com",
    "logo": "https://logsiem.com/logo.png",
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
    }
};

export const productSchema: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ACKLOG SIEM",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "Linux, Windows Server",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TRY",
        "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": 120
    },
    "featureList": "Real-time Threat Detection, No-Code Parsing, KVKK Compliance Log Signing"
};
