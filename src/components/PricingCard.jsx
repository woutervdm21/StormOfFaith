export default function PricingCard({ title, description, price, features, featured = false }) {
  return (
    <div className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
      featured
        ? 'dark:bg-neon/10 bg-neon/6 border-2 border-neon/55 shadow-[0_0_40px_rgba(124,92,252,0.2)]'
        : 'dark:bg-layer/55 bg-white border dark:border-white/[0.06] border-neon/10 dark:hover:border-neon/30 hover:border-neon/30 hover:shadow-[0_0_20px_rgba(124,92,252,0.1)]'
    }`}>
      {/* Launch special badge */}
      <span className="absolute -top-2.5 -right-2.5 px-2.5 py-1 rounded-lg bg-ember text-white text-[9px] tracking-widest uppercase font-semibold shadow-[0_0_14px_rgba(255,133,71,0.55)] whitespace-nowrap">
        20% OFF
      </span>

      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neon text-white text-[10px] tracking-widest uppercase font-medium whitespace-nowrap">
          Popular
        </span>
      )}

      <h3 className="font-serif text-xl dark:text-snow text-ink mb-1">{title}</h3>
      <p className="text-xs leading-relaxed dark:text-snow/45 text-ink-soft mb-4">{description}</p>

      <div className={`font-serif text-2xl font-light mb-5 ${featured ? 'text-gradient-neon' : 'dark:text-snow/80 text-ink'}`}>
        {price}
      </div>

      <ul className="space-y-2.5 flex-1 mb-6">
        {features.map(f => (
          <li key={f} className="flex items-start gap-2.5 text-sm dark:text-snow/55 text-ink-soft">
            <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${featured ? 'dark:text-neon-light text-neon' : 'dark:text-neon/60 text-neon/70'}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <p className="text-[10px] italic dark:text-snow/25 text-ink-soft/50 mb-4">
        Price dependent on design complexity
      </p>

      <a
        href="#contact"
        className={`block text-center py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
          featured
            ? 'bg-neon text-white hover:bg-neon/85 hover:shadow-[0_0_20px_rgba(124,92,252,0.45)]'
            : 'border dark:border-white/12 border-neon/25 dark:text-snow/60 text-ink-soft dark:hover:border-neon/50 hover:border-neon/50 dark:hover:text-snow hover:text-ink'
        }`}
      >
        Get Started
      </a>
    </div>
  )
}
