import { useEffect, useState, useRef } from 'react'

const services = [
  { label: 'Logo Design', tab: 'logo' },
  { label: 'Print Design', tab: 'print' },
  { label: 'Digital & Web', tab: 'digital' },
]

export default function Hero() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#CEC3FF] dark:bg-[#07071A]">

      {/* ── Animated colour blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-blob-1 absolute -top-28 -right-20 w-[520px] h-[520px] rounded-full bg-violet-500/55 dark:bg-violet-600/30 blur-[100px]" />
        <div className="hero-blob-2 absolute -bottom-36 -left-20 w-[460px] h-[460px] rounded-full bg-indigo-500/50 dark:bg-indigo-500/25 blur-[90px]" />
        <div className="hero-blob-3 absolute top-1/2 left-[38%] w-[320px] h-[320px] rounded-full bg-purple-500/45 dark:bg-purple-500/20 blur-[70px]" />
      </div>

      {/* ── Dot-grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--dot-color) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* CSS variable for dot colour per theme */}
      <style>{`
        :root          { --dot-color: rgba(60, 40, 160, 0.18); }
        .dark          { --dot-color: rgba(255, 255, 255, 0.08); }
      `}</style>

      {/* ── Decorative concentric rings ── */}
      <div className="absolute pointer-events-none right-[-240px] top-1/2 -translate-y-1/2">
        <div className="w-[700px] h-[700px] rounded-full border border-accent/[0.25] dark:border-white/[0.04]" />
        <div className="absolute inset-[80px] rounded-full border border-accent/[0.20] dark:border-white/[0.04]" />
        <div className="absolute inset-[160px] rounded-full border border-accent/[0.25] dark:border-white/[0.05]" />
      </div>

      {/* ── Content ── */}
      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28 transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1.7fr] gap-10 md:gap-14 items-center">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[22px] border border-accent/20 dark:border-accent-muted/25" />
              <div className="absolute -inset-4 rounded-[26px] border border-accent/10 dark:border-accent-muted/10" />
              <img
                src="/img/Storm Of Faith Logo HD-01.png"
                alt="Storm of Faith"
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover shadow-xl"
              />
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {services.map(s => (
                <a
                  key={s.label}
                  href="#portfolio"
                  onClick={() => sessionStorage.setItem('portfolioTab', s.tab)}
                  className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-[#3D2DB5]/40 dark:border-accent-muted/25 text-[#3D2DB5] dark:text-accent-muted/70 hover:border-[#3D2DB5]/70 dark:hover:border-accent-muted/50 hover:text-accent dark:hover:text-accent-soft transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-48 bg-gradient-to-b from-transparent via-accent/15 dark:via-white/10 to-transparent" />

          {/* Text */}
          <div className="text-center md:text-left space-y-6">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#3D2DB5] dark:text-accent-muted/60 font-medium">
              Graphic & Web Design · Middelburg, SA
            </p>

            <h1 className="font-serif font-light leading-[1.05] text-[#1A0A4A] dark:text-white">
              <span className="block text-5xl md:text-6xl lg:text-[4.5rem]">Storm</span>
              <span className="block text-5xl md:text-6xl lg:text-[4.5rem] italic text-[#3D2DB5] dark:text-accent-soft">
                of Faith
              </span>
            </h1>

            <p className="text-base text-[#2D1E6B] dark:text-white/55 leading-relaxed max-w-md mx-auto md:mx-0">
              Celebrating Faith through Unique Design Expressions
            </p>

            <div className="w-10 h-px bg-[#3D2DB5]/50 dark:bg-accent-soft/40 mx-auto md:mx-0" />

            <blockquote className="text-sm italic text-[#2D1E6B]/70 dark:text-white/35 leading-relaxed max-w-sm mx-auto md:mx-0">
              "Trust in the Lord with all your Heart and lean not on your own Understanding" — Prov 3:5
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  )
}
