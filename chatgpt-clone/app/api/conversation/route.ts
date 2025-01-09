import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
  const body = await req.json();
  const conversationTitle = body.title;
  
  const newConversation = await prisma.conversation.create({
    data: {
      userId: "cm5nalsb40007hdhgeg15jpbc", //test with userId named "dung"
      title: conversationTitle
    }
  })
  
  return NextResponse.json({conversation: newConversation, message: "Created new conversation"});
}
