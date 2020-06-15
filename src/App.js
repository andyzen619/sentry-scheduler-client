import React, { useState, useEffect } from "react";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import AddAppointment from "./components/AddAppointment/AddAppointment";
import Axios from "axios";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [appointmentList, setAppointmentList] = useState([]);

  //Get appointments
  const initializeAppointmentList = async () => {
    const query = await Axios.get("/appointments", {
      headers: { uid: "TEI2G2VXbuZqAHTqCRDOhnR6K852" },
    }).catch(() => {
      console.log("There was an error getting appointments.");
    });

    if (query && query.data) {
      const newAppointmentList = [];
      query.data.forEach((appointment) => {
        newAppointmentList.push(appointment);
      });

      setAppointmentList(newAppointmentList);
    }
  };

  //Cancel Appointment
  const cancelAppointment = (index) => {
    console.log(appointmentList[index]);
    Axios.patch("/appointments/change_appointment", {
      field: "status",
      new_value: "2",
      appointment_id: appointmentList[index].id,
    });

    setTimeout(() => {
      initializeAppointmentList();
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      initializeAppointmentList();
    }, 1000);
  }, [showAdd, setShowAdd]);

  return (
    <div className="bg-gray-200 h-screen relative">
      <div className="text-xl font-bold p-4">Appointments</div>
      <div className="flex justify-between m-4">
        <div className="rounded-lg w-32 shadow-md px-4 py-2 flex justify-center bg-white">
          User 1
        </div>
        <button
          className="rounded-lg w-32 shadow-md px-4 py-2 flex justify-center bg-blue-500 text-white border border-gray-400"
          onClick={() => {
            setShowAdd(!showAdd);
          }}
        >
          Add
        </button>
      </div>
      <AppointmentList
        appointmentList={appointmentList}
        setAppointmentList={setAppointmentList}
        cancelAppointment={cancelAppointment}
      />
      {showAdd && (
        <AddAppointment
          setShowAdd={setShowAdd}
          setAppointmentList={setAppointmentList}
          cancelAppointment={cancelAppointment}
        />
      )}
    </div>
  );
}

export default App;
