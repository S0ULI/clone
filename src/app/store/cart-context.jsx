import { createContext, useState, useEffect } from 'react';

const CartContext = createContext({
  products: [],
  totalProducts: 0,
  addToCart: (productData) => {},
  removeFromCart: (productId) => {},
  ifProductIsInCart: (productId) => {},
  clearCart: () => {}
});

export const CartContextProvider = ({ children }) => {
  const storage = localStorage.getItem('userCart');
  let initCart = []
  if(storage) {
    initCart = JSON.parse(storage);
  }
  const [userCart, setUserCart] = useState(initCart);

  
  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(userCart))
  }, [userCart])

  const addToCartHandler = (product) => {
    setUserCart((prevUserCart) => prevUserCart.concat(product));
  };

  const removeFromCartHandler = (productId) => {
    setUserCart((prevUserCart) => 
      prevUserCart.filter((product) => productId !== product.id)
    )
  }

  const clearCartHandler = () => {
    setUserCart([]);
  }

  const ifProductIsInCartHandler = (productId) => 
    userCart.some((product) => product.id === productId);
  
  const context = {
    products: userCart,
    totalProducts: userCart.length,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    ifProductIsInCart: ifProductIsInCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartContext;
