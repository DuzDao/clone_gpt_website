"use client";

import Form from "next/form";
import { signUp } from "@/app/lib/actions";

export default function Signup() {
  return (
    <div>
      <h1>This is signup page</h1>
      <Form action={signUp}>
        <input type="text" name="name" placeholder="Username" />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </Form>
      <h1>Already have an account?</h1>
      <button>
        <a href="/auth/login">Log In</a>
      </button>
    </div>
  );
}
