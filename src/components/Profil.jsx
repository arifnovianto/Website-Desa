import './Profil.css'

const visiMisi = [
  {
    type: 'Visi',
    icon: '🎯',
    content: '"Terwujudnya Desa Timbul yang Maju, Sejahtera, dan Berbudaya Berlandaskan Gotong Royong"'
  },
  {
    type: 'Misi',
    icon: '📌',
    items: [
      'Meningkatkan kualitas pelayanan publik yang prima kepada masyarakat',
      'Mengembangkan potensi ekonomi lokal berbasis pertanian dan UMKM',
      'Memperkuat infrastruktur desa yang merata dan berkelanjutan',
      'Melestarikan budaya dan kearifan lokal masyarakat',
      'Meningkatkan kualitas SDM melalui pendidikan dan pelatihan',
    ]
  }
]

const wilayah = [
  { nama: 'Timbul Tengah', rt: 3, rw: 1 },
  { nama: 'Timbul Kidul', rt: 4, rw: 1 },
  { nama: 'Nayan', rt: 3, rw: 1 },
  { nama: 'Karangnongko', rt: 4, rw: 1 },
  { nama: 'Sumberan', rt: 3, rw: 1 },
  { nama: 'Kranon', rt: 3, rw: 1 },
]

export default function Profil() {
  return (
    <section className="profil section" id="profil">
      <div className="container">
        <div className="section-header">
          <span className="badge">🏡 Tentang Desa</span>
          <h2 className="section-title">Profil Desa Timbul</h2>
          <p className="section-subtitle">
            Desa Timbul adalah desa yang terletak di Kecamatan Prambanan,
            Kabupaten Sleman, Daerah Istimewa Yogyakarta.
          </p>
        </div>

        {/* Visi Misi */}
        <div className="visi-misi-grid">
          {visiMisi.map((vm) => (
            <div key={vm.type} className="visi-misi-card">
              <div className="vm-header">
                <span className="vm-icon">{vm.icon}</span>
                <h3>{vm.type}</h3>
              </div>
              {vm.content && <p className="vm-content">{vm.content}</p>}
              {vm.items && (
                <ul className="vm-list">
                  {vm.items.map((item, i) => (
                    <li key={i}>
                      <span className="vm-bullet">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Wilayah */}
        <div className="wilayah-section">
          <div className="section-header">
            <span className="badge">📍 Pembagian Wilayah</span>
            <h3 className="section-title" style={{fontSize: '28px'}}>Dusun di Desa Timbul</h3>
          </div>
          <div className="wilayah-grid">
            {wilayah.map((w, i) => (
              <div key={i} className="wilayah-card">
                <div className="wilayah-num">{i + 1}</div>
                <div className="wilayah-info">
                  <h4>{w.nama}</h4>
                  <div className="wilayah-meta">
                    <span>🏠 {w.rt} RT</span>
                    <span>🔷 {w.rw} RW</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Struktur Organisasi */}
        <div className="struktur-section">
          <div className="section-header">
            <span className="badge">👤 Pemerintahan</span>
            <h3 className="section-title" style={{fontSize: '28px'}}>Struktur Pemerintahan Desa</h3>
          </div>
          <div className="struktur-grid">
            <div className="struktur-card kepala">
              <div className="jabatan-icon">👨‍💼</div>
              <div className="jabatan-avatar">ST</div>
              <h4>Suratman, S.E.</h4>
              <span className="jabatan-badge">Kepala Desa</span>
            </div>
            <div className="struktur-row">
              {[
                { inisial: 'AG', nama: 'Agus Santosa', jabatan: 'Sekretaris Desa' },
                { inisial: 'SR', nama: 'Sriningsih, A.Md.', jabatan: 'Bendahara Desa' },
                { inisial: 'BW', nama: 'Budi Wahyono', jabatan: 'Kasi Pelayanan' },
                { inisial: 'NT', nama: 'Ngatini', jabatan: 'Kasi Pemerintahan' },
              ].map((p) => (
                <div key={p.inisial} className="struktur-card">
                  <div className="jabatan-avatar small">{p.inisial}</div>
                  <h4>{p.nama}</h4>
                  <span className="jabatan-badge">{p.jabatan}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
