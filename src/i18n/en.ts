/**
 * Traducciones al inglés. Mapa plano clave → texto.
 * Las claves coinciden con los atributos data-i18n en los componentes.
 */
export const en: Record<string, string> = {
  // Navegación
  'nav.experiencia': 'Experience',
  'nav.proyectos': 'Projects',
  'nav.educacion': 'Education',
  'nav.contacto': 'Contact me',

  // Tema
  'tema.claro': 'Light',
  'tema.oscuro': 'Dark',
  'tema.sistema': 'System',

  // Hero
  'hero.rol': 'Software Developer',
  'hero.tagline':
    'I build web applications and transform legacy systems into modern solutions',
  'hero.ctaProyectos': 'View projects',
  'hero.ctaContacto': 'Contact me',

  // Experiencia
  'experiencia.titulo': 'Experience',
  'experiencia.saberMas': 'Learn more',
  'exp.0.puesto': 'Lead Back-end Developer',
  'exp.0.fecha': 'January 2026 - Present',
  'exp.0.descripcion':
    'SSO platform design and implementation with Auth0, edX Enterprise integration and backend services in Java (Spring Boot). Database design from scratch and technical project leadership.',
  'exp.1.puesto': 'Lead Java Developer',
  'exp.1.fecha': 'August 2025 - January 2026',
  'exp.1.descripcion':
    'Migration of standalone Java 8 application to Java 21, from Ant to Maven. Legacy library adaptation, performance optimization and JavaFX UI redesign. Development team coordination.',
  'exp.2.puesto': 'Web Developer',
  'exp.2.fecha': 'February 2024 - December 2025',
  'exp.2.descripcion':
    'Fullstack development across multiple projects with Java, Spring Boot, JSF and Oracle/PostgreSQL/MySQL databases. REST and SOAP API integration, deployments on Google Cloud and Oracle Cloud. Gemini AI integration for automatic receipt analysis.',
  'exp.3.puesto': 'Web Developer (Intern)',
  'exp.3.fecha': 'July 2022 - April 2023',
  'exp.3.descripcion':
    'Fullstack development with JSF, Spring and Oracle SQL for automotive insurance company. Admin portal with React, Bootstrap and Firebase. Career start.',

  // Proyectos
  'proyectos.titulo': 'Projects',
  'proyectos.codigo': 'Code',
  'proyectos.preview': 'Preview',
  'proy.0.descripcion':
    'Web application for tracking SPEI transfers. Banxico scraping, receipt OCR with EasyOCR and Claude Vision fallback. Protected with Cloudflare WAF (Mexico-only access) and Turnstile anti-bot.',

  // Educación
  'educacion.titulo': 'Education',
  'edu.0.carrera': 'B.S. Computer Science Engineering',

  // 404
  'error404.mensaje': 'The page you are looking for does not exist.',
  'error404.volverInicio': 'Back to home',
};
