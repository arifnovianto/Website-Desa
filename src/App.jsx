import { Routes, Route } from 'react-router-dom'
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
import Beranda from './pages/Beranda'
import Profil  from './pages/Profil'
import Kegiatan from './pages/Kegiatan'
import Pengumuman from './pages/Pengumuman'
import Galeri  from './pages/Galeri'
import Kontak  from './pages/Kontak'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Beranda />}    />
        <Route path="/profil"     element={<Profil />}     />
        <Route path="/kegiatan"   element={<Kegiatan />}   />
        <Route path="/pengumuman" element={<Pengumuman />} />
        <Route path="/galeri"     element={<Galeri />}     />
        <Route path="/kontak"     element={<Kontak />}     />
      </Routes>
      <Footer />
    </>
  )
}
