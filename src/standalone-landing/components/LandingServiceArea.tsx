import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { LANDING_DATA, type LandingServiceArea } from '@/standalone-landing/data/landingData';

export function LandingServiceArea() {
  return (
    <section id="service-area" className="scroll-mt-24 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold tracking-widest text-blue uppercase">
            Service Coverage
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Plumbing Service Areas Across the Tri-Cities &amp; Beyond
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Centrally based in Colonial Heights, VA, we provide responsive residential plumbing repairs across the Tri-Cities and southern Greater Richmond communities.
          </p>
        </div>

        {/* Communities Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LANDING_DATA.serviceAreas.map((area: LandingServiceArea) => {
            const isMain = area.name === LANDING_DATA.baseCity;
            return (
              <div
                key={area.name}
                className={`relative flex flex-col justify-between rounded-3xl p-6 ring-1 transition duration-200 ${
                  isMain
                    ? 'bg-navy text-white ring-navy shadow-lg'
                    : 'bg-white text-navy ring-navy/10 shadow-sm hover:shadow-md hover:ring-blue/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                        isMain ? 'bg-aqua/20 text-aqua' : 'bg-blue/10 text-blue'
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {area.tag}
                    </span>
                    <span className={`text-xs font-semibold ${isMain ? 'text-slate-300' : 'text-slate-500'}`}>
                      ZIP {area.zipCode}
                    </span>
                  </div>

                  <h3 className={`mt-4 text-2xl font-bold ${isMain ? 'text-white' : 'text-navy'}`}>
                    {area.name}, {area.state}
                  </h3>

                  <p className={`mt-3 text-sm leading-relaxed ${isMain ? 'text-slate-200' : 'text-slate-600'}`}>
                    {area.highlight}
                  </p>
                </div>

                <div className={`mt-6 border-t pt-4 text-xs font-bold flex items-center justify-between ${
                  isMain ? 'border-white/15 text-aqua' : 'border-slate-100 text-blue'
                }`}>
                  <span>Fast On-Site Dispatch</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Google Maps Embed & Dispatch Card */}
        <div className="mt-12 grid gap-8 overflow-hidden rounded-3xl bg-mist p-6 ring-1 ring-navy/10 lg:grid-cols-12 lg:p-8">
          <div className="flex flex-col justify-center lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue">
              Dispatch Verification
            </span>
            <h3 className="mt-2 text-2xl font-bold text-navy">
              Centered in Colonial Heights, VA 23834
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Not sure if your specific street falls inside our primary dispatch perimeter? Give us a quick call with your address and plumbing issue, and we will confirm scheduling immediately.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={LANDING_DATA.phoneTel}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-navy"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call {LANDING_DATA.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Clean Google Maps Embed (No Business Parameters) */}
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-inner ring-1 ring-navy/10 lg:col-span-7">
            <iframe
              src={LANDING_DATA.cleanMapEmbedUrl}
              title={`Clean map centered on ${LANDING_DATA.primaryLocation}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
