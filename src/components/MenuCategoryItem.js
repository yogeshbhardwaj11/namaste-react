import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuCategoryItem = (props) => {
  const { name, price, defaultPrice, description, imageId } = props.item;

  const dispatch = useDispatch();
  const handleItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="py-4 flex justify-between border-gray-300 border-b-2">
      <div className="pr-10">
        <div className="">
          <span>{name} - </span>
          <span className="text-lg">&#8377;{price ? price/100 : defaultPrice/100}</span>
        </div>
        <p className="text-xs">{description}</p>
      </div>
      {imageId ? (
        <div className="relative">
          <button
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white border-black-300 rounded-md p-2 cursor-pointer"
            onClick={() => handleItem(props.item)}
          >
            Add+
          </button>
          <div className="aspect-1/1 w-30 h-30 border-">
            <img
              className="rounded-md aspect-1/1"
              src={CDN_URL + props.item.imageId}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MenuCategoryItem;
