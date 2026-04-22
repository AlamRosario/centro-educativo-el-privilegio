import { Phone, Mail, MapPin } from 'lucide-react'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { label: 'Niveles Académicos', href: '#niveles' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Inscripciones', href: '#admision' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-[#0f3d14] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {/* PLACEHOLDER: reemplazar con <img src="/logo.png" alt="Logo" className="h-14 w-auto" /> */}
              <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center font-bold text-lg">
                CEP
              </div>
              <div>
                <p className="font-bold text-white leading-tight">Centro Educativo</p>
                <p className="font-extrabold text-white text-lg leading-tight">El Privilegio</p>
                <p className="text-green-300 text-xs italic">"Caminando Hacia El Futuro"</p>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-5 max-w-xs">
              Formando niños con valores, excelencia académica y amor desde el año 2009 en la
              comunidad de La Ureña, Santo Domingo Este.
            </p>
            {/* Social media — PLACEHOLDER: reemplazar href con URLs reales de redes sociales */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-green-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-green-200">
                <MapPin size={15} className="flex-shrink-0 mt-0.5 text-green-400" />
                <span>C/ Antonio Duverge #61, Sector La Ureña, KM 19 Las Américas, Santo Domingo Este</span>
              </li>
              <li>
                <a href="tel:+18292860929" className="flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors">
                  <Phone size={15} className="text-green-400" />
                  829-286-0929
                </a>
              </li>
              <li>
                <a href="tel:+18298849049" className="flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors">
                  <Phone size={15} className="text-green-400" />
                  829-884-9049
                </a>
              </li>
              <li>
                <a href="mailto:elprivilegio_colegio@hotmail.com" className="flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors break-all">
                  <Mail size={15} className="text-green-400 flex-shrink-0" />
                  elprivilegio_colegio@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-green-300">
          <p>© 2026 Centro Educativo El Privilegio. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{' '}
            <span className="text-white font-semibold">Alam Rosario</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
