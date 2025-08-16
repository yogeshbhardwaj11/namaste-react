import MenuCategoryItemList from "./MenuCategoryItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-10 py-5">
        <h1 className="font-bold text-xl">Cart</h1>
        {cartItems.length !== 0 && (
          <button
            className="bg-green-500 text-white rounded-lg p-2 cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems.length !== 0 && (
          <button
            className="bg-blue-500 text-white rounded-lg p-2 cursor-pointer"
            onClick={handleRemoveItem}
          >
            Remove Item
          </button>
        )}
      </div>
      <div className="w-6/12">
        {cartItems.length === 0 ? (
          <h1 className="text-3xl text-center">Cart is Empty</h1>
        ) : (
          <MenuCategoryItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
