import './Footer.css'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
}

const menu = [
  { label:'Beranda',    id:'beranda' },
  { label:'Profil RT',  id:'profil' },
  { label:'Kegiatan',   id:'kegiatan' },
  { label:'Pengumuman', id:'pengumuman' },
  { label:'Galeri',     id:'galeri' },
  { label:'Kontak',     id:'kontak' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Brand */}
        <div className="f-brand">
          <button className="f-logo" onClick={() => scrollTo('beranda')}>
            <div className="f-ico">🏘️</div>
            <div>
              <span className="f-name">RT 004 / RW 007</span>
              <span className="f-sub">Desa Timbul, Prambanan</span>
            </div>
          </button>
          <p>Portal resmi warga RT 004 RW 007 Desa Timbul, Kecamatan Prambanan, Kabupaten Sleman, D.I. Yogyakarta.</p>
          <div className="f-sosmed">
            <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
          </div>
        </div>

        {/* Menu */}
        <div className="f-links">
          <h4>Menu</h4>
          <ul>
            {menu.map(m => (
              <li key={m.id}>
                <button onClick={() => scrollTo(m.id)}>{m.label}</button>
              </li>
            ))}
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
        <div className="container">
          <p>© {new Date().getFullYear()} RT 004 / RW 007 — Desa Timbul, Prambanan, Sleman</p>
        </div>
      </div>
    </footer>
  )
}
