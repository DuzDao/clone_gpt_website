import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  await prisma.message.create({
    data: {
      conversationId: "cm5nmugz70001hdg8qw81xzel", //for testing
      sender: "user",
      content: body.textInput,
    }
  })
  return NextResponse.json({message: "Done"})
} 
