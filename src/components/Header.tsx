/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, LifeBuoy } from 'lucide-react';

interface HeaderProps {
  onOpenSupport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSupport }) => {
  return (
    <header className="border-b border-zinc-900 bg-black sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-sm text-white">
            V
          </div>
          <div>
            <span className="text-sm font-semibold tracking-wide text-white uppercase">
              De Cero a la Viralización
            </span>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />
              <span>Página de confirmación</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenSupport}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 rounded-md transition-colors"
          aria-label="Abrir centro de ayuda y soporte"
        >
          <LifeBuoy className="w-3.5 h-3.5 text-zinc-400" />
          <span>Ayuda y Soporte</span>
        </button>
      </div>
    </header>
  );
};
