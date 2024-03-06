import { useEffect } from "react";
import { addToCart, getCart, removeFromCart } from "../../utils/LocalStorage";
import CartCSS from "./Cart.module.css";

//so the idea here is once we have the cart obj we'll iterate on it and fetch the elements and store it in an array and then we can display it further

function CartItems({ itemsArr, setCart }) {
  const addItem = (id) => {
    addToCart(id);
    setCart(getCart());
  };

  const removeItem = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  console.log(itemsArr);
  return <div className={CartCSS.itemsContainer}></div>;
}

export default CartItems;
