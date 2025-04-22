import { useState } from "react";
import { Doctor } from "../data/types";
import { FaStar, FaUserMd, FaLanguage, FaClock } from "react-icons/fa";
import { AppointmentModal } from "./AppointmentModal";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        role="article"
        aria-labelledby={`doctor-name-${doctor.id}`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="relative">
          <img
            src={doctor.image}
            alt={`${doctor.name}, ${doctor.specialization}`}
            className="w-full h-48 object-cover"
          />
          <div
            className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1"
            aria-label={`Rating: ${doctor.rating} out of 5 stars`}
          >
            <FaStar className="text-yellow-400" aria-hidden="true" />
            <span className="text-sm font-semibold">{doctor.rating}</span>
          </div>
        </div>

        <div className="p-4">
          <h3
            id={`doctor-name-${doctor.id}`}
            className="text-xl font-semibold text-gray-800 mb-2"
          >
            {doctor.name}
          </h3>
          <p className="text-blue-600 font-medium mb-3">
            {doctor.specialization}
          </p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-gray-600">
              <FaUserMd className="text-blue-500" aria-hidden="true" />
              <span>{doctor.experience} years experience</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <FaLanguage className="text-blue-500" aria-hidden="true" />
              <span>Location: {doctor.locations.join(", ")}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <FaClock className="text-blue-500" aria-hidden="true" />
              <span>Available on: {doctor.availability.days.join(", ")}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <span className="text-gray-600">
              <span className="font-semibold">${doctor.consultationFee}</span> /
              consultation
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 mt-4 sm:mt-0 rounded-lg hover:bg-blue-700 transition-colors 
              duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
              aria-label={`Book appointment with ${doctor.name}`}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <AppointmentModal
        doctor={doctor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DoctorCard;
