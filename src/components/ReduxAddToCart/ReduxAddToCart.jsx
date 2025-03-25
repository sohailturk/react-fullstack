import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";

const ReduxAddToCart = ({ product, cart }) => {
  const quantity = useSelector((state) => {
    return state.state.items[product.id]?.quantity || 0;
  });

  const increaseQuantity = () => {};

  const decreaseQuantity = () => {};

  if (quantity === 0) {
    return (
      <button onClick={() => increaseQuantity(product)}>Add to cart</button>
    );
  } else {
    return (
      <div>
        <button onClick={() => increaseQuantity(product)}>+</button>
        <span>{quantity}</span>
        <button onClick={() => decreaseQuantity(product)}>-</button>
      </div>
    );
  }
};

export default ReduxAddToCart;
