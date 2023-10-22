'use client';

import { updatePassword } from '@/app/lib/users-auth';
import { useRef, useState } from 'react';

import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

const UpdatePasswordForm = () => {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const [oldPassType, setOldPassType] = useState('password');
  const [passType, setPassType] = useState('password');
  const [updateResult, setUpdateResult] = useState('')
  
  const submitHandler = async (e) => {
    e.preventDefault();

    const oldPasswordValue = oldPasswordRef.current.value;
    const newPasswordValue = newPasswordRef.current.value;
    const userData = {
      oldPassword: oldPasswordValue,
      newPassword: newPasswordValue
    }

    setUpdateResult('loading...')

    const res = await updatePassword(userData);

    if(res.message === 'Password Updated'){
      setUpdateResult('Password Have Been Updated')
    } else {
      setUpdateResult('Password Did Not Update')
    }
  };

  const oldPassVisibilityHandler = () => {
    if (oldPassType === 'password') {
      setOldPassType('text');
    }
    if (oldPassType === 'text') {
      setOldPassType('password');
    }
  };

  const newPassVisibilityHandler = () => {
    if (passType === 'password') {
      setPassType('text');
    }
    if (passType === 'text') {
      setPassType('password');
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col gap-4 max-w-sm'>
        <div className={"flex flex-col gap-2 w-full"}>
        <label
          htmlFor='oldpass'
          className="text-slate-300 text-sm"
        >
          <span>Old Password</span> <span className="text-primary-color">*</span>
        </label>
        <div>
          <div
            className={`rounded-xl px-4 py-[6px] bg-white dark:bg-[#3b3b3b] text-slate-500 w-full flex justify-between items-center gap-3`}
          >
            <input
              type={oldPassType}
              id='oldpass'
              ref={oldPasswordRef}
              className="outline-none w-full bg-transparent"
              required
            />
            <span
              className="cursor-pointer hover:text-black text-xl"
              onClick={oldPassVisibilityHandler}
            >
              {oldPassType === 'password' ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
        </div>
        </div>
        <div className={"flex flex-col gap-2 w-full"}>
        <label
          htmlFor='newpass'
          className="text-slate-300 text-sm"
        >
          <span>New Password</span> <span className="text-primary-color">*</span>
        </label>
        <div>
          <div
            className={`rounded-xl px-4 py-[6px] bg-white dark:bg-[#3b3b3b] text-slate-500 w-full flex justify-between items-center gap-3`}
          >
            <input
              type={passType}
              id='newpass'
              ref={newPasswordRef}
              className="outline-none w-full bg-transparent"
              required
            />
            <span
              className="cursor-pointer hover:text-black text-xl"
              onClick={newPassVisibilityHandler}
            >
              {passType === 'password' ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
        </div>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
        <p className={`${!updateResult && 'hidden'} text-cyan-600`}>{updateResult}</p>
        <button className='bg-secondary-color hover:bg-primary-color px-4 py-2 rounded-xl transition-colors duration-300'>update password</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
