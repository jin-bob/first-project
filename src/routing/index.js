import { lazy } from "react";
import { createHashRouter } from "react-router-dom";
import RootElement from "./RootElement";

const LandingPage = lazy(() => import("pages/landing"));

export default createHashRouter([
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
