"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  Tag,
  FileText
} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    slug: 'novedades-derecho-corporativo-2024',
    title: 'Novedades en Derecho Corporativo para 2024',
    excerpt: 'Un análisis de los cambios legislativos más relevantes que afectarán a las empresas este año.',
    category: 'Derecho Corporativo',
    author: 'Carlos Mendoza',
    date: '2024-03-15',
    readTime: '8 min',
    featured: true,
  },
  {
    id: 2,
    slug: 'guia-fusiones-adquisiciones',
    title: 'Guía Práctica para Fusiones y Adquisiciones',
    excerpt: 'Todo lo que necesitas saber sobre el proceso de M&A, desde la due diligence hasta el cierre.',
    category: 'Derecho Corporativo',
    author: 'María González',
    date: '2024-03-10',
    readTime: '12 min',
    featured: true,
  },
  {
    id: 3,
    slug: 'reforma-laboral-impacto',
    title: 'Impacto de la Última Reforma Laboral',
    excerpt: 'Analizamos las implicaciones de los recientes cambios en la legislación laboral.',
    category: 'Derecho Laboral',
    author: 'Ana Martínez',
    date: '2024-03-05',
    readTime: '6 min',
    featured: false,
  },
  {
    id: 4,
    slug: 'proteccion-propiedad-intelectual',
    title: 'Cómo Proteger tu Propiedad Intelectual',
    excerpt: 'Estrategias efectivas para resguardar tus activos intangibles más valiosos.',
    category: 'Propiedad Intelectual',
    author: 'Diego Torres',
    date: '2024-02-28',
    readTime: '10 min',
    featured: false,
  },
  {
    id: 5,
    slug: 'planificacion-fiscal-estrategica',
    title: 'Planificación Fiscal Estratégica',
    excerpt: 'Optimiza la carga tributaria de tu empresa con estrategias legales y eficientes.',
    category: 'Derecho Fiscal',
    author: 'Roberto Sánchez',
    date: '2024-02-20',
    readTime: '9 min',
    featured: false,
  },
  {
    id: 6,
    slug: 'contratos-inmobiliarios-claves',
    title: 'Claves para Contratos Inmobiliarios Exitosos',
    excerpt: 'Los elementos esenciales que todo contrato de compraventa inmobiliaria debe incluir.',
    category: 'Derecho Inmobiliario',
    author: 'Laura Fernández',
    date: '2024-02-15',
    readTime: '7 min',
    featured: false,
  },
]

const categories = [
  'Derecho Corporativo',
  'Derecho Laboral',
  'Derecho Fiscal',
  'Propiedad Intelectual',
  'Derecho Inmobiliario',
  'Litigios',
]

function FeaturedPost({ 
  post, 
  delay,
  t 
}: { 
  post: typeof blogPosts[0]
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
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FileText className="h-16 w-16 text-primary/20" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
            {post.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </div>
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline underline-offset-4"
          >
            {t.blog.readMore}
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  )
}

function BlogCard({ 
  post, 
  delay,
  t 
}: { 
  post: typeof blogPosts[0]
  delay: number
  t: ReturnType<typeof useLanguage>['t']
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={cn(
        'group p-5 bg-card border border-border rounded-xl transition-all duration-500 ease-out opacity-0 translate-y-6',
        'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10',
        isVisible && 'opacity-100 translate-y-0'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
          {post.category}
        </span>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {post.readTime}
        </div>
      </div>
      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{post.author}</span>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline underline-offset-4"
        >
          {t.blog.readMore}
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const { t } = useLanguage()

  const featuredPosts = blogPosts.filter(p => p.featured)
  const regularPosts = blogPosts.filter(p => !p.featured)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up text-balance">
            {t.blog.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200 text-pretty">
            {t.blog.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-5 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Posts */}
            <section className="mb-12">
              <h2 className="font-serif text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Tag className="h-5 w-5 text-primary" />
                {t.blog.recent}
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {featuredPosts.map((post, index) => (
                  <FeaturedPost
                    key={post.id}
                    post={post}
                    delay={index * 100}
                    t={t}
                  />
                ))}
              </div>
            </section>

            {/* Regular Posts */}
            <section>
              <div className="space-y-4">
                {regularPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    delay={index * 100}
                    t={t}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-4">{t.blog.categories}</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-all">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-gradient-to-br from-card to-secondary/30 border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recibe las últimas novedades legales en tu correo.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md transition-all hover:bg-primary/90">
                    Suscribirse
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
