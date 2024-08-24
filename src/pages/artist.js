import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./total.scss";
import { handleNavigation } from "../utils/utils";
import CommonHeader from "../components/Items/CommonHeader";
import ListItem from "../components/Items/List";

const ArtistPage = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cafeList, setCafeList] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();

  const getData = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/data?name=${name}`);
      setCafeList(res.data);
    } catch (err) {
      console.error("error", err);
    }
  }, [BASE_URL, name]);

  useEffect(() => {
    getData();
  }, [getData, name]);

  const handleLinkClick = (cafeId) => {
    handleNavigation(navigate, `/cafe/${cafeId}`);
  };

  return (
    <div id="total">
      <CommonHeader title={`${name} 생일카페 리스트`} />
      <div className="total-container">
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

export default ArtistPage;
