"use client";

import Form from "next/form";
import { logIn } from "@/app/lib/actions";
import AuthInput from "@/app/components/UI/AuthInput";

export default function Signup() {
  return (
    <div className="pt-5">
      <h1 className="font-bold text-3xl text-center">Welcome back</h1>
      <Form action={logIn} className="flex flex-col gap-5 pt-12">
        <AuthInput type="text" name="email" placeholder="Email address*" />
        <AuthInput type="password" name="password" placeholder="Password" />

        <button
          type="submit"
          className="chatgpt-branch-bg-green text-white px-5 rounded py-3 hover:brightness-90 text-base mt-2"
        >
          Continue
        </button>
      </Form>
      <div className="flex flex-row justify-center gap-2 pt-2">
        <h1>Do not have an account?</h1>
        <button>
          <a className="chatgpt-branch-green" href="/auth/signup">
            Sign Up
          </a>
        </button>
      </div>
    </div>
  );
}
