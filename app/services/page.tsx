"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { 
  Building2, 
  Scale, 
  FileText, 
  Users, 
  Lightbulb, 
  Home,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const serviceData = [
  {
    key: 'corporate',
    icon: Building2,
    features: ['Fusiones y adquisiciones', 'Gobierno corporativo', 'Due diligence', 'Contratos comerciales', 'Reestructuración empresarial'],
  },
  {
    key: 'litigation',
    icon: Scale,
    features: ['Litigios civiles', 'Arbitraje comercial', 'Mediación', 'Defensa procesal', 'Recursos y apelaciones'],
  },
  {
    key: 'tax',
    icon: FileText,
    features: ['Planificación fiscal', 'Defensa tributaria', 'Auditorías fiscales', 'Estructuración internacional', 'Cumplimiento normativo'],
  },
  {
    key: 'labor',
    icon: Users,
    features: ['Contratos laborales', 'Negociación colectiva', 'Despidos y conflictos', 'Seguridad social', 'Compliance laboral'],
  },
  {
    key: 'intellectual',
    icon: Lightbulb,
    features: ['Registro de marcas', 'Patentes e invenciones', 'Derechos de autor', 'Licencias y franquicias', 'Defensa de PI'],
  },
  {
    key: 'real',
    icon: Home,
    features: ['Compraventa inmobiliaria', 'Arrendamientos', 'Desarrollo urbanístico', 'Hipotecas y financiación', 'Resolución de disputas'],
  },
]

function ServiceSection({ 
  service, 
  index,
  t 
}: { 
  service: typeof serviceData[0]
  index: number
  t: ReturnType<typeof useLanguage>['t']
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const Icon = service.icon
  const isEven = index % 2 === 0
  const serviceTranslations = t.services[service.key as keyof typeof t.services] as { title: string; description: string }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'py-16 md:py-24 opacity-0 translate-y-8 transition-all duration-700 ease-out',
        isVisible && 'opacity-100 translate-y-0',
        isEven ? 'bg-transparent' : 'bg-secondary/20'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-5">
        <div className={cn(
          'grid md:grid-cols-2 gap-8 md:gap-16 items-center',
          !isEven && 'md:grid-flow-dense'
        )}>
          {/* Content */}
          <div className={cn(!isEven && 'md:col-start-2')}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                {serviceTranslations.title}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
              {serviceTranslations.description}
            </p>
            <ul className="space-y-3 mb-6">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-all"
            >
              {t.nav.contact}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Visual */}
          <div className={cn(!isEven && 'md:col-start-1')}>
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-card to-secondary/50 border border-border overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon className="h-24 w-24 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up text-balance">
            {t.services.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200 text-pretty">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services */}
      {serviceData.map((service, index) => (
        <ServiceSection
          key={service.key}
          service={service}
          index={index}
          t={t}
        />
      ))}

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-card border border-border rounded-xl p-8 md:p-16 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              {t.contact.subtitle}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-pretty">
              {t.hero.subtitle}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              {t.nav.contact}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
