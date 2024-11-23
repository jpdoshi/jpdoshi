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
        innerSize={8}
        outerSize={64}
        color="255, 255, 255"
        outerStyle={{
          backgroundColor: "transparent",
          border: "2px solid rgba(255, 255, 255, 0.25)",
          mixBlendMode: 'exclusion'
        }}
        innerScale={0.8}
        outerScale={1.34}
        innerStyle={{
          backgroundColor: "var(--text-color)",
          mixBlendMode: 'exclusion'
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
          '.nav-title'
        ]}
      />
      <App />
    </ReactLenis>
  </StrictMode>
);
