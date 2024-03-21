import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./total.scss";
import CommonHeader from "../components/Items/CommonHeader";

const TotalPage = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cafeList, setCafeList] = useState([]);
  console.log(cafeList);
  const navigate = useNavigate();
  const { cafeId } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/data`);
      setCafeList(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("error", err);
    }
  };

  useEffect(() => {
    getData();
  }, [cafeId]);

  const handleLinkClick = (cafeId) => {
    navigate(`/cafe/${cafeId}`);
  };

  return (
    <div id="total">
      <CommonHeader title="생일카페 리스트" />
      <div className="total-container">
        <div className="list-area">
          {cafeList.map((list) => {
            return (
              <div className="list" key={list.id}>
                <div
                  className="poster"
                  onClick={() => handleLinkClick(list.cafeId)}
                >
                  <img
                    src={list.cafeImage[0]}
                    alt="poster"
                    width={420}
                    height={600}
                  />
                </div>
                <div className="tags">
                  <span>#{list.name}</span>
                  <span>#{list.char}</span>
                  <span>#{list.station}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TotalPage;
