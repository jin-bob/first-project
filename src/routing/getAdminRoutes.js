import { lazy } from "react";

const MainPage = lazy(() => import("pages/admin/mainPage"));

const ROUTES = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/second",
    element: <>Second Page</>,
  },
];

export default function getAdminRoutes() {
  return ROUTES;
}
