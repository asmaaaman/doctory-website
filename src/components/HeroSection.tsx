import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useStore } from "../store/useStore";

const HeroSection = () => {
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    setSearchQuery(value);
  };

  return (
    <div>
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Find Your Doctor</h1>
          <p className="text-xl mb-8">
            Book appointments with the best doctors in your area
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl bg-white rounded-lg p-2 flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search doctors, specializations..."
                className="flex-1 outline-none text-gray-800"
                value={searchText}
                onChange={handleSearch}
              />
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => setSearchQuery(searchText)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
