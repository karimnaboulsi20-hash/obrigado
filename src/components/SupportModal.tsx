/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, LifeBuoy, Mail, MessageSquare, Clock } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-modal-title"
    >
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Cerrar soporte"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
            <LifeBuoy className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 id="support-modal-title" className="text-base font-semibold text-white">
              Canales de Ayuda y Soporte
            </h3>
            <p className="text-xs text-zinc-400">Estamos aquí para resolver cualquier duda</p>
          </div>
        </div>

        <div className="space-y-3 my-4">
          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-lg flex items-start gap-3">
            <Mail className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-white block mb-0.5">Atención por Correo</span>
              <p className="text-zinc-400 mb-1.5">Escríbenos directamente con tu número de pedido:</p>
              <a
                href="mailto:soporte@deceroalaviralizacion.com"
                className="text-white underline font-mono text-xs hover:text-emerald-400"
              >
                soporte@deceroalaviralizacion.com
              </a>
            </div>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-lg flex items-start gap-3">
            <Clock className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-white block mb-0.5">Tiempo de Respuesta</span>
              <p className="text-zinc-400">
                Respondemos a todas las consultas en menos de 4 horas hábiles, de lunes a domingo.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-lg flex items-start gap-3">
            <MessageSquare className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-white block mb-0.5">Garantía Incondicional</span>
              <p className="text-zinc-400">
                Dispones de 30 días de garantía de satisfacción total desde el momento de tu compra.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-zinc-800/80 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
