import { useParams } from "react-router-dom";

export function Opportunities() {
  return (
    <>
      <h1>Opportunities for Cooperation</h1>
      <div>
        <div>
          <div>Contact for Legal Issue</div>
          <p>Mr. XYZ</p>
          <p>compliance@minibuy.com</p>
        </div>
        <div>
          <div>Contact for Supplier</div>
          <p>400-7**-55**</p>
          <p>globalsourcing@minibuy.com</p>
        </div>
        <div>
          <div>Contact for Media/PR</div>
          <p>media@minibuy.com</p>
        </div>
        <div>
          <div>Contact for complaint</div>
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
