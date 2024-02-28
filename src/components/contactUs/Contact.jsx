import SupplierBig from "../../assets/supplierbg.jpg";
import Supplier from "../../assets/suppliersmallbg.jpg";
import { Opportunities } from "./ContactSub";
import ContactCSS from "./Contact.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LearnMore from "../../assets/graylink.png";
import RedLearnMore from "../../assets/whitearrow.png";

function Contact() {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <>
      <Opportunities />
      <div className={ContactCSS.suppIMG}>
        {window.innerWidth < 761 ? (
          <img src={Supplier} alt="supplier small" />
        ) : (
          <img src={SupplierBig} alt="supplier big" />
        )}
      </div>
      <div className={ContactCSS.suppText}>
        <h1>Suppliers Channel</h1>
        <div>
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
    </>
  );
}

export default Contact;
