import React from "react";
import ScrollImage from "./ScrollImage";
import ScrollContent from "./ScrollContent";
import ScrollNumbers from "./ScrollNumbers";

function SectionThree() {
  return (
    <main className="w-full position-r color-white ">
      <div className="row-c position-r m-1">
        <ScrollImage />
        <ScrollNumbers />
        <ScrollContent />
      </div>
    </main>
  );
}

export default SectionThree;
