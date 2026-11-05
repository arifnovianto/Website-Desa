import { useState } from 'react'
import './Berita.css'

const beritaList = [
  {
    id: 1,
    kategori: 'Pembangunan',
    judul: 'Pembangunan Jalan Desa Tahap III Dimulai Bulan Ini',
    ringkasan: 'Pemerintah desa memulai pembangunan jalan cor beton sepanjang 1,2 km yang menghubungkan Dusun Nayan dengan Dusun Kranon. Proyek ini menggunakan Dana Desa tahun 2026.',
    tanggal: '28 Oktober 2026',
    emoji: '🏗️',
    warna: 'orange',
  },
  {
    id: 2,
    kategori: 'Sosial',
    judul: 'Bakti Sosial dan Pemeriksaan Kesehatan Gratis Warga',
    ringkasan: 'Dalam rangka HUT Desa ke-76, pemerintah desa bersama Puskesmas menyelenggarakan pemeriksaan kesehatan gratis bagi 200 warga Desa Timbul.',
    tanggal: '15 Oktober 2026',
    emoji: '❤️',
    warna: 'pink',
  },
  {
    id: 3,
    kategori: 'Pengumuman',
    judul: 'Pendaftaran BLT Dana Desa Tahap IV Dibuka',
    ringkasan: 'Bagi warga yang memenuhi syarat, pendaftaran BLT Dana Desa tahap IV dibuka mulai tanggal 1-15 November 2026 di kantor desa.',
    tanggal: '1 November 2026',
    emoji: '📢',
    warna: 'blue',
  },
  {
    id: 4,
    kategori: 'Budaya',
    judul: 'Festival Merti Desa Timbul Sukses Digelar',
    ringkasan: 'Festival Merti Desa tahun ini diikuti oleh 6 dusun dengan berbagai pertunjukan seni budaya, wayang kulit, dan pameran produk UMKM lokal.',
    tanggal: '20 September 2026',
    emoji: '🎭',
    warna: 'purple',
  },
  {
    id: 5,
    kategori: 'Pertanian',
    judul: 'Kelompok Tani Timbul Raih Penghargaan Nasional',
    ringkasan: 'Kelompok Tani Makmur Sejahtera berhasil meraih penghargaan sebagai kelompok tani berprestasi tingkat nasional dari Kementerian Pertanian.',
    tanggal: '10 September 2026',
    emoji: '🏆',
    warna: 'green',
  },
  {
    id: 6,
    kategori: 'UMKM',
    judul: 'Pelatihan Digital Marketing untuk UMKM Desa',
    ringkasan: 'Sebanyak 45 pelaku UMKM Desa Timbul mengikuti pelatihan digital marketing dan pembuatan toko online yang difasilitasi oleh Dinas Koperasi Sleman.',
    tanggal: '5 September 2026',
    emoji: '💻',
    warna: 'teal',
  },
]

const kategoriList = ['Semua', 'Pembangunan', 'Sosial', 'Pengumuman', 'Budaya', 'Pertanian', 'UMKM']

export default function Berita() {
  const [aktifKategori, setAktifKategori] = useState('Semua')

  const filtered = aktifKategori === 'Semua'
    ? beritaList
    : beritaList.filter(b => b.kategori === aktifKategori)

  return (
    <section className="berita section" id="berita">
      <div className="container">
        <div className="section-header">
          <span className="badge">📰 Informasi Terkini</span>
          <h2 className="section-title">Berita & Pengumuman</h2>
          <p className="section-subtitle">
            Dapatkan informasi terbaru seputar kegiatan dan pengumuman resmi dari Desa Timbul.
          </p>
        </div>

        {/* Filter */}
        <div className="berita-filter">
          {kategoriList.map(kat => (
            <button
              key={kat}
              className={`filter-btn ${aktifKategori === kat ? 'active' : ''}`}
              onClick={() => setAktifKategori(kat)}
            >
              {kat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="berita-grid">
          {filtered.map((b) => (
            <article key={b.id} className={`berita-card berita-${b.warna}`}>
              <div className="berita-emoji">{b.emoji}</div>
              <div className="berita-kategori-badge">{b.kategori}</div>
              <h3 className="berita-judul">{b.judul}</h3>
              <p className="berita-ringkasan">{b.ringkasan}</p>
              <div className="berita-foot">
                <span className="berita-tanggal">📅 {b.tanggal}</span>
                <button className="berita-read">Selengkapnya →</button>
              </div>
            </article>
          ))}
        </div>

        <div className="berita-more">
          <button className="btn btn-outline">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </section>
  )
}
