import { useState } from 'react'
import { Clock, BookOpen, Star, ChevronRight } from 'lucide-react'

const levels = [
  {
    id: 'inicial',
    label: 'Nivel Inicial',
    subtitle: 'Párvulo, Prekínder, Kínder',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-400',
    icon: '🌱',
    description:
      'Enfoque en desarrollo integral del niño a través del juego, exploración y descubrimiento. Se trabaja con el Diseño Curricular del Nivel Inicial enfocado en competencias fundamentales.',
    competencies: [
      'Comunicativa',
      'Ética y Ciudadana',
      'Pensamiento Lógico',
      'Ambiental y de Salud',
      'Desarrollo Personal y Espiritual',
    ],
    domains: [
      { label: 'Cognitivo', icon: '🧠' },
      { label: 'Motor', icon: '🏃' },
      { label: 'Socioemocional', icon: '❤️' },
      { label: 'Lenguaje', icon: '💬' },
      { label: 'Creativo', icon: '🎨' },
    ],
  },
  {
    id: 'primero',
    label: 'Primer Ciclo',
    subtitle: '1ro, 2do y 3er grado',
    color: 'bg-[#1B5E20]',
    lightColor: 'bg-green-50',
    textColor: 'text-[#1B5E20]',
    borderColor: 'border-green-600',
    icon: '📚',
    description:
      'Dominio absoluto de lectoescritura y operaciones matemáticas básicas. Enfoque en competencias fundamentales transversales incluyendo pensamiento lógico, creativo y crítico.',
    competencies: [
      'Lectoescritura avanzada',
      'Operaciones básicas',
      'Pensamiento lógico',
      'Pensamiento creativo',
      'Pensamiento crítico',
    ],
    domains: [],
  },
  {
    id: 'segundo',
    label: 'Segundo Ciclo',
    subtitle: '4to, 5to y 6to grado',
    color: 'bg-[#1565C0]',
    lightColor: 'bg-blue-50',
    textColor: 'text-[#1565C0]',
    borderColor: 'border-blue-600',
    icon: '🎓',
    description:
      'Comprensión profunda y producción de textos complejos. Razonamiento matemático avanzado e indagación científica con un perfil de egreso robusto.',
    competencies: [
      'Comunicar ideas con claridad',
      'Resolver problemas matemáticos',
      'Reconocerse como ciudadano',
      'Trabajo colaborativo',
      'Manejo de tecnologías',
    ],
    domains: [],
  },
]

const schedule = [
  { event: 'Entrada', time: '7:10 – 7:50 AM', icon: '🚪' },
  { event: 'Salida', time: '12:30 PM', icon: '🏠' },
  { event: 'Recreo Nivel Inicial', time: '9:00 – 9:30 AM', icon: '⚽' },
  { event: 'Recreo Primer Ciclo', time: '9:30 – 10:00 AM', icon: '🎮' },
  { event: 'Recreo Segundo Ciclo', time: '10:00 – 10:30 AM', icon: '🏃' },
]

export default function AcademicLevels() {
  const [active, setActive] = useState('inicial')
  const level = levels.find((l) => l.id === active)

  return (
    <section id="niveles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <span className="inline-block bg-green-100 text-[#1B5E20] text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-3">
            Oferta educativa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Niveles Académicos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ofrecemos educación de calidad desde Nivel Inicial hasta 6to grado de Primaria
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 fade-in">
          {levels.map((l) => (
            <button
              key={l.id}
              onClick={() => setActive(l.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all border-2 ${
                active === l.id
                  ? `${l.color} text-white border-transparent shadow-md scale-[1.02]`
                  : `bg-white text-gray-600 border-gray-200 hover:border-gray-300`
              }`}
            >
              <span className="text-xl">{l.icon}</span>
              <div className="text-left">
                <p className="font-bold">{l.label}</p>
                <p className={`text-xs ${active === l.id ? 'text-white/80' : 'text-gray-400'}`}>{l.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Level content */}
        <div className="fade-in grid lg:grid-cols-2 gap-8 mb-16">
          <div className={`${level.lightColor} rounded-2xl p-8 border ${level.borderColor} border-opacity-30`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{level.icon}</span>
              <div>
                <h3 className="text-xl font-extrabold text-gray-900">{level.label}</h3>
                <p className="text-sm text-gray-500">{level.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">{level.description}</p>

            <h4 className={`font-bold ${level.textColor} mb-3 flex items-center gap-2`}>
              <BookOpen size={16} />
              {level.id === 'inicial' ? 'Competencias fundamentales' : 'Perfil de egreso'}
            </h4>
            <ul className="space-y-2">
              {level.competencies.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight size={14} className={level.textColor} />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {/* Domains (only for inicial) */}
            {level.domains.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Star size={16} className="text-amber-500" />
                  5 Dominios del desarrollo
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {level.domains.map((d) => (
                    <div key={d.label} className="flex items-center gap-2 bg-amber-50 rounded-lg px-3 py-2">
                      <span>{d.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image placeholder */}
            {/* PLACEHOLDER: reemplazar con foto real de salón de clases del nivel correspondiente */}
            <img
              src={`https://placehold.co/600x300/1B5E20/ffffff?text=${encodeURIComponent(level.label)}`}
              alt={level.label}
              className="w-full rounded-2xl shadow-sm"
            />
          </div>
        </div>

        {/* Horarios */}
        <div className="fade-in bg-[#1B5E20] rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Clock size={24} />
            <h3 className="text-xl font-bold">Horario Escolar</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {schedule.map((item) => (
              <div key={item.event} className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl mb-2">{item.icon}</p>
                <p className="text-xs text-green-200 mb-1">{item.event}</p>
                <p className="font-bold text-sm">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
