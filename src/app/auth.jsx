import ConnectDB from "../DataBase";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../DataBase/Models/UserModel";
import bcrypt from "bcryptjs";

export const {
  auth,
  signIn,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        await ConnectDB();
        const user = await User.findOne({ email: credentials.email });
        if (user) {
          const matched = await bcrypt.compare(
            credentials?.password,
            user.password
          );
          console.log(user?.password, credentials?.password, matched);
          if (matched) {
            return user;
          }
          return null;
        } else return null;
      },
    }),
  ],
  secret: process.env.Auth_Secret,
  pages: {
    signIn: "/login",
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role;
      }
      // console.log("I run first: Token  :", token)
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.role = token.role;
      }
      console.log(" SESSION DATA :", session);
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 5,
  },
});
