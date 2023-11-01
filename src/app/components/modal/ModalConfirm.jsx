import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

const ModalConfirm = ({ cancelHandler, confirmHandler, task }) => {
  return (
    <div className="bg-background-color-p rounded-xl px-8 py-4 flex flex-col gap-8 w-full sm:w-fit min-w-[24rem] z-[1000]">
        <div className='flex flex-col gap-2'>
        <button onClick={cancelHandler} className='text-2xl text-primary-color self-end'>
          <RxCross2 />
        </button>
            <p className='text-slate-900 text-lg'>Are You Sure?</p>
            <p className='text-slate-500 text-sm'>{`You Want to ${task}`}</p>
        </div>
        <div className='w-full flex justify-between items-center'>
            <button onClick={cancelHandler} className='px-6 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-800 w-fit text-white  transition-colors duration-300'>No</button>
            <button onClick={confirmHandler} className='px-6 py-2 rounded-xl bg-primary-color w-fit text-white hover:bg-primary-color/60 transition-colors duration-300'>Yes</button>
        </div>
    </div>
  );
};

export default ModalConfirm;