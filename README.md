# Portfolio - Jesús A. Toledo

Portfolio personal. Sitio estático construido con Astro, Tailwind CSS y la paleta [Rose Pine](https://rosepinetheme.com/palette/ingredients/).

**URL:** [jeatog.dev](https://jeatog.dev)

[![Astro](https://img.shields.io/badge/Astro-6-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deploy-222222?logo=githubpages&logoColor=white)](https://jeatog.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

## Desarrollo local

```bash
npm install
npm run dev
```

El servidor local se inicia en `http://localhost:4321`.

## Build

```bash
npm run build
```

Los archivos de producción se generan en `./dist/`.

## Deploy

El deploy es automático. Cada push a `master` dispara el workflow de GitHub Actions que buildea y deployea a GitHub Pages.

Para deploy manual:

```bash
npm run build
```

Y subir el contenido de `dist/` al hosting.

## Licencia

MIT — ver [LICENSE](LICENSE). Copyright © 2026 Jesús A. Toledo.
