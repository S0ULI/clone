'use client';

import { useState } from 'react';
import UpdatePasswordForm from '../forms/UpdatePasswordForm';
import SectionWrapper from '../layout/SectionWrapper';
import LogoutButton from './LogoutButton';
import { useSession } from 'next-auth/react';

const UserProfile = () => {
  const [toggle, setToggle] = useState(true);

  const { data: session, status } = useSession();
  console.log(session);

  if (status === 'loading') {
    return <span>loading...</span>;
  }

  const toggleHandler = () => {
    if(toggle) {
        setToggle(false)
    } else {
        setToggle(true)
    }
  }

  return (
    <div className="w-full sm:w-fit sm:min-w-[24rem] bg-[#1f1f1f] rounded-xl">
      <SectionWrapper mSt="py-8">
        <div className="flex flex-col gap-4">
          <div className="text-white/80">
            <span>{session.user.email}</span>
          </div>
          <div>
            <button onClick={toggleHandler} className='w-full px-4 py-2 ring-1 ring-white text-white rounded-xl mb-4' >
                Change Password
            </button>
            <div className={`${!toggle ? 'h-0' : 'h-[250px]'} overflow-hidden transition-height duration-300`}>
              <UpdatePasswordForm />
            </div>
          </div>
          <LogoutButton />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default UserProfile;
