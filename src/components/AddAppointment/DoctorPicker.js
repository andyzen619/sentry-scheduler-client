import React, { useState } from "react";
import { generateDoctor } from "../../helpers/index";
import dropDownArrow from "./images/dropdown.png";

const DoctorPicker = ({ doctor, setDoctor }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <div>Doctor</div>
      <div
        className="flex"
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        <div className="bg-gray-400 p-2 rounded-lg flex">
          {generateDoctor(doctor)}
          <div className='flex flex-col justify-center m-2'>
            <img src={dropDownArrow} alt="dropDown" className="h-2" />
          </div>
        </div>
      </div>
      {showDropdown && (
        <div className="absolute flex flex-col border-2 border-solid border-gray-100 p-2 rounded-md mt-2 shadow z-10 bg-white">
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
