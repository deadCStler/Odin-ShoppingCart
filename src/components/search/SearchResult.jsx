import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductDisplay from "../product/ProductDisplay";
import SearchFilterBar from "./searchBar";
import SearchCSS from "./search.module.css";
function SearchResult() {
  const { value } = useParams();
  const [data, setData] = useState([]);
  const [filterItems, setFilterItems] = useState([]);

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
      setFilterItems(matchedItems);
    })();
  }, [value]);

  const filterCatData = (category) => {
    let filteredItems = data.filter((item) => item.category === category);
    setFilterItems(filteredItems);
  };

  const filterPrice = (minPrice = 0, maxPrice = Number.MAX_VALUE) => {
    let filteredItems = data.filter(
      (item) =>
        Math.round(item.price * 82.85) >= minPrice &&
        Math.round(item.price * 82.85) <= maxPrice
    );
    setFilterItems(filteredItems);
  };

  return (
    <div className={SearchCSS.display}>
      <SearchFilterBar
        filterCatData={filterCatData}
        filterPrice={filterPrice}
      />
      {filterItems.length === 0 ? (
        <h1>No results found!</h1>
      ) : (
        <>
          <ProductDisplay data={filterItems} />
        </>
      )}
    </div>
  );
}

export default SearchResult;
