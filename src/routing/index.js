import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootElement from "./RootElement";

const LandingPage = lazy(() => import("pages/landing"));

export default createBrowserRouter([
  {
    element: <RootElement />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);
