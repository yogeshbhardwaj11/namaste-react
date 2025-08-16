import { Link } from "react-router-dom";
import RestaurantCard, { withTopChoiceLabel } from "./RestaurantCard";

const RestaurantCardList = (props) => {
  const { filteredRestaurants } = props;
  const RestaurantCardTopChoice = withTopChoiceLabel(RestaurantCard);

  return (
    <div className="restaurant-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {filteredRestaurants.map((restaurant) => (
        <Link
          to={"/restaurants/" + restaurant.info.id}
          key={restaurant.info.id}
        >
          {restaurant.info.avgRating >= 4.5 ? (
            <RestaurantCardTopChoice restaurantData={restaurant.info} />
          ) : (
            <RestaurantCard restaurantData={restaurant.info} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCardList;
