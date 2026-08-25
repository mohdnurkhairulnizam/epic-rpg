import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerNativeBackButton } from "./nativeBack";

registerNativeBackButton();
createRoot(document.getElementById("root")!).render(<App />);
