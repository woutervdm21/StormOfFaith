const items = [
  'Logo Design', 'Print Design', 'Web Development', 'Brand Identity',
  'Business Cards', 'Packaging Design', 'Social Media', 'Web Banners',
  'Typography', 'Visual Identity', 'Event Invitations', 'Icon Design',
]

export default function Marquee() {
  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden dark:bg-layer bg-pearl-mid border-y dark:border-white/5 border-neon/12 py-4">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-28 dark:bg-gradient-to-r dark:from-layer bg-gradient-to-r from-pearl-mid to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-28 dark:bg-gradient-to-l dark:from-layer bg-gradient-to-l from-pearl-mid to-transparent z-10" />

      <div className="marquee-track flex items-center whitespace-nowrap select-none">
        {track.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-5">
            <span className="text-[10px] tracking-[0.28em] uppercase dark:text-snow/35 text-ink-soft/65 font-medium">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-neon/55 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  )
}
