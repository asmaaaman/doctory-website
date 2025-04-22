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
  const filteredDoctors = getFilteredDoctors();

  const [activeTab, setActiveTab] = useState<"doctors" | "appointments">(
    "doctors"
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection onSearch={() => setActiveTab("doctors")} />

      <div className="container mx-auto px-4 py-8">
        {/* Tabs Navigation */}
        <div
          className="flex flex-col sm:flex-row border-b border-gray-200 mb-8"
          role="tablist"
          aria-label="Main content sections"
        >
          {/* Doctors Tab */}
          <button
            id="doctors-tab"
            role="tab"
            aria-selected={activeTab === "doctors"}
            aria-controls="doctors-panel"
            tabIndex={activeTab === "doctors" ? 0 : -1}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-4 py-3 w-full sm:w-auto font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              activeTab === "doctors"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("doctors")}
          >
            <FaUserMd />
            <span>Doctors</span>
          </button>

          {/* Appointments Tab */}
          <button
            id="appointments-tab"
            role="tab"
            aria-selected={activeTab === "appointments"}
            aria-controls="appointments-panel"
            tabIndex={activeTab === "appointments" ? 0 : -1}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-4 py-3 w-full sm:w-auto font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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

        {/* Doctors Panel */}
        <div
          id="doctors-panel"
          role="tabpanel"
          aria-labelledby="doctors-tab"
          hidden={activeTab !== "doctors"}
        >
          {activeTab === "doctors" && <Filter />}

          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p className="text-lg">No doctors match your criteria.</p>
            </div>
          )}
        </div>

        {/* Appointments Panel */}
        <div
          id="appointments-panel"
          role="tabpanel"
          aria-labelledby="appointments-tab"
          hidden={activeTab !== "appointments"}
        >
          {activeTab === "appointments" && (
            <AppointmentsCard
              appointments={appointments}
              doctors={filteredDoctors}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
