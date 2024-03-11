import "./cafe.scss";
import { poster, poster2 } from "../images/index";
import CommonHeader from "../components/Items/CommonHeader";
import CardSlider from "../components/Items/CardSlider";
import DateStatus from "../components/Items/Date";
import Write from "../components/Buttons/Write";
import Letter from "../components/Items/Letter";

const CafePage = () => {
  const cafes = [poster, poster2];

  return (
    <div id="cafe">
      <CommonHeader title="생일카페 정보" />
      <div className="cafe-infos">
        <div className="top">
          <div className="left-wrap">
            <CardSlider cards={cafes} />
          </div>
          <div className="right-wrap">
            <div className="cafe-details">
              <span>SEVENTEEN</span>
              <span>홍대</span>
              <span>히치하이킹클럽</span>
            </div>
            <DateStatus />
            <div className="location"></div>
          </div>
        </div>
        <div className="bottom">
          <div className="subtitle">
            <span>To. SEVENTEEN</span>
          </div>
          <div className="contents-area">
            <Letter />
            <Letter />
            <Letter />
          </div>
          <Write />
        </div>
      </div>
    </div>
  );
};

export default CafePage;
