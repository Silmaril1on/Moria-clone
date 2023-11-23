import React from "react";
import NewsList from "./NewsList";
import BorderSvg from "../../components/BorderSvg";

function SectionFour() {
  return (
    <main className="w-full mb-7 column-c align-i-c h-full font-f-primary color-white">
      <NewsList />
      <div className="w-150">
        <div className="primary-button position-r p-2">
          <BorderSvg />
          view all news
        </div>
      </div>
    </main>
  );
}

export default SectionFour;
