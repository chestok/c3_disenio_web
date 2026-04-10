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
  ExternalLink 
} from 'lucide-react'

const serviceIcons = {
  corporate: Building2,
  litigation: Scale,
  tax: FileText,
  labor: Users,
  intellectual: Lightbulb,
  real: Home,
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
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'opacity-0 translate-y-8 transition-all duration-700 ease-out',
        isVisible && 'opacity-100 translate-y-0',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}

function ServiceCard({ 
  title, 
  description, 
  icon: Icon,
  delay 
}: { 
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  delay: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'group p-6 bg-card border border-border rounded-lg transition-all duration-300 ease-out opacity-0 translate-y-6',
        'hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30',
        isVisible && 'opacity-100 translate-y-0'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function StatCard({ 
  value, 
  label, 
  delay 
}: { 
  value: string
  label: string
  delay: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'text-center p-6 opacity-0 translate-y-6 transition-all duration-500 ease-out',
        isVisible && 'opacity-100 translate-y-0'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
        {value}
      </div>
      <div className="text-muted-foreground text-sm uppercase tracking-wider">
        {label}
      </div>
    </div>
  )
}

export default function HomePage() {
  const { t } = useLanguage()

  const services = [
    { key: 'corporate', ...t.services.corporate, icon: serviceIcons.corporate },
    { key: 'litigation', ...t.services.litigation, icon: serviceIcons.litigation },
    { key: 'tax', ...t.services.tax, icon: serviceIcons.tax },
    { key: 'labor', ...t.services.labor, icon: serviceIcons.labor },
    { key: 'intellectual', ...t.services.intellectual, icon: serviceIcons.intellectual },
    { key: 'real', ...t.services.real, icon: serviceIcons.real },
  ]

  const stats = [
    { value: '25+', label: t.stats.years },
    { value: '500+', label: t.stats.clients },
    { value: '2,000+', label: t.stats.cases },
    { value: '35', label: t.stats.lawyers },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-5 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up text-balance"
            >
              {t.hero.title}
            </h1>
            <p 
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up delay-200 text-pretty"
            >
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
              >
                {t.hero.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md transition-all duration-300 hover:bg-secondary hover:border-primary/30"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section with External Link */}
      <AnimatedSection className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                  {t.featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                  {t.featured.description}
                </p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground font-medium rounded-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground group"
                >
                  {t.featured.cta}
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Scale className="h-16 w-16 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.services.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t.services.subtitle}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.key}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 100}
              />
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-all"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-gradient-to-br from-card via-card to-secondary/50 border border-border rounded-xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                {t.contact.subtitle}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-pretty">
                {t.hero.subtitle}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
              >
                {t.nav.contact}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
