import React from "react";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
import ModelViewer from "./components/ModelViewer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Page>
        <ModelViewer
          src="/assets/dragon.glb"
          style={{ height: "500px", width: "500px" }}
          options={{
            "camera-target": "0m 1.5m 0m",
            "camera-orbit": "-140deg 80deg 12m",
          }}
        />
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
