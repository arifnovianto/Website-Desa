import { useState } from 'react'
import './SecGaleri.css'

const items = [
  { id:1, ico:'🎉', judul:'HUT RT 004 ke-15',             kat:'Acara',         bg:'#fef3c7', tgl:'20 Okt 2026' },
  { id:2, ico:'🏗️', judul:'Perbaikan Pagar Mushola',      kat:'Gotong Royong', bg:'#dcfce7', tgl:'12 Okt 2026' },
  { id:3, ico:'🌱', judul:'Penanaman Pohon Lingkungan',    kat:'Lingkungan',    bg:'#f0fdf4', tgl:'5 Okt 2026'  },
  { id:4, ico:'💉', judul:'Posyandu Balita Oktober',       kat:'Kesehatan',     bg:'#dbeafe', tgl:'13 Okt 2026' },
  { id:5, ico:'🗑️', judul:'Kerja Bakti Bersih Selokan',   kat:'Gotong Royong', bg:'#ecfdf5', tgl:'28 Sep 2026' },
  { id:6, ico:'🤝', judul:'Santunan Anak Yatim RT 004',    kat:'Sosial',        bg:'#fce7f3', tgl:'15 Sep 2026' },
  { id:7, ico:'🎓', judul:'Bimbel Gratis Anak-anak',       kat:'Pendidikan',    bg:'#ede9fe', tgl:'1 Okt 2026'  },
  { id:8, ico:'🌙', judul:'Pembentukan Grup Ronda Baru',   kat:'Keamanan',      bg:'#f1f5f9', tgl:'3 Okt 2026'  },
  { id:9, ico:'🍽️', judul:'Arisan Bulanan Warga RT 004',  kat:'Sosial',        bg:'#fff7ed', tgl:'10 Sep 2026' },
]

const kategori = ['Semua','Acara','Gotong Royong','Lingkungan','Kesehatan','Sosial','Pendidikan','Keamanan']

export default function SecGaleri() {
  const [aktif, setAktif] = useState('Semua')
  const [pilih, setPilih] = useState(null)

  const list = aktif === 'Semua' ? items : items.filter(g => g.kat === aktif)

  return (
    <section id="galeri" className="sec-galeri">
      <div className="sec-banner">
        <div className="container">
          <span className="label label-white">📸 Dokumentasi</span>
          <h2>Galeri RT 004 / RW 007</h2>
          <p>Dokumentasi momen dan kegiatan warga dari waktu ke waktu.</p>
        </div>
      </div>

      <div className="container sec-body">
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

        <div className="galeri-grid">
          {list.map(item => (
            <div
              key={item.id}
              className="galeri-card"
              style={{ background: item.bg }}
              onClick={() => setPilih(item)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setPilih(item)}
              aria-label={`Lihat ${item.judul}`}
            >
              <div className="gc-thumb">
                <span className="gc-ico">{item.ico}</span>
              </div>
              <div className="gc-info">
                <span className="gc-kat">{item.kat}</span>
                <p className="gc-judul">{item.judul}</p>
              </div>
              <div className="gc-hover"><span>🔍 Detail</span></div>
            </div>
          ))}
        </div>
      </div>

      {pilih && (
        <div className="overlay" onClick={() => setPilih(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-x" onClick={() => setPilih(null)} aria-label="Tutup">✕</button>
            <div className="lb-img" style={{ background: pilih.bg }}>
              <span className="lb-ico">{pilih.ico}</span>
            </div>
            <div className="lb-info">
              <span className="gc-kat">{pilih.kat}</span>
              <h3>{pilih.judul}</h3>
              <p>📅 {pilih.tgl}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
