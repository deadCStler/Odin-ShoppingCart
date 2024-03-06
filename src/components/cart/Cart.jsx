import { Link } from "react-router-dom";
import logo from "../../assets/cart.svg";
import CartCSS from "./Cart.module.css";
import { getCart } from "../../utils/LocalStorage";

function Cart() {
  const items = Object.keys(getCart()).length;

  return (
    <Link to="/cart" className={CartCSS.main}>
      <img src={logo} alt="sign in svg" />
      <div>Cart ({items})</div>
    </Link>
  );
}

export default Cart;
