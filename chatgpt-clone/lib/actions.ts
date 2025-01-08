'use server';
import { redirect } from "next/navigation";

export async function signUp(formData: any) {
  const res = await fetch(process.env.URL + "/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": formData.get("name"),
      "email": formData.get("email"),
      "password": formData.get("password")
    })
  })
  redirect("/auth/login");
}