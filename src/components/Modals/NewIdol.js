import { useState } from "react";
import InputEmoji from "react-input-emoji";
import "./modals.scss";

const NewIdol = ({ onClick }) => {
  const [emoji, setEmoji] = useState("");
  const [typedName, setTypedName] = useState("");

  const handleInputChange = (e) => {
    setTypedName(e.target.value);
  };

  const handleEmojiChange = (emoji) => {
    setEmoji(emoji);
  };

  return (
    <div id="modal">
      <div className="backdrop">
        <div className="modal-container">
          <div className="header">
            <div onClick={onClick}>취소</div>
            <span>새로 추가하기</span>
            <div onClick={onClick}>확인</div>
          </div>
          <div className="contents">
            <div className="new-idol">
              <div className="badge-img">{emoji}</div>
              <div className="name">{typedName}</div>
            </div>
            <div className="input-area">
              <InputEmoji value={emoji} onChange={handleEmojiChange} />
              <input
                value={typedName}
                onChange={handleInputChange}
                placeholder="아이돌 좋아하세요?"
                className="input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIdol;
