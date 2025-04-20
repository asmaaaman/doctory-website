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
              <fieldset>
                <legend className="block text-gray-700 mb-2 font-medium">
                  Appointment Type
                </legend>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="in-person"
                      name="appointment-type"
                      value="in-person"
                      checked={appointmentType === "in-person"}
                      onChange={() => setAppointmentType("in-person")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="in-person"
                      className="ml-2 flex items-center gap-2"
                    >
                      <FaUser aria-hidden="true" />
                      <span>In Person</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="video"
                      name="appointment-type"
                      value="video"
                      checked={appointmentType === "video"}
                      onChange={() => setAppointmentType("video")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="video"
                      className="ml-2 flex items-center gap-2"
                    >
                      <FaVideo aria-hidden="true" />
                      <span>Video Call</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="phone"
                      name="appointment-type"
                      value="phone"
                      checked={appointmentType === "phone"}
                      onChange={() => setAppointmentType("phone")}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="phone"
                      className="ml-2 flex items-center gap-2"
                    >
                      <FaPhone aria-hidden="true" />
                      <span>Phone Call</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="date" className="block text-gray-700 mb-2">
                  Select Date
                </label>
                <div className="relative">
                  <FaCalendar
                    className="absolute left-3 top-3 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="date"
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    aria-label="Select appointment date"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700 mb-2">
                  Select Time
                </label>
                <div className="relative">
                  <FaClock
                    className="absolute left-3 top-3 text-gray-400"
                    aria-hidden="true"
                  />
                  <select
                    id="time"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    aria-label="Select appointment time"
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
                <label
                  htmlFor="patient-name"
                  className="block text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="patient-name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.patientName}
                  onChange={(e) =>
                    setFormData({ ...formData, patientName: e.target.value })
                  }
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="patient-email"
                  className="block text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="patient-email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.patientEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, patientEmail: e.target.value })
                  }
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="patient-phone"
                  className="block text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="patient-phone"
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={formData.patientPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, patientPhone: e.target.value })
                  }
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="reason" className="block text-gray-700 mb-2">
                  Reason for Visit
                </label>
                <textarea
                  id="reason"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                  aria-required="true"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Book Appointment"
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
