import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerId, eventId, answers } = body;

    if (!customerId || !eventId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In a real app we might store 'answers' in a SurveyResponse table
    // For this MVP, we just update the customer's status to SURVEY_COMPLETED
    
    await prisma.customer.update({
      where: { id: customerId },
      data: {
        isSurveyCompleted: true,
        status: "SURVEY_COMPLETED",
      }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Survey submission error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
