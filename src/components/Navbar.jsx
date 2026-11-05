import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Profil Desa', href: '#profil' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Berita', href: '#berita' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#beranda')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <a href="#beranda" className="navbar-brand" onClick={() => handleLinkClick('#beranda')}>
          <div className="brand-icon">
            <span>🌿</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Desa Timbul</span>
            <span className="brand-sub">Kec. Prambanan, Sleman</span>
          </div>
        </a>

        {/* Nav Links Desktop */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#layanan" className="btn btn-primary navbar-cta">
          Layanan Online
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeLink === link.href ? 'active' : ''}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#layanan" className="btn btn-primary mobile-cta" onClick={() => setMenuOpen(false)}>
              Layanan Online
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
