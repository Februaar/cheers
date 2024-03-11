import "./main.scss";
import CommonHeader from "../components/Items/CommonHeader";
import Badge from "../components/Items/Badge";
import New from "../components/Buttons/New";

const MainPage = () => {
  return (
    <div id="main">
      <CommonHeader title="치얼스" />
      <div className="main">
        <div className="search">
          <input placeholder="at the party 짠 해 cheers 🍷" />
        </div>
        <div className="container">
          <Badge />
          <Badge />
          <Badge />
          <New />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
