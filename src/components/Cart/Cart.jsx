import React, { useContext, useMemo } from "react";
import styles from "./Cart.module.css";
import CartContext from "../../context/CartContex";
import { AddToCart } from "../AddToCart";

const Cart = ({ showCart }) => {
  const { cart } = useContext(CartContext);
  const cartList = Object.values(cart);

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartList.forEach((cartItem) => {
      totalPrice += cartItem.price * cartItem.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const totalPrice = useMemo(getTotalPrice, [cart]);

  if (!showCart) {
    return null;
  }

  if (cartList.length === 0) {
    return <div className={styles.cart}>no items in card</div>;
  } else {
    return (
      <div>
        <ol>
          {cartList.map((item) => (
            <li key={item.id}>
              <div> {item.title}</div>
              <div>
                <AddToCart product={item} /> ={" "}
                {item.price.toFixed(2) * item.quantity.toFixed(2)}
              </div>
              <hr />
            </li>
          ))}
        </ol>
        <div>TotalPrice : {totalPrice}</div>
      </div>
    );
  }
};

export default Cart;
