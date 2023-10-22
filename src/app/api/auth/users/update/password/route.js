// localhost:3000/api/auth/users/update/password

import { getServerSession } from "next-auth/next"
import authOptions from "../../../[...nextauth]/options"
import { NextResponse } from "next/server";
import { getUserByEmail, updateUser } from "../../../../../../../prisma/users";
import { hashPassword, passwordValidator } from "@/app/lib/users-auth";

export const PATCH = async (req) => {
    // const body = await req.json();
    // console.log('this is body',body);
    
    // return NextResponse.json({message: 'kir'})
    try {
        const session = await getServerSession(authOptions);
        // checking if user is authenticated
        if(!session) {
            return NextResponse.json({message: 'User is Not Authenticated'}, {status: 401})
        }
        
        // getting the data form body and session
        const body = await req.json();
        const email = session.user.email;
        const { oldPassword, newPassword } = body;
        console.log(email, oldPassword, newPassword);

        // getting the user's information to match the old password
        const user = await getUserByEmail(email);

        // checking if the user even existed in database
        if(!user) {
            return NextResponse.json({message: 'User Does Not Exist'}, {status: 422})
        }

        // checking if the entered old password is a match to the pass in database
        const isPasswordValid = await passwordValidator(oldPassword, user.password)

        if(!isPasswordValid) {
            return NextResponse.json({message: 'Password Does Not Match'}, {status: 403})
        }

        // creating the new password witch is hashed a well
        const newHashedPassword = await hashPassword(newPassword)

        // cretating an updated user's data and passing it to the updator function in our db
        const updatedUserData = {
            password: newHashedPassword,
        }

        const updatedUser = updateUser(updatedUserData, email)

        return NextResponse.json({message: 'Password Updated'}, {status: 201})

    } catch(err) {
        return NextResponse.json({message: 'updating password failed', Error: err}, {status: 500})
    }
}