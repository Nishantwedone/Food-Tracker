import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      return true; // Allow all users to sign in
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/dashboard"; // Redirect to the dashboard after successful login
    },
  },
});
