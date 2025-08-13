import MenuCategoryItem, { withImageMenuItem } from "./MenuCategoryItem";

const MenuCategoryItemList = (props) => {
  const { menuCategoryItems } = props;

  return (
    <div>
      {menuCategoryItems.map((item) => (
          <MenuCategoryItem key={item?.card?.info?.id} item={item?.card?.info} />
      ))}
    </div>
  );
};

export default MenuCategoryItemList;
