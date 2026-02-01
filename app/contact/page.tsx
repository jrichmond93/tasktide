import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Task Breezer Support',
  description: 'Get in touch with Task Breezer. Contact us for questions, feedback, suggestions, or support. We\'re here to help with your task management needs.',
  openGraph: {
    title: 'Contact Task Breezer',
    description: 'Get in touch with our team for support and feedback',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-16rem)] bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Have questions, feedback, or suggestions? We&apos;d love to hear from you!
          </p>

          <div className="space-y-6">
            {/* Email Contact */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  For general inquiries, support, or feedback
                </p>
                <a
                  href="mailto:info@aisuretech.com"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  info@aisuretech.com
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Website
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Visit our main website for more information
                </p>
                <a
                  href="https://taskbreezer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  TaskBreezer.com
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Response Time
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We typically respond to emails within 1-2 business days. For urgent issues, please include &quot;URGENT&quot; in your subject line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
