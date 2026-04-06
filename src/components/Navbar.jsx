import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/features', label: 'Features' },
    { to: '/download', label: 'Download' },
    { to: '/about', label: 'About' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-sand/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/treelogo.png"
            alt="CommonGround"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-lg font-medium text-bark tracking-wide">
            CommonGround
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  location.pathname === to
                    ? 'text-forest'
                    : 'text-stone hover:text-bark'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-forest transition-all duration-300 ${
                    location.pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          to="/download"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-forest text-cream text-sm font-medium font-body tracking-wide transition-all duration-200 hover:bg-moss hover:shadow-md hover:-translate-y-px"
        >
          Download
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-bark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-bark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-bark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64 border-b border-sand/50' : 'max-h-0'
        } bg-cream/98 backdrop-blur-md`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`font-body text-sm font-medium tracking-wide ${
                  location.pathname === to ? 'text-forest' : 'text-stone'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
