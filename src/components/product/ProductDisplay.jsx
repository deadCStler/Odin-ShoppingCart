import { Link } from "react-router-dom";
import ProductCSS from "./Product.module.css";

function ProductDisplay({ data = [] }) {
  return (
    <div className={ProductCSS.productContainer}>
      {data.map((value) => {
        const { id, title, price, category, image } = value;
        return (
          <Link
            key={id}
            className={ProductCSS.product}
            to={`/product/${category}/${id}`}
          >
            <div>
              <img src={image} alt={title} />
            </div>
            <p className={ProductCSS.title}>{title}</p>
            <p className={ProductCSS.price}> ₹{Math.round(price * 82.85)}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductDisplay;
