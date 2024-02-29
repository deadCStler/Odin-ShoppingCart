import { useParams } from "react-router-dom";
import { Opportunities, SupplierOpp } from "./ContactSub";
import ErrorPage from "../../utils/ErrorPage";

function Contact() {
  const { name } = useParams();

  if (name === "opportunities") return <Opportunities />;
  if (name === "supplierchannels") return <SupplierOpp />;

  if (!name) {
    return (
      <>
        <Opportunities />
        <SupplierOpp />
      </>
    );
  } else {
    return <ErrorPage />;
  }
}

export default Contact;
