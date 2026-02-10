import { lazy } from "react";
import { createHashRouter } from "react-router-dom";
import RootElement from "./RootElement";
import AdminLayout from "../layouts/Admin";
import PrivateRoute from "./PrivateRoute";

const LandingPage = lazy(() => import("pages/landing"));
const AuthPage = lazy(() => import("pages/auth"));
const MainPage = lazy(() => import("pages/admin/mainPage"));

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
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          {
            path: "second",
            element: <>Second Page</>,
          },
        ],
      },
    ],
  },
]);
