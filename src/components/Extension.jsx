import React from "react";
import Card from "./Card";

const Extension = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-3xl m-auto">
      <div>
        <Card
          img="src\assets\logo-opera.svg"
          h1="Add to Opera"
          p="Minimum version 62 "
          logo=""
        />
      </div>
      <div className="mt-10">
        <Card
          img="src\assets\logo-firefox.svg"
          h1="Add to Firefox"
          p="Minimum version 62 "
          logo=""
        />
      </div>
      <div className="mt-20">
        <Card
          img="src\assets\logo-chrome.svg"
          h1="Add to Chrome"
          p="Minimum version 62 "
          logo=""
        />
      </div>
    </div>
  );
};

export default Extension;
