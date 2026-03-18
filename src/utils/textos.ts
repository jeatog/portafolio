/**
 * Textos de UI centralizados para soporte i18n.
 */

export const textos = {
  sitio: {
    titulo: 'Portfolio - Desarrollador de Software',
    descripcion:
      'Portfolio personal. Desarrollador de Software especializado en backend, infraestructura y aplicaciones web.',
  },
  navegacion: {
    inicio: 'Inicio',
    experiencia: 'Experiencia',
    proyectos: 'Proyectos',
    educacion: 'Educación',
    contacto: 'Contáctame',
  },
  tema: {
    eligeTema: 'Elige el tema',
    claro: 'Claro',
    oscuro: 'Oscuro',
    sistema: 'Sistema',
  },
  hero: {
    nombre: 'Jesús A. Toledo',
    rol: 'Desarrollador de Software',
    tagline: 'Construyo aplicaciones web y transformo sistemas heredados en soluciones modernas',
    ctaProyectos: 'Ver proyectos',
    ctaContacto: 'Contáctame',
  },
  sociales: {
    github: 'https://github.com/jeatog',
    linkedin: 'https://www.linkedin.com/in/jeatog/',
    correo: 'contacto@jeatog.dev',
  },
  experiencia: {
    titulo: 'Experiencia',
    saberMas: 'Saber más',
    items: [
      {
        fecha: 'Enero 2026 - Actualidad',
        puesto: 'Desarrollador líder de back-end',
        empresa: 'SmartKode Consultores',
        descripcion:
          'Diseño e implementación de plataforma SSO con Auth0, integración con edX Enterprise y servicios backend en Java (Spring Boot). Diseño de base de datos desde cero y liderazgo técnico del proyecto.',
      },
      {
        fecha: 'Agosto 2025 - Enero 2026',
        puesto: 'Desarrollador Java Líder',
        empresa: 'SmartKode Consultores',
        descripcion:
          'Migración de aplicación standalone de Java 8 a Java 21, de Ant a Maven. Adaptación de librerías legacy, optimización de rendimiento y rediseño de UI JavaFX. Coordinación de equipo de desarrollo.',
      },
      {
        fecha: 'Febrero 2024 - Diciembre 2025',
        puesto: 'Desarrollador web',
        empresa: 'SmartKode Consultores',
        descripcion:
          'Desarrollo fullstack en múltiples proyectos con Java, Spring Boot, JSF y bases de datos Oracle/PostgreSQL/MySQL. Integración de APIs REST y SOAP, despliegues en Google Cloud y Oracle Cloud. Integración de Gemini AI para análisis automático de comprobantes.',
      },
      {
        fecha: 'Julio 2022 - Abril 2023',
        puesto: 'Desarrollador web (Prácticas)',
        empresa: 'SmartKode Consultores',
        descripcion:
          'Desarrollo fullstack con JSF, Spring y Oracle SQL para aseguradora automotriz. Portal administrativo con React, Bootstrap y Firebase. Inicio de carrera profesional.',
      },
    ],
  },
  proyectos: {
    titulo: 'Proyectos',
    codigo: 'Código',
    preview: 'Preview',
    items: [
      {
        titulo: 'Traxo',
        descripcion:
          'Aplicación web para rastrear transferencias SPEI. Scraping de Banxico, OCR de comprobantes con EasyOCR y fallback a Claude Vision. Protegida con Cloudflare WAF (acceso solo desde México) y Turnstile anti-bot.',
        imagen: '/projects/traxo.webp',
        tags: ['Angular', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Docker'],
        github: 'https://github.com/jeatog/traxo',
        enlace: 'https://traxo.mx',
      },
    ],
  },
  educacion: {
    titulo: 'Educación',
  },
  error404: {
    titulo: '404 - Página no encontrada',
    descripcion: 'La página que buscas no existe.',
    mensaje: 'La página que buscas no existe.',
    volverInicio: 'Volver al inicio',
  },
  footer: {
    derechos: (anio: number) => `\u00A9 ${anio}`,
  },
};
