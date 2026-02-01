import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Task Breezer - Free Kanban Board Task Management',
  description: 'Learn about Task Breezer, a modern intuitive Kanban board application designed to help you manage tasks with ease. Built with Next.js, TypeScript, and best practices.',
  openGraph: {
    title: 'About Task Breezer',
    description: 'Simple, fast, and accessible task management for everyone',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-16rem)] bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Task Breezer
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Task Breezer is a modern, intuitive Kanban board application designed to help you manage your tasks with ease and efficiency.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We believe task management should be simple, fast, and accessible to everyone. Task Breezer combines powerful features with a clean interface to help you stay organized and productive without overwhelming complexity.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li><strong>Drag & Drop:</strong> Intuitive task movement between columns</li>
              <li><strong>Dark Mode:</strong> Easy on the eyes, day or night</li>
              <li><strong>Persistent Storage:</strong> Your tasks are automatically saved</li>
              <li><strong>Search & Filter:</strong> Quickly find what you need</li>
              <li><strong>Export:</strong> Download your boards for backup</li>
              <li><strong>Responsive Design:</strong> Works perfectly on all devices</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Technology
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Built with modern web technologies including Next.js, TypeScript, Tailwind CSS, and @dnd-kit. Task Breezer is fast, accessible, and designed with best practices in mind.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Open Source
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Task Breezer is open source and available on GitHub. We welcome contributions from the community to help make task management better for everyone.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400">
                Questions or feedback? <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Get in touch</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
