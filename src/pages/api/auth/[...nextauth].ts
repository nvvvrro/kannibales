import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProfile from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "prisma/index";

/**
 * @description This is the next-auth configuration for the [...nextAuth] page. It is used to authenticate users with different providers.
 * @example localhost:3000/api/auth/signin
 * @example localhost:3000/api/auth/signout
 * @example localhost:3000/api/auth/redirect
 */
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    FacebookProfile({
      clientId: process.env.FACEBOOK_ID || "",
      clientSecret: process.env.FACEBOOK_SECRET || "",
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID || "",
      clientSecret: process.env.TWITTER_SECRET || "",
      version: "2.0",
    }),
  ],
  secret: process.env.SECRET || "",
});
