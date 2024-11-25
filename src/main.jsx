import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

import App from "./App.jsx";

import ReactLenis from "@studio-freight/react-lenis";
import AnimatedCursor from "react-animated-cursor";

import { isMobile } from "react-device-detect";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      {!isMobile ? (
        <AnimatedCursor
          innerSize={8}
          outerSize={64}
          color="var(--cursor-color)"
          outerStyle={{
            backgroundColor: "transparent",
            border: "2px solid rgba(250, 250, 250, 0.25)",
            mixBlendMode: "exclusion",
          }}
          innerScale={0.8}
          outerScale={1.34}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
            mixBlendMode: "exclusion",
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
            ".btn",
            ".nav-title",
          ]}
        />
      ) : null}
      <App />
    </ReactLenis>
  </StrictMode>
);
