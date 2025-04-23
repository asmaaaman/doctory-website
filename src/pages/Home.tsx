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

  useStore((s) => s.searchQuery);
  useStore((s) => s.filter);

  const filteredDoctors = getFilteredDoctors();

  const [activeTab, setActiveTab] = useState<"doctors" | "appointments">(
    "doctors"
  );

  // Update filtered doctors whenever filters or search change

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        onSearch={() => {
          setActiveTab("doctors");
        }}
      />

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
            className={`flex items-center gap-2 px-4 py-2 ${
              activeTab === "doctors"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("doctors")}
          >
            <FaUserMd aria-hidden="true" />
            <span>Doctors</span>
          </button>

          {/* Appointments Tab */}
          <button
            id="appointments-tab"
            role="tab"
            aria-selected={activeTab === "appointments"}
            aria-controls="appointments-panel"
            className={`flex items-center gap-2 px-4 py-2 ${
              activeTab === "appointments"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("appointments")}
          >
            <FaCalendarAlt aria-hidden="true" />
            <span>Appointments</span>
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
