import { lazy } from "react";
import { createHashRouter } from "react-router-dom";
import RootElement from "./RootElement";

const LandingPage = lazy(() => import("pages/landing"));
const AuthPage = lazy(() => import("pages/auth"));

export default createHashRouter([
  {
    element: <RootElement />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
    ],
  },
]);
