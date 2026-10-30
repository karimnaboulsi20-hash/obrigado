/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, Sparkles, ShieldCheck, X } from 'lucide-react';

export default function App() {
  const [notification, setNotification] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 sm:p-6 font-sans selection:bg-zinc-800 selection:text-white relative">
      {/* Toast Notification */}
      {notification && (
        <aside
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-sm bg-zinc-900 border border-zinc-700 text-white px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{notification}</span>
          <button
            type="button"
            onClick={() => setNotification(null)}
            className="text-zinc-400 hover:text-white ml-auto cursor-pointer p-1"
            aria-label="Cerrar notificación"
          >
            <X className="w-4 h-4" />
          </button>
        </aside>
      )}

      {/* Main Container */}
      <main className="max-w-2xl w-full text-center space-y-8 my-auto py-12">
        {/* Icon Badge */}
        <div className="inline-flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-zinc-950 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/10">
              <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14" strokeWidth={2.2} />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-zinc-900 border border-zinc-700 rounded-full p-1.5 text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Status Pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Compra confirmada • Acceso inmediato activado
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          ¡Felicitaciones! Has adquirido la guía <span className="text-zinc-100 font-extrabold">De Cero a la Viralización</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed">
          Tu pago ha sido procesado correctamente.
        </p>

        {/* Minimal Footer Note */}
        <footer className="pt-12 text-xs text-zinc-500 border-t border-zinc-900 max-w-md mx-auto">
          De Cero a la Viralización • Edición Digital Segura
        </footer>
      </main>
    </div>
  );
}
