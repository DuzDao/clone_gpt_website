// import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
import z from 'zod';
import { compare } from 'bcryptjs';
import { prisma } from '@/app/lib/prisma';

const usersChema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z 
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 7 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {email, password} = usersChema.parse(body);

    //Find user by email
    const existingUserByEmail = await prisma.user.findUnique({
      where: {email: email},
    })
  
    if (!existingUserByEmail) {
      // Not found user
      console.log("User with this email not found");
      return NextResponse.json(
        {message: "User with this email not found"},
        {status: 409}
      )
    }
    else {
      const hassedPassword = existingUserByEmail.password;
      const matchPassword = await compare(password, hassedPassword);

      if (matchPassword) {
        console.log("Password match");
        return NextResponse.json({message:"Login done!"},{status: 201});
      }else {
        console.log("Password not match");
        return NextResponse.json({message: "Wrong password"}, {status: 409});
      }
    }

    
  } catch(error) {
    console.log(error);
    NextResponse.json(
      {message: "Something went wrong!"},
      {status: 500}
    )
  }
}