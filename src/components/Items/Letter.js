import { masking } from "../../images/index";

const Letter = () => {
  return (
    <div className="item">
      <div className="masking">
        <img src={masking} alt="masking" width={80} height={30} />
      </div>
      <div className="letter">편지 내용 축하 축하</div>
    </div>
  );
};

export default Letter;
