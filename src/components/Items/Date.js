import { cheers } from "../../images/index";

const DateStatus = () => {
  return (
    <div className="date">
      <p className="status-bar" />
      <div className="exact-date">
        <span>6월 10일</span>
        <span>6월 15일</span>
      </div>
      <div className="status-pin">
        <img src={cheers} alt="status-pin" />
      </div>
    </div>
  );
};

export default DateStatus;
