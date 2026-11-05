import { useState } from 'react'
import './Kontak.css'

export default function Kontak() {
  const [form, setForm] = useState({ nama: '', email: '', subjek: '', pesan: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ nama: '', email: '', subjek: '', pesan: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="kontak section" id="kontak">
      <div className="container">
        <div className="section-header">
          <span className="badge">📬 Hubungi Kami</span>
          <h2 className="section-title">Ada yang Bisa Kami Bantu?</h2>
          <p className="section-subtitle">
            Sampaikan pertanyaan, saran, atau pengaduan Anda. Tim kami siap membantu
            memberikan pelayanan terbaik.
          </p>
        </div>

        <div className="kontak-layout">
          {/* Info Kontak */}
          <div className="kontak-info-col">
            <div className="kontak-info-card">
              <h3>Informasi Kontak</h3>
              <div className="kontak-list">
                <div className="kontak-row">
                  <div className="kontak-ico">📍</div>
                  <div>
                    <strong>Alamat</strong>
                    <p>Jl. Timbul No. 1, Timbul Tengah,<br/>Prambanan, Sleman, DIY 55572</p>
                  </div>
                </div>
                <div className="kontak-row">
                  <div className="kontak-ico">📞</div>
                  <div>
                    <strong>Telepon</strong>
                    <p><a href="tel:+6274496001">(0274) 496-001</a></p>
                  </div>
                </div>
                <div className="kontak-row">
                  <div className="kontak-ico">✉️</div>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:desa.timbul@sleman.go.id">desa.timbul@sleman.go.id</a></p>
                  </div>
                </div>
                <div className="kontak-row">
                  <div className="kontak-ico">🕐</div>
                  <div>
                    <strong>Jam Pelayanan</strong>
                    <p>Senin–Kamis: 08.00–14.00 WIB<br/>Jumat: 08.00–11.00 WIB</p>
                  </div>
                </div>
              </div>

              <div className="kontak-sosmed">
                <p className="sosmed-label">Media Sosial</p>
                <div className="sosmed-links">
                  <a href="#" className="sosmed-btn" aria-label="Facebook">
                    <span>📘</span> Facebook
                  </a>
                  <a href="#" className="sosmed-btn" aria-label="Instagram">
                    <span>📸</span> Instagram
                  </a>
                  <a href="https://wa.me/628123456789" className="sosmed-btn wa" aria-label="WhatsApp">
                    <span>💬</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Maps placeholder */}
            <div className="maps-card">
              <div className="maps-placeholder">
                <span className="maps-icon">🗺️</span>
                <p>Desa Timbul, Prambanan, Sleman</p>
                <a
                  href="https://maps.google.com/?q=Desa+Timbul+Prambanan+Sleman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{fontSize: '13px', padding: '8px 18px'}}
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="kontak-form-col">
            <div className="form-card">
              <h3>Kirim Pesan</h3>
              {submitted ? (
                <div className="success-msg">
                  <span className="success-icon">✅</span>
                  <div>
                    <strong>Pesan terkirim!</strong>
                    <p>Terima kasih, kami akan segera menghubungi Anda.</p>
                  </div>
                </div>
              ) : null}
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nama">Nama Lengkap *</label>
                    <input
                      id="nama"
                      name="nama"
                      type="text"
                      placeholder="Masukkan nama Anda"
                      value={form.nama}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nama@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subjek">Subjek *</label>
                  <select
                    id="subjek"
                    name="subjek"
                    value={form.subjek}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Pilih subjek</option>
                    <option value="layanan">Pertanyaan Layanan</option>
                    <option value="pengaduan">Pengaduan</option>
                    <option value="saran">Saran & Masukan</option>
                    <option value="informasi">Permintaan Informasi</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="pesan">Pesan *</label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows={5}
                    placeholder="Tuliskan pesan Anda di sini..."
                    value={form.pesan}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  <span>📤</span> Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
