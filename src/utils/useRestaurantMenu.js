import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constants";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData(resID);
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
