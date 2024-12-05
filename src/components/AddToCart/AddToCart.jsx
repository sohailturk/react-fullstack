import React, { useState } from "react";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(3);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  if (quantity === 0) {
    return <button>Add to cart</button>;
  } else {
    return (
      <div>
        <button onClick={increaseQuantity}>+</button>
        <p>{quantity}</p>
        <button onClick={decreaseQuantity}>-</button>
      </div>
    );
  }
};

export default AddToCart;
