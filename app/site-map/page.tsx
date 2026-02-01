import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Map - Task Breezer',
  description: 'Complete site map of Task Breezer - find all pages, features, resources, and legal information in one place.',
  openGraph: {
    title: 'Site Map - Task Breezer',
    description: 'Navigate all Task Breezer pages easily',
    type: 'website',
  },
};

export default function SiteMapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Site Map
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Quick navigation to all Task Breezer pages and resources.
          </p>
        </div>

        <div className="space-y-6">
          {/* Main Pages */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">📋</span>
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">Home / Board</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Your main Kanban board for task management</p>
              </Link>
              <Link href="/boards" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">My Boards</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Manage multiple boards (requires login)</p>
              </Link>
              <Link href="/archive" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">Archive</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">View and restore archived tasks</p>
              </Link>
              <Link href="/about" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">About</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn about Task Breezer and our mission</p>
              </Link>
            </div>
          </section>

          {/* Learning Resources */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">📚</span>
              Learning & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/kanban" className="p-3 rounded-lg border-2 border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  Kanban Best Practices
                  <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">Popular</span>
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Complete guide to Kanban methodology</p>
              </Link>
              <Link href="/productivity-tips" className="p-3 rounded-lg border-2 border-indigo-500 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  Productivity Tips
                  <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full">New</span>
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Boost efficiency with proven techniques</p>
              </Link>
              <Link href="/resources" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">Resources</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Curated productivity tools and guides</p>
              </Link>
              <Link href="/faq" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">FAQ</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Frequently asked questions and answers</p>
              </Link>
            </div>
          </section>

          {/* Account & Authentication */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-purple-600 dark:text-purple-400">👤</span>
              Account & Authentication
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/login" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">Sign In</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Log in to your account</p>
              </Link>
              <Link href="/signup" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">Sign Up</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Create a new account for free</p>
              </Link>
            </div>
          </section>

          {/* Support & Contact */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-orange-600 dark:text-orange-400">💬</span>
              Support & Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/contact" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">Contact Us</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Get in touch with our team</p>
              </Link>
            </div>
          </section>

          {/* Legal Pages */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400">⚖️</span>
              Legal & Policies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <Link href="/privacy" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">Privacy Policy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">How we handle your data</p>
              </Link>
              <Link href="/terms" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">Terms of Service</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Terms and conditions</p>
              </Link>
              <Link href="/cookies" className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-semibold text-gray-900 dark:text-white">Cookie Policy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Information about cookies</p>
              </Link>
            </div>
          </section>

          {/* AI Sure Tech Network */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span>🌐</span>
              Part of AI Sure Tech Network
            </h2>
            <p className="text-blue-100 mb-4">
              Task Breezer is proudly developed by AI Sure Tech. Explore our other projects and resources.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://aisuretech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Visit AI Sure Tech
              </a>
              <Link
                href="/resources"
                className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
              >
                View All Resources
              </Link>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ← Return to Your Board
          </Link>
        </div>
      </div>
    </div>
  );
}
