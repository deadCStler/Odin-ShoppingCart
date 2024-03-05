import CartCSS from "./Cart.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/miniso-seeklogo.webp";
import CartItems from "./CartItems";
import CartOrderSummary from "./CartOrderSummary";

//fetch the api here as we'll be using in both and refer flipkart for page desgin

function CartPage() {
  return (
    <>
      <Link to="/" className={CartCSS.header}>
        <img src={logo} alt="MiniBuy" className={CartCSS.logo} />
      </Link>
      <div className={CartCSS.container}>
        <CartItems />
        <CartOrderSummary />
      </div>
    </>
  );
}

export default CartPage;
