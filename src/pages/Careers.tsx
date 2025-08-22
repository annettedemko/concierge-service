import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Linkedin, Phone } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout showContact={true}>
      <div className="min-h-screen bg-white">
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link
                to="/"
                className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>

              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6"
              >
                Join Our Team
              </motion.h1>

              <div className="prose prose-lg max-w-none">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-4"
                >
                  We're growing our friendly Munich-based concierge service and looking for motivated people who want to help others navigate daily life with less stress.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-12"
                >
                  If you're organized, empathetic, and speak multiple languages — or just love solving everyday problems — we want to hear from you.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6">
                    Why Join Concierge Service Munich?
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Purpose",
                        description:
                          "Make a real impact on people’s lives by supporting them in moments of stress or need.",
                      },
                      {
                        title: "Flexibility",
                        description:
                          "Choose your hours and workload. Ideal for students, freelancers, or anyone who values freedom.",
                      },
                      {
                        title: "Support",
                        description:
                          "Work with digital tools and systems built to make your job easier, not harder.",
                      },
                    ].map((benefit, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full"
                      >
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mt-12">
                    <h3 className="font-bold text-xl mb-6">Contact Me</h3>
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src="/hanna.jpg"
                          alt="Hanna Demko"
                          className="w-32 h-32 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl font-bold text-gray-900">
                          Hanna Demko
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Founder & Personal Concierge
                        </p>
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
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Careers;
