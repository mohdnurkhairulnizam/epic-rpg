import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Load the vanilla JavaScript app
    const script = document.createElement("script");
    script.src = "/epic-rpg-app.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="app" />;
}
