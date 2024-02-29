import Navigation from "../Navigation/Navigation";
import HeaderCSS from "./Header.module.css";
import logo from "../../assets/miniso-seeklogo.webp";
import MenuIcon from "./MenuBar";
import { useState } from "react";
import SignIn from "../signIn/Signin";
import Cart from "../cart/Cart";
import Search from "../seacrh/Search";

function Header({ windowWidth }) {
  const [display, setDisplay] = useState(false);

  const toggleDialog = () => {
    setDisplay(!display);
  };

  return (
    <div className={HeaderCSS.main}>
      <div className={HeaderCSS.left}>
        {windowWidth < 761 ? (
          <>
            <div
              className={display ? HeaderCSS.opaqueEle : HeaderCSS.hideOpaque}
            ></div>
            <MenuIcon onClick={toggleDialog} />
            <dialog open={display} className={HeaderCSS.dialog} id="myDialog">
              <Navigation mode="mobile" />
            </dialog>
            <img src={logo} alt="MiniBuy" className={HeaderCSS.logo} />
          </>
        ) : (
          <img src={logo} alt="MiniBuy" className={HeaderCSS.logo} />
        )}
      </div>
      <div className={HeaderCSS.right}>
        {windowWidth < 761 ? (
          <></>
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
        <ol className={HeaderCSS.links}>
          <li>
            <Search />
          </li>
          <li>
            <SignIn />
          </li>
          <li>
            <Cart />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Header;
