import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string | null;
      name?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
    email: string;
    password?: string; // Add this if you are storing passwords
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Check if user exists and password matches
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (user && user.password === credentials.password) {
          // Return user object if credentials are valid
          return { id: user.id, email: user.email };
        }

        return null; // Return null if credentials are invalid
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id as string, // Type assertion to satisfy TypeScript
          email: token.email as string | null,
        };
      }
      return session;
    },
  },
};

export default authOptions;
