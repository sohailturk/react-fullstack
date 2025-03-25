import React, { useState } from "react";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import CartContext from "./context/CartContex";
import { Provider } from "react-redux";

const App = () => {
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

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
    <div>
      <Cart showCart={showCart} setShowCart={setShowCart} />
      <button onClick={() => setShowCart(!showCart)}>
        {showCart ? "Close Cart" : "Show Cart"}
      </button>
      <ProductList />
    </div>
  );
};

export default App;
