import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LOCAL_STORAGE_KEYS_DICTIONARY from "constants/localeStorageKeys";
import localStorageHelper from "helpers/storage";
import localStorageContext from "./context";

import initStorage from "./initStorage";

const DELAY = 300;
const KEYS = Object.keys(LOCAL_STORAGE_KEYS_DICTIONARY);

const { Provider } = localStorageContext;

export default function LocalStorageProvider({ children }) {
  const [storage, setStorage] = useState(initStorage(KEYS));

  const getItem = (key) => localStorageHelper.get(key);
  const setItem = (key, value) => localStorageHelper.set(key, value);
  const clearStorage = () => setStorage({});
  const key = (n) => Object.keys(storage)[n] ?? null;

  useEffect(() => {
    if (!window.localStorage) {
      return undefined;
    }

    const timer = setTimeout(() => {
      KEYS.forEach((storageKey) => {
        const value = storage[storageKey];

        if (value === undefined) {
          localStorageHelper.set(storageKey, null);

          return;
        }

        localStorageHelper.set(storageKey, value);
      });
    }, DELAY);

    return () => clearTimeout(timer);
  });

  return <Provider value={{ getItem, setItem, clearStorage, key }}>{children}</Provider>;
}

LocalStorageProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
