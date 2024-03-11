import { useState } from "react";
import NewLetter from "../Modals/NewLetter";

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
      <div className="create-button" role="button">
        <button onClick={modalOpen}>편지 작성하기</button>
      </div>
      {isModalOpen ? <NewLetter onClick={modalClose} /> : null}
    </>
  );
};

export default New;
