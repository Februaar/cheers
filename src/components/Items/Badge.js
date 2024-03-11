import { sev } from "../../images/index";

const Badge = () => {
  return (
    <div className="item">
      <div className="item-img">
        <img src={sev} alt="item-img" width={24} height={24} />
      </div>
      <span className="name">SEVENTEEN</span>
    </div>
  );
};

export default Badge;