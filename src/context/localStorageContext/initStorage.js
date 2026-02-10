import localStorageHelper from "helpers/storage";

export default function initStorage(keys) {
  if (!window.localStorage) {
    return {};
  }
  return keys.reduce((acc, key) => {
    const value = localStorageHelper.get(key);

    if (value !== undefined) {
      acc[key] = value;
    }

    return acc;
  }, []);
}
