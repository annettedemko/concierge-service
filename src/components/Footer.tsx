import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">
              © {new Date().getFullYear()} Concierge Service Munich. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              to="/privacy-policy"
              className="text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/about"
              className="text-sm hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/careers"
              className="text-sm hover:text-white transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
