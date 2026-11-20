import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { LANDING_DATA } from '@/standalone-landing/data/landingData';

interface LandingHeroProps {
  onScrollToContact: () => void;
  onScrollToServices: () => void;
}

export function LandingHero({ onScrollToContact, onScrollToServices }: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Background Subtle Gradient & Accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue/20 via-transparent to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left Column Content */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-aqua uppercase ring-1 ring-white/15">
            <MapPin className="h-3.5 w-3.5 text-aqua" aria-hidden="true" />
            <span>Serving {LANDING_DATA.primaryLocation} &amp; Tri-Cities</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            {LANDING_DATA.identity}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-200">
            Rapid, dependable residential plumbing repairs, water heater replacements, and precision leak diagnostics. Get straightforward answers, upfront pricing, and long-lasting craftsmanship from an experienced local technician.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <a
              href={LANDING_DATA.phoneTel}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-aqua px-8 py-4 text-base font-bold text-navy shadow-lg transition duration-200 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-aqua focus:ring-offset-2 focus:ring-offset-navy"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              <span>Call {LANDING_DATA.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onScrollToContact}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition duration-200 hover:border-white hover:bg-white hover:text-navy"
            >
              <span>Request Service Online</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onScrollToServices}
              className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-300 transition hover:text-aqua"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Trust Highlights Checklist */}
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 text-sm text-slate-300 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
              <span>Virginia Code Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
              <span>No Hidden Dispatch Surprises</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
              <span>Same-Day Diagnostic Availability</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-aqua" aria-hidden="true" />
              <span>Licensed &amp; Fully Insured</span>
            </div>
          </div>
        </div>

        {/* Right Column Featured Visual */}
        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-3xl bg-slate-800 shadow-2xl ring-1 ring-white/15">
            <img
              src={LANDING_DATA.heroImage}
              alt={LANDING_DATA.heroImageAlt}
              className="aspect-[4/3] h-full w-full object-cover lg:aspect-square"
              loading="eager"
            />
          </div>

          {/* Floating Trust Card */}
          <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl bg-white p-4 text-navy shadow-2xl sm:left-8 sm:right-auto sm:max-w-sm">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-navy">Locally Operated Service</span>
              <span className="text-xs text-slate-600">Committed to honest, durable Tri-Cities plumbing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Ribbon */}
      <div className="border-t border-white/10 bg-navy/90 py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:grid-cols-4 lg:px-8">
          {LANDING_DATA.trustBadges.map((badge) => (
            <div key={badge.title} className="flex flex-col">
              <span className="text-sm font-bold text-white">{badge.title}</span>
              <span className="text-xs text-slate-400">{badge.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
