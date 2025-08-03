import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

// not using keys (not acceptable) >>>>> index as key >>>>> unique id (best practice)
const Body = () => {
		const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
    return(
        <div className="body">
            <div className="filter">
							<button
								className="filter-btn"
								onClick= {() => {
									const filteredList = listOfRestaurants.filter(
										(restaurant) => restaurant.info.avgRating > 4.3
									);
									console.log(filteredList);
									setListOfRestaurants(filteredList);
								}}
							>Top Rated Restaurants</button>
						</div>
            <div className="restaurant-container">
							{
                listOfRestaurants.map(restaurant => (
									<RestaurantCard
										key={restaurant.info.id}
										restaurantData={restaurant.info}
									/>
								))
							}	
            </div>
        </div>  
    );
}

export default Body;