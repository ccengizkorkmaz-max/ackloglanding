'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || "re_123")

export async function saveScannerLead(data: {
    name: string
    company: string
    email: string
    target: string
}) {
    console.log("Saving Scanner Lead:", data)

    try {
        if (process.env.RESEND_API_KEY) {
            // Admin Notification
            await resend.emails.send({
                from: "ACKLOG System <info@logsiem.com>",
                to: "ccengizkorkmaz@gmail.com",
                subject: `Yeni Zafiyet Tarama Lead'i: ${data.target}`,
                html: `
                    <h3>Yeni Zafiyet Tarama Talebi</h3>
                    <p><strong>Ad Soyad:</strong> ${data.name}</p>
                    <p><strong>Firma:</strong> ${data.company}</p>
                    <p><strong>E-posta:</strong> ${data.email}</p>
                    <p><strong>Taranan Hedef:</strong> ${data.target}</p>
                `
            })

            // User Confirmation
            await resend.emails.send({
                from: "ACKLOG Security <info@logsiem.com>",
                to: data.email,
                subject: "Zafiyet Tarama Raporunuz Hazır",
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px;">
                        <h2 style="color: #0f172a;">Güvenlik Raporunuz Hazırlanıyor</h2>
                        <p>Sayın ${data.name},</p>
                        <p><strong>${data.target}</strong> adresi için başlattığınız zafiyet taramasına ait detaylı teknik rapor ekibimiz tarafından inceleniyor.</p>
                        <p>Kısa süre içinde uzmanlarımız size özel çözüm önerileriyle birlikte dönüş yapacaktır.</p>
                        <br/>
                        <p>Saygılarımızla,<br/>ACKLOG Security Team</p>
                    </div>
                `
            })
        }

        return { success: true, message: "Rapor talebiniz alındı." }
    } catch (e) {
        console.error("Scanner lead error:", e)
        return { success: false, message: "İşlem sırasında bir hata oluştu." }
    }
}
