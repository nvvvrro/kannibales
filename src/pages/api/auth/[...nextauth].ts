import NextAuth, { NextAuthOptions } from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import FacebookProfile from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import clientPromise from "lib/mongodb";

const uri = process.env.MONGODB_URI as string;

/**
 * @description This is the next-auth configuration for the [...nextAuth] page. It is used to authenticate users with different providers.
 * @example localhost:3000/api/auth/signin
 * @example localhost:3000/api/auth/signout
 * @example localhost:3000/api/auth/redirect
 */
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
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
  database: uri,
  secret: process.env.SECRET || "",
} as NextAuthOptions);
