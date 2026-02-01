import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kanban Best Practices - Complete Methodology Guide 2026',
  description: 'Master Kanban with our comprehensive guide. Learn the 4 core principles, 6 essential practices, and best practices to optimize your workflow and boost team productivity.',
  keywords: 'kanban best practices, kanban methodology, agile workflow, kanban principles, WIP limits, workflow visualization, lean management',
  openGraph: {
    title: 'Kanban Best Practices Guide - Task Breezer',
    description: 'Complete guide to Kanban methodology - principles, practices, and optimization tips',
    type: 'article',
  },
};

export default function KanbanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Board
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kanban Best Practices: Optimize Your Workflow
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Whether you&apos;re new to this agile methodology or refining your processes with Task Breezer, 
            this guide covers the essentials to help you boost efficiency. Kanban, originating from Toyota&apos;s 
            lean manufacturing, visualizes work to improve flow and reduce waste.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Core Principles */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400">🎯</span>
              The 4 Core Kanban Principles
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              These foundational rules guide how to adopt Kanban without disrupting your current setup.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  1. Start with What You Do Now
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Map your existing workflow onto a Kanban board—no need for radical changes upfront. 
                  This respects your team&apos;s current methods and eases adoption.
                </p>
              </div>

              <div className="border-l-4 border-indigo-500 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  2. Agree to Pursue Incremental, Evolutionary Change
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Make small, continuous improvements rather than big overhauls to avoid resistance and build momentum.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  3. Respect Current Processes, Roles, and Responsibilities
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Honor existing structures; Kanban enhances, not replaces, them.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-6 py-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  4. Encourage Acts of Leadership at All Levels
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Empower everyone to suggest and implement improvements, fostering a collaborative culture.
                </p>
              </div>
            </div>
          </section>

          {/* Essential Practices */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-green-600 dark:text-green-400">⚡</span>
              The 6 Essential Kanban Practices
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Turn principles into action with these practices, as outlined by Kanban experts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">👀</span>
                  Visualize the Workflow
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Use a board with columns (e.g., To Do, In Progress, Done) and cards for tasks. 
                  This transparency helps spot bottlenecks instantly.
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🚦</span>
                  Limit Work in Progress (WIP)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Set caps on items per column to prevent overload and multitasking, improving focus and throughput.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌊</span>
                  Manage Flow
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Monitor how work moves through stages; analyze metrics like cycle time to eliminate delays 
                  and ensure smooth progression.
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">📋</span>
                  Make Process Policies Explicit
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Clearly define rules (e.g., definition of &quot;Done&quot;) so everyone understands expectations, 
                  reducing confusion.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  Implement Feedback Loops
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Hold regular reviews (e.g., daily stand-ups or retrospectives) to gather insights and adapt quickly.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🧪</span>
                  Improve Collaboratively, Evolve Experimentally
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Use data and team input to test changes, evolving your system scientifically.
                </p>
              </div>
            </div>
          </section>

          {/* Additional Best Practices */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-orange-600 dark:text-orange-400">💡</span>
              Additional Best Practices for Effective Kanban
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Beyond the basics, these tips from experienced teams can elevate your implementation.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">
                      Best Practice
                    </th>
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">
                      Description
                    </th>
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">
                      Why It Matters
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium">Keep Your Board Clean and Updated</td>
                    <td className="p-4">Log tasks instantly, add due dates, and assign owners. Remove completed items promptly.</td>
                    <td className="p-4">Prevents clutter and ensures real-time accuracy for better decision-making.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium">Use Swimlanes and Classes of Service</td>
                    <td className="p-4">Divide rows by work type (e.g., Urgent, Normal) or teams.</td>
                    <td className="p-4">Handles diverse tasks efficiently, prioritizing high-impact items.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium">Visualize Blocked Items</td>
                    <td className="p-4">Add a &quot;Blocked&quot; column or flags for stalled tasks.</td>
                    <td className="p-4">Highlights issues early, speeding up resolutions.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium">Apply Activity-Based WIP Limits</td>
                    <td className="p-4">Set limits per stage or person, not just globally.</td>
                    <td className="p-4">Balances workload and identifies process weak spots.</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium">Monitor Metrics Regularly</td>
                    <td className="p-4">Track throughput, lead time, and flow efficiency using tools.</td>
                    <td className="p-4">Drives data-backed improvements for sustained performance.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Foster Collaboration</td>
                    <td className="p-4">Encourage cross-team input and experiment with board tweaks.</td>
                    <td className="p-4">Builds ownership and adaptability.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Getting Started */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <span>🚀</span>
              Getting Started with Kanban
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                To implement these best practices in Task Breezer: Start simple with your digital board, 
                apply WIP limits early, and review weekly. Remember, Kanban thrives on iteration—start small and evolve!
              </p>
              <p>
                Task Breezer&apos;s drag-and-drop features align perfectly with these Kanban practices, making it easy 
                to visualize your workflow, manage work in progress, and collaborate effectively.
              </p>
              <div className="mt-6 flex gap-4 flex-wrap">
                <Link
                  href="/"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Try Task Breezer Now
                </Link>
                <Link
                  href="/faq"
                  className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-8 border-2 border-indigo-200 dark:border-indigo-800">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              📚 Want to Learn More?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Master productivity beyond Kanban with our comprehensive guide covering daily habits, time management techniques, and focus strategies.
            </p>
            <Link
              href="/productivity-tips"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Explore Productivity Tips
            </Link>
          </section>

          {/* Quick Tips */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Quick Tips for Task Breezer Users
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Use Priority Levels</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Leverage high/medium/low priorities to implement classes of service
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Set Due Dates</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Track cycle time by setting due dates and reviewing completion patterns
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🗂️</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Use the Archive</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Keep your board clean by archiving completed tasks regularly
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Review Weekly</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Export your board data to analyze throughput and identify bottlenecks
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/about"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              About Task Breezer
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              href="/faq"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              FAQ
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              href="/resources"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Resources
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact
            </Link>
          </div>
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
