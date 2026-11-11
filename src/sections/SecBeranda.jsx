import './SecBeranda.css'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
}

const stats = [
  { ico: '👥', val: '127',  lab: 'Jumlah Warga' },
  { ico: '🏠', val: '38',   lab: 'Kepala Keluarga' },
  { ico: '🧒', val: '24',   lab: 'Anak & Remaja' },
  { ico: '👴', val: '19',   lab: 'Lansia' },
]

const pengumuman = [
  { ico: '📢', judul: 'Jadwal Ronda Malam Bulan November',   tgl: '1 Nov 2026' },
  { ico: '🗑️', judul: 'Gotong Royong Kebersihan Lingkungan', tgl: '3 Nov 2026' },
  { ico: '💉', judul: 'Posyandu Balita & Lansia Minggu Ini', tgl: '5 Nov 2026' },
]

const kegiatan = [
  { ico: '🎉', judul: 'Perayaan HUT RT 004 ke-15',      tgl: '20 Okt 2026', kat: 'Sosial' },
  { ico: '🏗️', judul: 'Perbaikan Pagar Mushola Bersama', tgl: '12 Okt 2026', kat: 'Gotong Royong' },
  { ico: '🌱', judul: 'Penanaman Pohon di Lingkungan RT', tgl: '5 Okt 2026',  kat: 'Lingkungan' },
]

export default function SecBeranda() {
  return (
    <section id="beranda" className="sec-beranda">
      {/* Hero */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="container hero-wrap">
          <div className="hero-text">
            <div className="hero-pill">🏘️ Website Resmi Warga</div>
            <h1>
              Selamat Datang,<br />
              Warga <span className="hl">RT 004</span> / RW 007
            </h1>
            <p>
              Portal informasi, pengumuman, dan kegiatan warga RT 004 RW 007
              Desa Timbul, Kecamatan Prambanan, Sleman.
            </p>
            <div className="hero-btns">
              <button className="btn btn-secondary" onClick={() => scrollTo('pengumuman')}>
                📢 Pengumuman
              </button>
              <button className="btn btn-white" onClick={() => scrollTo('profil')}>
                👤 Profil RT
              </button>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="stats-strip">
          <div className="container stats-grid">
            {stats.map(s => (
              <div key={s.lab} className="stat">
                <span className="stat-ico">{s.ico}</span>
                <span className="stat-val">{s.val}</span>
                <span className="stat-lab">{s.lab}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pengumuman terbaru */}
      <div className="inner-sec">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="label">📢 Terbaru</span>
              <h2>Pengumuman RT</h2>
            </div>
            <button className="btn btn-outline" onClick={() => scrollTo('pengumuman')}>
              Lihat Semua →
            </button>
          </div>
          <div className="peng-list">
            {pengumuman.map((p, i) => (
              <div key={i} className="peng-item">
                <span className="peng-ico">{p.ico}</span>
                <div className="peng-body">
                  <strong>{p.judul}</strong>
                  <span>📅 {p.tgl}</span>
                </div>
                <button className="peng-arrow" onClick={() => scrollTo('pengumuman')}>→</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kegiatan terbaru */}
      <div className="inner-sec inner-soft">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="label">🎯 Kegiatan</span>
              <h2>Kegiatan Warga</h2>
            </div>
            <button className="btn btn-outline" onClick={() => scrollTo('kegiatan')}>
              Lihat Semua →
            </button>
          </div>
          <div className="keg-grid">
            {kegiatan.map((k, i) => (
              <div key={i} className="keg-card">
                <span className="keg-ico">{k.ico}</span>
                <span className="keg-kat">{k.kat}</span>
                <h3>{k.judul}</h3>
                <span className="keg-tgl">📅 {k.tgl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Ada Keperluan atau Laporan?</h2>
            <p>Hubungi langsung pengurus RT 004 / RW 007</p>
          </div>
          <div className="cta-btns">
            <a href="https://wa.me/628123456789" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp Ketua RT
            </a>
            <button className="btn btn-white" onClick={() => scrollTo('kontak')}>
              📬 Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
