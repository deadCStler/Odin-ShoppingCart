import { useState } from "react";
import NavigationCSS from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { BrandLinks, ProductLinks, ContactLinks } from "./NavSubMenus";
import whiten from "../../assets/whiten.png";

function Navigation({ mode }) {
  const [brandLI, setBrandLI] = useState(false);
  const [productLI, setProductLI] = useState(false);
  const [contactLI, setContactLI] = useState(false);

  const handleBrandClick = () => setBrandLI(!brandLI);
  const handleProductClick = () => setProductLI(!productLI);
  const handleContactClick = () => setContactLI(!contactLI);

  return (
    <ul className={NavigationCSS.navMenu}>
      {mode === "mobile" ? (
        <>
          <li>
            <Link className={NavigationCSS.link} to="/">
              Home
            </Link>
          </li>
          <li onClick={handleBrandClick}>
            <span>Brand</span>
            <img
              src={whiten}
              alt="arrow"
              className={brandLI ? NavigationCSS.open : NavigationCSS.arrow}
            />
          </li>
          <BrandLinks display={brandLI} />
          <li onClick={handleProductClick}>
            <span>Product</span>
            <img
              src={whiten}
              alt="arrow"
              className={productLI ? NavigationCSS.open : NavigationCSS.arrow}
            />
          </li>
          <ProductLinks display={productLI} />
          <li>
            <Link className={NavigationCSS.link} to="/news">
              News
            </Link>
          </li>
          <li>
            <Link className={NavigationCSS.link} to="/store">
              Store
            </Link>
          </li>
          <li onClick={handleContactClick}>
            <span>Contact</span>
            <img
              src={whiten}
              alt="arrow"
              className={contactLI ? NavigationCSS.open : NavigationCSS.arrow}
            />
          </li>
          <ContactLinks display={contactLI} />
        </>
      ) : (
        <>
          <li>
            <NavLink className={NavigationCSS.link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={NavigationCSS.link} to="/brand">
              Brand
            </NavLink>
          </li>
          <li>
            <NavLink className={NavigationCSS.link} to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className={NavigationCSS.link} to="/specialcampaign">
              Special Campaign
            </NavLink>
          </li>
          <li>
            <NavLink className={NavigationCSS.link} to="/news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className={NavigationCSS.link} to="/store">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink className={NavigationCSS.link} to="/contact">
              Contact
            </NavLink>
          </li>
          {/* need to set the navigation line dynamically and based on the hover is will move and will come back on current page */}
          <div className={NavigationCSS.line}></div>
        </>
      )}
    </ul>
  );
}

export default Navigation;
