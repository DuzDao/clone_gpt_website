import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";

import prisma from '@/lib/prisma';

const userSchema = z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters')
})

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {email, password} = userSchema.parse(body);

        const existingUser = await prisma.user.findUnique({
            where: {email},
        })
        if (existingUser) {
            return NextResponse.json(
                {user: null, message: "User already exists"},
                {status: 500}
            )
        }
        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email, 
                password: hashedPassword,   
            }
        })
        return NextResponse.json(
            {user: newUser, message: 'User created successfully'},
            {status:201}
        )


    } catch (error) {
        console.log("Error during user registration: ", error);
        return NextResponse.json(
            {message: "Somethine went wrong"},
            {status: 500}
        );
    }

}