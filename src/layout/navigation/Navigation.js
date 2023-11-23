import React from "react";
import SideMenu from "./SideMenu";
import BorderSvg from "../../components/BorderSvg";

function Navigation() {
  return (
    <nav className="bg-black pr-5 pl-5 mt-4 w-full h-90 position-s index-4 top-0  row-sb align-i-c">
      <SideMenu />
      <button className="primary-button p-2 font-s-sm">
        <BorderSvg />
        buy know
      </button>
    </nav>
  );
}

export default Navigation;
