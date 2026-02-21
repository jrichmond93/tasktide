import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Systems Over Goals - Build Sustainable Success Habits',
  description: 'Learn why systems beat goals for long-term success. Discover Scott Adams\' philosophy of daily habits over distant targets. Build sustainable productivity systems that compound over time.',
  keywords: 'systems over goals, scott adams, habits, productivity systems, sustainable success, goal setting, daily habits, systems thinking, atomic habits',
  openGraph: {
    title: 'Systems Over Goals - Sustainable Success Guide',
    description: 'Why daily systems beat distant goals for lasting achievement',
    type: 'article',
  },
};

export default function SystemsOverGoalsPage() {
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
            Systems Over Goals: A Path to Sustainable Success
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transform your approach to achievement with daily habits that compound into extraordinary results
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Welcome to our guide on &quot;Systems Over Goals,&quot; a transformative approach to achieving long-term success without the constant pressure of rigid targets. This concept, popularized by <strong>Scott Adams</strong>—the creator of the Dilbert comic strip—in his book <em>How to Fail at Almost Everything and Still Win Big</em>, shifts the focus from distant milestones to daily habits and processes.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether you&apos;re managing tasks in a busy professional life or pursuing personal growth, embracing systems can lead to more consistent progress and less frustration. We&apos;ll explore the core ideas, benefits, examples, and practical steps to implement this mindset.
          </p>
        </div>

        {/* What Are Systems vs Goals */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What Are Systems vs. Goals?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            At its heart, the distinction boils down to how you approach improvement. Scott Adams defines it simply: <strong>&quot;If you do something every day, it&apos;s a system. If you&apos;re waiting to achieve it someday in the future, it&apos;s a goal.&quot;</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-2 border-red-200 dark:border-red-800">
              <h3 className="text-xl font-semibold text-red-900 dark:text-red-300 mb-3">
                ❌ Goals
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                These are specific, often time-bound targets, like &quot;Lose 10 pounds by summer&quot; or &quot;Launch a business in six months.&quot; They provide direction but can create a binary mindset: success or failure.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-3">
                ✅ Systems
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                These are repeatable processes or habits, such as &quot;Eat healthier meals daily&quot; or &quot;Network with one new contact weekly.&quot; Systems emphasize ongoing action, adaptability, and enjoyment in the process.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-600">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              As Adams explains, goal-oriented people often live in a state of <strong>&quot;continuous pre-success failure,&quot;</strong> feeling discouraged until (or if) they hit the mark. In contrast, systems people <strong>&quot;succeed every time they apply their systems,&quot;</strong> deriving satisfaction from consistent effort. This mindset, echoed by authors like James Clear, highlights that true long-term thinking is &quot;goal-less,&quot; focusing on playing the game indefinitely rather than just winning once.
            </p>
          </div>
        </section>

        {/* Why Systems Trump Goals */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Systems Trump Goals
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Adams argues that goals can be limiting because they fixate on a single outcome, potentially blinding you to other opportunities. Systems, however, foster flexibility and continuous improvement. For instance, if your goal fails, you might feel like a loser; with a system, every application is a win.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Adaptability
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Systems allow pivots as circumstances change—crucial in unpredictable settings like market shifts or daily challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300 font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Reduced Stress
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Avoid the emotional rollercoaster of unmet goals; feel accomplished daily.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Compound Effects
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Small, consistent actions build momentum over time, leading to outsized results.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-bold mr-4">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Systems integrate into your lifestyle, making success inevitable rather than a one-off event.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6 italic">
            Adams credits his own career—from Dilbert&apos;s success to multiple ventures—to systems like constant skill-building, rather than rigid goals.
          </p>
        </section>

        {/* Benefits Table */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Benefits of Prioritizing Systems
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Adopting this approach yields tangible advantages across personal and professional life.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100 dark:bg-blue-900/30">
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">
                    Benefit
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">
                    Description
                  </th>
                  <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left text-gray-900 dark:text-white font-semibold">
                    Example from Adams&apos; Philosophy
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-900 dark:text-white font-medium">
                    Increased Motivation
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Daily wins keep you engaged, unlike the demotivation from stalled goals.
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Systems people feel good applying their process, even without immediate results.
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700/30">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-900 dark:text-white font-medium">
                    Better Opportunity Spotting
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Less fixation on one path opens eyes to serendipity.
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Adams&apos; system of trying new things led to unexpected successes beyond cartooning.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-900 dark:text-white font-medium">
                    Long-Term Resilience
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Systems endure failures; goals crumble if missed.
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    &quot;Goals are for losers&quot; because they set you up for constant failure feelings.
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700/30">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-900 dark:text-white font-medium">
                    Scalability
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Easily apply to multiple areas (health, career, finances).
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Use systems for continuous learning, not just a single promotion goal.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-900 dark:text-white font-medium">
                    Holistic Growth
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Encourages identity shifts (e.g., &quot;I am a healthy eater&quot;) over temporary fixes.
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
                    Align habits with who you want to become, per Adams&apos; insights.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Real-World Examples
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            To illustrate, consider these scenarios inspired by Adams&apos; teachings.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-6 rounded-lg border border-pink-200 dark:border-pink-800">
              <h3 className="text-xl font-semibold text-pink-900 dark:text-pink-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">💪</span> Fitness
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Goal:</strong> Lose 10 pounds.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>System:</strong> Exercise 30 minutes daily and choose nutritious foods.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Result:</strong> Sustainable health, not yo-yo dieting.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">💼</span> Career
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Goal:</strong> Get promoted in a year.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>System:</strong> Learn one new skill weekly and network regularly.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Result:</strong> Broader opportunities, even if the promotion doesn&apos;t happen.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">📈</span> Business
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Goal:</strong> Hit $100K revenue.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>System:</strong> Create and test one marketing idea per week.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Result:</strong> Adaptive growth amid changing economies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-300 mb-3 flex items-center">
                <span className="text-2xl mr-2">📚</span> Personal Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Goal:</strong> Read 12 books a year.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>System:</strong> Read for 20 minutes every morning.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Result:</strong> Lifelong learning without pressure.
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6 italic">
            Adams himself used systems like persistent experimentation to turn &quot;failures&quot; into Dilbert&apos;s empire.
          </p>
        </section>

        {/* How to Build Systems */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            How to Build and Implement Systems
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Transitioning requires intentionality. Start by auditing your goals and converting them.
          </p>

          <div className="space-y-4">
            <div className="flex items-start bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent p-4 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Identify Areas
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pick one domain (e.g., productivity, health).
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-green-50 to-transparent dark:from-green-900/20 dark:to-transparent p-4 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center text-white font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Rephrase Goals
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Turn &quot;Achieve X&quot; into &quot;Do Y daily/weekly.&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-purple-50 to-transparent dark:from-purple-900/20 dark:to-transparent p-4 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center text-white font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Make It Habitual
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Use cues, trackers, or apps like Task Breezer&apos;s Kanban boards to visualize progress.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-indigo-50 to-transparent dark:from-indigo-900/20 dark:to-transparent p-4 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white font-bold mr-4">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Track Wins
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Celebrate system applications, not just outcomes.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-pink-50 to-transparent dark:from-pink-900/20 dark:to-transparent p-4 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-600 dark:bg-pink-500 flex items-center justify-center text-white font-bold mr-4">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Iterate
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Review monthly—tweak based on what works, staying agile.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-900/20 dark:to-transparent p-4 rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-600 dark:bg-orange-500 flex items-center justify-center text-white font-bold mr-4">
                6
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Combine with Tools
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  In Task Breezer, create columns for system stages (e.g., &quot;Daily Actions&quot;) to monitor flow.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-600 mt-6">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
              ⚠️ Potential Pitfalls
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Avoid vague systems; ensure they&apos;re actionable. Also, systems aren&apos;t goal-free—use goals for initial direction, then let systems drive.
            </p>
          </div>
        </section>

        {/* Conclusion and CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 rounded-lg shadow-lg p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Turn Your Goals Into Systems
          </h2>
          <p className="text-lg mb-6 text-blue-50">
            Ready for practical support? Goals To Systems helps you transform ambitious goals into repeatable systems you can follow consistently, so progress compounds over time.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://goalstosystems.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Goals To Systems
            </a>
            <Link
              href="/resources"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-blue-400"
            >
              Explore More Resources
            </Link>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Continue Learning
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/productivity-tips"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              → Productivity Tips
            </Link>
            <Link
              href="/kanban"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              → Kanban Best Practices
            </Link>
            <Link
              href="/resources"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              → More Resources
            </Link>
            <Link
              href="/faq"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              → FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
