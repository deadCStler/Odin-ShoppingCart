import { getCart } from "../../utils/LocalStorage";
import CartCSS from "./Cart.module.css";

//the idea here is we'll fetch the products and and display the item per price: refer flipkart for this page

function CartOrderSummary() {
  const cart = getCart();
  return (
    <div className={CartCSS.orderSummary}>
      <h1>Order Summary</h1>
      <div>items</div>
      <button>Buy</button>
    </div>
  );
}

export default CartOrderSummary;
