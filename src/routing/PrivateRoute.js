import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "context/authContext/useAuth";
import AUTH_STATUSES from "constants/auth";

export default function PrivateRoute({ children }) {
  const { authStatus } = useAuth();

  if (authStatus === AUTH_STATUSES.loading) {
    return <div>Loading...</div>;
  }

  if (authStatus === AUTH_STATUSES.authorized && children) {
    return children;
  }

  return <Navigate to="/auth" replace />;
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
