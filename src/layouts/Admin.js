import { Outlet } from "react-router";
import LoadingSuspense from "components/LoadingSuspense";

export default function AdminLayout() {
  return (
    <>
      <div>Header</div>

      <main>
        <LoadingSuspense>
          <Outlet />
        </LoadingSuspense>
      </main>

      <div>Footer</div>
    </>
  );
}
