import { useNavigate } from "react-router-dom";
import "./commonHeader.scss";
import { handleNavigation } from "../../utils/utils";

const Tag = () => {
  const navigate = useNavigate();

  const handleArtistClick = (name) => {
    handleNavigation(navigate, `/${name}`);
  };

  return (
    <>
    <div className="tag-item" onClick={() => handleArtistClick("HOSHI")}>
      <span>HOSHI</span>
    </div>
    <div className="tag-item" onClick={() => handleArtistClick("MINGYU")}>
      <span>MINGYU</span>
    </div>
    </>
  );
};

export default Tag;
