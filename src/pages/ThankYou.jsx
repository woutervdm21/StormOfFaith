import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <main className="min-h-screen dark:bg-void bg-pearl flex items-center justify-center px-6 relative overflow-hidden">

      {/* Aurora bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-a absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full dark:bg-violet-600/15 bg-violet-400/12 blur-[100px]" />
        <div className="aurora-b absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full dark:bg-indigo-700/12 bg-indigo-400/10 blur-[90px]" />
      </div>

      <div className="relative text-center max-w-md w-full">

        {/* Check icon */}
        <div className="w-16 h-16 mx-auto mb-8 rounded-2xl dark:bg-neon/15 bg-neon/10 flex items-center justify-center
          shadow-[0_0_30px_rgba(124,92,252,0.25)]">
          <svg className="w-7 h-7 dark:text-neon-light text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Eyebrow */}
        <p className="text-[10px] tracking-[0.3em] uppercase dark:text-neon/65 text-neon font-medium mb-3">
          Message Sent
        </p>

        <h1 className="font-serif font-light dark:text-snow text-ink mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)' }}>
          Thank You!
        </h1>

        <p className="dark:text-snow/55 text-ink-soft leading-relaxed mb-3">
          Your message has been received. I'll get back to you as soon as possible.
        </p>
        <p className="text-sm italic dark:text-snow/25 text-ink-soft/50 mb-10">
          "For God so loved the world…" — John 3:16
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-neon text-white
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
    </main>
  )
}
