import { cheers } from "../../images/index";

const DateStatus = ({ start, end }) => {
  return (
    <div className="date">
      <p className="status-bar" />
      <div className="exact-date">
        <span>{start}</span>
        <span>{end}</span>
      </div>
      <div className="status-pin">
        <img src={cheers} alt="status-pin" />
      </div>
    </div>
  );
};

export default DateStatus;
