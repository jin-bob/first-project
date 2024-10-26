import { Outlet } from "react-router";
import LoadingSuspense from "components/LoadingSuspense";

export default function RootElement() {
  return (
    <div>
      <LoadingSuspense>
        <Outlet />
      </LoadingSuspense>
    </div>
  );
}
