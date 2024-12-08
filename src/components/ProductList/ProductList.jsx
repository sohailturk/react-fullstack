import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../ProductCard";
import { Spinner } from "../Spinner";

const ProductList = ({ increaseQuantity, decreaseQuantity, cart }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/poducts");
        if (!response.status === 200) {
          throw new Error("Network response was not ok");
        }
        const result = await response.data;
        setProducts(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
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

export default memo(ProductList);
