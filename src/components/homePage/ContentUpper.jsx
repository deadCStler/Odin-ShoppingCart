import { useState } from "react";
import BrandHomeIMG from "../../assets/brandconceptnew.jpg";
import FranchiseIMG from "../../assets/distributor.jpg";
import LearnMore from "../../assets/graylink.png";
import RedLearnMore from "../../assets/whitearrow.png";

import ContentUpperCSS from "./ContentUpper.module.css";
import { Link } from "react-router-dom";

function HomePageBrand() {
  return (
    <Link to="/brand/brandprofile" className={ContentUpperCSS.brand}>
      <img
        src={BrandHomeIMG}
        alt="brand_profile_link_image"
        className={ContentUpperCSS.BrandHomeIMG}
      />
      <div className={ContentUpperCSS.profileText}>Brand Profile</div>
    </Link>
  );
}

function FranchiseUpper() {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <div className={ContentUpperCSS.info}>
      <p>Franchise Information</p>
      <div>We are looking for master franchisee !</div>
      <Link
        to="/franchise"
        className={ContentUpperCSS.learnMore}
        onMouseEnter={() => setLearnMore(true)}
        onMouseLeave={() => setLearnMore(false)}
      >
        <img src={learnMore ? RedLearnMore : LearnMore} alt="normal learn" />
      </Link>
    </div>
  );
}

function FranchiseLower() {
  return (
    <Link to="/franchise" className={ContentUpperCSS.FranchiseIMG}>
      <img src={FranchiseIMG} alt="franchise_link_image" />
      <div>Franchise</div>
    </Link>
  );
}

function ContentUpper() {
  return (
    <div className={ContentUpperCSS.upper}>
      {window.innerWidth < 761 ? (
        <>
          <div className={ContentUpperCSS.flex}>
            <HomePageBrand />
            <FranchiseUpper />
          </div>
          <FranchiseLower />
        </>
      ) : (
        <>
          <HomePageBrand />
          <div className={ContentUpperCSS.flex}>
            <FranchiseUpper />
            <FranchiseLower />
          </div>
        </>
      )}
    </div>
  );
}

export default ContentUpper;
