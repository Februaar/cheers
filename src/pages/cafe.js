import "./cafe.scss";
import { poster } from "../images/index";
import Letter from "../components/Items/Letter";

const CafePage = () => {
  return (
    <div id="cafe">
      <div className="header">
        <span>생일 카페 정보</span>
      </div>
      <div className="cafe">
        <div className="top">
          <div className="left-wrap">
            <img src={poster} alt="cafe-poster" />
          </div>
          <div className="right-wrap">
            <div className="title">
              <span>SEVENTEEN</span>
              <span>홍대</span>
              <span>히치하이킹클럽</span>
            </div>
            <div className="date">운영시간</div>
            <div className="location"></div>
          </div>
        </div>
        <div className="bottom">
          <div className="title">
            <span>SEVENTEEN 에게 편지 남기기</span>
          </div>
          <div className="letters-area">
            <Letter />
            <Letter />
            <Letter />
            <Letter />
            <Letter />
          </div>
          <div className="letter-button">
            <button>축하편지 남기기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafePage;
