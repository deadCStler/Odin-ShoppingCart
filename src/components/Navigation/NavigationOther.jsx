import { NavLink } from "react-router-dom";
import NavigationCSS from "./Navigation.module.css";
import { BrandLinks, ProductLinks, ContactLinks } from "./NavSubMenus";
import { useEffect, useState } from "react";

const CalculateLeft = (key) => {
  let left = 53;
  for (let i = 1; i < key; i++) {
    const eleWidth = document.getElementById(i).offsetWidth;
    left = left + eleWidth + 53;
  }
  return left;
};

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
      const width = activeElement.querySelector("span").offsetWidth;
      const left = CalculateLeft(activeElement.querySelector("span").id);
      return { width, left };
    }
  };

  useEffect(() => {
    setDimensions(initialValue());
  }, []);

  const handleMouseEnter = (event) => {
    const width = event.target.offsetWidth;
    const left = CalculateLeft(event.target.id);
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
          <span onMouseEnter={handleMouseEnter} id="1">
            Home
          </span>
        </NavLink>
      </li>
      <li onMouseEnter={handleBrandClick} onMouseLeave={handleBrandClick}>
        <NavLink
          className={`${NavigationCSS.link} ${
            brandLI ? NavigationCSS.hover : ""
          }`}
          to="/brand"
        >
          <span onMouseEnter={handleMouseEnter} id="2">
            Brand
          </span>
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
          <span onMouseEnter={handleMouseEnter} id="3">
            Product
          </span>
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
              id="4"
            >
              Special Campaign
            </span>
          </NavLink>
        </li>
      )}

      <li>
        <NavLink className={NavigationCSS.link} to="/news">
          <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="5"
          >
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
              id="6"
            >
              Franchise
            </span>
          </NavLink>
        </li>
      )}

      <li>
        <NavLink className={NavigationCSS.link} to="/store">
          <span
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="7"
          >
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
          <span onMouseEnter={handleMouseEnter} id="8">
            Contact
          </span>
        </NavLink>
        <div onMouseLeave={handleMouseLeave}>
          <ContactLinks display={contactLI} mode={mode} />
        </div>
      </li>
      {mode === "laptop" && (
        <div
          className={NavigationCSS.line}
          style={{
            width: dimensions.width,
            left: dimensions.left,
          }}
        ></div>
      )}
    </>
  );
}

export default NaivgationOther;
