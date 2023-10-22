'use client'

import { useRef, useState } from 'react';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';

import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'
import { useSession } from 'next-auth/react';

import Link from 'next/link';

const SignInFrom = () => {
  const {status} = useSession();
  const router = useRouter()
  const [passType, setPassType] = useState('password');
  const [serverError, setServerError] = useState('')
  const passwordRef = useRef();
  const emailRef = useRef();

  const passVisibilityHandler = () => {
    if (passType === 'password') {
        setPassType('text')
    }
    if(passType === 'text') {
        setPassType('password')
    }
}

  const submitHandler = async (e) => {
    e.preventDefault();
    const passwordValue = passwordRef.current.value;
    const emailValue = emailRef.current.value;

    const result = await signIn('credentials', {
      redirect: false,
      email: emailValue,
      password: passwordValue
    })
    if(!result.ok) {
      setServerError(result.error)
      return
    }
    console.log(result);
    router.push('/')
  }

  if(status === 'loading') {
    return (
    <span>loading...</span>
    )
  }

  if(status === 'authenticated') {
    return router.replace('/profile')
  }

  return (
    <form
      action=""
      className="bg-[#1f1f1f] rounded-3xl px-6 py-8 w-full max-w-sm flex flex-col gap-10"
      onSubmit={submitHandler}
    >
      <h2 className="self-center w-fit text-xl text-white">Sign in</h2>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-slate-300 text-sm">
            <span>Email</span> <span className="text-primary-color">*</span>
          </label>
          <input
            type="text"
            className="outline-none rounded-xl px-4 py-[6px] text-slate-500 w-full"
            id="email"
            ref={emailRef}
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="password" className="text-slate-300 text-sm">
            <span>Password</span> <span className="text-primary-color">*</span>
          </label>
          <div  className={`rounded-xl px-4 py-[6px] bg-white text-slate-500 w-full flex justify-between items-center gap-3`}>
          <input
            type={passType}
            id="password"
            ref={passwordRef}
            className='outline-none w-full bg-transparent'
            // pattern='(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.{8,})'
            required
          />
          <span className='cursor-pointer hover:text-black text-xl' onClick={passVisibilityHandler}>{passType === 'password' ? <AiFillEye/> : <AiFillEyeInvisible/>}</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
      <div className={`${!serverError && 'hidden'} text-sm text-primary-color select-none`}>{serverError}</div>
        <div className="text-sm flex gap-2">
          <p className="text-white/40">{`Don't Have an Account?`}</p>
          <Link href="signup" className="text-sky-500 hover:underline">
            Sign Up
          </Link>
        </div>
        <button className="bg-primary-color px-4 py-2 rounded-xl hover:bg-secondary-color transition-colors duration-300">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignInFrom;
