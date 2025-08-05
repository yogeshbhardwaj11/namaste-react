import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const RestaurantCardList = (props) => {
  const { filteredRestaurants } = props;

  return (
    <div className="restaurant-container">
      {filteredRestaurants.map((restaurant) => (
        <Link
          to={"/restaurants/" + restaurant.info.id}
          key={restaurant.info.id}
        >
          <RestaurantCard restaurantData={restaurant.info} />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCardList;
