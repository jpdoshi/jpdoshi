import React, { useEffect, useState } from "react";

import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";

const Navbar = () => {
  // const navbarRef = useRef();
  const [onCoverPage, setOnCoverPage] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > window.innerHeight - 64) {
        // navbarRef.current.style.top = "0";
        setOnCoverPage(false);
      } else {
        // navbarRef.current.style.top = "-100%";
        setOnCoverPage(true);
      }
    };

    if (window) {
      window.addEventListener("scroll", scrollHandler);
    }

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      const href = e.target.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        lenis.scrollTo(href);
      }
    };

    document.querySelectorAll(".link").forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () =>
      document.querySelectorAll(".link").forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
  }, [lenis]);

  return (
    <motion.nav
      initial={{ top: "-100%" }}
      animate={{ top: onCoverPage ? "-100%" : "0" }}
      className="fixed z-50 w-full px-4 md:px-6 flex h-[64px] overflow-auto mix-blend-difference antialiased"
    >
      <motion.a
        whileHover={{ y: -4 }}
        href="/"
        className="font-bold cursor-none nav-title my-auto text-xl"
      >
        jpdoshi.
      </motion.a>
      <ul className="ml-2.5 md:ml-auto flex my-auto">
        <li>
          <a href="#intro" className="link mx-2 md:mx-3">
            intro
          </a>
        </li>
        <li>
          <a href="#about" className="link mx-2 md:mx-3">
            about
          </a>
        </li>
        <li>
          <a href="#skills" className="link mx-2 md:mx-3">
            skills
          </a>
        </li>
        <li>
          <a href="#portfolio" className="link mx-2 md:mx-3">
            portfolio
          </a>
        </li>
        <li>
          <a href="#projects" className="link mx-2 md:mx-3">
            projects
          </a>
        </li>
        <li>
          <a href="#blog" className="link mx-2 md:mx-3">
            blog
          </a>
        </li>
        <li>
          <a href="#social" className="link mx-2 md:mx-3">
            social
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
