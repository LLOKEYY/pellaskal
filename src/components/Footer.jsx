import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Αρχική' },
  { to: '/contact', label: 'Επικοινωνία' },
]

const contactItems = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 15.92z"/>
      </svg>
    ),
    value: '+30 2310 000000',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    value: 'info@pellaskal.gr',
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    value: 'Εγνατία 25, Θεσσαλονίκη 546 30',
  },
]

const hoursItems = [
  { day: 'Δευτέρα – Παρασκευή', time: '08:00 – 17:00' },
  { day: 'Σάββατο', time: '09:00 – 14:00' },
  { day: 'Κυριακή', time: 'Κλειστά' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Amber top border */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        {/* Tagline */}
        <div className="mb-12 text-center">
          <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">Pellaskal</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Ασφάλεια &amp; Αξιοπιστία{' '}
            <span className="text-primary">σε κάθε Έργο</span>
          </h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Column 1 — Πλοήγηση */}
          <div>
            <h4 className="text-primary font-bold text-[11px] uppercase tracking-[0.18em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary/60" />
              Πλοήγηση
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group flex items-center gap-2 text-white/60 text-sm font-medium hover:text-primary transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-primary transition-colors duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Επικοινωνία */}
          <div>
            <h4 className="text-primary font-bold text-[11px] uppercase tracking-[0.18em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary/60" />
              Επικοινωνία
            </h4>
            <ul className="space-y-3.5">
              {contactItems.map(({ icon, value }) => (
                <li key={value} className="flex items-start gap-3 text-sm text-white/60">
                  <span className="text-primary/80 mt-px flex-shrink-0">{icon}</span>
                  <span className="font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Ωράριο */}
          <div>
            <h4 className="text-primary font-bold text-[11px] uppercase tracking-[0.18em] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary/60" />
              Ωράριο
            </h4>
            <ul className="space-y-3">
              {hoursItems.map(({ day, time }) => (
                <li key={day} className="flex items-start justify-between gap-4 text-sm">
                  <span className="text-white/55 font-medium">{day}</span>
                  <span
                    className={`font-semibold flex-shrink-0 ${
                      time === 'Κλειστά' ? 'text-white/30' : 'text-white/80'
                    }`}
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <img src="/logo.png" alt="Pellaskal" className="h-7 w-auto opacity-60" />
          <p className="text-white/30 text-xs text-center">
            © {new Date().getFullYear()} Pellaskal. Όλα τα δικαιώματα διατηρούνται.
          </p>
        </div>
      </div>
    </footer>
  )
}
