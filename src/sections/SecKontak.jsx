import { useState } from 'react'
import './SecKontak.css'

const pengurus = [
  { inisial:'SH', nama:'Suharno',    jabatan:'Ketua RT 004', hp:'0812-3456-7890' },
  { inisial:'WD', nama:'Widodo',     jabatan:'Wakil Ketua',  hp:'0813-2345-6789' },
  { inisial:'SR', nama:'Sri Rahayu', jabatan:'Sekretaris',   hp:'0814-3456-7891' },
  { inisial:'BU', nama:'Budiman',    jabatan:'Bendahara',    hp:'0815-4567-8902' },
]

export default function SecKontak() {
  const [form,  setForm]   = useState({ nama:'', hp:'', subjek:'', pesan:'' })
  const [sukses, setSukses] = useState(false)

  const ubah = e => setForm({ ...form, [e.target.name]: e.target.value })
  const kirim = e => {
    e.preventDefault()
    setSukses(true)
    setForm({ nama:'', hp:'', subjek:'', pesan:'' })
    setTimeout(() => setSukses(false), 4000)
  }

  return (
    <section id="kontak" className="sec-kontak">
      <div className="sec-banner">
        <div className="container">
          <span className="label label-white">📬 Hubungi Kami</span>
          <h2>Kontak RT 004 / RW 007</h2>
          <p>Hubungi pengurus RT untuk pertanyaan, laporan, atau keperluan warga.</p>
        </div>
      </div>

      <div className="container sec-body">
        <div className="k-layout">

          {/* Info */}
          <div className="k-info">
            <div className="k-card">
              <h3>📋 Hubungi Pengurus</h3>
              <div className="p-list">
                {pengurus.map(p => (
                  <div key={p.inisial} className="p-row">
                    <div className="p-ava">{p.inisial}</div>
                    <div className="p-det">
                      <strong>{p.nama}</strong>
                      <span>{p.jabatan}</span>
                      <a href={'tel:' + p.hp.replace(/-/g,'')} className="p-tel">📱 {p.hp}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="k-card k-green">
              <h3>📍 Informasi</h3>
              <div className="ki-rows">
                <div className="ki-row">
                  <span className="ki-ico">🏘️</span>
                  <div>
                    <small>Wilayah</small>
                    <p>RT 004 / RW 007, Desa Timbul</p>
                  </div>
                </div>
                <div className="ki-row">
                  <span className="ki-ico">🕐</span>
                  <div>
                    <small>Waktu Layanan</small>
                    <p>Senin – Jumat, 08.00 – 17.00 WIB</p>
                  </div>
                </div>
                <div className="ki-row">
                  <span className="ki-ico">💬</span>
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
                  <label htmlFor="k-nama">Nama Lengkap *</label>
                  <input id="k-nama" name="nama" type="text" placeholder="Nama Anda" value={form.nama} onChange={ubah} required />
                </div>
                <div className="fg">
                  <label htmlFor="k-hp">No. HP / WA *</label>
                  <input id="k-hp" name="hp" type="tel" placeholder="08xx-xxxx-xxxx" value={form.hp} onChange={ubah} required />
                </div>
              </div>
              <div className="fg">
                <label htmlFor="k-subjek">Keperluan *</label>
                <select id="k-subjek" name="subjek" value={form.subjek} onChange={ubah} required>
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
                <label htmlFor="k-pesan">Pesan *</label>
                <textarea id="k-pesan" name="pesan" rows={5} placeholder="Tuliskan pesan Anda..." value={form.pesan} onChange={ubah} required />
              </div>
              <button type="submit" className="btn btn-primary kirim-btn">
                📤 Kirim Pesan
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
