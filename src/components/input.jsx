import React from "react";
import { useState } from "react";

const Input = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    // setSearchedValue(e.target.value);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          className="border border-gray-300"
          onChange={handleChange}
        ></input>
      </div>
      <p>Searched value: {searchedValue}</p>
      <p>List</p>
    </div>
  );
};

export default Input;
