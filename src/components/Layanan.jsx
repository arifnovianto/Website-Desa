import './Layanan.css'

const layananList = [
  {
    icon: '📄',
    judul: 'Surat Keterangan',
    deskripsi: 'Pengurusan surat keterangan domisili, usaha, tidak mampu, dan lainnya.',
    waktu: '1-2 hari kerja',
    warna: 'green',
  },
  {
    icon: '📝',
    judul: 'KTP & KK',
    deskripsi: 'Pengantar pembuatan atau perubahan KTP dan Kartu Keluarga.',
    waktu: '1 hari kerja',
    warna: 'blue',
  },
  {
    icon: '💒',
    judul: 'Surat Nikah',
    deskripsi: 'Pengantar permohonan surat pengantar pernikahan ke KUA.',
    waktu: '1 hari kerja',
    warna: 'pink',
  },
  {
    icon: '📦',
    judul: 'Izin Usaha',
    deskripsi: 'Surat rekomendasi untuk keperluan izin usaha mikro dan kecil.',
    waktu: '2-3 hari kerja',
    warna: 'orange',
  },
  {
    icon: '🏠',
    judul: 'IMB / PBG',
    deskripsi: 'Surat pengantar pengajuan izin mendirikan bangunan.',
    waktu: '3-5 hari kerja',
    warna: 'purple',
  },
  {
    icon: '💰',
    judul: 'Bantuan Sosial',
    deskripsi: 'Pendaftaran dan verifikasi penerima bantuan sosial pemerintah.',
    waktu: 'Sesuai program',
    warna: 'teal',
  },
]

const persyaratan = [
  { step: '1', text: 'Datang ke kantor desa atau isi form online' },
  { step: '2', text: 'Siapkan fotokopi KTP dan KK' },
  { step: '3', text: 'Isi formulir permohonan surat' },
  { step: '4', text: 'Tunggu proses verifikasi petugas' },
  { step: '5', text: 'Ambil surat yang sudah jadi' },
]

export default function Layanan() {
  return (
    <section className="layanan section" id="layanan">
      <div className="container">
        <div className="section-header">
          <span className="badge">⚡ Pelayanan Publik</span>
          <h2 className="section-title">Layanan Warga Desa</h2>
          <p className="section-subtitle">
            Kami hadir untuk melayani kebutuhan administrasi warga desa dengan cepat,
            mudah, dan transparan.
          </p>
        </div>

        <div className="layanan-grid">
          {layananList.map((l, i) => (
            <div key={i} className={`layanan-card layanan-${l.warna}`}>
              <div className="layanan-icon">{l.icon}</div>
              <h3>{l.judul}</h3>
              <p>{l.deskripsi}</p>
              <div className="layanan-footer">
                <span className="layanan-waktu">⏱ {l.waktu}</span>
                <button className="layanan-btn">Ajukan →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Alur Layanan */}
        <div className="alur-section">
          <div className="section-header">
            <span className="badge">📋 Prosedur</span>
            <h3 className="section-title" style={{fontSize: '28px'}}>Alur Pengajuan Layanan</h3>
          </div>
          <div className="alur-steps">
            {persyaratan.map((p, i) => (
              <div key={i} className="alur-step">
                <div className="alur-num">{p.step}</div>
                {i < persyaratan.length - 1 && <div className="alur-line"></div>}
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Jam Operasional */}
        <div className="jam-section">
          <div className="jam-card">
            <div className="jam-icon">🕐</div>
            <div>
              <h4>Jam Pelayanan</h4>
              <div className="jam-grid">
                <div>
                  <span className="jam-hari">Senin – Kamis</span>
                  <span className="jam-waktu">08.00 – 14.00 WIB</span>
                </div>
                <div>
                  <span className="jam-hari">Jumat</span>
                  <span className="jam-waktu">08.00 – 11.00 WIB</span>
                </div>
                <div>
                  <span className="jam-hari">Sabtu – Minggu</span>
                  <span className="jam-waktu">Libur</span>
                </div>
              </div>
            </div>
          </div>
          <div className="jam-card">
            <div className="jam-icon">📞</div>
            <div>
              <h4>Hubungi Kami</h4>
              <div className="kontak-info">
                <a href="tel:+6274496001" className="kontak-item">
                  📱 (0274) 496-001
                </a>
                <a href="mailto:desa.timbul@sleman.go.id" className="kontak-item">
                  ✉️ desa.timbul@sleman.go.id
                </a>
                <a href="https://wa.me/628123456789" className="kontak-item whatsapp">
                  💬 WhatsApp Desa
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
