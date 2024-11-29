import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

import App from "./App.jsx";

import ReactLenis from "@studio-freight/react-lenis";

import { isMobile } from "react-device-detect";
import Cursor from "./components/Cursor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root>
      {!isMobile ? <Cursor /> : null}
      <App />
    </ReactLenis>
  </StrictMode>
);
