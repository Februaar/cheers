import "./modals.scss"

const NewLetter = ({ onClick }) => {
  return (
    <div id="modal">
      <div className="backdrop">
        <div className="modal-container">
          <div className="header">
            <div onClick={onClick}>취소</div>
            <span>편지 작성하기</span>
            <div onClick={onClick}>확인</div>
          </div>
          <div className="textarea">
            <textarea placeholder="내용 작성하기" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
