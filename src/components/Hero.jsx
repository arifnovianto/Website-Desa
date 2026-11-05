import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="beranda">
      {/* Background layers */}
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">🏡 Selamat Datang di Website Resmi</div>
          <h1 className="hero-title">
            Desa <span className="highlight">Timbul</span>
            <br />Kecamatan Prambanan
          </h1>
          <p className="hero-desc">
            Mewujudkan desa yang maju, mandiri, dan sejahtera berlandaskan
            semangat gotong royong dan kearifan lokal.
          </p>
          <div className="hero-actions">
            <a href="#layanan" className="btn btn-secondary">
              <span>📋</span> Layanan Warga
            </a>
            <a href="#profil" className="btn btn-outline-white">
              <span>🔍</span> Profil Desa
            </a>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-value">4.820</div>
            <div className="stat-label">Jumlah Penduduk</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏘️</div>
            <div className="stat-value">6</div>
            <div className="stat-label">Dusun</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📍</div>
            <div className="stat-value">342 Ha</div>
            <div className="stat-label">Luas Wilayah</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌾</div>
            <div className="stat-value">1.240</div>
            <div className="stat-label">Kepala Keluarga</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#profil" className="scroll-down" aria-label="Scroll ke bawah">
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  )
}
