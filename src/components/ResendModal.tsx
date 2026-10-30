/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { validateEmail } from '../utils/order';

interface ResendModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export const ResendModal: React.FC<ResendModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Por favor, introduce una dirección de correo electrónico válida.');
      return;
    }
    setError('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      onSuccess(email);
      setTimeout(() => {
        setSent(false);
        setEmail('');
        onClose();
      }, 2500);
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resend-modal-title"
    >
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white w-8 h-8 rounded-md bg-zinc-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 id="resend-modal-title" className="text-base font-semibold text-white">
              Reenviar enlace de acceso
            </h3>
            <p className="text-xs text-zinc-400">Recibe una nueva copia en tu bandeja</p>
          </div>
        </div>

        {sent ? (
          <div className="p-4 bg-emerald-950/50 border border-emerald-800/80 rounded-lg text-emerald-300 text-sm flex items-start gap-3 my-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">¡Correo reenviado con éxito!</p>
              <p className="text-xs text-emerald-200 mt-1">
                Hemos enviado los accesos a <strong className="text-white">{email}</strong>. Revisa tu bandeja de entrada en 1-2 minutos.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-zinc-300 leading-relaxed">
              Introduce la dirección de correo con la que realizaste el pedido. Te enviaremos de inmediato un nuevo enlace directo para descargar la guía.
            </p>

            <div>
              <label htmlFor="resend-email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                Correo Electrónico
              </label>
              <input
                id="resend-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                placeholder="ejemplo@correo.com"
                required
                className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
              />
              {error && (
                <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-white text-black hover:bg-zinc-200 rounded-lg font-semibold text-xs transition-colors cursor-pointer disabled:opacity-75"
              >
                {loading ? 'Reenviando...' : 'Reenviar Ahora'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
