
import { Metadata } from 'next';
import { WithContext, FAQPage } from 'schema-dts';
import { ThreatDetectionClient } from './client';

export const metadata: Metadata = {
    title: 'Tehdit Algılama ve Müdahale | SIEM & Threat Detection',
    description: 'Gelişmiş tehditleri gerçek zamanlı tespit edin. Splunk maliyetleri olmadan, %100 yerli ve KVKK uyumlu tehdit algılama çözümü.',
};

const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Acklog behavioral rule destekliyor mu?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet. Acklog hem imza tabanlı (signature-based) hem de davranışsal (behavioral) kuralları destekler ve çalıştırır."
            }
        },
        {
            "@type": "Question",
            "name": "MITRE ATT&CK mapping var mı?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet, üretilen tüm alarmlar MITRE ATT&CK taksonomisine göre otomatik olarak sınıflandırılır ve eşleştirilir."
            }
        },
        {
            "@type": "Question",
            "name": "On-prem veya air-gapped ortamda çalışır mı?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet, Acklog public cloud zorunluluğu olmadan tamamen kapalı devre (air-gapped) veya on-premise ortamlarda çalışabilir."
            }
        }
    ]
};

export default function ThreatDetectionPage() {
    return <ThreatDetectionClient faqSchema={faqSchema} />;
}
