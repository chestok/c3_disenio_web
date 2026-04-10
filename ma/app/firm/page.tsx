"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { 
  Target, 
  Eye, 
  Heart,
  Shield,
  Award,
  Handshake,
  Lightbulb,
  ArrowRight,
  Building2
} from 'lucide-react'

const valueIcons = {
  integrity: Shield,
  excellence: Award,
  commitment: Handshake,
  innovation: Lightbulb,
}

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

function ValueCard({ 
  icon: Icon, 
  label, 
  delay 
}: { 
  icon: React.ComponentType<{ className?: string }>
  label: string
  delay: number 
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'flex flex-col items-center p-6 bg-card border border-border rounded-xl transition-all duration-500 ease-out opacity-0 translate-y-6',
        'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10',
        isVisible && 'opacity-100 translate-y-0'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <span className="font-medium text-foreground text-center">{label}</span>
    </div>
  )
}

function TimelineItem({ 
  year, 
  title, 
  description, 
  delay 
}: { 
  year: string
  title: string
  description: string
  delay: number 
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'relative pl-8 pb-8 border-l-2 border-border last:border-transparent last:pb-0 opacity-0 translate-y-6 transition-all duration-500 ease-out',
        isVisible && 'opacity-100 translate-y-0'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-[9px]" />
      <span className="text-sm text-primary font-medium">{year}</span>
      <h4 className="text-lg font-semibold text-foreground mt-1 mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function FirmPage() {
  const { t } = useLanguage()

  const values = [
    { key: 'integrity', icon: valueIcons.integrity, label: t.firm.values.integrity },
    { key: 'excellence', icon: valueIcons.excellence, label: t.firm.values.excellence },
    { key: 'commitment', icon: valueIcons.commitment, label: t.firm.values.commitment },
    { key: 'innovation', icon: valueIcons.innovation, label: t.firm.values.innovation },
  ]

  const timeline = [
    { year: '1998', title: 'Fundación', description: 'Apertura de la primera oficina con un equipo de 5 abogados especializados.' },
    { year: '2005', title: 'Expansión Regional', description: 'Inauguración de oficinas en tres ciudades principales del país.' },
    { year: '2012', title: 'Reconocimiento Internacional', description: 'Primeros premios internacionales y alianzas con firmas globales.' },
    { year: '2018', title: '20 Aniversario', description: 'Celebración de dos décadas de excelencia con más de 30 profesionales.' },
    { year: '2024', title: 'Innovación Digital', description: 'Implementación de tecnología de vanguardia para mejor servicio al cliente.' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up text-balance">
            {t.firm.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200 text-pretty">
            {t.firm.subtitle}
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-8 w-8 text-primary" />
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {t.firm.history.title}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                {t.firm.history.content}
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                A lo largo de nuestra trayectoria, hemos construido relaciones duraderas con clientes nacionales e internacionales, 
                proporcionando soluciones legales innovadoras y efectivas que han contribuido al éxito de sus negocios.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="aspect-square rounded-xl bg-gradient-to-br from-card to-secondary/50 border border-border overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="h-32 w-32 text-primary/20" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {t.firm.mission.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t.firm.mission.content}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100} className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {t.firm.vision.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {t.firm.vision.content}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                {t.firm.values.title}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={value.key}
                icon={value.icon}
                label={value.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-[800px] mx-auto px-5">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nuestra Trayectoria
            </h2>
          </AnimatedSection>

          <div className="relative">
            {timeline.map((item, index) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                title={item.title}
                description={item.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-card border border-border rounded-xl p-8 md:p-16 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              {t.contact.subtitle}
            </h2>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              {t.nav.team}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
