'use client'

import { useContext } from 'react';
import CartContext from '../store/cart-context';

import Cards from '../components/cards/Cards';
import SectionWrapper from '../components/layout/SectionWrapper';

const CartPage = () => {
  const cartCtx = useContext(CartContext)

  let content;
  if(cartCtx.totalProducts === 0) {
    content = <p>you have no products in your cart</p>;
  } else {
    content = <Cards data={cartCtx.products}/>
  }

  return (
    <SectionWrapper>
      <h1>My Favorites</h1>
      {content}
    </SectionWrapper>
  );
};

export default CartPage;
