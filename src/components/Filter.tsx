import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useStore } from "../store/useStore";

export const Filter = () => {
  const { filterDoctors } = useStore();
  const doctors = useStore((state) => state.doctors);

  // ✅ Start with clear default values
  const [specialization, setSpecialization] = useState("All Specializations");
  const [availability, setAvailability] = useState("All Availability");

  // ✅ Unique specializations
  const specializations = [
    "All Specializations",
    ...new Set(doctors.map((doctor) => doctor.specialization)),
  ];

  // ✅ Static availability options
  const availabilityOptions = [
    "All Availability",
    "Available Today",
    "Available This Week",
    "Available Next Week",
  ];

  useEffect(() => {
    filterDoctors({
      specialization:
        specialization === "All Specializations" ? "" : specialization,
      availability: availability === "All Availability" ? "" : availability,
    });
  }, [specialization, availability, filterDoctors]);

  return (
    <div
      className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md mb-3"
      role="search"
      aria-label="Doctor filters"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Specialization Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="specialization-filter"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Specialization
            </label>
            <select
              id="specialization-filter"
              className="bg-white px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              aria-label="Filter by specialization"
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          {/* Availability Dropdown */}
          <div className="flex flex-col">
            <label
              htmlFor="availability-filter"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Availability
            </label>
            <select
              id="availability-filter"
              className="bg-white px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              aria-label="Filter by availability"
            >
              {availabilityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={() => {
            setSpecialization("All Specializations");
            setAvailability("All Availability");
          }}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Reset all filters"
        >
          <FaFilter aria-hidden="true" />
          <span>Reset Filters</span>
        </button>
      </div>
    </div>
  );
};
