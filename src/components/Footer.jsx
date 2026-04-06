import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-bark text-cream/70 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/treelogo.png"
              alt="CommonGround"
              className="h-8 w-8 object-contain opacity-80"
            />
            <span className="font-display text-lg font-medium text-cream/90">
              CommonGround
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/features', label: 'Features' },
              { to: '/download', label: 'Download' },
              { to: '/about', label: 'About' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="font-body text-sm tracking-wide hover:text-cream transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-body text-sm tracking-wide text-cream/40">
            © {new Date().getFullYear()} CommonGround
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-cream/10 text-center">
          <p className="font-body text-xs text-cream/30 tracking-widest uppercase">
            Built by students, for students · University of Utah
          </p>
        </div>
      </div>
    </footer>
  )
}
