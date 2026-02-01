interface EmptyBoardStateProps {
  onAddTask: () => void;
  isAuthenticated?: boolean;
}

export default function EmptyBoardState({ onAddTask, isAuthenticated = false }: EmptyBoardStateProps) {
  const sampleTasks = [
    {
      title: "Plan project kickoff",
      description: "Schedule meeting and prepare agenda",
      priority: "high" as const,
    },
    {
      title: "Research competitors",
      description: "Analyze market and create comparison report",
      priority: "medium" as const,
    },
    {
      title: "Schedule team meeting",
      description: "Set up weekly sync with team members",
      priority: "low" as const,
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="max-w-2xl w-full">
        {/* Main Welcome Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-blue-100 dark:border-gray-700">
          {/* Welcome Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Welcome to Your Kanban Board! 👋
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your board is empty. Let&apos;s get started by creating your first task.
            </p>
          </div>

          {/* Quick Start Guide */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Start Guide
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Create Tasks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Click the &quot;+ Add Task&quot; button to create your first task with a title, description, and priority
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Drag & Drop</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Move tasks between columns by dragging them to track progress from To Do to Done
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Stay Organized</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Set priorities, due dates, and archive completed tasks to keep your board clean
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="text-center mb-8">
            <button
              onClick={onAddTask}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Your First Task
            </button>
          </div>

          {/* Sample Task Templates */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">
              Or try one of these examples:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {sampleTasks.map((task, index) => (
                <button
                  key={index}
                  onClick={onAddTask}
                  className="text-left p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {task.title}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      task.priority === 'high' 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                        : task.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                        : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {task.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="text-2xl mb-1">🎯</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Priority Levels</p>
            </div>
            <div className="p-3">
              <div className="text-2xl mb-1">📅</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Due Dates</p>
            </div>
            <div className="p-3">
              <div className="text-2xl mb-1">🖱️</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Drag & Drop</p>
            </div>
            <div className="p-3">
              <div className="text-2xl mb-1">☁️</div>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                {isAuthenticated ? 'Cloud Sync' : 'Sign In to Sync'}
              </p>
            </div>
          </div>

          {/* Learning Links */}
          <div className="mt-6 text-center space-y-3">
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/kanban"
                className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Learn Kanban Best Practices
              </a>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              <a
                href="/productivity-tips"
                className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Boost Your Productivity
              </a>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              <a
                href="/systems-over-goals"
                className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Systems Over Goals
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
