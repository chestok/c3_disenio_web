"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { 
  Calendar, 
  ArrowRight,
  Newspaper,
  Award,
  Users,
  Building2
} from 'lucide-react'

const newsItems = [
  {
    id: 1,
    title: 'LexFirma reconocida entre las mejores firmas del país',
    excerpt: 'Nuestra firma ha sido distinguida por la prestigiosa publicación Chambers & Partners como una de las firmas líderes en derecho corporativo.',
    category: 'Reconocimientos',
    date: '2024-03-20',
    icon: Award,
    featured: true,
  },
  {
    id: 2,
    title: 'Inauguración de nuevas oficinas en Madrid',
    excerpt: 'Expandimos nuestra presencia con la apertura de una nueva sede en el corazón financiero de Madrid.',
    category: 'Expansión',
    date: '2024-03-15',
    icon: Building2,
    featured: true,
  },
  {
    id: 3,
    title: 'Conferencia anual de Derecho Corporativo 2024',
    excerpt: 'Participamos como ponentes en el evento más importante del sector, compartiendo nuestra visión sobre las tendencias del mercado.',
    category: 'Eventos',
    date: '2024-03-10',
    icon: Users,
    featured: false,
  },
  {
    id: 4,
    title: 'Alianza estratégica con firma internacional',
    excerpt: 'Formalizamos una alianza con una reconocida firma europea para ofrecer servicios transfronterizos.',
    category: 'Alianzas',
    date: '2024-03-05',
    icon: Newspaper,
    featured: false,
  },
  {
    id: 5,
    title: 'Nuevo socio se incorpora al área de Litigios',
    excerpt: 'María Rodríguez se une a nuestro equipo como socia del departamento de litigios comerciales.',
    category: 'Equipo',
    date: '2024-02-28',
    icon: Users,
    featured: false,
  },
  {
    id: 6,
    title: 'Premio al mejor artículo jurídico del año',
    excerpt: 'Nuestro socio Carlos Mendoza recibe reconocimiento por su análisis sobre reformas corporativas.',
    category: 'Reconocimientos',
    date: '2024-02-20',
    icon: Award,
    featured: false,
  },
  {
    id: 7,
    title: 'Webinar: Tendencias legales para 2024',
    excerpt: 'Organizamos un webinar gratuito para analizar las principales tendencias legislativas del año.',
    category: 'Eventos',
    date: '2024-02-15',
    icon: Users,
    featured: false,
  },
  {
    id: 8,
    title: 'Publicación del informe anual de actividad',
    excerpt: 'Presentamos nuestro informe de actividad 2023 con los principales logros y casos destacados.',
    category: 'Corporativo',
    date: '2024-02-10',
    icon: Newspaper,
    featured: false,
  },
]

function FeaturedNewsCard({ 
  news, 
  delay,
  t 
}: { 
  news: typeof newsItems[0]
  delay: number
  t: ReturnType<typeof useLanguage>['t']
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const Icon = news.icon

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'group bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 ease-out opacity-0 translate-y-6',
        'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10',
        isVisible && 'opacity-100 translate-y-0'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-16 w-16 text-primary/20" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
            {news.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {new Date(news.date).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {news.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {news.excerpt}
        </p>
        <button className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline underline-offset-4">
          {t.blog.readMore}
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </article>
  )
}

function NewsCard({ 
  news, 
  delay,
  t 
}: { 
  news: typeof newsItems[0]
  delay: number
  t: ReturnType<typeof useLanguage>['t']
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const Icon = news.icon

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'group flex gap-4 p-4 bg-card border border-border rounded-xl transition-all duration-500 ease-out opacity-0 translate-y-6',
        'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10',
        isVisible && 'opacity-100 translate-y-0'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
            {news.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {new Date(news.date).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </span>
        </div>
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {news.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {news.excerpt}
        </p>
      </div>

      {/* Arrow */}
      <div className="shrink-0 self-center">
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </article>
  )
}

export default function NewsPage() {
  const { t } = useLanguage()

  const featuredNews = newsItems.filter(n => n.featured)
  const regularNews = newsItems.filter(n => !n.featured)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up text-balance">
            {t.news.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200 text-pretty">
            {t.news.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 py-12">
        {/* Featured News */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {featuredNews.map((news, index) => (
              <FeaturedNewsCard
                key={news.id}
                news={news}
                delay={index * 100}
                t={t}
              />
            ))}
          </div>
        </section>

        {/* Regular News */}
        <section>
          <h2 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Newspaper className="h-5 w-5 text-primary" />
            Más noticias
          </h2>
          <div className="space-y-4">
            {regularNews.map((news, index) => (
              <NewsCard
                key={news.id}
                news={news}
                delay={index * 100}
                t={t}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
