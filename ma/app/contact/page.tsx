"use client"

import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function AnimatedSection({ 
  children, 
  className,
  delay = 0 
}: { 
  children: React.ReactNode
  className?: string
  delay?: number 
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'opacity-0 translate-y-8 transition-all duration-700 ease-out',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function ContactForm({ t }: { t: ReturnType<typeof useLanguage>['t'] }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('loading')

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Simulate success
    setStatus('success')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
          {t.contact.form.name} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={cn(
            'w-full px-4 py-3 bg-input border rounded-md text-foreground placeholder:text-muted-foreground transition-all',
            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
            errors.name ? 'border-destructive' : 'border-border'
          )}
          placeholder="Juan García"
        />
        {errors.name && (
          <p className="text-destructive text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          {t.contact.form.email} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={cn(
            'w-full px-4 py-3 bg-input border rounded-md text-foreground placeholder:text-muted-foreground transition-all',
            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
            errors.email ? 'border-destructive' : 'border-border'
          )}
          placeholder="juan@ejemplo.com"
        />
        {errors.email && (
          <p className="text-destructive text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
          {t.contact.form.phone}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
          placeholder="+34 600 000 000"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
          {t.contact.form.subject}
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-input border border-border rounded-md text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
        >
          <option value="">Seleccionar tema...</option>
          <option value="corporate">Derecho Corporativo</option>
          <option value="litigation">Litigios</option>
          <option value="tax">Derecho Fiscal</option>
          <option value="labor">Derecho Laboral</option>
          <option value="other">Otro</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
          {t.contact.form.message} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={cn(
            'w-full px-4 py-3 bg-input border rounded-md text-foreground placeholder:text-muted-foreground transition-all resize-none',
            'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
            errors.message ? 'border-destructive' : 'border-border'
          )}
          placeholder="Describe tu consulta..."
        />
        {errors.message && (
          <p className="text-destructive text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={cn(
          'w-full flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-md transition-all duration-300',
          status === 'success' 
            ? 'bg-green-600 text-white' 
            : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25',
          (status === 'loading' || status === 'success') && 'opacity-80 cursor-not-allowed'
        )}
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Enviando...
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle className="h-5 w-5" />
            {t.contact.form.success}
          </>
        ) : status === 'error' ? (
          <>
            <AlertCircle className="h-5 w-5" />
            {t.contact.form.error}
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            {t.contact.form.submit}
          </>
        )}
      </button>
    </form>
  )
}

export default function ContactPage() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.info.address,
      value: 'Av. Principal 1234, Piso 15\nCiudad, CP 12345',
      href: 'https://maps.google.com',
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: '+1 (234) 567-8900',
      href: 'tel:+12345678900',
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: 'info@lexfirma.com',
      href: 'mailto:info@lexfirma.com',
    },
    {
      icon: Clock,
      label: t.contact.info.hours,
      value: 'Lunes a Viernes\n9:00 - 18:00',
      href: null,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up text-balance">
            {t.contact.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200 text-pretty">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Envíanos un mensaje
                </h2>
                <ContactForm t={t} />
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={100} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Info Cards */}
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div
                      key={info.label}
                      className="bg-card border border-border rounded-xl p-5 transition-all duration-300 hover:border-primary/30"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground mb-1">
                            {info.label}
                          </h3>
                          {info.href ? (
                            <a
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line text-sm"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground whitespace-pre-line text-sm">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Social Links */}
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-medium text-foreground mb-4">
                    {t.footer.followUs}
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <AnimatedSection className="py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="aspect-[21/9] rounded-xl bg-gradient-to-br from-secondary to-muted border border-border overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground">Mapa interactivo</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
