import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactLenis from "@studio-freight/react-lenis";
import AnimatedCursor from "react-animated-cursor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      <AnimatedCursor
        innerSize={6}
        outerSize={48}
        color="255, 255, 255"
        outerStyle={{
          backgroundColor: "transparent",
          border: "2px solid rgba(255, 255, 255, 0.2)",
        }}
        outerScale={1.5}
        innerStyle={{
          backgroundColor: "var(--text-color)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <App />
    </ReactLenis>
  </StrictMode>
);
