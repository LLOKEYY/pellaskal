import { useState } from 'react'
import { motion } from 'framer-motion'
import ShinyText from '../components/ShinyText'
import SpotlightCard from '../components/SpotlightCard'
import StarBorder from '../components/StarBorder'

// ─── Shared input / textarea className ───────────────────────────────────────
const fieldClass =
  'w-full bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white ' +
  'placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/60 ' +
  'focus:border-primary transition-all duration-200 text-sm'

const labelClass = 'block text-xs font-bold text-white/60 uppercase tracking-widest mb-2'

// ─── Contact info items ───────────────────────────────────────────────────────
const INFO = [
  {
    icon: '📍',
    label: 'Διεύθυνση',
    value: 'Εγνατία 25, Θεσσαλονίκη 546 30',
  },
  {
    icon: '📞',
    label: 'Τηλέφωνο',
    value: '+30 2310 000000',
    href: 'tel:+302310000000',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'info@pellaskal.gr',
    href: 'mailto:info@pellaskal.gr',
  },
  {
    icon: '🕐',
    label: 'Ώρες Λειτουργίας',
    value: 'Δευτ–Παρ: 08:00–17:00',
  },
]

// ─── Animation variants ───────────────────────────────────────────────────────
const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
}

const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: 'easeOut', delay: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(e.target)).toString(),
      })
    } catch (_) {
      // Non-Netlify environment — silently continue
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <>
      {/* ── PAGE HEADER ─────────────────────────────────────────────────── */}
      <section className="bg-secondary relative overflow-hidden py-24 text-center">
        {/* Amber diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #F5A623 0, #F5A623 1px, transparent 0, transparent 50%)',
            backgroundSize: '22px 22px',
          }}
        />
        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-xl mx-auto px-6"
        >
          <span className="inline-block bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Επικοινωνία
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Μιλήστε μαζί μας
          </h1>
          <p className="text-white/55 text-lg">
            Είμαστε εδώ για να απαντήσουμε στις ερωτήσεις σας και να σας
            παρέχουμε δωρεάν εκτίμηση για το έργο σας.
          </p>
        </motion.div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* ── LEFT COLUMN ─ Info + Map ─────────────────────────────── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Section title with ShinyText */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                <ShinyText
                  text="Επικοινωνήστε"
                  color="#F5A623"
                  shineColor="#FFF8DC"
                  speed={3}
                  spread={110}
                  className="block"
                />
                <ShinyText
                  text="Μαζί Μας"
                  color="#F5A623"
                  shineColor="#FFFFFF"
                  speed={3.5}
                  spread={100}
                  delay={0.4}
                  className="block"
                />
              </h2>
              <p className="text-secondary/55 mt-3 text-sm leading-relaxed max-w-sm">
                Το εξειδικευμένο μας τμήμα πωλήσεων θα επικοινωνήσει μαζί σας
                εντός 24 ωρών.
              </p>
            </div>

            {/* Info card */}
            <SpotlightCard
              spotlightColor="rgba(245, 166, 35, 0.22)"
              className="flex flex-col gap-6"
            >
              {INFO.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex items-start gap-4"
                >
                  {/* Icon bubble */}
                  <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white/85 font-medium hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white/85 font-medium text-sm">
                        {item.value}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </SpotlightCard>

            {/* Google Maps embed — Thessaloniki city centre */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-secondary/10 ring-1 ring-black/5">
              <iframe
                title="Pellaskal — Θεσσαλονίκη"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48444.04456959305!2d22.853748649999997!3d40.629269549999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838f41428e0ad%3A0x9bae715b8d574a9!2z0KLQtdGB0YHQsNC70L7QvdC40LrQuA!5e0!3m2!1sel!2sgr!4v1700000000000!5m2!1sel!2sgr"
                width="100%"
                height="260"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN ─ Contact form ──────────────────────────── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SpotlightCard
              spotlightColor="rgba(245, 166, 35, 0.18)"
              className="flex flex-col"
            >
              {submitted ? (
                /* ── Success state ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="text-center py-10"
                >
                  <div className="text-6xl mb-5">✅</div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    Το μήνυμά σας εστάλη!
                  </h3>
                  <p className="text-white/55 text-sm mb-2">
                    Σας ευχαριστούμε για το ενδιαφέρον σας.
                  </p>
                  <p className="text-white/55 text-sm mb-8">
                    Η ομάδα μας θα επικοινωνήσει μαζί σας εντός{' '}
                    <span className="text-primary font-semibold">24 ωρών</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                      })
                    }}
                    className="text-primary font-semibold text-sm underline underline-offset-4 hover:no-underline hover:opacity-80 transition-opacity"
                  >
                    ← Αποστολή νέου μηνύματος
                  </button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <>
                  <div className="mb-7">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs">
                      Φόρμα Επικοινωνίας
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-1">
                      Στείλτε μας μήνυμα
                    </h3>
                  </div>

                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Netlify: form name + honeypot (visually hidden, not type=hidden) */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div aria-hidden="true" className="absolute -left-[9999px] opacity-0 pointer-events-none" tabIndex={-1}>
                      <label>Μην συμπληρώσετε αυτό: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
                    </div>

                    {/* Όνομα */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={0}
                    >
                      <label className={labelClass}>
                        Όνομα <span className="text-primary normal-case">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="π.χ. Γιώργος Παπαδόπουλος"
                        className={fieldClass}
                      />
                    </motion.div>

                    {/* Email + Τηλέφωνο */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={1}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                    >
                      <div>
                        <label className={labelClass}>
                          Email <span className="text-primary normal-case">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="email@example.com"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Τηλέφωνο</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+30 6900 000000"
                          className={fieldClass}
                        />
                      </div>
                    </motion.div>

                    {/* Θέμα */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={2}
                    >
                      <label className={labelClass}>Θέμα</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="π.χ. Προσφορά για σκαλωσιές"
                        className={fieldClass}
                      />
                    </motion.div>

                    {/* Μήνυμα */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={3}
                    >
                      <label className={labelClass}>
                        Μήνυμα <span className="text-primary normal-case">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Περιγράψτε το έργο σας ή τις ανάγκες σας..."
                        className={`${fieldClass} resize-none`}
                      />
                    </motion.div>

                    {/* Submit */}
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={4}
                      className="pt-1"
                    >
                      <StarBorder
                        as="button"
                        type="submit"
                        color="#F5A623"
                        speed="5s"
                        className="w-full"
                        disabled={loading}
                        style={{ opacity: loading ? 0.7 : 1 }}
                      >
                        {loading ? 'Αποστολή…' : 'Αποστολή Μηνύματος'}
                      </StarBorder>
                    </motion.div>
                  </form>
                </>
              )}
            </SpotlightCard>
          </motion.div>

        </div>
      </section>
    </>
  )
}
