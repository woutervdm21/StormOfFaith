import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { dark, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-60px 0px -40% 0px', threshold: 0 }
    )
    links.forEach(l => {
      const el = document.getElementById(l.href.replace('#', ''))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const solidBg = 'bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md border-b border-slate-200/50 dark:border-white/5 shadow-sm'

  const logoColor = scrolled
    ? 'text-ink dark:text-white'
    : 'text-[#1A0A4A] dark:text-white'

  const getLinkClass = (href) => {
    const sectionId = href.replace('#', '')
    if (activeSection === sectionId) return 'text-accent dark:text-accent-soft font-medium'
    return scrolled
      ? 'text-ink-soft dark:text-slate-400 hover:text-ink dark:hover:text-white'
      : 'text-[#2D1E6B] dark:text-white/75 hover:text-accent dark:hover:text-white'
  }

  const linkColor = scrolled
    ? 'text-ink-soft dark:text-slate-400 hover:text-ink dark:hover:text-white'
    : 'text-[#2D1E6B] dark:text-white/75 hover:text-accent dark:hover:text-white'

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? solidBg : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className={`font-serif text-lg font-light transition-colors duration-300 ${logoColor}`}>
          Storm <em className="italic">of Faith</em>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors duration-200 ${getLinkClass(l.href)}`}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`p-1.5 rounded-full transition-colors duration-200 ${linkColor}`}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>

        {/* Mobile: theme + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className={`p-2 transition-colors ${linkColor}`}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className={`p-2 transition-colors ${linkColor}`}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-brand-card border-t border-slate-100 dark:border-white/5 px-6 py-4 space-y-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm text-ink-soft dark:text-slate-300 hover:text-ink dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
