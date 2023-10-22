// localhost:3000/api/auth/users/register

import { NextResponse } from 'next/server';

import { createUser, userExists } from '../../../../../../prisma/users';
import { hashPassword } from '@/app/lib/users-auth';

export const POST = async (req) => {
  try {
    const body = await req.json();
    const { email, password, username, firstname, lastname, avatar } = body;

    if (
      !email ||
      !email.split('').includes('@') ||
      !password ||
      !password.trim().length > 8
    ) {
      return NextResponse.json({ message: 'invalid inputs' }, { status: 422 });
    }
    
    const isUserExists = await userExists(email);

    if(isUserExists) {
      return NextResponse.json({message: 'user already exists'}, {status: 422})
    }

    const hashedPassword = await hashPassword(password);
    const newUserData = {
      email,
      password: hashedPassword,
      username,
      firstname,
      lastname,
      avatar,
    };

    const newUser = await createUser(newUserData);

    return NextResponse.json(newUser, { status: 201 });

  } catch (err) {
    NextResponse.json(
      { message: 'there is a problem in api auth', Error: err },
      { status: 500 }
    );
  }
};
