import React, { useState } from "react";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import SideList from "./SideList";
import BorderSvg from "../../components/BorderSvg";

function SideMenu() {
  const [openSide, setOpenSide] = useState(false);

  const openSideBar = () => {
    setOpenSide(!openSide);
  };

  return (
    <aside className="overflow-h">
      <button className="primary-button p-1" onClick={openSideBar}>
        <BorderSvg />
        {openSide ? (
          <IoCloseSharp className="font-s-md" />
        ) : (
          <IoMenuOutline className="font-s-md" />
        )}
      </button>
      {openSide && <SideList />}
    </aside>
  );
}

export default SideMenu;
