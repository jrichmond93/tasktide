import Link from 'next/link';

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: February 1, 2026
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing and using Task Breezer (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              2. Description of Service
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Task Breezer provides a free Kanban-style task management board that allows users to organize, track, and manage their tasks and projects. The Service is available both as a local-only application (using browser storage) and with optional cloud synchronization via user accounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              3. User Accounts
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Acceptable Use
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>Use the Service in any way that violates any applicable law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use of the Service</li>
              <li>Attempt to interfere with the proper functioning of the Service</li>
              <li>Use any automated system to access the Service in a manner that sends more requests than a human can reasonably produce</li>
              <li>Transmit any harmful code, viruses, or malicious software</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              5. User Content
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              You retain all rights to any content you submit, post, or display on or through the Service (&quot;User Content&quot;). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, store, and display such content solely for the purpose of providing the Service to you.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You are solely responsible for your User Content. We do not endorse and are not responsible for any User Content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Data Storage and Backup
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              While we make reasonable efforts to protect and backup your data, we are not responsible for any loss of User Content. We recommend that you regularly export and backup your data using the Service&apos;s export features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              7. Service Availability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We strive to provide continuous availability of the Service, but we do not guarantee that the Service will be uninterrupted, timely, secure, or error-free. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              8. Intellectual Property
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Service and its original content (excluding User Content), features, and functionality are owned by AI Sure Tech and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              9. Termination
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To the maximum extent permitted by applicable law, AI Sure Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              11. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We make no warranties, expressed or implied, regarding the Service, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              12. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              13. Governing Law
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which AI Sure Tech operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              14. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you have any questions about these Terms, please contact us at{' '}
              <a 
                href="mailto:info@aisuretech.com" 
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                info@aisuretech.com
              </a>
              .
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
            href="/cookies"
            className="text-blue-600 dark:text-blue-400 hover:underline mx-2"
          >
            Cookie Policy
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
