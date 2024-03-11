import { useState } from "react";
import "./commonHeader.scss";
import { menu } from "../../images";
import Sidebar from "./Sidebar";

const CommonHeader = ({ title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const sidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div id="page-header">
      <div onClick={sidebarOpen} role="button" className="side-bar">
        <img src={menu} alt="side-bar" width={30} height={30} />
      </div>
      <div className="main-title">
        <span>{title}</span>
      </div>
      {isSidebarOpen ? <Sidebar onClick={sidebarClose} /> : null}
    </div>
  );
};

export default CommonHeader;
