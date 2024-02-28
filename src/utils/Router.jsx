import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import BrandPage from "../components/brand/BrandPage";
import HomePage from "../components/homePage/HomePage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Franchise from "../components/Others/Franchise";
import News from "../components/news/News";
import Contact from "../components/contactUs/Contact";
import ContactSub from "../components/contactUs/ContactSub";

const Router = () => {
  function Layout() {
    return (
      <>
        <Header />
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
          path: "/franchise",
          element: <Franchise />,
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
          element: <ContactSub />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
