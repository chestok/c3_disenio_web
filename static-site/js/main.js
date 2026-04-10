/* ================================
   LexFirma - JavaScript Principal
   ================================ */

// Traducciones
const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      firm: 'La Firma',
      team: 'Equipo',
      blog: 'Blog',
      news: 'Noticias',
      podcast: 'Podcast',
      contact: 'Contacto'
    },
    hero: {
      badge: 'Excelencia Legal desde 1995',
      title: 'Soluciones Legales de',
      titleHighlight: 'Excelencia',
      subtitle: 'Ofrecemos asesoría jurídica integral con los más altos estándares de calidad y compromiso profesional.',
      cta: 'Consulta Gratuita',
      learnMore: 'Conocer Más'
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Áreas de práctica especializadas para satisfacer todas sus necesidades legales.',
      corporate: 'Derecho Corporativo',
      corporateDesc: 'Asesoría integral en fusiones, adquisiciones y gobierno corporativo.',
      litigation: 'Litigios',
      litigationDesc: 'Representación experta en disputas comerciales y civiles.',
      labor: 'Derecho Laboral',
      laborDesc: 'Soluciones completas en relaciones laborales y empleo.',
      ip: 'Propiedad Intelectual',
      ipDesc: 'Protección de marcas, patentes y derechos de autor.',
      tax: 'Derecho Tributario',
      taxDesc: 'Planificación fiscal y cumplimiento normativo.',
      realestate: 'Derecho Inmobiliario',
      realestateDesc: 'Transacciones inmobiliarias y desarrollo de proyectos.'
    },
    stats: {
      years: 'Años de Experiencia',
      cases: 'Casos Exitosos',
      clients: 'Clientes Satisfechos',
      offices: 'Oficinas'
    },
    cta: {
      title: '¿Necesita Asesoría Legal?',
      subtitle: 'Nuestro equipo de expertos está listo para ayudarle. Contáctenos hoy mismo.',
      button: 'Contactar Ahora'
    },
    footer: {
      description: 'Firma de abogados líder en servicios legales corporativos y comerciales.',
      quickLinks: 'Enlaces Rápidos',
      ourServices: 'Servicios',
      contactInfo: 'Contacto',
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos',
      cookies: 'Cookies'
    },
    contact: {
      title: 'Contáctenos',
      subtitle: 'Estamos aquí para ayudarle con sus necesidades legales.',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      selectSubject: 'Seleccione un asunto',
      subjects: {
        consultation: 'Consulta General',
        corporate: 'Derecho Corporativo',
        litigation: 'Litigios',
        labor: 'Derecho Laboral',
        other: 'Otro'
      },
      info: {
        title: 'Información de Contacto',
        address: 'Dirección',
        addressValue: 'Av. Principal 1234, Piso 15\nCiudad, País 12345',
        phoneTitle: 'Teléfono',
        phoneValue: '+1 (555) 123-4567',
        emailTitle: 'Email',
        emailValue: 'contacto@lexfirma.com',
        hours: 'Horario',
        hoursValue: 'Lun - Vie: 9:00 - 18:00'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      firm: 'The Firm',
      team: 'Team',
      blog: 'Blog',
      news: 'News',
      podcast: 'Podcast',
      contact: 'Contact'
    },
    hero: {
      badge: 'Legal Excellence since 1995',
      title: 'Legal Solutions of',
      titleHighlight: 'Excellence',
      subtitle: 'We offer comprehensive legal advice with the highest standards of quality and professional commitment.',
      cta: 'Free Consultation',
      learnMore: 'Learn More'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Specialized practice areas to meet all your legal needs.',
      corporate: 'Corporate Law',
      corporateDesc: 'Comprehensive advice on mergers, acquisitions and corporate governance.',
      litigation: 'Litigation',
      litigationDesc: 'Expert representation in commercial and civil disputes.',
      labor: 'Labor Law',
      laborDesc: 'Complete solutions in labor relations and employment.',
      ip: 'Intellectual Property',
      ipDesc: 'Protection of trademarks, patents and copyrights.',
      tax: 'Tax Law',
      taxDesc: 'Tax planning and regulatory compliance.',
      realestate: 'Real Estate Law',
      realestateDesc: 'Real estate transactions and project development.'
    },
    stats: {
      years: 'Years of Experience',
      cases: 'Successful Cases',
      clients: 'Satisfied Clients',
      offices: 'Offices'
    },
    cta: {
      title: 'Need Legal Advice?',
      subtitle: 'Our team of experts is ready to help you. Contact us today.',
      button: 'Contact Now'
    },
    footer: {
      description: 'Leading law firm in corporate and commercial legal services.',
      quickLinks: 'Quick Links',
      ourServices: 'Services',
      contactInfo: 'Contact',
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you with your legal needs.',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      selectSubject: 'Select a subject',
      subjects: {
        consultation: 'General Consultation',
        corporate: 'Corporate Law',
        litigation: 'Litigation',
        labor: 'Labor Law',
        other: 'Other'
      },
      info: {
        title: 'Contact Information',
        address: 'Address',
        addressValue: '1234 Main Ave, Floor 15\nCity, Country 12345',
        phoneTitle: 'Phone',
        phoneValue: '+1 (555) 123-4567',
        emailTitle: 'Email',
        emailValue: 'contact@lexfirma.com',
        hours: 'Hours',
        hoursValue: 'Mon - Fri: 9:00 - 18:00'
      }
    }
  },
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      firm: 'A Firma',
      team: 'Equipe',
      blog: 'Blog',
      news: 'Notícias',
      podcast: 'Podcast',
      contact: 'Contato'
    },
    hero: {
      badge: 'Excelência Jurídica desde 1995',
      title: 'Soluções Jurídicas de',
      titleHighlight: 'Excelência',
      subtitle: 'Oferecemos assessoria jurídica integral com os mais altos padrões de qualidade e compromisso profissional.',
      cta: 'Consulta Gratuita',
      learnMore: 'Saiba Mais'
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Áreas de prática especializadas para atender todas as suas necessidades jurídicas.',
      corporate: 'Direito Corporativo',
      corporateDesc: 'Assessoria integral em fusões, aquisições e governança corporativa.',
      litigation: 'Litígios',
      litigationDesc: 'Representação especializada em disputas comerciais e civis.',
      labor: 'Direito Trabalhista',
      laborDesc: 'Soluções completas em relações trabalhistas e emprego.',
      ip: 'Propriedade Intelectual',
      ipDesc: 'Proteção de marcas, patentes e direitos autorais.',
      tax: 'Direito Tributário',
      taxDesc: 'Planejamento fiscal e conformidade regulatória.',
      realestate: 'Direito Imobiliário',
      realestateDesc: 'Transações imobiliárias e desenvolvimento de projetos.'
    },
    stats: {
      years: 'Anos de Experiência',
      cases: 'Casos de Sucesso',
      clients: 'Clientes Satisfeitos',
      offices: 'Escritórios'
    },
    cta: {
      title: 'Precisa de Assessoria Jurídica?',
      subtitle: 'Nossa equipe de especialistas está pronta para ajudá-lo. Entre em contato hoje.',
      button: 'Contatar Agora'
    },
    footer: {
      description: 'Escritório de advocacia líder em serviços jurídicos corporativos e comerciais.',
      quickLinks: 'Links Rápidos',
      ourServices: 'Serviços',
      contactInfo: 'Contato',
      rights: 'Todos os direitos reservados.',
      privacy: 'Privacidade',
      terms: 'Termos',
      cookies: 'Cookies'
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estamos aqui para ajudá-lo com suas necessidades jurídicas.',
      name: 'Nome Completo',
      email: 'E-mail',
      phone: 'Telefone',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      selectSubject: 'Selecione um assunto',
      subjects: {
        consultation: 'Consulta Geral',
        corporate: 'Direito Corporativo',
        litigation: 'Litígios',
        labor: 'Direito Trabalhista',
        other: 'Outro'
      },
      info: {
        title: 'Informações de Contato',
        address: 'Endereço',
        addressValue: 'Av. Principal 1234, Andar 15\nCidade, País 12345',
        phoneTitle: 'Telefone',
        phoneValue: '+1 (555) 123-4567',
        emailTitle: 'E-mail',
        emailValue: 'contato@lexfirma.com',
        hours: 'Horário',
        hoursValue: 'Seg - Sex: 9:00 - 18:00'
      }
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      firm: 'Le Cabinet',
      team: 'Équipe',
      blog: 'Blog',
      news: 'Actualités',
      podcast: 'Podcast',
      contact: 'Contact'
    },
    hero: {
      badge: 'Excellence Juridique depuis 1995',
      title: 'Solutions Juridiques d\'',
      titleHighlight: 'Excellence',
      subtitle: 'Nous offrons des conseils juridiques complets avec les plus hauts standards de qualité et d\'engagement professionnel.',
      cta: 'Consultation Gratuite',
      learnMore: 'En Savoir Plus'
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Domaines de pratique spécialisés pour répondre à tous vos besoins juridiques.',
      corporate: 'Droit des Sociétés',
      corporateDesc: 'Conseil complet en fusions, acquisitions et gouvernance d\'entreprise.',
      litigation: 'Contentieux',
      litigationDesc: 'Représentation experte dans les litiges commerciaux et civils.',
      labor: 'Droit du Travail',
      laborDesc: 'Solutions complètes en relations de travail et emploi.',
      ip: 'Propriété Intellectuelle',
      ipDesc: 'Protection des marques, brevets et droits d\'auteur.',
      tax: 'Droit Fiscal',
      taxDesc: 'Planification fiscale et conformité réglementaire.',
      realestate: 'Droit Immobilier',
      realestateDesc: 'Transactions immobilières et développement de projets.'
    },
    stats: {
      years: 'Années d\'Expérience',
      cases: 'Affaires Réussies',
      clients: 'Clients Satisfaits',
      offices: 'Bureaux'
    },
    cta: {
      title: 'Besoin de Conseils Juridiques?',
      subtitle: 'Notre équipe d\'experts est prête à vous aider. Contactez-nous aujourd\'hui.',
      button: 'Contacter Maintenant'
    },
    footer: {
      description: 'Cabinet d\'avocats leader en services juridiques corporatifs et commerciaux.',
      quickLinks: 'Liens Rapides',
      ourServices: 'Services',
      contactInfo: 'Contact',
      rights: 'Tous droits réservés.',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      cookies: 'Cookies'
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes là pour vous aider avec vos besoins juridiques.',
      name: 'Nom Complet',
      email: 'E-mail',
      phone: 'Téléphone',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer le Message',
      selectSubject: 'Sélectionnez un sujet',
      subjects: {
        consultation: 'Consultation Générale',
        corporate: 'Droit des Sociétés',
        litigation: 'Contentieux',
        labor: 'Droit du Travail',
        other: 'Autre'
      },
      info: {
        title: 'Informations de Contact',
        address: 'Adresse',
        addressValue: '1234 Av. Principale, Étage 15\nVille, Pays 12345',
        phoneTitle: 'Téléphone',
        phoneValue: '+1 (555) 123-4567',
        emailTitle: 'E-mail',
        emailValue: 'contact@lexfirma.com',
        hours: 'Horaires',
        hoursValue: 'Lun - Ven: 9:00 - 18:00'
      }
    }
  }
};

