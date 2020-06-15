import React from "react";

const AppoinmentListItem = ({ date, doctor, type, status, cancelAppointment, index }) => {
  return (
    <div className="flex justify-between border-b-2 border-gray-200 py-4">
      <div className="flex w-4/5">
        <div className="w-1/4 flex justify-center">{date}</div>
        <div className="w-1/4 flex justify-center">{doctor}</div>
        <div className="w-1/4 flex justify-center">{type}</div>
        <div className="w-1/4 flex justify-center">{status}</div>
      </div>
      <div className="text-gray-700 w-1/5 flex justify-end">
        <button className="bg-red-300 p-2 rounded-lg shadow mx-2" onClick={() => {
          cancelAppointment(index);
        }}>
          Cancel
        </button>
        <button className="bg-gray-200 p-2 rounded-lg shadow mx-2">Edit</button>
      </div>
    </div>
  );
};

export default AppoinmentListItem;
