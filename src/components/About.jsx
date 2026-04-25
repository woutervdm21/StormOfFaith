import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="about" className="bg-cream-dark dark:bg-brand-card py-24 px-6">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Photo */}
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-accent/10 dark:ring-accent-muted/10">
            <img
              src="/img/About Me_Cropped.JPG"
              alt="Candice van der Merwe"
              className="w-full h-full object-cover"
              style={{ filter: 'contrast(0.95) brightness(1.02)' }}
            />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.15)]" />
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-3 space-y-5">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-accent dark:text-accent-soft font-medium mb-2">
              About Me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-ink dark:text-white">
              Candice van der Merwe
            </h2>
          </div>
          <p className="text-ink-soft dark:text-slate-300 leading-relaxed text-base">
            I'm a graphic designer with a passion for creativity and storytelling. As a self-taught designer,
            I believe great design is more than aesthetics — it's about giving people and businesses a voice,
            helping them stand out, and creating identities that truly speak to who they are.
          </p>
          <p className="text-ink-soft dark:text-slate-300 leading-relaxed text-base">
            Every project I take on is personal, with the goal of transforming ideas into visuals that are
            eye-catching, meaningful, and empowering. Let's work together to turn your vision into something unforgettable.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent dark:bg-accent-soft text-white dark:text-brand-dark font-medium text-sm hover:bg-accent/90 dark:hover:bg-accent-soft/90 hover:scale-[1.01] transition-all duration-200 shadow-sm"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-accent/30 dark:border-accent-soft/30 text-accent dark:text-accent-soft font-medium text-sm hover:bg-accent/5 dark:hover:bg-accent-soft/10 hover:scale-[1.01] transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
