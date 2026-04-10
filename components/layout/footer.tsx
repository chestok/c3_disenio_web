"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-[1200px] mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <svg
                viewBox="0 0 40 40"
                className="h-10 w-10 text-primary"
                fill="currentColor"
              >
                <path d="M20 2L4 10v20l16 8 16-8V10L20 2zm0 4l12 6v14l-12 6-12-6V12l12-6z" />
                <path d="M20 8l-8 4v8l8 4 8-4v-8l-8-4zm0 3l5 2.5v5L20 21l-5-2.5v-5L20 11z" />
              </svg>
              <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
                Lex<span className="text-primary">Firma</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Soluciones jurídicas de excelencia con más de 25 años de experiencia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              {t.nav.services}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.services.corporate.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.services.litigation.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.services.tax.title}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.services.labor.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              {t.nav.firm}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/firm" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.firm.history.title}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.nav.team}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              {t.nav.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Av. Principal 1234, Piso 15<br />
                  Ciudad, CP 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:info@lexfirma.com" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  info@lexfirma.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{t.footer.followUs}:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Copyright & Legal Links */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
              <span>&copy; {currentYear} LexFirma. {t.footer.rights}.</span>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  {t.footer.privacy}
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  {t.footer.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
