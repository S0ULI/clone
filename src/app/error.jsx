'use client';

import { useEffect, useState } from "react";

const Error = ({error, reset}) => {
  const [err, setErr] = useState();

    useEffect(() => {
      setErr(error);
    }, [error])
    
    const clickHandler = () => {
      reset()
    }
    
    console.log(err);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
        <h1 className="text-primary-color text-2xl">Something Went Wrong</h1>
        <div className='text-dark-background-color-p/80 dark:text-white/40'>
        <p>Calm Down</p>
        <p>checkout the error below 👇</p>
        </div>
        <button onClick={clickHandler} className="bg-primary-color px-6 py-4 rounded-xl">Try Again</button>
    </div>
  )
}

export default Error;