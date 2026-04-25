const navLinks = [
  { label: 'About',     href: '#about'     },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact'   },
]

const socials = [
  {
    label: 'Instagram',
    href:  'https://www.instagram.com/stormoffaith3_16',
    icon:  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></svg>,
  },
  {
    label: 'Facebook',
    href:  'https://web.facebook.com/profile.php?id=61575638911067',
    icon:  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.5 3h-2.8v7A10 10 0 0 0 22 12z"/></svg>,
  },
  {
    label: 'WhatsApp',
    href:  'https://wa.me/27796499728',
    icon:  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>,
  },
]

export default function Footer() {
  return (
    <footer className="dark:bg-void bg-ink relative overflow-hidden">

      {/* Watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] font-serif font-light leading-none pointer-events-none select-none whitespace-nowrap"
        style={{ fontSize: 'clamp(6rem, 18vw, 14rem)', color: 'transparent',
          WebkitTextStroke: '1px rgba(124,92,252,0.07)' }}>
        STORM
      </div>

      {/* Main columns */}
      <div className="relative max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-neon" />
            <h3 className="font-serif text-2xl font-light text-white">
              Storm <em className="italic text-neon-light">of Faith</em>
            </h3>
          </div>
          <p className="text-sm text-white/45 leading-relaxed">
            Celebrating Faith through Unique Design Expressions
          </p>
          <p className="text-xs italic text-white/20 pt-1">
            John 3:16 — "For God so loved the world…"
          </p>
        </div>

        {/* Navigate */}
        <div>
          <p className="text-[10px] tracking-[0.28em] uppercase text-white/25 mb-5">Navigate</p>
          <ul className="space-y-2.5">
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href}
                  className="text-sm text-white/45 hover:text-neon-light transition-colors duration-200">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + socials */}
        <div>
          <p className="text-[10px] tracking-[0.28em] uppercase text-white/25 mb-5">Get In Touch</p>
          <div className="space-y-2.5 mb-6">
            <a href="mailto:stormyvisions@yahoo.com"
              className="block text-sm text-white/45 hover:text-neon-light transition-colors duration-200">
              stormyvisions@yahoo.com
            </a>
            <a href="tel:+27796499728"
              className="block text-sm text-white/45 hover:text-neon-light transition-colors duration-200">
              +27 79 649 9728
            </a>
            <p className="text-sm text-white/25">Middelburg, South Africa</p>
          </div>
          <div className="flex gap-2">
            {socials.map(s => (
              <a
                key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-white/35
                  hover:text-neon-light hover:bg-neon/15 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.05] py-5 text-center px-6">
        <p className="text-xs text-white/15">
          &copy; {new Date().getFullYear()} Storm Of Faith. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
