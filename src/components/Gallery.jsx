import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['Todas', 'Actividades', 'Graduaciones', 'Eventos Patrios', 'Vida Escolar']

// PLACEHOLDER: reemplazar cada item con foto real del colegio
// Estructura: { src: '/galeria/foto1.jpg', alt: 'Descripción', category: 'Categoría' }
const photos = [
  { src: 'https://placehold.co/600x400/1B5E20/ffffff?text=Actividad+Escolar', alt: 'Actividad escolar', category: 'Actividades' },
  { src: 'https://placehold.co/600x400/1565C0/ffffff?text=Graduación+2024', alt: 'Graduación 2024', category: 'Graduaciones' },
  { src: 'https://placehold.co/600x400/C62828/ffffff?text=Acto+Patrio', alt: 'Acto patrio', category: 'Eventos Patrios' },
  { src: 'https://placehold.co/600x400/2E7D32/ffffff?text=Vida+Escolar', alt: 'Vida escolar', category: 'Vida Escolar' },
  { src: 'https://placehold.co/600x400/145214/ffffff?text=Actividad+Cultural', alt: 'Actividad cultural', category: 'Actividades' },
  { src: 'https://placehold.co/600x400/0D47A1/ffffff?text=Graduación+2023', alt: 'Graduación 2023', category: 'Graduaciones' },
  { src: 'https://placehold.co/600x400/B71C1C/ffffff?text=Dia+de+la+Patria', alt: 'Día de la Patria', category: 'Eventos Patrios' },
  { src: 'https://placehold.co/600x400/388E3C/ffffff?text=Recreo+Escolar', alt: 'Recreo escolar', category: 'Vida Escolar' },
  { src: 'https://placehold.co/600x400/1976D2/ffffff?text=Acto+Escolar', alt: 'Acto escolar', category: 'Actividades' },
  { src: 'https://placehold.co/600x400/4CAF50/ffffff?text=Salón+de+Clases', alt: 'Salón de clases', category: 'Vida Escolar' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [lightbox, setLightbox] = useState(null) // index

  const filtered = activeCategory === 'Todas'
    ? photos
    : photos.filter((p) => p.category === activeCategory)

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length)
  const next = () => setLightbox((i) => (i + 1) % filtered.length)

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <span className="inline-block bg-green-100 text-[#1B5E20] text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-3">
            Nuestros momentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Galería</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Momentos especiales de nuestra comunidad educativa
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 fade-in">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#1B5E20] text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1B5E20] hover:text-[#1B5E20]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 fade-in">
          {filtered.map((photo, idx) => (
            <button
              key={photo.src + idx}
              onClick={() => openLightbox(idx)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-[#1B5E20]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-medium text-sm bg-black/50 px-3 py-1 rounded-full">
                  {photo.alt}
                </span>
              </div>
              <span className="absolute top-2 right-2 bg-[#1B5E20] text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                {photo.category}
              </span>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              onClick={closeLightbox}
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>

            <div onClick={(e) => e.stopPropagation()} className="max-w-4xl max-h-[85vh] w-full">
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-3 text-sm opacity-80">
                {filtered[lightbox].alt} · {lightbox + 1}/{filtered.length}
              </p>
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
