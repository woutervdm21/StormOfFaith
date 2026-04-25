import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function InfoRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 dark:bg-accent-soft/10 text-accent dark:text-accent-soft flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-ink-soft dark:text-slate-500 mb-0.5">{label}</p>
        <p className="text-sm font-medium text-ink dark:text-slate-200">{value}</p>
      </div>
    </div>
  )

  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a>
  ) : (
    <div>{content}</div>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10 dark:bg-accent-soft/10 text-accent dark:text-accent-soft hover:bg-accent hover:text-white dark:hover:bg-accent-soft dark:hover:text-brand-dark transition-colors"
    >
      {icon}
    </a>
  )
}

export default function Contact() {
  const navigate = useNavigate()
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'First name is required.'
    if (!form.lastName.trim()) e.lastName = 'Last name is required.'
    if (!form.subject.trim()) e.subject = 'Subject is required.'
    if (!form.message.trim()) e.message = 'Message is required.'
    return e
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSending(true)
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString(),
    })
    navigate('/thank-you')
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm bg-cream dark:bg-brand-dark border text-ink dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 transition ${
      errors[field]
        ? 'border-red-400 dark:border-red-500 focus:ring-red-400/30'
        : 'border-slate-200 dark:border-white/10 focus:ring-accent/40 dark:focus:ring-accent-soft/40'
    }`

  return (
    <section id="contact" className="py-24 px-6 bg-cream-dark dark:bg-brand-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-accent dark:text-accent-soft font-medium mb-3">
            Let's Talk
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-ink-soft dark:text-slate-400 max-w-xl mx-auto text-base">
            Ready to bring your design vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-brand-dark rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-white/5 space-y-5">
              <h3 className="font-serif text-2xl text-ink dark:text-white mb-2">Contact Details</h3>
              <InfoRow
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                label="Email"
                value="stormyvisions@yahoo.com"
                href="mailto:stormyvisions@yahoo.com"
              />
              <InfoRow
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                label="Phone"
                value="+27 79 649 9728"
                href="tel:+27796499728"
              />
              <InfoRow
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                label="Location"
                value="Middelburg, South Africa"
              />
              <InfoRow
                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                label="Business Hours"
                value="Mon – Fri: 8AM – 4PM"
              />
            </div>

            <div className="bg-white dark:bg-brand-dark rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-white/5">
              <h4 className="font-serif text-xl text-ink dark:text-white mb-4">Follow Me</h4>
              <div className="flex gap-3">
                <SocialLink
                  href="https://www.instagram.com/stormoffaith3_16"
                  label="Instagram"
                  icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></svg>}
                />
                <SocialLink
                  href="https://web.facebook.com/profile.php?id=61575638911067"
                  label="Facebook"
                  icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12H17l-.5 3h-2.8v7A10 10 0 0 0 22 12z"/></svg>}
                />
                <SocialLink
                  href="https://wa.me/27796499728"
                  label="WhatsApp"
                  icon={<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>}
                />
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-white dark:bg-brand-dark rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-white/5">
            <h3 className="font-serif text-2xl text-ink dark:text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-ink-soft dark:text-slate-400 mb-1.5">First Name</label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jane" className={inputClass('firstName')} />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-soft dark:text-slate-400 mb-1.5">Last Name</label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" className={inputClass('lastName')} />
                  {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-ink-soft dark:text-slate-400 mb-1.5">Phone Number <span className="text-ink-soft/40">(optional)</span></label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="I'll call you to discuss your enquiry" className={inputClass('phone')} />
              </div>
              <div>
                <label className="block text-xs font-medium text-ink-soft dark:text-slate-400 mb-1.5">Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Design Inquiry" className={inputClass('subject')} />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-ink-soft dark:text-slate-400 mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your design..." className={inputClass('message') + ' resize-vertical'} />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3 px-6 rounded-xl font-medium text-sm bg-accent hover:bg-accent/90 dark:bg-accent-soft dark:hover:bg-accent-soft/90 text-white dark:text-brand-dark transition-all hover:scale-[1.01] disabled:opacity-60"
              >
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
