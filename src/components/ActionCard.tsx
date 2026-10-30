/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Download, BookOpen, Mail, Copy, Check, FileText, ArrowRight } from 'lucide-react';
import { OrderInfo } from '../utils/order';

interface ActionCardProps {
  order: OrderInfo;
  onOpenPreview: () => void;
  onOpenResend: () => void;
  onNotify: (msg: string) => void;
}

export const ActionCard: React.FC<ActionCardProps> = ({
  order,
  onOpenPreview,
  onOpenResend,
  onNotify,
}) => {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Simulate instantaneous clean delivery with realistic blob or direct trigger
    setTimeout(() => {
      const dummyContent = `# DE CERO A LA VIRALIZACIÓN
Autor: Equipo de Crecimiento
Edición: Digital 2026
Estado: Compra confirmada - Acceso Completo

ÍNDICE RESUMIDO:
1. La psicología de los primeros 3 segundos (El Gancho)
2. Retención profunda: Ritmo, narrativa y cortes
3. Los 120 ganchos probados para TikTok, Reels y Shorts
4. Ingeniería de algoritmos: Cómo medir y optimizar
5. Plan de acción de 30 días

¡Gracias por tu compra! Tu viaje hacia el crecimiento exponencial comienza aquí.`;

      const blob = new Blob([dummyContent], { type: 'text/markdown;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Guia_De_Cero_a_la_Viralizacion.txt');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloading(false);
      onNotify('¡Descarga iniciada con éxito! Guarda el archivo en tu dispositivo.');
    }, 800);
  };

  const handleCopyLink = () => {
    const accessUrl = window.location.href;
    navigator.clipboard?.writeText(accessUrl);
    setCopied(true);
    onNotify('Enlace de acceso copiado al portapapeles.');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto shadow-2xl mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Tu Material Digital Está Listo</h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Formato: {order.fileFormat} • Tamaño: {order.fileSize}
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono">Pedido</span>
          <p className="text-xs sm:text-sm font-mono text-zinc-200 font-semibold">{order.orderNumber}</p>
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-white text-black hover:bg-zinc-200 active:bg-zinc-300 rounded-lg font-semibold text-sm transition-colors shadow-sm disabled:opacity-75 cursor-pointer"
          aria-label="Descargar la guía en tu dispositivo"
        >
          <Download className="w-4 h-4 text-black" />
          <span>{downloading ? 'Preparando descarga...' : 'Descargar Guía Completa'}</span>
        </button>

        <button
          type="button"
          onClick={onOpenPreview}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-zinc-900 hover:bg-zinc-850 active:bg-zinc-800 text-white border border-zinc-700/80 rounded-lg font-medium text-sm transition-colors cursor-pointer"
          aria-label="Ver el contenido y temario de la guía en pantalla"
        >
          <BookOpen className="w-4 h-4 text-zinc-300" />
          <span>Ver Temario y Capítulos</span>
          <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
        </button>
      </div>

      {/* Secondary Actions */}
      <div className="mt-6 pt-5 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-zinc-400">
        <button
          type="button"
          onClick={onOpenResend}
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
        >
          <Mail className="w-3.5 h-3.5 text-zinc-400" />
          <span>¿No recibiste el correo? Reenviar accesos</span>
        </button>

        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
          <span>{copied ? '¡Enlace copiado!' : 'Copiar enlace permanente'}</span>
        </button>
      </div>
    </div>
  );
};
