import { getUserByEmail } from "../../../../../prisma/users";
import { passwordValidator } from "@/app/lib/users-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/prismadb";

const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials) {
                const user = await getUserByEmail(credentials.email);
                if(!user) {
                    throw new Error(`We Can't Find a User With This Email`)
                }

                const isValid = await passwordValidator(credentials.password, user.password)

                if(!isValid){
                    throw new Error('Your Password is Incorrect')
                }

                return {
                    email: user.email
                };

            },
        })
    ],
    session: {
        strategy: 'jwt',
    },
    jwt: {
        maxAge: 60 * 60 * 24 * 7
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/signin',
    }
}

export default authOptions;