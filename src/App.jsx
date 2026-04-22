import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AcademicLevels from './components/AcademicLevels'
import Gallery from './components/Gallery'
import Admissions from './components/Admissions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function useFadeObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    const refresh = () => {
      document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    }

    refresh()
    const timer = setTimeout(refresh, 500)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])
}

export default function App() {
  useFadeObserver()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AcademicLevels />
        <Gallery />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
