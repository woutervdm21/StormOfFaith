import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen dark:bg-void bg-pearl flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background aurora */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-a absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full dark:bg-violet-600/15 bg-violet-400/12 blur-[100px]" />
        <div className="aurora-b absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full dark:bg-indigo-700/12 bg-indigo-400/10 blur-[90px]" />
      </div>

      <div className="relative text-center space-y-8 max-w-lg">

        {/* Giant 404 */}
        <div
          className="font-serif font-light leading-none select-none"
          style={{ fontSize: 'clamp(8rem, 22vw, 16rem)', color: 'transparent',
            WebkitTextStroke: '2px rgba(124,92,252,0.2)' }}
        >
          404
        </div>

        <div className="space-y-3">
          <h1 className="font-serif text-3xl font-light dark:text-snow text-ink">
            Page Not Found
          </h1>
          <p className="dark:text-snow/50 text-ink-soft">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <p className="text-sm italic dark:text-snow/25 text-ink-soft/50">
          "Trust in the Lord with all your heart…" — Prov 3:5
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-neon text-white
            font-medium text-sm hover:bg-neon/85
            hover:shadow-[0_0_28px_rgba(124,92,252,0.5)] hover:scale-[1.02]
            transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
