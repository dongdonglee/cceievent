"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export type CustomerInput = {
  name: string;
  phone?: string;
  email?: string;
};

export async function addCustomers(eventId: string, customers: CustomerInput[]) {
  if (!eventId || customers.length === 0) {
    throw new Error("Invalid input");
  }

  // Use a transaction to safely insert multiple customers
  const result = await prisma.$transaction(
    customers.map(c => 
      prisma.customer.upsert({
        where: {
          eventId_email: {
            eventId,
            email: c.email || `${c.name}@no-email.com` // Fallback if unique required
          }
        },
        update: {
          name: c.name,
          phone: c.phone
        },
        create: {
          eventId,
          name: c.name,
          phone: c.phone,
          email: c.email
        }
      })
    )
  );

  revalidatePath(`/events/${eventId}`);
  return { success: true, count: result.length };
}

export async function getCustomers(eventId: string) {
  return await prisma.customer.findMany({
    where: { eventId },
    orderBy: { createdAt: "desc" }
  });
}
