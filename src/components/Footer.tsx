import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Concierge Service Munich</h3>
            <p className="text-sm text-gray-400 mb-4">
              Your personal assistant in Munich. We handle your paperwork, appointments, and daily tasks so you can focus on what matters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Document Management</li>
              <li>Medical Appointments</li>
              <li>Jobcenter Assistance</li>
              <li>Returns & Exchanges</li>
              <li>Translation Services</li>
              <li>Relocation Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <Mail className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:annettedemko@gmail.com" className="hover:text-white transition-colors">
                  annettedemko@gmail.com
                </a>
              </li>
              <li className="flex items-start text-sm">
                <Phone className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <a href="tel:+4916091441828" className="hover:text-white transition-colors">
                  +49 160 91441828
                </a>
              </li>
              <li className="flex items-start text-sm">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>Munich, Germany</span>
              </li>
              <li className="flex items-start text-sm">
                <Linkedin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/hanna-demko-3b9b9a372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Concierge Service Munich. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Made with care in Munich
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
