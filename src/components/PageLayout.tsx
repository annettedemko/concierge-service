import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ContactInfo from '@/components/ContactInfo';
import FloatingContactButton from '@/components/FloatingContactButton';
import Chatbot from '@/components/ui/Chatbot';

const PageLayout = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const toggleHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-chatbot-toggle]')) {
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('click', toggleHandler);
    return () => document.removeEventListener('click', toggleHandler);
  }, []);

  return (
    <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <ContactInfo />
      <FloatingContactButton />
      <Chatbot isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default PageLayout;
