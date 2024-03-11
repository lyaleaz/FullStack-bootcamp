import React, { useState } from "react";

function SearchContainer({ addCity }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search logic here");

    addCity({
      id: Date.now(),
      name: inputValue,
      tempe: "",
      condition: "",
      conditionPic: "",
      inData: true,
    });
    setInputValue("");
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter location"
      />
      <button onClick={handleSearch}>search</button>
    </div>
  );
}

export default SearchContainer;
