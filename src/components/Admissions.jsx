import { CheckCircle, Calendar, FileText } from 'lucide-react'

const requirements = [
  'Nota del grado anterior',
  'Historial del SIGERD',
  'Certificación de estudio o carta de buena conducta',
  'Un folder nuevo',
  'Copia de cédula de ambos padres o pasaporte',
  'Acta de nacimiento original',
  '3 fotos 2×2',
  'Copia de la tarjeta de vacuna (para Nivel Inicial)',
  'Carta de saldo si estaba en otro colegio',
]

export default function Admissions() {
  const scrollToContact = () =>
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="admision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <span className="inline-block bg-red-100 text-[#C62828] text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-3">
            Año Escolar 2026-2027
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Inscripciones
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            ¡Las puertas de El Privilegio están abiertas! Únete a nuestra familia educativa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Requirements */}
          <div className="fade-in bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1B5E20] rounded-xl flex items-center justify-center">
                <FileText size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Requisitos de inscripción</h3>
            </div>
            <ul className="space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle size={18} className="text-[#1B5E20] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Calendar + CTA */}
          <div className="space-y-6 fade-in">
            <div className="bg-[#1B5E20] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={24} />
                <h3 className="text-xl font-bold">Calendario de inscripciones</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-green-200 text-xs font-semibold uppercase tracking-wide mb-1">
                    Período de inscripción
                  </p>
                  <p className="font-bold text-lg">Julio – Agosto 2026</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-green-200 text-xs font-semibold uppercase tracking-wide mb-1">
                    Inicio año escolar
                  </p>
                  <p className="font-bold text-lg">Septiembre 2026</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-green-200 text-xs font-semibold uppercase tracking-wide mb-1">
                    Horario de atención
                  </p>
                  <p className="font-bold text-lg">Lun – Vie · 7:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/admision/requisitos.png"
                alt="Inscripciones abiertas"
                className="w-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#C62828]/80 text-white p-6">
                <p className="text-2xl font-extrabold mb-2">¿Listo para inscribirte?</p>
                <p className="text-sm text-red-100 mb-4 text-center">
                  Contáctanos para más información sobre el proceso
                </p>
                <button
                  onClick={scrollToContact}
                  className="bg-white text-[#C62828] font-bold px-6 py-2.5 rounded-full hover:bg-red-50 transition-colors"
                >
                  Solicitar información
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
