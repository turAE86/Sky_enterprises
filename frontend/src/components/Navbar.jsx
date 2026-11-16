import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Compliance', to: '/compliance' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand-block" aria-label="Sky Logistics home">
          <img className="brand-logo" src="/image-removebg-preview.png" alt="Sky" style={{ width: '100px' }} />
          <div className="brand-copy">
            <small style={{ fontSize: '1.5rem'}}>Enterprises</small>
          </div>
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="nav-button" to="/contact">
          Request a Quote
        </NavLink>
      </div>
    </header>
  )
}
