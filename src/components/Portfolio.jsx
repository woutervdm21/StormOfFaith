import { useState } from 'react'
import Slideshow from './Slideshow'
import PricingCard from './PricingCard'

const categories = [
  {
    id: 'logo',
    label: 'Logo Design',
    tagline: 'Designing your visual voice — custom logos built to represent your brand with purpose.',
    plans: [
      {
        title: 'Basic',
        description: 'Perfect for startups or personal brands.',
        price: 'R150 – R800',
        features: ['2–3 logo concepts', '2 revisions', 'Final files: PNG, JPG & PDF'],
      },
      {
        title: 'Standard',
        description: 'For growing brands who want versatility and refinement.',
        price: 'R1 000 – R1 500',
        features: ['3–4 concepts', 'Unlimited revisions', 'Vector + all file formats', 'Full, icon & watermark variations'],
      },
      {
        title: 'Premium + Mini Brand Kit',
        description: 'Your complete brand identity foundation.',
        price: 'R1 000 – R3 000',
        features: ['All Standard features', 'Color palette & typography', 'Social media profile & cover design'],
      },
      {
        title: 'Logo Refresh',
        description: 'A modern update while keeping brand recognition.',
        price: 'R200 – R800',
        features: ['Modernised version', 'Vector files', 'Optional typography update'],
      },
      {
        title: 'Icon Suite',
        description: 'Custom icons or monograms for apps, social media, or print.',
        price: 'R250 – R600',
        features: ['3–5 icons or monograms', 'Consistent color & style'],
      },
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
      {
        title: 'Business Basics',
        description: 'Essential branded documents for new businesses or professionals.',
        price: 'R200 – R400 / item',
        features: ['Email signature', 'Letterhead', 'Business cards'],
      },
      {
        title: 'Product & Packaging',
        description: 'Ideal for small product-based businesses and boutiques.',
        price: 'R500 – R2 500',
        features: ['Label / jar / box design', 'Sticker designs', 'Print-ready packaging layout'],
      },
      {
        title: 'Corporate & Publication',
        description: 'Professional long-format layouts for business use.',
        price: 'R800 – R3 000',
        features: ['Magazine ads A4/DPS', 'Business branding signs'],
      },
      {
        title: 'Event & Personal Print',
        description: 'For weddings, birthdays, and special occasions.',
        price: 'R250 – R1 500',
        features: ['Invitation set', 'Save-the-date card', 'Thank-you card', 'Menu design'],
      },
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
    label: 'Digital & Web',
    tagline: 'From websites to web banners — every pixel with purpose.',
    plans: [
      {
        title: 'Website Graphic Set',
        description: 'For businesses needing simple, clean visuals for their site.',
        price: 'R650 – R1 200',
        features: ['Hero banner', 'CTA button graphic', 'Footer / sidebar visual', 'Profile + cover banner', 'Instagram stories & highlights'],
      },
      {
        title: 'Full Website Graphics Pack',
        description: 'For a full site launch or complete visual refresh.',
        price: 'R1 500 – R3 500',
        features: ['Desktop + mobile hero banner', '3 section graphics', '3 custom icons or badges', 'All files for web + mobile'],
      },
      {
        title: 'Social + Web Launch Combo',
        description: 'Matching visuals across website + social platforms.',
        price: 'R1 500 – R3 000',
        features: ['Website hero banner', '3 web section graphics', '3 branded Instagram posts', '5-icon story highlight set'],
      },
      {
        title: 'Website Build + Hosting',
        description: 'A fully integrated website with development, hosting, and custom branding.',
        price: 'R3 000 – R6 000',
        features: ['Fully built website (1–6 pages)', 'Custom graphics & banners', 'Mobile + tablet responsive', 'Hosting & domain setup', 'Light / dark mode'],
      },
      {
        title: 'Digital Ad Campaign Kit',
        description: 'Branding that carries across email + web presence.',
        price: 'R1 000 – R2 000',
        features: ['5 ad sizes (square, landscape, vertical)', 'Facebook & Instagram ads', 'Email header banner', 'Favicon + branded button set'],
      },
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
    <section id="portfolio" className="py-24 px-6 bg-cream-dark dark:bg-brand-card">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-accent dark:text-accent-soft font-medium mb-3">
            My Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink dark:text-white">
            Design Portfolio
          </h2>
        </div>

        {/* Tab bar — dropdown on mobile, pills on desktop */}
        <div className="mb-10">
          {/* Mobile select */}
          <div className="sm:hidden">
            <select
              value={active}
              onChange={e => setActive(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm font-medium bg-cream-dark dark:bg-brand-card text-ink dark:text-white border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-accent/40"
            >
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>
          {/* Desktop pills */}
          <div className="hidden sm:flex justify-center">
            <div className="inline-flex bg-cream-dark dark:bg-brand-card rounded-xl p-1 gap-1">
              {categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === c.id
                      ? 'bg-accent dark:bg-accent-soft text-white dark:text-brand-dark shadow-md font-semibold'
                      : 'text-ink-soft dark:text-slate-400 hover:text-ink dark:hover:text-slate-200'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab content — key forces remount + fade-in on switch */}
        <div key={active} className="tab-content">
          {/* Slideshow first so it's immediately visible after tab switch */}
          <p className="text-center text-sm italic text-ink-soft dark:text-slate-400 mb-6">
            {cat.tagline}
          </p>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.plans.map((plan, i) => (
              <PricingCard key={plan.title} {...plan} featured={i === 1} />
            ))}
          </div>

          {/* Section divider */}
          <div className="flex items-center gap-4 mt-6 mb-4">
            <div className="flex-1 h-px bg-slate-200 dark:bg-white/[0.06]" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-ink-soft/40 dark:text-slate-600">
              Work Samples
            </span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-white/[0.06]" />
          </div>

          <Slideshow key={active} images={cat.slides} />

          {/* Get a Quote CTA */}
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent dark:bg-accent-soft text-white dark:text-brand-dark font-medium text-sm hover:bg-accent/90 dark:hover:bg-accent-soft/90 hover:scale-[1.02] transition-all duration-200 shadow-md"
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
