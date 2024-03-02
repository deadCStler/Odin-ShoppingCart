import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCSS from "./Product.module.css";
import ProductDisplay from "./ProductDisplay";

function ProductMain({ endPoint }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData([]);
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${endPoint}`
      );
      const json = await res.json();
      setData(json);
    })();
  }, [endPoint]);

  return (
    <>
      {data.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ul className={ProductCSS.menu}>
            <li>
              <Link to="/product/women-clothing">Women&apos;s Clothing</Link>
            </li>
            <li>
              <Link to="/product/men-clothing">Men&apos;s Clothing</Link>
            </li>
            <li>
              <Link to="/product/jewelery">Jewelery</Link>
            </li>
            <li>
              <Link to="/product/electronics">Electronics</Link>
            </li>
          </ul>
          <ProductDisplay data={data} />
        </>
      )}
    </>
  );
}

export default ProductMain;
