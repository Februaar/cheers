import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./total.scss";
import { fetchData, handleNavigation } from "../utils/utils";
import CommonHeader from "../components/Items/CommonHeader";
import ListItem from "../components/Items/List";
import { Select } from "@februaar/design-system";

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

  return (
    <div id="total">
      <CommonHeader title="전체 생일카페 리스트" />
      <div className="total-container">
        <div className="select-design">
          <Select size="md">
            <Select.Trigger placeholder="검색 분류" />
            <Select.OptionList>
              <Select.Label>그룹별</Select.Label>
              <Select.Option value="세븐틴">세븐틴</Select.Option>
              <Select.Label>멤버별</Select.Label>
              <Select.Option value="호시">호시</Select.Option>
              <Select.Option value="민규">민규</Select.Option>
            </Select.OptionList>
          </Select>
        </div>
        <div className="list-area">
          {cafeList &&
            cafeList.map((list) => (
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
