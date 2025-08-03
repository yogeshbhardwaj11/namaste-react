import { CDN_URL } from "../utils/constants";

// we can also do destructuring on the fly => const RestaurantCard = ({name, cuisine})
const RestaurantCard = (props) => {
	const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = props.restaurantData;
    return (
        <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="restaurant-logo"
                src={ CDN_URL + cloudinaryImageId }
                alt="restaurant-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString} mins</h4>
        </div>
    );
}

export default RestaurantCard;