import SearchCSS from "./search.module.css";

function SearchFilterBar({ filterCatData, filterPrice }) {
  return (
    <div className={SearchCSS.filters}>
      <div className={SearchCSS.category}>
        <h3>Category</h3>
        <div onClick={() => filterCatData("women's clothing")}>Women</div>
        <div onClick={() => filterCatData("men's clothing")}>Men</div>
        <div onClick={() => filterCatData("electronics")}>Electronics</div>
        <div onClick={() => filterCatData("jewellery")}>Jewellery</div>
      </div>
      <div>
        <div onClick={() => filterPrice(500, 1000)}>₹500-₹1000</div>
        <div onClick={() => filterPrice(1000, 2000)}>₹1,000-₹2,000</div>
        <div onClick={() => filterPrice(2000, 5000)}>₹2,000-₹5,000</div>
        <div onClick={() => filterPrice(5000)}>Over ₹5,000</div>
      </div>
    </div>
  );
}

export default SearchFilterBar;
