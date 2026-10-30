/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenSupport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSupport }) => {
  return (
    <footer className="border-t border-zinc-900 bg-black py-10 px-4 sm:px-6 text-zinc-500 text-xs">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="font-semibold text-zinc-300 text-sm">De Cero a la Viralización</p>
          <p className="mt-1 text-zinc-500">
            © {new Date().getFullYear()} Todos los derechos reservados. Edición Digital.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Transacción segura y cifrada</span>
          </div>
          <span className="text-zinc-800">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
            <span>Garantía de 30 días</span>
          </div>
          <span className="text-zinc-800">•</span>
          <button
            type="button"
            onClick={onOpenSupport}
            className="hover:text-zinc-200 transition-colors underline cursor-pointer"
          >
            Contacto
          </button>
        </div>
      </div>
    </footer>
  );
};
