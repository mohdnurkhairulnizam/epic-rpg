import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerWebFeedback } from "./webFeedback";

registerWebFeedback();
createRoot(document.getElementById("root")!).render(<App />);
