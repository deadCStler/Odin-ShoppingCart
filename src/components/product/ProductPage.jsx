import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCSS from "./Product.module.css";

function ProductPage() {
  const { id = 0 } = useParams();
  const [value, setValue] = useState({});

  useEffect(() => {
    (async () => {
      setValue({});
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const json = await res.json();
      setValue(json);
    })();
  }, [id]);
  return (
    <>
      {Object.keys(value).length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className={ProductCSS.main}>
          <div>
            <img src={value.image} alt="product image" />
          </div>
          <div>
            <p>{value.title}</p>
            <p> ₹{Math.round(value.price * 82.85)}</p>
            <p>{value.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
