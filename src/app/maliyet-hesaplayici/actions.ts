'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || "re_123")

export async function sendCostAnalysisEmail(data: {
    companySize: string
    firewall: string
    deployment: string
    email: string
    dailyLogGB: number
    retentionMonths: number
    estimatedBudget: string
    recommendedHardware: string
}) {
    console.log("Sending Cost Analysis Email for:", data.email)

    try {
        if (!process.env.RESEND_API_KEY) {
            console.warn("RESEND_API_KEY missing, skipping email.")
            return { success: true, message: "Demo modu: Email gönderildi (simülasyon)." }
        }

        // 1. Notify Admin (Lead Capture)
        await resend.emails.send({
            from: "ACKLOG System <info@logsiem.com>",
            to: "ccengizkorkmaz@gmail.com",
            subject: `Yeni Maliyet Analizi Lead'i: ${data.email}`,
            html: `
                <h3>Yeni Maliyet Analizi Talebi</h3>
                <p><strong>E-posta:</strong> ${data.email}</p>
                <p><strong>Şirket Ölçeği:</strong> ${data.companySize}</p>
                <p><strong>Firewall:</strong> ${data.firewall}</p>
                <p><strong>Kurulum Tercihi:</strong> ${data.deployment}</p>
                <hr />
                <h4>Hesaplanan Değerler</h4>
                <p><strong>Günlük Log:</strong> ${data.dailyLogGB} GB</p>
                <p><strong>Saklama Süresi:</strong> ${data.retentionMonths} Ay</p>
                <p><strong>Önerilen Donanım:</strong> ${data.recommendedHardware}</p>
                <p><strong>Tahmini Bütçe:</strong> ${data.estimatedBudget}</p>
            `
        })

        // 2. Send Confirmation/Report to User
        await resend.emails.send({
            from: "ACKLOG <info@logsiem.com>",
            to: data.email,
            subject: `Maliyet Analizi Raporunuz`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #2563eb;">ACKLOG Maliyet Analizi</h2>
                    <p>Merhaba,</p>
                    <p>ACKLOG SIEM maliyet hesaplayıcısını kullandığınız için teşekkür ederiz. İşte size özel analiz sonuçları:</p>
                    
                    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0;">
                        <p><strong>Günlük Log Hacmi:</strong> ${data.dailyLogGB} GB</p>
                        <p><strong>Saklama Süresi:</strong> ${data.retentionMonths} Ay</p>
                        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;">
                        <p><strong>Önerilen Donanım:</strong> <span style="color: #2563eb; font-weight: bold;">${data.recommendedHardware}</span></p>
                        <p><strong>Tahmini Donanım Bütçesi:</strong> <span style="color: #16a34a; font-weight: bold;">${data.estimatedBudget}</span></p>
                    </div>

                    <p>Detaylı sunum ve size özel teklifimiz için ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>
                    <br>
                    <a href="https://ackloglanding.vercel.app/demo-talep" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Uzmanla Görüşün</a>
                </div>
            `
        })

        return { success: true, message: "Rapor e-posta adresinize gönderildi." }
    } catch (error) {
        console.error("Email sending failed:", error)
        return { success: false, message: "Bir hata oluştu, lütfen tekrar deneyin." }
    }
}
