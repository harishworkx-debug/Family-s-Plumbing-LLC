import { LANDING_DATA, type LandingPillar } from '@/standalone-landing/data/landingData';

export function LandingWhyUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-mist px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-blue uppercase">
            Verifiable Standards
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Why Colonial Heights Homeowners Choose Our Plumbing Work
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We operate on a straightforward philosophy: diagnose accurately, quote honestly, and complete repairs that endure without disruptive shortcuts.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_DATA.pillars.map((pillar: LandingPillar, index: number) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between rounded-3xl bg-white p-7 ring-1 ring-navy/10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-blue/30"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue/10 text-base font-extrabold text-blue">
                  0{index + 1}
                </span>

                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-blue">
                  {pillar.badge}
                </span>

                <h3 className="mt-2 text-lg font-bold text-navy leading-snug">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {pillar.body}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Verified Local Standard
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
