import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productivity Tips - Boost Your Efficiency in 2026',
  description: 'Comprehensive guide to productivity tips and techniques. Learn daily habits, time management methods, focus techniques, and automation tools to boost your efficiency.',
  keywords: 'productivity tips, time management, daily habits, focus techniques, work efficiency, productivity hacks, task management tips',
  openGraph: {
    title: 'Productivity Tips - Task Breezer',
    description: 'Master productivity with proven techniques, habits, and tools',
    type: 'article',
  },
};

export default function ProductivityTipsPage() {
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
            Productivity Tips: Boost Your Efficiency in 2026
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Whether you&apos;re a professional juggling deadlines or an individual seeking better work-life balance, 
            this guide compiles the latest insights to help you achieve more with less effort. Productivity isn&apos;t 
            about working harder—it&apos;s about smarter habits, tools, and mindsets that reduce burnout and amplify results.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Core Principles */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400">🎯</span>
              Core Productivity Principles
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              These foundational ideas set the stage for sustainable success.
            </p>
            
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  1. Do Fewer Things
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Prioritize radically—focus on three high-impact tasks over ten average ones. This combats 
                  decision fatigue and ensures world-class quality.
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  2. Work at a Natural Pace
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Embrace &quot;slow productivity&quot; by avoiding rush; build in buffers for creativity and recovery.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  3. Obsess Over Quality
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Invest in mastery—use tools and habits that elevate output, not just quantity.
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  4. Automate the Mundane
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Leverage AI and apps to handle repetitive tasks, freeing mental energy for strategic work.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  5. Balance Focus and Rest
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Structure days around deep work blocks, interspersed with intentional breaks to prevent burnout.
                </p>
              </div>
            </div>
          </section>

          {/* Daily Habits */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-green-600 dark:text-green-400">✨</span>
              Essential Daily Habits for Peak Productivity
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Building habits is key to long-term gains. Start small—these habits can become automatic with consistency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Morning Routine', desc: 'Begin with a consistent ritual like journaling, exercise, or a quick walk' },
                { title: 'Highest Impact Task First', desc: 'Tackle your "money task" early when energy is high' },
                { title: '2-Minute Rule', desc: 'If a task takes under two minutes, do it immediately' },
                { title: 'Theme Days', desc: 'Assign themes (e.g., "Admin Monday") to batch similar tasks' },
                { title: 'Dopamine Detox', desc: 'Limit high-stimulation inputs like social media to rebuild focus' },
                { title: 'Habit Stacking', desc: 'Link new habits to existing ones' },
                { title: 'Evening Review', desc: 'End the day by noting wins and planning tomorrow' },
                { title: 'Healthy Fuel', desc: 'Eat nutrient-rich meals and stay hydrated' },
                { title: 'Movement Breaks', desc: 'Incorporate short walks or stretches every 90 minutes' },
                { title: 'Gratitude Practice', desc: 'Note three positives daily to maintain motivation' },
                { title: 'Single-Tasking', desc: 'Focus on one thing at a time—multitasking reduces efficiency by 40%' },
                { title: 'No Early', desc: 'Politely decline non-essential requests to protect your time' },
                { title: 'Digital Declutter', desc: 'Organize apps and notifications weekly' },
                { title: 'Learning Slot', desc: 'Dedicate 15-30 minutes daily to skill-building' },
                { title: 'Sleep Optimization', desc: 'Aim for 7-9 hours with proper routines' },
                { title: 'Accountability Partner', desc: 'Share goals with someone for mutual encouragement' },
                { title: 'Weekly Reset', desc: 'Clear inboxes and prep for the week' },
                { title: 'Mindful Breathing', desc: 'Use 1-minute sessions to reset during high-stress moments' },
                { title: 'Reward System', desc: 'Celebrate small wins to reinforce positive behaviors' },
                { title: 'Boundary Setting', desc: 'Define work hours to maintain work-life balance' },
                { title: 'Reflection Journal', desc: 'Track what works and adjust' },
              ].map((habit, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-blue-600 dark:text-blue-400">•</span>
                    {habit.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{habit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Time Management */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-purple-600 dark:text-purple-400">⏰</span>
              Time Management Techniques
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Master your schedule with these proven methods to reclaim hours.
            </p>

            <div className="space-y-3">
              {[
                { name: 'Time Blocking', desc: 'Schedule fixed blocks for tasks, including deep work and breaks' },
                { name: 'Eisenhower Matrix', desc: 'Categorize tasks by urgency/importance to prioritize effectively' },
                { name: 'Pomodoro', desc: 'Work 25 minutes, break 5—ideal for sustained focus' },
                { name: 'OKR Framework', desc: 'Set Objectives and Key Results for aligned goals' },
                { name: 'Batch Processing', desc: 'Group similar tasks (e.g., emails) to minimize switches' },
                { name: 'Do, Delegate, Delete', desc: 'Quickly triage tasks to streamline your list' },
                { name: '90-Minute Sprints', desc: 'Align with natural ultradian rhythms for peak concentration' },
              ].map((technique, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">→</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{technique.name}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{technique.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Focus Hacks */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-orange-600 dark:text-orange-400">🎯</span>
              Focus and Distraction Hacks
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              In a notification-heavy world, these tactics safeguard your attention.
            </p>

            <ul className="space-y-3">
              {[
                'Airplane Mode Blocks: Use during deep work to eliminate pings',
                'Environment Design: Create a distraction-free zone with proper lighting and minimal clutter',
                'Notification Filters: Customize alerts to only essentials',
                'Mindful Transitions: Use rituals (e.g., tea-making) to shift into focus mode',
                'Kill Unnecessary Meetings: Only attend if decisions are needed',
              ].map((hack, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">✓</span>
                  <span>{hack}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tools & Automation */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-indigo-600 dark:text-indigo-400">🛠️</span>
              Tools and Automation for 2026
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Harness technology to amplify your efforts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">IFTTT or Zapier</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Automate routines like task syncing or habit tracking
                </p>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Assistants</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use for summarizing emails or generating ideas
                </p>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Task Breezer</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Visualize workflows with Kanban boards
                </p>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Focus Apps</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Block distractions with tools like Freedom
                </p>
              </div>
              <div className="bg-indigo-50 dark:bg-gray-700 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics Tools</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Track time with RescueTime for insights
                </p>
              </div>
            </div>
          </section>

          {/* Additional Tips Table */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="text-pink-600 dark:text-pink-400">💡</span>
              Additional Productivity Tips
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">
                      Tip
                    </th>
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">
                      Description
                    </th>
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">
                      Why It Works
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  {[
                    { tip: 'Set Single Daily Goals', desc: 'Break big objectives into one key focus per day', why: 'Reduces overwhelm and builds momentum' },
                    { tip: 'Provide Development Opportunities', desc: 'Invest in training for skill growth', why: 'Boosts morale and long-term output' },
                    { tip: 'Listen to Feedback', desc: 'Regularly solicit and act on input', why: 'Fosters improvement and engagement' },
                    { tip: 'Allow Flexibility', desc: 'Offer hybrid options or adjustable hours', why: 'Enhances work-life balance' },
                    { tip: 'Respond to Poor Performance', desc: 'Address issues early with support', why: 'Prevents drag on team productivity' },
                    { tip: 'Limit Unproductive Meetings', desc: 'Use agendas and time caps', why: 'Saves hours weekly' },
                    { tip: 'Appreciate Efforts', desc: 'Recognize wins publicly', why: 'Increases motivation and retention' },
                    { tip: 'Communicate Effectively', desc: 'Be transparent about expectations', why: 'Aligns everyone toward goals' },
                    { tip: 'Delegate Wisely', desc: 'Assign tasks to strengths', why: 'Frees you for high-value work' },
                    { tip: 'Take Mindful Breaks', desc: 'Short pauses for recharge', why: 'Maintains creativity and energy' },
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4 font-medium">{item.tip}</td>
                      <td className="p-4">{item.desc}</td>
                      <td className="p-4">{item.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Getting Started */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <span>🚀</span>
              Getting Started with Productivity
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                Pick 2-3 habits or techniques to implement this week—track progress in Task Breezer&apos;s 
                Kanban board. Remember, consistency trumps perfection; evolve based on what fits your life.
              </p>
              <p>
                Integrate these tips with Task Breezer&apos;s features: use priority levels for your highest-impact 
                tasks, set due dates for time-sensitive goals, and move tasks through columns as you progress.
              </p>
              <div className="mt-6 flex gap-4 flex-wrap">
                <Link
                  href="/"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Start Using Task Breezer
                </Link>
                <Link
                  href="/kanban"
                  className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
                >
                  Learn Kanban Best Practices
                </Link>
                <Link
                  href="/systems-over-goals"
                  className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
                >
                  Discover Systems Over Goals
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/kanban"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Kanban Guide
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
              href="/faq"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              FAQ
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
