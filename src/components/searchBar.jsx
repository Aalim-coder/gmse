import React, { useState } from "react";
import useSearchContext from "../hooks/useSearchContext";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const {setLoading,fetchData} = useSearchContext();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData(searchQuery)
  };

  return (
    <form onSubmit={handleSubmit} className="search-input-container">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search for products..."
        id="searchBar"
        className="search-input"
      />
    </form>
  );
}

export default SearchBar;
