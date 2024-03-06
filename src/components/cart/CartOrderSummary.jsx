import CartCSS from "./Cart.module.css";

function CartOrderSummary({ itemsArr }) {
  let total = 0;

  return (
    <div>
      <div className={CartCSS.orderSummary}>
        <h1 className={CartCSS.heading}>Order Summary</h1>
        {itemsArr.map((ele, index) => {
          const itemTotal = Math.round(ele.data.price * 82.85) * ele.freq;
          total += itemTotal;

          return (
            <div key={index} className={CartCSS.sumHead}>
              <div className={CartCSS.sumTitle}>{ele.data.title}</div>
              <div>x{ele.freq}</div>
              <div className={CartCSS.price}>
                <strong>₹{itemTotal}</strong>
              </div>
            </div>
          );
        })}
        <h2 className={CartCSS.total}>
          <span>Total</span>
          <span>₹{total}</span>
        </h2>
        <button className={CartCSS.button}>Buy</button>
      </div>
    </div>
  );
}

export default CartOrderSummary;
