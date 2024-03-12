import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductDisplay from "../product/ProductDisplay";

function SearchResult() {
  const { value } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setData([]);
      const res = await fetch(`https://fakestoreapi.com/products/`);
      const json = await res.json();
      let matchedItems = [];
      for (let i = 0; i < json.length; i++) {
        let currentTitle = json[i].title.toLowerCase();
        if (currentTitle.includes(value.toLowerCase())) {
          matchedItems.push(json[i]);
        }
      }
      setData(matchedItems);
    })();
  }, [value]);

  return (
    <>
      {data.length === 0 ? (
        <h1>No results found!</h1>
      ) : (
        <ProductDisplay data={data} />
      )}
    </>
  );
}

export default SearchResult;
