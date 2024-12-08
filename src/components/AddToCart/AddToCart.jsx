import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContex";

const AddToCart = ({ product }) => {
  const { increaseQuantity, decreaseQuantity, cart } = useContext(CartContext);

  const quantity = cart[product.id] ? cart[product.id].quantity : 0;

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

export default AddToCart;
