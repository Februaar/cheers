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
      {cafeList &&
        cafeList.map((list) => {
          return (
            <div className="page-infos" key={list.id}>
              <div className="top">
                <div className="left-wrap">
                  <CardSlider cards={list.cafeImage} />
                </div>
                <div className="right-wrap">
                  <div className="right-detail">
                    <div className="right-top">
                      <div className="cafe-infos">
                        <div className="name">
                          <span>{list.groupName}</span>
                          <span>[{list.name}] 🍰</span>
                        </div>
                        <div>{list.station}</div>
                        <div>{list.cafeName}</div>
                      </div>

                      <div className="cafe-address">
                        <p>주소: {list.address}</p>
                        <p>영업시간: {list.openingHours}</p>
                      </div>
                    </div>

                    <div className="right-mid">
                      <p>운영 날짜</p>
                      <DateStatus start={list.start} end={list.end} />
                    </div>

                    <div className="right-bottom">
                      <p>위치 확인하기</p>
                      <BriefMap lat={list.latitude} lng={list.longitude} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="subtitle">
                  <p>멤버에게 생일 편지 남기기</p>
                </div>
                <div className="to">
                  <p>To. {list.name}</p>
                </div>
                <div className="contents-area">
                  <Letter />
                </div>
                <Write />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CafePage;
