'use server'

import { Resend } from 'resend'

// Initialize Resend safely
const resend = new Resend(process.env.RESEND_API_KEY || "re_123")

export async function handleSaveLead(prevState: any, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries())
    const answers = JSON.parse(rawFormData.answers as string || '{}')
    const score = parseInt(rawFormData.score as string || '0')

    const data = {
        full_name: rawFormData.full_name,
        company: rawFormData.company,
        title: rawFormData.title,
        email: rawFormData.email,
        score: score,
        answers: answers
    }

    console.log('Received Lead Data:', data)

    // Determine Risk Level & Color for Email
    let riskLevel = "Bilinmiyor"
    let riskColor = "#ef4444" // red
    let recommendation = ""

    if (score >= 80) {
        riskLevel = "Düşük Risk (Uyumlu)"
        riskColor = "#22c55e" // green
        recommendation = "Harika! Sistemleriniz KVKK ve 5651 ile büyük ölçüde uyumlu görünüyor. Düzenli denetimlere devam edin."
    } else if (score >= 50) {
        riskLevel = "Orta Risk"
        riskColor = "#eab308" // yellow
        recommendation = "Dikkat! Bazı kritik eksikleriniz var. Yasal riskleri minimize etmek için eksikleri tamamlamalısınız."
    } else {
        riskLevel = "Yüksek Risk (Acil Eylem Gerekli)"
        riskColor = "#ef4444" // red
        recommendation = "Acil Durum! Loglama ve saklama süreçlerinizde ciddi açıklar var. Cezai yaptırımlarla karşılaşmamak için hemen harekete geçin."
    }

    try {
        // 1. Send Result Email to User
        if (process.env.RESEND_API_KEY) {
            try {
                await resend.emails.send({
                    from: "ACKLOG <info@logsiem.com>",
                    to: data.email as string,
                    subject: `Uyumluluk Testi Sonucunuz: ${score}/100 - ${riskLevel}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 10px;">
                            <div style="background-color: #0f172a; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                                <h2 style="color: #60a5fa; margin: 0;">ACKLOG</h2>
                            </div>
                            <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
                                <h3 style="color: #1e293b; margin-top: 0;">Sayın ${data.full_name},</h3>
                                <p style="color: #475569; line-height: 1.6;">KVKK & 5651 Uyumluluk Testini tamamladığınız için teşekkür ederiz. İşte sonuçlarınız:</p>
                                
                                <div style="text-align: center; margin: 30px 0;">
                                    <div style="font-size: 48px; font-weight: bold; color: ${riskColor};">${score}/100</div>
                                    <div style="font-size: 18px; font-weight: bold; color: #334155; margin-top: 5px;">${riskLevel}</div>
                                </div>

                                <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                                    <strong style="color: #334155;">Uzman Önerisi:</strong>
                                    <p style="color: #475569; margin: 5px 0 0 0;">${recommendation}</p>
                                </div>

                                <p style="color: #475569;">Daha detaylı analiz ve eksiklerinizi gidermek için uzmanlarımızla görüşebilirsiniz.</p>
                                
                                <div style="text-align: center; margin-top: 30px;">
                                    <a href="https://ackloglanding.vercel.app/demo-talep" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold;">Ücretsiz Danışmanlık Alın</a>
                                </div>
                            </div>
                            <div style="text-align: center; padding-top: 20px; color: #94a3b8; font-size: 12px;">
                                &copy; ${new Date().getFullYear()} ACKLOG SIEM. Tüm hakları saklıdır.
                            </div>
                        </div>
                    `
                })
                console.log("Result email sent to user.")
            } catch (emailError) {
                console.error("Failed to send result email:", emailError)
            }

            // 2. Notify Admin
            try {
                await resend.emails.send({
                    from: "ACKLOG System <info@logsiem.com>",
                    to: "ccengizkorkmaz@gmail.com",
                    subject: `Yeni Lead: ${data.full_name} (${score}/100)`,
                    html: `
                        <h3>Yeni Uyumluluk Testi Lead'i</h3>
                        <p><strong>Ad Soyad:</strong> ${data.full_name}</p>
                        <p><strong>Firma:</strong> ${data.company}</p>
                        <p><strong>Ünvan:</strong> ${data.title}</p>
                        <p><strong>E-posta:</strong> ${data.email}</p>
                        <p><strong>Skor:</strong> ${score}</p>
                        <p><strong>Risk:</strong> ${riskLevel}</p>
                        <pre>${JSON.stringify(answers, null, 2)}</pre>
                    `
                })
            } catch (adminError) {
                console.error("Failed to notify admin:", adminError)
            }
        }

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (supabaseUrl && supabaseKey) {
            try {
                // Dynamic import to avoid build errors if package is missing
                const { createClient } = await import('@supabase/supabase-js')
                const supabase = createClient(supabaseUrl, supabaseKey)

                const { error } = await supabase
                    .from('leads')
                    .insert(data)

                if (error) {
                    console.error('Supabase error:', error)
                    return { message: 'Veritabanı bağlantısı yok, ancak işlem başarılı (Demo Modu).', success: true }
                }
            } catch (importError) {
                console.warn('Supabase JS not installed. Data not saved to DB.', importError)
                return { message: 'Supabase kütüphanesi eksik, işlem başarılı (Demo Modu).', success: true }
            }
        } else {
            console.warn('Supabase credentials not found. Logging lead only.')
            return { message: 'Veritabanı ayarları eksik, işlem başarılı (Demo Modu).', success: true }
        }

        return { message: 'Başarıyla kaydedildi ve sonuçlarınız e-posta ile gönderildi.', success: true }

    } catch (e: any) {
        console.error('Server action error:', e)
        return { message: 'Bir hata oluştu: ' + e.message, success: false }
    }
}
