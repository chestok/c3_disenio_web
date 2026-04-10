"use client"

import { useLanguage } from '@/lib/language-context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { 
  Play, 
  Clock, 
  Calendar,
  Headphones,
  Mic
} from 'lucide-react'

const episodes = [
  {
    id: 1,
    number: 24,
    title: 'El futuro del Derecho Corporativo',
    description: 'Analizamos las tendencias que transformarán la práctica del derecho empresarial en los próximos años.',
    guest: 'Dr. Carlos Mendoza',
    duration: '45 min',
    date: '2024-03-18',
    featured: true,
  },
  {
    id: 2,
    number: 23,
    title: 'Inteligencia Artificial y el sector legal',
    description: 'Exploramos cómo la IA está revolucionando la forma en que trabajamos los abogados.',
    guest: 'Dra. María González',
    duration: '38 min',
    date: '2024-03-11',
    featured: true,
  },
  {
    id: 3,
    number: 22,
    title: 'Compliance empresarial: retos actuales',
    description: 'Conversamos sobre los desafíos del cumplimiento normativo en las empresas modernas.',
    guest: 'Roberto Sánchez',
    duration: '42 min',
    date: '2024-03-04',
    featured: false,
  },
  {
    id: 4,
    number: 21,
    title: 'Derecho laboral en la era digital',
    description: 'Discutimos los cambios en las relaciones laborales con el auge del trabajo remoto.',
    guest: 'Ana Martínez',
    duration: '35 min',
    date: '2024-02-26',
    featured: false,
  },
  {
    id: 5,
    number: 20,
    title: 'Protección de datos: GDPR y más allá',
    description: 'Un análisis profundo de las regulaciones de privacidad y su impacto en las empresas.',
    guest: 'Diego Torres',
    duration: '50 min',
    date: '2024-02-19',
    featured: false,
  },
  {
    id: 6,
    number: 19,
    title: 'Arbitraje comercial internacional',
    description: 'Las claves para entender y aprovechar el arbitraje en disputas transfronterizas.',
    guest: 'Patricia López',
    duration: '47 min',
    date: '2024-02-12',
    featured: false,
  },
  {
    id: 7,
    number: 18,
    title: 'Startups: aspectos legales esenciales',
    description: 'Todo lo que los emprendedores deben saber antes de lanzar su startup.',
    guest: 'Javier Ruiz',
    duration: '40 min',
    date: '2024-02-05',
    featured: false,
  },
  {
    id: 8,
    number: 17,
    title: 'Derecho inmobiliario en tiempos de crisis',
    description: 'Cómo navegar el mercado inmobiliario en contextos de incertidumbre económica.',
    guest: 'Laura Fernández',
    duration: '36 min',
    date: '2024-01-29',
    featured: false,
  },
]

function FeaturedEpisode({ 
  episode, 
  delay,
  t 
}: { 
  episode: typeof episodes[0]
  delay: number
  t: ReturnType<typeof useLanguage>['t']
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

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
      {/* Cover */}
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Mic className="h-20 w-20 text-primary/30 mb-4" />
          <span className="text-4xl font-serif font-bold text-primary/50">
            #{episode.number}
          </span>
        </div>
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm">
          <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25 transition-transform hover:scale-110">
            <Play className="h-6 w-6 text-primary-foreground ml-1" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
            {t.podcast.episode} {episode.number}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {episode.duration}
          </div>
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {episode.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {episode.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Con: <span className="text-foreground">{episode.guest}</span>
          </span>
          <span className="text-xs text-muted-foreground">
            {new Date(episode.date).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>
    </article>
  )
}

function EpisodeCard({ 
  episode, 
  delay,
  t 
}: { 
  episode: typeof episodes[0]
  delay: number
  t: ReturnType<typeof useLanguage>['t']
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

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
      {/* Episode Number */}
      <div className="w-16 h-16 shrink-0 rounded-lg bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
        <span className="text-xl font-serif font-bold text-primary">#{episode.number}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {episode.duration}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {new Date(episode.date).toLocaleDateString('es-ES', { 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
        </div>
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
          {episode.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-1">
          Con: {episode.guest}
        </p>
      </div>

      {/* Play Button */}
      <div className="shrink-0 self-center">
        <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
          <Play className="h-4 w-4 text-primary group-hover:text-primary-foreground ml-0.5" />
        </button>
      </div>
    </article>
  )
}

export default function PodcastPage() {
  const { t } = useLanguage()

  const featuredEpisodes = episodes.filter(e => e.featured)
  const regularEpisodes = episodes.filter(e => !e.featured)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Headphones className="h-10 w-10 text-primary animate-fade-in" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up text-balance">
            {t.podcast.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200 text-pretty">
            {t.podcast.subtitle}
          </p>

          {/* Platforms */}
          <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-up delay-300">
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium">
              Spotify
            </button>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium">
              Apple Podcasts
            </button>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium">
              Google Podcasts
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 py-12">
        {/* Featured Episodes */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Mic className="h-5 w-5 text-primary" />
            Episodios Destacados
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredEpisodes.map((episode, index) => (
              <FeaturedEpisode
                key={episode.id}
                episode={episode}
                delay={index * 100}
                t={t}
              />
            ))}
          </div>
        </section>

        {/* All Episodes */}
        <section>
          <h2 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Headphones className="h-5 w-5 text-primary" />
            Todos los episodios
          </h2>
          <div className="space-y-4">
            {regularEpisodes.map((episode, index) => (
              <EpisodeCard
                key={episode.id}
                episode={episode}
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
