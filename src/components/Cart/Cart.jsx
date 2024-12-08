import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CartContext from "../../context/CartContex";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const cartList = Object.values(cart);
  if (cartList.length === 0) {
    return <div className={styles.cart}>no items in card</div>;
  } else {
    return (
      <ol>
        {cartList.map((item) => (
          <li key={item.id}>
            <div> {item.title}</div>
            <div>quantity : {item.quantity}</div>
          </li>
        ))}
      </ol>
    );
  }
};

export default Cart;
