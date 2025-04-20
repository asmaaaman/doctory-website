import React from "react";
import { useStore } from "../store/useStore";
import { format } from "date-fns";

export const AppointmentsList = () => {
  const appointments = useStore((state) => state.appointments);
  const doctors = useStore((state) => state.doctors);
  const updateAppointmentStatus = useStore(
    (state) => state.updateAppointmentStatus
  );

  const getDoctorName = (doctorId: string) => {
    const doctor = doctors.find((d) => d.id === doctorId);
    return doctor ? doctor.name : "Unknown Doctor";
  };

  const handleStatusChange = (
    appointmentId: string,
    newStatus: "confirmed" | "cancelled" | "completed"
  ) => {
    updateAppointmentStatus(appointmentId, newStatus);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">My Appointments</h2>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">
                  {getDoctorName(appointment.doctorId)}
                </h3>
                <p className="text-gray-600">
                  {format(new Date(appointment.date), "MMMM d, yyyy")} at{" "}
                  {appointment.time}
                </p>
                <p className="text-gray-600 mt-1">{appointment.reason}</p>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    appointment.status === "confirmed"
                      ? "bg-green-100 text-green-800"
                      : appointment.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : appointment.status === "cancelled"
                      ? "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {appointment.status.charAt(0).toUpperCase() +
                    appointment.status.slice(1)}
                </span>

                {appointment.status === "pending" && (
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        handleStatusChange(appointment.id, "confirmed")
                      }
                      className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() =>
                        handleStatusChange(appointment.id, "cancelled")
                      }
                      className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                {appointment.status === "confirmed" && (
                  <button
                    onClick={() =>
                      handleStatusChange(appointment.id, "completed")
                    }
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {appointments.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            No appointments found
          </p>
        )}
      </div>
    </div>
  );
};
