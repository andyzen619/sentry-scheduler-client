import React, { useState } from "react";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import AddAppointment from "./components/AddAppointment/AddAppointment";

function App() {
  const [showAdd, setShowAdd] = useState(false);
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
          Schedule
        </button>
      </div>
      <AppointmentList />
      {showAdd && <AddAppointment setShowAdd={setShowAdd} />}
    </div>
  );
}

export default App;
