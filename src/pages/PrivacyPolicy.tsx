import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: April 11, 2025</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                At Done. Concierge Service Munich ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website and services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect personal data you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Contact us via website or email</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our services</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-gray-600 mb-4">
                This may include your name, email, phone number, and any other information you choose to share.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>To provide and improve our services</li>
                <li>To communicate with you</li>
                <li>To process inquiries and bookings</li>
                <li>To send updates and offers</li>
                <li>To prevent fraud and misuse</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                Our site may use cookies or similar technologies to improve user experience and analyze website traffic. You can adjust your browser settings to refuse cookies.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                We may use third-party tools (e.g., analytics or email platforms) to support our service. These services may collect limited personal data according to their own policies.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your data only as long as necessary for the purposes described in this policy or as required by law.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We take reasonable steps to secure your personal data, but no system is 100% secure. Use of our services is at your own risk.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have the right to request access to, correction of, or deletion of your personal data. Contact us to exercise your rights.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy at any time. Any changes will be posted here with a revised date.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                For questions or concerns about your data, contact us at:
                <br />
                <strong>Email:</strong> annettedemko@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
