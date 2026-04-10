"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { type Language } from '@/lib/translations'
import { cn } from '@/lib/utils'

const languages: { code: Language; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
  { code: 'fr', label: 'FR' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/firm', label: t.nav.firm },
    { href: '/team', label: t.nav.team },
    { href: '/blog', label: t.nav.blog },
    { href: '/news', label: t.nav.news },
    { href: '/podcast', label: t.nav.podcast },
    { href: '/contact', label: t.nav.contact },
  ]

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center">
                <svg
                  viewBox="0 0 40 40"
                  className="h-10 w-10 text-primary"
                  fill="currentColor"
                >
                  <path d="M20 2L4 10v20l16 8 16-8V10L20 2zm0 4l12 6v14l-12 6-12-6V12l12-6z" />
                  <path d="M20 8l-8 4v8l8 4 8-4v-8l-8-4zm0 3l5 2.5v5L20 21l-5-2.5v-5L20 11z" />
                </svg>
                <span className="ml-2 font-serif text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                  Lex<span className="text-primary">Firma</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md',
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Language Selector & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="hidden sm:flex items-center gap-1 text-sm">
                {languages.map((lang, index) => (
                  <span key={lang.code} className="flex items-center">
                    <button
                      onClick={() => setLanguage(lang.code)}
                      className={cn(
                        'px-1.5 py-0.5 rounded transition-colors duration-200',
                        language === lang.code
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {lang.label}
                    </button>
                    {index < languages.length - 1 && (
                      <span className="text-border mx-0.5">|</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50 w-[75%] max-w-sm bg-card border-l border-border shadow-2xl lg:hidden transition-transform duration-300 ease-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex items-center justify-between p-5 border-b border-border">
            <span className="font-serif text-lg font-semibold text-foreground">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'block px-6 py-3 text-base font-medium transition-colors duration-200',
                  pathname === link.href
                    ? 'text-primary bg-secondary/30'
                    : 'text-foreground hover:text-primary hover:bg-secondary/20'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Selector Mobile */}
          <div className="p-5 border-t border-border">
            <div className="flex items-center justify-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    'px-3 py-1.5 text-sm rounded-md transition-all duration-200',
                    language === lang.code
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
