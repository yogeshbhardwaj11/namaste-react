import Filter from "./Filter";
import RestaurantCardList from "./RestauranCardtList";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatusTracker from "../utils/useOnlineStatusTracker";
import { useState, useEffect } from "react";

// not using keys (not acceptable) >>>>> index as key >>>>> unique id (best practice)
const Body = () => {
  const listOfRestaurants = useRestaurantList();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatusTracker();

  useEffect(() => {
    if (searchText === "") {
      setFilteredRestaurants(listOfRestaurants);
    } else {
      handleSearch();
    }
  }, [searchText, listOfRestaurants]);

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((restaurant) => {
      return restaurant?.info?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredList);
  };

  const handleTopRatedFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.3
    );
    setFilteredRestaurants(filteredList);
  };

  if (!onlineStatus) {
    return <h1>You seems offline. Please check your internet connection.</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <Filter
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={handleSearch}
        onFilter={handleTopRatedFilter}
      />
      <RestaurantCardList filteredRestaurants={filteredRestaurants} />
    </div>
  );
};

export default Body;
