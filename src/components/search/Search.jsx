import searchIcon from "../../assets/blacksearch.png";
import SearchCSS from "./search.module.css";

function Search() {
  return (
    <div className={SearchCSS.main}>
      <img src={searchIcon} alt="searchIcon" className={SearchCSS.logo} />
    </div>
  );
}

export default Search;
