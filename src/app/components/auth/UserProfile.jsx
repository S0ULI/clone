'use client'

import UpdatePasswordForm from "../forms/UpdatePasswordForm";
import SectionWrapper from "../layout/SectionWrapper";
import LogoutButton from "./LogoutButton"
import { useSession } from "next-auth/react"

const UserProfile = () => {
    const {data: session, status} = useSession();
    console.log(session);

    if(status === 'loading') {
        return (
        <span>loading...</span>
        )
    }

  return (
    <div className="w-full bg-[#1f1f1f] rounded-xl">
        <SectionWrapper mSt='py-8'>
            <div className="flex flex-col gap-4">
                <div className="text-white/80">
                    <span>email: </span>
                    <span>{session.user.email}</span>
                </div>
                <UpdatePasswordForm/>
            <LogoutButton/>
            </div>
        </SectionWrapper>
    </div>
  )
}

export default UserProfile