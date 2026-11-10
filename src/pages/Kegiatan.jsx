import { useState } from 'react'
import './Kegiatan.css'

const semua = [
  { id:1, ico:'🎉', kat:'Sosial',         judul:'Perayaan HUT RT 004 ke-15',          tgl:'20 Okt 2026', desk:'Acara syukuran dan hiburan warga dalam rangka ulang tahun RT 004 yang ke-15. Dihadiri seluruh warga dan tamu undangan.' },
  { id:2, ico:'🏗️', kat:'Gotong Royong',  judul:'Perbaikan Pagar Mushola Al-Ikhlas',  tgl:'12 Okt 2026', desk:'Gotong royong warga memperbaiki pagar mushola yang sudah lapuk. Dikerjakan bersama-sama selama 2 hari.' },
  { id:3, ico:'🌱', kat:'Lingkungan',     judul:'Penanaman 50 Pohon di Lingkungan RT', tgl:'5 Okt 2026',  desk:'Program penghijauan lingkungan dengan menanam 50 pohon di sepanjang jalan RT 004 dan area kosong warga.' },
  { id:4, ico:'🎓', kat:'Pendidikan',     judul:'Bimbel Gratis Anak-anak RT 004',      tgl:'1 Okt 2026',  desk:'Program bimbingan belajar gratis untuk anak SD dan SMP yang dilaksanakan setiap Senin-Rabu di rumah Bu Tri.' },
  { id:5, ico:'🗑️', kat:'Gotong Royong',  judul:'Kerja Bakti Bersih Selokan',          tgl:'28 Sep 2026', desk:'Pembersihan saluran air (selokan) di seluruh wilayah RT 004 untuk mencegah banjir musim hujan.' },
  { id:6, ico:'💉', kat:'Kesehatan',      judul:'Posyandu Balita Bulan Oktober',       tgl:'13 Okt 2026', desk:'Posyandu rutin bulan Oktober. Penimbangan balita, imunisasi, dan konsultasi gizi dengan bidan desa.' },
  { id:7, ico:'🌙', kat:'Keamanan',       judul:'Pembentukan Grup Ronda Baru',         tgl:'3 Okt 2026',  desk:'Pembentukan dan pembagian jadwal ronda malam yang baru untuk seluruh KK di RT 004.' },
  { id:8, ico:'🤝', kat:'Sosial',         judul:'Santunan Anak Yatim RT 004',          tgl:'15 Sep 2026', desk:'Pemberian santunan kepada 5 anak yatim di lingkungan RT 004 yang didanai dari iuran warga.' },
]

const kategori = ['Semua','Sosial','Gotong Royong','Lingkungan','Pendidikan','Kesehatan','Keamanan']

export default function Kegiatan() {
  const [aktif, setAktif] = useState('Semua')
  const [buka,  setBuka]  = useState(null)

  const list = aktif === 'Semua' ? semua : semua.filter(k => k.kat === aktif)

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <span className="label">🎯 Dokumentasi</span>
          <h1>Kegiatan Warga RT 004</h1>
          <p>Rekam jejak kegiatan dan aktivitas warga RT 004 / RW 007 dari waktu ke waktu.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="container">
          {/* Filter */}
          <div className="filter-wrap">
            {kategori.map(k => (
              <button
                key={k}
                className={'filter-btn' + (aktif === k ? ' active' : '')}
                onClick={() => setAktif(k)}
              >
                {k}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="keg-grid">
            {list.map(k => (
              <article key={k.id} className="keg-card" onClick={() => setBuka(k)}>
                <span className="keg-ico">{k.ico}</span>
                <span className="keg-kat">{k.kat}</span>
                <h3>{k.judul}</h3>
                <p className="keg-desk">{k.desk}</p>
                <div className="keg-foot">
                  <span className="keg-tgl">📅 {k.tgl}</span>
                  <span className="keg-more">Detail →</span>
                </div>
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <p className="kosong">Belum ada kegiatan untuk kategori ini.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {buka && (
        <div className="overlay" onClick={() => setBuka(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-x" onClick={() => setBuka(null)} aria-label="Tutup">✕</button>
            <span className="modal-ico">{buka.ico}</span>
            <span className="keg-kat">{buka.kat}</span>
            <h2>{buka.judul}</h2>
            <p className="modal-tgl">📅 {buka.tgl}</p>
            <p className="modal-desk">{buka.desk}</p>
          </div>
        </div>
      )}
    </div>
  )
}
