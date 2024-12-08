import React from "react";
import styles from "./ProductCard.module.css";
import { AddToCart } from "../AddToCart";

const ProductCard = ({
  product,
  increaseQuantity,
  decreaseQuantity,
  cart,
  quantity,
}) => {
  return (
    <div className={styles.list}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <AddToCart
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cart={cart}
        product={product}
        quantity={quantity}
      />
    </div>
  );
};

export default ProductCard;