// Estado actual del idioma
let currentLang = localStorage.getItem('lexfirma-lang') || 'es';

// Función para obtener texto traducido
function t(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

// Función para cambiar idioma
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lexfirma-lang', lang);
  updatePageTranslations();
}

// Actualizar traducciones en la página
function updatePageTranslations() {
  // Actualizar elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Actualizar placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  // Actualizar selector de idioma
  const langSelector = document.querySelector('.language-selector');
  if (langSelector) {
    langSelector.value = currentLang;
  }
}

// ================================
// Header Scroll Effect
// ================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ================================
// Mobile Menu
// ================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Cerrar menú al hacer click en un link
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ================================
// Scroll Animations
// ================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ================================
// Language Selector
// ================================
function initLanguageSelector() {
  const selector = document.querySelector('.language-selector');
  if (!selector) return;

  selector.value = currentLang;
  selector.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}

// ================================
// Contact Form
// ================================
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validación simple
    let isValid = true;
    form.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = '#dc2626';
      } else {
        field.style.borderColor = '';
      }
    });

    if (isValid) {
      // Simulación de envío
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      setTimeout(() => {
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        form.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 1500);
    }
  });
}

// ================================
// Podcast Player (Simulado)
// ================================
function initPodcastPlayer() {
  const playButtons = document.querySelectorAll('.play-btn, .episode-play');
  
  playButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('svg') || btn.innerHTML;
      const isPlaying = btn.classList.contains('playing');
      
      // Reset all buttons
      playButtons.forEach(b => {
        b.classList.remove('playing');
        b.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
      });

      if (!isPlaying) {
        btn.classList.add('playing');
        btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
      }
    });
  });
}

// ================================
// Newsletter Form
// ================================
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    
    if (input.value && input.value.includes('@')) {
      alert('¡Gracias por suscribirse a nuestro newsletter!');
      input.value = '';
    } else {
      alert('Por favor, ingrese un email válido.');
    }
  });
}

// ================================
// Active Navigation Link
// ================================
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ================================
// Smooth Scroll for Anchor Links
// ================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ================================
// Initialize Everything
// ================================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initScrollAnimations();
  initLanguageSelector();
  initContactForm();
  initPodcastPlayer();
  initNewsletter();
  setActiveNavLink();
  initSmoothScroll();
  updatePageTranslations();
});
