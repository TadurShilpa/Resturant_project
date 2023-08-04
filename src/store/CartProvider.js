import React, { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemToCartHandler = (item) => {
    const updateItems = [...items, item];
    setItems(updateItems);
    console.log(updateItems);
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
