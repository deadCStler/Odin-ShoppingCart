import { Link } from "react-router-dom";
import logo from "../../assets/cart.svg";
import CartCSS from "./Cart.module.css";

function Cart() {
  return (
    <Link to="/cart" className={CartCSS.main}>
      <img src={logo} alt="sign in svg" />
      <div>Cart (0)</div>
    </Link>
  );
}

export default Cart;
