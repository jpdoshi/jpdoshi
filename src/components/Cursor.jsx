import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorSize = 12;
  const zoomMultiplier = 4;
  const stickyElements = [".btn", ".nav-title", ".link"];

  const mousePos = { x: useMotionValue(0), y: useMotionValue(0) };
  const [isHovering, setIsHovering] = useState(false);

  const zoomOnHover = () => {
    setIsHovering(true);
  };

  const hoverLost = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const elements = document.querySelectorAll(stickyElements);

    for (let element of elements) {
      element.addEventListener("mouseover", zoomOnHover);
      element.addEventListener("mouseleave", hoverLost);
    }

    return () => {
      for (let element of elements) {
        element.removeEventListener("mouseover", zoomOnHover);
        element.removeEventListener("mouseleave", hoverLost);
      }
    };
  }, []);

  const springOptions = {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  };

  const smoothMousePos = {
    x: useSpring(mousePos.x, springOptions),
    y: useSpring(mousePos.y, springOptions),
  };

  const mousePosHandler = (e) => {
    const { clientX, clientY } = e;

    mousePos.x.set(clientX - cursorSize / 2);
    mousePos.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mousePosHandler);
    return () => window.removeEventListener("mousemove", mousePosHandler);
  }, []);

  return (
    <motion.div
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isHovering ? zoomMultiplier : 1,
      }}
      className="cursor"
      style={{ top: smoothMousePos.y, left: smoothMousePos.x }}
    />
  );
};

export default Cursor;
