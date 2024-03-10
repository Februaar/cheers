import { add } from "../../images/index";

const Add = () => {
  return (
    <div className="item" role="button">
      <div>
        <img src={add} alt="item-img" width={24} height={24} />
      </div>
      <span className="name"></span>
    </div>
  );
};

export default Add;
