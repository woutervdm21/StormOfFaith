import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-cream dark:bg-brand-dark flex items-center justify-center px-6">
      <div className="text-center max-w-md w-full bg-white dark:bg-brand-card rounded-3xl p-12 shadow-xl border border-slate-100 dark:border-white/5">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 dark:bg-accent-soft/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent dark:text-accent-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-4xl font-light text-ink dark:text-white mb-3">Thank You!</h1>
        <p className="text-ink-soft dark:text-slate-400 mb-8 leading-relaxed">
          Your message has been sent successfully. I'll get back to you as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent dark:bg-accent-soft text-white dark:text-brand-dark font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  )
}
