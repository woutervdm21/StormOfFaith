export default function PricingCard({ title, description, price, features, featured = false }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-200 hover:-translate-y-1 ${
        featured
          ? 'bg-accent dark:bg-accent-soft border-accent dark:border-accent-soft shadow-lg shadow-accent/20'
          : 'bg-white dark:bg-brand-card border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md'
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-white text-accent">
          Popular
        </span>
      )}

      <h3 className={`font-serif text-xl mb-1 ${featured ? 'text-white' : 'text-ink dark:text-white'}`}>
        {title}
      </h3>
      <p className={`text-xs mb-4 leading-relaxed ${featured ? 'text-white/75' : 'text-ink-soft dark:text-slate-400'}`}>
        {description}
      </p>

      <div className={`text-2xl font-semibold mb-5 font-sans ${featured ? 'text-white' : 'text-ink dark:text-white'}`}>
        {price}
      </div>

      <ul className={`space-y-2 text-sm flex-1 mb-6 ${featured ? 'text-white/85' : 'text-ink-soft dark:text-slate-300'}`}>
        {features.map(f => (
          <li key={f} className="flex items-start gap-2">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <p className={`text-xs italic ${featured ? 'text-white/60' : 'text-ink-soft/60 dark:text-slate-500'}`}>
        Price dependent on design complexity
      </p>
    </div>
  )
}
