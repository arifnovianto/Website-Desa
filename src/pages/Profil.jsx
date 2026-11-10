import './Profil.css'

const pengurus = [
  { inisial: 'SH', nama: 'Suharno',         jabatan: 'Ketua RT 004',      hp: '0812-3456-7890', utama: true },
  { inisial: 'WD', nama: 'Widodo',           jabatan: 'Wakil Ketua',       hp: '0813-2345-6789', utama: false },
  { inisial: 'SR', nama: 'Sri Rahayu',       jabatan: 'Sekretaris',        hp: '0814-3456-7891', utama: false },
  { inisial: 'BU', nama: 'Budiman',          jabatan: 'Bendahara',         hp: '0815-4567-8902', utama: false },
  { inisial: 'AN', nama: 'Ani Susanti',      jabatan: 'Sie Kebersihan',    hp: '0816-5678-9013', utama: false },
  { inisial: 'TR', nama: 'Tri Handayani',    jabatan: 'Sie Kesehatan',     hp: '0817-6789-0124', utama: false },
]

const infoWilayah = [
  { label: 'RT',          val: '004' },
  { label: 'RW',          val: '007' },
  { label: 'Desa',        val: 'Timbul' },
  { label: 'Kecamatan',   val: 'Prambanan' },
  { label: 'Kabupaten',   val: 'Sleman' },
  { label: 'Provinsi',    val: 'D.I. Yogyakarta' },
  { label: 'Jumlah KK',   val: '38 KK' },
  { label: 'Jumlah Jiwa', val: '127 Jiwa' },
]

const programRutin = [
  { ico: '🗓️', nama: 'Rapat Warga Bulanan',    jadwal: 'Setiap tanggal 15',      ket: 'Wajib dihadiri KK' },
  { ico: '🗑️', nama: 'Gotong Royong',          jadwal: 'Setiap Minggu, 07.00',   ket: 'Kebersihan lingkungan RT' },
  { ico: '👶', nama: 'Posyandu Balita',         jadwal: 'Senin minggu ke-2',      ket: 'Di rumah Bu Sri' },
  { ico: '👴', nama: 'Posyandu Lansia',         jadwal: 'Kamis minggu ke-3',      ket: 'Di Balai RT' },
  { ico: '🌙', nama: 'Ronda Malam',             jadwal: 'Setiap malam, 22.00',    ket: 'Jadwal bergilir per KK' },
  { ico: '📿', nama: 'Pengajian Rutin',         jadwal: 'Kamis malam, 20.00',     ket: 'Di Mushola Al-Ikhlas' },
]

export default function Profil() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <span className="label">🏘️ Tentang Kami</span>
          <h1>Profil RT 004 / RW 007</h1>
          <p>Desa Timbul, Kecamatan Prambanan, Kabupaten Sleman, D.I. Yogyakarta</p>
        </div>
      </div>

      <div className="page-body">
        <div className="container">

          {/* Info Wilayah */}
          <section className="pr-sec">
            <h2 className="sec-title">Informasi Wilayah</h2>
            <div className="info-tabel">
              {infoWilayah.map(r => (
                <div key={r.label} className="info-row">
                  <span className="info-key">{r.label}</span>
                  <span className="info-val">{r.val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pengurus */}
          <section className="pr-sec">
            <h2 className="sec-title">Pengurus RT 004</h2>
            <div className="pengurus-grid">
              {pengurus.map(p => (
                <div key={p.inisial} className={'pengurus-card' + (p.utama ? ' utama' : '')}>
                  <div className={'avatar' + (p.utama ? ' avatar-lg' : '')}>{p.inisial}</div>
                  <div className="p-info">
                    <strong>{p.nama}</strong>
                    <span className="p-jabatan">{p.jabatan}</span>
                    <a href={'tel:' + p.hp.replace(/-/g, '')} className="p-hp">📱 {p.hp}</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Program Rutin */}
          <section className="pr-sec">
            <h2 className="sec-title">Program & Kegiatan Rutin</h2>
            <div className="program-grid">
              {programRutin.map((p, i) => (
                <div key={i} className="program-card">
                  <span className="program-ico">{p.ico}</span>
                  <div className="program-body">
                    <strong>{p.nama}</strong>
                    <span className="program-jadwal">🕐 {p.jadwal}</span>
                    <span className="program-ket">{p.ket}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
