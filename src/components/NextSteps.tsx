/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MailCheck, Smartphone, Target } from 'lucide-react';

export const NextSteps: React.FC = () => {
  const steps = [
    {
      icon: MailCheck,
      number: '01',
      title: 'Revisa tu bandeja de entrada',
      description:
        'Te hemos enviado un correo con tus credenciales, el enlace directo a la nube y tu recibo. Si no lo encuentras en 2 minutos, revisa tu carpeta de promociones o spam.',
    },
    {
      icon: Smartphone,
      number: '02',
      title: 'Guarda la guía en tus dispositivos',
      description:
        'Descarga el archivo PDF y guárdalo en tu ordenador, tableta o teléfono móvil para leerlo y consultarlo en cualquier momento, incluso sin conexión a internet.',
    },
    {
      icon: Target,
      number: '03',
      title: 'Pon a prueba tu primer gancho hoy',
      description:
        'Abre el capítulo 2 y elige uno de los 120 ganchos probados para tu próximo vídeo o publicación. Notarás la diferencia en retención desde la primera publicación.',
    },
  ];

  return (
    <section className="max-w-3xl mx-auto mb-10 px-4 sm:px-0">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Próximos pasos recomendados
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Sigue estas instrucciones para aprovechar al máximo tu nueva guía desde el minuto uno.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.number}
              className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
