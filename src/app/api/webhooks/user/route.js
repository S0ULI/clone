// url => /api/webhooks/user

import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

import { Webhook } from 'svix';
import prisma from '../../../../../prisma/prismadb';

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

async function handler(req) {
  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local'
    );
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);
  const headersList = headers();
  const heads = {
    'svix-id': headersList.get('svix-id'),
    'svix-timestamp': headersList.get('svix-timestamp'),
    'svix-signature': headersList.get('svix-signature'),
  };
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;
  try {
    evt = wh.verify(body, heads);
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new NextResponse('Error occured', {
      status: 400,
    });
  }

  // get the type and all the needed Data
  // get the type and all the needed Data
  // get the type and all the needed Data
  const eventType = evt.type;
  
  if(eventType === 'user.created' || eventType === 'user.updated'){
    const {id, email_addresses, username, first_name, last_name, profile_image_url} = evt.data;
  
    // store data in a new obj
      const userData = {
          email: email_addresses[0].email_address,
          username: username,
          firstname: first_name,
          lastname: last_name,
          avatar: profile_image_url
      }
        try {
          await prisma.user.upsert({
            where: {externalId: id},
            create: {
              externalId: id,
              ...userData
            },
            update: userData
          })
          return new NextResponse('created or updated user',{status: 201})
        } catch(err) {
          return new NextResponse({message: 'cant create or update user', ERROR: err}, {status: 500})
        }

  }

  if(eventType === 'user.deleted'){
    const {id} = evt.data;
    try {
      await prisma.user.delete({where: {externalId: id}})
      return NextResponse.json("user have been deleted", {status: 200})
    } catch(err) {
      return new NextResponse({message: 'cant delete user', ERROR: err}, {status: 500})
    }
  }

  return new NextResponse('', { status: 200 });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;