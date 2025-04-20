interface AppointmentsCardProps {
  appointments: any[];
  doctors: any[];
}

const AppointmentsCard = ({ appointments, doctors }: AppointmentsCardProps) => {
  return (
    <div>
      <div className="divide-y divide-gray-200">
        {appointments.map((appointment) => {
          const doctor = doctors.find((d) => d.id === appointment.doctorId);
          return (
            <div key={appointment.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={doctor?.image}
                    alt={doctor?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {doctor?.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {doctor?.specialization}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ${
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
                  <p className="text-sm text-gray-500 mt-1">
                    {appointment.date} at {appointment.time}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentsCard;
