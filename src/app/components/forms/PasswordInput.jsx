'use client';

import { useState, useRef } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

const PasswordInput = ({ title, inputValue }) => {
  const passwordRef = useRef();
  const [passType, setPassType] = useState('password');

  const passVisibilityHandler = () => {
    if (passType === 'password') {
      setPassType('text');
    }
    if (passType === 'text') {
      setPassType('password');
    }
  };

  const passValue = passwordRef.current.value;
  console.log(passValue);

  inputValue('heloo');

  return (
    <>
      <div className={"flex flex-col gap-2 w-full"}>
        <label
          htmlFor={title.split(' ').join('-')}
          className="text-slate-300 text-sm"
        >
          <span>{title}</span> <span className="text-primary-color">*</span>
        </label>
        <div>
          <div
            className={`rounded-xl px-4 py-[6px] bg-white dark:bg-[#3b3b3b] text-slate-500 w-full flex justify-between items-center gap-3`}
          >
            <input
              type={passType}
              id={title.split(' ').join('-')}
              ref={passwordRef}
              className="outline-none w-full bg-transparent"
              required
            />
            <span
              className="cursor-pointer hover:text-black text-xl"
              onClick={passVisibilityHandler}
            >
              {passType === 'password' ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
