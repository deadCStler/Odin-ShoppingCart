import NavigationCSS from "./Navigation.module.css";
import { Link } from "react-router-dom";

function BrandLinks({ display, mode }) {
  return (
    <div className={display ? NavigationCSS.displayListItems : ""}>
      {mode === "mobile" ? (
        <Link className={NavigationCSS.sublink}>Brand</Link>
      ) : (
        ""
      )}
      {mode === "laptop" ? <div className={NavigationCSS.filler}></div> : ""}
      <Link to="/brand/brandprofile" className={NavigationCSS.sublink}>
        Brand Profile
      </Link>
      <Link to="/brand/development" className={NavigationCSS.sublink}>
        Development
      </Link>
    </div>
  );
}

function ProductLinks({ display, mode }) {
  return (
    <ul className={display ? NavigationCSS.displayListItems : ""}>
      {mode === "mobile" ? (
        <Link className={NavigationCSS.sublink}>Product</Link>
      ) : (
        ""
      )}
      {mode === "laptop" ? <div className={NavigationCSS.filler}></div> : ""}
      <Link to="/product/women-clothing" className={NavigationCSS.sublink}>
        Women&apos;s Clothing
      </Link>
      <Link to="/product/men-clothing" className={NavigationCSS.sublink}>
        Men&apos;s Clothing
      </Link>
      <Link to="/product/jewelery" className={NavigationCSS.sublink}>
        Jewelery
      </Link>
      <Link to="/product/electronics" className={NavigationCSS.sublink}>
        Electonics
      </Link>
    </ul>
  );
}

function ContactLinks({ display, mode }) {
  return (
    <ul className={display ? NavigationCSS.displayListItems : ""}>
      {mode === "mobile" ? (
        <Link className={NavigationCSS.sublink}>Contact</Link>
      ) : (
        ""
      )}
      {mode === "laptop" ? <div className={NavigationCSS.filler}></div> : ""}
      <Link to="/contact/opportunities" className={NavigationCSS.sublink}>
        Opportunities
      </Link>
      <Link to="/contact/supplierchannels" className={NavigationCSS.sublink}>
        Supplier Channels
      </Link>
    </ul>
  );
}

export { BrandLinks, ProductLinks, ContactLinks };
