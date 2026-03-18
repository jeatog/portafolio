import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/proyectos' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    stack: z.array(z.string()),
    industria: z.string(),
    estado: z.enum(['completado', 'en-progreso', 'planeado']),
    miniatura: z.string(),
    ogImagen: z.string().optional(),
    urlSitio: z.string().url().optional(),
    urlRepo: z.string().url().optional(),
    orden: z.number(),
    destacado: z.boolean().default(false),
    fechaPublicacion: z.date(),
  }),
});

export const collections = { proyectos };
