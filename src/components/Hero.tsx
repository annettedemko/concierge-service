import { ArrowRight, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      className="relative w-full overflow-visible"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { when: "beforeChildren", staggerChildren: 0.15, delayChildren: 0.3 },
        },
      }}
    >
      <div className="banner-container bg-black relative overflow-visible h-[60vh] sm:h-[70vh] md:h-[750px] w-full">
        {/* Background image + gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-concierge.jpg"
            alt="Concierge Service Munich"
            className={`w-full h-full object-cover opacity-70 grayscale ${
              isMobile ? "object-right" : "object-center"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pt-24 sm:pt-32 md:pt-40 px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-4xl text-center" variants={{}}>
            {/* Title */}
            <motion.h1
              className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Concierge Service for Real Life
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-gray-300 mt-4 sm:mt-5 text-base sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              From lost-in-translation to fully sorted — your personal help in Munich.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <a
                href="https://tally.so/r/3l2qb5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl flex items-center justify-center text-sm sm:text-base font-medium"
              >
                Book a Task
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                className="w-full sm:w-auto px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center text-sm sm:text-base font-medium"
                onClick={() => {
                  const el = document.querySelector('[data-chatbot-toggle]');
                  if (el) (el as HTMLElement).click();
                }}
              >
                Ask Assistant
                <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
              </button>
            </motion.div>

            {/* Logo — fade in separately */}
            <motion.div
              className="mt-12 sm:mt-16 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.9, ease: "easeOut" }}
            >
              <div className="w-36 sm:w-48 md:w-56 aspect-square rounded-full overflow-hidden shadow-xl">
                <img
                  src="/logo2.png"
                  alt="Done Logo"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
