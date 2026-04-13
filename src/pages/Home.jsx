import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ShinyText from '../components/ShinyText'
import MetallicPaint from '../components/MetallicPaint'
import StarBorder from '../components/StarBorder'
import SpotlightCard from '../components/SpotlightCard'
import CardNav from '../components/CardNav'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

// Simple scaffold SVG for MetallicPaint decorative accent
const _scaffoldSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"><rect width="500" height="500" fill="white"/><rect x="70" y="40" width="22" height="420" fill="black"/><rect x="230" y="40" width="22" height="420" fill="black"/><rect x="390" y="40" width="22" height="420" fill="black"/><rect x="55" y="150" width="385" height="18" fill="black"/><rect x="55" y="280" width="385" height="18" fill="black"/><rect x="55" y="410" width="385" height="18" fill="black"/><polygon points="70,150 92,150 252,280 230,280" fill="black"/><polygon points="230,280 252,280 92,410 70,410" fill="black"/><polygon points="230,150 252,150 412,280 390,280" fill="black"/><polygon points="390,280 412,280 252,410 230,410" fill="black"/></svg>`
const METALLIC_SVG = `data:image/svg+xml;base64,${btoa(_scaffoldSvg)}`

// Simple text logo SVG for CardNav
const _logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="130" height="28" viewBox="0 0 130 28"><text y="21" font-family="Arial" font-weight="800" font-size="15" fill="#1A1A2E" letter-spacing="1">PELLASKAL</text></svg>`
const CARD_NAV_LOGO = `data:image/svg+xml;base64,${btoa(_logoSvg)}`

const services = [
  {
    icon: '🏗️',
    title: 'Σκαλωσιές Κτιρίων',
    desc: 'Ασφαλής τοποθέτηση για κτίρια κάθε ύψους',
  },
  {
    icon: '⚙️',
    title: 'Βιομηχανικές Σκαλωσιές',
    desc: 'Λύσεις για εργοστάσια και βιομηχανικές εγκαταστάσεις',
  },
  {
    icon: '🔩',
    title: 'Ενοικίαση Εξοπλισμού',
    desc: 'Σύγχρονος εξοπλισμός με πλήρη συντήρηση',
  },
  {
    icon: '👷',
    title: 'Τεχνική Υποστήριξη',
    desc: 'Ομάδα εμπειρογνωμόνων 24/7',
  },
]

const whyUsItems = [
  {
    label: '20+',
    bgColor: '#F5A623',
    textColor: '#1A1A2E',
    links: [
      { label: 'Χρόνια Εμπειρίας', href: '#' },
      { label: 'Αξιόπιστη παρουσία στον κλάδο από το 2004', href: '#' },
    ],
  },
  {
    label: '100%',
    bgColor: '#1A1A2E',
    textColor: '#ffffff',
    links: [
      { label: 'Πιστοποιημένοι Τεχνικοί', href: '#' },
      { label: 'Πιστοποιήσεις EN 12811 & ISO 9001', href: '#' },
    ],
  },
  {
    label: 'Pan',
    bgColor: '#2D2D50',
    textColor: '#F5A623',
    links: [
      { label: 'Πανελλαδική Κάλυψη', href: '#' },
      { label: 'Εξυπηρέτηση σε όλη την Ελλάδα', href: '#' },
    ],
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-secondary/78" />

        {/* MetallicPaint — decorative right-side accent (hidden on mobile to keep text legible) */}
        <div className="hidden md:block absolute right-0 top-0 h-full w-1/2 opacity-[0.15] pointer-events-none">
          <MetallicPaint
            imageSrc={METALLIC_SVG}
            lightColor="#FFD700"
            darkColor="#7A5500"
            tintColor="#F5A623"
            brightness={2.5}
            contrast={0.55}
            speed={0.08}
            scale={3.5}
            waveAmplitude={0.8}
            noiseScale={0.3}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32 w-full">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 max-w-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
            <span className="truncate">Pellaskal — Επαγγελματικές Σκαλωσιές Ελλάδας</span>
          </motion.div>

          {/* Main heading with ShinyText */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6"
          >
            <ShinyText
              text="Επαγγελματικές"
              color="#F5A623"
              shineColor="#FFF8DC"
              speed={3}
              spread={100}
              className="block"
            />
            <ShinyText
              text="Σκαλωσιές"
              color="#F5A623"
              shineColor="#FFFFFF"
              speed={3.5}
              spread={110}
              delay={0.5}
              className="block"
            />
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-white/72 text-xl md:text-2xl leading-relaxed mb-12 max-w-xl"
          >
            Ολοκληρωμένες λύσεις σκαλωσιών για κάθε οικοδομικό έργο στην Ελλάδα
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <StarBorder as={Link} to="/contact" color="#F5A623" speed="4s">
              Επικοινωνήστε Μαζί Μας
            </StarBorder>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section id="services" className="py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Τι Προσφέρουμε
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mt-3 mb-4">
              Οι Υπηρεσίες Μας
            </h2>
            <p className="text-secondary/55 max-w-lg mx-auto">
              Πλήρες φάσμα υπηρεσιών σκαλωσιών με αυστηρή τήρηση προτύπων ασφαλείας
            </p>
          </motion.div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(245, 166, 35, 0.28)"
                  className="h-full flex flex-col"
                >
                  <div className="text-4xl mb-5">{s.icon}</div>
                  <h3 className="font-bold text-white text-lg mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-white/58 text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-auto pt-5 border-t border-white/10">
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                      Μάθετε Περισσότερα →
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────────── */}
      <section className="py-28 bg-secondary overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Τα Πλεονεκτήματά Μας
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">
              Γιατί να μας επιλέξετε
            </h2>
            <p className="text-white/55 max-w-md mx-auto text-sm">
              Ανοίξτε τον πίνακα για να δείτε τα στατιστικά μας
            </p>
          </motion.div>

          {/* CardNav stat display */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative min-h-[320px] md:h-80"
          >
            <CardNav
              logo={CARD_NAV_LOGO}
              logoAlt="Pellaskal"
              items={whyUsItems}
              baseColor="#FFFFFF"
              menuColor="#1A1A2E"
              buttonBgColor="#F5A623"
              buttonTextColor="#1A1A2E"
            />
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────── */}
      <section className="py-28 bg-primary relative overflow-hidden">
        {/* Subtle diagonal texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-5 leading-tight">
            Έτοιμοι να ξεκινήσουμε το επόμενο έργο σας
          </h2>
          <p className="text-secondary/65 text-lg mb-12 max-w-lg mx-auto">
            Επικοινωνήστε μαζί μας σήμερα για δωρεάν εκτίμηση και προσφορά
            προσαρμοσμένη στις ανάγκες σας.
          </p>
          <StarBorder as={Link} to="/contact" color="#1A1A2E" speed="4s">
            Ζητήστε Προσφορά
          </StarBorder>
        </motion.div>
      </section>
    </>
  )
}
