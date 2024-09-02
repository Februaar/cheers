import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./total.scss";
import { fetchData, handleNavigation } from "../utils/utils";
import CommonHeader from "../components/Items/CommonHeader";
import ListItem from "../components/Items/List";

const TotalPage = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cafeList, setCafeList] = useState([]);
  console.log(cafeList);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(BASE_URL, setCafeList);
  }, [BASE_URL]);

  const handleLinkClick = (cafeId) => {
    handleNavigation(navigate, `/cafe/${cafeId}`);
  };

  return (
    <div id="total">
      <CommonHeader title="전체 생일카페 리스트" />
      <div className="total-container">
        <div className="list-area">
          {cafeList && cafeList.map((list) => (
            <ListItem
              key={list.id}
              list={list}
              onClick={() => handleLinkClick(list.cafeId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalPage;
