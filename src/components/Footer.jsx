import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Brand */}
        <div className="f-brand">
          <Link to="/" className="f-logo">
            <div className="f-ico">🏘️</div>
            <div>
              <span className="f-name">RT 004 / RW 007</span>
              <span className="f-sub">Desa Timbul, Prambanan</span>
            </div>
          </Link>
          <p>Portal resmi warga RT 004 RW 007 Desa Timbul, Kecamatan Prambanan, Kabupaten Sleman, D.I. Yogyakarta.</p>
          <div className="f-sosmed">
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
          </div>
        </div>

        {/* Nav */}
        <div className="f-links">
          <h4>Menu</h4>
          <ul>
            {[
              { l:'Beranda',    to:'/' },
              { l:'Profil RT',  to:'/profil' },
              { l:'Kegiatan',   to:'/kegiatan' },
              { l:'Pengumuman', to:'/pengumuman' },
              { l:'Galeri',     to:'/galeri' },
              { l:'Kontak',     to:'/kontak' },
            ].map(x => <li key={x.to}><Link to={x.to}>{x.l}</Link></li>)}
          </ul>
        </div>

        {/* Kontak */}
        <div className="f-links">
          <h4>Kontak Pengurus</h4>
          <div className="f-kontak">
            <p>🏘️ RT 004 / RW 007</p>
            <p>📍 Desa Timbul, Prambanan, Sleman</p>
            <a href="tel:08123456789">📱 Ketua: 0812-3456-7890</a>
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp RT 004
            </a>
          </div>
        </div>
      </div>

      <div className="f-bottom">
        <div className="container f-bottom-inner">
          <p>© {new Date().getFullYear()} RT 004 / RW 007 — Desa Timbul, Prambanan, Sleman</p>
        </div>
      </div>
    </footer>
  )
}
