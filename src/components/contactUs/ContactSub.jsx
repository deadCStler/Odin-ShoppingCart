import { useParams } from "react-router-dom";
import ContactCSS from "./Contact.module.css";

export function Opportunities() {
  return (
    <>
      <h1 className={ContactCSS.heading}>Opportunities for Cooperation</h1>
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
    </>
  );
}

function ContactSub() {
  const { name } = useParams();
  if (name === "opportunities") return <h1>From sub</h1>;
}

export default ContactSub;
