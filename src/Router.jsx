import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./utils/ErrorPage";
import BrandPage from "./components/brand/BrandPage";
import HomePage from "./components/homePage/HomePage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Franchise from "./components/Others/Franchise";
import News from "./components/news/News";
import Contact from "./components/contactUs/Contact";
import { useState, useEffect } from "react";
import Campaign from "./components/Others/Campaign";
import Product from "./components/product/Product";
import ProductPage from "./components/product/ProductPage";
import SignInPage from "./components/signIn/SignInPage";
import CartPage from "./components/cart/CartPage";
import SearchResult from "./components/search/SearchResult";

const Router = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function Layout() {
    return (
      <>
        <Header windowWidth={windowWidth} />
        <Outlet />
        <Footer />
      </>
    );
  }

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/brand",
          element: <BrandPage />,
        },
        {
          path: "/brand/:name",
          element: <BrandPage />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/product/:name",
          element: <Product />,
        },
        {
          path: "/product/:category/:id",
          element: <ProductPage />,
        },
        {
          path: "/franchise",
          element: <Franchise />,
        },
        {
          path: "/specialcampaign",
          element: <Campaign />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/contact/:name",
          element: <Contact />,
        },
        {
          path: "/search/:value",
          element: <SearchResult />,
        },
      ],
    },
    {
      path: "/signin",
      element: (
        <>
          <SignInPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <CartPage />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
