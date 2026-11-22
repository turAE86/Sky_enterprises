import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Compliance', to: '/compliance' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToTop = () => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <NavLink
          to="/"
          className="brand-block"
          aria-label="Sky Cargo home"
          onClick={scrollToTop}
          style={{ gap: '0' }}
        >
          <img className="brand-logo" src="/image-removebg-preview.png" alt="Sky" style={{ width: '5rem' }} />
          <div className="brand-copy">
            <small style={{ fontSize: '1.2rem', whiteSpace: 'nowrap' }}>Enterprises</small>
          </div>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              onClick={scrollToTop}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="mobile-navigation"
          className={`mobile-nav ${menuOpen ? 'open' : ''}`}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              onClick={scrollToTop}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink className="mobile-nav-button" to="/contact" onClick={scrollToTop}>
            Request a Quote
          </NavLink>
        </nav>

        <NavLink className="nav-button" to="/contact">
          Request a Quote
        </NavLink>
      </div>
    </header>
  )
}
