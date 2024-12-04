import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.list}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductCard;
