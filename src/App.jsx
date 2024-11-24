import React from "react";

import Page from "./components/Page";
import Navbar from "./components/Navbar";

import { useLenis } from "@studio-freight/react-lenis";

const App = () => {
  const lenis = useLenis();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Page centerContent>
        <img
          src="/pfp.png"
          alt="Profile Picture"
          className="h-[180px] mb-6 block mx-auto"
          loading="lazy"
        />
        <div className="w-[100vw]">
          <blockquote className="text-center px-6">
            <span className="quote text-4xl">
              &ldquo;Good design is obvious. Great design is transparent&rdquo;
            </span>
            <br />
            <span className="text-xl font-[600]">- Joe Sparano</span>
          </blockquote>
        </div>
      </Page>
      <img
        className="btn absolute bottom-[20px] h-[48px] left-[50%] translate-x-[-50%] hover:translate-y-[8px] duration-[300ms] border border-opacity-[25%] rounded-full border-gray-500"
        src="/assets/arrow.svg"
        alt="Scroll Down"
        loading="lazy"
        onClick={() => {
          lenis.scrollTo("#intro");
        }}
      />
      <Page id="intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid
        commodi, facilis dolorum velit impedit, molestias aliquam similique
        sequi dolor error quidem aperiam excepturi laboriosam debitis vel et,
        rem enim repellendus. Voluptate, sequi illum. Animi voluptatem rem aut
        est explicabo ipsam soluta nesciunt, eum possimus provident vitae
        facere, aspernatur hic?
      </Page>
      <Page id="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid
        commodi, facilis dolorum velit impedit, molestias aliquam similique
        sequi dolor error quidem aperiam excepturi laboriosam debitis vel et,
        rem enim repellendus. Voluptate, sequi illum. Animi voluptatem rem aut
        est explicabo ipsam soluta nesciunt, eum possimus provident vitae
        facere, aspernatur hic?
      </Page>
      <Page id="skills">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid
        commodi, facilis dolorum velit impedit, molestias aliquam similique
        sequi dolor error quidem aperiam excepturi laboriosam debitis vel et,
        rem enim repellendus. Voluptate, sequi illum. Animi voluptatem rem aut
        est explicabo ipsam soluta nesciunt, eum possimus provident vitae
        facere, aspernatur hic?
      </Page>
    </main>
  );
};

export default App;
