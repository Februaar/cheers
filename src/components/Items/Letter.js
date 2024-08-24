import { masking } from "../../images/index";

const Letter = () => {
  return (
    <div className="item">
      <div className="masking">
        <img src={masking} alt="masking" width={80} height={30} />
      </div>
      <div className="letter">
        <span>호시야 생일 축하해</span>
      </div>
    </div>
  );
};

export default Letter;
