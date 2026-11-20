import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { LANDING_DATA, type LandingService } from '@/standalone-landing/data/landingData';

interface LandingServicesProps {
  onSelectService: (serviceName: string) => void;
}

export function LandingServices({ onSelectService }: LandingServicesProps) {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-blue uppercase">
            Genuine Plumbing Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Professional Plumbing Services in {LANDING_DATA.primaryLocation}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            From emergency pipe leaks and stubborn drain clogs to full water heater replacements, every job is diagnosed thoroughly and completed according to strict Virginia building codes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LANDING_DATA.services.map((service: LandingService) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-navy/10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-blue/30"
            >
              {/* Service Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy backdrop-blur">
                  {LANDING_DATA.primaryLocation}
                </span>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold text-navy group-hover:text-blue transition-colors">
                  {service.name}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-snug text-slate-700">
                  {service.summary}
                </p>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {service.description}
                </p>

                {/* Checklist */}
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-slate-100 pt-5 text-xs text-slate-600">
                  {service.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Action */}
                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex w-full items-center justify-between rounded-xl bg-mist px-4 py-3 text-xs font-bold text-navy ring-1 ring-navy/10 transition duration-200 hover:bg-blue hover:text-white hover:ring-blue"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
