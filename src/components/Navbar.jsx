import React, { useEffect, useRef } from "react";

const Navbar = () => {
  const navbarRef = useRef();

  useEffect(() => {
    if (window) {
      window.onscroll = () => {
        if (window.scrollY > 0) {
          navbarRef.current.style.top = "0";
        } else {
          navbarRef.current.style.top = "-100%";
        }
      };
    }

    return window.onscroll;
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed z-50 w-[100vw] top-[-100%] px-4 md:px-6 flex h-[48px] md:h-[64px] backdrop-blur-[8px] duration-300"
    >
      <a href="/" className="text-xl font-bold cursor-none nav-title my-auto">
        jpdoshi.
      </a>
      <ul className="ml-auto flex my-auto overlow-x-auto">
        <li>
          <a href="#intro" className="link mx-3 cursor-none">
            intro
          </a>
        </li>
        <li>
          <a href="#about" className="link mx-3 cursor-none">
            about
          </a>
        </li>
        <li>
          <a href="#skills" className="link mx-3 cursor-none">
            skills
          </a>
        </li>
        <li>
          <a href="#portfolio" className="link mx-3 cursor-none">
            portfolio
          </a>
        </li>
        <li>
          <a href="#projects" className="link mx-3 cursor-none">
            projects
          </a>
        </li>
        <li>
          <a href="#blog" className="link mx-3 cursor-none">
            blog
          </a>
        </li>
        <li>
          <a href="#social" className="link mx-3 cursor-none">
            social
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
