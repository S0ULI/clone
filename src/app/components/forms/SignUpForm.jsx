'use client'

import { useRef, useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'

import { createUser } from '@/app/lib/users-auth';

const SignUpForm = () => {
    const {status} = useSession()
    const router = useRouter()
    const firstnameInputRef = useRef()
    const lastnameInputRef = useRef()
    const usernameInputRef = useRef()
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [emailValidationError, setEmailValidationError] = useState('')
    const [passwordValidationError, setPasswordValidationError] = useState('')
    const [passType, setPassType] = useState('password')
    const [serverError, setServerError] = useState('')

    useEffect(() => {
        // regexpresioins for password validation
        const isLength = new RegExp('(?=.{8,})').test(passwordValue)
        const isLower = new RegExp('(?=.*[a-z])').test(passwordValue)
        const isUpper = new RegExp('(?=.*[A-Z])').test(passwordValue)
        const isNumber = new RegExp('(?=.*[0-9])').test(passwordValue)

        // password validation
            if(passwordValue.length < 1) {
                return
            }
            if(!isLength) {
                setPasswordValidationError('Must be at least 8 Characters')
                return
            }
            if(!isLower) {
                setPasswordValidationError('Must Contain at least a Lowercase')
                return
            }
            if(!isUpper) {
                setPasswordValidationError('Must Contain at least an Uppercase')
                return
            }
            if(!isNumber) {
                setPasswordValidationError('Must Contain at least a Number')
                return
            } else {
                setPasswordValidationError('')
                return
            }
            
        }, [passwordValue])
        
    useEffect(() => {
        if(emailValue.length < 1 ) {
                return
            }
            if(!emailValue.split('').includes('@')) {
                setEmailValidationError('is not Valid')
                return 
            }
            else {
                setEmailValidationError('')
            }
    }, [emailValue])


    const onChangePasswordHandler = (e) => {
        setPasswordValue(e.target.value)
    }

    const onChangeEmailHandler = (e) => {
        setEmailValue(e.target.value);
    }
    

    const submitHandler = async (e) => {
        e.preventDefault();

        const firstnameValue = firstnameInputRef.current.value;
        const lastnameValue = lastnameInputRef.current.value;
        const usernameValue = usernameInputRef.current.value;

        const userInfo = {
            firstname: firstnameValue,
            lastname: lastnameValue,
            username: usernameValue,
            email: emailValue,
            password: passwordValue
        }
        try {
          const user = await createUser(userInfo)
          if(user.id){
            const result = await signIn('credentials', {
              redirect: false,
              email: emailValue,
              password: passwordValue
            })
            if(!result.ok) {
              log('cant sign in')
              return
            }
          }
          router.push('/')
        } catch(err) {
          console.log(err);
          setServerError('you have already have an account with this email')
        }
        
    }

    const passVisibilityHandler = () => {
        if (passType === 'password') {
            setPassType('text')
        }
        if(passType === 'text') {
            setPassType('password')
        }
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
      <h2 className="self-center w-fit text-xl text-white">Sign Up</h2>
      <div className="w-full flex flex-col gap-4">
        <div className="full flex justify-between items-center gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="firstname" className="text-slate-300 text-sm">
              Name
            </label>
            <input
              type="text"
              className="outline-none rounded-xl px-4 py-[6px] text-slate-500 w-full"
              id="firstname"
              ref={firstnameInputRef}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="lastname" className="text-slate-300 text-sm">
              Last Name
            </label>
            <input
              type="text"
              className="outline-none rounded-xl px-4 py-[6px] text-slate-500 w-full"
              id="lastname"
              ref={lastnameInputRef}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="username" className="text-slate-300 text-sm">
            Username
          </label>
          <input
            type="text"
            className="outline-none rounded-xl px-4 py-[6px] text-slate-500 w-full"
            id="username"
            ref={usernameInputRef}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-slate-300 text-sm">
            <span>Email</span> <span className="text-primary-color">*</span>
          </label>
          <input
            type="text"
            className={`${emailValidationError && 'ring-1 ring-primary-color'} outline-none rounded-xl px-4 py-[6px] text-slate-500 w-full`}
            id="email"
            value={emailValue}
            onChange={onChangeEmailHandler}
            required
          />
        </div>
        <div className={"flex flex-col gap-2 w-full"}>
          <label htmlFor="password" className="text-slate-300 text-sm">
            <span>Password</span> <span className="text-primary-color">*</span>
          </label>
          <div  className={`${passwordValidationError && 'ring-1 ring-primary-color'} rounded-xl px-4 py-[6px] bg-white text-slate-500 w-full flex justify-between items-center gap-3`}>
          <input
            type={passType}
            id="password"
            value={passwordValue}
            onChange={onChangePasswordHandler}
            className='outline-none w-full bg-transparent'
            // pattern='(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.{8,})'
            required
          />
          <span className='cursor-pointer hover:text-black text-xl' onClick={passVisibilityHandler}>{passType === 'password' ? <AiFillEye/> : <AiFillEyeInvisible/>}</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className={`${!emailValidationError && 'hidden'} text-sm text-primary-color select-none`}>{`Email ` + emailValidationError}</div>
        <div className={`${!passwordValidationError && 'hidden'} text-sm text-primary-color select-none`}>{`Password ` + passwordValidationError}</div>
        <div className={`${!serverError && 'hidden'} text-sm text-primary-color select-none`}>{serverError}</div>
        <div className="text-sm flex gap-2 select-none">
          <p className="text-white/40">Already Have an Account? </p>
          <Link href="signin" className="text-sky-500 hover:underline">
            Sign in
          </Link>
        </div>
        <button className="bg-primary-color disabled:bg-secondary-color px-4 py-2 rounded-xl hover:bg-secondary-color transition-colors duration-300 outline-none" disabled={emailValidationError || passwordValidationError}>
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
