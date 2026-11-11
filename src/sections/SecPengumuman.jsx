import { useState } from 'react'
import './SecPengumuman.css'

const data = [
  { id:1, ico:'📢', jenis:'Penting',  judul:'Jadwal Ronda Malam Bulan November 2026',       tgl:'1 Nov 2026',  isi:'Jadwal ronda malam bulan November telah ditetapkan. Setiap KK mendapat giliran 2x dalam sebulan. Jadwal lengkap dapat dilihat di papan pengumuman RT atau hubungi Ketua RT.' },
  { id:2, ico:'🗑️', jenis:'Kegiatan', judul:'Gotong Royong Kebersihan — Minggu, 10 Nov',    tgl:'3 Nov 2026',  isi:'Diberitahukan kepada seluruh warga RT 004 untuk mengikuti gotong royong kebersihan lingkungan pada hari Minggu, 10 November 2026 mulai pukul 07.00 WIB.' },
  { id:3, ico:'💉', jenis:'Kesehatan', judul:'Posyandu Balita & Lansia Minggu ke-2',         tgl:'5 Nov 2026',  isi:'Posyandu balita dilaksanakan Senin, 11 November 2026 pukul 09.00 di rumah Bu Sri Rahayu. Posyandu lansia Kamis, 14 November 2026 pukul 09.00 di Balai RT.' },
  { id:4, ico:'💰', jenis:'Iuran',     judul:'Reminder Iuran Kas RT Bulan November',         tgl:'2 Nov 2026',  isi:'Mengingatkan seluruh warga untuk membayar iuran kas RT bulan November sebesar Rp 20.000/KK. Batas pembayaran tanggal 15 November.' },
  { id:5, ico:'🎉', jenis:'Acara',     judul:'Undangan Rapat Warga Bulanan — 15 Nov',        tgl:'10 Nov 2026', isi:'Rapat warga bulanan akan dilaksanakan pada Sabtu, 15 November 2026 pukul 19.30 WIB di Balai RT. Agenda: evaluasi kegiatan dan perencanaan akhir tahun.' },
  { id:6, ico:'🌧️', jenis:'Penting',  judul:'Waspada Musim Hujan — Cek Selokan Rumah',    tgl:'28 Okt 2026', isi:'Memasuki musim hujan, warga diminta untuk memeriksa dan membersihkan selokan di sekitar rumah masing-masing.' },
]

const jenis = ['Semua','Penting','Kegiatan','Kesehatan','Iuran','Acara']
const warna = { Penting:'#fee2e2', Kegiatan:'#dcfce7', Kesehatan:'#dbeafe', Iuran:'#fef9c3', Acara:'#ede9fe' }

export default function SecPengumuman() {
  const [aktif, setAktif] = useState('Semua')
  const [buka,  setBuka]  = useState(null)

  const list = aktif === 'Semua' ? data : data.filter(d => d.jenis === aktif)

  return (
    <section id="pengumuman" className="sec-pengumuman">
      <div className="sec-banner">
        <div className="container">
          <span className="label label-white">📢 Informasi RT</span>
          <h2>Pengumuman RT 004</h2>
          <p>Informasi dan pengumuman resmi dari pengurus RT 004 / RW 007.</p>
        </div>
      </div>

      <div className="container sec-body">
        <div className="filter-wrap">
          {jenis.map(j => (
            <button
              key={j}
              className={'filter-btn' + (aktif === j ? ' active' : '')}
              onClick={() => setAktif(j)}
            >
              {j}
            </button>
          ))}
        </div>

        <div className="peng-list">
          {list.map(p => (
            <div key={p.id} className="peng-card" onClick={() => setBuka(p)}>
              <div className="peng-left" style={{ background: warna[p.jenis] || '#f3f4f6' }}>
                <span className="peng-ico">{p.ico}</span>
              </div>
              <div className="peng-mid">
                <span className="peng-jenis">{p.jenis}</span>
                <h3>{p.judul}</h3>
                <p className="peng-preview">{p.isi}</p>
              </div>
              <div className="peng-right">
                <span className="peng-tgl">📅 {p.tgl}</span>
                <span className="peng-btn">Baca →</span>
              </div>
            </div>
          ))}
        </div>

        {list.length === 0 && (
          <p className="kosong">Tidak ada pengumuman untuk kategori ini.</p>
        )}
      </div>

      {buka && (
        <div className="overlay" onClick={() => setBuka(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-x" onClick={() => setBuka(null)} aria-label="Tutup">✕</button>
            <div className="modal-head" style={{ background: warna[buka.jenis] || '#f3f4f6' }}>
              <span className="modal-ico">{buka.ico}</span>
              <span className="peng-jenis">{buka.jenis}</span>
            </div>
            <div className="modal-body">
              <h2>{buka.judul}</h2>
              <p className="modal-tgl">📅 {buka.tgl}</p>
              <p className="modal-isi">{buka.isi}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
