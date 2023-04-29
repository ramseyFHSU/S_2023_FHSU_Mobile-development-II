import React, { createContext, useState,useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (item) => {
    setCartItems((prevItems) => {
      return prevItems.filter((i) => i.id !== item.id);
    });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };

  const values = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    calculateTotalPrice,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const Cart = () => {
  return useContext(CartContext);
};

