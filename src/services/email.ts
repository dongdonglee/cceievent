import sgMail from "@sendgrid/mail";
import { prisma } from "@/lib/prisma";

// To use this, configure SENDGRID_API_KEY in .env
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "mock-key");

export async function sendEmailNotice(customerId: string, subject: string, contentHtml: string) {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id: customerId }
    });
    
    if (!customer?.email) {
      throw new Error("Customer email not found");
    }

    const msg = {
      to: customer.email,
      from: "noreply@aieventagent.com", // Verified sender
      subject: subject,
      html: contentHtml,
    };

    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send(msg);
    } else {
      console.log(`[MOCK EMAIL SEND] To: ${msg.to}, Subject: ${msg.subject}`);
    }

    // Update DB status
    await prisma.customer.update({
      where: { id: customerId },
      data: { 
        status: "EMAILED",
        lastContactedAt: new Date()
      }
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
}
