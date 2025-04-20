import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white  sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-700">
          Doctory
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/home">Find a Doctor</Link>
          <Link to="/about">About</Link>
          <Link to="/appointments">My Appointments</Link>
          {/*  <Link
            to="/book"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Book Now
          </Link> */}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav
          className="flex flex-col 
         items-start md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-700"
        >
          <Link to="/home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/appointments" onClick={() => setIsOpen(false)}>
            My Appointments
          </Link>
        </nav>
      )}
      <hr className="border-gray-100" />
    </header>
  );
}
