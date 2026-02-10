import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LocalStorageProvider from "context/localStorageContext/LocalStorageProvider";
import router from "./routing";
import queryClient from "./queryClient";
import packageJSON from "../package.json";

export default function App() {
  return (
    <LocalStorageProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />

        <span style={{ display: "none" }} data-version={packageJSON.version} />
      </QueryClientProvider>
    </LocalStorageProvider>
  );
}
