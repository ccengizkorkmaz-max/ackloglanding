import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, phone } = await req.json();

        // 1. Send confirmation email to the USER (User's email)
        // 2. Send notification email to ccengizkorkmaz@gmail.com

        // Note: For a real production app, you would use an email provider like Resend or Nodemailer.
        // For this demonstration, we simulate the email sending logic.

        console.log("Demo Request Received:", { name, email, phone });
        console.log("Sending confirmation to:", email);
        console.log("Sending notification to: ccengizkorkmaz@gmail.com with subject 'Demo istendi'");

        // Simulate a small delay for the API call
        await new Promise((resolve) => setTimeout(resolve, 800));

        return NextResponse.json({ success: true, message: "Emails sent successfully" });
    } catch (error) {
        console.error("Error in send-demo API:", error);
        return NextResponse.json(
            { success: false, error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
