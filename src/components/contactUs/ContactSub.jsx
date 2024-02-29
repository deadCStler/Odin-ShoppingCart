import ContactCSS from "./Contact.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LearnMore from "../../assets/graylink.png";
import RedLearnMore from "../../assets/whitearrow.png";
import SupplierBig from "../../assets/supplierbg.jpg";
import Supplier from "../../assets/suppliersmallbg.jpg";

export function Opportunities() {
  return (
    <div className={ContactCSS.main}>
      <h1 className={ContactCSS.heading}>Opportunities for Cooperation</h1>
      <hr className={ContactCSS.hr} />
      <div className={ContactCSS.grid}>
        <div className={ContactCSS.gridEle}>
          <div className={ContactCSS.gridHeading}>Contact for Legal Issue</div>
          <p>Mr. XYZ</p>
          <p>compliance@minibuy.com</p>
        </div>
        <div className={ContactCSS.gridEle}>
          <div className={ContactCSS.gridHeading}>Contact for Supplier</div>
          <p>400-7**-55**</p>
          <p>globalsourcing@minibuy.com</p>
        </div>
        <div className={ContactCSS.gridEle}>
          <div className={ContactCSS.gridHeading}>Contact for Media/PR</div>
          <p>media@minibuy.com</p>
        </div>
        <div className={ContactCSS.gridEle}>
          <div className={ContactCSS.gridHeading}>Contact for complaint</div>
          <p>complaint@minibuy.com</p>
        </div>
      </div>
    </div>
  );
}

export function SupplierOpp() {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <div className={ContactCSS.rel}>
      <div className={ContactCSS.suppIMG}>
        {window.innerWidth < 761 ? (
          <img src={Supplier} alt="supplier small" />
        ) : (
          <img src={SupplierBig} alt="supplier big" />
        )}
      </div>
      <div className={ContactCSS.suppText}>
        <h1>Suppliers Channel</h1>
        <div className={ContactCSS.suppDiv}>
          <p>Please Contact Us:</p>
          <p>Email: globalsourcing@minibuy.com</p>
        </div>
        <Link
          to="/franchise"
          className={ContactCSS.learnMore}
          onMouseEnter={() => setLearnMore(true)}
          onMouseLeave={() => setLearnMore(false)}
        >
          <img src={learnMore ? RedLearnMore : LearnMore} alt="normal learn" />
        </Link>
      </div>
    </div>
  );
}
