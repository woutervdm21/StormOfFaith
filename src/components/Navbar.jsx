import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Home',      href: '#home'      },
  { label: 'About',     href: '#about'     },
  { label: 'Why Me',    href: '#why-me'    },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact'   },
]

function SunIcon()  { return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg> }
function MoonIcon() { return <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg> }

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('')
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { rootMargin: '-60px 0px -40% 0px', threshold: 0 }
    )
    links.forEach(l => { const el = document.getElementById(l.href.replace('#', '')); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const solidBg = scrolled
    ? 'dark:bg-abyss/92 bg-pearl/92 backdrop-blur-xl border-b dark:border-white/5 border-neon/10 shadow-xl dark:shadow-void/60'
    : 'bg-transparent'

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${solidBg}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="group flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neon group-hover:scale-[2] transition-transform duration-300" />
          <span className="font-serif text-lg font-light dark:text-snow text-ink tracking-wide">
            Storm&nbsp;<em className="italic dark:text-neon-light text-neon">of Faith</em>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => {
            const active = activeSection === l.href.replace('#', '')
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-[11px] tracking-[0.22em] uppercase font-medium pb-1 transition-colors duration-200 ${
                  active
                    ? 'dark:text-neon-light text-neon'
                    : 'dark:text-snow/50 text-ink-soft dark:hover:text-snow hover:text-ink'
                }`}
              >
                {l.label}
                <span className={`absolute bottom-0 left-0 h-px bg-neon transition-all duration-300 ${active ? 'w-full' : 'w-0'}`} />
              </a>
            )
          })}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg dark:text-snow/40 text-ink-soft dark:hover:text-snow hover:text-ink dark:hover:bg-white/5 hover:bg-neon/8 transition-all duration-200"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1">
          <button onClick={toggle} className="p-2 dark:text-snow/40 text-ink-soft">{dark ? <SunIcon /> : <MoonIcon />}</button>
          <button onClick={() => setMenuOpen(o => !o)} aria-label="Menu" className="p-2 dark:text-snow/40 text-ink-soft">
            <div className="w-5 flex flex-col gap-[5px] items-end">
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'w-5 rotate-45 translate-y-[9px]' : 'w-5'}`} />
              <span className={`block h-px bg-current transition-all duration-200 ${menuOpen ? 'opacity-0 w-0' : 'w-3'}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'w-5 -rotate-45 -translate-y-[9px]' : 'w-5'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden dark:bg-abyss/96 bg-pearl/96 backdrop-blur-xl border-t dark:border-white/5 border-neon/10 px-6 py-5 space-y-px">
          {links.map(l => {
            const active = activeSection === l.href.replace('#', '')
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 py-3 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors ${
                  active ? 'dark:text-neon-light text-neon' : 'dark:text-snow/55 text-ink-soft'
                }`}
              >
                <span className={`w-1 h-1 rounded-full bg-neon transition-opacity ${active ? 'opacity-100' : 'opacity-0'}`} />
                {l.label}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
