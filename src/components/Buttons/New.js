import { useState } from "react";
import { add } from "../../images/index";
import NewIdol from "../Modals/NewIdol";

const New = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="item" role="button">
        <div className="item-img" onClick={modalOpen}>
          <img src={add} alt="item-img" width={24} height={24} />
        </div>
        <span className="name"></span>
      </div>
      {isModalOpen ? <NewIdol onClick={modalClose} /> : null}
    </>
  );
};

export default New;
