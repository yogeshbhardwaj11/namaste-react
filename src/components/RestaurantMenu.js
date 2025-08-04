
import ShimmerCard from "./ShimmerCard";
import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

	const [resInfo, setResInfo ] = useState(null);
	const { resId } = useParams();

	useEffect(()=>{
		fetchRestaurantData();
	},[]);	

	const fetchRestaurantData = async  () => {
		const data = await fetch(
			RESTAURANT_MENU_API + resId
		);
		const resData = await data.json();
		setResInfo(resData.data);
	}

	if(resInfo === null){
			return <ShimmerCard />
	}

	const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
	const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
	
	return(
		<div className="res-menu">
			<h1>{name}</h1>
			<h2>{cuisines.join(", ")}</h2>
			<h2>{costForTwoMessage}</h2>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((itemCard) => (
					<li key={itemCard.card.info.id}>
						{itemCard.card.info.name} -
						Rs.	{(itemCard.card.info.price || itemCard.card.info.defaultPrice) /100}
					</li>
				))}
			</ul>
		</div>
	)
}

export default RestaurantMenu;