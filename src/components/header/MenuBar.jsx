import HeaderCSS from "./Header.module.css";
import { useState } from "react";

function MenuIcon({ onClick }) {
  const [change, setChange] = useState(false);

  const handleClick = () => {
    onClick();
    setChange(!change);
  };

  return (
    <div className={change ? HeaderCSS.change : ""} onClick={handleClick}>
      <div className={HeaderCSS.bar1}></div>
      <div className={HeaderCSS.bar2}></div>
      <div className={HeaderCSS.bar3}></div>
    </div>
  );
}

export default MenuIcon;
