// components/Footer.tsx

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 mt-16">
      <div className="max-w-screen-xl  mx-auto px-4 py-10 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-2">Doctory</h2>
            <p className="max-w-xs">
              Your trusted platform for finding the best doctors and booking
              appointments easily.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-gray-900 font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-2">Help</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Support</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-2">Follow Us</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-4 text-center text-xs text-gray-500">
          &copy; 2025 Doctory. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
