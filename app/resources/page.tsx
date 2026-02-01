import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productivity Resources - Tools, Guides & Best Practices',
  description: 'Discover productivity tools, methods, and resources. Learn about GTD, Pomodoro Technique, Kanban methodology, and explore task management tools to boost your efficiency.',
  keywords: 'productivity resources, task management tools, Kanban methodology, GTD, Pomodoro Technique, productivity tips',
  openGraph: {
    title: 'Productivity Resources - Task Breezer',
    description: 'Boost your productivity with curated tools, methods, and learning resources',
    type: 'website',
  },
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Productivity Resources
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Helpful tools, guides, and communities to boost your productivity and task management skills.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Productivity Methods & Frameworks */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span>📚</span>
              Productivity Methods & Frameworks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://gettingthingsdone.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Getting Things Done (GTD)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  David Allen&apos;s renowned productivity methodology for stress-free productivity
                </p>
              </a>
              <a
                href="https://www.pomodorotechnique.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Pomodoro Technique</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Time management method using timed intervals for focused work sessions
                </p>
              </a>
              <a
                href="https://www.atlassian.com/agile/kanban"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Kanban Guide by Atlassian</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Comprehensive guide to Kanban methodology and best practices
                </p>
              </a>
              <a
                href="https://www.eisenhower.me/eisenhower-matrix/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Eisenhower Matrix</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Priority management framework for urgent vs. important tasks
                </p>
              </a>
            </div>
          </section>

          {/* Productivity Tools */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span>🛠️</span>
              Complementary Productivity Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://toggl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Toggl Track</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Time tracking tool to measure how long tasks actually take
                </p>
              </a>
              <a
                href="https://www.notion.so/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Notion</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All-in-one workspace for notes, docs, and databases
                </p>
              </a>
              <a
                href="https://www.rescuetime.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">RescueTime</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Automatic time tracking and productivity analytics
                </p>
              </a>
              <a
                href="https://obsidian.md/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Obsidian</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Knowledge base and note-taking app with powerful linking features
                </p>
              </a>
            </div>
          </section>

          {/* Learning Resources */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span>🎓</span>
              Learning & Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.coursera.org/learn/work-smarter-not-harder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Work Smarter, Not Harder - Coursera</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Time management and productivity course from University of California
                </p>
              </a>
              <a
                href="https://www.udemy.com/topic/productivity/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Udemy Productivity Courses</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Wide selection of productivity and time management courses
                </p>
              </a>
              <a
                href="https://www.skillshare.com/browse/productivity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Skillshare Productivity Classes</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Creative classes on productivity, organization, and workflow
                </p>
              </a>
              <a
                href="https://www.linkedin.com/learning/topics/time-management"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">LinkedIn Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Professional courses on time management and productivity
                </p>
              </a>
            </div>
          </section>

          {/* Blogs & Communities */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span>💬</span>
              Blogs & Communities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.reddit.com/r/productivity/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">r/productivity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Active Reddit community for productivity tips and discussions
                </p>
              </a>
              <a
                href="https://lifehacker.com/tag/productivity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lifehacker</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Popular blog with productivity tips, tools, and life hacks
                </p>
              </a>
              <a
                href="https://zenhabits.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Zen Habits</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Minimalist approach to productivity and mindfulness
                </p>
              </a>
              <a
                href="https://www.asianefficiency.com/blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Asian Efficiency</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Blog focused on productivity systems and workflows
                </p>
              </a>
            </div>
          </section>

          {/* Books */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span>📖</span>
              Recommended Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  &quot;Deep Work&quot; by Cal Newport
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Rules for focused success in a distracted world
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  &quot;Atomic Habits&quot; by James Clear
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Building better habits and breaking bad ones
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  &quot;The 4-Hour Workweek&quot; by Tim Ferriss
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Escape the 9-5 and live anywhere through automation
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  &quot;Essentialism&quot; by Greg McKeown
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The disciplined pursuit of less but better
                </p>
              </div>
            </div>
          </section>

          {/* Project Management Tools */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span>📊</span>
              Project Management Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://trello.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Trello</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Visual collaboration tool for team project management
                </p>
              </a>
              <a
                href="https://asana.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Asana</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Work management platform for teams to stay organized
                </p>
              </a>
              <a
                href="https://monday.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Monday.com</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Customizable work operating system for teams
                </p>
              </a>
              <a
                href="https://www.atlassian.com/software/jira"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Jira</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Project tracking tool for agile teams and software development
                </p>
              </a>
            </div>
          </section>

          {/* AI Sure Tech Websites */}
          <section className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg p-6 border-2 border-indigo-200 dark:border-indigo-900">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                AI Sure Tech Websites
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Explore our network of AI-powered tools and resources
              </p>
            </div>

            {/* Overarching Hub */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4">
                Overarching Hub
              </h3>
              <a
                href="https://aisuretech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 bg-white dark:bg-gray-800 border-2 border-indigo-300 dark:border-indigo-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors shadow-md"
              >
                <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  AI Sure Tech
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  AI-Powered Website Network. Discover AI-driven tools, education, and insights for your growth.
                </p>
              </a>
            </div>

            {/* Finance & Investing */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center gap-2">
                <span>💰</span>
                Finance & Investing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://aistocktickers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Stock Tickers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your go-to platform for stock analysis, trading, and AI-powered insights. Discover top-performing stocks with daily AI-driven insights.
                  </p>
                </a>
                <a
                  href="https://learn.aistocktickers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Learn AI Stock Tickers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Master Stock Market Investing with AI. Transform your investment journey with comprehensive educational resources.
                  </p>
                </a>
                <a
                  href="https://www.finsterchat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Finster Chat</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transform Your Future with Finster Chat. Expert guidance on wealth management, investment strategies, and retirement planning 24/7.
                  </p>
                </a>
                <a
                  href="https://cryptiment.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cryptiment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Advanced cryptocurrency sentiment analysis powered by real-time data. Track crypto market sentiment and discover trending cryptocurrencies.
                  </p>
                </a>
                <a
                  href="https://blog.aistocktickers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Stock Tickers Blog</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    AI-Powered Market Intelligence & Insights. Cutting-edge analysis on AI-driven stock trading and algorithmic strategies.
                  </p>
                </a>
                <a
                  href="https://aimortgagecalc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Mortgage Calc</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Calculate mortgage payments with precision. Get detailed amortization schedules and AI-powered explanations.
                  </p>
                </a>
              </div>
            </div>

            {/* Critical Thinking & Debate */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center gap-2">
                <span>🧠</span>
                Critical Thinking & Debate
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://www.balanceddebate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Balanced Debate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Explore diverse perspectives through structured debate. Our platform leverages AI to present balanced arguments on complex issues.
                  </p>
                </a>
                <a
                  href="https://opposingpoint.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Opposing Point</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Escape the Echo Chamber with AI Precision. Challenge your thinking, expose logical fallacies, and prepare for real-world opposition.
                  </p>
                </a>
                <a
                  href="https://ideobridge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ideo Bridge</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Bridge ideological divides through respectful dialogue. Daily opinions from diverse perspectives with thoughtful counter-responses.
                  </p>
                </a>
                <a
                  href="https://astoicsays.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">A Stoic Says</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Today&apos;s headlines paired with timeless Stoic wisdom. Daily opinion pieces with reflections inspired by Marcus Aurelius and Epictetus.
                  </p>
                </a>
              </div>
            </div>

            {/* History & Exploration */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center gap-2">
                <span>🌍</span>
                History & Exploration
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://althistai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Alternate History AI</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Explore the paths not taken through artificial intelligence.
                  </p>
                </a>
                <a
                  href="https://althistai.aisuretech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AltHistAI Explore</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Discover how history could have unfolded differently with AI-powered interactive simulations from ancient civilizations to modern innovations.
                  </p>
                </a>
                <a
                  href="https://www.aievolutionexplorer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Evolution Explorer</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Discover the evolutionary history of animals, explore fascinating facts, and learn about the diversity of life on Earth.
                  </p>
                </a>
              </div>
            </div>

            {/* Fun, Lifestyle & Miscellaneous */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center gap-2">
                <span>🎮</span>
                Fun, Lifestyle & Miscellaneous
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://featherguess.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Feather Guess</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Test your bird knowledge. Guess the feather!
                  </p>
                </a>
                <a
                  href="https://www.createadish.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Create A Dish</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your ultimate culinary companion for discovering and creating delicious recipes tailored to your preferences.
                  </p>
                </a>
                <a
                  href="https://www.kitty-vids.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Kitty Vids</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your ultimate destination for adorable cat videos and comprehensive cat care guides.
                  </p>
                </a>
                <a
                  href="https://www.puppy-vids.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Puppy Vids</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your ultimate destination for adorable dog videos and comprehensive dog care guides.
                  </p>
                </a>
                <a
                  href="https://www.aitrendified.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Trendified</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Today&apos;s Trending Digest. Explore the most talked-about topics with matching TED talks and AI insights.
                  </p>
                </a>
                <a
                  href="https://www.aiwisdomcouncil.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Wisdom Council</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Choose an advisor and begin asking your questions — each member of the Wisdom Council offers a unique perspective.
                  </p>
                </a>
                <a
                  href="https://www.ideatomarketai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Idea To Market AI</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Professional-grade market research for your great business ideas. Validate ideas and make informed business decisions.
                  </p>
                </a>
                <a
                  href="https://www.policyclown.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Policy Clown</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Daily satirical political predictions powered by AI. Absurd, exaggerated policy forecasts for entertainment.
                  </p>
                </a>
                <a
                  href="https://headlinelingo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Headline Lingo</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Master Spanish, French, German, and more by reading today&apos;s top news stories with AI-powered translations.
                  </p>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-8 bg-blue-50 dark:bg-gray-800 rounded-lg p-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            <strong>Note:</strong> These resources are provided for informational purposes. Task Breezer is not affiliated with any of these tools or services. We recommend exploring different options to find what works best for your productivity style.
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Return to Task Breezer Board
          </Link>
        </div>
      </div>
    </div>
  );
}
