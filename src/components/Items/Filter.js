import { useReducer } from "react";
import { Button } from "@februaar/design-system";
import { useNavigate } from "react-router-dom";
import { handleNavigation } from "../../utils/utils";
import "./filter.scss";

const initialState = { isVisible: false };

function reducer(state, action) {
  switch (action.type) {
    case "SHOW":
      return { isVisible: true };
    case "HIDE":
      return { isVisible: false };
    case "TOGGLE":
      return { isVisible: !state.isVisible };
    default:
      return state;
  }
}

const SearchFilter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleArtistClick = (name) => {
    handleNavigation(navigate, `/${name}`);
  };

  const buttonProps = {
    size: "lg",
    variant: "primary",
    color: "serenity",
    _hover: { color: "#fff", backgroundColor: "#f7cac9" },
  };

  const buttons = [
    { value: "S.COUPS", label: "에스쿱스" },
    { value: "JEONGHAN", label: "정한" },
    { value: "JOSHUA", label: "조슈아" },
    { value: "JUN", label: "준" },
    { value: "HOSHI", label: "호시" },
    { value: "WONWOO", label: "원우" },
    { value: "WOOZI", label: "우지" },
    { value: "THE8", label: "디에잇" },
    { value: "MINGYU", label: "민규" },
    { value: "DK", label: "도겸" },
    { value: "VERNON", label: "버논" },
    { value: "SEUNGKWAN", label: "승관" },
    { value: "DINO", label: "디노" },
  ];

  return (
    <div className="filter-container">
      <div
        onClick={() => dispatch({ type: "TOGGLE" })}
        style={{ cursor: "pointer", width: "fit-content" }}
      >
        <span>멤버별</span>
      </div>
      <div className={`filter-buttons ${state.isVisible ? "visible" : ""}`}>
        {state.isVisible &&
          buttons.map(({ value, label }) => (
            <Button
              key={value}
              {...buttonProps}
              onClick={() => handleArtistClick(value)}
              value={value}
            >
              {label}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default SearchFilter;
