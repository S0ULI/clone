'use client';

import { useContext, useState } from 'react';
import CartContext from '../store/cart-context';

import Cards from '../components/cards/Cards';
import Image from 'next/image';
import Backdrop from '../components/modal/backdrop';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  let content;
  if (cartCtx.totalProducts === 0) {
    content = (
      <div className="flex flex-col gap-4">
        <p className="text-slate-500">You Have No Products in Your Cart 🥺</p>
        <div className="w-full flex justify-center items-center">
          <Image src="/cart.svg" alt="..." width={200} height={400} />
        </div>
      </div>
    );
  } else {
    content = <Cards data={cartCtx.products} />;
  }

  const modalToggleHandler = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  const confirmHandler = () => {
    cartCtx.clearCart();
    setShowModal(false);
  };

  const cancelHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-color">My Favorites</h1>
        <span className="text-sm">All</span>
      </div>
      {content}
      {cartCtx.totalProducts !== 0 && (
        <div className="flex w-full justify-end">
          <button
            className="text-white bg-primary-color hover:bg-orange-400 transition-colors duration-300 text-sm px-4 py-3 rounded-xl"
            onClick={modalToggleHandler}
          >
            Clear Cart
          </button>
        </div>
      )}
      {showModal && (
        <Backdrop
          cancelHandler={cancelHandler}
          confirmHandler={confirmHandler}
          task="Clear Your Cart?"
        />
      )}
    </>
  );
};

export default Cart;
