import { useRef } from "react";
import { FileText, MapPin, Truck, Users, Send, Calendar, CheckCircle, MessageSquare, Zap, RefreshCcw, ShieldCheck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const features = [
    {
      icon: <FileText className="w-10 h-10 text-white" />,
      title: "Paperwork Help",
      description: "We assist with letters, documents, and official forms — so you don’t have to stress over German bureaucracy.",
      image: "/placeholder-image-1.jpg",
    },
    {
      icon: <MapPin className="w-10 h-10 text-white" />,
      title: "We Go with You, or Instead of You",
      description: "Appointments at Bürgerbüro, doctor’s visits, or Jobcenter? We accompany you or go on your behalf.",
      image: "/placeholder-image-2.jpg",
    },
    {
      icon: <Truck className="w-10 h-10 text-white" />,
      title: "Package Pickups & Returns",
      description: "Need to pick up, send or return something? We take care of parcels, returns, and deliveries with care.",
      image: "/placeholder-image-3.jpg",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Your Local Life Assistant",
      description: "New to the city? We help you find your way, register, translate, and get things done hassle-free.",
      image: "/placeholder-image-4.jpg",
    },
  ];

  const howItWorksSteps = [
    {
      icon: <Send className="w-8 h-8 text-gray-700" />,
      title: "Step 1 — You Send Us a Task",
      description: "Via WhatsApp, Telegram, Email or Webform. Tell us what you need help with.",
      example: "e.g. ‘Return Amazon package’ → We did it same-day."
    },
    {
      icon: <Calendar className="w-8 h-8 text-gray-700" />,
      title: "Step 2 — We Clarify and Confirm",
      description: "We reply quickly, ask details if needed, and send you a price estimate.",
      example: "e.g. ‘Need to go to KVR’ → We confirm and go for you."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-gray-700" />,
      title: "Step 3 — Task Completed",
      description: "We run the errand, solve the problem, or go to the appointment for you.",
      example: "e.g. ‘Drop off document at embassy’ → Done within 2h."
    },
  ];

  const processIcons = ["📌", "✅", "🏃", "📷", "💬"];

  return (
    <section id="features" className="py-16 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}>
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-block mb-3 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-3xl font-bold text-gray-900">What We Do for You</h2>
          <p className="text-gray-600 mt-4">
            Everyday help that makes your life easier in Munich. For expats, busy professionals, and anyone who needs a reliable hand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg relative group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-60">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition duration-300"></div>
                <div className="absolute top-4 left-4">{feature.icon}</div>
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <div className="inline-block mb-3 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            How It Works – Simple, Human, Efficient
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Concierge Service Works</h2>
          <p className="text-gray-600">
            From your request to a solved task – clear, fast, and friendly. No apps to install, no contracts to sign.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{step.description}</p>
              <p className="text-xs italic text-gray-500">{step.example}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">{processIcons.join(" → ")}</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Transparent pricing</li>
            <li>• Friendly service in your language</li>
            <li>• You always know what’s going on</li>
          </ul>
        </div>

        <div className="mt-16 bg-gray-100 py-10 px-6 rounded-xl shadow-md text-center max-w-xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Done. You’re Free to Focus on What Matters.</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <a
              href="https://tally.so/r/3l2qb5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium text-sm sm:text-base transition-all shadow hover:shadow-md"
            >
              📋 Book Your First Task
            </a>
            <Button
              variant="outline"
              data-chatbot-toggle
            >
              💬 Message Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
