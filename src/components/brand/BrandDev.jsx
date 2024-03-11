import { useState } from "react";
import BrandCSS from "./Brand.module.css";
import MiniBuyEvents from "./Events";

function BrandDev() {
  const [year, setYear] = useState(2022);
  return (
    <>
      <h1 className={BrandCSS.heading}>Development</h1>
      <div className={BrandCSS.navGrid}>
        <div onClick={() => setYear(2022)}>2022</div>
        <div onClick={() => setYear(2021)}>2021</div>
        <div onClick={() => setYear(2020)}>2020</div>
        <div onClick={() => setYear(2019)}>2019</div>
        <div onClick={() => setYear(2018)}>2018</div>
      </div>
      <div className={BrandCSS.content}>
        <div>
          <h1>{year}</h1>
          <p>Year</p>
        </div>
        <div>
          <MiniBuyEvents year={year} />
        </div>
      </div>
    </>
  );
}

export default BrandDev;
