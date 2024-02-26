import whiten from "../../assets/whiten.png";
import NavigationCSS from "./Navigation.module.css";
import { BrandLinks, ProductLinks, ContactLinks } from "./NavSubMenus";
import { Link } from "react-router-dom";

function NavigationMobile({
  brandLI,
  productLI,
  contactLI,
  handleBrandClick,
  handleProductClick,
  handleContactClick,
  mode,
}) {
  return (
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
      <BrandLinks display={brandLI} mode={mode} />
      <li onClick={handleProductClick}>
        <span>Product</span>
        <img
          src={whiten}
          alt="arrow"
          className={productLI ? NavigationCSS.open : NavigationCSS.arrow}
        />
      </li>
      <ProductLinks display={productLI} mode={mode} />
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
      <ContactLinks display={contactLI} mode={mode} />
    </>
  );
}

export default NavigationMobile;
