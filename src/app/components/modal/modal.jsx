import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

const Modal = ({ cancelHandler }) => {
  return (
    <div className="bg-background-color-p rounded-xl px-8 py-4 flex flex-col gap-2 w-full sm:w-fit z-[1000]">
        <button onClick={cancelHandler} className='text-2xl text-primary-color self-end mb-4'>
          <RxCross2 />
        </button>
      <p className='text-slate-900 text-lg'>You Are Not Loged in Yet 🥺</p>
      <p className='text-slate-500 text-sm'>{`if You Don't Have an Account You Can Easily Create One 👇`}</p>
      <Link href="/sign-in" className='px-4 py-2 rounded-xl bg-cyan-600 mt-6 w-fit text-white hover:bg-cyan-800 transition-colors duration-300 self-end'>Sign in</Link>
    </div>
  );
};

export default Modal;
