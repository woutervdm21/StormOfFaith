import { useState } from 'react'
import Slideshow from './Slideshow'
import PricingCard from './PricingCard'

const categories = [
  {
    id: 'logo',
    label: 'Logo Design',
    tagline: 'Designing your visual voice — custom logos built to represent your brand with purpose.',
    plans: [
      { title: 'Basic',                  description: 'Perfect for startups or personal brands.',                   price: 'R150 – R800',       salePrice: 'R120 – R640',       features: ['2–3 logo concepts', '2 revisions', 'Final files: PNG, JPG & PDF'] },
      { title: 'Standard',               description: 'For growing brands who want versatility and refinement.',    price: 'R1 000 – R1 500',   salePrice: 'R800 – R1 200',     features: ['3–4 concepts', 'Unlimited revisions', 'Vector + all file formats', 'Full, icon & watermark variations'] },
      { title: 'Premium + Mini Brand Kit', description: 'Your complete brand identity foundation.',                 price: 'R1 000 – R3 000',   salePrice: 'R800 – R2 400',     features: ['All Standard features', 'Color palette & typography', 'Social media profile & cover design'] },
      /* { title: 'Logo Refresh',  description: 'A modern update while keeping brand recognition.',               price: 'R200 – R800',       salePrice: 'R160 – R640',       features: ['Modernised version', 'Vector files', 'Optional typography update'] }, */
      /* { title: 'Icon Suite',    description: 'Custom icons or monograms for apps, social media, or print.',    price: 'R250 – R600',       salePrice: 'R200 – R480',       features: ['3–5 icons or monograms', 'Consistent color & style'] }, */
    ],
    slides: [
      { src: '/img/Storm Of Faith Logo HD-01.png', alt: 'Storm Of Faith Logo' },
      { src: '/img/A-Dog-Able-Grooming-01.png', alt: 'A Dog Able Grooming Logo' },
      { src: '/img/AC CHar HD-01.png', alt: 'AC Char Logo' },
      { src: '/img/Color Pallete Simple-01.png', alt: 'Color Palette' },
      { src: '/img/Color Pallette-01.webp', alt: 'Color Palette Extended' },
      { src: '/img/Vector Burger.png', alt: 'Vector Burger' },
      { src: '/img/Storm & Rose Color-01-01.png', alt: 'Storm & Rose Logo' },
    ],
  },
  {
    id: 'print',
    label: 'Print Design',
    tagline: 'Clean, cohesive, and crafted with care — from business cards to full publications.',
    plans: [
      { title: 'Business Basics',        description: 'Essential branded documents for new businesses or professionals.', price: 'R200 – R400 / item', salePrice: 'R160 – R320 / item', features: ['Email signature', 'Letterhead', 'Business cards'] },
      { title: 'Product & Packaging',    description: 'Ideal for small product-based businesses and boutiques.',          price: 'R500 – R2 500',       salePrice: 'R400 – R2 000',       features: ['Label / jar / box design', 'Sticker designs', 'Print-ready packaging layout'] },
      { title: 'Corporate & Publication', description: 'Professional long-format layouts for business use.',              price: 'R800 – R3 000',       salePrice: 'R640 – R2 400',       features: ['Magazine ads A4/DPS', 'Business branding signs'] },
      /* { title: 'Event & Personal Print', description: 'For weddings, birthdays, and special occasions.',              price: 'R250 – R1 500',       salePrice: 'R200 – R1 200',       features: ['Invitation set', 'Save-the-date card', 'Thank-you card', 'Menu design'] }, */
    ],
    slides: [
      { src: '/img/AC Char Business Card.png', alt: 'AC Char Business Card' },
      { src: '/img/Bridal Shower - Invite.png', alt: 'Bridal Shower Invite' },
      { src: '/img/Kitchen Tea - Invite.png', alt: 'Kitchen Tea Invite' },
      { src: '/img/Poster A4 Design-01.png', alt: 'A-Dog-Able Grooming Poster' },
      { src: '/img/TTL Media (WCMG) A4.png', alt: 'TTL Media A4' },
      { src: '/img/TTL Media (WCMG) DPS.png', alt: 'TTL Media DPS' },
      { src: '/img/WCMG Advertising.png', alt: 'WCMG Advertising' },
      { src: '/img/WCMG.png', alt: 'WCMG' },
      { src: '/img/Wedding Menu - Lord of the rings themed.png', alt: 'Wedding Menu' },
      { src: '/img/Westcliff - Front wall Sign.png', alt: 'Westcliff Front Wall Sign' },
      { src: '/img/Westcliff - Side wall.png', alt: 'Westcliff Side Wall' },
    ],
  },
  {
    id: 'digital',
    label: 'Web Development',
    tagline: 'From design assets to full web apps — custom-built with purpose, pixel by pixel.',
    plans: [
      { title: 'Website Design Assets',  description: 'Professional web graphics for businesses that already have a developer.',                  price: 'R650 – R1 200',    salePrice: 'R520 – R960',     features: ['Hero banner', 'CTA button graphic', 'Profile & cover banners', 'Instagram story highlights', 'All web-ready file formats'] },
      { title: 'Website Build',          description: 'A fully designed, responsive website — custom built from the ground up.',                  price: 'R3 000 – R6 000',  salePrice: 'R2 400 – R4 800', features: ['1–6 pages', 'Custom design & branding', 'Mobile + tablet responsive', 'Contact form', 'Hosting & domain setup', 'Light / dark mode'] },
      { title: 'Web Application',        description: 'Custom web systems built around your business workflows and customer needs.',               price: 'R8 000 – R25 000+', salePrice: 'R6 400 – R20 000+', features: ['E-commerce store', 'Calendar & booking systems', 'Customer login portals', 'Admin dashboards', 'API & third-party integrations', 'Database-driven content'] },
      /* { title: 'Website Graphic Set',       description: 'For businesses needing simple, clean visuals for their site.',                       price: 'R650 – R1 200',    salePrice: 'R520 – R960',     features: ['Hero banner', 'CTA button graphic', 'Footer / sidebar visual', 'Profile + cover banner', 'Instagram stories & highlights'] }, */
      /* { title: 'Full Website Graphics Pack', description: 'For a full site launch or complete visual refresh.',                                price: 'R1 500 – R3 500',  salePrice: 'R1 200 – R2 800', features: ['Desktop + mobile hero banner', '3 section graphics', '3 custom icons or badges', 'All files for web + mobile'] }, */
      /* { title: 'Social + Web Launch Combo',  description: 'Matching visuals across website + social platforms.',                              price: 'R1 500 – R3 000',  salePrice: 'R1 200 – R2 400', features: ['Website hero banner', '3 web section graphics', '3 branded Instagram posts', '5-icon story highlight set'] }, */
      /* { title: 'Digital Ad Campaign Kit',    description: 'Branding that carries across email + web presence.',                               price: 'R1 000 – R2 000',  salePrice: 'R800 – R1 600',   features: ['5 ad sizes (square, landscape, vertical)', 'Facebook & Instagram ads', 'Email header banner', 'Favicon + branded button set'] }, */
    ],
    slides: [
      { src: '/img/Banner HD-01.png', alt: 'A-Dog-Able Grooming Facebook Banner' },
      { src: '/img/Whatsapp profile pic-01.png', alt: 'WhatsApp Profile Picture' },
      { src: '/img/Email Signature.png', alt: 'Email Signature' },
      { src: '/img/Westcliff Banner.png', alt: 'WCMG Banner' },
      { src: '/img/Pixel Art.png', alt: 'Pixel Art' },
      { src: '/img/Grids.png', alt: 'Grid Art' },
      { src: '/img/Icons-01.png', alt: 'Favicon' },
    ],
  },
]

