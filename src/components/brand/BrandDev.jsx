import { useState } from "react";
import BrandCSS from "./Brand.module.css";
import MiniBuyEvents from "./Events";

function BrandDev() {
  const [year, setYear] = useState(2022);

  const handleOnClick = (yr) => {
    setYear(yr);
  };

  return (
    <div className={BrandCSS.devContent}>
      <h1 className={BrandCSS.heading}>Development</h1>
      <div className={BrandCSS.navGrid}>
        <div
          className={year === 2022 ? BrandCSS.red : ""}
          onClick={() => handleOnClick(2022)}
        >
          2022
        </div>
        <div
          className={year === 2021 ? BrandCSS.red : ""}
          onClick={() => handleOnClick(2021)}
        >
          2021
        </div>
        <div
          className={year === 2020 ? BrandCSS.red : ""}
          onClick={() => handleOnClick(2020)}
        >
          2020
        </div>
        <div
          className={year === 2019 ? BrandCSS.red : ""}
          onClick={() => handleOnClick(2019)}
        >
          2019
        </div>
        <div
          className={year === 2018 ? BrandCSS.red : ""}
          onClick={() => handleOnClick(2018)}
        >
          2018
        </div>
      </div>
      <div className={BrandCSS.content}>
        <div className={BrandCSS.year}>
          <h1>{year}</h1>
          <p>Year</p>
        </div>
        <MiniBuyEvents year={year} />
      </div>
    </div>
  );
}

export default BrandDev;
