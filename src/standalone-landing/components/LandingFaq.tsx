import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { LANDING_DATA, type LandingFaq } from '@/standalone-landing/data/landingData';

export function LandingFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleFaq(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq" className="scroll-mt-24 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-bold tracking-widest text-blue uppercase">
            Questions &amp; Answers
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Real answers to common homeowner questions regarding permits, diagnostic timing, and plumbing maintenance in Colonial Heights.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="mt-12 flex flex-col gap-4">
          {LANDING_DATA.faqs.map((faq: LandingFaq, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl bg-white ring-1 ring-navy/10 shadow-sm transition duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-bold text-navy transition hover:text-blue sm:p-6"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 shrink-0 text-blue" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-6 pt-3 text-sm leading-relaxed text-slate-600 sm:px-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help CTA */}
        <div className="mt-10 rounded-2xl bg-mist p-6 text-center ring-1 ring-navy/10 sm:p-8">
          <p className="text-sm font-semibold text-navy">
            Have a question specific to your home&apos;s piping or water heater?
          </p>
          <a
            href={LANDING_DATA.phoneTel}
            className="mt-3 inline-flex items-center gap-2 text-base font-bold text-blue hover:text-navy hover:underline"
          >
            Call {LANDING_DATA.phoneDisplay} to discuss your issue directly
          </a>
        </div>
      </div>
    </section>
  );
}
