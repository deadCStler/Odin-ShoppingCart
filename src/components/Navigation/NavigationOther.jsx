import { NavLink } from "react-router-dom";
import NavigationCSS from "./Navigation.module.css";
import { BrandLinks, ProductLinks, ContactLinks } from "./NavSubMenus";
import { useEffect, useState } from "react";

function NaivgationOther({
  brandLI,
  productLI,
  contactLI,
  handleBrandClick,
  handleProductClick,
  handleContactClick,
  mode,
}) {
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });

  const initialValue = () => {
    const activeElement = document.querySelector(".active");
    if (activeElement) {
      const { width, left } = activeElement.getBoundingClientRect();
      return { width, left };
    }
  };

  useEffect(() => {
    setDimensions(initialValue());
  }, []);

  const handleMouseEnter = (event) => {
    const { width, left } = event.target.getBoundingClientRect();
    setDimensions({ width, left });
  };

  const handleMouseLeave = () => {
    const { width, left } = initialValue();
    setDimensions({ width, left });
  };

  return (
    <>
      <li onMouseLeave={handleMouseLeave}>
        <NavLink className={NavigationCSS.link} to="/">
          <span onMouseEnter={handleMouseEnter}>Home</span>
        </NavLink>
      </li>
      <li onMouseEnter={handleBrandClick} onMouseLeave={handleBrandClick}>
        <NavLink
          className={`${NavigationCSS.link} ${
            brandLI ? NavigationCSS.hover : ""
          }`}
          to="/brand"
        >
          <span onMouseEnter={handleMouseEnter}>Brand</span>
        </NavLink>
        <div onMouseLeave={handleMouseLeave}>
          <BrandLinks display={brandLI} mode={mode} />
        </div>
      </li>
      <li onMouseEnter={handleProductClick} onMouseLeave={handleProductClick}>
        <NavLink
          className={`${NavigationCSS.link} ${
            productLI ? NavigationCSS.hover : ""
          }`}
          to="/product"
        >
          <span onMouseEnter={handleMouseEnter}>Product</span>
        </NavLink>
        <div onMouseLeave={handleMouseLeave}>
          <ProductLinks display={productLI} mode={mode} />
        </div>
      </li>

      {mode === "laptop" && (
        <li>
          <NavLink className={NavigationCSS.link} to="/specialcampaign">
            <span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Special Campaign
            </span>
          </NavLink>
        </li>
      )}

      <li>
        <NavLink className={NavigationCSS.link} to="/news">
          <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            News
          </span>
        </NavLink>
      </li>

      {mode === "laptop" && (
        <li>
          <NavLink className={NavigationCSS.link} to="/franchise">
            <span
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Franchise
            </span>
          </NavLink>
        </li>
      )}

      <li>
        <NavLink className={NavigationCSS.link} to="/store">
          <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Store
          </span>
        </NavLink>
      </li>
      <li onMouseEnter={handleContactClick} onMouseLeave={handleContactClick}>
        <NavLink
          className={`${NavigationCSS.link} ${
            contactLI ? NavigationCSS.hover : ""
          }`}
          to="/contact"
        >
          <span onMouseEnter={handleMouseEnter}>Contact</span>
        </NavLink>
        <div onMouseLeave={handleMouseLeave}>
          <ContactLinks display={contactLI} mode={mode} />
        </div>
      </li>
      {/* {setDimensions(initialValue())} */}
      {mode === "laptop" && (
        <div
          className={NavigationCSS.line}
          style={{
            width: dimensions.width,
            left: dimensions.left - 595,
          }}
        ></div>
      )}
    </>
  );
}

export default NaivgationOther;
