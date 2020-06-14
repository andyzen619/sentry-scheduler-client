import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DoctorPicker from "./DoctorPicker";
import TypePicker from "./TypePicker";

const AddAppointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [doctor, setDoctor] = useState("1");
  const [type, setType] = useState("1");

  return (
    <div className="w-screen h-screen p-40 absolute top-0 right-0 flex justify-center bg-gray-600 opacity-75">
      <div className="flex flex-col bg-white shadow-md rounded-lg w-1/2 p-20 opacity-100">
        <div className='flex justify-center'>Add Appointment</div>
        <div>Select Date</div>
        <DatePicker
          className="bg-gray-400 rounded-lg p-2"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
        />
        <DoctorPicker doctor={doctor} setDoctor={setDoctor} />
        <TypePicker type={type} setType={setType} />
        <div className="flex justify-center">
          <button className="mx-4">Cancel</button>
          <button className="mx-4">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
