const Filter = (props) => {
  const { searchText, setSearchText, onSearch, onFilter } = props;
  return (
    <div className="filter flex my-5 px-5">
      <div className="search flex">
        <input
          type="text"
          className="searchBox border-2 p-2 min-w-full rounded-md mr-5"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="px-5 bg-green-500 text-white rounded-lg border-green-500 cursor-pointer" onClick={onSearch}>Search</button>	
        <button className="filter-btn ml-5 px-5 bg-blue-500 text-white rounded-lg border-green-500 cursor-pointer" onClick={onFilter}>
        Top Rated Restaurants
      </button>
      </div>
    </div>
  );
};

export default Filter;
