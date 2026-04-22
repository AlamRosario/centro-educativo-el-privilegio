export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image — PLACEHOLDER: reemplazar con imagen real de fachada del colegio */}
      <div className="absolute inset-0">
        <img
          src="https://placehold.co/1920x1080/1B5E20/ffffff?text=Centro+Educativo+El+Privilegio"
          alt="Centro Educativo El Privilegio"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="bg-[#C62828] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Fundado en 2009
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Centro Educativo
          <br />
          <span className="text-green-300">El Privilegio</span>
        </h1>

        <p className="text-2xl sm:text-3xl font-light italic text-green-200 mb-4">
          "Caminando Hacia El Futuro"
        </p>

        <p className="text-base sm:text-lg text-gray-200 mb-10 max-w-xl mx-auto">
          Formando niños con valores, excelencia académica y amor desde el año 2009
          en la comunidad de La Ureña, Santo Domingo Este.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('#sobre-nosotros')}
            className="px-8 py-3.5 bg-[#1B5E20] hover:bg-[#2E7D32] text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Conoce más
          </button>
          <button
            onClick={() => scrollTo('#contacto')}
            className="px-8 py-3.5 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1B5E20] transition-all shadow-lg"
          >
            Contáctanos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#1B5E20]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-3 gap-4 text-center text-white">
          <div>
            <p className="text-2xl font-bold">+15</p>
            <p className="text-xs text-green-200">Años de experiencia</p>
          </div>
          <div className="border-x border-green-600">
            <p className="text-2xl font-bold">150+</p>
            <p className="text-xs text-green-200">Estudiantes</p>
          </div>
          <div>
            <p className="text-2xl font-bold">2</p>
            <p className="text-xs text-green-200">Niveles educativos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
