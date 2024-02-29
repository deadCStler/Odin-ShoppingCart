import MainImage from "../../assets/SpecialCampaign.jpg";
import OtherCSS from "./Other.module.css";

function Campaign() {
  return (
    <div className={OtherCSS.Campaign}>
      <img src={MainImage} alt="campaign_image" />
    </div>
  );
}

export default Campaign;
