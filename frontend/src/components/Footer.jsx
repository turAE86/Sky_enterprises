import { NavLink } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Compliance', to: '/compliance' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-branding">
          <div className="brand-block footer-brand-block">
            <img className="brand-logo" src="/cropped_circle_image.png" alt="Sky" />
            <div className="brand-copy">
              <small style={{ fontSize: '1rem' }}>Warehouse &amp; Transport</small>
            </div>
          </div>

          <p>
            Your trusted partner for transportation and warehousing solutions
            across India. Safe handling, compliance-first logistics, and reliable
            support for domestic and international cargo movement.
          </p>

          <div className="social-icons" aria-label="Social channels">
            <span aria-hidden="true">in</span>
            <span aria-hidden="true">f</span>
            <span aria-hidden="true">x</span>
            <span aria-hidden="true">◎</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>
              <NavLink to="/services">Dangerous Goods Consultant</NavLink>
            </li>
            <li>
              <NavLink to="/services">Freight Forwarding</NavLink>
            </li>
            <li>
              <NavLink to="/services">UN Approved Packaging</NavLink>
            </li>
            <li>
              <NavLink to="/services">Warehousing & Storage</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-column contact-column">
          <h4>Contact Info</h4>
          <ul>
            <li>
              <a href="tel:+918828041865">📞 +91 88280 41865</a>
            </li>
            <li>
              <a href="tel:+918692918776">📞 +91 86929 18776</a>
            </li>
            <li>
              <a href="mailto:skywarehousing@gmail.com">✉️ skywarehousing@gmail.com</a>
            </li>
            <li>📍 Sakinaka, Mumbai, Maharashtra</li>
          </ul>
          <a
            href="https://maps.app.goo.gl/EYErUBHMuRNxoFU47"
            target="_blank"
            rel="noreferrer"
            className="map-link"
          >
            Open Location Map
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2025 SKY WAREHOUSE AND TRANSPORTS PVT. LTD. All rights reserved.</p>
      </div>
    </footer>
  )
}
