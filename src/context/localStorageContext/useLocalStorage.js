import { useContext } from "react";
import localStorageContext from "./context";

export default function useLocalStorage() {
  const context = useContext(localStorageContext);

  if (context === undefined) {
    throw new Error("useLocalStorage must be used within a LocalStorageProvider");
  }

  return context;
}
