import { CDN_URL } from "../utils/constants";

// we can also do destructuring on the fly => const RestaurantCard = ({name, cuisine})
const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    props.restaurantData;
  return (
    <div className="restaurant-car bg-gray-100 hover:bg-gray-200 rounded shadow overflow-hidden flex flex-col h-full rounded-lg py-5 px-2.5">
        <div className="aspect-[1/1]">
          <img
            className="restaurant-logo object-cover aspect-[1/1] rounded-lg"
            src={CDN_URL + cloudinaryImageId}
            alt="restaurant-logo"
          />
        </div>
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
