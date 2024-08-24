import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./cafe.scss";
import CommonHeader from "../components/Items/CommonHeader";
import CardSlider from "../components/Items/CardSlider";
import BriefMap from "../components/Items/BriefMap";
import DateStatus from "../components/Items/Date";
import Write from "../components/Buttons/Write";
import Letter from "../components/Items/Letter";

const CafePage = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [cafeList, setCafeList] = useState([]);
  const { cafeId } = useParams();

  const getData = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/data?cafeId=${cafeId}`);
      setCafeList(res.data);
    } catch (err) {
      console.error("error", err);
    }
  }, [BASE_URL, cafeId]);

  useEffect(() => {
    getData();
  }, [getData, cafeId]);

  return (
    <div id="cafe">
      <CommonHeader title="생일카페 정보" />
      <div className="cafe-infos">
        {cafeList.map((list) => {
          return (
            <>
              <div className="top" key={list.id}>
                <div className="left-wrap">
                  <CardSlider cards={list.cafeImage} />
                </div>
                <div className="right-wrap">
                  <div className="cafe-details">
                    <div className="details">
                      <div className="details-info">
                        <span>{list.groupName}</span>
                        <span>[{list.name}] 🍰</span>
                      </div>
                      <span>{list.station}</span>
                      <span>{list.cafeName}</span>
                    </div>
                    <div className="location">
                      <span>주소: {list.address}</span>
                      <span>영업시간: {list.openingHours}</span>
                    </div>
                  </div>
                  <div>운영 날짜</div>
                  <DateStatus start={list.start} end={list.end} />
                  <div>위치 확인하기</div>
                  <BriefMap lat={list.latitude} lng={list.longitude} />
                </div>
              </div>
              <div className="bottom">
                <div className="subtitle">
                  <span>멤버에게 생일 편지 남기기</span>
                </div>
                <div className="to">
                  <span>To. {list.name}</span>
                </div>
                <div className="contents-area">
                  <Letter />
                </div>
                <Write />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CafePage;
