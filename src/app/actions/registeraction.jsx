"use server";

import ConnectDB from "../../DataBase";
import User from "../../DataBase/Models/UserModel";
import bcrypt from "bcryptjs";

export async function RegisterAction(formdata) {
  ConnectDB();
  const { email, password, name } = formdata;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  formdata.password = hashedPassword;
  console.log(formdata);
  const finaldata = { ...formdata, role: "user" };

  await User.create(finaldata);
}
