import "./sidebar.scss";
import { logo, close } from "../../images";
import Tag from "./Tag";

const Sidebar = ({ onClick }) => {
  return (
    <div id="sidebar">
      <div className="backdrop">
        <div className="sidebar-container">
          <div className="left">
            <div className="title ">
              <div className="nav-logo">
                {logo ? <img src={logo} alt="main-img" /> : <span>로고</span>}
              </div>
            </div>
            <div className="nav">
              <ul className="nav-list">
                <li>
                  <a href="/">홈</a>
                </li>
                <li>
                  <a href="/total">전체 생일카페 리스트</a>
                </li>
                <li>
                  <p style={{ cursor: "no-drop" }}>서비스 소개</p>
                </li>
              </ul>
              <div className="searched">
                <div className="search-area">
                  <input placeholder="happy birthday 🍷" />
                </div>
                <div className="history-title">최근 검색어</div>
                <div className="history">
                  <Tag />
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div onClick={onClick} className="close">
              <img src={close} alt="close-button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
