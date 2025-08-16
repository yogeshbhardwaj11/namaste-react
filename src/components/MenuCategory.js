import { useEffect, useState } from "react";
import MenuCategoryItemList from "./MenuCategoryItemList";

const MenuCategory = (props) => {
  const {menuCategory, showItems, setShowItems} = props;
  const {title, itemCards} = menuCategory;
  const handleClick = () => {
    setShowItems();
  }
  
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-50 w-6/12 mx-auto my-5 shadow-lg p-4">
        <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>&#9660;</span>
        </div>
        { showItems && <MenuCategoryItemList items={itemCards.map((item)=> item.card.info  )} />}
      </div>
    </div>
  );
};

export default MenuCategory;
