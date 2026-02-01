import Link from 'next/link';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: February 1, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              1. What Are Cookies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              2. How We Use Cookies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Task Breezer uses cookies and similar storage technologies to enhance your experience and provide essential functionality. We use cookies for:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>Maintaining your login session when you&apos;re signed in</li>
              <li>Storing your task data locally when using the Service without an account</li>
              <li>Remembering your preferences (such as theme selection)</li>
              <li>Ensuring the security and integrity of our Service</li>
              <li>Analyzing how you use our Service to improve functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              3. Types of Cookies We Use
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Essential Cookies
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  These cookies are necessary for the Service to function properly. They enable core functionality such as security, authentication, and session management. Without these cookies, the Service cannot function properly.
                </p>
                <div className="mt-2 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Examples:</strong> Authentication tokens, session cookies
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Functional Cookies
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  These cookies allow the Service to remember choices you make (such as your theme preference or language) and provide enhanced, personalized features.
                </p>
                <div className="mt-2 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Examples:</strong> Theme selection, language preference
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Local Storage
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We use browser local storage to save your task data when you use Task Breezer without creating an account. This allows you to use the Service entirely offline and maintain your data between sessions.
                </p>
                <div className="mt-2 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Examples:</strong> Task board data, column configurations, archived tasks
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Performance Cookies
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  These cookies help us understand how visitors interact with our Service by collecting and reporting information anonymously. This helps us improve the Service based on user behavior.
                </p>
                <div className="mt-2 bg-gray-50 dark:bg-gray-700 p-3 rounded">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Examples:</strong> Page views, feature usage statistics
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Third-Party Cookies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              We use third-party services that may set cookies on your device:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li><strong>Supabase:</strong> For authentication and data storage when you create an account</li>
              <li><strong>Analytics Services:</strong> To understand how users interact with our Service (if applicable)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              These third parties have their own privacy policies and cookie policies. We recommend reviewing their policies to understand how they use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              5. Managing Cookies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block all cookies from specific websites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              Please note that if you choose to block or delete essential cookies, some parts of the Service may not function properly, and you may not be able to use certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Browser-Specific Cookie Management
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              Here&apos;s how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              7. Data Protection
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              All data stored in cookies and local storage is kept secure and is only accessible by your browser and our Service. We do not share cookie data with third parties except as necessary to provide the Service (e.g., authentication through Supabase).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              8. Cookie Retention
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Different cookies have different retention periods:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mt-3">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
              <li><strong>Local Storage Data:</strong> Remains until you manually clear it or uninstall the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              9. Updates to This Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by posting the new policy on this page with an updated &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              10. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you have questions about our use of cookies or this Cookie Policy, please contact us at{' '}
              <a 
                href="mailto:info@aisuretech.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                info@aisuretech.com
              </a>
              .
            </p>
          </section>

          <section className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Your Consent
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              By using Task Breezer, you consent to the use of cookies in accordance with this Cookie Policy. If you do not agree with our use of cookies, you should adjust your browser settings accordingly or refrain from using the Service.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 text-center">
          <Link 
            href="/privacy"
            className="text-blue-600 dark:text-blue-400 hover:underline mx-2"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            href="/terms"
            className="text-blue-600 dark:text-blue-400 hover:underline mx-2"
          >
            Terms of Service
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            href="/contact"
            className="text-blue-600 dark:text-blue-400 hover:underline mx-2"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
