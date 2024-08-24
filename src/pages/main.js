import { useNavigate } from "react-router-dom";
import "./main.scss";
import {
  coups,
  hanni,
  shua,
  jun,
  hoshi,
  wonwoo,
  woozi,
  deight,
  mingyu,
  dk,
  vernon,
  gwani,
  dino,
} from "../images";
import { handleNavigation } from "../utils/utils";
import CommonHeader from "../components/Items/CommonHeader";

const MainPage = () => {
  const navigate = useNavigate();

  const artists = [
    { name: "S.COUPS", image: coups, disabled: true },
    { name: "JEONGHAN", image: hanni, disabled: true },
    { name: "JOSHUA", image: shua, disabled: true },
    { name: "JUN", image: jun, disabled: true },
    { name: "HOSHI", image: hoshi },
    { name: "WONWOO", image: wonwoo, disabled: true },
    { name: "WOOZI", image: woozi, disabled: true },
    { name: "THE8", image: deight, disabled: true },
    { name: "MINGYU", image: mingyu },
    { name: "DK", image: dk, disabled: true },
    { name: "VERNON", image: vernon, disabled: true },
    { name: "SEUNGKWAN", image: gwani, disabled: true },
    { name: "DINO", image: dino, disabled: true },
  ];

  const handleArtistClick = (name) => {
    handleNavigation(navigate, `/${name}`);
  };

  return (
    <div id="main">
      <CommonHeader title="치얼스" />
      <div className="main">
        <div className="container">
          <div className="tab">
            <div className="tab-title">ARTISTS</div>
            <div className="items-container">
              {artists.map((artist, index) => (
                <div
                  key={index}
                  onClick={() => handleArtistClick(artist.name)}
                  className={`item ${artist.disabled ? "disabled" : ""}`}
                >
                  <img src={artist.image} alt="img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
