"use server";

import { signIn } from "../auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export async function LoginAction(formdata) {
  try {
    await signIn("credentials", {
      email: formdata.email,
      password: formdata.password,
      redirect: false,
    });

    return { message: "Login Successful" };
  } catch (error) {
    //console.log(error)
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" };
        default:
          return { error: "Unknown Error Found" };
      }
    }

    throw error;
  }
}
