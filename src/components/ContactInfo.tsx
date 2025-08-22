import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section
      id="contact-info"
      className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our concierge service? Reach out and let's talk.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Hanna's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700 max-w-md w-full">
            <div className="flex flex-col items-center text-center">
              <img
                src="/hanna.jpg"
                alt="Hanna Demko"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Hanna Demko</h3>
              <p className="text-gray-600 mb-4">Founder & Personal Concierge</p>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:annettedemko@gmail.com"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  annettedemko@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/hanna-demko-3b9b9a372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
                <a
                  href="tel:+4916091441828"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +49 160 91441828
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
