'use server';
import { redirect } from "next/navigation";

async function signUp(formData: any) {
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
  if (res.ok) {
    redirect("/auth/login");
  }    
}

async function logIn(formData: any) {
  await fetch(process.env.URL + "/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": formData.get("email"),
      "password": formData.get("password")
    })
  })
}

export {signUp, logIn}