import React from "react";

const Privacy = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="mb-3">
              When you use Doctory, we collect information that you provide
              directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Medical history and health information</li>
              <li>Appointment details and preferences</li>
              <li>Communications with healthcare providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Schedule and manage your appointments</li>
              <li>Improve our services and user experience</li>
              <li>Send important notifications about your appointments</li>
              <li>Ensure compliance with healthcare regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. This includes encryption, secure servers,
              and regular security audits. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information Sharing
            </h2>
            <p>
              We do not sell or share your personal information with third
              parties except as necessary to provide our services or as required
              by law. This may include sharing information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Healthcare providers you choose to book appointments with</li>
              <li>Service providers who assist in operating our platform</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              <a
                href="mailto:privacy@doctory.com"
                className="text-blue-600 hover:text-blue-800"
              >
                privacy@doctory.com
              </a>
            </p>
          </section>

          <section className="pt-4">
            <p className="text-sm text-gray-500">
              Last updated: January 1, 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
