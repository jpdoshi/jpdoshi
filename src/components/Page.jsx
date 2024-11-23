import React from "react";

const Page = (props) => {
  return <div className="min-h-[100vh] relative">
    <div className={props.centerContent ? "absolute -translate-x-2/4 -translate-y-2/4 left-[50%] top-[50%]" : "container px-4"}>
      {props.children}
    </div>
  </div>;
};

export default Page;
