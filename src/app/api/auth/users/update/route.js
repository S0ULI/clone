// localhost:3000/api/auth/users/update

import { getServerSession } from "next-auth/next"
import authOptions from "../../[...nextauth]/options";

import { updateUser } from "../../../../../../prisma/users";
import { hashPassword } from "@/app/lib/users-auth";
import { NextResponse } from "next/server";

export const PATCH = async (req) => {
    try{
        const session = await getServerSession(authOptions);

        const body = await req.json();
        const { email, username, firstname, lastname, avatar } = body;
    
        if(!session) {
            return NextResponse.json({ message: 'User is Not Authenticated' }, {status: 401})
        }
    
        if (
            !email ||
            !email.split('').includes('@')
          ) {
            return NextResponse.json({ message: 'invalid inputs' }, { status: 422 });
          }
          const updatedUserData = {
            email,
            username,
            firstname,
            lastname,
            avatar,
          };
    
          const updatedUser = await updateUser(updatedUserData, session.user.email)
    
          return NextResponse.json( updatedUser, { status: 201 })

    } catch(err) {
        return NextResponse.json({message: 'updating user failed', Error: err}, {status: 500})
    }

}