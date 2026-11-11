import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import SecBeranda  from './sections/SecBeranda'
import SecProfil   from './sections/SecProfil'
import SecKegiatan from './sections/SecKegiatan'
import SecPengumuman from './sections/SecPengumuman'
import SecGaleri   from './sections/SecGaleri'
import SecKontak   from './sections/SecKontak'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <SecBeranda />
        <SecProfil />
        <SecKegiatan />
        <SecPengumuman />
        <SecGaleri />
        <SecKontak />
      </main>
      <Footer />
    </>
  )
}
