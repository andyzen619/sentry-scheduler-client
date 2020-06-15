import React from "react";
import AppoinmentListItem from "./AppointmentListItem";

const AppointmentList = ({ appointmentList, cancelAppointment }) => {

  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-4">
      <div className="flex bg-gray-100 p-2 rounded-lg text-gray-600">
        <div className="w-1/5 flex justify-center">Date</div>
        <div className="w-1/5 flex justify-center">Doctor</div>
        <div className="w-1/5 flex justify-center">Type</div>
        <div className="w-1/5 flex justify-center">Status</div>
      </div>
      {appointmentList.map((item, index) => (
        <AppoinmentListItem
          date={item.date}
          type={item.type}
          doctor={item.doctor}
          status={item.status}
          cancelAppointment={cancelAppointment}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

export default AppointmentList;
