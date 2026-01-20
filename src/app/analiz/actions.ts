'use server'

import { SecurityAnalyzer, SecurityAnalysisResults } from '@/lib/security-analyzer';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || "re_123");
const analyzer = new SecurityAnalyzer();

export async function runSecurityAnalysis(target: string): Promise<{ success: boolean; data?: SecurityAnalysisResults; message?: string }> {
    console.log("Running Security Analysis for:", target);
    try {
        const data = await analyzer.analyze(target);
        return { success: true, data };
    } catch (e: any) {
        console.error("Analysis Error:", e);
        return { success: false, message: e.message || "Analiz sırasında bir hata oluştu." };
    }
}

export async function saveAnalysisLead(data: {
    name: string;
    email: string;
    target: string;
}) {
    console.log("Saving Analysis Lead:", data);
    try {
        if (process.env.RESEND_API_KEY) {
            // Admin Notification
            await resend.emails.send({
                from: "ACKLOG System <info@logsiem.com>",
                to: "ccengizkorkmaz@gmail.com",
                subject: `Yeni Analiz Raporu Talebi: ${data.target}`,
                html: `
                    <h3>Yeni Güvenlik Analiz Talebi</h3>
                    <p><strong>Ad Soyad:</strong> ${data.name}</p>
                    <p><strong>E-posta:</strong> ${data.email}</p>
                    <p><strong>Analiz Edilen Hedef:</strong> ${data.target}</p>
                `
            });

            // User Confirmation
            await resend.emails.send({
                from: "ACKLOG Security <info@logsiem.com>",
                to: data.email,
                subject: "Kurumsal Güvenlik Raporunuz Hazırlanıyor",
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #fff; padding: 40px; border-radius: 12px; border: 1px solid #1e293b;">
                        <h2 style="color: #22d3ee; border-bottom: 2px solid #22d3ee; padding-bottom: 10px;">ACKLOG SECURITY</h2>
                        <p>Sayın ${data.name},</p>
                        <p><strong>${data.target}</strong> adresi için gerçekleştirdiğiniz anlık analiz sonucunda hazırlanan teknik ön raporumuz uzmanlarımıza iletilmiştir.</p>
                        <p>Detaylı kurumsal güvenlik raporunuz ve iyileştirme önerilerimiz kısa süre içerisinde e-posta adresinize gönderilecektir.</p>
                        <div style="background: #1e293b; padding: 20px; border-radius: 8px; margin-top: 20px;">
                            <p style="margin: 0; color: #94a3b8; font-size: 14px;">LogSIEM kullanarak bu zafiyetleri nasıl anlık olarak izleyebileceğinizi öğrenmek ister misiniz?</p>
                        </div>
                        <br/>
                        <p>Güvenli günler dileriz,<br/>ACKLOG Ekibi</p>
                    </div>
                `
            });
        }
        return { success: true, message: "Rapor talebiniz başarıyla alındı." };
    } catch (error) {
        console.error("Lead saving failed:", error);
        return { success: false, message: "İşlem sırasında bir hata oluştu." };
    }
}

export async function requestSolutionSupport(data: {
    name: string;
    email: string;
    target: string;
    vulnerability: string;
    context?: string;
}) {
    console.log("Requesting Solution Support:", data);
    try {
        if (process.env.RESEND_API_KEY) {
            // Admin Notification
            await resend.emails.send({
                from: "ACKLOG System <info@logsiem.com>",
                to: "ccengizkorkmaz@gmail.com",
                subject: `YENİ DESTEK TALEBİ: ${data.vulnerability}`,
                html: `
                    <div style="font-family: Arial, sans-serif; background-color: #0f172a; color: #fff; padding: 30px; border-radius: 12px;">
                        <h2 style="color: #f43f5e; border-bottom: 2px solid #1e293b; padding-bottom: 10px;">KRİTİK DESTEK TALEBİ</h2>
                        <p><strong>Müşteri:</strong> ${data.name}</p>
                        <p><strong>E-posta:</strong> ${data.email}</p>
                        <p><strong>İlgili Hedef:</strong> ${data.target}</p>
                        <p><strong>İlgilenilen Zafiyet:</strong> <span style="color: #22d3ee; font-weight: bold;">${data.vulnerability}</span></p>
                        ${data.context ? `<p><strong>Ek Bilgi:</strong> ${data.context}</p>` : ''}
                        <div style="margin-top: 20px; padding: 15px; background: #1e293b; border-radius: 8px;">
                            <p style="margin: 0; font-size: 14px; color: #94a3b8;">
                                Bu kullanıcı, tespit edilen zafiyetin LogSIEM üzerinden nasıl izlenebileceği ve kural yapılandırması hakkında teknik destek talep ediyor.
                            </p>
                        </div>
                    </div>
                `
            });

            // User Confirmation
            await resend.emails.send({
                from: "ACKLOG Support <info@logsiem.com>",
                to: data.email,
                subject: `LogSIEM Güvenlik Yapılandırması: ${data.vulnerability}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; color: #fff; padding: 40px; border-radius: 12px;">
                        <h2 style="color: #22d3ee;">Talebiniz Alındı</h2>
                        <p>Merhaba ${data.name},</p>
                        <p><strong>${data.vulnerability}</strong> zafiyetinin LogSIEM üzerinden canlı olarak nasıl izlenebileceği ve otomatik aksiyonların nasıl yapılandırılacağı ile ilgili destek talebiniz teknik ekibimize ulaşmıştır.</p>
                        <p>Güvenlik mühendislerimiz en kısa sürede sizinle iletişime geçerek ilgili korelasyon kurallarının aktif edilmesi konusunda yardımcı olacaktır.</p>
                        <br/>
                        <p>Güvenli günler dileriz,<br/>ACKLOG Teknik Destek Ekibi</p>
                    </div>
                `
            });
        }
        return { success: true, message: "Destek talebiniz başarıyla alındı." };
    } catch (error) {
        console.error("Support request failed:", error);
        return { success: false, message: "İşlem sırasında bir hata oluştu." };
    }
}
