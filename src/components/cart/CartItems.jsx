import {
  addToCart,
  getCart,
  reduceFromCart,
  removeFromCart,
} from "../../utils/LocalStorage";
import CartCSS from "./Cart.module.css";
import bin from "../../assets/bin.svg";

function CartItems({ itemsArr, setCart }) {
  const addItem = (id) => {
    addToCart(id);
    setCart(getCart());
  };

  const removeSingleItem = (id) => {
    reduceFromCart(id);
    setCart(getCart());
  };

  const removeItem = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  return (
    <div className={CartCSS.itemsContainer}>
      <h1 className={CartCSS.heading}> Shopping Cart</h1>
      {itemsArr.length === 0 ? (
        <h1>No Items In Cart</h1>
      ) : (
        itemsArr.map((ele, index) => (
          <div key={index} className={CartCSS.item}>
            <div className={CartCSS.itemLeft}>
              <img src={ele.data.image} alt="" />
            </div>
            <div className={CartCSS.itemRight}>
              <div>
                <strong>{ele.data.title}</strong>
              </div>
              <div className={CartCSS.category}>
                Category: {ele.data.category}
              </div>
              <div className={CartCSS.price}>
                <strong>
                  ₹{Math.round(ele.data.price * 82.85) * ele.freq}
                </strong>
              </div>
              <div className={CartCSS.nav}>
                <img
                  src={bin}
                  alt="remove"
                  className={CartCSS.remove}
                  onClick={() => removeItem(ele.data.id)}
                />

                <div>
                  <button onClick={() => removeSingleItem(ele.data.id)}>
                    -
                  </button>
                  <div>{ele.freq}</div>
                  <button onClick={() => addItem(ele.data.id)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartItems;
