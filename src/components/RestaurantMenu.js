import ShimmerCard from "./ShimmerCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import MenuCategory from "./MenuCategory";
import UserContext from "../utils/UserContext";
import { useState, useContext } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const {userLoggedIn} = useContext(UserContext);

  if (resInfo === null) {
    return <ShimmerCard />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="res-menu m-auto py-4 m-4">
      <div className="text-center">
        <h1 className="font-extrabold text-center py-5">{name}</h1>
        <h2>
          {cuisines.join(", ")} : {costForTwoMessage}
        </h2>
        <h2>Hey {userLoggedIn} Here is the Menu</h2>
      </div>
      {categories.map((category, index) => (
        // controlled component
        <MenuCategory
          key={category?.card?.card?.categoryId}
          menuCategory={category.card?.card}
          showItems={showIndex === index}
          setShowItems={() => {
            showIndex === index ? setShowIndex(null) : setShowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
