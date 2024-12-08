import React, { useState } from "react";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import CartContext from "./context/CartContex";

const App = () => {
  const [cart, setCart] = useState({});

  function increaseQuantity(product) {
    const newCart = {
      ...cart,
    };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.name,
        price: product.price,
        quantity: 0,
      };
    }
    newCart[product.id].quantity += 1;
    setCart((prev) => ({ ...prev, ...newCart }));
  }

  function decreaseQuantity(product) {
    const newCart = {
      ...cart,
    };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;

    if (newCart[product.id].quantity <= 0) {
      delete cart[product.id];
    }
    setCart((prev) => ({ ...prev, ...newCart }));
  }

  return (
    <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity }}>
      <Cart />
      <ProductList />
    </CartContext.Provider>
  );
};

export default App;
