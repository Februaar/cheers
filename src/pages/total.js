import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./total.scss";
import { fetchData, handleNavigation } from "../utils/utils";
import CommonHeader from "../components/Items/CommonHeader";
import ListItem from "../components/Items/List";
import { Button } from "@februaar/design-system";

const TotalPage = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cafeList, setCafeList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(BASE_URL, setCafeList);
  }, [BASE_URL]);

  const handleLinkClick = (cafeId) => {
    handleNavigation(navigate, `/cafe/${cafeId}`);
  };

  const handleArtistClick = (name) => {
    handleNavigation(navigate, `/${name}`);
  };

  const buttonProps = {
    size: "lg",
    variant: "primary",
    color: "serenity",
    _hover: { color: "#fff", backgroundColor: "#f7cac9" },
  };

  const buttons = [
    { value: "HOSHI", label: "호시" },
    { value: "MINGYU", label: "민규" },
  ];

  return (
    <div id="total">
      <CommonHeader title="전체 생일카페 리스트" />
      <div className="total-container">
        <div className="select-design">
          {buttons.map(({ value, label }) => (
            <Button
              key={value}
              {...buttonProps}
              onClick={() => handleArtistClick(value)}
              value={value}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="list-area">
          {cafeList.map((list) => (
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
