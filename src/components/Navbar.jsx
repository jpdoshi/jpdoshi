import React, { useEffect, useRef } from "react";

import { useLenis } from "@studio-freight/react-lenis";

const Navbar = () => {
  const navbarRef = useRef();
  const lenis = useLenis();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > window.innerHeight - 64) {
        navbarRef.current.style.top = "0";
      } else {
        navbarRef.current.style.top = "-100%";
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
    <nav
      ref={navbarRef}
      className="fixed z-50 w-[100vw] top-[-100%] px-4 flex h-[48px] md:h-[64px] duration-[800ms] overflow-auto"
    >
      <a href="/" className="text-xl font-bold cursor-none nav-title my-auto">
        jpdoshi.
      </a>
      <ul className="ml-3 md:ml-auto flex my-auto">
        <li>
          <a href="#intro" className="link mx-2 md:mx-3 cursor-none">
            intro
          </a>
        </li>
        <li>
          <a href="#about" className="link mx-2 md:mx-3 cursor-none">
            about
          </a>
        </li>
        <li>
          <a href="#skills" className="link mx-2 md:mx-3 cursor-none">
            skills
          </a>
        </li>
        <li>
          <a href="#portfolio" className="link mx-2 md:mx-3 cursor-none">
            portfolio
          </a>
        </li>
        <li>
          <a href="#projects" className="link mx-2 md:mx-3 cursor-none">
            projects
          </a>
        </li>
        <li>
          <a href="#blog" className="link mx-2 md:mx-3 cursor-none">
            blog
          </a>
        </li>
        <li>
          <a href="#social" className="link mx-2 md:mx-3 cursor-none">
            social
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;