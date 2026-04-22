import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { label: 'Niveles Académicos', href: '#niveles' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group" onClick={() => handleLink('#inicio')}>
            {/* PLACEHOLDER: reemplazar con <img src="/logo.png" alt="Logo" className="h-14 w-auto" /> */}
            <div className="h-14 w-14 rounded-full bg-[#1B5E20] flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              CEP
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-[#1B5E20] text-sm leading-tight">Centro Educativo</p>
              <p className="font-extrabold text-[#1B5E20] text-base leading-tight">El Privilegio</p>
              <p className="text-[#C62828] text-xs italic leading-tight">Caminando Hacia El Futuro</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1B5E20] hover:bg-green-50 rounded-md transition-all"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleLink('#admision')}
              className="ml-3 px-5 py-2 bg-[#C62828] text-white text-sm font-semibold rounded-full hover:bg-[#b71c1c] transition-colors shadow-sm"
            >
              Inscripciones
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#1B5E20] hover:bg-green-50 rounded-md transition-all"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleLink('#admision')}
              className="block w-full text-center mt-2 px-4 py-3 bg-[#C62828] text-white text-sm font-semibold rounded-full hover:bg-[#b71c1c] transition-colors"
            >
              Inscripciones
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
