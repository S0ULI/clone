'use client'

import { useContext } from 'react';
import CartContext from '../store/cart-context';

import Cards from '../components/cards/Cards';
import SectionWrapper from '../components/layout/SectionWrapper';
import Image from 'next/image';

const CartPage = () => {
  const cartCtx = useContext(CartContext)

  let content;
  if(cartCtx.totalProducts === 0) {
    content = (
      <div className='flex flex-col gap-4'>
        <p className='text-slate-500'>You Have No Products in Your Cart 🥺</p>
        <div className='w-full flex justify-center items-center'>
          <Image src='/cart.svg' alt='...' width={200} height={400} />
        </div>
      </div>
    )
  } else {
    content = <Cards data={cartCtx.products}/>
  }

  return (
    <SectionWrapper mSt='flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-bold text-primary-color">My Favorites</h1>
        <span className='text-sm text-slate-950'>All</span>
      </div>
      {content}
    </SectionWrapper>
  );
};

export default CartPage;
