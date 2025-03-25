import React from "react";
import styles from "./ProductCard.module.css";
import { AddToCart } from "../AddToCart";
import { ReduxAddToCart } from "../ReduxAddToCart";

const ProductCard = ({
  product,
  increaseQuantity,
  decreaseQuantity,
  quantity,
  cart,
}) => {
  return (
    <div className={styles.list}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      {/* <AddToCart
        product={product}
        quantity={quantity}
      /> */}
      <ReduxAddToCart product={product} />
    </div>
  );
};

export default ProductCard;
