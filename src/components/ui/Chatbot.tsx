import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface Message {
  from: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesTopRef = useRef<HTMLDivElement | null>(null);
  const initialScrollDone = useRef(false);
  const [shortLang, setShortLang] = useState('en');

  useEffect(() => {
    const lang = navigator.language || navigator.languages[0] || 'en';
    const short = lang.split('-')[0];
    setShortLang(short);

    const greetings: Record<string, string> = {
      uk: 'Привіт! Чим можу допомогти?',
      ru: 'Привет! Чем могу помочь?',
      de: 'Hallo! Wie kann ich helfen?',
      en: 'Hi! How can I help you?',
    };

    const initialGreeting = greetings[short] || greetings['en'];
    setMessages([{ from: 'bot', text: initialGreeting }]);
  }, []);

  useEffect(() => {
    if (!initialScrollDone.current && messagesTopRef.current) {
      messagesTopRef.current.scrollIntoView({ behavior: 'smooth' });
      initialScrollDone.current = true;
    } else {
      const last = messages[messages.length - 1];
      if (last?.from === 'user' && messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    setMessages((prev) => [...prev, { from: 'bot', text: '...' }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text, lang: shortLang }),
      });

      const data = await res.json();

      setTimeout(() => {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { from: 'bot', text: data.reply },
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { from: 'bot', text: 'Sorry, something went wrong.' },
      ]);
      setLoading(false);
    }
  };

  const placeholders: Record<string, string> = {
    uk: 'Напишіть повідомлення...',
    ru: 'Напишите сообщение...',
    de: 'Nachricht schreiben...',
    en: 'Type your message...'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-24 right-6 z-50 w-[95vw] max-w-md h-[550px] bg-white shadow-xl rounded-lg overflow-hidden border border-gray-300 flex flex-col"
        >
          <div className="bg-black text-white px-4 py-3 font-semibold flex items-center justify-between">
            🤖 Concierge Assistant
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            <div ref={messagesTopRef} />
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] px-4 py-2 text-sm leading-snug whitespace-pre-wrap break-words shadow-sm rounded-xl ${
                  msg.from === 'user'
                    ? 'bg-gray-200 text-gray-900 self-end ml-auto rounded-br-2xl'
                    : 'bg-white text-gray-900 border border-gray-300 self-start mr-auto rounded-bl-2xl'
                }`}
              >
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    a: ({ href }) => {
                      const labelByLang: Record<string, string> = {
                        uk: 'Онлайн-заявка ⇒',
                        ru: 'Онлайн заявка ⇒',
                        de: 'Online-Anfrage ⇒',
                        en: 'Online Request ⇒',
                      };
                      const label = labelByLang[shortLang] || labelByLang['en'];

                      return (
                        <div className="my-3">
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block border border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition font-medium"
                          >
                            {label}
                          </a>
                        </div>
                      );
                    }
                  }}
                >
                  {msg.text}
                </Markdown>
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-sm italic">Assistant is typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center border-t border-gray-300 p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={placeholders[shortLang] || 'Type your message...'}
              className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md mr-2"
            />
            <button
              onClick={handleSend}
              className="bg-black p-2 rounded-md hover:bg-gray-800 transition"
            >
              <Send size={20} color="white" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;