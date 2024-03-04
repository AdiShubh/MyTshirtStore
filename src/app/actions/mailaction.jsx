"use server";

import ConnectDB from "@/DataBase";
import User from "@/DataBase/Models/UserModel";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";
export async function mailAction({ email }) {
  console.log(email);
  await ConnectDB();
  const result = await User.findOne({ email: email });
  if (result) {
    const token = nanoid(32);
    //console.log("Token :", token);
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const htmlBody = `
        Click here to reset
        <a href ="http://localhost:3000/reset-password/${token}">
          Reset Password
        </a>
      `;
    const info = await transport.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: htmlBody, // html body
    });

    await User.findOneAndUpdate({ email: email }, { verifyToken: token });
    //console.log("Email sent: %s", info.messageId);
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } else {
    console.log("user does not exist");
  }
}
