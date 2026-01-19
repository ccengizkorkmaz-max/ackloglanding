import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, phone } = await req.json();

        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is missing");
            return NextResponse.json({ success: true, message: "Simulation mode: API Key missing" });
        }

        // IMPORTANT: If you are using 'onboarding@resend.dev', you can ONLY send emails to yourself.
        // To send to customers, you MUST verify your domain (e.g., acklog.com.tr) in Resend.
        const sender = "ACKLOG <onboarding@resend.dev>"; // Once verified, change to "ACKLOG <info@acklog.com.tr>"

        // 1. Send notification email to admin
        await resend.emails.send({
            from: sender,
            to: "ccengizkorkmaz@gmail.com",
            subject: "Yeni Demo Talebi: " + name,
            html: `
                <h3>Yeni Demo Talebi</h3>
                <p><strong>İsim:</strong> ${name}</p>
                <p><strong>E-posta:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
            `,
        });

        // 2. Send confirmation to user
        // This will FAIL if sender is 'onboarding@resend.dev' and 'email' is not ccengizkorkmaz@gmail.com
        try {
            await resend.emails.send({
                from: sender,
                to: email,
                subject: "Demo Talebiniz Alındı",
                html: `
                    <h3>Merhaba ${name},</h3>
                    <p>ACKLOG SIEM ve Log Yönetimi platformuna gösterdiğiniz ilgi için teşekkür ederiz.</p>
                    <p>Ekibimiz en kısa sürede sizinle iletişime geçerek detaylı bir sunum planlayacaktır.</p>
                    <br/>
                    <p>Saygılarımızla,<br/>ACKLOG Ekibi</p>
                `,
            });
        } catch (e) {
            console.error("Customer email failed (likely due to Resend Test Mode):", e);
            // We don't throw here so the admin still gets the notification
        }

        return NextResponse.json({ success: true, message: "Emails sent successfully" });
    } catch (error) {
        console.error("Error in send-demo API:", error);
        return NextResponse.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
