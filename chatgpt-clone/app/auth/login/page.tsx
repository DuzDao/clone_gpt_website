"use client";

import Form from "next/form";
import { logIn } from "@/app/lib/actions";

export default function Signup() {
  return (
    <div>
      <h1>This is login page</h1>
      <Form action={logIn}>
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Submit</button>
      </Form>
      <h1>Don't have an account?</h1>
      <button>
        <a href="/auth/signup">Sign Up</a>
      </button>
    </div>
  );
}
