"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { 
  Linkedin, 
  Mail, 
  ArrowRight,
  User
} from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    role: 'partner',
    specialty: 'Derecho Corporativo',
    bio: 'Más de 20 años de experiencia en fusiones y adquisiciones.',
    email: 'c.mendoza@lexfirma.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'María González',
    role: 'partner',
    specialty: 'Litigios',
    bio: 'Especialista en resolución de conflictos comerciales complejos.',
    email: 'm.gonzalez@lexfirma.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Roberto Sánchez',
    role: 'partner',
    specialty: 'Derecho Fiscal',
    bio: 'Experto en planificación tributaria internacional.',
    email: 'r.sanchez@lexfirma.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 4,
    name: 'Ana Martínez',
    role: 'senior',
    specialty: 'Derecho Laboral',
    bio: 'Amplia experiencia en relaciones laborales y negociación colectiva.',
    email: 'a.martinez@lexfirma.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 5,
    name: 'Diego Torres',
    role: 'senior',
    specialty: 'Propiedad Intelectual',
    bio: 'Especializado en protección de marcas y patentes tecnológicas.',
    email: 'd.torres@lexfirma.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 6,
    name: 'Laura Fernández',
    role: 'associate',
    specialty: 'Derecho Inmobiliario',
    bio: 'Enfocada en transacciones inmobiliarias comerciales.',
    email: 'l.fernandez@lexfirma.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 7,
    name: 'Javier Ruiz',
    role: 'associate',
    specialty: 'Derecho Corporativo',
    bio: 'Especialista en startups y emprendimientos tecnológicos.',
    email: 'j.ruiz@lexfirma.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 8,
    name: 'Patricia López',
    role: 'associate',
    specialty: 'Litigios',
    bio: 'Experiencia en arbitraje comercial nacional e internacional.',
    email: 'p.lopez@lexfirma.com',
    linkedin: 'https://linkedin.com',
  },
]

function TeamCard({ 
  member, 
  delay,
  t 
}: { 
  member: typeof teamMembers[0]
  delay: number
  t: ReturnType<typeof useLanguage>['t']
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  const roleLabel = t.team[member.role as keyof typeof t.team] as string

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        'group bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 ease-out opacity-0 translate-y-6',
        'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10',
        isVisible && 'opacity-100 translate-y-0'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Avatar */}
      <div className="aspect-square bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <User className="h-20 w-20 text-muted-foreground/30" />
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-foreground">{member.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
              {roleLabel}
            </span>
            <span className="text-sm text-muted-foreground">{member.specialty}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {member.bio}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${member.email}`}
            className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-all"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary rounded-md transition-all"
            aria-label={`LinkedIn de ${member.name}`}
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function TeamPage() {
  const { t } = useLanguage()

  const partners = teamMembers.filter(m => m.role === 'partner')
  const seniors = teamMembers.filter(m => m.role === 'senior')
  const associates = teamMembers.filter(m => m.role === 'associate')

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up text-balance">
            {t.team.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200 text-pretty">
            {t.team.subtitle}
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            {t.team.partner}s
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                delay={index * 100}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seniors */}
      <section className="py-12 md:py-16 bg-secondary/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            {t.team.senior}s
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seniors.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                delay={index * 100}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Associates */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
            {t.team.associate}s
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {associates.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                delay={index * 100}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-card border border-border rounded-xl p-8 md:p-16 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              {t.contact.subtitle}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-pretty">
              Nuestro equipo está listo para ayudarte con tus necesidades legales.
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
