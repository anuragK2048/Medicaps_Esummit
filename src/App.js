import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import ESummit from "./pages/E-Summit/ESummit";
import Archives from "./pages/Archives/Archives";
import OurTeam from "./pages/OurTeam/OurTeam";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/esummit",
          element: <ESummit />,
        },
        {
          path: "/archives",
          element: <Archives />,
        },
        {
          path: "/ourteam",
          element: <OurTeam />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ],
  {
    basename: "/", // Match your repository name
  }
);
