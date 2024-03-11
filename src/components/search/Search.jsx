import { useState } from "react";
import searchIcon from "../../assets/blacksearch.png";
import SearchCSS from "./search.module.css";

function Search() {
  const [showBar, setShowBar] = useState(false);

  const toggleSearchBar = () => {
    setShowBar(!showBar);
  };

  return (
    <div>
      {showBar ? (
        <div className={`${SearchCSS.main} ${SearchCSS.animated}`}>
          <button className={SearchCSS.closeButton} onClick={toggleSearchBar}>
            Close
          </button>
          <input
            type="text"
            className={SearchCSS.input}
            placeholder="Search..."
          />
          <img src={searchIcon} alt="searchIcon" className={SearchCSS.logo} />
        </div>
      ) : (
        <div className={SearchCSS.main} onClick={toggleSearchBar}>
          <img src={searchIcon} alt="searchIcon" className={SearchCSS.logo} />
        </div>
      )}
    </div>
  );
}

export default Search;
