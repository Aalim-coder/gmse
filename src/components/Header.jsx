import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchBar from "./searchBar";

function header() {
  return (
    <header>
      <h1>
        <LocalGroceryStoreIcon /> Global Mart Search Engine
      </h1>
      <div className="search-input-container">
        <SearchBar />
      </div>
    </header>
  );
}

export default header;
