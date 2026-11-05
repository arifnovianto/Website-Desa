import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profil from './components/Profil'
import Layanan from './components/Layanan'
import Berita from './components/Berita'
import Galeri from './components/Galeri'
import Kontak from './components/Kontak'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profil />
        <Layanan />
        <Berita />
        <Galeri />
        <Kontak />
      </main>
      <Footer />
    </>
  )
}

export default App
