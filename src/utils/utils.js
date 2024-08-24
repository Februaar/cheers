import axios from "axios";

export const fetchData = async (BASE_URL, setData) => {
  try {
    const res = await axios.get(`${BASE_URL}/data`);
    setData(res.data);
  } catch (err) {
    console.error("Error", err);
  }
};

export const handleNavigation = (navigate, path) => {
  navigate(path);
};

export const parseCustomDateString = (dateString) => {
  const [yearPart, monthPart, dayPart] = dateString.split(".").map(Number);

  const currentYear = new Date().getFullYear();
  const currentCentury = Math.floor(currentYear / 100) * 100;
  const year = yearPart < 100 ? currentCentury + yearPart : yearPart;

  const month = monthPart - 1;
  const day = dayPart;

  return new Date(year, month, day);
};
