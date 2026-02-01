import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - How Task Breezer Protects Your Data',
  description: 'Task Breezer\'s Privacy Policy explains how we collect, use, and protect your data. Learn about local storage, cloud sync, data security, and your privacy rights.',
  keywords: 'privacy policy, data protection, data security, privacy rights, GDPR compliance, data storage',
  openGraph: {
    title: 'Task Breezer Privacy Policy',
    description: 'Learn how we protect your data and respect your privacy',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-[calc(100vh-16rem)] bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            Last updated: February 1, 2026
          </p>

          <div className="prose dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Task Breezer (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Kanban board application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Data Storage
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Task Breezer stores your task data locally in your browser using localStorage or cloud storage via Supabase (when authenticated):
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Local Storage:</strong> Task data is stored in your browser and never sent to our servers when using the app without authentication</li>
                <li><strong>Cloud Storage:</strong> When logged in, your data is securely stored in Supabase with end-to-end encryption</li>
                <li><strong>Control:</strong> You can export or delete your data at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                We collect minimal information necessary to provide our service:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Task Data:</strong> Titles, descriptions, due dates, and priorities you create</li>
                <li><strong>Account Information:</strong> Email address (when you create an account)</li>
                <li><strong>Usage Data:</strong> Anonymous analytics to improve the app</li>
                <li><strong>Theme Preference:</strong> Dark/light mode settings stored locally</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To sync your tasks across devices (when authenticated)</li>
                <li>To send important service updates and notifications</li>
                <li>To improve and optimize the application</li>
                <li>To respond to your inquiries and support requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Data Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-3">
                <li>Secure HTTPS connections for all data transmission</li>
                <li>Encrypted storage in Supabase with row-level security</li>
                <li>Regular security audits and updates</li>
                <li>No sharing of personal data with third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Third-Party Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Supabase:</strong> For authentication and cloud data storage</li>
                <li><strong>Vercel:</strong> For hosting and deployment</li>
                <li><strong>Quotable API:</strong> For motivational quotes (no personal data shared)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Your Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Access your personal data</li>
                <li>Export your task data in JSON format</li>
                <li>Delete your account and all associated data</li>
                <li>Opt-out of analytics (via browser settings)</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Cookies and Tracking
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Task Breezer uses minimal cookies and localStorage for:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mt-3">
                <li>Maintaining your login session</li>
                <li>Storing theme preferences</li>
                <li>Caching task data for offline access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Task Breezer is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have questions about this Privacy Policy, please contact us at:{' '}
                <a
                  href="mailto:info@aisuretech.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  info@aisuretech.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
