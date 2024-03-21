import { useEffect } from "react";
import "./briefmap.scss";
import { pin } from "../../images/index";

const BriefMap = ({ lat, lng }) => {
  useEffect(() => {
    loadMap();
  }, []);

  const loadMap = () => {
    const kakao = window.kakao;

    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const imageSize = new kakao.maps.Size(40, 40);
    const imageOption = { offset: new kakao.maps.Point(27, 69) };

    const markerImage = new kakao.maps.MarkerImage(pin, imageSize, imageOption);
    const markerPosition = new kakao.maps.LatLng(lat, lng);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);
  };

  return <div id="map"></div>;
};

export default BriefMap;
