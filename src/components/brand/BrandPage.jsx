import { useParams } from "react-router-dom";
import { BrandProfile } from "./BrandProfile";
import ErrorPage from "../../utils/ErrorPage";
import BrandCSS from "./Brand.module.css";
import BrandDev from "./BrandDev";

function BrandPage() {
  const { name } = useParams();
  if (name === "brandprofile") return <BrandProfile />;
  if (name === "development") return <BrandDev />;

  if (!name) {
    return (
      <>
        <div className={BrandCSS.main}>
          <h1 className={BrandCSS.heading}>Brand Profile</h1>
          <div className={BrandCSS.text}>
            <p>
              MiniBuy was founded by entrepreneur Emily Chang, who discovered
              inspiration for the brand during her travels in South Korea in
              2015. While exploring various shopping districts, she encountered
              several boutique stores offering stylish, yet affordable products
              sourced from different parts of Asia. Drawing upon her background
              in retail management and her passion for delivering value to
              customers, Emily established MiniBuy with its headquarters in
              Seoul, South Korea, aiming to cater to the diverse needs of young
              consumers worldwide.
            </p>
          </div>
        </div>
        <BrandDev />
      </>
    );
  } else {
    return <ErrorPage />;
  }
}

export default BrandPage;
