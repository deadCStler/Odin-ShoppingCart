import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import BrandPage from "../components/brand/BrandPage";
import HomePage from "../components/homePage/HomePage";
import Header from "../components/header/Header";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
