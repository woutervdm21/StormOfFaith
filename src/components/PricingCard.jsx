export default function PricingCard({ title, description, price, salePrice, features, devNote, featured = false }) {
  return (
    <div className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
      featured
        ? 'dark:bg-neon/10 bg-neon/6 border-2 border-neon/55 shadow-[0_0_40px_rgba(124,92,252,0.2)]'
        : 'dark:bg-layer/55 bg-white border dark:border-white/[0.06] border-neon/10 dark:hover:border-neon/30 hover:border-neon/30 hover:shadow-[0_0_20px_rgba(124,92,252,0.1)]'
    }`}>
      {/* Launch special badge */}
      <span className="absolute -top-2.5 -right-2.5 px-2.5 py-1 rounded-lg dark:bg-ember bg-orange-600 text-white text-[9px] tracking-widest uppercase font-semibold shadow-[0_0_14px_rgba(255,133,71,0.45)] whitespace-nowrap">
        20% OFF
      </span>

      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neon text-white text-[10px] tracking-widest uppercase font-medium whitespace-nowrap">
          Popular
        </span>
      )}

      <h3 className="font-serif text-xl dark:text-snow text-ink mb-1">{title}</h3>
      <p className="text-xs leading-relaxed dark:text-snow/45 text-ink-soft mb-4">{description}</p>

      <div className="mb-5">
        <span className="text-xs dark:text-snow/30 text-ink-soft/50 line-through">{price}</span>
        <div className={`font-serif text-2xl font-light mt-0.5 ${featured ? 'text-gradient-neon' : 'dark:text-snow/80 text-ink'}`}>
          {salePrice}
        </div>
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

      {devNote && (
        <div className="flex items-start gap-2 mb-4 px-3 py-2 rounded-lg
          dark:bg-neon/[0.07] bg-neon/5 border dark:border-neon/15 border-neon/20">
          <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 dark:text-neon-light text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <p className="text-[10px] leading-relaxed dark:text-neon-light/70 text-neon/80">{devNote}</p>
        </div>
      )}

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
