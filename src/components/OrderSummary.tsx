/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, CheckCircle2, Shield, Calendar, Hash } from 'lucide-react';
import { OrderInfo } from '../utils/order';

interface OrderSummaryProps {
  order: OrderInfo;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ order }) => {
  return (
    <section className="max-w-3xl mx-auto mb-10 px-4 sm:px-0">
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-lg">
        {/* Header of card */}
        <div className="p-5 sm:p-6 border-b border-zinc-800/80 bg-zinc-900/50 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Resumen de la Orden
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Confirmación oficial del pedido adquirido
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 border border-emerald-800/70 rounded-md text-emerald-300 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pago Aprobado</span>
          </div>
        </div>

        {/* Metadata grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80 border-b border-zinc-800/80 text-xs sm:text-sm">
          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-2 text-zinc-400 mb-1">
              <Hash className="w-3.5 h-3.5" />
              <span>Número de orden</span>
            </div>
            <p className="font-mono font-semibold text-white">{order.orderNumber}</p>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-2 text-zinc-400 mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Fecha de compra</span>
            </div>
            <p className="font-semibold text-white">{order.purchaseDate}</p>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-center gap-2 text-zinc-400 mb-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Garantía y acceso</span>
            </div>
            <p className="font-semibold text-white">Vitalicio • 30 días garantía</p>
          </div>
        </div>

        {/* Products and items included */}
        <div className="p-5 sm:p-6">
          <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-3">
            Todo lo que incluye tu adquisición:
          </h3>

          <ul className="space-y-2.5">
            {order.modulesIncluded.map((module, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-emerald-400" />
                </span>
                <span className="leading-snug">{module}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-400 gap-2">
            <span>Solo pago único realizado. Sin cuotas recurrentes ni suscripciones ocultas.</span>
            <span className="text-zinc-200 font-mono">100% Digital e Instantáneo</span>
          </div>
        </div>
      </div>
    </section>
  );
};
