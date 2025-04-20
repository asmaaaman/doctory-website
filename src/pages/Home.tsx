import { useState } from "react";
import { useStore } from "../store/useStore";
import DoctorCard from "../components/DoctorsCard";
import { FaUserMd, FaCalendarAlt } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import { Filter } from "../components/Filter";
import AppointmentsCard from "../components/AppointmentsCard";

const Home = () => {
  const appointments = useStore((state) => state.appointments);

  const getFilteredDoctors = useStore((s) => s.getFilteredDoctors);

  // 🔁 Force re-render when filter or searchQuery changes
  const filter = useStore((s) => s.filter);
  const searchQuery = useStore((s) => s.searchQuery);

  const filteredDoctors = getFilteredDoctors();

  const [activeTab, setActiveTab] = useState("doctors");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection onSearch={() => setActiveTab("doctors")} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`flex items-center gap-2 px-6 py-4 font-medium ${
              activeTab === "doctors"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("doctors")}
          >
            <FaUserMd />
            <span>Doctors</span>
          </button>
          <button
            className={`flex items-center gap-2 px-6 py-4 font-medium ${
              activeTab === "appointments"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("appointments")}
          >
            <FaCalendarAlt />
            <span>My Appointments</span>
          </button>
        </div>

        {/* Filters */}
        {activeTab === "doctors" && <Filter />}

        {/* Main View */}
        {activeTab === "doctors" ? (
          filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p className="text-lg">No doctors match your criteria.</p>
            </div>
          )
        ) : (
          <AppointmentsCard
            appointments={appointments}
            doctors={filteredDoctors}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
