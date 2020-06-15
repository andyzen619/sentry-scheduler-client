import React, { useState } from "react";
import {generateType} from '../../helpers/index';

const TypePicker = ({ type, setType }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <div>Type</div>
      <div
        className="flex"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <div className="bg-gray-400 p-2 rounded-lg">{generateType(type)}</div>
      </div>
      {showDropdown && (
        <div className="absolute flex flex-col border-2 border-solid border-gray-100 p-2 rounded-md mt-2 shadow z-10 bg-white">
          <button
            className="border-b-2 border-gray-400"
            onClick={() => {
              setShowDropdown(!showDropdown);
              setType("1");
            }}
          >
            Check Up
          </button>
          <button
            className="border-b-2 border-gray-400"
            onClick={() => {
              setShowDropdown(!showDropdown);
              setType("2");
            }}
          >
            Walk In
          </button>
          <button
            className="border-b-2 border-gray-400"
            onClick={() => {
              setShowDropdown(!showDropdown);
              setType("3");
            }}
          >
            Emergency
          </button>
        </div>
      )}
    </div>
  );
};

export default TypePicker;
