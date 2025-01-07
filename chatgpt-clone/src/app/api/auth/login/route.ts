import { compare } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import prisma from '@/lib/prisma';

const userLoginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = userLoginSchema.parse(body);

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return NextResponse.json(
        { user: null, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Compare the password
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { user: null, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { user, message: 'Login successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error during user login:', error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
