import { MapPin, Languages } from "lucide-react";
import { Doctor } from "../types/doctor";

interface DoctorCardProps {
  doctor: Doctor;
}

export const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={doctor.imageUrl}
            alt={doctor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{doctor.locations.join(", ")}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Languages className="h-4 w-4" />
            <span>{doctor.languages.join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
