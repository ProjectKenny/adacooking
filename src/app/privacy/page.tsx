export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 15, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-6">
              At Ada.cooking, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Name and email address when you create an account</li>
              <li>Profile information you choose to provide</li>
              <li>Recipe submissions and comments</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Pages visited and time spent on our site</li>
              <li>Search queries and recipe interactions</li>
              <li>Device information and IP address</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Personalize your experience and recommendations</li>
              <li>Send you updates and newsletters (with your consent)</li>
              <li>Respond to your comments and questions</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist in operating our website</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Object to certain data processing activities</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize 
              content. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not intended for children under 13. We do not knowingly collect 
              personal information from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none text-gray-600 space-y-2">
              <li>Email: privacy@ada.cooking</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Culinary Street, San Francisco, CA 94102</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
