import React from "react";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";
import Empty from "./components/Empty";

const App = () => {
  return (
    <div className="h-screen w-full flex">
      <div className="flex-1 bg-custom-dark">
        <Empty />
      </div>

      <div className="flex-1 bg-custom-dark p-6 flex flex-col gap-6">
        <Tabs />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
