import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
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
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.SECRET || "",

  // ...add more providers here
});
