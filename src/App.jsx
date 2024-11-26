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
          className="h-[180px] mb-6 block mx-auto shadow rounded-full"
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
      <i
        className="las la-arrow-down btn animate-bounce text-[28px] absolute bottom-[24px] left-[calc(50%_-_20px)] rounded-full border border-gray-500 border-opacity-[50%] p-[10px]"
        onClick={() => {
          lenis.scrollTo("#intro");
        }}
      />
      <Page id="intro">
        <div className="flex h-full flex-col-reverse md:flex-row md:px-6">
          <div className="w-full md:h-[100vh] md:relative">
            <div className="w-full md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
              <h1 className="text-4xl md:text-[3.6vw] font-[900] mb-8 md:mb-12 mt-8 md:mt-0">
                Hi, I am Jainam P Doshi!
              </h1>
              <p className="text-lg md:text-xl md:leading-relaxed mb-8 opacity-[90%]">
                I am a software engineer who loves to make innovative projects.
                I believe in self-learning and have fond of designing and
                development.
              </p>
              <button
                className="btn cursor-none text-lg px-4 py-2 block w-full md:w-auto rounded border border-[var(--text-color)] hover:text-[var(--bg-color)] hover:bg-[var(--text-color)] duration-500"
                onClick={() => {
                  lenis.scrollTo("#about");
                }}
              >
                Explore More <i className="las la-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="w-full md:h-[100vh] md:relative">
            <img
              src="/assets/rocket.png"
              alt="rocket.png"
              className="mt-16 md:mt-0 w-full md:w-3/4 max-w-[1024px] md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]"
            />
          </div>
        </div>
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
