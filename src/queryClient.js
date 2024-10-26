import { QueryClient } from "@tanstack/react-query";

const STALE_TIME = 24 * 60 * 60 * 1_000;

export default new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
    },
  },
});
