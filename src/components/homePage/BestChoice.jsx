import BestChoiceCSS from "./BestChoice.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductDisplay from "../product/ProductDisplay";

function BestChoice() {
  const [data, setData] = useState([]);
  const [endPoint, setEndPoint] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      let tmpArr = [];
      json.map((elem) => {
        if (elem.category === "women's clothing") {
          tmpArr.push(elem);
        }
      });
      setEndPoint(tmpArr);
      setData(json);
    })();
  }, []);

  const handleMouseOver = (value) => {
    let tmpArr = [];
    data.map((elem) => {
      if (elem.category === value) {
        tmpArr.push(elem);
      }
    });
    setEndPoint(tmpArr);
  };

  return (
    <div className={BestChoiceCSS.main}>
      <h1 className={BestChoiceCSS.title}>Best Choice</h1>
      {data.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ul className={BestChoiceCSS.menu}>
            <li onMouseEnter={() => handleMouseOver("women's clothing")}>
              <Link to="/product/women-clothing">Women&apos;s Clothing</Link>
            </li>
            <li onMouseEnter={() => handleMouseOver("men's clothing")}>
              <Link to="/product/men-clothing">Men&apos;s Clothing</Link>
            </li>
            <li onMouseEnter={() => handleMouseOver("jewelery")}>
              <Link to="/product/jewelery">Jewelery</Link>
            </li>
            <li onMouseEnter={() => handleMouseOver("electronics")}>
              <Link to="/product/electronics">Electronics</Link>
            </li>
          </ul>
          <ProductDisplay data={endPoint} numberOfProducts={3} />
        </>
      )}
    </div>
  );
}

export default BestChoice;
