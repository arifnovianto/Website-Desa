import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="brand-icon">🌿</div>
              <div>
                <span className="brand-name">Desa Timbul</span>
                <span className="brand-sub">Kec. Prambanan, Sleman</span>
              </div>
            </div>
            <p className="footer-desc">
              Website resmi Desa Timbul, Kecamatan Prambanan, Kabupaten Sleman,
              Daerah Istimewa Yogyakarta. Melayani dengan sepenuh hati.
            </p>
            <div className="footer-sosmed">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="YouTube">▶️</a>
              <a href="#" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4>Navigasi</h4>
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#profil">Profil Desa</a></li>
              <li><a href="#layanan">Layanan</a></li>
              <li><a href="#berita">Berita</a></li>
              <li><a href="#galeri">Galeri</a></li>
              <li><a href="#kontak">Kontak</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Layanan Online</h4>
            <ul>
              <li><a href="#">Surat Keterangan</a></li>
              <li><a href="#">Pengantar KTP/KK</a></li>
              <li><a href="#">Izin Usaha</a></li>
              <li><a href="#">Pengaduan Warga</a></li>
              <li><a href="#">Info APBDes</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Informasi</h4>
            <ul>
              <li><a href="#">Peraturan Desa</a></li>
              <li><a href="#">APBDes 2026</a></li>
              <li><a href="#">RPJM Desa</a></li>
              <li><a href="#">Monografi Desa</a></li>
              <li><a href="#">Pengumuman</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Desa Timbul — Kecamatan Prambanan, Sleman, DIY. Hak cipta dilindungi.</p>
          <div className="footer-bottom-links">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
