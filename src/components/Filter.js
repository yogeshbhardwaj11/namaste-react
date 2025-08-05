const Filter = (props) => {
  const { searchText, setSearchText, onSearch, onFilter } = props;
  return (
    <div className="filter">
      <div className="search">
        <input
          type="text"
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* <button onClick={onSearch}>Search</button>	 */}
      </div>
      <button className="filter-btn" onClick={onFilter}>
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default Filter;
