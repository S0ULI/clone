'use client';

import { useContext } from 'react';

import CartContext from '@/app/store/cart-context';

const AddToCart = ({ id, data, myStyle }) => {
  const cartCtx = useContext(CartContext);
  const productStatus = cartCtx.ifProductIsInCart(+id);
  const toggleCartStatusHandler = () => {
    if (!productStatus) {
      cartCtx.addToCart(data);

    } else {
      cartCtx.removeFromCart(+id);
    }
  };

  return (
    <button
      onClick={toggleCartStatusHandler}
      className={`hover:bg-shop-button-color bg-secondary-color/80 dark:hover:bg-background-color-c dark:text-text-color-dark  dark:bg-cyan-600  py-4 text-background-color-c rounded-xl transition-all duration-300 ${myStyle}`}
    >
      {productStatus ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};

export default AddToCart;
