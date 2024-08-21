import React from "react";
import { useState } from "react";

const Input = ({ handleChange }) => {
  const [searchedValue, setSearchedValue] = useState("");
  const changedValue = (e) => {
    console.log(e.target.value);
    handleChange(e.target.value);
  };
  return (
    <div>
      <div className="">
        <input
          type="text"
          className="border border-gray-300 mt-5 hover:border-blue-300"
          onChange={changedValue}
        ></input>
      </div>

      <p>List</p>
    </div>
  );
};

export default Input;
