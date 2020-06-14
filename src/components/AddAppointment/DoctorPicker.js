import React, { useState } from "react";

const DoctorPicker = ({ doctor, setDoctor }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const generateDoctor = () => {
    switch (doctor) {
      case "1":
        return "Dr. Joe Exotic";
      case "2":
        return "Dr. Baskins";
      default:
    }
  };

  return (
    <div className="relative">
      <div>Doctor</div>
      <div
        className="flex"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <div className="bg-gray-400 p-2 rounded-lg">{generateDoctor()}</div>
      </div>
      {showDropdown && (
        <div className="absolute flex flex-col border-2 border-solid border-gray-100 p-2 rounded-md mt-2 shadow">
          <button
            className="border-b-2 border-gray-400"
            onClick={() => {
              setShowDropdown(!showDropdown);
              setDoctor("1");
            }}
          >
            Dr. Joe Exotic
          </button>
          <button
            className="border-b-2 border-gray-400"
            onClick={() => {
              setShowDropdown(!showDropdown);
              setDoctor("2");
            }}
          >
            Dr. Baskins
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorPicker;
