import NavigationCSS from "./Navigation.module.css";
import { Link } from "react-router-dom";

function BrandLinks({ display }) {
  return (
    <div className={display ? NavigationCSS.displayListItems : ""}>
      <Link className={NavigationCSS.sublink}>Brand Profile</Link>
      <Link className={NavigationCSS.sublink}>Founder</Link>
      <Link className={NavigationCSS.sublink}>Development</Link>
      <Link className={NavigationCSS.sublink}>Designer Team</Link>
    </div>
  );
}

function ProductLinks({ display }) {
  return (
    <ul className={display ? NavigationCSS.displayListItems : ""}>
      <Link className={NavigationCSS.sublink}>Household</Link>
      <Link className={NavigationCSS.sublink}>Daily Life</Link>
      <Link className={NavigationCSS.sublink}>Health & Beauty</Link>
      <Link className={NavigationCSS.sublink}>Fashion</Link>
      <Link className={NavigationCSS.sublink}>Digital Products</Link>
      <Link className={NavigationCSS.sublink}>Food & Beverage</Link>
    </ul>
  );
}

function ContactLinks({ display }) {
  return (
    <ul className={display ? NavigationCSS.displayListItems : ""}>
      <Link className={NavigationCSS.sublink}>Opportunities</Link>
      <Link className={NavigationCSS.sublink}>SuppLinker Channels</Link>
    </ul>
  );
}

export { BrandLinks, ProductLinks, ContactLinks };
