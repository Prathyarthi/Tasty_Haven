import connectToDb from "@/app/db"
import UserModel from "@/app/models/userModel"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            id: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "user@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req): Promise<any> {
                const email = credentials?.email
                const password = credentials?.password
                await connectToDb()

                const user = await UserModel.findOne({
                    email: email
                })

                if (!user) {
                    return null
                }

                const isPasswordCorrect = await user.comparePassword(password || "")

                if (isPasswordCorrect) {
                    return user
                }

                return null
            }
        })
    ], secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/signin',
    }
}
