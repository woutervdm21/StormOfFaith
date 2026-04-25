import { useEffect, useState, useRef } from 'react'

const serviceMap = [
  { label: 'Logo Design',  tab: 'logo'    },
  { label: 'Print Design', tab: 'print'   },
  { label: 'Web Development', tab: 'digital' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [mouse,   setMouse]   = useState({ x: '60%', y: '40%' })
  const sectionRef = useRef(null)

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const handleMouseMove = e => {
    if (!sectionRef.current) return
    const r = sectionRef.current.getBoundingClientRect()
    setMouse({ x: `${e.clientX - r.left}px`, y: `${e.clientY - r.top}px` })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden dark:bg-void bg-pearl flex items-center"
    >
      {/* Cursor spotlight — dark */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{ background: `radial-gradient(700px circle at ${mouse.x} ${mouse.y}, rgba(124,92,252,0.07), transparent 42%)` }}
      />
      {/* Cursor spotlight — light */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{ background: `radial-gradient(700px circle at ${mouse.x} ${mouse.y}, rgba(124,92,252,0.16), transparent 42%)` }}
      />

      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="aurora-a absolute -top-[20%] -right-[10%] w-[680px] h-[680px] rounded-full dark:bg-violet-600/22 bg-violet-400/18 blur-[110px]" />
        <div className="aurora-b absolute -bottom-[25%] -left-[10%] w-[580px] h-[580px] rounded-full dark:bg-indigo-700/18 bg-indigo-400/12 blur-[100px]" />
        <div className="aurora-c absolute top-[35%] left-[28%]  w-[380px] h-[380px] rounded-full dark:bg-violet-500/12 bg-violet-300/12 blur-[80px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(124,92,252,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Vertical rule decorations */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 bottom-0 w-px dark:bg-white/[0.04] bg-neon/8" style={{ left: '68%' }} />
        <div className="absolute top-0 bottom-0 w-px dark:bg-white/[0.03] bg-neon/5" style={{ left: '84%' }} />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full pt-24 pb-16 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">

          {/* ─── Left: Typography ─── */}
          <div style={{ animation: visible ? 'fadeUp 0.9s ease forwards' : 'none', opacity: 0 }}>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px dark:bg-neon bg-neon/50" />
              <p className="text-[10px] tracking-[0.35em] uppercase dark:text-snow/35 text-ink-soft font-medium">
                Graphic Design · Web Development · Brand Identity
              </p>
            </div>

            {/* Giant display type */}
            <h1 className="font-serif font-light leading-none mb-3 select-none">
              <span
                className="block dark:text-snow text-ink"
                style={{ fontSize: 'clamp(4.5rem, 13vw, 10.5rem)', lineHeight: '0.92', letterSpacing: '-0.02em' }}
              >
                STORM
              </span>
              <span
                className="block italic text-gradient-neon ml-3 md:ml-8"
                style={{ fontSize: 'clamp(2.8rem, 7.5vw, 6rem)', lineHeight: '1.1' }}
              >
                of Faith
              </span>
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-3 mt-6 mb-7">
              <div className="w-10 h-px dark:bg-neon/60 bg-neon/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-neon" />
              <div className="w-20 h-px dark:bg-white/10 bg-neon/20" />
            </div>

            {/* Tagline */}
            <p className="text-base md:text-lg dark:text-snow/60 text-ink-soft leading-relaxed max-w-[420px] mb-10">
              Celebrating Faith through Unique Design Expressions — where creativity meets purpose.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-neon text-white font-medium text-sm
                  hover:bg-neon/85 hover:shadow-[0_0_36px_rgba(124,92,252,0.55)] hover:scale-[1.03]
                  transition-all duration-300"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-medium
                  dark:border dark:border-white/12 border border-neon/25
                  dark:text-snow/60 text-ink-soft
                  dark:hover:border-neon/55 hover:border-neon/55
                  dark:hover:text-snow hover:text-ink
                  hover:scale-[1.03] transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Service tags */}
            <div className="flex flex-wrap gap-2">
              {serviceMap.map(s => (
                <a
                  key={s.tab}
                  href="#portfolio"
                  onClick={() => sessionStorage.setItem('portfolioTab', s.tab)}
                  className="px-3 py-1.5 rounded-lg text-[10px] tracking-widest uppercase
                    dark:border dark:border-white/8 border border-neon/18
                    dark:text-snow/35 text-ink-soft
                    dark:hover:border-neon/45 hover:border-neon/50
                    dark:hover:text-neon-light hover:text-neon
                    transition-all duration-200 cursor-pointer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ─── Right: Logo orbit ─── */}
          <div
            className="hidden lg:flex items-center justify-center"
            style={{ animation: visible ? 'scaleUp 1s ease 0.35s forwards' : 'none', opacity: 0 }}
          >
            <div className="relative w-64 h-64 xl:w-72 xl:h-72">
              {/* Orbit rings */}
              <div className="orbit-ccw absolute inset-[-52px] rounded-full border dark:border-white/5 border-neon/12" />
              <div className="absolute inset-[-26px] rounded-full border dark:border-neon/18 border-neon/25" />
              <div className="absolute inset-[-6px] rounded-full border dark:border-neon/35 border-neon/45" />

              {/* Logo in glow circle */}
              <div className="w-full h-full rounded-2xl overflow-hidden pulse-ring shadow-[0_0_60px_rgba(124,92,252,0.35)]">
                <img src="/img/Storm Of Faith Logo HD-01.png" alt="Storm of Faith" className="w-full h-full object-cover" />
              </div>

              {/* Floating service pills */}
              <div className="float-a absolute -top-7 -right-2 px-3 py-1.5 rounded-lg
                dark:bg-abyss/80 bg-pearl/90 backdrop-blur-md
                border dark:border-white/8 border-neon/20
                text-[9px] tracking-widest uppercase dark:text-neon-light text-neon whitespace-nowrap">
                Logo Design
              </div>
              <div className="float-b absolute -bottom-5 -left-10 px-3 py-1.5 rounded-lg
                dark:bg-abyss/80 bg-pearl/90 backdrop-blur-md
                border dark:border-white/8 border-neon/20
                text-[9px] tracking-widest uppercase dark:text-snow/50 text-ink-soft whitespace-nowrap">
                Print Design
              </div>
              <div className="float-c absolute top-1/2 -right-14 -translate-y-1/2 px-3 py-1.5 rounded-lg
                dark:bg-abyss/80 bg-pearl/90 backdrop-blur-md
                border dark:border-white/8 border-neon/20
                text-[9px] tracking-widest uppercase dark:text-snow/50 text-ink-soft whitespace-nowrap">
                Web Development
              </div>

              {/* Accent dots */}
              <div className="absolute -top-1 -left-10 w-2 h-2 rounded-full bg-neon/50" />
              <div className="absolute bottom-6 -right-8 w-1.5 h-1.5 rounded-full dark:bg-white/25 bg-neon/30" />
              <div className="absolute -bottom-12 right-6 w-1 h-1 rounded-full bg-neon/70" />
            </div>
          </div>
        </div>

        {/* ─── Stats bar ─── */}
        <div
          className="mt-16 md:mt-20 pt-8 border-t dark:border-white/6 border-neon/12
            flex flex-wrap gap-8 md:gap-16 items-end"
          style={{ animation: visible ? 'fadeUp 0.9s ease 0.6s forwards' : 'none', opacity: 0 }}
        >
          {[
            { num: '15+', label: 'Projects Completed' },
            { num: '5+',  label: 'Years Experience'   },
            { num: '3',   label: 'Design Disciplines'  },
          ].map(s => (
            <div key={s.label}>
              <p className="font-serif text-3xl font-light text-gradient-neon mb-0.5">{s.num}</p>
              <p className="text-[10px] tracking-widest uppercase dark:text-snow/30 text-ink-soft">{s.label}</p>
            </div>
          ))}
          <div className="ml-auto hidden md:block">
            <p className="text-xs italic dark:text-snow/25 text-ink-soft/60">
              "Trust in the Lord with all your heart…" — Prov 3:5
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: visible ? 'fadeUp 1s ease 1.1s forwards' : 'none', opacity: 0 }}
      >
        <p className="text-[9px] tracking-[0.35em] uppercase dark:text-snow/25 text-ink-soft/50">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b dark:from-snow/25 dark:to-transparent from-neon/35 to-transparent" />
      </div>
    </section>
  )
}
