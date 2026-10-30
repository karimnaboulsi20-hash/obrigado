/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: '¿Qué hago si no he recibido el correo electrónico de confirmación?',
      answer:
        'El correo se envía de forma automática en el momento de la confirmación. Te recomendamos revisar tu carpeta de correo no deseado (Spam) o la pestaña de "Promociones" en Gmail. Si pasados 5 minutos aún no lo ves, puedes pulsar el botón "Reenviar accesos" en esta misma página o contactar a nuestro equipo de soporte.',
    },
    {
      question: '¿En qué dispositivos puedo leer la guía De Cero a la Viralización?',
      answer:
        'El formato PDF interactivo es 100% compatible con cualquier dispositivo: ordenadores Windows o Mac, teléfonos inteligentes (iPhone, Android), tabletas (iPad o Android) y lectores de libros electrónicos compatibles con PDF.',
    },
    {
      question: '¿Tendré que volver a pagar por futuras actualizaciones?',
      answer:
        'No. Tu compra te otorga acceso vitalicio a la versión actual y a todas las revisiones y nuevas adiciones que realicemos a la guía De Cero a la Viralización sin ningún costo adicional.',
    },
    {
      question: '¿Puedo imprimir la guía para subrayarla a mano?',
      answer:
        '¡Por supuesto! El archivo está optimizado tanto para lectura en pantallas oscuras y claras como para impresión en formato A4 o carta de alta nitidez.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto mb-12 px-4 sm:px-0">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-5 h-5 text-zinc-400" />
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="divide-y divide-zinc-800/80 border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="transition-colors">
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 text-white hover:text-zinc-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
