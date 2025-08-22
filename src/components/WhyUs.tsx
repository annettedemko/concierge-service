import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ThumbsUp, Users, Clock4, Sparkles, MapPin, Zap, MessageSquare, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, { once: true, margin: "-250px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);

  return (
    <span ref={countRef} className="font-bold tabular-nums">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const WhyChooseUs = () => {
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2, duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="why-choose" className="py-16 bg-white w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-250px" }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold text-gray-900 mb-4" variants={itemVariants}>
            Why Our Clients Choose Concierge Assistant
          </motion.h2>
          <motion.p className="text-gray-600 text-lg max-w-3xl mx-auto" variants={itemVariants}>
            Because they're smart enough not to waste time on German bureaucracy and boring errands.
          </motion.p>
        </motion.div>

        {/* Top stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-250px" }}
          variants={containerVariants}
        >
          <motion.div className="bg-gray-100 p-6 rounded-xl text-center border border-gray-200" variants={itemVariants}>
            <Clock4 className="w-10 h-10 mx-auto text-gray-700 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">
              <AnimatedCounter end={85} suffix="%" />
            </h3>
            <p className="text-gray-700 mt-2">of our clients say we saved them 3+ hours a week</p>
          </motion.div>

          <motion.div className="bg-gray-100 p-6 rounded-xl text-center border border-gray-200" variants={itemVariants}>
            <Users className="w-10 h-10 mx-auto text-gray-700 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">
              <AnimatedCounter end={90} suffix="%" />
            </h3>
            <p className="text-gray-700 mt-2">would recommend us to friends & colleagues</p>
          </motion.div>

          <motion.div className="bg-gray-100 p-6 rounded-xl text-center border border-gray-200" variants={itemVariants}>
            <ThumbsUp className="w-10 h-10 mx-auto text-gray-700 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-700 mt-2">human service — no chatbots, no scripts</p>
          </motion.div>
        </motion.div>

        {/* Bottom features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-250px" }}
          variants={containerVariants}
        >
          <motion.div className="p-6 rounded-xl bg-white border border-gray-200" variants={itemVariants}>
            <MessageSquare className="w-8 h-8 text-gray-700 mb-3" />
            <h4 className="text-lg font-bold text-gray-800 mb-1">Human Service, No Bots</h4>
            <p className="text-gray-600 text-sm">Talk to real people who understand your needs – not a chatbot.</p>
          </motion.div>

          <motion.div className="p-6 rounded-xl bg-white border border-gray-200" variants={itemVariants}>
            <MapPin className="w-8 h-8 text-gray-700 mb-3" />
            <h4 className="text-lg font-bold text-gray-800 mb-1">Local Knowledge</h4>
            <p className="text-gray-600 text-sm">We know Munich. We speak German. We handle bureaucracy for you.</p>
          </motion.div>

          <motion.div className="p-6 rounded-xl bg-white border border-gray-200" variants={itemVariants}>
            <Zap className="w-8 h-8 text-gray-700 mb-3" />
            <h4 className="text-lg font-bold text-gray-800 mb-1">Flexible & On-Demand</h4>
            <p className="text-gray-600 text-sm">No subscription, no stress. Pay only when you need us.</p>
          </motion.div>

          <motion.div className="p-6 rounded-xl bg-white border border-gray-200" variants={itemVariants}>
            <Sparkles className="w-8 h-8 text-gray-700 mb-3" />
            <h4 className="text-lg font-bold text-gray-800 mb-1">Multilingual Help</h4>
            <p className="text-gray-600 text-sm">We speak your language and help you feel at home.</p>
          </motion.div>
        </motion.div>

        <motion.div className="text-center mt-12" variants={itemVariants}>
          <a
            href="https://tally.so/r/3l2qb5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            📋 Get Help Today <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
