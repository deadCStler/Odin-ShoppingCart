import Navigation from "../Navigation/Navigation";
import HeaderCSS from "./Header.module.css";
import searchIcon from "../../assets/blacksearch.png";
import logo from "../../assets/miniso-seeklogo.webp";
import MenuIcon from "./MenuBar";
import { useState } from "react";

function Header({ windowWidth }) {
  const [display, setDisplay] = useState(false);

  const toggleDialog = () => {
    setDisplay(!display);
  };

  return (
    <div className={HeaderCSS.main}>
      <div className={HeaderCSS.left}>
        <img src={logo} alt="MiniBuy" className={HeaderCSS.logo} />
      </div>
      <div className={HeaderCSS.right}>
        {windowWidth <= 760 ? (
          <>
            <div className={display ? HeaderCSS.opaqueEle : ""}></div>
            <MenuIcon onClick={toggleDialog} />
            <dialog open={display} className={HeaderCSS.dialog} id="myDialog">
              <Navigation mode="mobile" />
            </dialog>
          </>
        ) : (
          <>
            {windowWidth <= 1199 ? (
              <div className={HeaderCSS.temp}></div>
            ) : (
              <></>
            )}
            <Navigation mode="other" />
          </>
        )}
        <img
          src={searchIcon}
          alt="searchIcon"
          className={HeaderCSS.searchIcon}
        />
      </div>
    </div>
  );
}

export default Header;
