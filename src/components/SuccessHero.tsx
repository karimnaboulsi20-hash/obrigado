/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const SuccessHero: React.FC = () => {
  return (
    <section className="text-center pt-8 pb-10 px-4 sm:px-6">
      {/* Icon Badge */}
      <div className="inline-flex items-center justify-center mb-6">
        <div className="relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-950 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" strokeWidth={2.2} />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-zinc-900 border border-zinc-700 rounded-full p-1 text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Status Pill */}
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Compra confirmada • Acceso inmediato activado
        </span>
      </div>

      {/* Main Title - Exact translation of prompt: "Parabéns, você adquiriu o guia do zero à viralização" */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
        ¡Felicitaciones! Has adquirido la guía <span className="text-zinc-100 font-extrabold">De Cero a la Viralización</span>
      </h1>

      {/* Subtitle with clear reassurance */}
      <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
        Tu pago ha sido procesado correctamente. Todo el contenido y las herramientas ya están listos para ser descargados y consultados.
      </p>
    </section>
  );
};
