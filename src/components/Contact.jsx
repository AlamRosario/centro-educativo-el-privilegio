import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

// EMAILJS CONFIG — reemplazar con las keys reales del dashboard de EmailJS
// https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfonos',
    value: '829-286-0929 / 829-884-9049',
    href: 'tel:+18292860929',
    color: 'text-[#1B5E20]',
    bg: 'bg-green-50',
  },
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: 'elprivilegio_colegio@hotmail.com',
    href: 'mailto:elprivilegio_colegio@hotmail.com',
    color: 'text-[#1565C0]',
    bg: 'bg-blue-50',
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'C/ Antonio Duverge #61, Sector La Ureña, KM 19 Las Américas, Santo Domingo Este',
    href: 'https://maps.google.com/?q=La+Ureña+KM+19+Las+Américas+Santo+Domingo+Este',
    color: 'text-[#C62828]',
    bg: 'bg-red-50',
  },
  {
    icon: Clock,
    label: 'Horario de atención',
    value: 'Lunes a Viernes · 7:00 AM – 2:00 PM',
    href: null,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
]

export default function Contact() {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setError('Ocurrió un error al enviar. Por favor, contáctanos directamente por teléfono.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <span className="inline-block bg-green-100 text-[#1B5E20] text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-3">
            Estamos aquí para ayudarte
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Contáctanos</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Escríbenos o visítanos. Estaremos encantados de atenderte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact info */}
          <div className="space-y-4 fade-in">
            {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} className={color} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{label}</p>
                  {href ? (
                    <a href={href} className={`font-medium text-gray-800 hover:${color} transition-colors text-sm`}>
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium text-gray-800 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Google Maps embed */}
            {/* PLACEHOLDER: reemplazar el src con embed URL real del Google Maps del colegio */}
            {/* Para obtenerla: Google Maps → buscar la dirección → Compartir → Insertar mapa → copiar src */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                title="Mapa Centro Educativo El Privilegio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0!2d-69.75!3d18.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSector+La+Ureña%2C+KM+19+Las+Américas%2C+Santo+Domingo+Este!5e0!3m2!1ses!2sdo!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="fade-in bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={56} className="text-[#1B5E20] mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h4>
                <p className="text-gray-500 text-sm">
                  Gracias por contactarnos. Te responderemos a la brevedad posible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm text-[#1B5E20] font-medium hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="829-000-0000"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5E20] focus:border-transparent transition resize-none"
                  />
                </div>

                {error && (
                  <p className="text-[#C62828] text-sm bg-red-50 rounded-lg px-4 py-2">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-[#1B5E20] hover:bg-[#2E7D32] disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m8 8h2M4 12H2m15.5-6.5-1.4 1.4M6.9 17.1l-1.4 1.4M17.1 17.1l1.4 1.4M6.9 6.9 5.5 5.5" />
                      </svg>
                      Enviando…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Enviar mensaje
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  * Campos requeridos. Tu información es confidencial.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
