import { useState } from "react";
import { chevron } from "../../images/index";

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevClick = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextClick = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <button onClick={prevClick}>
        <img src={chevron} alt="prev-button" width={38} />
      </button>
      <div className="card">
        <img src={cards[currentIndex]} alt="cafe-poster" className="cafe-img" />
      </div>
      <button onClick={nextClick}>
        <img src={chevron} alt="next-button" width={38} />
      </button>
    </div>
  );
};

export default CardSlider;
