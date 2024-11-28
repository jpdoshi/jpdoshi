import React from "react";

import Page from "./components/Page";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import ThemeButton from "./components/ThemeButton";

const App = () => {
  const lenis = useLenis();

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ThemeButton />
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
        className="las la-arrow-down cursor-trigger animate-bounce text-[28px] absolute bottom-[24px] left-[calc(50%_-_20px)] rounded-full border border-gray-500 border-opacity-[50%] p-[10px]"
        onClick={() => {
          lenis.scrollTo("#intro");
        }}
      />
      <Page id="intro">
        <div className="flex h-full flex-col-reverse md:flex-row md:px-6">
          <motion.div
            className="w-full md:h-[100vh] md:relative"
            initial={{ x: -64 }}
            whileInView={{ x: 0 }}
            viewport={{ amount: 0.75, once: true }}
          >
            <div className="w-full md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
              <h1 className="text-4xl md:text-[3.6vw] font-[900] mb-8 md:mb-12 mt-8 md:mt-0">
                Hi, I am Jainam P Doshi
              </h1>
              <p className="text-lg md:text-xl md:leading-relaxed mb-8">
                I am a software engineer who loves to make innovative projects.
                I believe in self-learning and have fond of designing and
                development.
              </p>
              <Button
                onClick={() => {
                  lenis.scrollTo("#about");
                }}
              >
                Know more about me <i className="las la-arrow-right"></i>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:h-[100vh] md:relative"
            initial={{ x: 64 }}
            whileInView={{ x: 0 }}
            viewport={{ amount: 0.75, once: true }}
          >
            <div className="mt-16 md:mt-0 w-full md:w-3/4 max-w-[1024px] md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
              <motion.img
                initial={{ y: -10 }}
                animate={{ y: [-10, 10, -10] }} // Moves up and down
                transition={{
                  duration: 4, // Time for one cycle
                  repeat: Infinity, // Infinite loop
                  repeatType: "loop", // Loops the animation
                  ease: "easeInOut", // Smooth easing for a bouncing effect
                }}
                src="/assets/rocket.png"
                alt="rocket.png"
                className="w-full"
              />
            </div>
          </motion.div>
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
