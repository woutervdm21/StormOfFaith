import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream dark:bg-brand-dark flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <p className="text-9xl font-serif font-light text-accent/20 dark:text-accent-soft/15 select-none">
          404
        </p>
        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-light text-ink dark:text-white">
            Page Not Found
          </h1>
          <p className="text-ink-soft dark:text-slate-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <p className="text-sm italic text-ink-soft/50 dark:text-slate-600">
          "Trust in the Lord with all your heart…" — Prov 3:5
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent dark:bg-accent-soft text-white dark:text-brand-dark font-medium text-sm hover:opacity-90 hover:scale-[1.01] transition-all duration-200 shadow-sm"
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
