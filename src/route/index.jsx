import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Hero from "../pages/Hero/Hero";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
