import CartCSS from "./Cart.module.css";
import { getCart } from "../../utils/LocalStorage";
import { useEffect, useState } from "react";

async function getItem(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await res.json();
  return json;
}

//so the idea here is once we have the cart obj we'll iterate on it and fetch the elements and store it in an array and then we can display it further

function CartItems() {
  const [items, setItems] = useState([]);
  const cart = getCart();

  useEffect(() => {
    if (cart) {
      //  const arr =
    }
  }, []);

  return <div className={CartCSS.itemsContainer}></div>;
}

export default CartItems;
