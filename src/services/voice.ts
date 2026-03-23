import twilio from "twilio";
import { prisma } from "@/lib/db";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhone = process.env.TWILIO_PHONE_NUMBER;

const client = accountSid && authToken ? twilio(accountSid, authToken) : null;

export async function initiateAICall(customerId: string, scenarioText: string) {
  try {
    const customer = await prisma.customer.findUnique({
      where: { id: customerId }
    });

    if (!customer?.phone) {
      throw new Error("Customer phone not found");
    }

    // In a real scenario, Twilio uses TwiML (XML) or a Webhook URL to direct the call flow.
    // For AI streaming, it connects to an outbound Webhook where the Next.js API streams audio via OpenAI Realtime/Twilio Media Streams.
    
    if (client) {
      await client.calls.create({
        url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/twilio`, // The webhook that handles the AI voice logic
        to: customer.phone,
        from: fromPhone!,
      });
    } else {
      console.log(`[MOCK CALL INITIATE] To: ${customer.phone}, Triggering AI logic for scenario: ${scenarioText.substring(0, 20)}...`);
    }

    // Update DB status to indicate a call is initiated or attempted
    await prisma.customer.update({
      where: { id: customerId },
      data: { 
        lastContactedAt: new Date()
      }
    });

    return { success: true };
  } catch (error) {
    console.error("Voice call failed:", error);
    return { success: false, error };
  }
}
