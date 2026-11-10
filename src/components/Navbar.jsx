import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { label: 'Beranda',     to: '/' },
  { label: 'Profil RT',   to: '/profil' },
  { label: 'Kegiatan',    to: '/kegiatan' },
  { label: 'Pengumuman',  to: '/pengumuman' },
  { label: 'Galeri',      to: '/galeri' },
  { label: 'Kontak',      to: '/kontak' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }, [pathname])

  const transparent = isHome && !scrolled

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${transparent ? ' transparent' : ''}`}>
      <div className="container nav-inner">
        {/* Logo */}
        <NavLink to="/" className="brand">
          <div className="brand-ico">🏘️</div>
          <div className="brand-text">
            <span className="brand-name">RT 004 / RW 007</span>
            <span className="brand-sub">Desa Timbul, Prambanan</span>
          </div>
        </NavLink>

        {/* Desktop */}
        <ul className="nav-list">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink to="/pengumuman" className="btn btn-primary nav-cta">
          Pengumuman
        </NavLink>

        {/* Hamburger */}
        <button
          className={'hamburger' + (menuOpen ? ' open' : '')}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Buka menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile */}
      <div className={'mobile-menu' + (menuOpen ? ' open' : '')}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => 'mob-link' + (isActive ? ' active' : '')}
          >
            {l.label}
          </NavLink>
        ))}
        <NavLink to="/kontak" className="btn btn-primary mob-cta">
          Hubungi Kami
        </NavLink>
      </div>
    </nav>
  )
}
