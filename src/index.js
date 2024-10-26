import { createRoot } from "react-dom/client";
import ROOT from "constants/app-root";
import App from "./App";

const rootContainer = document.getElementById(ROOT);
const root = createRoot(rootContainer);

root.render(<App />);
