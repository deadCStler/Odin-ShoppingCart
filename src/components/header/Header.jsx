import Navigation from "../Navigation/Navigation";
import HeaderCSS from "./Header.module.css";
import searchIcon from "../../assets/blacksearch.png";
import logo from "../../assets/miniso-seeklogo.webp";
import MenuIcon from "./MenuBar";
import { useState, useEffect } from "react";

function Header() {
  const [display, setDisplay] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
              <>
                <div className={HeaderCSS.temp}></div>
                <Navigation mode="tablet" />
              </>
            ) : (
              <Navigation mode="laptop" />
            )}
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
