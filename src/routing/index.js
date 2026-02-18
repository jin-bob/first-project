import { lazy } from "react";
import { createHashRouter } from "react-router-dom";
import RootElement from "./RootElement";
import AdminLayout from "../layouts/Admin";
import PrivateRoute from "./PrivateRoute";
import AuthElement from "./AuthElement";

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
        element: (
          <AuthElement>
            <AuthPage />
          </AuthElement>
        ),
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
