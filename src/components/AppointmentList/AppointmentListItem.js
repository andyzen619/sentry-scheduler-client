import React from "react";
import {generateDoctor, generateType, generateStatus} from '../../helpers/index';

const AppoinmentListItem = ({ date, doctor, type, status, cancelAppointment, index }) => {
  return (
    <div className="flex justify-between border-b-2 border-gray-200 py-4">
      <div className="flex w-4/5">
        <div className="w-1/4 flex justify-center">{new Date(date).toLocaleString()}</div>
        <div className="w-1/4 flex justify-center">{generateDoctor(doctor)}</div>
        <div className="w-1/4 flex justify-center">{generateType(type)}</div>
        <div className="w-1/4 flex justify-center">{generateStatus(status)}</div>
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
