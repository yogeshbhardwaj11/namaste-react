import { useEffect, useState } from "react";
import { SWIGGY_API_ENDPOINT } from "./constants";
import Shimmer from "../components/Shimmer";

const useRestaurantList = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            SWIGGY_API_ENDPOINT
        );
        const json = await data.json();
        setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    return restaurantList;
};

export default useRestaurantList;