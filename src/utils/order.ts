/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface OrderInfo {
  orderNumber: string;
  productName: string;
  tagline: string;
  customerEmail: string;
  purchaseDate: string;
  status: 'Completado' | 'En proceso';
  accessType: string;
  modulesIncluded: string[];
  fileFormat: string;
  fileSize: string;
}

export function formatOrderDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

export function maskEmail(email: string): string {
  if (!email || !email.includes('@')) return email;
  const [user, domain] = email.split('@');
  if (user.length <= 2) return `${user[0]}***@${domain}`;
  return `${user.slice(0, 2)}***${user.slice(-1)}@${domain}`;
}

export function getDefaultOrder(): OrderInfo {
  return {
    orderNumber: 'VIRAL-2026-98421',
    productName: 'De Cero a la Viralización',
    tagline: 'El método probado para crear contenido de alto impacto y crecimiento orgánico',
    customerEmail: 'tu-correo@ejemplo.com',
    purchaseDate: formatOrderDate(new Date()),
    status: 'Completado',
    accessType: 'Acceso digital de por vida',
    fileFormat: 'PDF interactivo + Hojas de trabajo',
    fileSize: '48.2 MB',
    modulesIncluded: [
      'Guía completa De Cero a la Viralización (PDF 180 páginas)',
      'Colección de 120 Ganchos (Hooks) de Retención Psicológica',
      'Plantilla de Guionización en 5 Pasos para Vídeos Cortos',
      'Planificador de Contenido Viral de 30 Días (Notion & PDF)',
      'Acceso exclusivo a futuras actualizaciones de la guía'
    ],
  };
}
