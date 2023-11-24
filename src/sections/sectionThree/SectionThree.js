import React from "react";
import ScrollImage from "./ScrollImage";
import ScrollContent from "./ScrollContent";
import ScrollNumbers from "./ScrollNumbers";
import MobileSection from "./MobileSection";

function SectionThree() {
  return (
    <main className="w-full position-r color-white ">
      <MobileSection />
      <div className="row-c position-r desktop-size m-1">
        <ScrollImage />
        <ScrollNumbers />
        <ScrollContent />
      </div>
    </main>
  );
}

export default SectionThree;
