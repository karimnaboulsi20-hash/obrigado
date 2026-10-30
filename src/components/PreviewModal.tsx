/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, BookOpen, Download, CheckCircle, FileText } from 'lucide-react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  onClose,
  onDownload,
}) => {
  const [activeTab, setActiveTab] = useState<'indice' | 'extracto'>('indice');

  if (!isOpen) return null;

  const chapters = [
    {
      num: 'Capítulo 01',
      title: 'La Anatomía del Gancho Inmortal',
      desc: 'Por qué el 80% de los vídeos fracasan en los primeros 2.5 segundos y cómo crear curiosidad irresistible sin caer en clickbait vacío.',
      pages: 'Págs. 12 - 45',
    },
    {
      num: 'Capítulo 02',
      title: 'El Catálogo Maestro: 120 Ganchos Comprobados',
      desc: 'Estructuras listas para copiar y pegar clasificadas por nicho: educación, entretenimiento, negocios, estilo de vida y tecnología.',
      pages: 'Págs. 46 - 98',
    },
    {
      num: 'Capítulo 03',
      title: 'Ingeniería del Ritmo: Gráfico de Retención',
      desc: 'La regla de los cambios de plano cada 4 segundos, uso de patrones sonoros y cortes visuales para mantener la curva plana hasta el final.',
      pages: 'Págs. 99 - 134',
    },
    {
      num: 'Capítulo 04',
      title: 'Métricas Reales vs. Vanidad Algorítmica',
      desc: 'Cómo descifrar las estadísticas que los algoritmos de TikTok, Reels y Shorts priorizan para recomendar tus publicaciones masivamente.',
      pages: 'Págs. 135 - 158',
    },
    {
      num: 'Capítulo 05',
      title: 'El Plan de Lanzamiento y Crecimiento en 30 Días',
      desc: 'Cronograma paso a paso para publicar con consistencia sin sufrir agotamiento creativo, con plantillas de guiones y Notion.',
      pages: 'Págs. 159 - 180',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="text-base font-semibold text-white">
                De Cero a la Viralización • Vista Previa
              </h3>
              <p className="text-xs text-zinc-400">Guía completa en formato PDF interactivo</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal de vista previa"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-5 pt-3 border-b border-zinc-800/80 flex gap-4 text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('indice')}
            className={`pb-2.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'indice'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Índice de Capítulos (5)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('extracto')}
            className={`pb-2.5 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'extracto'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Fragmento de Muestra
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-sm text-zinc-300">
          {activeTab === 'indice' ? (
            <div className="space-y-3">
              {chapters.map((ch, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-zinc-900/60 border border-zinc-800/80 rounded-lg hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                    <span className="font-mono font-medium text-emerald-400">{ch.num}</span>
                    <span className="font-mono text-zinc-400">{ch.pages}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{ch.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{ch.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-5 bg-zinc-900/40 border border-zinc-800/80 rounded-lg space-y-3 font-sans leading-relaxed text-zinc-300 text-xs sm:text-sm">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                <FileText className="w-3.5 h-3.5" />
                <span>Extracto del Capítulo 1 • Principio Fundamental</span>
              </div>
              <h4 className="text-base font-bold text-white">
                "La atención no se pide, se secuestra éticamente en el segundo cero."
              </h4>
              <p>
                El usuario promedio desplaza su dedo por la pantalla cada 1.8 segundos. Si tu vídeo comienza con saludos cordiales ("Hola a todos, hoy les voy a hablar de..."), el 70% de tu audiencia ya ha deslizado hacia el siguiente contenido antes de que comiences tu idea.
              </p>
              <p>
                En esta guía aprenderás la fórmula <strong>C-E-R</strong> (Curiosidad, Expectativa, Recompensa) para retener al espectador sin necesidad de trucos de baja calidad o promesas falsas.
              </p>
              <div className="pt-2 text-xs text-zinc-400 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Descarga la versión completa para leer los 5 capítulos íntegros.</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-900/60 border-t border-zinc-800 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Cerrar vista
          </button>

          <button
            type="button"
            onClick={() => {
              onDownload();
              onClose();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-zinc-200 rounded-lg font-semibold text-xs transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-black" />
            <span>Descargar Guía Completa</span>
          </button>
        </div>
      </div>
    </div>
  );
};
