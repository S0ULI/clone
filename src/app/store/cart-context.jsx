import { createContext, useState } from 'react';

const CartContext = createContext({
  products: [],
  totalProducts: 0,
  addToCart: (productData) => {},
  removeFromCart: (productId) => {},
  ifProductIsInCart: (productId) => {},
});

export const CartContextProvider = ({ children }) => {
  const [userCart, setUserCart] = useState([]);

  const addToCartHandler = (product) => {
    setUserCart((prevUserCart) => prevUserCart.concat(product));
  };

  const removeFromCartHandler = (productId) => {
    setUserCart((prevUserCart) => 
      prevUserCart.filter((product) => productId !== product.id)
    )
  }

  const ifProductIsInCartHandler = (productId) => 
    userCart.some((product) => product.id === productId);
  
  const context = {
    products: userCart,
    totalProducts: userCart.length,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    ifProductIsInCart: ifProductIsInCartHandler,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContext;
