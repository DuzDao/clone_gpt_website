import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { prisma } from '../../../../lib/prisma';

// Define a schema for input validation
const userSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = userSchema.parse(body);
    // Check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      console.log("User with this email already exists");
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log("User created successfully");
    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    );
  }
}
