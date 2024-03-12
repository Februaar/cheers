import "./sidebar.scss";
import { logo, close } from "../../images";

const Sidebar = ({ onClick }) => {
  return (
    <div id="sidebar">
      <div className="backdrop">
        <div className="container">
          <div className="title ">
            <div>
              <img src={logo} alt="main-img" />
            </div>
            <div onClick={onClick} className="close">
              <img src={close} alt="close-button" />
            </div>
          </div>
          <div className="nav">
            <ul className="nav-list">
              <li>
                <a href="/">홈</a>
              </li>
              <li>
                <a href="/total">생일카페 리스트</a>
              </li>
              <li>서비스 소개</li>
              <li>
                <div className="search-area">
                  <div className="search">
                    <input placeholder="happy birthday 🍷" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
