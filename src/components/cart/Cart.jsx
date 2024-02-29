import logo from "../../assets/cart.svg";
import CartCSS from "./Cart.module.css";

function Cart() {
  return (
    <div className={CartCSS.main}>
      <img src={logo} alt="sign in svg" />
      <div>Cart (0)</div>
    </div>
  );
}

export default Cart;
