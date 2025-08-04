import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_ENDPOINT } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// not using keys (not acceptable) >>>>> index as key >>>>> unique id (best practice)
const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(
		()=>{fetchData();},
		[]
	);

	const fetchData = async () => {
		const data = await fetch(
			SWIGGY_API_ENDPOINT
		);
		const json = await data.json();

		setListOfRestaurants(
			json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
		)
		setFilteredRestaurants(
			json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
		)
	}

	if (listOfRestaurants.length === 0){
		return <Shimmer />;
	}

	return(
		<div className="body">
			<div className="filter">
				<div className="search">
					<input type="text" className="searchBox" value={searchText} onChange={(e) => {
						setSearchText(e.target.value);
						console.log(e.target.value);
					}} />
					<button onClick={() => {
						const filteredList =
							listOfRestaurants.filter(
								restaurant => {
									return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
								}
							);
						setFilteredRestaurants(filteredList);
					}}>Search</button>	
				</div>
				<button
					className="filter-btn"
					onClick= {() => {
						const filteredList = listOfRestaurants.filter(
							(restaurant) => restaurant.info.avgRating > 4.3
						);
						console.log(filteredList);
						setFilteredRestaurants(filteredList);	
					}}
				>Top Rated Restaurants</button>
			</div>

			<div className="restaurant-container">
				{
					filteredRestaurants.map(restaurant => (
						<Link
							to={"/restaurants/"+ restaurant.info.id}
							key={restaurant.info.id}>
								<RestaurantCard
									restaurantData={restaurant.info}
								/>
						</Link>
					))
				}	
			</div>
		</div>  
	);
}

export default Body;