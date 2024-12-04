import React from "react";
import { ProductCard } from "../ProductCard";

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 100 },
    { id: 4, name: "Tablet", price: 700 },
    { id: 5, name: "Smartwatch", price: 200 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
