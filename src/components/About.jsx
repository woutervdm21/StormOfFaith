import { useFadeIn } from '../hooks/useFadeIn'

const stats = [
  { num: '50+', label: 'Projects'     },
  { num: '5+',  label: 'Years'        },
  { num: '3',   label: 'Disciplines'  },
]

export default function About() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="about" className="relative py-28 px-6 dark:bg-abyss bg-pearl overflow-hidden">

      {/* Watermark background text */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-8 font-serif font-light pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'transparent',
          WebkitTextStroke: '1px rgba(124,92,252,0.04)' }}>
        ABOUT
      </div>

      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center
          transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* ─── Photo ─── */}
        <div className="relative">
          {/* Corner brackets */}
          <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-neon/40" />
          <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-neon/40" />

          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/5' }}>
            <img
              src="/img/About Me_Cropped.JPG"
              alt="Candice van der Merwe"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.96) contrast(0.98)' }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t dark:from-void/55 from-pearl/25 via-transparent to-transparent" />
            {/* Location tag */}
            <div className="absolute bottom-5 left-5">
              <p className="text-[10px] tracking-[0.28em] uppercase text-white/55 font-medium">
                Middelburg, South Africa
              </p>
            </div>
          </div>
        </div>

        {/* ─── Content ─── */}
        <div className="space-y-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase dark:text-neon/70 text-neon font-medium mb-3">
              About Me
            </p>
            <h2 className="font-serif font-light dark:text-snow text-ink leading-tight mb-1"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>
              Candice van der Merwe
            </h2>
            <p className="font-serif italic text-xl dark:text-snow/45 text-ink-soft">
              Graphic & Web Designer
            </p>
          </div>

          <div className="w-10 h-px dark:bg-neon/40 bg-neon/50" />

          <p className="dark:text-snow/60 text-ink-soft leading-relaxed">
            I'm a graphic designer with a passion for creativity and storytelling. As a self-taught designer,
            I believe great design is more than aesthetics — it's about giving people and businesses a voice,
            helping them stand out, and creating identities that truly speak to who they are.
          </p>
          <p className="dark:text-snow/60 text-ink-soft leading-relaxed">
            Every project I take on is personal, with the goal of transforming ideas into visuals that are
            eye-catching, meaningful, and empowering. Let's work together to turn your vision into something unforgettable.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 py-6 border-y dark:border-white/7 border-neon/12">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-3xl font-light text-gradient-neon mb-0.5">{s.num}</p>
                <p className="text-[10px] tracking-widest uppercase dark:text-snow/30 text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-neon text-white text-sm font-medium
                hover:bg-neon/85 hover:shadow-[0_0_24px_rgba(124,92,252,0.45)] hover:scale-[1.02] transition-all duration-200"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium
                border dark:border-white/12 border-neon/25
                dark:text-snow/60 text-ink-soft
                dark:hover:border-neon/50 hover:border-neon/50
                dark:hover:text-snow hover:text-ink
                transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
