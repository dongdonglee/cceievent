"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const name = formData.get("name") as string;
  const type = formData.get("type") as string;
  const description = formData.get("description") as string;

  if (!name || !type) {
    throw new Error("Missing required fields");
  }

  const event = await prisma.event.create({
    data: {
      name,
      type,
      description,
    },
  });

  revalidatePath("/");
  revalidatePath("/events");
  redirect(`/events/${event.id}`);
}

export async function getRecentEvents() {
  return await prisma.event.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      _count: {
        select: { customers: true }
      }
    }
  });
}
