import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import useOnlineStatusTracker from "../utils/useOnlineStatusTracker";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnValue, setBtnValue] = useState("login");
  const onlineStatus = useOnlineStatusTracker();
  const {userLoggedIn} = useContext(UserContext);

  //Subscribing to the store using selector
  const cartItems = useSelector(
    (store) => {
      return store.cart.items
    }
  );

  return (
    <div className="flex align-middle shadow-lg bg-amber-50">
      <div className="w-[20%]">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex nav-items w-[80%] justify-end">
        <ul className="flex items-center w-[75%] justify-evenly">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="cursor-pointer font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li>
            <button
              className="login cursor-pointer"
              onClick={() => {
                const changedBtnValue =
                  btnValue === "login" ? "logout" : "login";
                setBtnValue(changedBtnValue);
              }}
            >
              {btnValue}
            </button>
          </li>
          <li>{btnValue === "login" && userLoggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
