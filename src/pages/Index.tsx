import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyUs from '@/components/WhyUs';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Concierge Service Munich — Personal Assistant at Your Service"
        description="Smart, fast and human-centered concierge service in Munich. We help with Jobcenter, doctors, documents, returns and bureaucracy. German paperwork made painless."
        imageUrl="/seo.jpg"
        keywords={[
          'concierge service Munich',
          'Munich personal assistant',
          'expat help Munich',
          'German paperwork help',
          'Jobcenter support Munich',
          'AOK documents assistance',
          'medical appointment help Munich',
          'WhatsApp concierge',
          'relocation help Germany',
          'return service Munich'
        ]}
      />
      <Hero />
      <Features />
      <WhyUs />
      <Projects />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;
