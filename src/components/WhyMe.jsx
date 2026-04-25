import { useFadeIn } from '../hooks/useFadeIn'

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Personal Service',
    desc: 'Every project gets my full attention — no templates, no shortcuts. Your brand is treated as if it were my own.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Quick Turnaround',
    desc: 'I deliver efficiently without compromising quality, keeping your project on schedule and your vision on track.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Faith-led Values',
    desc: 'Design rooted in integrity, purpose, and genuine care — every project done with heart and delivered with pride.',
  },
]

export default function WhyMe() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="py-20 px-6 bg-cream dark:bg-brand-dark border-y border-slate-200/60 dark:border-white/[0.04]">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-accent dark:text-accent-soft font-medium mb-3">
            Why Choose Me
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink dark:text-white">
            Design with Purpose
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(p => (
            <div
              key={p.title}
              className="group p-8 rounded-2xl bg-white dark:bg-brand-card border border-slate-100 dark:border-white/5 hover:border-accent/20 dark:hover:border-accent-soft/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent/8 dark:bg-accent-soft/10 text-accent dark:text-accent-soft mb-5 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <h3 className="font-serif text-xl text-ink dark:text-white mb-2">{p.title}</h3>
              <p className="text-sm text-ink-soft dark:text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
