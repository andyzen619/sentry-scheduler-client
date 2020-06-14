import React, { useState } from "react";

const TypePicker = ({ type, setType }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  //Generates doctor name based on doctor code
  const generateType = () => {
    switch (type) {
      case "1":
        return "Check up";
      case "2":
        return "Walk In";
      case "3":
        return "Emergency";
      default:
    }
  };

  return (
    <div className="relative">
      <div>Type</div>
      <div
        className="flex"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <div className="bg-gray-400 p-2 rounded-lg">{generateType()}</div>
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
