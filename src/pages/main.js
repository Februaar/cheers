import "./main.scss";
import { seventeen, tws } from "../images/index";
import CommonHeader from "../components/Items/CommonHeader";
import Badge from "../components/Items/Badge";

const MainPage = () => {
  const artist = [seventeen, tws];

  return (
    <div id="main">
      <CommonHeader title="치얼스" />
      <div className="main">
        <div className="container">
          <div className="tab">
            <div className="tab-title">ARTISTS</div>
            <div className="items-container">
              <Badge artist={artist} />
            </div>
          </div>
          <div className="tab">
            <div className="tab-title">EVENTS</div>
            <div className="items-container">
              <div>진행중인 이벤트</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
