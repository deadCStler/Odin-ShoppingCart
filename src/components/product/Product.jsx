import { useParams } from "react-router-dom";
import ErrorPage from "../../utils/ErrorPage";
import ProductMain from "./ProductMain";

function Product() {
  const { name } = useParams();

  if (name === "men-clothing") return <ProductMain endPoint="men's clothing" />;
  else if (name === "electronics")
    return <ProductMain endPoint="electronics" />;
  else if (name === "jewelery") return <ProductMain endPoint="jewelery" />;
  else if (!name || name === "women-clothing")
    return <ProductMain endPoint="women's clothing" />;
  else return <ErrorPage />;
}

export default Product;
