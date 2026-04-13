import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import StarBorder from './StarBorder'

// Non-active link — sized to match StarBorder's inner div (py-[16px] px-[26px] text-[16px])
function NavItem({ children }) {
  return (
    <span className="inline-block py-[16px] px-[26px] text-[16px] font-semibold text-white/75 hover:text-primary transition-colors duration-200 rounded-[20px]">
      {children}
    </span>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on navigation
  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-secondary/90 backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.55)] py-2'
            : 'bg-secondary/75 backdrop-blur-sm py-2'
        }`}
      >
        {/* Amber hairline accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/30" />

        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 focus-visible:outline-none">
            <img
              src="/logo.png"
              alt="Pellaskal"
              className="h-12 w-auto transition-opacity duration-200 hover:opacity-90"
            />
          </Link>

          {/* ── Desktop links ─────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" end>
              {({ isActive }) =>
                isActive ? (
                  <StarBorder as="span" color="#F5A623" speed="5s" thickness={1}>
                    Αρχική
                  </StarBorder>
                ) : (
                  <NavItem>Αρχική</NavItem>
                )
              }
            </NavLink>

            <NavLink to="/contact">
              {({ isActive }) =>
                isActive ? (
                  <StarBorder as="span" color="#F5A623" speed="5s" thickness={1}>
                    Επικοινωνία
                  </StarBorder>
                ) : (
                  <NavItem>Επικοινωνία</NavItem>
                )
              }
            </NavLink>

            <Link
              to="/contact"
              className="ml-3 bg-primary text-secondary font-bold text-sm px-6 py-3 rounded-xl hover:brightness-110 active:scale-95 transition-all duration-200 shadow-md shadow-primary/25"
            >
              Ζητήστε Προσφορά
            </Link>
          </div>

          {/* ── Hamburger ─────────────────────────────────────────────── */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setDrawerOpen(v => !v)}
            aria-label={drawerOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
            aria-expanded={drawerOpen}
          >
            <motion.span
              className="block h-[2px] w-5 bg-white rounded-full origin-center"
              animate={drawerOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            />
            <motion.span
              className="block h-[2px] w-5 bg-white rounded-full"
              animate={drawerOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18 }}
            />
            <motion.span
              className="block h-[2px] w-5 bg-white rounded-full origin-center"
              animate={drawerOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            />
          </button>
        </nav>
      </header>

      {/* ── Mobile backdrop ──────────────────────────────────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm md:hidden"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ── Mobile drawer ────────────────────────────────────────────── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="fixed top-0 right-0 h-full w-72 z-50 bg-secondary flex flex-col shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Μενού πλοήγησης"
          >
            {/* Amber left edge */}
            <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/80 via-primary/40 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <img src="/logo.png" alt="Pellaskal" className="h-9 w-auto" />
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-white/50 hover:text-white transition-colors p-1 rounded"
                aria-label="Κλείσιμο"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5l10 10M15 5l-10 10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1 px-3 py-5 flex-1">
              {[
                { to: '/', label: 'Αρχική', end: true },
                { to: '/contact', label: 'Επικοινωνία', end: false },
              ].map(({ to, label, end }) => (
                <NavLink key={to} to={to} end={end}>
                  {({ isActive }) => (
                    <motion.span
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold text-[15px] transition-colors duration-150 ${
                        isActive
                          ? 'text-primary bg-primary/10'
                          : 'text-white/75 hover:text-white hover:bg-white/5'
                      }`}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      )}
                      {label}
                    </motion.span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-5 pb-10">
              <div className="h-px bg-white/10 mb-6" />
              <Link
                to="/contact"
                className="block w-full bg-primary text-secondary font-bold text-sm py-3.5 rounded-xl text-center hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Ζητήστε Δωρεάν Προσφορά
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
