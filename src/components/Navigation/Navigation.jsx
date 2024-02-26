import { useState } from "react";
import NavigationCSS from "./Navigation.module.css";

import NavigationOther from "./NavigationOther";
import NavigationMobile from "./NavigationMobile";

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
        <NavigationMobile
          brandLI={brandLI}
          productLI={productLI}
          contactLI={contactLI}
          handleBrandClick={handleBrandClick}
          handleProductClick={handleProductClick}
          handleContactClick={handleContactClick}
          mode={mode}
        />
      ) : (
        <NavigationOther
          brandLI={brandLI}
          productLI={productLI}
          contactLI={contactLI}
          handleBrandClick={handleBrandClick}
          handleProductClick={handleProductClick}
          handleContactClick={handleContactClick}
          mode={mode}
        />
      )}
    </ul>
  );
}

export default Navigation;
