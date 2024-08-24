import { useState, useEffect } from "react";
import { cheers } from "../../images/index";
import { parseCustomDateString } from "../../utils/utils";

const DateStatus = ({ start, end }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const openingDate = parseCustomDateString(start);
  const closingDate = parseCustomDateString(end);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1800000);

    return () => clearInterval(interval);
  }, []);

  const totalDuration = closingDate - openingDate;
  const elapsedDuration = currentTime - openingDate;
  const progress = Math.min(elapsedDuration / totalDuration, 1);

  const progressPercentage = progress * 85;

  return (
    <div className="date">
      <div className="status-bar">
        <div className="status-pin">
          <img
            src={cheers}
            alt="progress"
            style={{
              position: "absolute",
              left: `${progressPercentage}%`, // 비율에 따라 이미지 이동
              top: "-15px", // 상태 바 위로 살짝 띄우기
              transition: "left 1s linear",
            }}
          />
        </div>
      </div>
      <div className="exact-date">
        <span>{start}</span>
        <span>{end}</span>
      </div>
    </div>
  );
};

export default DateStatus;
