import { useState, useRef, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    id: 1,
    text: "I was drowning in letters from the Jobcenter. Hanna sorted it all in 2 days. She even came with me to the office.",
    author: "Oksana, newcomer from Ukraine",
  },
  {
    id: 2,
    text: "They picked up my dry cleaning, mailed documents, and even helped change my SIM card. All through WhatsApp.",
    author: "Daniel, marketing manager",
  },
  {
    id: 3,
    text: "My elderly mother needed help with doctor visits. This service was a godsend. Warm, fast, and reliable.",
    author: "Helga, Munich local",
  },
  {
    id: 4,
    text: "Honestly? This is the first time I felt like I didn’t have to beg someone to explain things in plain language.",
    author: "Ali, IT consultant",
  },
];

type TestimonialsProps = {
  setIsChatOpen?: (open: boolean) => void;
};

const Testimonials = ({ setIsChatOpen }: TestimonialsProps) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const isMobile = useIsMobile();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    } else if (distance < -minSwipeDistance) {
      setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleChatbotClick = () => {
    if (setIsChatOpen) {
      setIsChatOpen(true);
    } else {
      const chatbotToggle = document.querySelector('[data-chatbot-toggle]');
      if (chatbotToggle) (chatbotToggle as HTMLElement).click();
    }
  };

  return (
    <section id="testimonials" className="bg-white py-20 w-full">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            Real Clients. Real Results.
          </div>
          <h2 className="text-3xl font-bold mb-3">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Honest feedback from busy professionals, overwhelmed expats, and families we’ve helped in Munich.
          </p>
        </div>

        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="min-w-full px-6">
                <Card className="max-w-3xl mx-auto p-6 shadow-md">
                  <CardContent>
                    <p className="text-lg italic text-gray-800">“{item.text}”</p>
                    <p className="mt-4 text-sm text-gray-500">— {item.author}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial ? "bg-gray-800" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="https://tally.so/r/3l2qb5"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              📋 Book Your First Task
            </a>
            <button
              onClick={handleChatbotClick}
              className="px-5 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              🤖 Open Chatbot
            </button>
            <a
              href="https://wa.me/4916091441828"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              💬 WhatsApp
            </a>
            <a
              href="https://t.me/Concierge_Service_Munich"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              💬 Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
