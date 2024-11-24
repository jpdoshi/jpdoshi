import React from "react";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
import ModelViewer from "./components/ModelViewer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Page centerContent>
        <img
          src="/pfp.png"
          alt="Profile Picture"
          className="h-[180px] mb-6 block mx-auto"
        />
        <div className="w-[100vw]">
          <blockquote className="text-center px-6">
            <span className="text-2xl italic">
              &ldquo;Good design is obvious. Great design is transparent.&ldquo;
            </span>
            <br />
            <span className="text-xl font-[500]">- Joe Sparano</span>
          </blockquote>
        </div>
      </Page>
      <Page>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid
        commodi, facilis dolorum velit impedit, molestias aliquam similique
        sequi dolor error quidem aperiam excepturi laboriosam debitis vel et,
        rem enim repellendus. Voluptate, sequi illum. Animi voluptatem rem aut
        est explicabo ipsam soluta nesciunt, eum possimus provident vitae
        facere, aspernatur hic?
      </Page>
      <Page>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aliquid
        commodi, facilis dolorum velit impedit, molestias aliquam similique
        sequi dolor error quidem aperiam excepturi laboriosam debitis vel et,
        rem enim repellendus. Voluptate, sequi illum. Animi voluptatem rem aut
        est explicabo ipsam soluta nesciunt, eum possimus provident vitae
        facere, aspernatur hic?
      </Page>
      <Page>
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
