import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerNativeBackButton } from "./nativeBack";
import { registerNativeNotifications } from "./nativeNotifications";
import { registerNativeFeedback } from "./nativeFeedback";
import { registerResponsiveViewport } from "./responsiveViewport";
import { registerNativeNfc } from "./nativeNfc";

registerNativeBackButton();
registerNativeNotifications();
registerNativeFeedback();
registerResponsiveViewport();
registerNativeNfc();
createRoot(document.getElementById("root")!).render(<App />);
