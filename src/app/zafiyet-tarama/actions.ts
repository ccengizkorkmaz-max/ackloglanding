'use server'

import { GvmBridge } from '@/lib/gvm-bridge'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || "re_123")

const gvmConfig = {
    host: process.env.GVM_HOST || '',
    port: parseInt(process.env.GVM_PORT || '9390'),
    username: process.env.GVM_USER || '',
    password: process.env.GVM_PASSWORD || '',
}

const gvm = new GvmBridge(gvmConfig)

export async function checkGvmConnection() {
    if (!process.env.GVM_HOST) return { success: false, demo: true }

    try {
        await gvm.authenticate()
        return { success: true }
    } catch (error) {
        return { success: false, error: "Connection Failed" }
    }
}

export async function startRealScan(target: string) {
    console.log("Starting real GVM scan for:", target)
    try {
        if (!process.env.GVM_HOST) {
            // Fallback for demo mode if no GVM configured
            return { success: true, taskId: 'demo-task-id', demo: true }
        }

        await gvm.authenticate()
        const targetId = await gvm.createTarget(`Target_${Date.now()}`, target)
        const taskId = await gvm.createTask(`Task_${target}`, targetId, process.env.GVM_CONFIG_ID || '')
        await gvm.startTask(taskId)

        return { success: true, taskId }
    } catch (e: any) {
        console.error("GVM start error:", e)
        return { success: false, message: e.message }
    }
}

export async function getScanStatus(taskId: string) {
    if (taskId === 'demo-task-id') {
        return { success: true, status: 'Running', progress: 45, demo: true }
    }

    try {
        await gvm.authenticate()
        const taskInfo = await gvm.getTaskStatus(taskId)

        let results = null
        if (taskInfo.status === 'Done' && taskInfo.reportId) {
            results = await gvm.getReportResults(taskInfo.reportId)
        }

        return {
            success: true,
            status: taskInfo.status,
            progress: taskInfo.progress,
            results
        }
    } catch (e: any) {
        return { success: false, message: e.message }
    }
}

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
