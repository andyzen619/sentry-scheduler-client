import React from "react";
import AppoinmentListItem from "./AppointmentListItem";

const AppointmentList = () => {
  const list = [1, 2, 3, 4, 5];

  return (
    <div className='bg-white p-4 m-4 rounded-lg shadow-md'>
      <div className="flex bg-gray-100 py-2 px-20 rounded-lg text-gray-600">
        <div className='w-1/5'>Date</div>
        <div className='w-1/5'>Doctor</div>
        <div className='w-1/5'>Type</div>
        <div className='w-1/5'>Status</div>
      </div>
      {list.map((item) => (
        <AppoinmentListItem label={item} />
      ))}
    </div>
  );
};

export default AppointmentList;
