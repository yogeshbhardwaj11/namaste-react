import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Filter = (props) => {
  const { searchText, setSearchText, onSearch, onFilter } = props;
  const { userLoggedIn, setUserName } = useContext(UserContext);
  return (
    <div className="filter flex my-5 px-5">
      <div className="search flex">
        <input
          type="text"
          className="searchBox border-2 p-2 min-w-6/12 rounded-md mr-5"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-5 bg-green-500 text-white rounded-lg border-green-500 cursor-pointer"
          onClick={onSearch}
        >
          Search
        </button>
        <button
          className="filter-btn ml-5 px-5 bg-blue-500 text-white rounded-lg border-green-500 cursor-pointer"
          onClick={onFilter}
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          className=" ml-8 border-2 p-2 min-w-6/12 rounded-md mr-5"
          value={userLoggedIn}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
