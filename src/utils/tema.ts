/**
 * Utilidades de tema - localStorage + prefers-color-scheme
 */

type Tema = 'light' | 'dark';

const CLAVE_STORAGE = 'tema';

/** Obtiene la preferencia de tema del usuario */
export function obtenerPreferenciaTema(): Tema {
  if (typeof localStorage !== 'undefined') {
    const guardado = localStorage.getItem(CLAVE_STORAGE);
    if (guardado === 'light' || guardado === 'dark') return guardado;
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

/** Guarda la preferencia de tema y la aplica */
export function guardarPreferenciaTema(tema: Tema): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(CLAVE_STORAGE, tema);
  }
  aplicarTema(tema);
}

/** Aplica el tema al documento */
export function aplicarTema(tema: Tema): void {
  const raiz = document.documentElement;
  raiz.classList.toggle('dark', tema === 'dark');
}
