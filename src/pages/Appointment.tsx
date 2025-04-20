import { useState } from "react";
import { useStore } from "../store/useStore";
import { useParams } from "react-router-dom";
import { FaCalendar, FaClock, FaVideo, FaPhone, FaUser } from "react-icons/fa";

const Appointment = () => {
  const { doctorId } = useParams();
  const doctor = useStore((state) => state.getDoctorById(doctorId || ""));
  const timeSlots = useStore((state) => state.getAvailableTimeSlots());

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentType, setAppointmentType] = useState<
    "in-person" | "video" | "phone"
  >("in-person");
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    reason: "",
  });

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appointment booking logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Doctor Info */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center gap-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-semibold">{doctor.name}</h2>
                <p className="text-blue-600">{doctor.specialization}</p>
                <p className="text-gray-600">
                  ${doctor.consultationFee} / consultation
                </p>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-6">Book Appointment</h3>

            {/* Appointment Type */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Appointment Type
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    appointmentType === "in-person"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setAppointmentType("in-person")}
                >
                  <FaUser />
                  <span>In Person</span>
                </button>
                <button
                  type="button"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    appointmentType === "video"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setAppointmentType("video")}
                >
                  <FaVideo />
                  <span>Video Call</span>
                </button>
                <button
                  type="button"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    appointmentType === "phone"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setAppointmentType("phone")}
                >
                  <FaPhone />
                  <span>Phone Call</span>
                </button>
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Select Date</label>
                <div className="relative">
                  <FaCalendar className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Select Time</label>
                <div className="relative">
                  <FaClock className="absolute left-3 top-3 text-gray-400" />
                  <select
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot.id} value={slot.time}>
                        {slot.time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Patient Information */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.patientName}
                  onChange={(e) =>
                    setFormData({ ...formData, patientName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.patientEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, patientEmail: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.patientPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, patientPhone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Reason for Visit
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg"
                  rows={3}
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
