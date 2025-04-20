import { useStore } from "../store/useStore";
import DoctorCard from "./DoctorsCard";

export const DoctorList = () => {
  const filteredDoctors = useStore((state) => state.getFilteredDoctors());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};
