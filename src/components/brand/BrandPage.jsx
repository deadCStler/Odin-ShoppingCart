import { useParams } from "react-router-dom";
import { BrandProfile } from "./BrandProfile";
import ErrorPage from "../../utils/ErrorPage";

function BrandPage() {
  const { name } = useParams();
  if (name === "brandprofile") return <BrandProfile />;

  if (!name) {
    return (
      <>
        <h1>Brand Page</h1>
      </>
    );
  } else {
    return <ErrorPage />;
  }
}

export default BrandPage;
