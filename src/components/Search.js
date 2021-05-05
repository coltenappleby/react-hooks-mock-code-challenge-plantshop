import React, {useState} from "react";

function Search({changeFilter}) {

  let [search, updateSearch] = useState("")

  function onType(value) {
    updateSearch(value)
    changeFilter(value) 
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type = "text"
        id = "search"
        placeholder = "Type a name to search..."
        value = {search}
        onChange={(e) => onType(e.target.value)}
      />
    </div>
  );
}

export default Search;