export default function Portfolio() {
  const [active, setActive] = useState(() => {
    const tab = sessionStorage.getItem('portfolioTab')
    if (tab) { sessionStorage.removeItem('portfolioTab'); return tab }
    return 'logo'
  })
  const cat = categories.find(c => c.id === active)

  return (
    <section id="portfolio" className="py-24 px-6 dark:bg-abyss bg-pearl">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.3em] uppercase dark:text-neon/65 text-neon font-medium mb-3">
            My Work
          </p>
          <h2 className="font-serif font-light dark:text-snow text-ink"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
            Design Portfolio
          </h2>
        </div>

        {/* Tab bar */}
        <div className="mb-12">
          {/* Mobile */}
          <div className="sm:hidden">
            <select
              value={active}
              onChange={e => setActive(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm dark:bg-layer bg-white dark:text-snow text-ink
                border dark:border-white/8 border-neon/20
                focus:outline-none focus:ring-2 focus:ring-neon/40"
            >
              {categories.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
            </select>
          </div>

          {/* Desktop */}
          <div className="hidden sm:flex justify-center">
            <div className="inline-flex items-center dark:bg-layer/60 bg-white rounded-2xl p-1.5 gap-1
              border dark:border-white/[0.06] border-neon/10">
              {categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === c.id
                      ? 'bg-neon text-white shadow-lg shadow-neon/35'
                      : 'dark:text-snow/45 text-ink-soft dark:hover:text-snow hover:text-ink'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab content */}
        <div key={active} className="tab-content">
          <p className="text-center font-serif italic text-lg dark:text-snow/45 text-ink-soft mb-10">
            {cat.tagline}
          </p>

          {/* Web dev credibility note */}
          {active === 'digital' && (
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex-1 h-px dark:bg-white/5 bg-neon/10 max-w-[80px]" />
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl
                dark:bg-layer/50 bg-white border dark:border-white/[0.06] border-neon/12">
                <svg className="w-4 h-4 flex-shrink-0 dark:text-neon-light text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <p className="text-xs dark:text-snow/55 text-ink-soft">
                  All web development is delivered by a{' '}
                  <span className="dark:text-snow text-ink font-medium">professional software developer</span>
                  {' '}with{' '}
                  <span className="dark:text-neon-light text-neon font-medium">10+ years of experience</span>.
                </p>
              </div>
              <div className="flex-1 h-px dark:bg-white/5 bg-neon/10 max-w-[80px]" />
            </div>
          )}

          {/* Launch special banner */}
          <div className="mb-8 rounded-2xl border border-orange-400/50 dark:border-[rgba(255,133,71,0.30)]
            bg-orange-50 dark:bg-[rgba(255,133,71,0.09)]
            px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3
            shadow-[0_0_24px_rgba(255,133,71,0.12)]">
            <div className="flex items-center gap-3">
              <span className="dark:text-ember text-orange-600 text-lg">✦</span>
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase dark:text-ember text-orange-700 font-semibold">Launch Special</p>
                <p className="text-sm dark:text-snow/70 text-ink-soft mt-0.5">20% off all packages — for a limited time only.</p>
              </div>
            </div>
            <a href="#contact"
              className="flex-shrink-0 px-5 py-2 rounded-xl border dark:border-ember/50 border-orange-500/60
                dark:text-ember text-orange-700 text-xs font-medium
                tracking-wide hover:bg-orange-600 hover:text-white dark:hover:bg-ember
                transition-all duration-200 hover:shadow-[0_0_18px_rgba(255,133,71,0.4)]">
              Claim Discount
            </a>
          </div>

          {/* Pricing grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.plans.map((plan, i) => (
              <PricingCard key={plan.title} {...plan} featured={i === 1} />
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mt-8 mb-5">
            <div className="flex-1 h-px dark:bg-white/5 bg-neon/10" />
            <span className="text-[10px] tracking-[0.28em] uppercase dark:text-snow/25 text-ink-soft/50">Work Samples</span>
            <div className="flex-1 h-px dark:bg-white/5 bg-neon/10" />
          </div>

          <Slideshow key={active} images={cat.slides} />

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-neon text-white
                font-medium text-sm hover:bg-neon/85
                hover:shadow-[0_0_36px_rgba(124,92,252,0.5)] hover:scale-[1.02]
                transition-all duration-300"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
