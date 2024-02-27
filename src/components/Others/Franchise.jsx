import MainImage from "../../assets/franchise.jpg";
import OtherCSS from "./Other.module.css";

function Franchise() {
  return (
    <div className={OtherCSS.franchise}>
      <img src={MainImage} alt="contact_image" />
    </div>
  );
}

export default Franchise;
