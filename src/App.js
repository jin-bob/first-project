import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./queryClient";
import packageJSON from "../package.json";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>Hello World!</div>

      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />

      <span style={{ display: "none" }} data-version={packageJSON.version} />
    </QueryClientProvider>
  );
}
