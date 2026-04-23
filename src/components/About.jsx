import { Heart, Shield, Star, Users, CheckCircle, Lightbulb, Handshake } from 'lucide-react'

const values = [
  { icon: Heart, label: 'Amor', color: 'text-red-500', bg: 'bg-red-50' },
  { icon: Shield, label: 'Respeto', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Star, label: 'Honestidad', color: 'text-yellow-500', bg: 'bg-yellow-50' },
  { icon: Users, label: 'Compañerismo', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: CheckCircle, label: 'Responsabilidad', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Lightbulb, label: 'Tolerancia', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: Handshake, label: 'Colaboración', color: 'text-teal-600', bg: 'bg-teal-50' },
]

const team = [
  {
    name: 'Licda. Buenaventura Rosario Aquino',
    role: 'Directora',
    img: '/equipo/directora.jpg',
  },
  {
    name: 'Claudia Rosario',
    role: 'Coordinadora de Registro',
    // PLACEHOLDER: reemplazar src con foto real, ej: '/equipo/coordinadora.jpg'
    img: 'https://placehold.co/200x200/1565C0/ffffff?text=Coordinadora',
  },
  {
    name: 'Nairobis Lagarez',
    role: 'Secretaria',
    // PLACEHOLDER: reemplazar src con foto real, ej: '/equipo/secretaria.jpg'
    img: 'https://placehold.co/200x200/C62828/ffffff?text=Secretaria',
  },
]

function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <span className="inline-block bg-green-100 text-[#1B5E20] text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-3">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">{title}</h2>
      {subtitle && <p className="text-gray-500 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  )
}

export default function About() {
  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Historia */}
        <div className="fade-in">
          <SectionTitle
            label="Nuestra Historia"
            title="Sobre Nosotros"
            subtitle="Más de 15 años comprometidos con la educación de calidad en La Ureña"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 fade-in">
          {/* PLACEHOLDER: reemplazar con imagen real del colegio o fundadores */}
          <div className="relative">
            <img
              src="/about/historia.jpg"
              alt="Historia del Centro Educativo El Privilegio"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#C62828] text-white px-6 py-3 rounded-xl shadow-lg">
              <p className="text-2xl font-bold">2009</p>
              <p className="text-xs">Año de fundación</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              El <strong className="text-[#1B5E20]">Centro Educativo El Privilegio</strong> fue fundado el{' '}
              <strong>6 de Julio del 2009</strong> por la iniciativa de{' '}
              <strong>María Solomona Rosario</strong> y el <strong>Señor Lurdes Ramírez</strong>, quienes
              identificaron la necesidad de más espacios educativos en la comunidad de La Ureña.
            </p>
            <p>
              Motivados por brindar un lugar seguro y de calidad para los niños, decidieron crear un
              Centro Educativo en su propia vivienda. El Centro inició con aproximadamente{' '}
              <strong>150 estudiantes</strong> en tandas matutinas y vespertinas.
            </p>
            <p>
              El <strong>21 de agosto de 2013</strong>, el Ministerio de Educación otorgó el{' '}
              <strong>Reconocimiento Oficial</strong>. Actualmente ofrece educación Inicial y Primaria
              completa, consolidándose como una institución de referencia para la comunidad.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="bg-[#1B5E20]/10 text-[#1B5E20] text-sm px-3 py-1 rounded-full font-medium">
                Regional 10
              </span>
              <span className="bg-[#1B5E20]/10 text-[#1B5E20] text-sm px-3 py-1 rounded-full font-medium">
                Distrito 10-05
              </span>
              <span className="bg-[#1B5E20]/10 text-[#1B5E20] text-sm px-3 py-1 rounded-full font-medium">
                Boca Chica
              </span>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="fade-in bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#1B5E20] rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Contribuir a la formación integral de los alumnos estimulando su desarrollo individual, a
              través del amor y comprensión, respetando sus valores e ideales, para enriquecer la calidad
              de la educación dominicana mediante la formación de entes críticos y autónomos.
            </p>
          </div>

          <div className="fade-in bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#1565C0] rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser una institución participativa, abierta e innovadora ofreciendo un servicio educativo
              acorde con las exigencias de los tiempos modernos, llegando a los más altos niveles de
              calidad, desarrollando las dimensiones intelectuales y personales que preparen a los
              alumnos para asumir los retos del futuro.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="fade-in mb-20">
          <SectionTitle label="Lo que nos define" title="Nuestros Valores" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {values.map(({ icon: Icon, label, color, bg }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <span className="text-sm font-semibold text-gray-700 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo directivo */}
        <div className="fade-in">
          <SectionTitle
            label="Quiénes nos lideran"
            title="Equipo Directivo"
            subtitle="Profesionales comprometidos con la excelencia educativa"
          />
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-[#1B5E20]/20"
                />
                <h4 className="font-bold text-gray-900 text-sm leading-tight mb-1">{member.name}</h4>
                <p className="text-[#1B5E20] text-xs font-semibold uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
