import { Outlet } from "react-router";
import LoadingSuspense from "components/LoadingSuspense";
import AuthProvider from "context/authContext/AuthProvider";

export default function RootElement() {
  return (
    <AuthProvider>
      <LoadingSuspense>
        <Outlet />
      </LoadingSuspense>
    </AuthProvider>
  );
}
