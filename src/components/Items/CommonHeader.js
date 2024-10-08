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
      <div className="page-header">
        <div onClick={sidebarOpen} role="button" className="hamburger">
          <img src={menu} alt="hamburger-icon" width={30} height={30} />
        </div>
        <div className="common-title">
          <span>{title}</span>
        </div>
        {isSidebarOpen ? <Sidebar onClick={sidebarClose} /> : null}
      </div>
    </div>
  );
};

export default CommonHeader;
