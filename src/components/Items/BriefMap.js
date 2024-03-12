import { useEffect } from "react";
import "./briefmap.scss";
import { pin } from "../../images/index";

const BriefMap = () => {
  useEffect(() => {
    // Kakao 지도 SDK를 비동기적으로 로드하고, 로드된 후에 지도를 생성하는 코드
    const loadMap = async () => {
      if (!window.kakao) {
        // Kakao 지도 SDK를 동적으로 로드
        const script = document.createElement("script");
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?appkey=912d23e47bc8160e90a1232bfa6f8d00";
        script.async = true;
        document.body.appendChild(script);
        // SDK 로드 후에 지도 생성
        script.onload = () => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };
          new window.kakao.maps.Map(container, options);
        };
      } else {
        // Kakao 지도 SDK가 이미 로드되어 있으면 바로 지도 생성
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      }
    };

    loadMap(); // 함수 호출하여 지도 생성
  }, []);

  return (
    <div id="brief-map">
      <div id="map" className="map-container"></div>
      <div>
        <img src={pin} alt="location" />
      </div>
    </div>
  );
};

export default BriefMap;
