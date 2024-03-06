import CartCSS from "./Cart.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/miniso-seeklogo.webp";
import CartItems from "./CartItems";
import CartOrderSummary from "./CartOrderSummary";
import { useEffect, useState } from "react";
import { getCart } from "../../utils/LocalStorage";

async function getItems(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await res.json();
  return json;
}

function CartPage() {
  const [cart, setCart] = useState(getCart());
  const [itemsArr, setItemsArr] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      let tmp = [];
      for (const item in cart) {
        const x = getItems(item);
        const cartItem = await Promise.resolve(x);
        tmp.push({ data: cartItem, freq: cart[item] });
      }
      setItemsArr(tmp);
    };

    if (cart) {
      apiCall();
    }
  }, [cart]);

  return (
    <>
      <Link to="/" className={CartCSS.header}>
        <img src={logo} alt="MiniBuy" className={CartCSS.logo} />
      </Link>
      <div className={CartCSS.container}>
        <CartItems itemsArr={itemsArr} setCart={setCart} />
        <CartOrderSummary itemsArr={itemsArr} />
      </div>
    </>
  );
}

export default CartPage;
