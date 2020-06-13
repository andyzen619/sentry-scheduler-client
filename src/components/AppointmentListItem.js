import React from "react";

const AppoinmentListItem = ({ label }) => {
  return (
    <div className="flex justify-between border-b-2 border-gray-200 py-4">
      <div>Appointment {label}</div>
      <div className='text-gray-700'>
        <button className='bg-red-300 p-2 rounded-lg shadow mx-2'>Cancel</button>
        <button className='bg-gray-200 p-2 rounded-lg shadow mx-2'>Edit</button>
      </div>
    </div>
  );
};

export default AppoinmentListItem;
