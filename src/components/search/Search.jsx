import searchIcon from "../../assets/search.svg";
import SearchCSS from "./search.module.css";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("#searchForm").value;
    navigate(`/Search/${inputValue}`);
  };

  return (
    <div className={SearchCSS.main}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="searchForm"
          className={SearchCSS.input}
          placeholder="Search products"
        />
      </form>
      <img
        src={searchIcon}
        alt="searchIcon"
        className={SearchCSS.logo}
        onClick={handleFormSubmit}
      />
    </div>
  );
}

export default Search;
