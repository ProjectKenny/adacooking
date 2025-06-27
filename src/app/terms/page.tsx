export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight mb-6">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 15, 2024
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Ada.cooking, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of the materials on Ada.cooking 
              for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">User Accounts</h2>
            <p className="text-gray-600 mb-4">
              When you create an account with us, you must provide information that is accurate, 
              complete, and current at all times. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Safeguarding your password and account information</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring your account information remains current</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Content Guidelines</h2>
            <p className="text-gray-600 mb-4">
              When submitting recipes, comments, or other content, you agree that your content:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Is original or you have permission to share it</li>
              <li>Does not infringe on any third-party rights</li>
              <li>Is not offensive, harmful, or inappropriate</li>
              <li>Does not contain spam or promotional material</li>
              <li>Complies with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              The service and its original content, features, and functionality are and will remain 
              the exclusive property of Ada.cooking and its licensors. The service is protected by 
              copyright, trademark, and other laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Recipe Attribution</h2>
            <p className="text-gray-600 mb-6">
              When you submit a recipe, you grant Ada.cooking a non-exclusive, worldwide, royalty-free 
              license to use, display, and distribute your recipe. You will be credited as the recipe 
              author unless you request otherwise.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Prohibited Uses</h2>
            <p className="text-gray-600 mb-4">You may not use our service:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>For any unlawful purpose or to solicit others to unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations or laws</li>
              <li>To infringe upon or violate our intellectual property rights or the rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The information on this website is provided on an "as is" basis. To the fullest extent 
              permitted by law, Ada.cooking excludes all representations, warranties, conditions, and 
              terms whether express or implied.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Ada.cooking or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on Ada.cooking's website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Accuracy of Materials</h2>
            <p className="text-gray-600 mb-6">
              The materials appearing on Ada.cooking could include technical, typographical, or 
              photographic errors. Ada.cooking does not warrant that any of the materials on its 
              website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Modifications</h2>
            <p className="text-gray-600 mb-6">
              Ada.cooking may revise these terms of service at any time without notice. By using this 
              website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of 
              California and you irrevocably submit to the exclusive jurisdiction of the courts in that 
              state or location.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-none text-gray-600 space-y-2">
              <li>Email: legal@ada.cooking</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Culinary Street, San Francisco, CA 94102</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
