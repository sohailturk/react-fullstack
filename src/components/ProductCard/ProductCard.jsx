import React from "react";
import styles from "./ProductCard.module.css";
import { AddToCart } from "../AddToCart";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.list}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
