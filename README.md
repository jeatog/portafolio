# Portfolio - Jesús A. Toledo

Portfolio personal. Sitio estático construido con Astro, Tailwind CSS y la paleta [Rose Pine](https://rosepinetheme.com/palette/ingredients/).

**URL:** [jeatog.dev](https://jeatog.dev)

## Stack

- Astro 5
- Tailwind CSS 4
- TypeScript
- GitHub Pages + GitHub Actions

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
