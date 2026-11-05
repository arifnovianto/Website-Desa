import { useState } from 'react'
import './Galeri.css'

const galeriItems = [
  { id: 1, emoji: '🏗️', judul: 'Pembangunan Jalan Desa', kategori: 'Infrastruktur', bg: '#fef3c7' },
  { id: 2, emoji: '🎭', judul: 'Festival Merti Desa 2026', kategori: 'Budaya', bg: '#ede9fe' },
  { id: 3, emoji: '🌾', judul: 'Panen Raya Kelompok Tani', kategori: 'Pertanian', bg: '#dcfce7' },
  { id: 4, emoji: '🏫', judul: 'PAUD Desa Timbul', kategori: 'Pendidikan', bg: '#dbeafe' },
  { id: 5, emoji: '🤝', judul: 'Gotong Royong Warga', kategori: 'Sosial', bg: '#fce7f3' },
  { id: 6, emoji: '💧', judul: 'Sistem Irigasi Baru', kategori: 'Infrastruktur', bg: '#cffafe' },
  { id: 7, emoji: '🎪', judul: 'Lomba HUT Kemerdekaan', kategori: 'Budaya', bg: '#fef9c3' },
  { id: 8, emoji: '🏥', judul: 'Posyandu Balita', kategori: 'Kesehatan', bg: '#ffe4e6' },
  { id: 9, emoji: '💻', judul: 'Pelatihan Digital UMKM', kategori: 'UMKM', bg: '#f0fdf4' },
]

const kategori = ['Semua', 'Infrastruktur', 'Budaya', 'Pertanian', 'Pendidikan', 'Sosial', 'Kesehatan', 'UMKM']

export default function Galeri() {
  const [aktif, setAktif] = useState('Semua')
  const [lightbox, setLightbox] = useState(null)

  const filtered = aktif === 'Semua' ? galeriItems : galeriItems.filter(g => g.kategori === aktif)

  return (
    <section className="galeri section" id="galeri">
      <div className="container">
        <div className="section-header">
          <span className="badge">📸 Dokumentasi</span>
          <h2 className="section-title">Galeri Desa Timbul</h2>
          <p className="section-subtitle">
            Kumpulan dokumentasi kegiatan dan pembangunan di Desa Timbul dari waktu ke waktu.
          </p>
        </div>

        <div className="galeri-filter">
          {kategori.map(k => (
            <button
              key={k}
              className={`filter-btn ${aktif === k ? 'active' : ''}`}
              onClick={() => setAktif(k)}
            >
              {k}
            </button>
          ))}
        </div>

        <div className="galeri-grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="galeri-item"
              style={{ background: item.bg }}
              onClick={() => setLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setLightbox(item)}
              aria-label={`Lihat foto ${item.judul}`}
            >
              <div className="galeri-thumb">
                <span className="galeri-emoji">{item.emoji}</span>
              </div>
              <div className="galeri-info">
                <span className="galeri-kat">{item.kategori}</span>
                <p className="galeri-judul">{item.judul}</p>
              </div>
              <div className="galeri-hover">
                <span>🔍 Lihat Detail</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Tutup">✕</button>
              <div className="lightbox-img" style={{ background: lightbox.bg }}>
                <span className="lightbox-emoji">{lightbox.emoji}</span>
              </div>
              <div className="lightbox-info">
                <span className="galeri-kat">{lightbox.kategori}</span>
                <h3>{lightbox.judul}</h3>
                <p>Dokumentasi kegiatan Desa Timbul — {lightbox.kategori}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
