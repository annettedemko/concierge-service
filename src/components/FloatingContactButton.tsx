import { MessageSquare } from "lucide-react";

const FloatingContactButton = () => {
  return (
    <button
      data-chatbot-toggle
      className="fixed bottom-6 right-6 z-[9999] bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
      aria-label="Open Assistant Chat"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
};

export default FloatingContactButton;
