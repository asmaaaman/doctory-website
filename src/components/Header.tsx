import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            Doctory
          </Link>

          {/* Hamburger Button - Mobile Only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/appointments"
                  className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                >
                  Appointments
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/appointments"
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                >
                  Appointments
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
