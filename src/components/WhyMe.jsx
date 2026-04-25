import { useFadeIn } from '../hooks/useFadeIn'

const pillars = [
  {
    num: '01',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Personal Service',
    desc: 'Every project gets my full attention — no templates, no shortcuts. Your brand is treated as if it were my own.',
  },
  {
    num: '02',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Quick Turnaround',
    desc: 'I deliver efficiently without compromising quality, keeping your project on schedule and your vision on track.',
  },
  {
    num: '03',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Faith-led Values',
    desc: 'Design rooted in integrity, purpose, and genuine care — every project done with heart and delivered with pride.',
  },
  {
    num: '04',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Fully built websites and web applications — designed by Candice, coded by a professional software developer with 10+ years of experience.',
  },
]

export default function WhyMe() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="py-24 px-6 dark:bg-deep bg-white border-y dark:border-white/[0.04] border-neon/8">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase dark:text-neon/65 text-neon font-medium mb-3">
            Why Choose Me
          </p>
          <h2 className="font-serif font-light dark:text-snow text-ink"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Design with Purpose
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(p => (
            <div
              key={p.title}
              className="group relative p-8 rounded-2xl overflow-hidden
                dark:bg-layer/55 bg-pearl border dark:border-white/[0.06] border-neon/10
                dark:hover:border-neon/40 hover:border-neon/35
                hover:shadow-[0_0_32px_rgba(124,92,252,0.12)]
                transition-all duration-300"
            >
              {/* Ghost number */}
              <span
                className="absolute top-3 right-5 font-serif font-light pointer-events-none select-none"
                style={{ fontSize: '5rem', lineHeight: 1, color: 'transparent',
                  WebkitTextStroke: '1px rgba(124,92,252,0.07)' }}
              >
                {p.num}
              </span>

              <span className="block text-[10px] tracking-[0.28em] uppercase dark:text-neon/50 text-neon/70 font-medium mb-4">
                {p.num}
              </span>

              <div className="w-10 h-10 flex items-center justify-center rounded-xl
                dark:bg-neon/10 bg-neon/8 dark:text-neon-light text-neon mb-5
                group-hover:scale-110 group-hover:dark:bg-neon/18 group-hover:bg-neon/14
                transition-all duration-300">
                {p.icon}
              </div>

              <h3 className="font-serif text-xl dark:text-snow text-ink mb-2">{p.title}</h3>
              <p className="text-sm dark:text-snow/50 text-ink-soft leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
