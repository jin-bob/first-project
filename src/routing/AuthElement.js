import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "context/authContext/useAuth";
import AUTH_STATUSES from "constants/auth";

export default function AuthElement({ children }) {
  const { authStatus } = useAuth();

  if (authStatus === AUTH_STATUSES.loading) {
    return <div>Loading...</div>;
  }

  if (authStatus === AUTH_STATUSES.unauthorized && children) {
    return children;
  }

  return <Navigate to="/admin" replace />;
}

AuthElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
