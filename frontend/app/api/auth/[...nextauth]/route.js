import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const { username, password } = credentials
        try {
          const user = await axios.post("http://localhost:8000/auth/", {
            username,
            password
          })
          return user.data
        } catch (error) {
          console.log(error)
        }
      }
    })
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role // (admin || user) => data.role from authorize() function added to token object
        token.fullName = user.fullName
        token.firstName = user.firstName
        token.lastName = user.lastName
        token.image = user.image
      }
      return token
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role // admin || user from jwt() function added to session.user
        session.user.fullName = token.fullName
        session.user.firstName = token.firstName
        session.user.lastName = token.lastName
        session.user.image = token.image
      }
      return session
    }
  },
  pages: {
    signIn: "/login"
  }
})

export { handler as GET, handler as POST }
