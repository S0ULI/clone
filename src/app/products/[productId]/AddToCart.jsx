'use client';

import { useContext, useState } from 'react';

import CartContext from '@/app/store/cart-context';

import Backdrop from '@/app/components/modal/backdrop';

const AddToCart = ({ id, data, myStyle }) => {
  const [modalShow, setModalShow] = useState(false);

  const cartCtx = useContext(CartContext);
  const productStatus = cartCtx.ifProductIsInCart(id);

  const toggleCartStatusHandler = () => {
    if (!productStatus) {
      cartCtx.addToCart(data);

    } else {
      cartCtx.removeFromCart(id);
    }
  };

  
  const modalHandler = () => {
    setModalShow(true)
  }
  const cancelHandler = () => {
    setModalShow(false)
  }

  return (
    <>
    <button
      // onClick={(isLoaded && userId) ? toggleCartStatusHandler : modalHandler}
      onClick={toggleCartStatusHandler}
      className={`hover:bg-shop-button-color bg-secondary-color/80 dark:hover:bg-background-color-c dark:text-text-color-dark dark:bg-cyan-600  py-4 text-background-color-c rounded-xl transition-all duration-300 ${myStyle}`}
    >
      {productStatus ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
    {/* {!userId && modalShow && <Backdrop cancelHandler={cancelHandler}/>} */}
    </>
  );
};

export default AddToCart;