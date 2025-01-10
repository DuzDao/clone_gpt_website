import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await prisma.conversation.findMany(
    { where: {userId: "cm5nalsb40007hdhgeg15jpbc"},//Get user id of user named dung for testing
      orderBy: {updatedAt: "desc"}} 
  )

  return NextResponse.json({
    message: res
  })
}