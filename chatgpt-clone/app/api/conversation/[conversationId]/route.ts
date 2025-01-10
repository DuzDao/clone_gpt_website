import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const body = await req.json();

//   await prisma.message.create({
//     data: {
//       conversationId: "cm5nmugz70001hdg8qw81xzel", //for testing
//       sender: body.sender,
//       content: body.content,
//     }
//   })
//   return NextResponse.json({message: "Done"})
// } 


export async function GET(req:Request, {params}: {params: Promise<{conversationId: string}>}) {
  const conversationId = (await params).conversationId.replace("[", "").replace("]", "");

  const res = await prisma.message.findMany({
    where: {conversationId: conversationId}
  })
  return NextResponse.json({res: res});
}