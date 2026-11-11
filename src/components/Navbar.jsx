import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Beranda',    id: 'beranda' },
  { label: 'Profil RT',  id: 'profil' },
  { label: 'Kegiatan',   id: 'kegiatan' },
  { label: 'Pengumuman', id: 'pengumuman' },
  { label: 'Galeri',     id: 'galeri' },
  { label: 'Kontak',     id: 'kontak' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 68 // tinggi navbar
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('beranda')

  // detect scroll & active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      // tentukan section yang sedang terlihat
      const offsets = links.map(l => {
        const el = document.getElementById(l.id)
        if (!el) return { id: l.id, top: Infinity }
        return { id: l.id, top: Math.abs(el.getBoundingClientRect().top - 80) }
      })
      const nearest = offsets.reduce((a, b) => (a.top < b.top ? a : b))
      setActiveId(nearest.id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  const isHome = activeId === 'beranda'
  const transparent = isHome && !scrolled

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}${transparent ? ' transparent' : ''}`}>
      <div className="container nav-inner">
        {/* Logo */}
        <button className="brand" onClick={() => handleClick('beranda')}>
          <div className="brand-ico">🏘️</div>
          <div className="brand-text">
            <span className="brand-name">RT 004 / RW 007</span>
            <span className="brand-sub">Desa Timbul, Prambanan</span>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="nav-list">
          {links.map(l => (
            <li key={l.id}>
              <button
                className={'nav-link' + (activeId === l.id ? ' active' : '')}
                onClick={() => handleClick(l.id)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="btn btn-primary nav-cta" onClick={() => handleClick('pengumuman')}>
          Pengumuman
        </button>

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

      {/* Mobile menu */}
      <div className={'mobile-menu' + (menuOpen ? ' open' : '')}>
        {links.map(l => (
          <button
            key={l.id}
            className={'mob-link' + (activeId === l.id ? ' active' : '')}
            onClick={() => handleClick(l.id)}
          >
            {l.label}
          </button>
        ))}
        <button className="btn btn-primary mob-cta" onClick={() => handleClick('kontak')}>
          Hubungi Kami
        </button>
      </div>
    </nav>
  )
}
