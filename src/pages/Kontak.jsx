import { useState } from 'react'
import './Kontak.css'

const pengurus = [
  { ico:'👤', nama:'Suharno',      jabatan:'Ketua RT 004',  hp:'0812-3456-7890' },
  { ico:'👤', nama:'Widodo',       jabatan:'Wakil Ketua',    hp:'0813-2345-6789' },
  { ico:'👤', nama:'Sri Rahayu',   jabatan:'Sekretaris',     hp:'0814-3456-7891' },
  { ico:'👤', nama:'Budiman',      jabatan:'Bendahara',      hp:'0815-4567-8902' },
]

export default function Kontak() {
  const [form,  setForm]  = useState({ nama:'', hp:'', subjek:'', pesan:'' })
  const [sukses, setSukses] = useState(false)

  const ubah = e => setForm({ ...form, [e.target.name]: e.target.value })
  const kirim = e => {
    e.preventDefault()
    setSukses(true)
    setForm({ nama:'', hp:'', subjek:'', pesan:'' })
    setTimeout(() => setSukses(false), 4000)
  }

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <span className="label">📬 Hubungi Kami</span>
          <h1>Kontak RT 004 / RW 007</h1>
          <p>Hubungi pengurus RT untuk pertanyaan, laporan, atau keperluan warga.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="container">
          <div className="k-layout">

            {/* Kontak Info */}
            <div className="k-info">
              {/* Pengurus */}
              <div className="k-card">
                <h3>📋 Hubungi Pengurus</h3>
                <div className="pengurus-list">
                  {pengurus.map(p => (
                    <div key={p.nama} className="p-row">
                      <div className="p-ava">{p.ico}</div>
                      <div className="p-det">
                        <strong>{p.nama}</strong>
                        <span>{p.jabatan}</span>
                        <a href={'tel:' + p.hp.replace(/-/g,'')} className="p-tel">📱 {p.hp}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="k-card k-card-green">
                <h3>📍 Informasi</h3>
                <div className="k-info-rows">
                  <div className="k-info-row">
                    <span className="k-ico">🏘️</span>
                    <div>
                      <small>Wilayah</small>
                      <p>RT 004 / RW 007, Desa Timbul</p>
                    </div>
                  </div>
                  <div className="k-info-row">
                    <span className="k-ico">🕐</span>
                    <div>
                      <small>Waktu Layanan</small>
                      <p>Senin – Jumat, 08.00 – 17.00 WIB</p>
                    </div>
                  </div>
                  <div className="k-info-row">
                    <span className="k-ico">💬</span>
                    <div>
                      <small>WhatsApp Group</small>
                      <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="wa-link">
                        Grup WA RT 004
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="k-form-wrap">
              <div className="k-form-card">
                <h3>✉️ Kirim Pesan ke Pengurus</h3>
                {sukses && (
                  <div className="sukses-msg">
                    ✅ <strong>Pesan terkirim!</strong> Pengurus RT akan segera menghubungi Anda.
                  </div>
                )}
                <form onSubmit={kirim}>
                  <div className="form-row">
                    <div className="fg">
                      <label htmlFor="nama">Nama Lengkap *</label>
                      <input id="nama" name="nama" type="text" placeholder="Nama Anda" value={form.nama} onChange={ubah} required />
                    </div>
                    <div className="fg">
                      <label htmlFor="hp">No. HP / WA *</label>
                      <input id="hp" name="hp" type="tel" placeholder="08xx-xxxx-xxxx" value={form.hp} onChange={ubah} required />
                    </div>
                  </div>
                  <div className="fg">
                    <label htmlFor="subjek">Keperluan *</label>
                    <select id="subjek" name="subjek" value={form.subjek} onChange={ubah} required>
                      <option value="">Pilih keperluan</option>
                      <option value="surat">Surat / Administrasi</option>
                      <option value="laporan">Laporan Masalah</option>
                      <option value="keamanan">Keamanan Lingkungan</option>
                      <option value="kebersihan">Kebersihan</option>
                      <option value="saran">Saran & Masukan</option>
                      <option value="lain">Lainnya</option>
                    </select>
                  </div>
                  <div className="fg">
                    <label htmlFor="pesan">Pesan *</label>
                    <textarea id="pesan" name="pesan" rows={5} placeholder="Tuliskan pesan Anda..." value={form.pesan} onChange={ubah} required />
                  </div>
                  <button type="submit" className="btn btn-primary kirim-btn">
                    📤 Kirim Pesan
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
