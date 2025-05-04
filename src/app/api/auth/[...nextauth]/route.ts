import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      if (url === "/api/auth/signout") {
        return baseUrl; // Redireciona para a página inicial após logout
      }
      return baseUrl + "/chat"; // Redireciona para /chat após login
    },
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;