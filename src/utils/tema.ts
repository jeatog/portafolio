/**
 * Utilidades de tema - localStorage + prefers-color-scheme
 * Dark (Rose Pine Moon) es el tema por defecto.
 * Light (Rose Pine Dawn) se activa con la clase .light en <html>.
 */

type Tema = 'light' | 'dark';

const CLAVE_STORAGE = 'tema';

/** Obtiene la preferencia de tema del usuario */
export function obtenerPreferenciaTema(): Tema {
  if (typeof localStorage !== 'undefined') {
    const guardado = localStorage.getItem(CLAVE_STORAGE);
    if (guardado === 'light' || guardado === 'dark') return guardado;
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
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
  raiz.classList.toggle('light', tema === 'light');
}
