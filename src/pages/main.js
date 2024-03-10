import "./main.scss";
import Badge from "../components/Items/Badge";
import Add from "../components/Buttons/Add";

const MainPage = () => {
  return (
    <div id="main">
      <header className="top">
        <h1>Cheers</h1>
      </header>
      <div className="main">
        <div className="search">
          <input placeholder="어떤 아이돌의 생일을 축하해볼까요?" />
          <span>구경하기</span>
        </div>
        <div className="container">
          <Badge />
          <Add />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
