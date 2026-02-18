import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "context/localStorageContext/useLocalStorage";
import AUTH_STATUSES from "constants/auth";
import LOCAL_STORAGE_KEYS_DICTIONARY from "constants/localeStorageKeys";
import authContext from "./context";

const { Provider } = authContext;

export default function AuthProvider({ children }) {
  const [authStatus, setAuthStatus] = useState(AUTH_STATUSES.loading);

  const { getItem, setItem } = useLocalStorage();

  useEffect(() => {
    const storageToken = getItem(LOCAL_STORAGE_KEYS_DICTIONARY.token);

    if (storageToken) {
      setAuthStatus(AUTH_STATUSES.authorized);
    } else {
      setAuthStatus(AUTH_STATUSES.unauthorized);
    }
  }, [getItem]);

  const login = useCallback(
    (token) => {
      setItem(LOCAL_STORAGE_KEYS_DICTIONARY.token, token);
      setAuthStatus(AUTH_STATUSES.authorized);
    },
    [setItem],
  );

  return <Provider value={{ authStatus, login }}>{children}</Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
