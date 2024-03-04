"use server";

import ConnectDB from "@/DataBase";
import bcrypt from "bcryptjs";
import User from "@/DataBase/Models/UserModel";
import { redirect } from "next/navigation";

export async function UpdatePassword({ newPassword, token }) {
  //console.log(token);
  await ConnectDB();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);
  await User.findOneAndUpdate(
    { verifyToken: token },
    { password: newPassword }
  );
  redirect("/login");
}
