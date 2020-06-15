import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DoctorPicker from "./DoctorPicker";
import TypePicker from "./TypePicker";
import Axios from "axios";

const AddAppointment = ({ setShowAdd }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [doctor, setDoctor] = useState("1");
  const [type, setType] = useState("1");

  return (
    <div className="w-screen h-screen p-40 absolute top-0 right-0 flex justify-center bg-gray-600">
      <div className="flex flex-col bg-white shadow-md rounded-lg w-1/2 p-20">
        <div className="flex justify-center text-xl font-bold">
          Add Appointment
        </div>
        <div>Select Date</div>
        <DatePicker
          className="bg-gray-400 rounded-lg p-2"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <DoctorPicker doctor={doctor} setDoctor={setDoctor} />
        <TypePicker type={type} setType={setType} />
        <div className="flex justify-center my-4">
          <button
            className="mx-4 bg-red-400 p-2 rounded-md w-24"
            onClick={() => {
              setShowAdd(false);
            }}
          >
            Cancel
          </button>
          <button
            className="mx-4 bg-blue-500 p-2 rounded-md w-24"
            onClick={() => {
              Axios.post("/appointments/add", {
                doctor,
                type,
                date: startDate,
                uid: "TEI2G2VXbuZqAHTqCRDOhnR6K852",
              });
              setShowAdd(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
