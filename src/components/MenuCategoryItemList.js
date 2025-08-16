import MenuCategoryItem, { withImageMenuItem } from "./MenuCategoryItem";

const MenuCategoryItemList = (props) => {
  const { items } = props;

  return (
    <div>
      {items.map((item) => (
          <MenuCategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuCategoryItemList;
