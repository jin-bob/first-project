import { Suspense } from "react";
import PropTypes from "prop-types";

export default function LoadingSuspense({ children }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

LoadingSuspense.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
